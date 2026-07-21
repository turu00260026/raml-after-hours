(function () {
  "use strict";

  const line = (speaker, text, type = "dialogue", visual = null) => ({
    speaker,
    text,
    type,
    ...(visual ? { visual } : {})
  });
  const fx = (key, path, op, value) => ({ key, path, op, value });
  const collect = (category, id) => ({ category, id });

  window.RAML_CHAPTER_DATA = {
    initialState: {
      day_system: {
        current_day: 1,
        phase: "morning_briefing",
        phases: ["morning_briefing", "dispatch_select", "life_interrupt", "field_event", "day_log", "next_day"],
        dispatched: [],
        day_log_entries: []
      },
      character_status: {
        rico: { role: "司令官", available: true, ailments: { hoikuen_call: false } },
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
      life_load: {
        rico: 65,
        nori: 70,
        renton: 75,
        sho: 20,
        keisuke: 40
      },
      protagonist_score: {
        rico: 20,
        nori: 10,
        renton: 10,
        sho: 10,
        keisuke: 5,
        maho_sho: 0
      },
      analysis_level: {
        value: 10,
        hint_threshold: 40,
        meta_link_threshold: 60
      },
      ending_route: {
        flags: { reached: [] },
        routes: [
          { id: "rico_end", name: "リコEND：司令官SF任務もの" },
          { id: "nori_end", name: "ノリEND：全部読んでいた知略もの" },
          { id: "renton_end", name: "レントンEND：現場ケアと人間ドラマ" },
          { id: "kinniku_end", name: "筋肉END：すべてが筋肉に飲まれる" },
          { id: "keisuke_end", name: "ケイスケEND：メタ解説とガジェット支配" },
          { id: "maho_sho_end", name: "魔法ショウ女END：変身バンクに世界が飲まれる" },
          { id: "nichijou_end", name: "日常END：世界より生活が勝つ" },
          { id: "shin_end", name: "真END：全員の生活と副業で世界が回る" }
        ]
      },
      collection_log: {
        seisei_jiko_log: { collected: [], total: 1 },
        bousou_form_zukan: { collected: [], total: 0 },
        henshin_sabun: { collected: [], total: 0 },
        ninmu_log: { collected: [], total: 1 },
        seikatsu_trouble: { collected: [], total: 4 },
        hidden_event: { collected: [], total: 1 },
        end_kaishu: { collected: [], total: 0 }
      }
    },

    start: "EV_C1_DISPATCH",
    events: {
      EV_C1_DISPATCH: {
        id: "EV_C1_DISPATCH",
        title: "出動選択",
        phase: "dispatch_select",
        cast: ["rico", "nori"],
        intro: [
          line("地の文", "スクリーンに現場の座標。汚染係数は、この会話の間にも上がり続けている。", "narration"),
          line("リコ", "以上を踏まえて。——誰を現場に出す?"),
          line("ノリ", "戦力分析です。私は動けます。日焼けは戦闘力に換算されません。レントンは20分遅れ。ショウは脚の日。敵は充電中"),
          line("リコ", "参考にならない分析をありがとう"),
          line("ノリ", "事実です")
        ],
        choices: [
          {
            id: "D1",
            text: "ノリを出す——黒焦げの参謀が、現場を「試合」として読む",
            effects: [
              fx("day_system", "dispatched", "append", "nori"),
              fx("protagonist_score", "nori", "delta", 10),
              fx("genre_pollution", "chiryaku", "delta", 10)
            ],
            collect: [],
            next: "EV_C1_NORI_SHINPAN",
            result: [
              line("地の文", "ノリが立ち上がる。日焼けの境界線が、戦線のように見えた。", "narration")
            ]
          },
          {
            id: "D2",
            text: "レントンを待って出す——遅れてでも、ケアの人を現場へ",
            effects: [
              fx("day_system", "dispatched", "append", "renton"),
              fx("protagonist_score", "renton", "delta", 10),
              fx("genre_pollution", "renai_novel", "delta", 5),
              fx("genre_pollution", "nichijou", "delta", 5)
            ],
            collect: [],
            next: "EV_C1_RENTON_CHIKOKU",
            result: [
              line("リコ", "20分。待つのも、采配のうち")
            ]
          },
          {
            id: "D3",
            text: "ショウを呼ぶ——脚の日だが、そこを何とか",
            effects: [
              fx("day_system", "dispatched", "append", "sho"),
              fx("protagonist_score", "sho", "delta", 10),
              fx("genre_pollution", "kinniku_battle", "delta", 10)
            ],
            collect: [],
            next: "EV_C1_SHO_ALPACA",
            result: [
              line("地の文", "送信:「現場に来て」。既読、2秒。返信:「わかった。」", "narration")
            ]
          },
          {
            id: "D4",
            text: "様子見——司令室から観測を続ける（誰も出さない）",
            effects: [
              fx("analysis_level", "value", "delta", 5),
              fx("genre_pollution", "meta_kaisetsu", "delta", 5),
              fx("protagonist_score", "keisuke", "delta", 5)
            ],
            collect: [],
            next: "EV_C1_RICO_HOIKUEN",
            result: [
              line("リコ", "観測継続。……嫌な予感がするのよね、こういう静かな時間って")
            ]
          }
        ]
      },

      EV_C1_RICO_HOIKUEN: {
        id: "EV_C1_RICO_HOIKUEN",
        title: "リコ：保育園からの電話",
        phase: "life_interrupt",
        cast: ["rico", "nori"],
        onEnterEffects: [
          fx("character_status", "rico.ailments.hoikuen_call", "set", true)
        ],
        intro: [
          line("地の文", "観測は続いている。汚染係数のグラフを追うリコの声は、完全に司令官のそれだ。", "narration"),
          line("リコ", "第2観測フェーズに移行。ノリ、波形の再サンプリングを——"),
          line("地の文", "ブブ、と机が震えた。\n伏せたスマートフォン。裏返す。画面には「ひまわり保育園」。\n司令官の顔が、0.5秒だけ、母親の顔になる。", "narration"),
          line("ノリ", "司令。着信が"),
          line("リコ", "……見れば分かる")
        ],
        choices: [
          {
            id: "A1",
            text: "電話に出る",
            effects: [
              fx("life_load", "rico", "delta", 15),
              fx("protagonist_score", "rico", "delta", 5),
              fx("genre_pollution", "nichijou", "delta", 5)
            ],
            collect: [collect("seikatsu_trouble", "hoikuen_call")],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("リコ", "はい——はい。お世話になってます。……熱が。37度8分。分かりました"),
              line("地の文", "通話しながら、リコはもう手元のパッドに書き出している。お迎え、実家への連絡、病児保育の空き、明日の登園可否。3分で、今日と明日の生活が組み直された。", "narration"),
              line("ノリ", "……見事な采配です。任務より速い"),
              line("リコ", "こっちが本業なの")
            ]
          },
          {
            id: "A2",
            text: "ノリに司令を一時委任する",
            effects: [
              fx("protagonist_score", "nori", "delta", 10),
              fx("genre_pollution", "chiryaku", "delta", 5)
            ],
            collect: [],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("リコ", "ノリ。司令代行、10分"),
              line("ノリ", "了解しました。各員に通達。私の判定はドライですが、抗議は受け付けません。審判なので"),
              line("地の文", "ノリの司令は正確で、速く、少しだけ冷たい。世界が「参謀の読み筋」に寄っていく。", "narration")
            ]
          },
          {
            id: "A3",
            text: "無視して任務を続ける",
            effects: [
              fx("life_load", "rico", "delta", 30),
              fx("genre_pollution", "sf", "delta", 10)
            ],
            collect: [],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("リコ", "……観測続行。再サンプリング開始"),
              line("地の文", "通知を切る。任務は進む。司令室はSFの顔を取り戻す。\nただ、机の下で、伏せたスマートフォンの光がずっと点滅している。\nリコはそれを見ない。見ないという仕事を、追加で一つ抱えただけだ。", "narration")
            ]
          },
          {
            id: "A4",
            text: "敵の通信と勘違いして解析する",
            effects: [
              fx("analysis_level", "value", "delta", 10),
              fx("genre_pollution", "meta_kaisetsu", "delta", 10),
              fx("genre_pollution", "sf", "delta", 5)
            ],
            collect: [],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("リコ", "待って。このタイミングの着信——敵性ジャンル波の偽装かもしれない。解析かけて"),
              line("ノリ", "解析します。……発信元、ひまわり保育園。内容予測、『ひまわり組・お熱のお知らせ』"),
              line("リコ", "偽装の可能性は"),
              line("ノリ", "これが偽装なら、敵は相当な手練れです"),
              line("地の文", "解析ログに「保育園」が正式登録された。世界が少しだけ、解説口調になる。", "narration")
            ]
          }
        ]
      },

      EV_C1_NORI_SHINPAN: {
        id: "EV_C1_NORI_SHINPAN",
        title: "ノリ：審判焼けイベント",
        phase: "life_interrupt",
        cast: ["nori", "rico"],
        intro: [
          line("地の文", "現場に立つノリ。防護スーツの襟から覗く首筋が、くっきりと二色に分かれている。\n汚染領域の光が、その日焼けの境界線を無慈悲に照らした。", "narration"),
          line("リコ（通信）", "ノリ、状態は"),
          line("ノリ", "稼働可能です。ただし直射日光下でのパフォーマンスは保証しません。昨日、使い切りました"),
          line("リコ", "……使い切った参謀を、どう使うか")
        ],
        choices: [
          {
            id: "B1",
            text: "解析を任せる",
            effects: [
              fx("analysis_level", "value", "delta", 10),
              fx("life_load", "nori", "delta", 10),
              fx("genre_pollution", "chiryaku", "delta", 5)
            ],
            collect: [],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("ノリ", "汚染源の展開パターン、読めました。周期は8分。次の拡大は——3分後です"),
              line("地の文", "読みは正確だ。ただ、その声には昨日の4試合分の疲労が沈んでいる。", "narration"),
              line("ノリ", "視界が少し白いのは日焼けの後遺症です。数値に影響はありません。続行します")
            ]
          },
          {
            id: "B2",
            text: "休ませる",
            effects: [
              fx("life_load", "nori", "delta", -15),
              fx("character_status", "nori.ailments.shinpan_yake", "delta", -1),
              fx("protagonist_score", "rico", "delta", 5),
              fx("genre_pollution", "nichijou", "delta", 5)
            ],
            collect: [],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("リコ", "ノリ。日陰。水分。以上"),
              line("ノリ", "司令、私はまだ"),
              line("リコ", "母親を10年やってるの。限界の顔は見れば分かる"),
              line("地の文", "ノリは3秒沈黙し、「……判定に従います」と日陰に入った。世界が少しだけ、生活の側に寄る。", "narration")
            ]
          },
          {
            id: "B3",
            text: "審判経験を作戦に使う",
            effects: [
              fx("genre_pollution", "chiryaku", "delta", 15),
              fx("protagonist_score", "nori", "delta", 10)
            ],
            collect: [collect("seikatsu_trouble", "shinpan_yake_4shiai")],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("ノリ", "ジャンル汚染には、試合と同じで\"流れ\"があります。前半は互いに様子見。動くのは——こういう、集中の切れる時間帯です"),
              line("地の文", "ノリは汚染領域の境界線を、タッチラインのように歩き始めた。", "narration"),
              line("ノリ", "今の拡大、越境です。——笛を吹きます"),
              line("地の文", "ルール判定が入った瞬間、汚染の侵食が「反則」として差し戻される。炎天下4試合で磨かれたジャッジが、世界の法則に効いている。", "narration")
            ]
          },
          {
            id: "B4",
            text: "日焼けを敵の攻撃だと誤認する",
            effects: [
              fx("analysis_level", "value", "delta", 5),
              fx("genre_pollution", "meta_kaisetsu", "delta", 5),
              fx("genre_pollution", "nichijou", "delta", 5)
            ],
            collect: [],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("リコ", "ノリ、その黒さ……まさか、汚染の侵食が体表に"),
              line("ノリ", "違います。土曜の第4試合です"),
              line("リコ", "解析班、ノリの表皮をスキャン"),
              line("ノリ", "司令。これは紫外線です。敵はもう少し高度な攻撃をしてきます"),
              line("地の文", "スキャン結果:「深刻な日焼け（自然由来）」。解析ログに正式登録された。ノリは無言でログの削除申請を出したが、却下された。", "narration")
            ]
          }
        ]
      },

      EV_C1_RENTON_CHIKOKU: {
        id: "EV_C1_RENTON_CHIKOKU",
        title: "レントン：本業遅刻イベント",
        phase: "life_interrupt",
        cast: ["renton"],
        intro: [
          line("地の文", "現場への通信に、走る足音と息切れが混ざる。", "narration"),
          line("レントン", "すみません……！ いま病院出ました……！ 走って、走ってるので……あと、あと18分……！"),
          line("リコ", "レントン、走りながら喋らない。転ぶ"),
          line("レントン", "はい……！ すみません……！ あっ、でも大丈夫です、僕、姿勢は崩れてないので……！"),
          line("ノリ（通信）", "遅刻ゲージ70。重要局面への到着は保証できません。判断を")
        ],
        choices: [
          {
            id: "C1",
            text: "到着を待つ",
            effects: [
              fx("life_load", "renton", "delta", 10),
              fx("protagonist_score", "renton", "delta", 10),
              fx("genre_pollution", "renai_novel", "delta", 5)
            ],
            collect: [collect("seikatsu_trouble", "honmu_de_chikoku")],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("地の文", "18分、現場は持ちこたえた。そして、遅れて到着した男は——現場をひと目見て、誰よりも早く動いた。", "narration"),
              line("レントン", "すみません遅れました……！ ——あっ、そこの方、右足かばってますね。先に見せてください。任務はその後で"),
              line("リコ（通信）", "レントン、汚染源が先——"),
              line("レントン", "すみません……！ でも、人が先です……！"),
              line("地の文", "謝りながら、譲らない。現場の空気が、少しだけ人間ドラマの色になる。", "narration")
            ]
          },
          {
            id: "C2",
            text: "先に出動する（レントンを待たない）",
            effects: [
              fx("genre_pollution", "sf", "delta", 10),
              fx("life_load", "renton", "delta", 5)
            ],
            collect: [],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("リコ", "待てない。観測班主導で先行する"),
              line("地の文", "任務は進む。ただ、現場で軽い負傷者が出たとき、そこにケアの人はいなかった。\n18分後に到着したレントンは、誰にも聞こえない声で「間に合わなかった……」と言った。", "narration")
            ]
          },
          {
            id: "C3",
            text: "通話で身体分析だけ頼む",
            effects: [
              fx("analysis_level", "value", "delta", 10),
              fx("genre_pollution", "renai_novel", "delta", 5)
            ],
            collect: [],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("レントン（通話・映像越し）", "映像、見えてます……はい……あっ、その倒れ方、捻挫じゃないです。庇い方のクセです。触らないで、荷重だけ抜いてあげてください"),
              line("地の文", "現場にいなくても、身体の理解は届く。走りながらの遠隔ケアが、解析ログに積まれていく。", "narration")
            ]
          },
          {
            id: "C4",
            text: "遅刻を逆に作戦に組み込む",
            effects: [
              fx("protagonist_score", "renton", "delta", 15),
              fx("genre_pollution", "renai_novel", "delta", 10),
              fx("genre_pollution", "nichijou", "delta", 5)
            ],
            collect: [collect("hidden_event", "chikoku_sakusen")],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("リコ", "レントンの到着は18分後。——なら、18分後に敵の計画が一番崩れているタイミングを作る"),
              line("ノリ", "遅刻を戦術に転用。前例がありません"),
              line("リコ", "予定変更なら毎日やってるの。子供が二人いると、遅刻は前提条件よ"),
              line("地の文", "そして18分後。全員の注意が汚染源に集中しきった、その死角に——息を切らした理学療法士が、誰にも予測されないタイミングで到着する。", "narration"),
              line("レントン", "す、すみません、遅れま……えっ、僕、今いいところですか……!?"),
              line("リコ", "最高のタイミングよ")
            ]
          }
        ]
      },

      EV_C1_SHO_ALPACA: {
        id: "EV_C1_SHO_ALPACA",
        title: "ショウ：アルパカ牧場イベント",
        phase: "life_interrupt",
        cast: ["sho", "alpaca"],
        intro: [
          line("地の文", "通信画面。牧草。青空。しゃがみ込む大きな背中。傍らにアルパカ。", "narration"),
          line("リコ", "ショウ。現場に来てほしい。座標は送った"),
          line("ショウ", "今、脚の日。"),
          line("リコ", "世界の危機なの"),
          line("ショウ", "……あと3セット。"),
          line("ノリ（通信）", "交渉が長引くと予測します。判断を"),
          line("地の文", "アルパカが、こちらを見ている。", "narration"),
          line("アルパカ", "…………。", "dialogue", { expression: "analysis" })
        ],
        choices: [
          {
            id: "S1",
            text: "そのまま呼び出す",
            effects: [
              fx("genre_pollution", "kinniku_battle", "delta", 10),
              fx("protagonist_score", "sho", "delta", 5),
              fx("life_load", "sho", "delta", 5),
              fx("character_status", "sho.ailments.at_alpaca_farm", "set", false)
            ],
            collect: [],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("リコ", "3セットは移動しながらやりなさい"),
              line("ショウ", "わかった。"),
              line("地の文", "30分後。現場の障害物が、内側からではなく外側から割れた。", "narration"),
              line("ショウ", "着いた。"),
              line("地の文", "（移動中にどうやって3セットやったのかは、誰も聞かなかった）", "narration")
            ]
          },
          {
            id: "S2",
            text: "アルパカごと現場に向かわせる",
            effects: [
              fx("genre_pollution", "nichijou", "delta", 15),
              fx("genre_pollution", "kinniku_battle", "delta", 5),
              fx("protagonist_score", "sho", "delta", 10),
              fx("character_status", "sho.ailments.at_alpaca_farm", "set", false)
            ],
            collect: [collect("seikatsu_trouble", "alpaca_douhan")],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("ショウ", "連れてく。こいつも脚の日。"),
              line("リコ", "アルパカに脚の日があるの?"),
              line("ショウ", "ある。"),
              line("地の文", "現場に、アルパカが降り立った。\nジャンル汚染の禍々しい光の中、アルパカは平然と草を食んでいる。緊張していた現場の空気が、もふもふによって強制的に緩んだ。汚染係数のグラフが、困惑したように平坦になる。", "narration"),
              line("ノリ", "……観測史上初です。汚染が、和んでいます")
            ]
          },
          {
            id: "S3",
            text: "筋トレ完了まで待つ",
            effects: [
              fx("protagonist_score", "sho", "delta", 15),
              fx("genre_pollution", "kinniku_battle", "delta", 10),
              fx("life_load", "rico", "delta", 5),
              fx("character_status", "sho.ailments.at_alpaca_farm", "set", false)
            ],
            collect: [],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("リコ", "……3セット、待つ"),
              line("地の文", "司令室のスクリーンに、スクワットのカウントが表示され続けるという前代未聞の待機時間が発生した。\nそして3セットを完遂して現れたショウは、いつもより明確に、主役の顔をしていた。", "narration"),
              line("ショウ", "待たせた。"),
              line("地の文", "（この一言のために私は世界の危機を待たせたのか、という顔をしたが、言わなかった）", "narration")
            ]
          },
          {
            id: "S4",
            text: "筋肉を温存する（牧場で待機）",
            effects: [
              fx("genre_pollution", "nichijou", "delta", 5),
              fx("life_load", "sho", "delta", -5)
            ],
            collect: [],
            next: "EV_C1_KEISUKE_GADGET",
            result: [
              line("リコ", "ショウは温存。牧場で待機"),
              line("ショウ", "了解。追い込む。"),
              line("リコ", "温存の意味を調べなさい"),
              line("地の文", "ショウは牧場に残った。", "narration")
            ]
          }
        ]
      },

      EV_C1_KEISUKE_GADGET: {
        id: "EV_C1_KEISUKE_GADGET",
        title: "ケイスケの新ガジェット暴走",
        phase: "field_event",
        cast: ["keisuke", "keisuke_robo"],
        onEnterEffects: [
          fx("character_status", "keisuke.ailments.gadget_charging", "set", false)
        ],
        intro: [
          line("地の文", "汚染領域の中心。大気が、ページをめくるように波打っている。\nその中央に、世界改変フィールドの発生装置。銀色の、悪意すら感じる造形。\nそして、その前に立つ人影。GADGETの技術者——ケイスケ。\n振り向く。来たか、とでも言うのか。", "narration"),
          line("ケイスケ", "あっ、RAMLさんですか。ちょうどよかった、ちょっとこれ見てもらっていいですか"),
          line("地の文", "対峙の構図が、3秒で崩れた。", "narration"),
          line("ケイスケ（早口・止まらない）", "世界改変フィールドの新UIなんですけど、前バージョンだとジャンル選択がドロップダウンだったんですよ。ダサいじゃないですか。今回ホイール式にしたんですよ。回すとほら、現実がSFから魔法少女にシームレスに遷移する。このヌルヌル感、イージング関数から自作なんで。あ、フレーム落ちしてないでしょ、描画エンジンも書き直したんで。世界征服? やりますやります、このデモの後で"),
          line("リコ（通信）", "……交戦規定を確認したいんだけど、これは交戦なの?"),
          line("ノリ", "デモです")
        ],
        choices: [
          {
            id: "E1",
            text: "ガジェットを止める",
            effects: [
              fx("genre_pollution", "sf", "delta", 10),
              fx("protagonist_score", "keisuke", "delta", -5),
              fx("genre_pollution", "meta_kaisetsu", "delta", -5)
            ],
            collect: [],
            next: "EV_C1_HENSHIN",
            result: [
              line("地の文", "現場判断で装置の給電ラインが遮断される。ホイールUIが暗転した。", "narration"),
              line("ケイスケ", "あーーっ!? ちょっ、セーブしてない、デモ環境の設定セーブしてないんですけど!? 電源断はダメでしょ人として!!"),
              line("地の文", "世界征服が人としてどうなのかという議論は、なされなかった。汚染係数が下がり始める。任務は、成功に寄った。", "narration")
            ]
          },
          {
            id: "E2",
            text: "仕様を質問する",
            effects: [
              fx("analysis_level", "value", "delta", 5),
              fx("genre_pollution", "meta_kaisetsu", "delta", 10),
              fx("protagonist_score", "keisuke", "delta", 5)
            ],
            collect: [],
            next: "EV_C1_HENSHIN",
            result: [
              line("ケイスケ", "いい質問ですね!! そもそもジャンル汚染って何かって話なんですけど、皆さんの現実って、物語構造のレイヤーが一枚下に走ってるんですよ。うちのフィールドはそこに直接パッチを当てる。だから武力で止まらないんです。仕様なので。——あ、今の説明、画面の右下にログ出てるでしょ? そういうとこです"),
              line("地の文", "解説は的確で、世界の理解は深まり、そして世界が少し解説口調になった。理解と侵食は、この作品では同じ方向を向いている。", "narration")
            ]
          },
          {
            id: "E3",
            text: "バグを指摘する",
            effects: [
              fx("genre_pollution", "sf", "delta", 5),
              fx("genre_pollution", "meta_kaisetsu", "delta", 5),
              fx("life_load", "keisuke", "delta", 10)
            ],
            collect: [],
            next: "EV_C1_HENSHIN",
            result: [
              line("ノリ（または現場の出動キャラ）", "そのホイール、最後の項目から先頭に戻るとき、一瞬引っかかりましたね"),
              line("ケイスケ", "…………"),
              line("地の文", "ケイスケの動きが止まった。ホイールを回す。戻す。回す。", "narration"),
              line("ケイスケ", "……再現しました。円環バッファのインデックス処理だ……なんで気づかなかった……すみません今日の世界征服、中止です。これ直さないと夜眠れないんで"),
              line("地の文", "敵は、自分のツールの完成度に敗北した。計画は遅延し、世界は今日も救われた——変な形で。", "narration")
            ]
          },
          {
            id: "E4",
            text: "あえてデモを最後まで見る",
            effects: [
              fx("protagonist_score", "keisuke", "delta", 15),
              fx("genre_pollution", "meta_kaisetsu", "delta", 10),
              fx("analysis_level", "value", "delta", 5)
            ],
            collect: [collect("seisei_jiko_log", "gadget_demo_full")],
            next: "EV_C1_HENSHIN",
            result: [
              line("リコ", "……最後まで、見ましょう"),
              line("ケイスケ", "え、見ます? 最後まで見ます? ……ほんとに? じゃ、じゃあ椅子出しますね。飲み物とかは、ないんですけど"),
              line("地の文", "敵のデモを、正座で鑑賞するという観測史上初の任務が始まった。\nデモは45分に及び、途中でジェネレーターが一度暴走し、現実の一部が謎の生成事故を起こした。その一部始終が、ログに収まった。", "narration"),
              line("ノリ", "生成事故ログ、フル尺で回収しました。……解析価値は、高いです。悔しいですが"),
              line("ケイスケ", "でしょ?")
            ]
          }
        ]
      },

      EV_C1_HENSHIN: {
        id: "EV_C1_HENSHIN",
        title: "魔法少女化イベント（魔法ショウ女・初観測）",
        phase: "field_event",
        cast: ["magical_shojo", "sho"],
        variant: {
          key: "character_status",
          path: "sho.ailments.at_alpaca_farm",
          true: {
            id: "pasture_feed",
            text: "牧場中継差分（青空＋ピンク光柱＋後ずさるアルパカ。司令室スクリーンに監視映像が強制割り込み）",
            insertAfter: "hen-07",
            intro: [
              line("地の文", "司令室のスクリーンに牧場の監視映像が強制的に割り込む。青空の牧場に、場違いなピンクの光。アルパカが一歩、後ずさる。", "narration")
            ]
          },
          false: {
            id: "field_capture",
            text: "現場差分（ショウ本人が現場で光柱に捕捉される）",
            insertAfter: "hen-07",
            intro: []
          }
        },
        intro: [
          { ...line("地の文", "それは、誰の操作でもなかった。\nケイスケの装置——止めたはずの、あるいはデモを終えたはずの世界改変フィールドの残滓が、微かに明滅する。\nジャンル選択ホイールが、ひとりでに回り始めた。", "narration"), id: "hen-01" },
          { ...line("ケイスケ", "え、ちょっ、入力してない入力してない、勝手に回ってる——あっやばいこれ暴走時のフォールバック先、確率テーブルで実装したやつだ"), id: "hen-02" },
          { ...line("リコ（通信）", "フォールバック先は!?"), id: "hen-03" },
          { ...line("ケイスケ", "えーと、確率的には、いちばん重み付けが大きいのが——"), id: "hen-04" },
          { ...line("地の文", "ホイールが、止まる。\nカチ、と小さな音がして、表示されたジャンル名。\n\n【魔法少女】\n\n世界の色が、変わった。", "narration"), id: "hen-05" },
          { ...line("ノリ", "汚染係数、急上昇——ジャンル固着です! 対象は——"), id: "hen-06" },
          { ...line("地の文", "ピンク色の光の柱が、立つ。\nその中心にいるのは。\n——ショウ。", "narration"), id: "hen-07" },
          { ...line("リコ", "ショウ!? 状態を報告——"), id: "hen-08" },
          { ...line("ショウ", "…………体が、勝手に。"), id: "hen-09" },
          { ...line("地の文", "光の中で、ショウの輪郭がほどけていく。\n背景が消える。現場の風景が——あるいは牧場の草原が——抽象的なキラキラの空間に塗り替えられる。\nBGMが、誰も操作していないのに、変わる。\n通信ウィンドウの無機質なSFフレームに、勝手にフリルが付く。\n\nこれがジャンル汚染。世界の演出権が、丸ごと持っていかれる。", "narration"), id: "hen-10" },
          { ...line("ノリ", "司令、これは……観測ではなく、鑑賞になりつつあります"), id: "hen-11" },
          { ...line("リコ", "引き戻せる!?"), id: "hen-12" },
          { ...line("ノリ", "不明です。ですが——始まります"), id: "hen-13" },
          { ...line("地の文", "ショウが、宙に浮く。\n大きく息を吸う。あの、短文しか喋らない男が。\n——口上が、始まる。", "narration"), id: "hen-14" },
          { ...line("ショウ（変身中）", "きらめく大胸筋——"), id: "hen-15" },
          { ...line("リコ", "……え?"), id: "hen-16" },
          { ...line("ショウ（変身中）", "はばたく僧帽筋——。世界の歪みに、今日も一番の追い込みを——"), id: "hen-17" },
          { ...line("地の文", "口上は、明らかに魔法少女の文法で、明らかに筋肉の語彙だった。\n光は加速している。変身は、完了に向かっている。\n誰かが、決めなければならない。この変身を、どうするのか。", "narration"), id: "hen-18" },
          { ...line("リコ", "各員——判断を求める!"), id: "hen-19" }
        ],
        choices: [
          {
            id: "H1",
            text: "変身口上を遮る",
            effects: [
              fx("genre_pollution", "mahou_shoujo", "delta", 5),
              fx("genre_pollution", "sf", "delta", 10),
              fx("protagonist_score", "sho", "delta", 5)
            ],
            collect: [],
            next: "DAY_LOG",
            result: [
              line("リコ", "全周波数、ノイズ照射! 口上を上書きして!"),
              line("地の文", "司令室の全スピーカーから、観測波形の無機質なノイズが浴びせられる。\n口上が、途切れた。\nピンクの光が、粉のように崩れて消える。フリルが剥がれ、SFのフレームが戻ってくる。世界が、咳払いをして真顔に戻った。", "narration"),
              line("ショウ", "……今、何か言いかけた。"),
              line("リコ", "何も言ってない。いいわね、何も言ってない"),
              line("地の文", "魔法少女汚染は抑え込まれた。ただ、ノリの観測ログの端に、小さな波形の残滓が記録されている。あれは、まだ世界のどこかにいる。", "narration")
            ]
          },
          {
            id: "H2",
            text: "最後まで見守る",
            effects: [
              fx("protagonist_score", "maho_sho", "delta", 20),
              fx("genre_pollution", "mahou_shoujo", "delta", 25),
              fx("genre_pollution", "sf", "delta", -10),
              fx("character_status", "maho_sho.available", "set", true)
            ],
            collect: [],
            next: "DAY_LOG",
            result: [
              line("リコ", "——手を出さない。全員、見届けなさい"),
              line("ノリ", "司令!?"),
              line("リコ", "遮って抑えるのは対処。最後まで観測するのは理解。……それに"),
              line("地の文", "リコは、モニターの光を見上げた。", "narration"),
              line("リコ", "途中で止められる発表会ほど、悲しいものはないのよ"),
              line("地の文", "誰も、動かなかった。\n口上が、続く。筋肉の語彙で、魔法少女の文法で、一切の照れなく。\n光が最高潮に達し——弾けた。\n\nそこに立っていたのは、もうショウではなかった。\nいや、ショウなのだが。世界が全力で「主役です」と主張する何かだった。", "narration"),
              line("魔法ショウ女", "——魔法ショウ女。ただいま、参上。"),
              line("地の文", "決めポーズ。\n誰も風を送っていないのに、衣装がはためく。誰も花びらを撒いていないのに、画面の端を花びらが流れる。現場の全員が、なぜか半歩下がって主役のためのスペースを空けていた。", "narration"),
              {
                ...line("地の文", "アルパカまで、心なしか整列している。", "narration"),
                showWhen: {
                  any: [
                    { key: "character_status", path: "sho.ailments.at_alpaca_farm", op: "eq", value: true },
                    { key: "day_system", path: "day_log_entries", op: "contains_choice", value: "S2" }
                  ]
                }
              },
              line("ノリ", "……主役補正、観測史上最大値です。世界が、この人を中心に回り始めています"),
              line("リコ", "観測記録には、どう書けば"),
              line("ノリ", "『見届けた』と"),
              line("地の文", "世界の演出権は、しばらく戻ってこなかった。だが不思議と、汚染源の禍々しさだけは、主役の登場によって舞台袖に追いやられていた。", "narration"),
              line("地の文", "主役の座を奪うジャンル汚染——魔法ショウ女、初観測。", "narration")
            ]
          },
          {
            id: "H3",
            text: "解析する",
            effects: [
              fx("analysis_level", "value", "delta", 10),
              fx("genre_pollution", "meta_kaisetsu", "delta", 10),
              fx("genre_pollution", "mahou_shoujo", "delta", 10)
            ],
            collect: [],
            next: "DAY_LOG",
            result: [
              line("ノリ", "変身シーケンス、リアルタイム解析します。……構造が読めました。口上・光量・カメラ回転、すべてが『主役補正』の演出プロトコルです。そして——変身バンク中、対象は無敵時間です。物理・理屈、ともに介入不可"),
              line("リコ", "無敵時間って、そんな仕様が現実に"),
              line("ケイスケ", "あっそれ、うちのフィールドの仕様です! 変身シーンはスキップ不可。こだわりポイントなんですよ、変身バンクを飛ばす文化が僕は許せなくて"),
              line("ノリ", "敵の美学によって、我々は待機を強制されています"),
              line("地の文", "解析度は上がった。世界の仕組みが、また少し「解説」された。理解した分だけ、世界がメタの色に染まる——この毒の構造に、ノリだけが気づき始めている。", "narration")
            ]
          },
          {
            id: "H4",
            text: "筋肉で上書きする",
            effects: [
              fx("genre_pollution", "kinniku_battle", "delta", 20),
              fx("genre_pollution", "mahou_shoujo", "delta", 10),
              fx("protagonist_score", "sho", "delta", 15)
            ],
            collect: [],
            next: "DAY_LOG",
            result: [
              line("リコ", "ショウ! 持っていかれてるなら——筋肉で取り返しなさい!"),
              line("ショウ（変身中）", "……了解。"),
              line("地の文", "光の中で、変身の演出と、ショウ自身の筋肉が、真っ向から拮抗し始めた。\nフリルが生成される端から、上腕二頭筋が押し破る。キラキラのエフェクトが、力こぶの形に再構成されていく。魔法が、僧帽筋に、負けている。", "narration"),
              line("ノリ", "ジャンルが混線しています……! 魔法少女と筋肉バトル、両方の汚染が同時進行——これは、どちらかというと"),
              line("リコ", "どちらかというと?"),
              line("ノリ", "……新ジャンルの生成事故です"),
              line("地の文", "光が晴れたとき、そこに立っていたのは、変身が七割ほど筋肉に押し戻された、何と呼べばいいのか分からない姿のショウだった。", "narration"),
              line("ショウ", "戻った。だいたい。"),
              line("リコ", "だいたいって何")
            ]
          }
        ]
      }
    },

    dayLog: {
      phase: "day_log",
      genrePriority: [
        "sf",
        "mahou_shoujo",
        "renai_novel",
        "kinniku_battle",
        "chiryaku",
        "horror",
        "nichijou",
        "meta_kaisetsu"
      ],
      characterPriority: ["rico", "nori", "renton", "sho", "keisuke", "maho_sho"],
      evaluationOrder: ["nichijou", "kikkou", "character"],
      kikkouThreshold: 5,
      genreLabels: {
        sf: "SF",
        mahou_shoujo: "魔法少女",
        renai_novel: "恋愛ノベル",
        kinniku_battle: "筋肉バトル",
        chiryaku: "知略もの",
        horror: "ホラー",
        nichijou: "日常",
        meta_kaisetsu: "メタ解説"
      },
      collect: collect("ninmu_log", "day1_kinkyu_shoshu"),
      messages: {
        rico: "Day 1 — 今日の世界は【リコ】のノリに寄った（支配ジャンル: {top_genre}）。任務は完了。生活は未完了。お迎えは18時。世界を救っても、定時では終わらない。",
        nori: "Day 1 — 今日の世界は【ノリ】のノリに寄った（支配ジャンル: {top_genre}）。すべては参謀の読み通り——読み通りでなかったのは、日焼けの治りの遅さだけ。",
        renton: "Day 1 — 今日の世界は【レントン】のノリに寄った（支配ジャンル: {top_genre}）。世界の危機より、目の前の右足首。今日も現場は彼に救われ、彼は謝りながら遅刻した。",
        sho: "Day 1 — 今日の世界は【ショウ】のノリに寄った（支配ジャンル: {top_genre}）。理屈は敗北した。筋肉が通った。アルパカは、すべてを見ていた。",
        keisuke: "Day 1 — 今日の世界は【ケイスケ】のノリに寄った（支配ジャンル: {top_genre}）。世界は救われたのか、支配されたのか。分かっているのは、新UIの完成度が高かったことだけ。",
        maho_sho: "Day 1 — 今日の世界は【魔法ショウ女】のノリに寄った（支配ジャンル: {top_genre}）。変身は、最後まで見届けられた。世界のあちこちに、決めポーズの残像がまだ光っている。",
        nichijou: "Day 1 — 今日の世界は【日常】に寄った（支配ジャンル: 日常）。世界の危機は、生活に敗れた。……今日くらい、それでいいのかもしれない。",
        kikkou: "Day 1 — 今日の世界は、誰のものにもならなかった。全員の本業と、全員の副業で、なんとか回った。それがRAMLの、いつも通りである。"
      }
    },

    clear: {
      phase: "next_day",
      title: "第1章 クリア",
      subtitle: "「RAML緊急招集、全員それぞれの事情で遅れる」",
      text: [
        "世界の危機は、今日のところは持ち越しになった。",
        "誰も英雄にはならなかった。全員、明日も本業がある。",
        "リコは保育園のお迎えに間に合うだろうか。",
        "ノリの日焼けは、来週の審判までに治るだろうか。",
        "レントンは、明日こそ定時に上がれるだろうか。",
        "ショウは明日、何の日だろうか。",
        "そして敵は、今夜もツールのバグを直している。",
        "世界は、誰かの本業と、誰かの副業で回っている。",
        "だから今日も——世界征服は、定時後に始まる。"
      ],
      next: "NEXT: Day 2（次章制作予定）"
    }
  };
})();
