import tricksData from "../data/tricks.json";
import attributeData from "../data/attributes.json";

export type Distance = "50cm" | "80cm" | "120cm";
export type Execution =
  | "base"
  | "under"
  | "tap"
  | "combo"
  | "combo-under"
  | "combo-tap";
export type QoeLevel = "-3" | "-2" | "-1" | "0" | "1" | "2" | "3";

export type Trick = {
  code: string;
  name: string;
  category: "JUMP" | "OTHERS" | "SITTING" | "SPINS" | "WHEELING";
  base: number;
  tap: number;
  under: number;
  combo: number;
  comboTap: number;
  comboUnder: number;
  qoe: Record<QoeLevel, number>;
  distance: Record<Distance, number>;
  attributes: Record<string, number>;
  video: string;
};

export type AttributeRule = {
  name: string;
  group: string;
  exclusiveWith: string[];
};

export const tricks = tricksData as unknown as Trick[];
export const attributeRules = attributeData as unknown as AttributeRule[];

export const CATEGORY_KO: Record<Trick["category"], string> = {
  JUMP: "점프",
  OTHERS: "아더스",
  SITTING: "시팅",
  SPINS: "스핀",
  WHEELING: "휠링",
};

export const SPOKEN: Record<string, string> = {
  WIP: "와이퍼",
  Kaz: "카자치옥",
  CRA: "크랩",
  BUT: "버터플라이",
  COB: "코브라",
  IXS: "엑스",
  ZEA: "지이글",
  EAG: "이글",
  FOO: "풋건",
  SUP: "슈퍼맨",
  TEA: "티팟",
  INF: "인피니티",
  SEV: "세븐",
  SPI: "스핀",
  LEA: "리프",
  SHI: "시프트",
  DAY: "데이나잇",
  FRE: "프렌치 시프트",
  FLI: "플립 / 피쉬",
  TRI: "트라이앵글",
  SQR: "스퀘어",
  SNK: "스네이크",
  WHE: "원풋",
};

export const EXECUTION_KO: Record<Execution, string> = {
  base: "베이스",
  under: "언더",
  tap: "탭",
  combo: "콤보 베이스",
  "combo-under": "콤보 언더",
  "combo-tap": "콤보 탭",
};

export const QOE_KO: Record<QoeLevel, string> = {
  "3": "탁월",
  "2": "우수",
  "1": "양호",
  "0": "표준",
  "-1": "경미한 결함",
  "-2": "결함",
  "-3": "불량",
};

const WHEEL_FAMILY = ["2 Wheels HH", "2 Wheels TH", "2 Wheels TT", "5 Wheels"];

function expandExclusive(name: string) {
  return name === "2 Wheels" ? WHEEL_FAMILY : [name];
}

export function trickByCode(code: string) {
  return tricks.find((trick) => trick.code === code);
}

export function initialValue(trick: Trick, execution: Execution) {
  switch (execution) {
    case "base":
      return trick.base;
    case "under":
      return trick.under;
    case "tap":
      return trick.tap;
    case "combo":
      return trick.combo;
    case "combo-under":
      return trick.comboUnder;
    case "combo-tap":
      return trick.comboTap;
  }
}

export function blockedAttributes(selected: string[]) {
  const blocked = new Set<string>();
  const byName = new Map(
    attributeRules.map((rule) => [rule.name, rule.exclusiveWith]),
  );

  for (const name of selected) {
    for (const other of byName.get(name) ?? []) {
      for (const expanded of expandExclusive(other)) {
        if (expanded !== name) blocked.add(expanded);
      }
    }
  }

  for (const rule of attributeRules) {
    if (selected.includes(rule.name)) continue;
    const hits = rule.exclusiveWith
      .flatMap(expandExclusive)
      .some((name) => selected.includes(name));
    if (hits) blocked.add(rule.name);
  }

  return blocked;
}

export type ScoreBreakdown = {
  initial: number;
  distancePercent: number;
  withDistance: number;
  qoePoints: number;
  withQoe: number;
  attributePercent: number;
  withAttributes: number;
  overtime: boolean;
  total: number;
};

function round2(value: number) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function scoreTrick(input: {
  trick: Trick;
  execution: Execution;
  distance: Distance;
  attributes: string[];
  qoe: [QoeLevel, QoeLevel, QoeLevel];
  overtime: boolean;
}): ScoreBreakdown {
  const initial = initialValue(input.trick, input.execution);
  const distancePercent = input.trick.distance[input.distance] ?? 0;
  const withDistance = initial * (1 + distancePercent / 100);
  const qoePoints =
    input.qoe.reduce((sum, level) => sum + input.trick.qoe[level], 0) / 3;
  const withQoe = withDistance + qoePoints;
  const attributePercent = input.attributes.reduce(
    (sum, name) => sum + (input.trick.attributes[name] ?? 0),
    0,
  );
  const withAttributes = withQoe * (1 + attributePercent / 100);
  const total = input.overtime ? withAttributes * 1.1 : withAttributes;

  return {
    initial,
    distancePercent,
    withDistance,
    qoePoints,
    withQoe,
    attributePercent,
    withAttributes,
    overtime: input.overtime,
    total: round2(total),
  };
}

export function formatPoints(value: number) {
  return value.toLocaleString("ko-KR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
