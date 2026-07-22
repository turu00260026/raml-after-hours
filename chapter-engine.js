(() => {
  "use strict";

  const OFFICIAL_KEYS = Object.freeze([
    "day_system",
    "character_status",
    "genre_pollution",
    "life_load",
    "protagonist_score",
    "analysis_level",
    "ending_route",
    "collection_log"
  ]);

  const SCORE_KEYS = new Set([
    "genre_pollution",
    "life_load",
    "protagonist_score",
    "analysis_level"
  ]);

  const PERSON_LABELS = Object.freeze({
    rico: "リコ",
    nori: "ノリ",
    renton: "レントン",
    sho: "ショウ",
    keisuke: "ケイスケ",
    maho_sho: "魔法ショウ女",
    alpaca: "アルパカ"
  });

  const GENRE_LABELS = Object.freeze({
    sf: "SF",
    mahou_shoujo: "魔法少女",
    renai_novel: "恋愛小説",
    kinniku_battle: "筋肉バトル",
    chiryaku: "知略",
    horror: "ホラー",
    nichijou: "日常",
    meta_kaisetsu: "メタ解説"
  });

  const CAST_ART = Object.freeze({
    rico: {
      src: "assets/characters/expressions/riko_neutral.png", alt: "リコ",
      expressions: {
        listen: "assets/characters/expressions/riko_neutral.png",
        command: "assets/characters/expressions/riko_neutral.png",
        concern: "assets/characters/expressions/riko_concern.png",
        analysis: "assets/characters/expressions/riko_analysis.png",
        alert: "assets/characters/expressions/riko_alert.png"
      }
    },
    nori: {
      src: "assets/characters/expressions/nori_neutral.png", alt: "ノリ",
      expressions: {
        listen: "assets/characters/expressions/nori_neutral.png",
        command: "assets/characters/expressions/nori_neutral.png",
        concern: "assets/characters/expressions/nori_concern.png",
        analysis: "assets/characters/expressions/nori_analysis.png",
        alert: "assets/characters/expressions/nori_alert.png"
      }
    },
    renton: {
      src: "assets/characters/expressions/renton_neutral.png", alt: "レントン",
      expressions: {
        listen: "assets/characters/expressions/renton_neutral.png",
        command: "assets/characters/expressions/renton_neutral.png",
        concern: "assets/characters/expressions/renton_concern.png",
        analysis: "assets/characters/expressions/renton_analysis.png",
        alert: "assets/characters/expressions/renton_alert.png"
      }
    },
    sho: {
      src: "assets/characters/expressions/sho_neutral.png", alt: "ショウ",
      expressions: {
        listen: "assets/characters/expressions/sho_neutral.png",
        command: "assets/characters/expressions/sho_neutral.png",
        concern: "assets/characters/expressions/sho_concern.png",
        analysis: "assets/characters/expressions/sho_analysis.png",
        alert: "assets/characters/expressions/sho_alert.png"
      }
    },
    keisuke: {
      src: "assets/characters/expressions/keisuke_neutral.png", alt: "ケイスケ",
      expressions: {
        listen: "assets/characters/expressions/keisuke_neutral.png",
        command: "assets/characters/expressions/keisuke_neutral.png",
        concern: "assets/characters/expressions/keisuke_concern.png",
        analysis: "assets/characters/expressions/keisuke_analysis.png",
        alert: "assets/characters/expressions/keisuke_alert.png"
      }
    },
    keisuke_robo: {
      src: "assets/characters/expressions/keisuke_robo_neutral.png", alt: "ケイスケロボ",
      expressions: {
        listen: "assets/characters/expressions/keisuke_robo_neutral.png",
        command: "assets/characters/expressions/keisuke_robo_neutral.png",
        concern: "assets/characters/expressions/keisuke_robo_concern.png",
        analysis: "assets/characters/expressions/keisuke_robo_analysis.png",
        alert: "assets/characters/expressions/keisuke_robo_alert.png"
      }
    },
    ryousan: {
      src: "assets/characters/expressions/ryousan_neutral.png", alt: "量産型AI兵",
      expressions: {
        listen: "assets/characters/expressions/ryousan_neutral.png",
        command: "assets/characters/expressions/ryousan_neutral.png",
        concern: "assets/characters/expressions/ryousan_concern.png",
        analysis: "assets/characters/expressions/ryousan_analysis.png",
        alert: "assets/characters/expressions/ryousan_alert.png"
      }
    },
    magical_shojo: {
      src: "assets/characters/expressions/magical_shojo_neutral.png", alt: "魔法ショウ女",
      expressions: {
        listen: "assets/characters/expressions/magical_shojo_neutral.png",
        command: "assets/characters/expressions/magical_shojo_neutral.png",
        concern: "assets/characters/expressions/magical_shojo_concern.png",
        analysis: "assets/characters/expressions/magical_shojo_analysis.png",
        alert: "assets/characters/expressions/magical_shojo_alert.png"
      }
    },
    alpaca: {
      src: "assets/characters/expressions/alpaca_neutral.png", alt: "アルパカ",
      expressions: {
        listen: "assets/characters/expressions/alpaca_neutral.png",
        command: "assets/characters/expressions/alpaca_neutral.png",
        concern: "assets/characters/expressions/alpaca_concern.png",
        analysis: "assets/characters/expressions/alpaca_analysis.png",
        alert: "assets/characters/expressions/alpaca_alert.png"
      }
    }
  });

  const CAST_FACTIONS = Object.freeze({
    rico: "raml", nori: "raml", renton: "raml", sho: "raml",
    keisuke: "hostile", keisuke_robo: "hostile", ryousan: "hostile", magical_shojo: "hostile",
    alpaca: "support"
  });

  const SPEAKER_CAST_KEYS = Object.freeze(Object.fromEntries(
    Object.entries(CAST_ART).map(([key, asset]) => [asset.alt, key])
  ));

  const REQUIRED_IDS = Object.freeze([
    "chapterShell",
    "chapterEventCode",
    "chapterEventTitle",
    "chapterPhase",
    "chapterVisual",
    "chapterSpeaker",
    "chapterText",
    "chapterChoices",
    "chapterHint",
    "chapterNextButton",
    "chapterStateSummary",
    "chapterProgress",
    "chapterLog",
    "chapterResultPanel"
  ]);

  const runtime = {
    started: false,
    bound: false,
    data: null,
    state: null,
    startState: null,
    dom: null,
    eventId: null,
    event: null,
    stage: "idle",
    lineIndex: 0,
    choice: null,
    visit: 0,
    appliedTokens: new Set(),
    visitedEvents: [],
    history: [],
    dayLogRecorded: false,
    nextState: null,
    nextEvent: null,
    endingId: null,
    endingLines: [],
    advancing: false
  };

  function clone(value) {
    if (typeof structuredClone === "function") return structuredClone(value);
    return JSON.parse(JSON.stringify(value));
  }

  function clamp(value) {
    return Math.min(100, Math.max(0, value));
  }

  function clampForPath(key, path, value) {
    const series = runtime.data && runtime.data.series;
    if (series && key === "analysis_level" && path === "value") return Math.min(Number(series.analysisCap) || 65, Math.max(0, value));
    if (series && key === "genre_pollution" && path === "horror") return Math.min(Number(series.horrorCap) || 40, Math.max(0, value));
    return clamp(value);
  }

  function isObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  function normalizeToken(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[\s_-]/g, "");
  }

  function normalizeLine(value, fallbackSpeaker = "SYSTEM") {
    if (typeof value === "string") {
      return { speaker: fallbackSpeaker, text: value, type: "normal" };
    }
    const item = isObject(value) ? value : {};
    return {
      speaker: String(item.speaker || fallbackSpeaker),
      text: String(item.text || ""),
      type: String(item.type || "normal")
    };
  }

  function getLines(value, fallbackSpeaker = "SYSTEM") {
    return Array.isArray(value) ? value.map((line) => normalizeLine(line, fallbackSpeaker)) : [];
  }

  function pathValue(root, path) {
    return String(path || "").split(".").filter(Boolean).reduce((value, key) => (
      value === null || value === undefined ? undefined : value[key]
    ), root);
  }

  function conditionMatches(condition, state) {
    if (!condition) return true;
    if (Array.isArray(condition.any)) return condition.any.some((item) => conditionMatches(item, state));
    if (Array.isArray(condition.all)) return condition.all.every((item) => conditionMatches(item, state));
    const actual = pathValue(state[condition.key], condition.path);
    if (condition.op === "eq" || !condition.op) return actual === condition.value;
    if (condition.op === "contains") return Array.isArray(actual) && actual.includes(condition.value);
    if (condition.op === "contains_choice") {
      return Array.isArray(actual) && actual.some((entry) => entry && entry.choice_id === condition.value);
    }
    return false;
  }

  function visibleLines(value, state, fallbackSpeaker = "SYSTEM") {
    if (!Array.isArray(value)) return [];
    return value
      .filter((line) => typeof line === "string" || conditionMatches(line.showWhen, state))
      .map((line) => normalizeLine(line, fallbackSpeaker));
  }

  function eventIntro(event, state) {
    const source = Array.isArray(event.intro) ? event.intro.slice() : [];
    const variant = event.variant;
    if (isObject(variant)) {
      const value = pathValue(state[variant.key], variant.path);
      const selected = variant[String(Boolean(value))];
      if (selected && Array.isArray(selected.intro) && selected.intro.length) {
        const index = source.findIndex((line) => line && line.id === selected.insertAfter);
        source.splice(index >= 0 ? index + 1 : source.length, 0, ...selected.intro);
      }
    }
    return visibleLines(source, state);
  }

  function choiceResult(choice, state) {
    return visibleLines(choice && choice.result, state);
  }

  function resolveDom() {
    const elements = {};
    const missing = [];
    REQUIRED_IDS.forEach((id) => {
      elements[id] = document.getElementById(id);
      if (!elements[id]) missing.push(`#${id}`);
    });
    elements.gameShell = document.getElementById("gameShell");
    if (missing.length) {
      throw new Error(`RAML chapter UI is incomplete: ${missing.join(", ")}`);
    }
    return elements;
  }

  function assertOfficialState(state) {
    if (!isObject(state)) throw new Error("RAML_CHAPTER.start(state) には状態オブジェクトが必要です。");
    const missing = OFFICIAL_KEYS.filter((key) => !Object.prototype.hasOwnProperty.call(state, key));
    if (missing.length) throw new Error(`RAMLの正式管理キーが不足しています: ${missing.join(", ")}`);
  }

  function getData() {
    const data = window.RAML_CHAPTER_DATA;
    if (!isObject(data) || !isObject(data.events) || Object.keys(data.events).length === 0) {
      throw new Error("window.RAML_CHAPTER_DATA.events が読み込まれていません。");
    }
    return data;
  }

  function firstEventId(data) {
    const requested = data.start || data.startEvent || data.firstEvent;
    if (requested && data.events[requested]) return requested;
    if (data.events.EV_C1_DISPATCH) return "EV_C1_DISPATCH";
    return Object.keys(data.events)[0];
  }

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function orderStageCast(cast) {
    const unique = [...new Set(cast)].filter((key) => CAST_ART[key]);
    const hasRaml = unique.some((key) => CAST_FACTIONS[key] === "raml");
    const hasHostile = unique.some((key) => CAST_FACTIONS[key] === "hostile");
    if (!hasRaml || !hasHostile) return unique;
    return unique.sort((a, b) => (CAST_FACTIONS[a] === "raml" ? -1 : 1) - (CAST_FACTIONS[b] === "raml" ? -1 : 1));
  }

  function inferLineExpression(line) {
    if (line?.visual?.expression) return line.visual.expression;
    const text = String(line?.text || "");
    if (/(敵|攻撃|侵食|警告|異変|危険)/.test(text)) return "alert";
    if (/(生活|保育園|仕事|遅刻|疲労|心配|迎え)/.test(text)) return "concern";
    if (/(解析|分析|数値|条件|観測|記録)/.test(text)) return "analysis";
    return "command";
  }

  function syncVisualSpeaker(line) {
    const speakerKey = SPEAKER_CAST_KEYS[line?.speaker] || "";
    const expression = inferLineExpression(line);
    runtime.dom.chapterVisual.querySelectorAll(".chapter-cast").forEach((image) => {
      const isSpeaking = image.dataset.character === speakerKey;
      image.classList.toggle("is-speaking", isSpeaking);
      const nextExpression = isSpeaking ? expression : "listen";
      image.dataset.expression = nextExpression;
      const asset = CAST_ART[image.dataset.character];
      if (asset?.expressions) image.src = asset.expressions[nextExpression] || asset.expressions.listen || asset.src;
    });
  }

  function setHidden(element, hidden) {
    element.hidden = hidden;
    element.classList.toggle("is-hidden", hidden);
  }

  function showShell() {
    if (runtime.dom.gameShell) setHidden(runtime.dom.gameShell, true);
    const boot = document.getElementById("bootScreen");
    if (boot) setHidden(boot, true);
    setHidden(runtime.dom.chapterShell, false);
    runtime.dom.chapterShell.setAttribute("aria-hidden", "false");
    if (typeof window.scrollTo === "function") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function mobileScroll(element, block = "center") {
    if (typeof window.matchMedia !== "function" || !window.matchMedia("(max-width: 820px)").matches) return;
    if (element && typeof element.scrollIntoView === "function") element.scrollIntoView({ block, behavior: "smooth" });
  }

  function renderVisual(code, title, phase, cast = [], illustration = null) {
    const visual = runtime.dom.chapterVisual;
    visual.dataset.event = code;
    visual.dataset.phase = phase;
    const marker = `${code} ${phase}`.toUpperCase();
    visual.dataset.theme = marker.includes("HENSHIN") ? "henshin"
      : marker.includes("GADGET") ? "gadget"
        : marker.includes("LIFE") || marker.includes("生活") ? "life"
          : marker.includes("LOG") || marker.includes("CLEAR") ? "daylog"
            : "dispatch";
    visual.setAttribute("aria-label", `${title} / ${phase}`);
    const codeLabel = makeElement("small", "chapter-visual-code", code);
    const titleLabel = makeElement("h1", "chapter-visual-title", title);
    const phaseLabel = makeElement("p", "chapter-visual-phase", phase);
    const castLayer = makeElement("div", "chapter-cast-art");
    if (illustration && illustration.src) {
      const scene = makeElement("img", "chapter-scene-art");
      scene.src = illustration.src;
      scene.alt = illustration.alt || title;
      scene.loading = "eager";
      scene.decoding = "async";
      castLayer.appendChild(scene);
    } else {
      orderStageCast(cast).slice(0, 2).forEach((character, index) => {
        const asset = CAST_ART[character];
        if (!asset) return;
        const image = makeElement("img", `chapter-cast chapter-cast-${index + 1}`);
        image.src = asset.src;
        image.alt = asset.alt;
        image.dataset.character = character;
        image.dataset.faction = CAST_FACTIONS[character] || "other";
        image.dataset.expression = "listen";
        image.dataset.portrait = asset.expressions ? "expression" : "standing";
        image.loading = "eager";
        image.decoding = "async";
        castLayer.appendChild(image);
      });
    }
    const heading = makeElement("div", "chapter-event-heading");
    heading.append(codeLabel, titleLabel, phaseLabel);
    visual.replaceChildren(castLayer, heading);
  }

  function showLine(line, hint) {
    const isNarration = line.type === "narration" || line.speaker === "地の文";
    runtime.dom.chapterSpeaker.textContent = isNarration ? "" : line.speaker;
    runtime.dom.chapterSpeaker.dataset.type = line.type;
    setHidden(runtime.dom.chapterSpeaker, isNarration);
    runtime.dom.chapterText.textContent = line.text;
    runtime.dom.chapterText.dataset.type = line.type;
    runtime.dom.chapterHint.textContent = hint || "クリック / Enter / Space で次へ";
    setHidden(runtime.dom.chapterChoices, true);
    setHidden(runtime.dom.chapterNextButton, false);
    runtime.dom.chapterNextButton.disabled = false;
    runtime.dom.chapterNextButton.textContent = "次へ →";
    syncVisualSpeaker(line);
  }

  function clearLine() {
    runtime.dom.chapterSpeaker.textContent = "";
    setHidden(runtime.dom.chapterSpeaker, true);
    runtime.dom.chapterText.textContent = "";
  }

  function addHistory(text) {
    runtime.history.push(String(text));
    renderLog();
  }

  function renderLog() {
    const list = makeElement("ol", "chapter-log-list");
    runtime.history.slice(-8).forEach((entry) => list.appendChild(makeElement("li", "", entry)));
    runtime.dom.chapterLog.replaceChildren(list);
  }

  function highestEntries(record) {
    const entries = Object.entries(isObject(record) ? record : {})
      .filter(([, value]) => Number.isFinite(Number(value)));
    if (!entries.length) return [];
    const highest = Math.max(...entries.map(([, value]) => Number(value)));
    return entries.filter(([, value]) => Number(value) === highest).map(([key]) => key);
  }

  function protagonistOutcome(state) {
    const keys = highestEntries(state.protagonist_score);
    return keys.length ? keys.map((key) => PERSON_LABELS[key] || key).join(" / ") : "未判定";
  }

  function rankedKeys(record, priority) {
    const order = Array.isArray(priority) ? priority : Object.keys(isObject(record) ? record : {});
    return order
      .filter((key) => Number.isFinite(Number(record && record[key])))
      .sort((left, right) => Number(record[right]) - Number(record[left]) || order.indexOf(left) - order.indexOf(right));
  }

  function evaluateOutcomes(state, config = runtime.data && runtime.data.dayLog) {
    const genrePriority = config && config.genrePriority;
    const characterPriority = config && config.characterPriority;
    const genres = rankedKeys(state.genre_pollution, genrePriority);
    const characters = rankedKeys(state.protagonist_score, characterPriority);
    const genreKey = genres[0] || null;
    const characterKey = characters[0] || null;
    const first = Number(state.protagonist_score && state.protagonist_score[characterKey]) || 0;
    const second = Number(state.protagonist_score && state.protagonist_score[characters[1]]) || 0;
    const gap = first - second;
    const threshold = Number(config && config.kikkouThreshold) || 5;
    const logKey = genreKey === "nichijou" ? "nichijou" : gap <= threshold ? "kikkou" : characterKey;
    return {
      characterKey,
      genreKey,
      gap,
      logKey,
      protagonist: PERSON_LABELS[characterKey] || characterKey || "未判定",
      genre: (config && config.genreLabels && config.genreLabels[genreKey]) || GENRE_LABELS[genreKey] || genreKey || "未判定"
    };
  }

  function average(record) {
    const values = Object.values(isObject(record) ? record : {}).map(Number).filter(Number.isFinite);
    return values.length ? Math.round(values.reduce((sum, value) => sum + value, 0) / values.length) : 0;
  }

  function collectionCount(collectionLog) {
    return Object.values(isObject(collectionLog) ? collectionLog : {}).reduce((sum, category) => {
      if (Array.isArray(category)) return sum + category.length;
      if (isObject(category) && Array.isArray(category.collected)) return sum + category.collected.length;
      return sum;
    }, 0);
  }

  function endingCount(endingRoute) {
    if (!isObject(endingRoute)) return 0;
    if (Array.isArray(endingRoute.reached)) return endingRoute.reached.length;
    if (isObject(endingRoute.flags) && Array.isArray(endingRoute.flags.reached)) return endingRoute.flags.reached.length;
    return 0;
  }

  function renderStateSummary() {
    if (!runtime.state) return;
    const state = runtime.state;
    const day = isObject(state.day_system) ? state.day_system : {};
    const characters = Object.values(isObject(state.character_status) ? state.character_status : {});
    const available = characters.filter((character) => character && character.available).length;
    const genre = highestEntries(state.genre_pollution).map((key) => GENRE_LABELS[key] || key).join(" / ") || "—";
    const rows = [
      ["day_system", `DAY ${day.current_day ?? "—"} / ${day.time ?? "—"} / ${day.phase ?? "—"}`],
      ["character_status", `稼働可能 ${available}/${characters.length}`],
      ["genre_pollution", `最大 ${genre}`],
      ["life_load", `平均 ${average(state.life_load)}`],
      ["protagonist_score", protagonistOutcome(state)],
      ["analysis_level", String(isObject(state.analysis_level) ? state.analysis_level.value ?? "—" : state.analysis_level)],
      ["ending_route", `到達 ${endingCount(state.ending_route)}`],
      ["collection_log", `回収 ${collectionCount(state.collection_log)}`]
    ];
    const fragment = document.createDocumentFragment();
    rows.forEach(([key, value]) => {
      const row = makeElement("div", "chapter-state-row");
      row.append(makeElement("span", "", key), makeElement("b", "", value));
      fragment.appendChild(row);
    });
    runtime.dom.chapterStateSummary.replaceChildren(fragment);
  }

  function renderProgress() {
    if (!runtime.data) return;
    const series = runtime.data.series && runtime.data.series.enabled;
    const total = series ? runtime.data.series.maxDay : 6;
    if (series) {
      const day = Number(runtime.state && runtime.state.day_system && runtime.state.day_system.current_day) || 1;
      let activeDay = Math.max(0, Math.min(total - 1, day - 1));
      if (runtime.stage === "complete" && day >= total) activeDay = total;
      runtime.dom.chapterProgress.setAttribute("aria-label", `DAY ${day} / ${total}`);
      const fragment = document.createDocumentFragment();
      for (let index = 0; index < total; index += 1) {
        const bar = makeElement("i", index < activeDay ? "is-done" : "");
        if (index === activeDay && activeDay < total) bar.classList.add("is-current");
        fragment.appendChild(bar);
      }
      runtime.dom.chapterProgress.replaceChildren(fragment);
      return;
    }
    const marker = `${runtime.eventId || ""} ${runtime.event && runtime.event.phase || ""}`.toUpperCase();
    let active = marker.includes("HENSHIN") ? 3
      : marker.includes("GADGET") ? 2
        : marker.includes("LIFE") || marker.includes("生活") ? 1 : 0;
    let label = `STEP ${active + 1} / ${total}`;
    if (runtime.stage === "day-log") label = "DAY LOG";
    if (runtime.stage === "clear" || runtime.stage === "complete") label = "CHAPTER CLEAR";
    if (runtime.stage === "day-log") active = 4;
    if (runtime.stage === "clear") active = 5;
    if (runtime.stage === "complete") active = total;
    runtime.dom.chapterProgress.setAttribute("aria-label", label);
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < total; index += 1) {
      const bar = makeElement("i", index < active ? "is-done" : "");
      if (index === active && runtime.stage !== "complete") {
        bar.classList.add("is-current");
      }
      fragment.appendChild(bar);
    }
    runtime.dom.chapterProgress.replaceChildren(fragment);
  }

  function hideResultPanel() {
    runtime.dom.chapterResultPanel.replaceChildren();
    setHidden(runtime.dom.chapterResultPanel, true);
  }

  function showChoiceResultPanel(choice) {
    const heading = makeElement("small", "", "EFFECTS APPLIED");
    const title = makeElement("b", "", choice.text || choice.id || "選択結果");
    runtime.dom.chapterResultPanel.replaceChildren(heading, title);
    setHidden(runtime.dom.chapterResultPanel, false);
  }

  const EFFECT_LABELS = Object.freeze({
    day_system: "進行",
    character_status: "状態",
    genre_pollution: "ジャンル汚染",
    life_load: "生活負荷",
    protagonist_score: "主役度",
    analysis_level: "解析度",
    ending_route: "END経路",
    collection_log: "収集"
  });

  function effectSummary(choice) {
    const effects = (Array.isArray(choice.effects) ? choice.effects : []).map((entry) => {
      const target = String(entry.path || "").split(".")[0];
      const targetLabel = PERSON_LABELS[target] || GENRE_LABELS[target] || target;
      const value = entry.op === "delta" && Number(entry.value) > 0 ? `+${entry.value}`
        : entry.op === "append" ? `追加:${entry.value}`
          : entry.op === "set" ? `→${entry.value}` : String(entry.value);
      return `${EFFECT_LABELS[entry.key] || entry.key}${targetLabel ? `(${targetLabel})` : ""} ${value}`;
    });
    const collected = (Array.isArray(choice.collect) ? choice.collect : []).map((item) => `記録回収 ${item.id}`);
    return effects.concat(collected).join(" / ") || "状態変化なし";
  }

  function applyEventEntry(targetState, event) {
    (Array.isArray(event.onEnterEffects) ? event.onEnterEffects : []).forEach((entry) => applyEffect(targetState, entry));
    const collects = Array.isArray(event.onEnterCollect) ? event.onEnterCollect : event.onEnterCollect ? [event.onEnterCollect] : [];
    collects.forEach((item) => collectItem(targetState, item));
  }

  function recordChoiceLog(targetState, eventId, choiceId) {
    if (!isObject(targetState.day_system)) return;
    if (!Array.isArray(targetState.day_system.day_log_entries)) targetState.day_system.day_log_entries = [];
    targetState.day_system.day_log_entries.push({ event_id: eventId, choice_id: choiceId });
  }

  function enterEvent(eventId) {
    const event = runtime.data.events[eventId];
    if (!event) throw new Error(`次イベントが見つかりません: ${eventId}`);
    runtime.visit += 1;
    runtime.eventId = eventId;
    runtime.event = event;
    applyEventEntry(runtime.state, event);
    if (isObject(runtime.state.day_system)) runtime.state.day_system.phase = event.phase || runtime.state.day_system.phase;
    runtime.choice = null;
    runtime.lineIndex = 0;
    runtime.stage = "intro";
    runtime.visitedEvents.push(eventId);
    runtime.dom.chapterEventCode.textContent = event.id || eventId;
    runtime.dom.chapterEventTitle.textContent = event.title || eventId;
    runtime.dom.chapterPhase.textContent = event.phase || "EVENT";
    renderVisual(event.id || eventId, event.title || eventId, event.phase || "EVENT", event.cast || [], event.illustration || null);
    hideResultPanel();
    addHistory(`開始：${event.title || eventId}`);
    renderProgress();
    renderStateSummary();
    const intro = eventIntro(event, runtime.state);
    if (intro.length) {
      showLine(intro[0], `導入 1 / ${intro.length} — クリック / Enter / Space`);
    } else {
      showChoices();
    }
    mobileScroll(runtime.dom.chapterText);
  }

  function showChoices() {
    runtime.stage = "choice";
    clearLine();
    runtime.dom.chapterHint.textContent = "最大4つの行動から1つ選んでください。";
    setHidden(runtime.dom.chapterNextButton, true);
    setHidden(runtime.dom.chapterChoices, false);
    const choices = Array.isArray(runtime.event.choices) ? runtime.event.choices.slice(0, 4) : [];
    const fragment = document.createDocumentFragment();
    choices.forEach((choice, index) => {
      const button = makeElement("button", "chapter-choice", "");
      button.type = "button";
      button.dataset.choiceId = choice.id || String(index);
      button.style.touchAction = "manipulation";
      button.setAttribute("aria-label", `${index + 1}. ${choice.text || choice.id || "選択"}`);
      button.append(makeElement("span", "chapter-choice-number", String(index + 1)), makeElement("b", "", choice.text || choice.id || `選択 ${index + 1}`));
      fragment.appendChild(button);
    });
    runtime.dom.chapterChoices.replaceChildren(fragment);
    if (!choices.length) {
      runtime.dom.chapterHint.textContent = "選択肢がありません。次のイベントへ進みます。";
      setHidden(runtime.dom.chapterNextButton, false);
      runtime.dom.chapterNextButton.textContent = "次のイベントへ →";
    }
    mobileScroll(runtime.dom.chapterChoices, "nearest");
  }

  function getPathParent(root, path, create) {
    if (!path) return { parent: null, property: null };
    const parts = String(path).split(".").filter(Boolean);
    const property = parts.pop();
    let parent = root;
    parts.forEach((part) => {
      if (!isObject(parent[part]) && !Array.isArray(parent[part])) {
        if (!create) throw new Error(`効果のパスが存在しません: ${path}`);
        parent[part] = {};
      }
      parent = parent[part];
    });
    return { parent, property };
  }

  function applyEffect(targetState, entry) {
    if (!OFFICIAL_KEYS.includes(entry.key)) throw new Error(`非正式な管理キーです: ${entry.key}`);
    if (!["set", "delta", "append"].includes(entry.op)) throw new Error(`未対応の効果演算です: ${entry.op}`);
    const root = targetState[entry.key];
    const target = getPathParent(root, entry.path, entry.op === "set" || entry.op === "append");
    if (!target.property) throw new Error(`効果のpathが空です: ${entry.key}`);
    if (entry.op === "set") {
      const value = SCORE_KEYS.has(entry.key) && Number.isFinite(Number(entry.value)) ? clampForPath(entry.key, entry.path, Number(entry.value)) : clone(entry.value);
      target.parent[target.property] = value;
      return;
    }
    if (entry.op === "delta") {
      const before = Number(target.parent[target.property]);
      const amount = Number(entry.value);
      if (!Number.isFinite(before) || !Number.isFinite(amount)) throw new Error(`delta対象が数値ではありません: ${entry.key}.${entry.path}`);
      target.parent[target.property] = clampForPath(entry.key, entry.path, before + amount);
      return;
    }
    if (!Array.isArray(target.parent[target.property])) target.parent[target.property] = [];
    const additions = Array.isArray(entry.value) ? entry.value : [entry.value];
    additions.forEach((value) => target.parent[target.property].push(clone(value)));
  }

  function collectItem(targetState, item) {
    if (!item || !item.category || !item.id) throw new Error("collectにはcategoryとidが必要です。");
    const collectionLog = targetState.collection_log;
    if (!Object.prototype.hasOwnProperty.call(collectionLog, item.category)) {
      collectionLog[item.category] = { collected: [], total: 0 };
    }
    const category = collectionLog[item.category];
    const list = Array.isArray(category) ? category : category.collected;
    if (!Array.isArray(list)) throw new Error(`collection_log.${item.category}.collected が配列ではありません。`);
    if (!list.includes(item.id)) list.push(item.id);
  }

  function applyChoice(targetState, eventId, choice, tokenSet, token) {
    if (tokenSet && tokenSet.has(token)) return false;
    (Array.isArray(choice.effects) ? choice.effects : []).forEach((entry) => applyEffect(targetState, entry));
    (Array.isArray(choice.conditionalEffects) ? choice.conditionalEffects : []).forEach((rule) => {
      const satisfied = (Array.isArray(rule.whenAllCollected) ? rule.whenAllCollected : []).every((value) => {
        const [category, id] = String(value).split(":", 2);
        const record = targetState.collection_log && targetState.collection_log[category];
        const list = Array.isArray(record) ? record : record && record.collected;
        return Array.isArray(list) && list.includes(id);
      });
      if (satisfied) (Array.isArray(rule.effects) ? rule.effects : []).forEach((entry) => applyEffect(targetState, entry));
    });
    (Array.isArray(choice.collect) ? choice.collect : []).forEach((item) => collectItem(targetState, item));
    assertOfficialState(targetState);
    if (tokenSet) tokenSet.add(token);
    return true;
  }

  function choose(choiceId) {
    if (runtime.stage !== "choice" || runtime.advancing) return;
    const choices = Array.isArray(runtime.event.choices) ? runtime.event.choices.slice(0, 4) : [];
    const choice = choices.find((item, index) => String(item.id || index) === String(choiceId));
    if (!choice) return;
    runtime.advancing = true;
    const token = `${runtime.visit}:${runtime.eventId}:${choice.id || choiceId}`;
    try {
      applyChoice(runtime.state, runtime.eventId, choice, runtime.appliedTokens, token);
      recordChoiceLog(runtime.state, runtime.eventId, choice.id || choiceId);
      runtime.choice = choice;
      runtime.lineIndex = 0;
      runtime.stage = "result";
      runtime.dom.chapterChoices.querySelectorAll("button").forEach((button) => { button.disabled = true; });
      addHistory(`選択：${choice.text || choice.id}`);
      renderStateSummary();
      hideResultPanel();
      const result = choiceResult(choice, runtime.state);
      if (result.length) {
        showLine(result[0], `影響：${effectSummary(choice)} ｜ 結果 1 / ${result.length}`);
      } else {
        finishEvent();
      }
    } finally {
      runtime.advancing = false;
    }
  }

  function isLifeEvent(eventId, event) {
    const value = `${eventId} ${event.phase || ""} ${event.id || ""}`.toUpperCase();
    return value.includes("LIFE") || value.includes("SEIKATSU") || value.includes("生活");
  }

  function isHenshinEvent(eventId, event) {
    const value = `${eventId} ${event.phase || ""} ${event.id || ""}`.toUpperCase();
    return value.includes("HENSHIN") || value.includes("変身");
  }

  function findEventByMarker(marker) {
    const normalized = normalizeToken(marker);
    return Object.keys(runtime.data.events).find((id) => {
      const event = runtime.data.events[id];
      return normalizeToken(`${id}${event.id || ""}${event.phase || ""}`).includes(normalized);
    }) || null;
  }

  function resolveNext(eventId, event, choice, data = runtime.data) {
    const isSeries = Boolean(data.series && data.series.enabled);
    if (!isSeries && isHenshinEvent(eventId, event)) return "@dayLog";
    if (!isSeries && isLifeEvent(eventId, event)) {
      const gadget = Object.keys(data.events).find((id) => {
        const candidate = data.events[id];
        return normalizeToken(`${id}${candidate.id || ""}${candidate.phase || ""}`).includes("gadget");
      });
      if (gadget) return gadget;
    }
    const requested = choice && choice.next !== undefined ? choice.next : event.next;
    if (requested === null || requested === undefined || requested === "") {
      const ids = Object.keys(data.events);
      const index = ids.indexOf(eventId);
      return ids[index + 1] || "@dayLog";
    }
    const normalized = normalizeToken(requested);
    if (["daylog", "log", "dailylog"].includes(normalized)) return "@dayLog";
    if (["clear", "chapterclear", "end"].includes(normalized)) return "@clear";
    if (["ending", "finalending", "finaljudgment"].includes(normalized)) return "@ending";
    if (data.events[requested]) return requested;
    const caseInsensitive = Object.keys(data.events).find((id) => normalizeToken(id) === normalized);
    return caseInsensitive || String(requested);
  }

  function finishEvent() {
    const next = resolveNext(runtime.eventId, runtime.event, runtime.choice);
    if (next === "@dayLog") {
      enterDayLog();
    } else if (next === "@ending") {
      enterEnding();
    } else if (next === "@clear") {
      enterClear();
    } else {
      enterEvent(next);
    }
  }

  function configLines(config, fallback) {
    if (Array.isArray(config)) return getLines(config);
    if (isObject(config)) {
      const lines = config.lines || config.intro || config.result;
      if (Array.isArray(lines)) return getLines(lines);
      if (Array.isArray(config.text)) return getLines(config.text, "SYSTEM");
      if (config.text) return [normalizeLine(config)];
    }
    return fallback;
  }

  function replaceTokens(text, outcomes) {
    return String(text)
      .replace(/\{\{\s*protagonist\s*\}\}/gi, outcomes.protagonist)
      .replace(/\{\{\s*genre\s*\}\}/gi, outcomes.genre)
      .replace(/\{top_genre\}/gi, outcomes.genre);
  }

  function storageAvailable() {
    try {
      const key = "__raml_storage_test__";
      window.localStorage.setItem(key, "1");
      window.localStorage.removeItem(key);
      return true;
    } catch (_) {
      return false;
    }
  }

  function saveSnapshot(state, eventId, extra = {}) {
    const series = runtime.data && runtime.data.series;
    if (!series || !storageAvailable()) return false;
    const payload = {
      version: series.version,
      savedAt: new Date().toISOString(),
      eventId,
      state: clone(state),
      ...extra
    };
    window.localStorage.setItem(series.saveKey, JSON.stringify(payload));
    return true;
  }

  function loadSnapshot() {
    const data = getData();
    const series = data.series;
    if (!series || !storageAvailable()) return null;
    try {
      const parsed = JSON.parse(window.localStorage.getItem(series.saveKey) || "null");
      if (!parsed || parsed.version !== series.version || !parsed.state) return null;
      assertOfficialState(parsed.state);
      return parsed;
    } catch (_) {
      return null;
    }
  }

  function clearSnapshot() {
    const series = getData().series;
    if (series && storageAvailable()) window.localStorage.removeItem(series.saveKey);
  }

  function loadMetaProgress() {
    const series = getData().series;
    if (!series || !storageAvailable()) return {};
    try {
      const parsed = JSON.parse(window.localStorage.getItem(series.metaKey) || "{}");
      return isObject(parsed) ? parsed : {};
    } catch (_) {
      return {};
    }
  }

  function mergeMetaProgress(source) {
    const state = clone(source);
    const data = getData();
    const meta = loadMetaProgress();
    Object.entries(data.initialState.collection_log || {}).forEach(([category, template]) => {
      if (!state.collection_log[category]) state.collection_log[category] = { collected: [], total: Number(template.total) || 0 };
      state.collection_log[category].total = Number(template.total) || Number(state.collection_log[category].total) || 0;
      const current = Array.isArray(state.collection_log[category].collected) ? state.collection_log[category].collected : [];
      const saved = Array.isArray(meta[category]) ? meta[category] : [];
      state.collection_log[category].collected = [...new Set(current.concat(saved))];
    });
    if (state.ending_route && state.ending_route.flags) {
      const reached = Array.isArray(state.ending_route.flags.reached) ? state.ending_route.flags.reached : [];
      const collectedEnds = state.collection_log.end_kaishu && state.collection_log.end_kaishu.collected || [];
      state.ending_route.flags.reached = [...new Set(reached.concat(collectedEnds))];
    }
    return state;
  }

  function saveMetaProgress(state) {
    const series = getData().series;
    if (!series || !storageAvailable()) return false;
    const current = loadMetaProgress();
    Object.entries(state.collection_log || {}).forEach(([category, record]) => {
      const list = Array.isArray(record) ? record : record && record.collected;
      current[category] = [...new Set((Array.isArray(current[category]) ? current[category] : []).concat(Array.isArray(list) ? list : []))];
    });
    window.localStorage.setItem(series.metaKey, JSON.stringify(current));
    return true;
  }

  function allCollectionsComplete(state) {
    return Object.values(state.collection_log || {}).every((record) => {
      const list = Array.isArray(record) ? record : record && record.collected;
      const total = Array.isArray(record) ? record.length : Number(record && record.total) || 0;
      return Array.isArray(list) && list.length >= total;
    });
  }

  function topGenreKey(state) {
    const priority = runtime.data && runtime.data.dayLog && runtime.data.dayLog.genrePriority;
    return rankedKeys(state.genre_pollution, priority)[0] || null;
  }

  function prepareNextDayState(source, finishedDay) {
    const state = clone(source);
    const genreKey = topGenreKey(state);
    if (genreKey) state.genre_pollution[genreKey] = clampForPath("genre_pollution", genreKey, Number(state.genre_pollution[genreKey]) - 5);
    state.day_system.current_day = Math.min((runtime.data.series && runtime.data.series.maxDay) || 14, Number(finishedDay) + 1);
    state.day_system.phase = "morning_briefing";
    state.day_system.dispatched = [];
    return state;
  }

  function updateSeriesChrome() {
    if (!runtime.data || !runtime.data.series || !runtime.state) return;
    const day = Number(runtime.state.day_system.current_day) || 1;
    const meta = runtime.data.series.dayMeta[day];
    const brand = runtime.dom.chapterShell.querySelector(".chapter-brand span");
    const rail = runtime.dom.chapterShell.querySelector(".chapter-monitor .chapter-rail-label");
    if (brand) brand.textContent = `DAY ${String(day).padStart(2, "0")} / AFTER HOURS`;
    if (rail) rail.textContent = `DAY ${String(day).padStart(2, "0")} TELEMETRY`;
    runtime.dom.chapterShell.setAttribute("aria-label", `RAML After Hours Day ${day}${meta ? ` ${meta.title}` : ""}`);
  }

  function recordDayLog(outcomes) {
    if (runtime.dayLogRecorded) return;
    const daySystem = runtime.state.day_system;
    daySystem.phase = "day_log";
    const series = runtime.data.series;
    if (series && series.enabled) {
      const day = Number(daySystem.current_day) || 1;
      const id = series.dayLogCollect && series.dayLogCollect[day];
      if (id) collectItem(runtime.state, { category: "ninmu_log", id });
      if (Array.isArray(series.weekendDays) && series.weekendDays.includes(day)) {
        applyEffect(runtime.state, { key: "genre_pollution", path: "nichijou", op: "delta", value: 5 });
      }
    } else {
      const collect = runtime.data.dayLog && runtime.data.dayLog.collect;
      if (collect) collectItem(runtime.state, collect);
    }
    runtime.dayLogRecorded = true;
    addHistory(`日次判定：主役 ${outcomes.protagonist} / ${outcomes.genre}寄り`);
  }

  function enterDayLog() {
    runtime.stage = "day-log";
    runtime.lineIndex = 0;
    const outcomes = evaluateOutcomes(runtime.state);
    recordDayLog(outcomes);
    const defaults = [
      { speaker: "SYSTEM", text: `本日の主役度：${outcomes.protagonist}`, type: "log" },
      { speaker: "SYSTEM", text: `ジャンル寄り先：${outcomes.genre}`, type: "log" },
      { speaker: "リコ", text: "世界のことは明日も続く。今日は生活側を閉じて帰ろう", type: "normal" }
    ];
    const series = runtime.data.series;
    const day = Number(runtime.state.day_system.current_day) || 1;
    const selectedMessage = runtime.data.dayLog && runtime.data.dayLog.messages && runtime.data.dayLog.messages[outcomes.logKey];
    const sourceLines = series && series.enabled ? [
      { speaker: "SYSTEM", text: `Day ${day} — 本日の主役：${outcomes.protagonist} / 支配ジャンル：${outcomes.genre}`, type: "log" },
      { speaker: "リコ", text: series.dayClosing[day] || "今日の観測を閉じる。続きは生活を済ませてから", type: "normal" }
    ] : selectedMessage ? [{ speaker: "SYSTEM", text: selectedMessage, type: "log" }] : configLines(runtime.data.dayLog, defaults);
    runtime.dayLogLines = sourceLines.map((line) => ({
      ...line,
      text: replaceTokens(line.text, outcomes)
    }));
    runtime.dom.chapterEventCode.textContent = "DAY LOG";
    runtime.dom.chapterEventTitle.textContent = "一日の観測記録";
    runtime.dom.chapterPhase.textContent = "DAY LOG";
    renderVisual("DAY LOG", "一日の観測記録", "REPORT", ["rico", "nori"]);
    hideResultPanel();
    renderStateSummary();
    renderProgress();
    if (runtime.dayLogLines.length) showLine(runtime.dayLogLines[0], `日次ログ 1 / ${runtime.dayLogLines.length}`);
    else enterClear();
  }

  function evaluateEnding(state) {
    const config = (runtime.data || getData()).dayLog;
    const characters = rankedKeys(state.protagonist_score, config.characterPriority);
    const genres = rankedKeys(state.genre_pollution, config.genrePriority);
    const firstCharacter = characters[0];
    const secondCharacter = characters[1];
    const firstGenre = genres[0];
    const secondGenre = genres[1];
    const scoreGap = Number(state.protagonist_score[firstCharacter]) - Number(state.protagonist_score[secondCharacter]);
    const genreGap = Number(state.genre_pollution[firstGenre]) - Number(state.genre_pollution[secondGenre]);
    const mission = state.collection_log.ninmu_log.collected;
    const critical = ["day10_renton_walk", "day11_rico_field", "day12_sho_release", "day12_keisuke_complete", "day13_nori_final_judge", "day14_henshin_complete"];
    if (scoreGap <= 7 && genreGap <= 10 && critical.every((id) => mission.includes(id))) {
      return { id: "shin_end", scoreGap, genreGap, firstCharacter, firstGenre };
    }
    if (firstGenre === "nichijou") return { id: "nichijou_end", scoreGap, genreGap, firstCharacter, firstGenre };
    let selected = firstCharacter;
    if (selected === "maho_sho") {
      const watches = state.collection_log.henshin_sabun.collected;
      const allWatched = ["maho_sho_first_watch", "maho_sho_second_watch", "maho_sho_third_watch"].every((id) => watches.includes(id));
      if (!allWatched) selected = characters.find((key) => key !== "maho_sho") || "rico";
    }
    const route = { rico: "rico_end", nori: "nori_end", renton: "renton_end", sho: "kinniku_end", keisuke: "keisuke_end", maho_sho: "maho_sho_end" }[selected] || "rico_end";
    return { id: route, scoreGap, genreGap, firstCharacter, firstGenre };
  }

  function enterEnding(forcedId = null) {
    const verdict = forcedId ? { id: forcedId } : evaluateEnding(runtime.state);
    runtime.endingId = verdict.id;
    const reached = runtime.state.ending_route.flags.reached;
    if (!reached.includes(verdict.id)) reached.push(verdict.id);
    collectItem(runtime.state, { category: "end_kaishu", id: verdict.id });
    saveMetaProgress(runtime.state);
    runtime.state = mergeMetaProgress(runtime.state);
    runtime.state.day_system.phase = "ending";
    runtime.stage = "ending";
    runtime.lineIndex = 0;
    const ending = runtime.data.series.endings[verdict.id];
    const endingBody = ending && Array.isArray(ending.lines) ? getLines(ending.lines) : [
      { speaker: "SYSTEM", text: "最終判定を記録しました。", type: "clear" }
    ];
    const epilogue = Array.isArray(runtime.data.series.epilogue) ? getLines(runtime.data.series.epilogue) : [];
    runtime.endingLines = endingBody.concat(epilogue.length ? [{ speaker: "SYSTEM", text: "EPILOGUE — 月曜の朝", type: "clear" }].concat(epilogue) : []);
    runtime.dom.chapterEventCode.textContent = `ENDING / ${verdict.id.toUpperCase()}`;
    runtime.dom.chapterEventTitle.textContent = ending ? ending.title : verdict.id;
    runtime.dom.chapterPhase.textContent = "FINAL ROUTE";
    const castByEnding = {
      rico_end: ["rico", "nori"], nori_end: ["nori", "rico"], renton_end: ["renton", "rico"],
      kinniku_end: ["sho", "alpaca"], keisuke_end: ["rico", "keisuke"], maho_sho_end: ["rico", "magical_shojo"],
      nichijou_end: ["rico", "nori"], shin_end: ["rico", "nori"]
    };
    renderVisual("FINAL JUDGMENT", ending ? ending.title : verdict.id, "ENDING", castByEnding[verdict.id] || ["rico", "nori"], {
      src: "assets/illustrations/day14_after_hours_group.png",
      alt: ending ? ending.title : "RAML After Hours 最終判定"
    });
    hideResultPanel();
    renderStateSummary();
    renderProgress();
    saveSnapshot(runtime.state, "@ending", { endingId: verdict.id, completed: true });
    addHistory(`最終判定：${ending ? ending.title : verdict.id}`);
    if (runtime.endingLines.length) showLine(runtime.endingLines[0], `ENDING 1 / ${runtime.endingLines.length}`);
    else finalizeEnding();
  }

  function finalizeEnding() {
    runtime.stage = "complete";
    clearLine();
    setHidden(runtime.dom.chapterChoices, true);
    setHidden(runtime.dom.chapterNextButton, true);
    const ending = runtime.data.series.endings[runtime.endingId];
    const collectionComplete = allCollectionsComplete(runtime.state);
    const kicker = makeElement("small", "", collectionComplete ? "COLLECTION 52 / 52 — COMPLETE" : "RAML AFTER HOURS / COMPLETE");
    const heading = makeElement("h1", "", collectionComplete ? "全記録回収。定時後の観測者へ。" : ending ? ending.title : "最終判定完了");
    const summary = makeElement("p", "chapter-clear-copy", collectionComplete
      ? "8つの結末と全52件の記録を回収しました。\n誰か一人ではなく、何度も生活へ戻ったあなたの観測記録です。"
      : `14日間の選択から、この結末へ到達しました。\n\n世界は、誰かの本業と、誰かの副業で回っている。`);
    const grid = makeElement("div", "chapter-clear-grid");
    [
      ["到達END", `${endingCount(runtime.state.ending_route)} / 8`],
      ["回収ログ", `${collectionCount(runtime.state.collection_log)}件`],
      ["生活負荷 平均", String(average(runtime.state.life_load))],
      ["解析度", String(runtime.state.analysis_level.value)]
    ].forEach(([label, value]) => {
      const cell = makeElement("div");
      cell.append(makeElement("span", "", label), makeElement("b", "", value));
      grid.appendChild(cell);
    });
    const actions = makeElement("div", "chapter-clear-actions");
    const newGame = makeElement("button", "chapter-next", "別の結末を目指す ↻");
    newGame.type = "button";
    newGame.addEventListener("click", () => { clearSnapshot(); window.location.reload(); });
    const title = makeElement("button", "chapter-next chapter-secondary", "タイトルへ");
    title.type = "button";
    title.addEventListener("click", () => window.location.reload());
    actions.append(newGame, title);
    runtime.dom.chapterResultPanel.replaceChildren(kicker, heading, summary, grid, actions);
    runtime.dom.chapterShell.classList.add("is-complete");
    setHidden(runtime.dom.chapterResultPanel, false);
    runtime.dom.chapterHint.textContent = "最終ログを保存しました。";
    renderProgress();
  }

  function enterClear() {
    runtime.stage = "clear";
    runtime.lineIndex = 0;
    if (isObject(runtime.state.day_system)) runtime.state.day_system.phase = runtime.data.clear && runtime.data.clear.phase || "next_day";
    const outcomes = evaluateOutcomes(runtime.state);
    const series = runtime.data.series;
    const day = Number(runtime.state.day_system.current_day) || 1;
    const meta = series && series.dayMeta && series.dayMeta[day];
    const isChapterEnd = Boolean(series && series.chapterEnds && series.chapterEnds.includes(day));
    const defaults = [
      { speaker: "SYSTEM", text: "CHAPTER 01 CLEAR", type: "clear" },
      { speaker: "SYSTEM", text: `今日の主役：${outcomes.protagonist} / 物語は${outcomes.genre}寄り`, type: "clear" }
    ];
    const seriesLines = series && series.enabled ? [
      { speaker: "SYSTEM", text: `${isChapterEnd ? `CHAPTER ${String(meta.chapter).padStart(2, "0")} CLEAR` : `DAY ${String(day).padStart(2, "0")} COMPLETE`}`, type: "clear" },
      { speaker: "SYSTEM", text: `${meta ? meta.title : "観測完了"}\n主役：${outcomes.protagonist} / 支配ジャンル：${outcomes.genre}`, type: "clear" }
    ] : null;
    runtime.clearLines = (seriesLines || configLines(runtime.data.clear, defaults)).map((line) => ({
      ...line,
      text: replaceTokens(line.text, outcomes)
    }));
    runtime.dom.chapterEventCode.textContent = series && series.enabled ? `DAY ${String(day).padStart(2, "0")}` : "CHAPTER 01";
    runtime.dom.chapterEventTitle.textContent = series && series.enabled ? (isChapterEnd ? `第${meta.chapter}章 クリア` : `${day}日目 完了`) : isObject(runtime.data.clear) && runtime.data.clear.title ? runtime.data.clear.title : "第1章・1日目 完了";
    runtime.dom.chapterPhase.textContent = "CLEAR";
    renderVisual("CHAPTER 01", "第1章・1日目 完了", "CLEAR", ["rico", "nori"]);
    hideResultPanel();
    renderStateSummary();
    renderProgress();
    if (runtime.clearLines.length) showLine(runtime.clearLines[0], `章クリア ${1} / ${runtime.clearLines.length}`);
    else finalizeClear();
  }

  function finalizeClear() {
    const series = runtime.data.series;
    if (series && series.enabled) {
      const finishedDay = Number(runtime.state.day_system.current_day) || 1;
      const outcomes = evaluateOutcomes(runtime.state);
      const meta = series.dayMeta[finishedDay];
      runtime.stage = "checkpoint";
      clearLine();
      setHidden(runtime.dom.chapterChoices, true);
      setHidden(runtime.dom.chapterNextButton, true);
      runtime.dom.chapterHint.textContent = `Day ${finishedDay}を保存しました。`;
      runtime.nextEvent = finishedDay < series.maxDay ? series.dayMeta[finishedDay + 1].start : null;
      runtime.nextState = runtime.nextEvent ? prepareNextDayState(runtime.state, finishedDay) : clone(runtime.state);
      saveSnapshot(runtime.nextState, runtime.nextEvent, { checkpointDay: finishedDay });

      const kicker = makeElement("small", "", `AUTO SAVE / DAY ${String(finishedDay).padStart(2, "0")}`);
      const heading = makeElement("h1", "", finishedDay < series.maxDay ? "生活へ戻る。続きは、また定時後に。" : "二週間の観測を完了");
      const summary = makeElement("p", "chapter-clear-copy", `今日の主役：${outcomes.protagonist}\n支配ジャンル：${outcomes.genre}\n\n${series.dayClosing[finishedDay] || ""}`);
      const grid = makeElement("div", "chapter-clear-grid");
      [
        ["完了", `DAY ${finishedDay} / 14`],
        ["章", `CHAPTER ${meta.chapter}`],
        ["回収ログ", `${collectionCount(runtime.state.collection_log)}件`],
        ["セーブ", storageAvailable() ? "保存済み" : "利用不可"]
      ].forEach(([label, value]) => {
        const cell = makeElement("div");
        cell.append(makeElement("span", "", label), makeElement("b", "", value));
        grid.appendChild(cell);
      });
      const actions = makeElement("div", "chapter-clear-actions");
      if (runtime.nextEvent) {
        const next = makeElement("button", "chapter-next", `Day ${finishedDay + 1}へ →`);
        next.type = "button";
        next.addEventListener("click", () => start(runtime.nextState, { eventId: runtime.nextEvent }));
        actions.appendChild(next);
      }
      runtime.dom.chapterResultPanel.replaceChildren(kicker, heading, summary, grid, actions);
      runtime.dom.chapterShell.classList.add("is-complete");
      setHidden(runtime.dom.chapterResultPanel, false);
      addHistory(`Day ${finishedDay} セーブ完了`);
      renderProgress();
      return;
    }
    runtime.stage = "complete";
    clearLine();
    setHidden(runtime.dom.chapterChoices, true);
    setHidden(runtime.dom.chapterNextButton, true);
    runtime.dom.chapterHint.textContent = "第1章の1日分を完了しました。";
    const outcomes = evaluateOutcomes(runtime.state);
    const kicker = makeElement("small", "", "CHAPTER 01 CLEAR");
    const heading = makeElement("h1", "", "生活に戻る時間です");
    const summary = makeElement("p", "chapter-clear-copy", `今日の主役：${outcomes.protagonist}\n支配ジャンル：${outcomes.genre}\n\n第1章 Day 1を完了しました。`);
    const grid = makeElement("div", "chapter-clear-grid");
    [
      ["選んだイベント", `${runtime.state.day_system.day_log_entries.length}件`],
      ["回収ログ", `${collectionCount(runtime.state.collection_log)}件`],
      ["生活負荷 平均", String(average(runtime.state.life_load))],
      ["解析度", String(runtime.state.analysis_level.value)],
      ["次回", runtime.data.clear && runtime.data.clear.next || "Day 2"]
    ].forEach(([label, value]) => {
      const cell = makeElement("div");
      cell.append(makeElement("span", "", label), makeElement("b", "", value));
      grid.appendChild(cell);
    });
    const actions = makeElement("div", "chapter-clear-actions");
    const replay = makeElement("button", "chapter-next", "Day 1を最初から ↻");
    replay.type = "button";
    replay.addEventListener("click", () => window.location.reload());
    actions.appendChild(replay);
    runtime.dom.chapterResultPanel.replaceChildren(kicker, heading, summary, grid, actions);
    runtime.dom.chapterShell.classList.add("is-complete");
    setHidden(runtime.dom.chapterResultPanel, false);
    if (typeof window.scrollTo === "function") window.scrollTo({ top: 0, behavior: "smooth" });
    addHistory("第1章・1日目 クリア");
    renderProgress();
  }

  function advance() {
    if (!runtime.started || runtime.advancing || runtime.dom.chapterNextButton.disabled || runtime.dom.chapterNextButton.hidden) return;
    runtime.advancing = true;
    try {
      if (runtime.stage === "intro") {
        const lines = eventIntro(runtime.event, runtime.state);
        if (runtime.lineIndex < lines.length - 1) {
          runtime.lineIndex += 1;
          showLine(lines[runtime.lineIndex], `導入 ${runtime.lineIndex + 1} / ${lines.length} — クリック / Enter / Space`);
        } else {
          showChoices();
        }
      } else if (runtime.stage === "choice") {
        finishEvent();
      } else if (runtime.stage === "result") {
        const lines = choiceResult(runtime.choice, runtime.state);
        if (runtime.lineIndex < lines.length - 1) {
          runtime.lineIndex += 1;
          showLine(lines[runtime.lineIndex], `影響：${effectSummary(runtime.choice)} ｜ 結果 ${runtime.lineIndex + 1} / ${lines.length}`);
        } else {
          finishEvent();
        }
      } else if (runtime.stage === "day-log") {
        if (runtime.lineIndex < runtime.dayLogLines.length - 1) {
          runtime.lineIndex += 1;
          showLine(runtime.dayLogLines[runtime.lineIndex], `日次ログ ${runtime.lineIndex + 1} / ${runtime.dayLogLines.length}`);
        } else {
          const day = Number(runtime.state.day_system.current_day) || 1;
          const afterDayLog = runtime.data.series && runtime.data.series.afterDayLog && runtime.data.series.afterDayLog[day];
          if (afterDayLog) enterEvent(afterDayLog);
          else enterClear();
        }
      } else if (runtime.stage === "clear") {
        if (runtime.lineIndex < runtime.clearLines.length - 1) {
          runtime.lineIndex += 1;
          showLine(runtime.clearLines[runtime.lineIndex], `章クリア ${runtime.lineIndex + 1} / ${runtime.clearLines.length}`);
        } else {
          finalizeClear();
        }
      } else if (runtime.stage === "ending") {
        if (runtime.lineIndex < runtime.endingLines.length - 1) {
          runtime.lineIndex += 1;
          showLine(runtime.endingLines[runtime.lineIndex], `ENDING ${runtime.lineIndex + 1} / ${runtime.endingLines.length}`);
        } else {
          finalizeEnding();
        }
      }
    } finally {
      runtime.advancing = false;
    }
  }

  function bindControls() {
    if (runtime.bound) return;
    runtime.dom.chapterNextButton.style.touchAction = "manipulation";
    runtime.dom.chapterNextButton.addEventListener("click", (event) => {
      event.stopPropagation();
      advance();
    });
    runtime.dom.chapterChoices.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-choice-id]");
      if (!button || button.disabled) return;
      event.stopPropagation();
      choose(button.dataset.choiceId);
    });
    runtime.dom.chapterShell.addEventListener("click", (event) => {
      if (event.target.closest("button, a, input, select, textarea")) return;
      advance();
    });
    document.addEventListener("keydown", (event) => {
      if (!runtime.started || runtime.stage === "choice" || runtime.stage === "complete") return;
      if (event.defaultPrevented || event.repeat || event.target.closest("button, a, input, select, textarea")) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        advance();
      }
    });
    runtime.bound = true;
  }

  function resetRuntime(state, data) {
    runtime.data = data;
    runtime.state = clone(state);
    runtime.startState = clone(state);
    runtime.eventId = null;
    runtime.event = null;
    runtime.stage = "idle";
    runtime.lineIndex = 0;
    runtime.choice = null;
    runtime.visit = 0;
    runtime.appliedTokens = new Set();
    runtime.visitedEvents = [];
    runtime.history = [];
    runtime.dayLogRecorded = false;
    runtime.nextState = null;
    runtime.nextEvent = null;
    runtime.endingId = null;
    runtime.endingLines = [];
    runtime.advancing = false;
    runtime.started = true;
  }

  function start(state, options = {}) {
    const data = getData();
    const startingState = data.series && data.series.enabled ? mergeMetaProgress(state) : state;
    assertOfficialState(startingState);
    runtime.dom = runtime.dom || resolveDom();
    resetRuntime(startingState, data);
    runtime.dom.chapterShell.classList.remove("is-complete");
    bindControls();
    showShell();
    updateSeriesChrome();
    renderStateSummary();
    renderLog();
    const eventId = options.eventId || firstEventId(data);
    if (eventId === "@ending") enterEnding(options.endingId || null);
    else enterEvent(eventId);
    return clone(runtime.state);
  }

  function resume() {
    const snapshot = loadSnapshot();
    if (!snapshot) return false;
    start(snapshot.state, { eventId: snapshot.eventId || firstEventId(getData()), endingId: snapshot.endingId || null });
    return true;
  }

  function hasSave() {
    return Boolean(loadSnapshot());
  }

  function simulatePath(path, seedState) {
    const data = getData();
    const source = seedState || runtime.startState || data.initialState;
    if (!source) throw new Error("simulatePathにはseedStateが必要です（start後は省略できます）。");
    assertOfficialState(source);
    const simulated = clone(source);
    const selections = Array.isArray(path) ? path : [];
    const trace = [];
    let eventId = firstEventId(data);
    selections.forEach((selection, step) => {
      if (!eventId || eventId.startsWith("@")) throw new Error(`手順${step + 1}: 選択先イベントがありません。`);
      const event = data.events[eventId];
      if (!event) throw new Error(`手順${step + 1}: イベント ${eventId} がありません。`);
      const request = isObject(selection) ? selection : { choice: selection };
      if (request.event && request.event !== eventId) throw new Error(`手順${step + 1}: 想定 ${eventId} に対して ${request.event} が指定されました。`);
      const choices = Array.isArray(event.choices) ? event.choices : [];
      const choice = choices.find((item, index) => String(item.id || index) === String(request.choice || request.id || selection));
      if (!choice) throw new Error(`手順${step + 1}: ${eventId} に選択肢 ${request.choice || request.id || selection} がありません。`);
      applyEventEntry(simulated, event);
      applyChoice(simulated, eventId, choice, null, `simulation:${step}`);
      recordChoiceLog(simulated, eventId, choice.id);
      trace.push({ event: eventId, choice: choice.id, next: resolveNext(eventId, event, choice, data) });
      eventId = trace[trace.length - 1].next;
    });
    return { state: simulated, trace, next: eventId };
  }

  function pathExists(data, next) {
    return next === "@dayLog" || next === "@clear" || next === "@ending" || Object.prototype.hasOwnProperty.call(data.events, next);
  }

  function inspectBounds(value, path, failures) {
    if (typeof value === "number" && (value < 0 || value > 100)) failures.push(`${path}: 0..100の範囲外 (${value})`);
    else if (Array.isArray(value)) value.forEach((item, index) => inspectBounds(item, `${path}[${index}]`, failures));
    else if (isObject(value)) Object.entries(value).forEach(([key, item]) => inspectBounds(item, `${path}.${key}`, failures));
  }

  function selfTest(seedState) {
    const failures = [];
    let data;
    try {
      data = getData();
    } catch (error) {
      return { ok: false, events: 0, choices: 0, paths: 0, failures: [error.message] };
    }
    const source = seedState || runtime.startState || data.initialState;
    if (!source) return { ok: false, events: Object.keys(data.events).length, choices: 0, paths: 0, failures: ["seedStateがありません。start後に実行するかselfTest(state)を渡してください。"] };
    try { assertOfficialState(source); } catch (error) { failures.push(error.message); }
    let choiceCount = 0;
    Object.entries(data.events).forEach(([eventId, event]) => {
      if (!isObject(event)) {
        failures.push(`${eventId}: イベント定義がオブジェクトではありません。`);
        return;
      }
      if (!Array.isArray(event.intro)) failures.push(`${eventId}.intro: 配列ではありません。`);
      const choices = Array.isArray(event.choices) ? event.choices : [];
      if (!choices.length && !(data.series && data.series.enabled)) failures.push(`${eventId}.choices: 選択肢がありません。`);
      if (choices.length > 4) failures.push(`${eventId}.choices: 4択を超えています (${choices.length})。`);
      choices.forEach((choice, index) => {
        choiceCount += 1;
        const label = `${eventId}.choices[${index}]`;
        if (!choice.id) failures.push(`${label}.id: 空です。`);
        if (!choice.text) failures.push(`${label}.text: 空です。`);
        if (!Array.isArray(choice.result)) failures.push(`${label}.result: 配列ではありません。`);
        (Array.isArray(choice.effects) ? choice.effects : []).forEach((effect, effectIndex) => {
          if (!OFFICIAL_KEYS.includes(effect.key)) failures.push(`${label}.effects[${effectIndex}].key: 非正式キー ${effect.key}`);
          if (!["set", "delta", "append"].includes(effect.op)) failures.push(`${label}.effects[${effectIndex}].op: ${effect.op}`);
          if (!effect.path) failures.push(`${label}.effects[${effectIndex}].path: 空です。`);
        });
        (Array.isArray(choice.collect) ? choice.collect : []).forEach((item, collectIndex) => {
          if (!item.category || !item.id) failures.push(`${label}.collect[${collectIndex}]: category/id不足`);
        });
        try {
          const sample = clone(source);
          applyEventEntry(sample, event);
          applyChoice(sample, eventId, choice, null, `test:${eventId}:${index}`);
          OFFICIAL_KEYS.forEach((key) => {
            if (SCORE_KEYS.has(key)) inspectBounds(sample[key], key, failures);
          });
          const next = resolveNext(eventId, event, choice, data);
          if (!pathExists(data, next)) failures.push(`${label}.next: ${next} が存在しません。`);
        } catch (error) {
          failures.push(`${label}: ${error.message}`);
        }
      });
    });

    let pathCount = 0;
    if (data.series && data.series.enabled) {
      return {
        ok: failures.length === 0,
        events: Object.keys(data.events).length,
        choices: choiceCount,
        paths: 1,
        failures
      };
    }
    const walk = (eventId, state, seen, depth) => {
      if (pathCount >= 5000) return;
      if (eventId === "@dayLog" || eventId === "@clear") {
        pathCount += 1;
        return;
      }
      if (!data.events[eventId]) return;
      if (depth > Object.keys(data.events).length * 3 || seen.filter((id) => id === eventId).length > 1) {
        failures.push(`循環経路を検出: ${seen.concat(eventId).join(" → ")}`);
        return;
      }
      const event = data.events[eventId];
      const entered = clone(state);
      applyEventEntry(entered, event);
      const choices = Array.isArray(event.choices) ? event.choices : [];
      if (!choices.length) {
        pathCount += 1;
        return;
      }
      choices.forEach((choice, index) => {
        try {
          const branch = clone(entered);
          applyChoice(branch, eventId, choice, null, `walk:${depth}:${index}`);
          recordChoiceLog(branch, eventId, choice.id);
          walk(resolveNext(eventId, event, choice, data), branch, seen.concat(eventId), depth + 1);
        } catch (_) {
          /* 個別選択肢検査で詳細を記録済み */
        }
      });
    };
    walk(firstEventId(data), clone(source), [], 0);
    if (pathCount >= 5000) failures.push("到達経路が5000件を超えたため検査を打ち切りました。");
    return {
      ok: failures.length === 0,
      events: Object.keys(data.events).length,
      choices: choiceCount,
      paths: pathCount,
      failures
    };
  }

  function getState() {
    return runtime.state ? clone(runtime.state) : null;
  }

  function inspectEvent(eventId, state) {
    const data = getData();
    const event = data.events[eventId];
    if (!event) throw new Error(`イベント ${eventId} がありません。`);
    return {
      intro: eventIntro(event, state || data.initialState),
      results: Object.fromEntries((event.choices || []).map((choice) => [choice.id, choiceResult(choice, state || data.initialState)]))
    };
  }

  function inspectOutcome(state) {
    return evaluateOutcomes(state || getData().initialState, getData().dayLog);
  }

  window.RAML_CHAPTER = Object.freeze({ start, resume, hasSave, clearSave: clearSnapshot });
  window.RAML_CHAPTER_DEBUG = Object.freeze({ simulatePath, selfTest, getState, inspectEvent, inspectOutcome, inspectEnding: evaluateEnding });
})();
