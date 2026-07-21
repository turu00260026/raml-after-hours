(() => {
  "use strict";

  const ASSET_MAP = Object.freeze({
    observationBackground: "bg_observation_black_01",
    comic01: "obs_comic_fragment_p01",
    comic02: "obs_comic_fragment_p02",
    comic03: "obs_comic_fragment_p03",
    scanFx: "fx_observation_scan_01",
    outlineFx: "fx_outline_misregister_01",
    commandRoom: "bg_command_room_night_01",
    speakers: "ui_speaker_slots_rico_nori_01",
    observationMonitor: "ui_observation_monitor_01",
    phone: "ui_phone_hoikuen_01",
    warning: "ui_hostile_warning_01",
    choices: "ui_choice_kansoku_01",
    countdown: "ui_countdown_30_01",
    observationLog: "ui_observation_log_01",
    effectDelta: "ui_effect_delta_01",
    observationHum: "bgm_observation_hum_01",
    scanSound: "se_scan_switch_01",
    mobilizeSound: "se_mobilize_send_01",
    phoneRing: "se_phone_ring_hoikuen_01",
    alertSound: "se_alert_misclass_01",
    choiceSound: "se_choice_confirm_01",
    callSound: "se_call_connect_01",
    countSound: "se_count_tick_01",
    logSound: "se_log_record_01"
  });

  const STAGE_CHARACTERS = Object.freeze({
    rico: {
      name: "リコ", faction: "raml", src: "assets/characters/03_riko.png",
      expressions: {
        listen: "assets/characters/expressions/riko_neutral.png",
        command: "assets/characters/expressions/riko_neutral.png",
        concern: "assets/characters/expressions/riko_concern.png",
        analysis: "assets/characters/expressions/riko_analysis.png",
        alert: "assets/characters/expressions/riko_alert.png",
        decision: "assets/characters/expressions/riko_analysis.png"
      }
    },
    nori: {
      name: "ノリ", faction: "raml", src: "assets/characters/04_nori.png",
      expressions: {
        listen: "assets/characters/expressions/nori_neutral.png",
        command: "assets/characters/expressions/nori_neutral.png",
        concern: "assets/characters/expressions/nori_concern.png",
        analysis: "assets/characters/expressions/nori_analysis.png",
        alert: "assets/characters/expressions/nori_alert.png",
        decision: "assets/characters/expressions/nori_analysis.png"
      }
    },
    renton: {
      name: "レントン", faction: "raml", src: "assets/characters/01_renton.png",
      expressions: {
        listen: "assets/characters/expressions/renton_neutral.png",
        command: "assets/characters/expressions/renton_neutral.png",
        concern: "assets/characters/expressions/renton_concern.png",
        analysis: "assets/characters/expressions/renton_analysis.png",
        alert: "assets/characters/expressions/renton_alert.png"
      }
    },
    sho: {
      name: "ショウ", faction: "raml", src: "assets/characters/02_sho.png",
      expressions: {
        listen: "assets/characters/expressions/sho_neutral.png",
        command: "assets/characters/expressions/sho_neutral.png",
        concern: "assets/characters/expressions/sho_concern.png",
        analysis: "assets/characters/expressions/sho_analysis.png",
        alert: "assets/characters/expressions/sho_alert.png"
      }
    },
    keisuke: {
      name: "ケイスケ", faction: "hostile", src: "assets/characters/05_keisuke.png",
      expressions: {
        listen: "assets/characters/expressions/keisuke_neutral.png",
        command: "assets/characters/expressions/keisuke_neutral.png",
        concern: "assets/characters/expressions/keisuke_concern.png",
        analysis: "assets/characters/expressions/keisuke_analysis.png",
        alert: "assets/characters/expressions/keisuke_alert.png"
      }
    },
    keisuke_robo: {
      name: "ケイスケロボ", faction: "hostile", src: "assets/characters/06_keisukerobo.png",
      expressions: {
        listen: "assets/characters/expressions/keisuke_robo_neutral.png",
        command: "assets/characters/expressions/keisuke_robo_neutral.png",
        concern: "assets/characters/expressions/keisuke_robo_concern.png",
        analysis: "assets/characters/expressions/keisuke_robo_analysis.png",
        alert: "assets/characters/expressions/keisuke_robo_alert.png"
      }
    },
    ryousan: {
      name: "量産型AI兵", faction: "hostile", src: "assets/characters/07_ryousan.png",
      expressions: {
        listen: "assets/characters/expressions/ryousan_neutral.png",
        command: "assets/characters/expressions/ryousan_neutral.png",
        concern: "assets/characters/expressions/ryousan_concern.png",
        analysis: "assets/characters/expressions/ryousan_analysis.png",
        alert: "assets/characters/expressions/ryousan_alert.png"
      }
    },
    magical_shojo: {
      name: "魔法ショウ女", faction: "hostile", src: "assets/characters/08_magicalshojo.png",
      expressions: {
        listen: "assets/characters/expressions/magical_shojo_neutral.png",
        command: "assets/characters/expressions/magical_shojo_neutral.png",
        concern: "assets/characters/expressions/magical_shojo_concern.png",
        analysis: "assets/characters/expressions/magical_shojo_analysis.png",
        alert: "assets/characters/expressions/magical_shojo_alert.png"
      }
    },
    alpaca: {
      name: "アルパカ", faction: "support", src: "assets/characters/expressions/alpaca_neutral.png",
      expressions: {
        listen: "assets/characters/expressions/alpaca_neutral.png",
        command: "assets/characters/expressions/alpaca_neutral.png",
        concern: "assets/characters/expressions/alpaca_concern.png",
        analysis: "assets/characters/expressions/alpaca_analysis.png",
        alert: "assets/characters/expressions/alpaca_alert.png"
      }
    }
  });

  const SPEAKER_KEYS = Object.freeze(Object.fromEntries(
    Object.entries(STAGE_CHARACTERS).map(([key, character]) => [character.name, key])
  ));

  const initialState = {
    day_system: {
      current_day: 1,
      time: "21:47",
      phase: "observation",
      phases: ["observation", "dispatch_select"],
      dispatched: [],
      day_log_entries: []
    },
    character_status: {
      rico: { role: "司令官", available: true, ailments: { hoikuen_call: true } },
      nori: { role: "参謀", available: true, ailments: { shinpan_yake: 2 } },
      renton: { role: "現場ケア", available: false, ailments: { chikoku_gauge: 70 } },
      sho: { role: "パワー枠", available: false, ailments: { at_alpaca_farm: true } },
      keisuke: { role: "敵（GADGET）", available: true, ailments: { gadget_charging: true } },
      maho_sho: { role: "ジャンル汚染の象徴", available: false, ailments: {} }
    },
    genre_pollution: {
      sf: 60,
      mahou_shoujo: 10,
      renai_novel: 5,
      kinniku_battle: 5,
      chiryaku: 10,
      horror: 0,
      nichijou: 10,
      meta_kaisetsu: 0
    },
    life_load: { rico: 65, nori: 70, renton: 75, sho: 20, keisuke: 40 },
    protagonist_score: { rico: 10, nori: 10, renton: 10, sho: 10, keisuke: 5, maho_sho: 0 },
    analysis_level: { value: 10, hint_threshold: 40, meta_link_threshold: 60 },
    ending_route: { flags: { reached: [] } },
    collection_log: {
      seisei_jiko_log: { collected: [], total: 10 },
      bousou_form_zukan: { collected: [], total: 6 },
      henshin_sabun: { collected: [], total: 4 },
      ninmu_log: { collected: [], total: 8 },
      seikatsu_trouble: { collected: [], total: 12 },
      hidden_event: { collected: [], total: 5 },
      end_kaishu: { collected: [], total: 8 }
    }
  };

  const observationLines = [
    line("SYSTEM", "観測記録 01-2147", "system"),
    line("SYSTEM", "現実整合率、低下。", "system"),
    line("SYSTEM", "物語構造への外部干渉を検出。", "system")
  ];

  const fragments = [
    { src: "source/comic/1.jpg", alt: "観測対象資料・断片01", asset: ASSET_MAP.comic01 },
    { src: "source/comic/2.jpg", alt: "観測対象資料・断片02", asset: ASSET_MAP.comic02 },
    { src: "source/comic/3.png", alt: "観測対象資料・断片03", asset: ASSET_MAP.comic03 }
  ];

  const commandLines = [
    line("リコ", "また現実の法則が書き換わってる"),
    line("ノリ", "今回は物語構造ごと侵食されています"),
    line("リコ", "発生地点は"),
    line("ノリ", "市内北区。半径百八十メートル。映像上の人物より先に、役割が固定されています"),
    line("リコ", "人が動いた結果じゃない。『そういう場面』に、人が押し込まれてる"),
    line("ノリ", "はい。SF層の数値は六十。ただし、下に別のジャンルが形成されています。まだ名称は確定できません"),
    line("リコ", "未確定のまま広がるほうが厄介ね。緊急招集を出す。現場候補の状態を"),
    line("ノリ", "レントンさんは本業対応中。終了時刻は未定です"),
    line("リコ", "連絡はつく？"),
    line("ノリ", "短文のみ。『患者さんの対応が終わり次第向かう』"),
    line("リコ", "了解。急がせない。ショウは"),
    line("ノリ", "アルパカ牧場です"),
    line("リコ", "……位置情報は取れてる？"),
    line("ノリ", "取れています。本人から『あと一セット』と"),
    line("リコ", "一セットの単位は確認しなくていい。招集だけ送って"),
    line("ノリ", "送信します", "normal", "mobilize"),
    line("リコ", "保育園", "normal", "phone"),
    line("ノリ", "出てください"),
    line("リコ", "出る。十秒で引き継げる形にする"),
    line("ノリ", "待ってください。生活回線が敵性通信へ分類されました", "normal", "alert"),
    line("リコ", "番号は正規。着信時刻も、園の連絡手順も一致してる"),
    line("ノリ", "分類器だけが、保護者への呼び出しを『人質を使った行動強制』と読んでいます"),
    line("リコ", "現実じゃなく、説明のされ方が侵食された"),
    line("ノリ", "三十秒あれば誤分類の経路を追えます。ただし、その間も着信は続きます"),
    line("リコ", "司令系統と生活回線を同時に落とさない。順番を決める")
  ];

  const routes = {
    A: {
      id: "C1_KANSOKU_A",
      title: "先に電話に出る",
      tag: "LIFE FIRST",
      lines: [
        line("リコ", "生活回線を優先。ノリ、観測窓は固定。新しい判断は私が戻るまで保留"),
        line("ノリ", "了解。現在値の保持に限定します"),
        line("リコ", "保育園からの電話は、出ないと情報が増えない。情報がなければ段取りも組めない"),
        line("リコ", "はい、母です。……はい。熱は何度ですか。意識と水分は。……分かりました。迎えの手配を確認して、五分以内に折り返します", "normal", "connect"),
        line("ノリ", "敵性通信ではありませんでした"),
        line("リコ", "最初から違う。緊急なのは本当。ただし、敵じゃない"),
        line("ノリ", "分類器は『行動を強制された』という結果だけを見ています"),
        line("リコ", "生活の連絡は、だいたい予定を強制的に変える。でも、それを全部攻撃扱いしたら暮らせない"),
        line("ノリ", "分類条件を修正候補へ送ります"),
        line("リコ", "今は記録だけ。次は現場に誰を出すか決める")
      ],
      log: {
        mission: "正規の生活回線を確認。誤分類警告を手動解除。",
        life: "緊急連絡を受領。迎えの再手配へ移行。"
      },
      merge: [
        line("ノリ", "観測窓、保持しています"),
        line("リコ", "ありがとう。家庭側は迎えの再手配に入った。こっちは出動判断へ進む"),
        line("ノリ", "候補を四つに整理します")
      ],
      effects: [
        effect("day_system", "time", "21:49"),
        effect("day_system", "phase", "dispatch_select"),
        effect("character_status", "rico.ailments.hoikuen_call", false),
        delta("genre_pollution", "nichijou", 6),
        delta("life_load", "rico", 5),
        delta("protagonist_score", "rico", 3)
      ],
      deltaRows: [
        ["day_system", "Day 1 / 21:47 / observation → Day 1 / 21:49 / dispatch_select"],
        ["character_status", "rico.hoikuen_call: active → cleared / nori: 変化なし"],
        ["genre_pollution", "nichijou 10 → 16 / sf 60 → 60"],
        ["life_load", "rico 65 → 70 / nori 70 → 70"],
        ["protagonist_score", "rico 10 → 13 / nori 10 → 10"],
        ["analysis_level", "10 → 10"],
        ["ending_route", "変化なし / flags.reached: []"],
        ["collection_log", "未回収 → LOG_C1_001・LIFE_RICO_HOIKUEN 記録"]
      ]
    },
    B: {
      id: "C1_KANSOKU_B",
      title: "ノリに司令を預けて出る",
      tag: "LIMITED DELEGATION",
      lines: [
        line("リコ", "ノリ、司令を預ける。権限は観測継続と招集応答の整理まで。出動決定は保留"),
        line("ノリ", "範囲を確認。観測継続、応答整理、出動決定はしない"),
        line("リコ", "そう。判断できることと、今決めていいことは別"),
        line("ノリ", "了解しました。時計を同期します"),
        line("リコ", "二分で戻る"),
        line("リコ", "はい、母です。……三十八度二分。水分は取れてますか。……ありがとうございます。迎えの手配を変えます。五分以内に折り返します", "normal", "connect"),
        line("ノリ", "招集応答。一件目、レントンさんは本業終了後。二件目、ショウさんは移動準備に入ったとのことです"),
        line("リコ", "記録して。現場到着予測はまだ出さないで"),
        line("ノリ", "なぜです"),
        line("リコ", "生活側の終了時刻は、予定じゃなく条件で決まるから。本人の連絡より先に数字で固定しない"),
        line("ノリ", "……了解。予測値ではなく、未確定条件として扱います"),
        line("リコ", "引き継ぎ完了。司令を戻して"),
        line("ノリ", "返却します"),
        line("リコ", "生活も任務も止めなかった。次の判断に使える情報は揃った")
      ],
      log: {
        mission: "司令権限を限定委任。観測と招集整理を並行実施。",
        life: "緊急連絡を受領。迎えの再手配へ移行。"
      },
      merge: [
        line("リコ", "権限を区切れば、生活の割り込みは指揮系統の断絶にならない"),
        line("ノリ", "次は、その指揮系統から誰を現場へ出すかです"),
        line("リコ", "候補を出して")
      ],
      effects: [
        effect("day_system", "time", "21:50"),
        effect("day_system", "phase", "dispatch_select"),
        effect("character_status", "rico.ailments.hoikuen_call", false),
        delta("genre_pollution", "chiryaku", 6),
        delta("life_load", "rico", 3),
        delta("life_load", "nori", 3),
        delta("protagonist_score", "rico", 1),
        delta("protagonist_score", "nori", 4),
        delta("analysis_level", "value", 1)
      ],
      deltaRows: [
        ["day_system", "Day 1 / 21:47 / observation → Day 1 / 21:50 / dispatch_select"],
        ["character_status", "rico.hoikuen_call: active → cleared / nori: 変化なし"],
        ["genre_pollution", "chiryaku 10 → 16 / sf 60 → 60"],
        ["life_load", "rico 65 → 68 / nori 70 → 73"],
        ["protagonist_score", "rico 10 → 11 / nori 10 → 14"],
        ["analysis_level", "10 → 11"],
        ["ending_route", "変化なし / flags.reached: []"],
        ["collection_log", "未回収 → LOG_C1_001・LIFE_RICO_HOIKUEN 記録"]
      ]
    },
    C: {
      id: "C1_KANSOKU_C",
      title: "30秒だけ誤分類を解析してから出る",
      tag: "ANALYSIS 00:30",
      lines: [
        line("リコ", "三十秒だけ解析する。着信は維持。三十秒後は結果に関係なく出る"),
        line("ノリ", "生活回線を待たせます"),
        line("リコ", "待たせる。だから上限を決める。無制限に解析しない"),
        line("ノリ", "カウント開始", "normal", "countdown"),
        line("ノリ", "発信元は正規。暗号化も既知。汚染は回線ではなく、意味づけの層です"),
        line("リコ", "『子どもの体調変化』『保護者を呼ぶ』『現在の行動を中断させる』"),
        line("ノリ", "三条件を、敵対行為の文型へ変換しています"),
        line("リコ", "主語が抜けてる。誰が、何を守るために呼んでいるかを読んでない"),
        line("ノリ", "分類器にとっては、行動を変えさせる連絡はすべて攻撃です"),
        line("リコ", "それなら緊急招集も敵性通信になる"),
        line("ノリ", "……一致率九十八パーセント"),
        line("リコ", "解析終了。出る", "normal", "connect"),
        line("リコ", "はい、母です。お待たせしました。……三十八度二分。分かりました。迎えの手配を変えて、五分以内に折り返します"),
        line("ノリ", "三十秒の遅延で、誤分類の条件は特定できました"),
        line("リコ", "代わりに、三十秒分の心配を園と私が持った。解析結果には、そのコストも残して"),
        line("ノリ", "記録します。正解ではなく、交換条件として"),
        line("リコ", "それでいい。次は出動判断")
      ],
      waitAfterLine: 10,
      log: {
        mission: "誤分類経路を特定。生活上の行動変更が敵対行為へ変換されている。",
        life: "解析後に緊急連絡を受領。迎えの再手配へ移行。"
      },
      merge: [
        line("ノリ", "誤分類条件は次の現場判断にも使えます"),
        line("リコ", "使う。ただし、解析できることと待たせていいことは同じじゃない"),
        line("ノリ", "了解。出動候補を表示します")
      ],
      effects: [
        effect("day_system", "time", "21:50"),
        effect("day_system", "phase", "dispatch_select"),
        effect("character_status", "rico.ailments.hoikuen_call", false),
        delta("genre_pollution", "meta_kaisetsu", 8),
        delta("genre_pollution", "sf", 2),
        delta("life_load", "rico", 8),
        delta("life_load", "nori", 1),
        delta("protagonist_score", "rico", 2),
        delta("protagonist_score", "nori", 1),
        delta("analysis_level", "value", 8)
      ],
      deltaRows: [
        ["day_system", "Day 1 / 21:47 / observation → Day 1 / 21:50 / dispatch_select"],
        ["character_status", "rico.hoikuen_call: active → cleared / nori: 変化なし"],
        ["genre_pollution", "meta_kaisetsu 0 → 8 / sf 60 → 62"],
        ["life_load", "rico 65 → 73 / nori 70 → 71"],
        ["protagonist_score", "rico 10 → 12 / nori 10 → 11"],
        ["analysis_level", "10 → 18"],
        ["ending_route", "変化なし / flags.reached: []"],
        ["collection_log", "未回収 → LOG_C1_001・LIFE_RICO_HOIKUEN 記録"]
      ]
    }
  };

  const els = {
    boot: byId("bootScreen"),
    shell: byId("gameShell"),
    start: byId("startButton"),
    resume: byId("resumeButton"),
    mute: byId("muteButton"),
    restart: byId("restartButton"),
    objective: byId("objectiveText"),
    phase: byId("phaseText"),
    ricoCard: byId("ricoCard"),
    noriCard: byId("noriCard"),
    ricoStatus: byId("ricoStatus"),
    stageVisual: byId("stageVisual"),
    sceneComposition: byId("sceneComposition"),
    fragmentFrame: byId("fragmentFrame"),
    fragmentImage: byId("fragmentImage"),
    fragmentNumber: byId("fragmentNumber"),
    outline: byId("outlineMisregister"),
    phone: byId("phoneCard"),
    phoneStatus: byId("phoneStatus"),
    alert: byId("hostileAlert"),
    countdown: byId("countdown"),
    countdownValue: byId("countdownValue"),
    sceneCode: byId("sceneCode"),
    clock: byId("clockText"),
    dialogue: byId("dialogue"),
    choices: byId("choices"),
    instruction: byId("instructionText"),
    continue: byId("continueButton"),
    storyConsole: byId("storyConsole"),
    resultTemplate: byId("resultTemplate"),
    dayValue: byId("dayValue"),
    dayPhase: byId("dayPhase"),
    ricoLifeValue: byId("ricoLifeValue"),
    ricoLifeBar: byId("ricoLifeBar"),
    noriLifeValue: byId("noriLifeValue"),
    noriLifeBar: byId("noriLifeBar"),
    sfValue: byId("sfValue"),
    sfBar: byId("sfBar"),
    analysisValue: byId("analysisValue"),
    analysisBar: byId("analysisBar"),
    leadValue: byId("leadValue"),
    logValue: byId("logValue"),
    nextValue: byId("nextValue")
  };

  let state = clone(initialState);
  let mode = "boot";
  let fragmentIndex = 0;
  let commandIndex = 0;
  let selectedRoute = null;
  let routeIndex = 0;
  let mergeIndex = 0;
  let routeApplied = false;
  let selectionLocked = false;
  let muted = false;
  let audioContext = null;
  let masterGain = null;
  let humNodes = [];
  let phoneTimer = null;
  let countdownTimer = null;
  let countdownDeadline = 0;
  let countdownComplete = false;
  let activeSceneCharacters = [];
  const sceneTimers = [];

  function byId(id) {
    return document.getElementById(id);
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function line(speaker, text, type = "normal", cue = "", expression = "") {
    return { speaker, text, type, cue, expression };
  }

  function inferExpression(item) {
    if (item.expression) return item.expression;
    if (item.cue === "alert" || /(敵性|攻撃|侵食|緊急|厄介|嫌な予感)/.test(item.text)) return "alert";
    if (item.cue === "phone" || item.cue === "connect" || /(保育園|母です|発熱|熱は|迎え|生活回線|心配)/.test(item.text)) return "concern";
    if (item.cue === "countdown" || /(解析|分類|数値|一致率|条件|観測窓|経路)/.test(item.text)) return "analysis";
    return "command";
  }

  function orderSceneCharacters(characters, primary) {
    const unique = [...new Set(characters)].filter((key) => STAGE_CHARACTERS[key]).slice(0, 2);
    const hasRaml = unique.some((key) => STAGE_CHARACTERS[key].faction === "raml");
    const hasHostile = unique.some((key) => STAGE_CHARACTERS[key].faction === "hostile");
    if (hasRaml && hasHostile) {
      return unique.sort((a, b) => (STAGE_CHARACTERS[a].faction === "raml" ? -1 : 1) - (STAGE_CHARACTERS[b].faction === "raml" ? -1 : 1));
    }
    if (primary && unique.includes(primary)) return [primary, ...unique.filter((key) => key !== primary)];
    return unique;
  }

  function resolveStagePortrait(key, expression = "listen") {
    const character = STAGE_CHARACTERS[key];
    if (!character) return "";
    return character.expressions?.[expression] || character.expressions?.listen || character.src;
  }

  function showSceneCast(characters, primary = characters[0]) {
    activeSceneCharacters = orderSceneCharacters(characters, primary);
    if (!activeSceneCharacters.length) {
      hideSceneComposition();
      return;
    }
    els.sceneComposition.dataset.layout = activeSceneCharacters.length === 1 ? "solo" : "duo";
    els.sceneComposition.classList.remove("is-hidden");
    els.sceneComposition.innerHTML = activeSceneCharacters.map((key, index) => {
      const character = STAGE_CHARACTERS[key];
      const side = index === 0 ? "left" : "right";
      const portraitType = character.expressions ? "expression" : "standing";
      return `<figure class="scene-character scene-character-${side}" data-character="${key}" data-faction="${character.faction}" data-expression="listen" data-portrait="${portraitType}"><img src="${resolveStagePortrait(key, "listen")}" alt="${character.name}"></figure>`;
    }).join("");
  }

  function showSceneStill(src, alt) {
    activeSceneCharacters = [];
    els.sceneComposition.dataset.layout = "still";
    els.sceneComposition.classList.remove("is-hidden");
    els.sceneComposition.innerHTML = `<img class="scene-still" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}">`;
  }

  function hideSceneComposition() {
    activeSceneCharacters = [];
    els.sceneComposition.classList.add("is-hidden");
    els.sceneComposition.replaceChildren();
  }

  function updateSceneForLine(item) {
    if (!activeSceneCharacters.length) return;
    const speakerKey = SPEAKER_KEYS[item.speaker] || "";
    const expression = inferExpression(item);
    els.sceneComposition.querySelectorAll(".scene-character").forEach((slot) => {
      const isSpeaking = slot.dataset.character === speakerKey;
      slot.classList.toggle("is-speaking", isSpeaking);
      slot.classList.toggle("is-listening", !isSpeaking);
      const nextExpression = isSpeaking ? expression : "listen";
      slot.dataset.expression = nextExpression;
      const image = slot.querySelector("img");
      const nextSource = resolveStagePortrait(slot.dataset.character, nextExpression);
      if (image && nextSource) image.src = nextSource;
    });
  }

  function effect(key, path, set) {
    return { key, path, set };
  }

  function delta(key, path, amount) {
    return { key, path, delta: amount };
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderSingleLine(item) {
    const speakerClass = item.type === "system" ? "system" : item.speaker === "リコ" ? "rico" : item.speaker === "ノリ" ? "nori" : "";
    const rowClass = item.type === "system" ? "dialogue-line system-line" : item.type === "narration" ? "dialogue-line narration-line" : "dialogue-line";
    els.dialogue.innerHTML = `<div class="${rowClass}"><span class="speaker ${speakerClass}">${escapeHtml(item.speaker)}</span><p>${escapeHtml(item.text)}</p></div>`;
    els.ricoCard.classList.toggle("is-speaking", item.speaker === "リコ");
    els.noriCard.classList.toggle("is-speaking", item.speaker === "ノリ");
    updateSceneForLine(item);
  }

  function startGame() {
    state = clone(initialState);
    mode = "observation";
    fragmentIndex = 0;
    commandIndex = 0;
    selectedRoute = null;
    routeIndex = 0;
    mergeIndex = 0;
    routeApplied = false;
    selectionLocked = false;
    countdownComplete = false;
    hideSceneComposition();
    els.boot.classList.add("is-hidden");
    els.shell.classList.remove("is-hidden");
    ensureAudio();
    startHum();
    updateTelemetry();
    showFragment(0);
  }

  function showFragment(index) {
    mode = "observation";
    fragmentIndex = index;
    const fragment = fragments[index];
    els.stageVisual.classList.remove("is-blackout");
    els.fragmentFrame.classList.remove("is-hidden", "is-misregistered", "is-scanning");
    els.fragmentFrame.dataset.fragment = String(index + 1);
    els.fragmentFrame.dataset.assetId = fragment.asset;
    els.fragmentImage.src = fragment.src;
    els.fragmentImage.alt = fragment.alt;
    els.fragmentNumber.textContent = `FRAGMENT / ${String(index + 1).padStart(2, "0")}`;
    els.sceneCode.textContent = `SC-01-P${index + 1} / 観測映像`;
    els.objective.textContent = "観測記録を受信する";
    els.phase.textContent = "PHASE / OBSERVATION";
    els.continue.disabled = true;
    els.continue.classList.remove("is-hidden");
    els.continue.innerHTML = "自動観測中 <span>…</span>";
    els.instruction.textContent = `${index + 1} / 3 — 断片は自動で切り替わります。`;
    renderSingleLine(observationLines[index]);
    schedule(() => transitionFragment(index), 1450);
  }

  function transitionFragment(index) {
    if (mode !== "observation" || index !== fragmentIndex) return;
    if (index < fragments.length - 1) {
      els.fragmentFrame.classList.add("is-scanning");
      playScanSound();
      schedule(() => showFragment(index + 1), 140);
      return;
    }
    mode = "observation-end";
    els.sceneCode.textContent = "SC-01-END / 輪郭追跡異常";
    els.fragmentFrame.classList.add("is-misregistered");
    schedule(() => els.stageVisual.classList.add("is-blackout"), 600);
    schedule(startCommandScene, 780);
  }

  function startCommandScene() {
    mode = "command";
    commandIndex = 0;
    els.stageVisual.classList.remove("is-blackout");
    els.fragmentFrame.classList.add("is-hidden");
    els.continue.disabled = false;
    els.continue.innerHTML = "次へ <span>→</span>";
    els.instruction.textContent = "次へ／会話欄／Enter・Spaceで1台詞ずつ進みます。";
    els.sceneCode.textContent = "SC-02 / 司令室観測";
    els.objective.textContent = "発生地点と招集状況を確認する";
    els.phase.textContent = "PHASE / COMMAND";
    showSceneCast(["rico", "nori"], "rico");
    renderCommandLine();
  }

  function renderCommandLine() {
    const item = commandLines[commandIndex];
    renderSingleLine(item);
    if (item.cue === "mobilize") playMobilizeSound();
    if (item.cue === "phone") showPhoneRinging();
    if (item.cue === "alert") showMisclassificationAlert();
  }

  function advanceCommand() {
    if (commandIndex < commandLines.length - 1) {
      commandIndex += 1;
      renderCommandLine();
    } else {
      showChoices();
    }
  }

  function showChoices() {
    mode = "choice";
    els.sceneCode.textContent = "SC-03 / 初動判断";
    els.objective.textContent = "司令系統と生活回線の順番を決める";
    els.phase.textContent = "PHASE / DECISION";
    els.instruction.textContent = "結果数値は伏せられています。3つから1つ選んでください。";
    els.continue.classList.add("is-hidden");
    updateSceneForLine({ speaker: "", text: "", type: "system", cue: "", expression: "decision" });
    els.choices.classList.remove("is-hidden");
    els.choices.innerHTML = Object.entries(routes).map(([key, route]) => `
      <button class="choice-button" type="button" data-route="${key}" data-choice-id="${route.id}">
        <span>${key}</span><b>${escapeHtml(route.title)}</b><small>${escapeHtml(route.id)}</small>
      </button>
    `).join("");
    els.choices.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => selectRoute(button.dataset.route));
    });
  }

  function selectRoute(key) {
    if (selectionLocked || !routes[key]) return;
    selectionLocked = true;
    selectedRoute = key;
    routeIndex = 0;
    els.choices.querySelectorAll("button").forEach((button) => { button.disabled = true; });
    playChoiceSound();
    schedule(startRoute, 120);
  }

  function startRoute() {
    mode = "route";
    els.choices.classList.add("is-hidden");
    els.continue.classList.remove("is-hidden");
    els.continue.disabled = false;
    els.continue.innerHTML = "次へ <span>→</span>";
    els.phase.textContent = `PHASE / ROUTE ${selectedRoute}`;
    els.objective.textContent = routes[selectedRoute].title;
    renderRouteLine();
  }

  function renderRouteLine() {
    const route = routes[selectedRoute];
    const item = route.lines[routeIndex];
    els.sceneCode.textContent = `SC-${selectedRoute}1 / ${route.title}`;
    els.instruction.textContent = `${routeIndex + 1} / ${route.lines.length} — 選択後の会話`;
    renderSingleLine(item);

    if (item.cue === "connect") connectCall();
    if (item.cue === "countdown") startCountdown();

    const waitingForCountdown = selectedRoute === "C" && routeIndex === route.waitAfterLine && !countdownComplete;
    els.continue.disabled = waitingForCountdown;
    if (waitingForCountdown) {
      els.continue.innerHTML = "解析終了を待機中 <span>…</span>";
      els.instruction.textContent = "30秒はスキップできません。生活回線を待たせる時間も、この選択の影響です。";
    } else {
      els.continue.innerHTML = "次へ <span>→</span>";
    }
  }

  function advanceRoute() {
    const route = routes[selectedRoute];
    if (selectedRoute === "C" && routeIndex === route.waitAfterLine && !countdownComplete) return;
    if (routeIndex < route.lines.length - 1) {
      routeIndex += 1;
      renderRouteLine();
    } else {
      showRouteLog();
    }
  }

  function showRouteLog() {
    const route = routes[selectedRoute];
    applyRoute(route);
    mode = "route-log";
    els.sceneCode.textContent = `SC-${selectedRoute}2 / 観測ログ`;
    els.objective.textContent = "選択の事実を観測ログへ記録する";
    els.instruction.textContent = "次へ進むと、正式8管理項目の差分を表示します。";
    els.continue.disabled = false;
    els.continue.innerHTML = "8管理項目を確認 <span>→</span>";
    els.dialogue.innerHTML = `
      <div class="log-records" data-asset-id="${ASSET_MAP.observationLog}">
        <div><small>LOG_C1_001 / RECORDED</small><b>${escapeHtml(route.log.mission)}</b></div>
        <div><small>LIFE_RICO_HOIKUEN / RECORDED</small><b>${escapeHtml(route.log.life)}</b></div>
      </div>
    `;
    playLogSound();
    updateTelemetry();
  }

  function showDelta() {
    const route = routes[selectedRoute];
    mode = "route-delta";
    els.sceneCode.textContent = `SC-${selectedRoute}3 / 8管理項目の差分`;
    els.objective.textContent = "生活と物語への影響を確認する";
    els.instruction.textContent = "変化しない項目も省略していません。";
    els.continue.innerHTML = "合流会話へ <span>→</span>";
    els.dialogue.innerHTML = `<div class="delta-table" data-asset-id="${ASSET_MAP.effectDelta}">${route.deltaRows.map(([key, value]) => `
      <div class="delta-row"><span>${escapeHtml(key)}</span><b>${escapeHtml(value)}</b></div>
    `).join("")}</div>`;
  }

  function startMerge() {
    mode = "merge";
    mergeIndex = 0;
    els.alert.classList.add("is-hidden");
    els.phone.classList.remove("is-hidden");
    els.phone.dataset.state = "reschedule";
    els.phoneStatus.textContent = "迎えの再手配中";
    els.ricoStatus.textContent = "迎えの再手配中";
    els.sceneCode.textContent = `SC-${selectedRoute}4 / 合流会話`;
    els.objective.textContent = "生活回線を残したまま出動判断へ進む";
    els.continue.innerHTML = "次へ <span>→</span>";
    renderMergeLine();
  }

  function renderMergeLine() {
    const item = routes[selectedRoute].merge[mergeIndex];
    els.instruction.textContent = `${mergeIndex + 1} / ${routes[selectedRoute].merge.length} — 全ルートは次の出動判断へ合流します。`;
    renderSingleLine(item);
  }

  function advanceMerge() {
    if (mergeIndex < routes[selectedRoute].merge.length - 1) {
      mergeIndex += 1;
      renderMergeLine();
    } else {
      showEnd();
    }
  }

  function showEnd() {
    const route = routes[selectedRoute];
    mode = "result";
    stopPhoneRing();
    stopCountdown();
    stopHum();
    els.sceneCode.textContent = `END-PREVIEW / ${route.id}`;
    els.objective.textContent = "最初の1イベント完了";
    els.phase.textContent = "PHASE / DISPATCH SELECT READY";
    els.nextValue.textContent = "出動選択へ";
    els.clock.textContent = `DAY 01 — ${state.day_system.time}`;
    const panel = els.resultTemplate.content.cloneNode(true);
    panel.querySelector("h2").textContent = route.title;
    panel.querySelector(".result-heading p").textContent = "選択の影響を記録しました。生活側の再手配を残したまま、次の出動判断へ合流します。";
    panel.querySelector(".log-records").innerHTML = `
      <div><small>LOG_C1_001 / RECORDED</small><b>${escapeHtml(route.log.mission)}</b></div>
      <div><small>LIFE_RICO_HOIKUEN / RECORDED</small><b>${escapeHtml(route.log.life)}</b></div>
    `;
    panel.querySelector(".delta-table").innerHTML = route.deltaRows.map(([key, value]) => `<div class="delta-row"><span>${escapeHtml(key)}</span><b>${escapeHtml(value)}</b></div>`).join("");
    panel.querySelector(".replay-button").addEventListener("click", () => window.location.reload());
    const chapterStartButton = panel.querySelector(".chapter-start-button");
    chapterStartButton.addEventListener("click", () => {
      if (!window.RAML_CHAPTER?.start) {
        chapterStartButton.disabled = true;
        chapterStartButton.textContent = "Day 1データを確認してください";
        return;
      }
      window.RAML_CHAPTER.start(clone(state));
    });
    els.storyConsole.replaceChildren(panel);
    updateTelemetry();
  }

  function nextStep() {
    if (els.continue.disabled) return;
    playTone(330, 0.045, 0.012);
    if (mode === "command") advanceCommand();
    else if (mode === "route") advanceRoute();
    else if (mode === "route-log") showDelta();
    else if (mode === "route-delta") startMerge();
    else if (mode === "merge") advanceMerge();
  }

  function showPhoneRinging() {
    els.phone.classList.remove("is-hidden");
    els.phone.dataset.state = "ringing";
    els.phoneStatus.textContent = "着信中";
    els.ricoStatus.textContent = "生活回線対応";
    startPhoneRing();
  }

  function showMisclassificationAlert() {
    els.alert.classList.remove("is-hidden");
    els.phase.textContent = "PHASE / CLASSIFICATION ERROR";
    playAlertSound();
  }

  function connectCall() {
    stopPhoneRing();
    els.phone.dataset.state = "connected";
    els.phoneStatus.textContent = "通話中";
    playTone(520, 0.08, 0.025);
  }

  function startCountdown() {
    stopCountdown();
    countdownComplete = false;
    countdownDeadline = Date.now() + 30000;
    els.countdown.classList.remove("is-hidden");
    els.phone.classList.remove("is-hidden");
    els.phone.dataset.state = "ringing";
    els.phoneStatus.textContent = "着信中";
    const tick = () => {
      const remaining = Math.max(0, Math.ceil((countdownDeadline - Date.now()) / 1000));
      els.countdownValue.textContent = `00:${String(remaining).padStart(2, "0")}`;
      if (remaining <= 5 && remaining > 0 && els.countdown.dataset.lastTick !== String(remaining)) {
        els.countdown.dataset.lastTick = String(remaining);
        playTone(900, 0.045, 0.018);
      }
      if (remaining === 0) completeCountdown();
    };
    tick();
    countdownTimer = window.setInterval(tick, 200);
  }

  function completeCountdown() {
    if (countdownComplete) return;
    countdownComplete = true;
    stopCountdown();
    els.countdownValue.textContent = "00:00";
    playTone(600, 0.1, 0.028);
    if (mode === "route" && selectedRoute === "C" && routeIndex === routes.C.waitAfterLine) {
      routeIndex += 1;
      els.continue.disabled = false;
      renderRouteLine();
    }
  }

  function stopCountdown() {
    if (countdownTimer !== null) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
  }

  function applyRoute(route) {
    if (routeApplied) return;
    applyEffectsTo(state, route);
    routeApplied = true;
  }

  function applyEffectsTo(targetState, route) {
    route.effects.forEach((entry) => {
      const target = getPathTarget(targetState[entry.key], entry.path);
      if (Object.prototype.hasOwnProperty.call(entry, "set")) {
        target.parent[target.property] = entry.set;
      } else {
        const value = Number(target.parent[target.property]) + Number(entry.delta);
        target.parent[target.property] = Math.min(100, Math.max(0, value));
      }
    });
    collectOnce(targetState.collection_log.ninmu_log.collected, "LOG_C1_001");
    collectOnce(targetState.collection_log.seikatsu_trouble.collected, "LIFE_RICO_HOIKUEN");
  }

  function getPathTarget(root, path) {
    const parts = path.split(".");
    const property = parts.pop();
    const parent = parts.reduce((current, part) => current[part], root);
    return { parent, property };
  }

  function collectOnce(list, id) {
    if (!list.includes(id)) list.push(id);
  }

  function updateTelemetry() {
    els.dayValue.textContent = `DAY ${String(state.day_system.current_day).padStart(2, "0")} / ${state.day_system.time}`;
    els.dayPhase.textContent = state.day_system.phase;
    setMeter(els.ricoLifeValue, els.ricoLifeBar, state.life_load.rico);
    setMeter(els.noriLifeValue, els.noriLifeBar, state.life_load.nori);
    setMeter(els.sfValue, els.sfBar, state.genre_pollution.sf);
    setMeter(els.analysisValue, els.analysisBar, state.analysis_level.value);
    els.leadValue.textContent = `R ${state.protagonist_score.rico} / N ${state.protagonist_score.nori}`;
    const logs = state.collection_log.ninmu_log.collected.length + state.collection_log.seikatsu_trouble.collected.length;
    els.logValue.textContent = `${logs} / 2`;
    els.clock.textContent = `DAY 01 — ${state.day_system.time}`;
  }

  function setMeter(label, bar, value) {
    label.textContent = String(value);
    bar.style.width = `${Math.min(100, Math.max(0, value))}%`;
  }

  function schedule(callback, delay) {
    const id = window.setTimeout(callback, delay);
    sceneTimers.push(id);
  }

  function ensureAudio() {
    if (audioContext) return;
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return;
    audioContext = new AudioCtor();
    masterGain = audioContext.createGain();
    masterGain.gain.value = muted ? 0 : 1;
    masterGain.connect(audioContext.destination);
  }

  function startHum() {
    ensureAudio();
    if (!audioContext || humNodes.length) return;
    [55, 82].forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = index === 0 ? "sine" : "triangle";
      oscillator.frequency.value = frequency;
      gain.gain.value = index === 0 ? 0.008 : 0.003;
      oscillator.connect(gain).connect(masterGain);
      oscillator.start();
      humNodes.push({ oscillator, gain });
    });
  }

  function stopHum() {
    humNodes.forEach(({ oscillator }) => {
      try { oscillator.stop(); } catch (_) { /* already stopped */ }
    });
    humNodes = [];
  }

  function playTone(frequency, duration, volume, endFrequency = frequency) {
    if (muted) return;
    ensureAudio();
    if (!audioContext || !masterGain) return;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.frequency.linearRampToValueAtTime(endFrequency, audioContext.currentTime + duration);
    gain.gain.setValueAtTime(volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + duration);
    oscillator.connect(gain).connect(masterGain);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  }

  function playScanSound() {
    playTone(980, 0.12, 0.018, 280);
  }

  function playMobilizeSound() {
    playTone(620, 0.08, 0.018, 930);
  }

  function playAlertSound() {
    playTone(220, 0.07, 0.028);
    schedule(() => playTone(220, 0.09, 0.022), 120);
  }

  function playChoiceSound() {
    playTone(480, 0.12, 0.025, 360);
  }

  function playLogSound() {
    playTone(700, 0.12, 0.022, 880);
  }

  function startPhoneRing() {
    stopPhoneRing();
    const ring = () => {
      playTone(440, 0.08, 0.018);
      schedule(() => playTone(660, 0.08, 0.016), 120);
    };
    ring();
    phoneTimer = window.setInterval(ring, 1400);
  }

  function stopPhoneRing() {
    if (phoneTimer !== null) {
      clearInterval(phoneTimer);
      phoneTimer = null;
    }
  }

  function toggleMute() {
    muted = !muted;
    els.mute.setAttribute("aria-pressed", String(muted));
    els.mute.textContent = muted ? "音声: OFF" : "音声: ON";
    if (masterGain) masterGain.gain.value = muted ? 0 : 1;
    if (!muted) playTone(440, 0.06, 0.018);
  }

  function simulateRoute(key) {
    if (!routes[key]) throw new Error(`Unknown route: ${key}`);
    const simulated = clone(initialState);
    applyEffectsTo(simulated, routes[key]);
    return simulated;
  }

  function runSelfTest() {
    const expected = {
      A: { time: "21:49", rico: 70, nori: 70, sf: 60, nichijou: 16, chiryaku: 10, meta: 0, analysis: 10, ricoLead: 13, noriLead: 10 },
      B: { time: "21:50", rico: 68, nori: 73, sf: 60, nichijou: 10, chiryaku: 16, meta: 0, analysis: 11, ricoLead: 11, noriLead: 14 },
      C: { time: "21:50", rico: 73, nori: 71, sf: 62, nichijou: 10, chiryaku: 10, meta: 8, analysis: 18, ricoLead: 12, noriLead: 11 }
    };
    const failures = [];
    Object.entries(expected).forEach(([key, wanted]) => {
      const actual = simulateRoute(key);
      const checks = {
        time: actual.day_system.time,
        rico: actual.life_load.rico,
        nori: actual.life_load.nori,
        sf: actual.genre_pollution.sf,
        nichijou: actual.genre_pollution.nichijou,
        chiryaku: actual.genre_pollution.chiryaku,
        meta: actual.genre_pollution.meta_kaisetsu,
        analysis: actual.analysis_level.value,
        ricoLead: actual.protagonist_score.rico,
        noriLead: actual.protagonist_score.nori
      };
      Object.entries(wanted).forEach(([name, value]) => {
        if (checks[name] !== value) failures.push(`${key}.${name}: expected ${value}, got ${checks[name]}`);
      });
      if (actual.day_system.phase !== "dispatch_select") failures.push(`${key}.phase: dispatch_select ではありません`);
      if (actual.character_status.rico.ailments.hoikuen_call !== false) failures.push(`${key}.hoikuen_call: false ではありません`);
      if (!actual.collection_log.ninmu_log.collected.includes("LOG_C1_001")) failures.push(`${key}.LOG_C1_001: 未回収`);
      if (!actual.collection_log.seikatsu_trouble.collected.includes("LIFE_RICO_HOIKUEN")) failures.push(`${key}.LIFE_RICO_HOIKUEN: 未回収`);
      if (actual.ending_route.flags.reached.length !== 0) failures.push(`${key}.ending_route: 範囲外のENDが発火`);
      if (actual.day_system.day_log_entries.length !== 0) failures.push(`${key}.day_log_entries: 不変条件違反`);
    });
    return { ok: failures.length === 0, routes: Object.keys(expected).length, failures };
  }

  window.RAML_EVENT_DEBUG = Object.freeze({
    assetMap: ASSET_MAP,
    stageCharacters: STAGE_CHARACTERS,
    showSceneCast,
    showSceneStill,
    simulateRoute,
    selfTest: runSelfTest
  });

  if (els.resume && window.RAML_CHAPTER?.hasSave?.()) els.resume.classList.remove("is-hidden");
  els.start.addEventListener("click", () => {
    if (window.RAML_CHAPTER?.hasSave?.()) {
      const confirmed = window.confirm("保存済みの続きがあります。新しく始めると、次の自動セーブ時に上書きされます。最初から始めますか？");
      if (!confirmed) return;
      window.RAML_CHAPTER.clearSave();
    }
    startGame();
  });
  if (els.resume) els.resume.addEventListener("click", () => window.RAML_CHAPTER?.resume?.());
  els.continue.addEventListener("click", nextStep);
  els.mute.addEventListener("click", toggleMute);
  els.restart.addEventListener("click", () => window.location.reload());
  els.storyConsole.addEventListener("click", (event) => {
    if (event.target.closest("button, a") || els.continue.disabled || els.continue.classList.contains("is-hidden")) return;
    nextStep();
  });

  document.addEventListener("keydown", (event) => {
    if (event.defaultPrevented || event.target instanceof HTMLButtonElement || event.target instanceof HTMLAnchorElement) return;
    if ((event.key === "Enter" || event.key === " ") && !els.continue.disabled && !els.continue.classList.contains("is-hidden")) {
      event.preventDefault();
      nextStep();
    }
  });
})();
