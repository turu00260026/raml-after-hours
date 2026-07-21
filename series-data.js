(() => {
  "use strict";

  const data = window.RAML_CHAPTER_DATA;
  const content = window.RAML_SERIES_CONTENT;
  if (!data || !content) throw new Error("RAML full-series data could not be initialized.");

  const fx = (key, path, op, value) => ({ key, path, op, value });
  const line = (speaker, text, type = "dialogue") => ({ speaker, text, type });
  const collect = (category, id) => ({ category, id });

  const DAY_META = {
    1: { chapter: 1, title: "緊急招集、全員それぞれの事情で遅れる", start: "EV_C1_DISPATCH" },
    2: { chapter: 2, title: "火曜、平日ダイヤ始動", start: "EV_C2_SF_DECAY" },
    3: { chapter: 2, title: "遅刻ゲージ、動きます", start: "DISPATCH_DAY3" },
    4: { chapter: 2, title: "SFが一位から落ちる日", start: "DISPATCH_DAY4" },
    5: { chapter: 2, title: "金曜、続きは生活のあと", start: "DISPATCH_DAY5" },
    6: { chapter: 3, title: "休日の司令系統", start: "EV_C3_HOLIDAY_SHIFT" },
    7: { chapter: 3, title: "遅刻しない男と、静かな違和感", start: "DISPATCH_DAY7" },
    8: { chapter: 3, title: "シリアス本編の影と、先週のツケ", start: "EV_C3_FRAGMENT_09_11" },
    9: { chapter: 3, title: "二度目の光", start: "DISPATCH_DAY9" },
    10: { chapter: 4, title: "歩行再開の日", start: "DISPATCH_DAY10" },
    11: { chapter: 4, title: "司令室が空になる日", start: "DISPATCH_DAY11" },
    12: { chapter: 4, title: "温存と完成", start: "DISPATCH_DAY12" },
    13: { chapter: 4, title: "二つの最終判定", start: "DISPATCH_DAY13" },
    14: { chapter: 4, title: "世界より先に、日曜日", start: "DISPATCH_DAY14" }
  };

  const DAY_LOG_COLLECT = {
    1: "day1_kinkyu_shoshu",
    2: "day2_heijitsu_daiya",
    3: "day3_kaiseki_to_chikoku",
    4: "day4_tool_v2",
    5: "day5_sf_overtake_watch",
    6: "day6_holiday_shift",
    7: "day7_sunday_horror",
    8: "day8_fragment_09_11",
    9: "day9_second_light"
  };

  const DAY_CLOSING = {
    1: "世界の危機は、今日のところは持ち越し。全員、明日も本業がある。",
    2: "火曜終了。明日の自分へ、未処理を二件だけ残す。",
    3: "水曜終了。週の真ん中は、終わったことにする。",
    4: "木曜終了。世界の見た目が変わっても、お迎え時刻は変わらない。",
    5: "金曜終了。続きは、生活を済ませてから。",
    6: "土曜終了。休日だから空いている者は、一人もいなかった。",
    7: "日曜終了。静かな画面ほど、生活の音を忘れない。",
    8: "月曜終了。先週のツケも、今日の予定として受け取った。",
    9: "火曜終了。二度目の光は、記録して生活へ返す。",
    10: "水曜終了。世界より先に、一歩を待った。",
    11: "木曜終了。司令室が空でも、判断は止まらなかった。",
    12: "金曜終了。温存したものと、完成させたものを閉じる。",
    13: "土曜終了。二つの判定を終え、最後の日曜へ。",
    14: "二週間の観測を終了。世界は、積み上がった選択を一つの結末へ返す。"
  };

  function makeDispatch(day) {
    const weekend = [6, 7, 13, 14].includes(day);
    const introLead = day === 6
      ? "出す、というより——生活から借りる。今日は、誰の時間を借りる？"
      : day === 7
        ? "日曜の午後。誰の休みを削るか、決めて。"
        : day === 9
          ? "本日、夕方に妙な波形の予報が出ています。今日の持ち時間で、誰を出しますか。"
          : day === 14
            ? "最後の日曜。世界より先に生活を並べて、借りる時間を決める。"
            : "今日の持ち時間で回す。誰に出てもらう？";
    return {
      id: `DISPATCH_DAY${day}`,
      title: weekend ? "休日出動選択" : "平日出動選択",
      chapter: DAY_META[day].chapter,
      day,
      phase: "dispatch_select",
      cast: ["rico", "nori"],
      intro: [
        line("地の文", "司令室の右端に、汚染ピーク、本業、生活予定、誰かの退勤時刻が同じ大きさで並んでいる。", "narration"),
        line("リコ", introLead),
        line("ノリ", "四案です。最適解ではなく、今日終わる案から並べます")
      ],
      choices: [
        {
          id: "WD1", text: "ノリへ現場判断を委任する",
          effects: [fx("day_system", "dispatched", "append", "nori"), fx("protagonist_score", "nori", "delta", 10), fx("genre_pollution", "chiryaku", "delta", 5)],
          collect: [], result: [line("リコ", "現場判断はノリ。私は生活側の時刻を持つ"), line("ノリ", "委任を受領。抗議受付は本日ありません")]
        },
        {
          id: "WD2", text: "レントンを現場へ出す",
          effects: [fx("day_system", "dispatched", "append", "renton"), fx("protagonist_score", "renton", "delta", 10), fx("genre_pollution", "renai_novel", "delta", 5), fx("protagonist_score", "rico", "delta", 3)],
          collect: [], result: [line("レントン", "到着予定、送ります。予定なので、少し幅があります……"), line("リコ", "その幅を予定に入れる")]
        },
        {
          id: "WD3", text: "ショウを現場へ出す",
          effects: [fx("day_system", "dispatched", "append", "sho"), fx("protagonist_score", "sho", "delta", 10), fx("genre_pollution", "kinniku_battle", "delta", 5), fx("protagonist_score", "rico", "delta", 3)],
          collect: [], result: [line("ショウ", "行ける。"), line("リコ", "今日は何の日？"), line("ショウ", weekend ? "休日。" : "平日。")]
        },
        {
          id: "WD4", text: "誰も出さず、司令室から観測する",
          effects: [fx("analysis_level", "value", "delta", 5), fx("genre_pollution", "meta_kaisetsu", "delta", 5), fx("protagonist_score", "keisuke", "delta", 8), fx("protagonist_score", "rico", "delta", 3)],
          collect: [], result: [line("ケイスケ", "視聴者一名増えました"), line("リコ", "視聴してない。監視してるの")]
        }
      ]
    };
  }

  Object.assign(data.events, content.events);
  for (let day = 2; day <= 14; day += 1) data.events[`DISPATCH_DAY${day}`] = makeDispatch(day);

  const routes = [
    ["EV_C2_SF_DECAY", "DISPATCH_DAY2"], ["DISPATCH_DAY2", "EV_C2_RICO_1800"],
    ["DISPATCH_DAY3", "EV_C2_RENTON_DELAY"], ["EV_C2_RENTON_DELAY", "EV_C2_NORI_POISON"],
    ["DISPATCH_DAY4", "EV_C2_SHO_STOCK"], ["EV_C2_SHO_STOCK", "EV_C2_KEISUKE_V2"], ["EV_C2_KEISUKE_V2", "EV_C2_GENRE_OVERTAKE"],
    ["EV_C3_HOLIDAY_SHIFT", "DISPATCH_DAY6"], ["DISPATCH_DAY6", "EV_C3_NORI_REFEREE_LIVE"], ["EV_C3_NORI_REFEREE_LIVE", "EV_C3_KEISUKE_OFFMEET"],
    ["DISPATCH_DAY7", "EV_C3_RENTON_ON_TIME"], ["EV_C3_RENTON_ON_TIME", "EV_C3_SUNDAY_HORROR"],
    ["EV_C3_FRAGMENT_09_11", "DISPATCH_DAY8"], ["DISPATCH_DAY8", "EV_C3_RICO_WEEKLY_DEBT"],
    ["DISPATCH_DAY9", "EV_C3_MAHO_SECOND"],
    ["DISPATCH_DAY10", "EV_C4_RENTON_WALK"], ["DISPATCH_DAY11", "EV_C4_RICO_EMPTY_COMMAND"],
    ["DISPATCH_DAY12", "EV_C4_SHO_RELEASE"], ["EV_C4_SHO_RELEASE", "EV_C4_KEISUKE_COMPLETE"],
    ["DISPATCH_DAY13", "EV_C4_NORI_FINAL_JUDGE"], ["EV_C4_NORI_FINAL_JUDGE", "EV_C4_HENSHIN_COMPLETE"],
    ["DISPATCH_DAY14", "EV_C4_SUNDAY_DAYLIGHT"], ["EV_C4_SUNDAY_DAYLIGHT", "EV_C4_FINAL_JUDGMENT"]
  ];
  routes.forEach(([from, to]) => { data.events[from].next = to; });

  const dayEnds = {
    1: "EV_C1_HENSHIN", 2: "EV_C2_RICO_1800", 3: "EV_C2_NORI_POISON", 4: "EV_C2_GENRE_OVERTAKE",
    5: "DISPATCH_DAY5", 6: "EV_C3_KEISUKE_OFFMEET", 7: "EV_C3_SUNDAY_HORROR", 8: "EV_C3_RICO_WEEKLY_DEBT",
    9: "EV_C3_MAHO_SECOND", 10: "EV_C4_RENTON_WALK", 11: "EV_C4_RICO_EMPTY_COMMAND",
    12: "EV_C4_KEISUKE_COMPLETE", 13: "EV_C4_HENSHIN_COMPLETE"
  };
  Object.entries(dayEnds).forEach(([day, eventId]) => {
    const event = data.events[eventId];
    event.day = Number(day);
    event.chapter = DAY_META[day].chapter;
    event.dayEnd = true;
    event.nextDay = DAY_META[Number(day) + 1].start;
    event.next = "@dayLog";
    (event.choices || []).forEach((choice) => { choice.next = "@dayLog"; });
  });

  data.events.EV_C2_HANAKIN.next = "@clear";
  data.events.EV_C2_HANAKIN.choices.forEach((choice) => { choice.next = "@clear"; });

  data.events.EV_C4_FINAL_JUDGMENT.finalEvent = true;
  data.events.EV_C4_FINAL_JUDGMENT.next = "@ending";
  data.events.EV_C4_FINAL_JUDGMENT.onEnterEffects = [fx("genre_pollution", "nichijou", "delta", 5)];
  data.events.EV_C4_FINAL_JUDGMENT.onEnterCollect = [collect("ninmu_log", "day14_final_judgment")];

  // 日付更新と支配ジャンル減衰は日次遷移で一度だけ実行する。
  data.events.EV_C2_SF_DECAY.onEnterEffects = [];
  data.events.EV_C3_HOLIDAY_SHIFT.onEnterEffects = [];

  // 3回見守りの記録。既存の正式カテゴリだけを使う。
  const firstWatch = data.events.EV_C1_HENSHIN.choices.find((choice) => choice.id === "H2");
  if (firstWatch && !firstWatch.collect.some((item) => item.id === "maho_sho_first_watch")) firstWatch.collect.push(collect("henshin_sabun", "maho_sho_first_watch"));
  const thirdWatch = data.events.EV_C4_HENSHIN_COMPLETE.choices.find((choice) => choice.id === "H1");
  if (thirdWatch) thirdWatch.conditionalEffects = [{
    whenAllCollected: ["henshin_sabun:maho_sho_first_watch", "henshin_sabun:maho_sho_second_watch"],
    effects: [fx("protagonist_score", "maho_sho", "delta", 10)]
  }];

  Object.entries({
    seisei_jiko_log: 4, bousou_form_zukan: 1, henshin_sabun: 3,
    ninmu_log: 18, seikatsu_trouble: 14, hidden_event: 4, end_kaishu: 8
  }).forEach(([category, total]) => {
    if (!data.initialState.collection_log[category]) data.initialState.collection_log[category] = { collected: [], total };
    data.initialState.collection_log[category].total = total;
  });

  data.series = {
    enabled: true,
    version: "RAML-1.1.0",
    saveKey: "raml-after-hours-save-v1",
    metaKey: "raml-after-hours-collection-v1",
    maxDay: 14,
    dayMeta: DAY_META,
    dayLogCollect: DAY_LOG_COLLECT,
    dayClosing: DAY_CLOSING,
    chapterEnds: [1, 5, 9, 14],
    weekendDays: [6, 7, 13, 14],
    afterDayLog: { 5: "EV_C2_HANAKIN" },
    analysisCap: 65,
    horrorCap: 40,
    endings: content.endings,
    epilogue: content.epilogue
  };

  data.dayLog.collect = null;
  data.clear.next = "Day 2";
})();
