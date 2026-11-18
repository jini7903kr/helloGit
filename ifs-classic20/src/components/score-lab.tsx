"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CATEGORY_KO,
  EXECUTION_KO,
  QOE_KO,
  SPOKEN,
  attributeRules,
  blockedAttributes,
  formatPoints,
  scoreTrick,
  tricks,
  type Distance,
  type Execution,
  type QoeLevel,
} from "@/lib/score";

const executions: Execution[] = [
  "base",
  "under",
  "tap",
  "combo",
  "combo-under",
  "combo-tap",
];
const distances: Distance[] = ["50cm", "80cm", "120cm"];
const qoeLevels: QoeLevel[] = ["3", "2", "1", "0", "-1", "-2", "-3"];

const groupKo: Record<string, string> = {
  Direction: "방향",
  Position: "자세",
  Others: "기타",
  Wheels: "휠",
  Rotations: "회전",
  Edges: "에지",
  Legs: "발",
};

export function ScoreLab({
  code,
  onCode,
}: {
  code: string;
  onCode: (code: string) => void;
}) {
  const trick = tricks.find((item) => item.code === code) ?? tricks[0];
  const [execution, setExecution] = useState<Execution>("base");
  const [distance, setDistance] = useState<Distance>("80cm");
  const [attributes, setAttributes] = useState<string[]>([]);
  const [qoe, setQoe] = useState<[QoeLevel, QoeLevel, QoeLevel]>(["0", "0", "0"]);
  const [split, setSplit] = useState(false);
  const [overtime, setOvertime] = useState(false);

  const cardAttributes = useMemo(() => {
    const names = new Set(Object.keys(trick.attributes));
    return attributeRules.filter((rule) => names.has(rule.name));
  }, [trick]);

  const selected = attributes.filter((name) => name in trick.attributes);

  const result = scoreTrick({
    trick,
    execution,
    distance,
    attributes: selected,
    qoe,
    overtime,
  });

  function chooseTrick(next: string) {
    onCode(next);
    setAttributes([]);
  }

  function conflicts(left: string, right: string) {
    const blocked = blockedAttributes([left]);
    return blocked.has(right) || blockedAttributes([right]).has(left);
  }

  function toggleAttribute(name: string) {
    setAttributes((current) => {
      if (current.includes(name)) return current.filter((item) => item !== name);
      return [...current.filter((item) => !conflicts(item, name)), name];
    });
  }

  function setAllQoe(level: QoeLevel) {
    setQoe([level, level, level]);
  }

  const groups = [...new Set(cardAttributes.map((rule) => rule.group))];

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
      <div className="space-y-5">
        <label className="block text-sm">
          <span className="font-medium">기술</span>
          <select
            className="mt-1 h-10 w-full rounded-lg border border-input bg-card px-3"
            value={trick.code}
            onChange={(event) => chooseTrick(event.target.value)}
          >
            {tricks.map((item) => (
              <option key={item.code} value={item.code}>
                {CATEGORY_KO[item.category]} · {item.name} ({SPOKEN[item.code]})
              </option>
            ))}
          </select>
        </label>

        <fieldset>
          <legend className="text-sm font-medium">수행 수준</legend>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {executions.map((item) => (
              <Button
                key={item}
                type="button"
                size="sm"
                variant={execution === item ? "default" : "outline"}
                onClick={() => setExecution(item)}
              >
                {EXECUTION_KO[item]}
              </Button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium">콘 간격</legend>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {distances.map((item) => (
              <Button
                key={item}
                type="button"
                size="sm"
                variant={distance === item ? "default" : "outline"}
                onClick={() => setDistance(item)}
              >
                {item}{" "}
                {trick.distance[item] ? `+${trick.distance[item]}%` : "0%"}
              </Button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium">
            수행 품질. 세 심판이 같으면 한 번만 고르면 된다
          </legend>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {qoeLevels.map((level) => (
              <Button
                key={level}
                type="button"
                size="sm"
                variant={qoe.every((item) => item === level) ? "default" : "outline"}
                onClick={() => setAllQoe(level)}
              >
                {Number(level) > 0 ? `+${level}` : level} {QOE_KO[level]}
              </Button>
            ))}
          </div>
          <button
            type="button"
            className="mt-2 text-sm text-muted-foreground underline-offset-2 hover:underline"
            onClick={() => setSplit((value) => !value)}
          >
            {split ? "심판 점수를 다시 하나로" : "심판 점수가 다를 때"}
          </button>
          {split ? (
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {qoe.map((level, index) => (
                <label key={index} className="text-sm">
                  심판 {index + 1}
                  <select
                    className="mt-1 h-10 w-full rounded-lg border border-input bg-card px-2"
                    value={level}
                    onChange={(event) => {
                      const next = event.target.value as QoeLevel;
                      setQoe((current) => {
                        const copy = [...current] as [QoeLevel, QoeLevel, QoeLevel];
                        copy[index] = next;
                        return copy;
                      });
                    }}
                  >
                    {qoeLevels.map((item) => (
                      <option key={item} value={item}>
                        {Number(item) > 0 ? `+${item}` : item} {QOE_KO[item]} (
                        {formatPoints(trick.qoe[item])})
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
          ) : null}
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium">이 카드의 속성</legend>
          <div className="mt-2 space-y-3">
            {groups.map((group) => (
              <div key={group}>
                <p className="text-xs text-muted-foreground">
                  {groupKo[group] ?? group}
                </p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {cardAttributes
                    .filter((rule) => rule.group === group)
                    .map((rule) => {
                      const on = selected.includes(rule.name);
                      const percent = trick.attributes[rule.name] ?? 0;
                      return (
                        <Button
                          key={rule.name}
                          type="button"
                          size="sm"
                          variant={on ? "default" : "outline"}
                          onClick={() => toggleAttribute(rule.name)}
                        >
                          {rule.name} {percent > 0 ? `+${percent}%` : `${percent}%`}
                        </Button>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </fieldset>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={overtime}
            onChange={(event) => setOvertime(event.target.checked)}
          />
          90초 이후 수행. 최종 값에 10%를 더한다
        </label>
      </div>

      <aside className="h-fit rounded-xl border border-border bg-card p-4 lg:sticky lg:top-28">
        <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
          {trick.code} · {EXECUTION_KO[execution]}
        </p>
        <p className="mt-1 font-[family-name:var(--font-display-face)] text-4xl tabular-nums">
          {formatPoints(result.total)}
        </p>
        <ol className="mt-4 space-y-2 text-sm leading-6">
          <li>1. 처음 값 {formatPoints(result.initial)}</li>
          <li>
            2. 간격 {distance} {result.distancePercent}% →{" "}
            {formatPoints(result.withDistance)}
          </li>
          <li>
            3. QoE 평균 {formatPoints(result.qoePoints)} →{" "}
            {formatPoints(result.withQoe)}
          </li>
          <li>
            4. 속성 +{result.attributePercent}% →{" "}
            {formatPoints(result.withAttributes)}
          </li>
          <li>5. {result.overtime ? "오버타임 × 1.10" : "90초 이전, 추가 없음"}</li>
        </ol>
      </aside>
    </div>
  );
}
