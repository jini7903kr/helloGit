(() => {
  const {
    ATTR_KO,
    CATEGORIES,
    CATEGORY_KO,
    FOOTWORK_TABLE,
    QOE_KO,
    SPOKEN,
    attributeRules,
    formatPoints,
    tricks,
    optimizeProgram,
  } = window.ClassicOptimizer;

  const QOE_LEVELS = ["3", "2", "1", "0", "-1", "-2", "-3"];
  const MODE_KO = {
    tes: "TES만",
    "tes-footwork": "TES × 풋워크",
    final: "최종 점수",
  };
  const PHASE_KO = {
    trial: { title: "시험 단계", detail: "기술 15 · 3–5콤보 최대 2" },
    official: { title: "향후 공식", detail: "기술 10 · 3콤보 최대 1" },
  };

  const allAttrNames = [...new Set(attributeRules.map((rule) => rule.name))];

  const state = {
    phase: "trial",
    mode: "tes",
    qoe: "0",
    overtimeCount: 3,
    footworkScore: 3,
    pcsFlow: 7,
    pcsComposition: 7,
    pcsPerformance: 7,
    mac: 2,
    musicOk: true,
    preferCombo: true,
    filterTricks: false,
    filterAttrs: false,
    allowedTrickCodes: tricks.map((trick) => trick.code),
    allowedAttributes: [...allAttrNames],
    result: null,
    pending: false,
  };

  const controls = document.getElementById("controls");
  const results = document.getElementById("results");

  function chip({
    label,
    active,
    muted,
    detail,
    onClick,
  }) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${active ? " active" : ""}${muted && !active ? " muted" : ""}`;
    button.textContent = label;
    if (detail) {
      const span = document.createElement("span");
      span.className = "detail";
      span.textContent = detail;
      button.appendChild(span);
    }
    button.addEventListener("click", onClick);
    return button;
  }

  function field(label, children, hint) {
    const wrap = document.createElement("label");
    wrap.className = "field";
    const title = document.createElement("span");
    title.textContent = label;
    wrap.appendChild(title);
    if (Array.isArray(children)) children.forEach((child) => wrap.appendChild(child));
    else wrap.appendChild(children);
    if (hint) {
      const hintEl = document.createElement("span");
      hintEl.className = "hint";
      hintEl.textContent = hint;
      wrap.appendChild(hintEl);
    }
    return wrap;
  }

  function chipsRow(items) {
    const row = document.createElement("div");
    row.className = "chips";
    items.forEach((item) => row.appendChild(item));
    return row;
  }

  function maxTricks() {
    return state.phase === "trial" ? 15 : 10;
  }

  function footworkMultiplier() {
    return (
      FOOTWORK_TABLE.find((row) => row.score === state.footworkScore)?.multiplier ??
      1.1
    );
  }

  function run() {
    state.pending = true;
    renderControls();
    window.setTimeout(() => {
      state.result = optimizeProgram({
        phase: state.phase,
        mode: state.mode,
        qoe: state.qoe,
        overtimeCount: Math.min(state.overtimeCount, maxTricks()),
        footworkMultiplier: footworkMultiplier(),
        pcsFlow: state.pcsFlow,
        pcsComposition: state.pcsComposition,
        pcsPerformance: state.pcsPerformance,
        mac: state.mac,
        musicOk: state.musicOk,
        preferCombo: state.preferCombo,
        allowedTrickCodes: state.filterTricks ? state.allowedTrickCodes : null,
        allowedAttributes: state.filterAttrs ? state.allowedAttributes : null,
      });
      state.pending = false;
      renderControls();
      renderResults();
    }, 10);
  }

  function toggleIn(list, value) {
    return list.includes(value)
      ? list.filter((item) => item !== value)
      : [...list, value];
  }

  function renderControls() {
    controls.innerHTML = "";
    controls.classList.add("controls");

    controls.appendChild(
      field(
        "규정 단계",
        chipsRow(
          Object.keys(PHASE_KO).map((key) =>
            chip({
              label: PHASE_KO[key].title,
              detail: PHASE_KO[key].detail,
              active: state.phase === key,
              onClick: () => {
                state.phase = key;
                renderControls();
              },
            }),
          ),
        ),
      ),
    );

    controls.appendChild(
      field(
        "최적화 목표",
        chipsRow(
          Object.keys(MODE_KO).map((key) =>
            chip({
              label: MODE_KO[key],
              active: state.mode === key,
              onClick: () => {
                state.mode = key;
                renderControls();
              },
            }),
          ),
        ),
      ),
    );

    controls.appendChild(
      field(
        "QoE 가정 (세 심판 동일)",
        chipsRow(
          QOE_LEVELS.map((level) =>
            chip({
              label: QOE_KO[level],
              active: state.qoe === level,
              onClick: () => {
                state.qoe = level;
                renderControls();
              },
            }),
          ),
        ),
      ),
    );

    const ot = Math.min(state.overtimeCount, maxTricks());
    const range = document.createElement("input");
    range.type = "range";
    range.min = "0";
    range.max = String(maxTricks());
    range.value = String(ot);
    range.addEventListener("input", () => {
      state.overtimeCount = Number(range.value);
      renderControls();
    });
    controls.appendChild(
      field(
        `오버타임 슬롯 (90초 이후 ×1.10) · ${ot}개`,
        range,
        `최대 ${maxTricks()}개. 점수가 높은 블록을 뒤쪽에 배치합니다.`,
      ),
    );

    controls.appendChild(
      field(
        "콤보 우선",
        chipsRow([
          chip({
            label: state.preferCombo ? "콤보로 묶기 켜짐" : "단독 기술만",
            active: state.preferCombo,
            onClick: () => {
              state.preferCombo = !state.preferCombo;
              renderControls();
            },
          }),
        ]),
      ),
    );

    if (state.mode === "tes-footwork" || state.mode === "final") {
      controls.appendChild(
        field(
          "풋워크 가정",
          chipsRow(
            FOOTWORK_TABLE.map((row) =>
              chip({
                label: row.label,
                active: state.footworkScore === row.score,
                onClick: () => {
                  state.footworkScore = row.score;
                  renderControls();
                },
              }),
            ),
          ),
        ),
      );
    }

    if (state.mode === "final") {
      const box = document.createElement("div");
      box.className = "box";
      const title = document.createElement("p");
      title.className = "box-title";
      title.textContent = "예술 점수 가정";
      box.appendChild(title);

      const grid = document.createElement("div");
      grid.className = "grid-3";
      [
        ["흐름", "pcsFlow"],
        ["구성", "pcsComposition"],
        ["퍼포먼스", "pcsPerformance"],
      ].forEach(([label, key]) => {
        const wrap = document.createElement("label");
        wrap.className = "number-box";
        const span = document.createElement("span");
        span.textContent = label;
        const input = document.createElement("input");
        input.type = "number";
        input.min = "0";
        input.max = "10";
        input.step = "0.5";
        input.value = String(state[key]);
        input.addEventListener("change", () => {
          state[key] = Number(input.value);
        });
        wrap.append(span, input);
        grid.appendChild(wrap);
      });
      box.appendChild(grid);

      box.appendChild(
        field(
          "MAC",
          chipsRow(
            [1.5, 2.0].map((value) =>
              chip({
                label: `${value.toFixed(1)}×`,
                active: state.mac === value,
                onClick: () => {
                  state.mac = value;
                  renderControls();
                },
              }),
            ),
          ),
        ),
      );

      const music = document.createElement("div");
      music.className = "chips";
      music.append(
        chip({
          label: "105–125초 OK",
          active: state.musicOk,
          onClick: () => {
            state.musicOk = true;
            renderControls();
          },
        }),
        chip({
          label: "위반 (−10)",
          active: !state.musicOk,
          onClick: () => {
            state.musicOk = false;
            renderControls();
          },
        }),
      );
      box.appendChild(field("음악 길이", music));
      controls.appendChild(box);
    }

    const filters = document.createElement("div");
    filters.className = "box";
    filters.appendChild(
      chipsRow([
        chip({
          label: "할 수 있는 기술만",
          active: state.filterTricks,
          onClick: () => {
            state.filterTricks = !state.filterTricks;
            renderControls();
          },
        }),
        chip({
          label: "할 수 있는 속성만",
          active: state.filterAttrs,
          onClick: () => {
            state.filterAttrs = !state.filterAttrs;
            renderControls();
          },
        }),
      ]),
    );

    if (state.filterTricks) {
      const actions = document.createElement("div");
      actions.className = "chips";
      const selectAll = document.createElement("button");
      selectAll.type = "button";
      selectAll.className = "linkish";
      selectAll.textContent = "전부 선택";
      selectAll.addEventListener("click", () => {
        state.allowedTrickCodes = tricks.map((trick) => trick.code);
        renderControls();
      });
      const clearAll = document.createElement("button");
      clearAll.type = "button";
      clearAll.className = "linkish muted";
      clearAll.textContent = "전부 해제";
      clearAll.addEventListener("click", () => {
        state.allowedTrickCodes = [];
        renderControls();
      });
      actions.append(selectAll, clearAll);
      filters.appendChild(actions);

      CATEGORIES.forEach((category) => {
        const group = document.createElement("div");
        const label = document.createElement("p");
        label.className = "group-label";
        label.textContent = CATEGORY_KO[category];
        group.appendChild(label);
        group.appendChild(
          chipsRow(
            tricks
              .filter((trick) => trick.category === category)
              .map((trick) =>
                chip({
                  label: SPOKEN[trick.code] ?? trick.name,
                  active: state.allowedTrickCodes.includes(trick.code),
                  muted: true,
                  onClick: () => {
                    state.allowedTrickCodes = toggleIn(
                      state.allowedTrickCodes,
                      trick.code,
                    );
                    renderControls();
                  },
                }),
              ),
          ),
        );
        filters.appendChild(group);
      });
    }

    if (state.filterAttrs) {
      const actions = document.createElement("div");
      actions.className = "chips";
      const selectAll = document.createElement("button");
      selectAll.type = "button";
      selectAll.className = "linkish";
      selectAll.textContent = "전부 선택";
      selectAll.addEventListener("click", () => {
        state.allowedAttributes = [...allAttrNames];
        renderControls();
      });
      const clearAll = document.createElement("button");
      clearAll.type = "button";
      clearAll.className = "linkish muted";
      clearAll.textContent = "전부 해제";
      clearAll.addEventListener("click", () => {
        state.allowedAttributes = [];
        renderControls();
      });
      actions.append(selectAll, clearAll);
      filters.appendChild(actions);
      filters.appendChild(
        chipsRow(
          allAttrNames.map((name) =>
            chip({
              label: ATTR_KO[name] ?? name,
              active: state.allowedAttributes.includes(name),
              muted: true,
              onClick: () => {
                state.allowedAttributes = toggleIn(state.allowedAttributes, name);
                renderControls();
              },
            }),
          ),
        ),
      );
    }

    controls.appendChild(filters);

    const runButton = document.createElement("button");
    runButton.type = "button";
    runButton.className = "run";
    runButton.disabled = state.pending;
    runButton.textContent = state.pending ? "계산 중…" : "최적 구성 뽑기";
    runButton.addEventListener("click", run);
    controls.appendChild(runButton);
  }

  function renderResults() {
    results.innerHTML = "";
    const result = state.result;
    if (!result) {
      results.innerHTML = `
        <div class="empty">
          <p class="empty-title">아직 결과 없음</p>
          <p>왼쪽에서 규정·목표·QoE·오버타임을 고른 뒤 「최적 구성 뽑기」를 누르세요. 기술/속성 필터를 켜면 그 안에서만 고릅니다.</p>
        </div>`;
      return;
    }

    const stats = document.createElement("div");
    stats.className = "stats";
    [
      { label: MODE_KO[result.mode], value: formatPoints(result.total), emphasize: true },
      { label: "TES (인정)", value: formatPoints(result.tesCounted) },
      { label: "TES × 풋워크", value: formatPoints(result.tesAfterFootwork) },
      {
        label: "자동 감점",
        value: formatPoints(result.autoPenalty),
        warn: result.autoPenalty < 0,
      },
    ].forEach((item) => {
      const card = document.createElement("div");
      card.className = `stat${item.emphasize ? " emphasize" : ""}${item.warn ? " warn" : ""}`;
      card.innerHTML = `<div class="stat-label">${item.label}</div><div class="stat-value">${item.value}</div>`;
      stats.appendChild(card);
    });
    results.appendChild(stats);

    if (result.mode === "final") {
      const pcs = document.createElement("p");
      pcs.className = "hint";
      pcs.textContent = `PCS ${formatPoints(result.pcsSum)} × MAC ${result.mac.toFixed(1)} = ${formatPoints(result.pcsContribution)}`;
      results.appendChild(pcs);
    }

    const notes = document.createElement("ul");
    notes.className = "notes";
    result.notes.forEach((note) => {
      const li = document.createElement("li");
      li.textContent = `· ${note}`;
      notes.appendChild(li);
    });
    results.appendChild(notes);

    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    const table = document.createElement("table");
    table.innerHTML = `
      <thead>
        <tr>
          <th>#</th><th>기술</th><th>속성</th><th>간격</th><th>수행</th><th>점수</th>
        </tr>
      </thead>`;
    const tbody = document.createElement("tbody");
    result.tricks.forEach((item) => {
      const tr = document.createElement("tr");
      if (!item.valid) tr.classList.add("invalid");
      if (item.overtime) tr.classList.add("ot");
      const spoken = SPOKEN[item.trick.code] ?? item.trick.name;
      const combo =
        item.comboId != null
          ? ` · 콤보 ${item.comboId} (${item.comboIndex}/${item.comboSize})`
          : "";
      const attrs = item.attributes.length
        ? item.attributes.map((name) => ATTR_KO[name] ?? name).join(" · ")
        : "—";
      tr.innerHTML = `
        <td class="tabular">${item.order}</td>
        <td>
          <div>${spoken}</div>
          <div class="sub">${CATEGORY_KO[item.trick.category]} · ${item.trick.code}${combo}${item.overtime ? " · OT" : ""}</div>
        </td>
        <td>${attrs}</td>
        <td>${item.distance}</td>
        <td>
          ${item.execution === "combo" ? "콤보" : "베이스"}
          ${item.zeroReason ? `<div class="warn-text">${item.zeroReason}</div>` : ""}
        </td>
        <td class="tabular"><strong>${formatPoints(item.points)}</strong></td>`;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    wrap.appendChild(table);
    results.appendChild(wrap);
  }

  renderControls();
  renderResults();
})();
