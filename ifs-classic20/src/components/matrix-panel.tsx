"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CATEGORY_KO,
  SPOKEN,
  formatPoints,
  tricks,
  type Trick,
} from "@/lib/score";

const categories = ["ALL", "WHEELING", "SPINS", "JUMP", "SITTING", "OTHERS"] as const;

export function MatrixPanel({
  onUse,
}: {
  onUse: (code: string) => void;
}) {
  const [category, setCategory] = useState<(typeof categories)[number]>("ALL");
  const [code, setCode] = useState("SHI");

  const visible = useMemo(
    () =>
      tricks.filter((trick) => category === "ALL" || trick.category === category),
    [category],
  );
  const selected = tricks.find((trick) => trick.code === code) ?? visible[0];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-1.5">
        {categories.map((item) => (
          <Button
            key={item}
            type="button"
            size="sm"
            variant={category === item ? "default" : "outline"}
            onClick={() => setCategory(item)}
          >
            {item === "ALL" ? "전체" : CATEGORY_KO[item]}
          </Button>
        ))}
      </div>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[40rem] border-collapse text-left text-sm tabular-nums">
          <thead className="bg-muted/80 text-xs tracking-wide text-muted-foreground">
            <tr>
              {["코드", "기술", "부문", "베이스", "탭", "언더", "콤보"].map((header) => (
                <th key={header} className="px-3 py-2 font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((trick) => (
              <tr
                key={trick.code}
                className={
                  trick.code === selected?.code
                    ? "bg-primary/10"
                    : "hover:bg-muted/50"
                }
              >
                <td className="px-3 py-2">
                  <button
                    type="button"
                    className="font-semibold underline-offset-2 hover:underline"
                    onClick={() => setCode(trick.code)}
                  >
                    {trick.code}
                  </button>
                </td>
                <td className="px-3 py-2">
                  {trick.name}
                  <span className="ml-2 text-muted-foreground">
                    {SPOKEN[trick.code]}
                  </span>
                </td>
                <td className="px-3 py-2">{CATEGORY_KO[trick.category]}</td>
                <td className="px-3 py-2">{formatPoints(trick.base)}</td>
                <td className="px-3 py-2">{formatPoints(trick.tap)}</td>
                <td className="px-3 py-2">{formatPoints(trick.under)}</td>
                <td className="px-3 py-2">{formatPoints(trick.combo)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selected ? <TrickCard trick={selected} onUse={onUse} /> : null}
    </div>
  );
}

function TrickCard({
  trick,
  onUse,
}: {
  trick: Trick;
  onUse: (code: string) => void;
}) {
  const attributes = Object.entries(trick.attributes).sort((a, b) =>
    a[0].localeCompare(b[0], "en"),
  );
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
            {trick.code} · {CATEGORY_KO[trick.category]}
          </p>
          <h3 className="font-[family-name:var(--font-display-face)] text-2xl">
            {trick.name}
            <span className="ml-2 text-base text-muted-foreground">
              {SPOKEN[trick.code]}
            </span>
          </h3>
        </div>
        <Button type="button" onClick={() => onUse(trick.code)}>
          이 기술로 계산
        </Button>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 lg:grid-cols-6">
        {[
          ["베이스", trick.base],
          ["언더", trick.under],
          ["탭", trick.tap],
          ["콤보", trick.combo],
          ["콤보 언더", trick.comboUnder],
          ["콤보 탭", trick.comboTap],
        ].map(([label, value]) => (
          <div key={String(label)} className="rounded-md bg-muted px-3 py-2">
            <dt className="text-xs text-muted-foreground">{label}</dt>
            <dd className="tabular-nums font-semibold">
              {formatPoints(Number(value))}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-4">
        <p className="text-xs font-medium text-muted-foreground">
          QoE가 더하는 점수
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {(["3", "2", "1", "0", "-1", "-2", "-3"] as const).map((level) => (
            <Badge key={level} variant="outline">
              {Number(level) > 0 ? `+${level}` : level}{" "}
              {formatPoints(trick.qoe[level])}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xs font-medium text-muted-foreground">
          콘 간격 가산
        </p>
        <p className="mt-1 text-sm tabular-nums">
          50cm {trick.distance["50cm"]}% · 80cm {trick.distance["80cm"]}% ·
          120cm {trick.distance["120cm"]}%
        </p>
      </div>
      <div className="mt-4">
        <p className="text-xs font-medium text-muted-foreground">속성 가산</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {attributes.map(([name, value]) => (
            <Badge key={name} variant="secondary">
              {name} {value > 0 ? `+${value}%` : `${value}%`}
            </Badge>
          ))}
        </div>
      </div>
      {trick.video ? (
        <a
          className="mt-4 inline-block text-sm underline-offset-2 hover:underline"
          href={trick.video}
          target="_blank"
          rel="noreferrer"
        >
          기준 영상
        </a>
      ) : null}
    </div>
  );
}
