"use client";

import { useMemo, useState } from "react";
import { Blocks } from "@/components/blocks";
import { MatrixPanel } from "@/components/matrix-panel";
import { ScoreLab } from "@/components/score-lab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { sectionPlainText, sections } from "@/lib/rulebook";
import { SPOKEN, tricks } from "@/lib/score";

export function RulebookApp() {
  const [query, setQuery] = useState("");
  const [calcCode, setCalcCode] = useState("SHI");
  const needle = query.trim().toLowerCase();

  const visible = useMemo(() => {
    if (needle.length < 2) return sections;
    return sections.filter((section) => {
      const own = sectionPlainText(section).toLowerCase().includes(needle);
      if (own) return true;
      if (section.id !== "matrix" && section.id !== "lab") return false;
      return tricks.some((trick) =>
        `${trick.code} ${trick.name} ${SPOKEN[trick.code] ?? ""}`
          .toLowerCase()
          .includes(needle),
      );
    });
  }, [needle]);

  function useTrick(code: string) {
    setCalcCode(code);
    document.getElementById("lab")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="min-h-screen">
      <header className="no-print sticky top-0 z-30 border-b border-border/80 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center">
          <a href="#top" className="min-w-0 sm:flex-1">
            <p className="text-sm font-semibold tracking-tight">
              인라인 프리스타일 클래식 2.0
            </p>
            <p className="text-xs text-muted-foreground">
              채점 규정 · 매트릭스 · 심판 포지션
            </p>
          </a>
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="조항, 기술, 감점 검색"
            aria-label="룰북 검색"
            className="h-10 w-full bg-card sm:max-w-xs"
          />
        </div>
        <nav className="flex gap-1 overflow-x-auto px-4 pb-3 md:hidden">
          {visible.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 rounded-full border border-border bg-card px-3 py-1 text-xs"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 md:grid-cols-[13rem_minmax(0,1fr)]">
        <aside className="no-print hidden md:block">
          <nav className="sticky top-24 space-y-1">
            {visible.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <span className="mr-2 tabular-nums text-xs">{section.number}</span>
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        <main id="top" className="min-w-0">
          <header className="mb-10">
            <p className="text-xs tracking-[0.18em] text-primary uppercase">
              PRO Skate v.2 · 2026년 11월 4일
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-display-face)] text-4xl leading-tight sm:text-5xl">
              인라인 프리스타일
              <br />
              클래식 2.0
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8">
              프리스타일 슬라럼을 기술마다 계산하는 채점 규정의 한국어 번역이다.
              무엇이 수행됐는지는 스페셜리스트가 부르고, 값은 트릭 매트릭스가
              정하며, 심판은 수행 품질과 풋워크와 예술 요소를 본다. 기존 Classic과
              달라진 심판 포지션 분석도 같은 페이지에 있다.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button render={<a href="#summary" />} nativeButton={false}>
                당일 요약
              </Button>
              <Button
                variant="outline"
                render={<a href="#judges" />}
                nativeButton={false}
              >
                심판 포지션
              </Button>
              <Button
                variant="outline"
                render={<a href="#matrix" />}
                nativeButton={false}
              >
                트릭 매트릭스
              </Button>
              <Button
                variant="outline"
                render={<a href="#lab" />}
                nativeButton={false}
              >
                점수 실험실
              </Button>
            </div>
            <aside className="mt-6 rounded-xl border border-amber-700/30 bg-amber-100/70 px-4 py-3 text-sm leading-6 text-amber-950">
              이 문서는 World Skate 공식 룰북이 아니다. 원문은 PRO Skate System이
              시험 중인 기술 규정이고, 원문 스스로 아직 공식 규정이 아니라고
              밝힌다. 번역 기준은 2026년 11월 4일판이며, 매트릭스 숫자는 2026년
              11월 17일에 공개된 기술 카드다. 콘 배치와 예선 운영은 이 채점
              규정에 없다.
            </aside>
          </header>

          {visible.length === 0 ? (
            <p className="rounded-lg border border-dashed border-border px-4 py-8 text-center text-muted-foreground">
              “{query.trim()}”에 해당하는 조항이 없다. 검색어를 지우면 전체가
              다시 보인다.
            </p>
          ) : null}

          <div className="space-y-12">
            {visible.map((section) => (
              <article id={section.id} key={section.id} className="scroll-mt-28">
                <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {section.number} · {section.kicker}
                </p>
                <h2 className="mt-1 font-[family-name:var(--font-display-face)] text-3xl">
                  {section.title}
                </h2>
                <Separator className="my-4" />
                <Blocks blocks={section.blocks} />
                {section.special === "matrix" ? (
                  <div className="mt-6">
                    <MatrixPanel onUse={useTrick} />
                  </div>
                ) : null}
                {section.special === "lab" ? (
                  <div className="mt-6">
                    <ScoreLab code={calcCode} onCode={setCalcCode} />
                  </div>
                ) : null}
              </article>
            ))}
          </div>

          <footer className="mt-16 border-t border-border pt-6 text-sm leading-6 text-muted-foreground">
            <p>
              원문: Regolamento Tecnico, Sistema di Valutazione PRO Skate v.2,
              Freestyle Slalom.{" "}
              <a
                className="underline-offset-2 hover:underline"
                href="https://proskatesystem.base44.app/Regulations"
                target="_blank"
                rel="noreferrer"
              >
                proskatesystem.base44.app/Regulations
              </a>
            </p>
            <p className="mt-2">
              배틀 2.0과 장비 설치 절차는 이 번역에 넣지 않았다. 클래식 채점만
              옮겼다. 원문과 카드가 어긋나는 곳은 본문에 옮긴이 주로 남겨 두었다.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
