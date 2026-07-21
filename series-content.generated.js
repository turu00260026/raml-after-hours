/* 自動生成ファイル。正本は chapter02〜04/02_scenario.md。 */
window.RAML_SERIES_CONTENT = {
  "generatedAt": "2026-07-20T05:09:06.584Z",
  "source": [
    "chapter02/02_scenario.md",
    "chapter03/02_scenario.md",
    "chapter04/02_scenario.md"
  ],
  "events": {
    "EV_C2_SF_DECAY": {
      "id": "EV_C2_SF_DECAY",
      "title": "SF減衰の観測",
      "chapter": 2,
      "day": 2,
      "phase": "morning_briefing",
      "cast": [
        "rico",
        "nori"
      ],
      "illustration": {
        "src": "assets/illustrations/day02_opening_riko_nori.png",
        "alt": "支配ジャンルの自然減衰"
      },
      "onEnterEffects": [
        {
          "key": "day_system",
          "path": "current_day",
          "op": "delta",
          "value": 1
        },
        {
          "key": "genre_pollution",
          "path": "sf",
          "op": "delta",
          "value": -5
        }
      ],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "火曜、17時06分。\n緊急招集の通知音が鳴る。\n誰も顔を上げない。\nリコは保育園アプリの通知を閉じ、その指でRAMLの招集確認を押した。\nノリは昨日と同じ解析席に座っている。日焼けの色だけが、ほんの少し薄い。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "全員、反応は",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "既読三。未読一。ショウは既読を付けない方針です",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "昨日も来たから、驚かなくなったわね",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "危機への順応ではありません。通知への順応です",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "中央モニターに、昨日まで一番長かったSFの青い帯が映る。\n数値は60ではない。Day 1の選択を受けた値から、さらに5だけ短くなっていた。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "故障？",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "正常です。昨日の支配ジャンルだけが、日をまたいだ時点で5減衰しました",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "何もしてないのに？",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "何もしないからです。物語は、毎日同じ調子を維持できません。見せ場は翌日になると日常へ戻る。支配していたジャンルほど、戻り幅が大きい",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "つまり、放っておけば均される",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "はい。ただし、こちらが同じ選択を積めば、別のジャンルが上に出ます",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "SFの帯の下で、昨日伸びた色が静かに点滅する。\nまだ首位は変わらない。だが、差は昨日より小さい。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "世界にも翌朝があるのね",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "そして我々にも本業があります",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "現実的な説明で助かる。今日の予定を出して",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "モニターがジャンル順位から、いつもの平日予定表へ切り替わる。\n世界の危機は、一番上ではなく、17時の欄へ入った。",
          "type": "narration"
        }
      ],
      "choices": []
    },
    "EV_C2_RICO_1800": {
      "id": "EV_C2_RICO_1800",
      "title": "お迎え18時、汚染ピーク18時02分",
      "chapter": 2,
      "day": 2,
      "phase": "life_interrupt",
      "cast": [
        "rico",
        "nori"
      ],
      "onEnterEffects": [
        {
          "key": "character_status",
          "path": "rico.ailments.hoikuen_call",
          "op": "set",
          "value": true
        },
        {
          "key": "genre_pollution",
          "path": "sf",
          "op": "delta",
          "value": 10
        }
      ],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "17時21分。\n司令室の予定表に二本の線が走った。\n一本は、ジャンル汚染の予測ピーク。18時02分。\nもう一本は、リコが自分で入れた予定。保育園お迎え、18時00分。\n二本の線は、ほとんど同じ場所にある。\n生活予定を重ねるため、司令室は既存のSF観測規格を一時的に強める。青い基準線が10伸び、その上へ二つの時刻が固定された。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "予測ピーク、18時02分。誤差は前後4分です",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "お迎え、18時",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "誤差は",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "ない",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "端末が震える。保育園からの確認通知。\nリコはすぐに開く。昨日のような迷いはない。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "世界側の時刻を動かす。生活側は動かせない",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "四案、出します",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "R1",
          "text": "17時40分に現場を畳む",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": -5
            },
            {
              "key": "character_status",
              "path": "rico.ailments.hoikuen_call",
              "op": "set",
              "value": false
            }
          ],
          "collect": [
            {
              "category": "seikatsu_trouble",
              "id": "hoikuen_18ji"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "17時40分で撤収。残りは明日の解析枠へ",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "汚染ピーク前です。未処理が残ります",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "残していい形に分けるの。全部を今日終える前提が、そもそも無理なのよ",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "リコは現場の作業を、止められるもの、明日へ送れるもの、今だけ必要なものに三分した。\n17時39分。最後の通信を閉じる。\n汚染は消えていない。だが、誰も無理な姿勢で残っていない。",
              "type": "narration"
            },
            {
              "speaker": "リコ",
              "text": "では退勤。お迎えに行く",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "世界は",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "明日もある",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "世界が、生活の時間割に従った。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "R2",
          "text": "18時以降の司令をノリへ委任する",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 12
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": -10
            },
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": 8
            },
            {
              "key": "character_status",
              "path": "rico.ailments.hoikuen_call",
              "op": "set",
              "value": false
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "17時45分でノリへ委任。18時以降は判断を任せる",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "了解。お迎えルートの所要時間は",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "あなたが管理するのは世界。私の経路まで解析しない",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "17時45分。司令権がノリへ移る。\nノリは汚染の拡大を、前半・後半・追加時間の三つに分け、18時02分のピークへ判定線を置いた。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "18時02分、予定どおり越境。差し戻します",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "その頃リコは、自転車の信号待ちで司令室の通知を一度だけ確認し、閉じた。\n参謀の判断が、母親の移動時間を守った。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "R3",
          "text": "汚染ピークを17時35分へ前倒しさせる",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 15
            },
            {
              "key": "life_load",
              "path": "keisuke",
              "op": "delta",
              "value": 10
            },
            {
              "key": "character_status",
              "path": "rico.ailments.hoikuen_call",
              "op": "set",
              "value": false
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "待つから重なる。ケイスケに起動を前倒しさせる",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "敵へ予定変更を依頼しますか",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "依頼じゃない。段取りの修正",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "えっ、17時35分？　本番ビルドまだなんですけど。いまなら検証版で——",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "それで起動して。18時には終える",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "本番前倒しは開発者に一番やっちゃいけないやつですよ！",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "保育園のお迎えも、一番後ろへずらせないやつなの",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "17時35分。未完成の世界改変フィールドが、予定より早く立ち上がる。\nRAMLは待ち構えていた。観測、切り分け、停止。17時48分に処理終了。\nケイスケだけが、崩れたリリース予定を抱えていた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "R4",
          "text": "お迎えルートを現場動線に組み込む",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 5
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": 5
            },
            {
              "key": "character_status",
              "path": "rico.ailments.hoikuen_call",
              "op": "set",
              "value": false
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "現場から保育園までの経路を出して。途中の観測点を移動中に拾う",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "任務動線とお迎え動線を統合。徒歩区間6分、自転車区間11分",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "その11分でサンプルを取る。止まらずに済む方法で",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "世界を救う経路と、子どもを迎えに行く経路が、同じ地図の上で一本になった。\n途中、信号待ちで観測値を送信。横断歩道を渡りながら指示は出さない。安全確認が先だ。",
              "type": "narration"
            },
            {
              "speaker": "リコ",
              "text": "観測点C、通過。次の指示は保育園に着いてから",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "了解。世界側を待たせます",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "世界の危機が、初めてお迎えルートへ道を譲った。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C2_RENTON_DELAY": {
      "id": "EV_C2_RENTON_DELAY",
      "title": "遅刻ゲージ、動きます",
      "chapter": 2,
      "day": 3,
      "phase": "life_interrupt",
      "cast": [
        "renton",
        "rico"
      ],
      "illustration": {
        "src": "assets/illustrations/day02_renton_clinic.png",
        "alt": "遅刻ゲージ、動きます"
      },
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "水曜、17時18分。\nレントンの通信窓の横に、昨日まで固定表示だった数字がある。\nCHIKOKU 70\nその数字が、初めて点滅した。",
          "type": "narration"
        },
        {
          "speaker": "レントン",
          "text": "すみません、あと10分で出られると思ったんですけど、最後の方が立ち上がるところまで見届けたくて……",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "遅刻ゲージ、現在値を確認",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "70。通信の向こうで時計の秒針が進む。\n71。72。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "今まで飾りだったの？",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "昨日は初期値の表示だけでした。今日は待機単位に応じて動きます",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "僕の遅刻、実装されたんですか……？",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "喜ぶところではない",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "T1",
          "text": "10分待つ",
          "effects": [
            {
              "key": "character_status",
              "path": "renton.ailments.chikoku_gauge",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "renton",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "renai_novel",
              "op": "delta",
              "value": 5
            },
            {
              "key": "character_status",
              "path": "renton.available",
              "op": "set",
              "value": true
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "10分待つ。10分で終わる？",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "終わらせます、ではなくて……安全に区切ります。10分で",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ゲージが10増える。\nRAMLの現場は、その10分で観測点だけを確保した。\n10分後、レントンは画面へ戻る。息は切れているが、声は昨日より落ち着いている。",
              "type": "narration"
            },
            {
              "speaker": "レントン",
              "text": "お待たせしました。患者さん、最後の一歩まで行けました",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "なら、その10分は使ったことにする",
              "type": "dialogue"
            }
          ]
        },
        {
          "id": "T2",
          "text": "通話で動線だけ診てもらう",
          "effects": [
            {
              "key": "character_status",
              "path": "renton.ailments.chikoku_gauge",
              "op": "delta",
              "value": 5
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "renai_novel",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 5
            },
            {
              "key": "character_status",
              "path": "renton.available",
              "op": "set",
              "value": true
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "移動は後でいい。映像だけ見て。現場の人が同じ方向へ逃げて詰まってる",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "映像ください。……右側の人、左脚をかばっています。出口を増やすより、立ち止まれる場所を作ってください",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "通話中、遅刻ゲージは低速加算。5増えます",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "喋ってても増えるんですね……",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "時間だから",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "レントンは現場にいない。けれど、画面の中の歩き方を一人ずつ読み、流れをほどいた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "T3",
          "text": "患者対応を終えるまで待つ",
          "effects": [
            {
              "key": "character_status",
              "path": "renton.ailments.chikoku_gauge",
              "op": "delta",
              "value": 15
            },
            {
              "key": "life_load",
              "path": "renton",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "renai_novel",
              "op": "delta",
              "value": 5
            },
            {
              "key": "character_status",
              "path": "renton.available",
              "op": "set",
              "value": true
            }
          ],
          "collect": [
            {
              "category": "seikatsu_trouble",
              "id": "chikoku_dynamic"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "目の前を終えてから来て。こちらは15分で組み直す",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "でも、RAMLが",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "あなたを呼んだのは、人を見る力が必要だから。その力を置いて来たら意味がない",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ゲージが15増える。\n数字だけなら悪化だ。けれど通信の向こうで、一人分の歩行訓練が最後まで終わる。\n15分後、レントンは遅れて到着した。",
              "type": "narration"
            },
            {
              "speaker": "レントン",
              "text": "すみません。遅れました",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "知ってる。画面に出てる",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "便利なような、つらいような……",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "遅刻ゲージは上がった。しかし、現場の空気は失敗ではなく、人を置いてこなかった物語へ寄った。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "T4",
          "text": "到着予定を作戦の基準時刻に固定する",
          "effects": [
            {
              "key": "character_status",
              "path": "renton.ailments.chikoku_gauge",
              "op": "delta",
              "value": -20
            },
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 5
            },
            {
              "key": "character_status",
              "path": "renton.available",
              "op": "set",
              "value": true
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "間に合う時刻を目指すのをやめる。あなたが着く時刻を、作戦開始にする",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "予定時刻を17時42分へ再定義。遅刻判定の基準を更新します",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ゲージが20下がる。\nレントンが速くなったのではない。予定のほうが、現実に合わせて正しくなった。",
              "type": "narration"
            },
            {
              "speaker": "レントン",
              "text": "17時42分、到着しました",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "定刻",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "……定刻、いい言葉ですね",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "予定変更に慣れた司令官の段取りが、遅刻を前提条件へ変えた。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C2_NORI_POISON": {
      "id": "EV_C2_NORI_POISON",
      "title": "解析の毒",
      "chapter": 2,
      "day": 3,
      "phase": "field_event",
      "cast": [
        "nori",
        "rico"
      ],
      "onEnterEffects": [
        {
          "key": "character_status",
          "path": "nori.ailments.shinpan_yake",
          "op": "delta",
          "value": -1
        },
        {
          "key": "genre_pollution",
          "path": "sf",
          "op": "delta",
          "value": 12
        }
      ],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "水曜、17時51分。\nノリの画面に、汚染の進行予測が四本並ぶ。\n昨日より線が細かい。昨日より先まで見える。\n審判焼けは一段階薄くなり、その分だけ頭が冴えていた。\n既存のSF観測規格で全領域が再走査され、青い基準線が一度だけ12伸びる。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "次の台詞、予測できます",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "誰の？",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "全員です。ケイスケは32秒後に仕様を説明。レントンはその前に一度謝る。ショウは質問に三文字で答える。司令は——",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "私の分はいい",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "『私の分はいい』と言います",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "ノリの予測どおり、画面右側に小さなマーカーが灯る。\nANALYSIS HINT\nその下に、もっとも構造を読み切れる選択肢が強調されている。",
          "type": "narration"
        },
        {
          "speaker": "レントン",
          "text": "正解が見えるようになったんですか？",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "構造上もっとも説明可能な選択です。人にとって正しいとは限りません",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "便利なものほど、注意書きが小さい",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "N1",
          "text": "全構造を読む",
          "effects": [
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 15
            },
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": -5
            },
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": -5
            },
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": -5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "ノリ",
              "text": "全レイヤーを開きます",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "汚染の原因、会話の順番、次に強調される人物、画面の色。すべてが線で結ばれる。\nノリの説明は正しい。正しすぎて、他の全員が話す前に、その役割まで説明されていく。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "レントンはここで人を優先します。ショウは障害を押します。リコは二つを同時に成立させます",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "まだ何もしてないんですけど……",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "説明された。",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "ノリ。止めて",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "止める判断も予測済みです",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "解析度は大きく上がった。\nその代わり、世界の中心から他の三人が半歩ずつ遠ざかる。\nヒントは正しかった。だからこそ、毒だった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "N2",
          "text": "読む範囲を、今日の時刻表までに限定する",
          "effects": [
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": 3
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "今日の終了時刻までで切って。明日の展開は読まない",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "解析範囲を18時30分までに制限",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "未来予測の線が、日付を越える手前で消える。\n見える範囲は狭くなったが、その中の判定は鮮明になった。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "17時58分に越境。18時04分に収束。18時11分、レントンが二度目の謝罪",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "そこまで読むんですね……すみません",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "一度目です",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "読みすぎないための範囲指定も、ノリの生活スキルになった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "N3",
          "text": "生活予定も解析データへ混ぜる",
          "effects": [
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 3
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "汚染波形だけを見ないで。お迎え、外来終了、退勤、夕飯。その時刻も重ねて",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "ノイズが増えます",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "それが現実",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "解析画面へ生活予定が流れ込む。\nきれいだった予測線は少し乱れた。代わりに、誰がどの時間なら動けるかが見えるようになった。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "……最短解ではありません。ただし、全員が帰れます",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "今日はそれを採用",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "解析は現実を削らず、現実を含んで使われた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "N4",
          "text": "ノリを休ませ、判断を現場へ返す",
          "effects": [
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": -15
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": -5
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "解析停止。ノリ、水分を取って10分休む",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "構造は、あと少しで全部読めます",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "全部読んだら、全員の出番まで先に終わる",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ノリの画面が暗くなる。\n予測線が消えた場所で、レントンが人の歩き方を見て、ショウが通路を見て、リコが時計を見る。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "非効率です",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "人がやると、だいたいそう",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "10分後、ノリは戻った。読めない部分が残っていることを、前より悪いとは言わなかった。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C2_SHO_STOCK": {
      "id": "EV_C2_SHO_STOCK",
      "title": "木曜の筋肉は、まだ開封しない",
      "chapter": 2,
      "day": 4,
      "phase": "life_interrupt",
      "cast": [
        "sho",
        "alpaca"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "木曜、17時12分。\nショウの状態欄に、月曜から消えていない表示がある。\nAT ALPACA FARM\n現在地ではない。Day 1に牧場で温存した余力が、未使用のまま残っていることを示す持ち越しログだ。\n通信窓には、月曜の牧場映像が静止画で残っている。アルパカがまだこちらを見ている。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "その表示、木曜まで持ち越せるの？",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "温存した。",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "四日分の持ち越しを確認。物理量ではなく、物語上の余力です",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "木曜、17時12分。\nショウは平日の仕事を終えたばかりで、司令室の通信窓に無言で立っている。\n机の下で、右脚だけが一定の間隔で動いていた。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "何してるの",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "牧場に行けてない。",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "余力の持ち越しはありません。ただし、未消化の脚の日が蓄積しています",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "結局、何かは溜まるのね",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "現場には、押しても動かない物語の境界がある。\nショウなら動かせる。問題は、木曜に全部使うか、金曜まで残すかだった。",
          "type": "narration"
        }
      ],
      "choices": [
        {
          "id": "M1",
          "text": "温存分を全部使う",
          "effects": [
            {
              "key": "character_status",
              "path": "sho.ailments.at_alpaca_farm",
              "op": "set",
              "value": false
            },
            {
              "key": "genre_pollution",
              "path": "kinniku_battle",
              "op": "delta",
              "value": 20
            },
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 15
            },
            {
              "key": "life_load",
              "path": "sho",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "全部使って。明日の分は明日考える",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "了解。",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ショウが境界へ手を置く。\n月曜から持ち越した余力、あるいは木曜まで溜めた脚のうずきが、一度に開く。\n境界は壊れない。押されて、位置を変えた。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "物語の境界、2.4メートル移動",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "通れる。",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "理屈より先に、通路ができた。世界のノリが筋肉へ大きく寄る。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "M2",
          "text": "半分だけ使い、観測線を残す",
          "effects": [
            {
              "key": "character_status",
              "path": "sho.ailments.at_alpaca_farm",
              "op": "set",
              "value": false
            },
            {
              "key": "genre_pollution",
              "path": "kinniku_battle",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "sho",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "全部は動かさない。観測線が切れないところまで",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "半分。",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "ショウの半分を数値化できません",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "本人に任せる",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ショウは境界をゆっくり押す。\n解析線が伸び切る一歩手前で止めた。",
              "type": "narration"
            },
            {
              "speaker": "ショウ",
              "text": "半分。",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "結果から逆算して、半分だったことにします",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "筋肉の圧とSFの観測が、珍しく同じ画面に残った。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "M3",
          "text": "金曜まで温存する",
          "effects": [
            {
              "key": "character_status",
              "path": "sho.ailments.at_alpaca_farm",
              "op": "set",
              "value": true
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "sho",
              "op": "delta",
              "value": -10
            },
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [
            {
              "category": "seikatsu_trouble",
              "id": "weekday_muscle_hold"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "今日は使わない。金曜の退勤後まで温存",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "了解。追い込まない。",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "初めて温存の意味が通じた",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ショウは境界から手を離す。\n代わりに現場の椅子を並べ直し、全員が立ちっぱなしにならないようにした。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "筋肉を使わないことで、生活環境が改善しました",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "休憩もトレーニング。",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "大きな見せ場は起きない。起こさないことも、平日を回す力だった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "M4",
          "text": "リコの荷物運びに使う",
          "effects": [
            {
              "key": "character_status",
              "path": "sho.ailments.at_alpaca_farm",
              "op": "set",
              "value": false
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": -8
            },
            {
              "key": "life_load",
              "path": "sho",
              "op": "delta",
              "value": 3
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "現場より先に、これ運んで",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "リコが机の下から、仕事鞄、保育園バッグ、買い物袋、RAMLの観測端末を順に出す。",
              "type": "narration"
            },
            {
              "speaker": "ショウ",
              "text": "軽い。",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "私には重いの",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ショウは全部を片手にまとめ、もう片方の手で現場の境界を押さえた。\n荷物が減ったリコは両手で予定を組み直す。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "分業により処理速度上昇",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "筋肉を、世界だけに使う必要はないのよ",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "生活の荷物を持てることが、そのまま司令官の余力を作った。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C2_KEISUKE_V2": {
      "id": "EV_C2_KEISUKE_V2",
      "title": "自作ツールv2、平日配信",
      "chapter": 2,
      "day": 4,
      "phase": "field_event",
      "cast": [
        "rico",
        "keisuke"
      ],
      "illustration": {
        "src": "assets/illustrations/day02_keisuke_tool_v2.png",
        "alt": "自作ツールv2、平日配信"
      },
      "onEnterEffects": [
        {
          "key": "character_status",
          "path": "keisuke.ailments.gadget_charging",
          "op": "set",
          "value": false
        }
      ],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "木曜、17時44分。\n司令室の全モニター右下に、同時に通知が出た。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "GADGET WORLD UI v2.0 — 更新できます",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "閉じても、三秒後にもう一度出る。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "ノリ。敵性表示を消して",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "閉じました。再表示されました",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "皆さん、お待たせしました。世界改変UIのv2です。今回は利用者の声を反映して——",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "利用者になった覚えはない",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "でも毎日起動してるじゃないですか。継続率100%ですよ",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "画面の端が、新しいUIへじわじわ置き換わっていく。\nSFの直線的な枠、知略ものの判定線、日常の予定カード。昨日まで別々だった表示が、一つの操作画面へまとめられていた。",
          "type": "narration"
        },
        {
          "speaker": "ケイスケ",
          "text": "新機能は生活モードです。退勤時刻を入れると、それまでに終わる世界征服プランだけ表示します",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "そこだけは見せて",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "K1",
          "text": "自動更新を止める",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": -5
            },
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": -5
            },
            {
              "key": "life_load",
              "path": "keisuke",
              "op": "delta",
              "value": 8
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "自動更新を停止。現行画面へ戻す",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "えっ、せめて更新内容を読んでから判断してください",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "停止しました。UIフレーム、SF規格へ復帰",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "新しいボタンが消え、見慣れた青い線が戻る。\nケイスケは画面の向こうで、手動配信の手順を調べ始めた。",
              "type": "narration"
            },
            {
              "speaker": "ケイスケ",
              "text": "自動がダメなら段階配信で……",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "配らないで",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "世界はSFの見た目を守った。ケイスケの今夜の作業だけが増えた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "K2",
          "text": "差分だけ読ませる",
          "effects": [
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "全部はいらない。昨日から変わったところだけ",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "差分ですね。まず描画基盤を全部刷新して——",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "それは全部です",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "じゃあ利用者視点で。ボタンが丸くなりました。予定表が入りました。ジャンル切替が0.2秒速くなりました",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ノリが差分だけを解析ログへ移す。\n説明は短くなったが、世界の右下には注釈が増えた。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "理解度は上がりました。同時に、画面の説明量も上がっています",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "また同じ方向なのね",
              "type": "dialogue"
            }
          ]
        },
        {
          "id": "K3",
          "text": "生活モードを試す",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": -8
            },
            {
              "key": "life_load",
              "path": "keisuke",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "生活モード。退勤18時、お迎え18時、夕飯開始19時で入力",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "その条件だと、世界征服プランが一件も出ません",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "正常",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "いや、製品としては困るな……条件緩和の提案を出すようにします？",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "出さない。『今日はやめる』を候補に入れて",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ケイスケが黙る。\n数秒後、新しいボタンが一つ増えた。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "今日はここまで",
              "type": "narration"
            },
            {
              "speaker": "ケイスケ",
              "text": "……この機能、需要あります？",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "一番ある",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "世界改変UIが、初めて世界を変えないために使われた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "K4",
          "text": "配信を最後まで見る",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 20
            },
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 20
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "keisuke",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [
            {
              "category": "seisei_jiko_log",
              "id": "gadget_v2_release_notes"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "最後まで見せて。今回だけ",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "今回だけでも十分です！　ではリリースノート全42項目——",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "42",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "細かい修正を含みます。第1項、ジャンル順位表示のアニメーションを12フレーム短縮",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "配信は続いた。\nケイスケは世界征服について一度も話さなかった。話したのはボタンの余白、通知の間隔、読み込み中の表示、生活モードの入力補助。\n39項目目で一度だけ画面が固まり、ケイスケの顔も固まった。",
              "type": "narration"
            },
            {
              "speaker": "ケイスケ",
              "text": "いまのは配信環境側です。v2ではないです",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "生成事故ログへ保存しました",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "そのログ、あとで送ってください",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "最後まで見てもらったケイスケは満足し、世界の画面はすっかり彼の説明順で並べ替えられていた。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C2_GENRE_OVERTAKE": {
      "id": "EV_C2_GENRE_OVERTAKE",
      "title": "SFが一位から落ちる日",
      "chapter": 2,
      "day": 4,
      "phase": "day_log_pre",
      "cast": [
        "rico",
        "nori"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "木曜、18時03分。\n中央モニターの順位表示が更新される。\n二位の帯が伸び、SFの青い帯と並び——一画素だけ上へ出た。\n表示順が入れ替わる。\n司令室の照明色が、新しい一位の色へゆっくり変わる。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "支配ジャンル、交代",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "初めて？",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "観測開始以来、初です。SFが一位から落ちました",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "警報は鳴らない。\n世界は壊れない。\nただ、同じ司令室なのに、台詞を待つ間の取り方、カメラの寄り方、画面の余白が少しだけ違って見える。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "金曜、17時57分。\nSFの青い帯は、まだ一番上にある。\nただし二位との差は、細い境界線一本分しかない。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "交差予測、次の選択内。SFはまだ首位です",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "粘ったわね",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "四日間、維持する選択が積まれた結果です。逆転しないことも、観測結果です",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "モニターが四つの調整案を出す。\nどれを選んでも、今日までの積み重ねが消えるわけではない。",
          "type": "narration"
        }
      ],
      "choices": [
        {
          "id": "G1",
          "text": "生活の時刻を最優先にする",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": -5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "調整案一。全員の終了時刻を先に固定する",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "ジャンル順位より、生活の時刻を優先",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "順位は結果。帰る時刻は予定",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "18時の予定が、ジャンルの帯より上へ表示される。\n日常の色が伸びる。\nそれがSFを抜けば、司令室は少し暖かい照明になる。届かなければ、青い光の中に帰宅予定だけが残る。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "G2",
          "text": "SF観測規格を維持する",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "観測規格を維持。今日はSFの枠で閉じる",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "了解。青帯を基準線へ固定",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "司令室の直線的なフレームが濃くなる。\n世界は見慣れた形を保つ。その分、リコの机には確認項目が三つ増えた。",
              "type": "narration"
            },
            {
              "speaker": "リコ",
              "text": "維持って、何もしないことじゃないのよね",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "首位には首位の負荷があります",
              "type": "dialogue"
            }
          ]
        },
        {
          "id": "G3",
          "text": "ケイスケの新UIへ寄せる",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 15
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "新UIを観測画面に限定導入。ケイスケ、説明は三行まで",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "三行は無理です。見出し込みで五行ください",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "四行",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "採用！",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "順位表示がケイスケのUIへ切り替わる。\n何が起きているかは分かりやすい。誰が画面を作ったかも、分かりすぎる。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "支配ジャンルより先に、支配UIが交代しました",
              "type": "dialogue"
            }
          ]
        },
        {
          "id": "G4",
          "text": "四つの生活スキルへ均等に返す",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 8
            },
            {
              "key": "genre_pollution",
              "path": "renai_novel",
              "op": "delta",
              "value": 8
            },
            {
              "key": "genre_pollution",
              "path": "kinniku_battle",
              "op": "delta",
              "value": 8
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 8
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "一つを押し上げない。判定、身体観察、突破、生活予定へ同じだけ返す",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "首位を作らない調整ですか",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "誰か一人の調子で平日全部を回さない",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "四本の帯が同時に伸びる。\n一位が入れ替わる場合も、SFが薄い差で残る場合もある。\n画面は少し散らかる。けれど、全員の仕事が一つずつ見える。",
              "type": "narration"
            },
            {
              "speaker": "レントン",
              "text": "僕の分もある……",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "ある。",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "最短ではありません",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "平日は、最短だけでできてない",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "順位が確定する。\nSFの青い帯が一段下へ移り、新しい色が一番上へ出る。\nFIRST OVERTAKE OBSERVED",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "首位交代、記録しました",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "世界は？",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "動いています。壊れてはいません。ただ、別のノリで",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "RAMLは初めて、SFではない画面の中で日報を開いた。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "順位が確定する。\nSFの青い帯は、わずかな差で一番上に残った。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "首位、SFを維持",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "変わらないために、四日分選んだ結果ね",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "はい。未発生ではなく、維持です",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "世界は同じ見た目を守った。ただし、その下には四日分の別ジャンルがはっきり並んでいる。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C2_HANAKIN": {
      "id": "EV_C2_HANAKIN",
      "title": "敵味方関係なく、金曜は金曜",
      "chapter": 2,
      "day": 5,
      "phase": "chapter_clear_pre",
      "cast": [
        "rico",
        "keisuke"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "金曜、18時24分。\n現場から二筋離れた通りのファミレスに、五つの通信が順不同で集まった。\n集合をかけた者はいない。「金曜の18時に解散する」という今週の合意が、そのまま席になっただけだ。\nリコの隣には保育園帰りの次女、向かいに小学生の長女。テーブルの端で、二人分のジュースがもう決まっている。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "業務連絡。ここから先は業務連絡禁止",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "最後の業務連絡です。明日は8時から審判のため、本日はウーロン茶で臨席——参加します",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "言い直したわね",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "ショウは既に着席している。牧場に行けない一週間を過ごした男は、スマホの写真フォルダを無言で温めていた。\nそこへ、店の隅の席から聞き覚えのある声がする。",
          "type": "narration"
        },
        {
          "speaker": "ケイスケ",
          "text": "……この店、Wi-Fiのチャンネル設計が雑だな。ルーター見せてもらえます？",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "敵がいる",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "奇遇ですね。金曜なので",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "敵組織も花金という観測結果です",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "18時41分。レントンから「いま外来が終わりました、向かいます」の通知。\n到着予定の欄に、今日はもう誰も幅の注文を付けない。\n世界の危機の予定表は、月曜の朝まで空欄だった。",
          "type": "narration"
        }
      ],
      "choices": [
        {
          "id": "F1",
          "text": "レントンを待って、全員そろってから乾杯する",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": 3
            }
          ],
          "collect": [
            {
              "category": "seikatsu_trouble",
              "id": "hanakin_kanpai"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "乾杯はレントンが来てから。それまでは注文だけ",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "19時02分、レントンが息を切らせて到着する。誰も急かさなかったのに、本人だけが謝った。",
              "type": "narration"
            },
            {
              "speaker": "レントン",
              "text": "すみません、遅れ——",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "今日は遅刻じゃない。集合時間がないから",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ジュース二つ、ウーロン茶一つ、あとはそれぞれ。隅の席のケイスケのグラスも、いつの間にか輪の端にある。",
              "type": "narration"
            },
            {
              "speaker": "リコ",
              "text": "お疲れさまでした。世界と、今週の生活に",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "乾杯の音は小さかった。次女がいちばん大きな音を出した。\n子連れの外食は世界の危機より段取りが多い。それでもリコは、今週初めて18時台に「終わり」と言えた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "F2",
          "text": "ノリの明日の審判談義に付き合う",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 3
            },
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": 3
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "レントン",
              "text": "明日、どんな試合なんですか",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "小学5年生の公式戦です。走力は互角。勝敗は、たぶんスローインの精度で決まります",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "世界の解析と同じ顔で言うのね",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "同じ仕事です。線のどちら側か、を見ます",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ウーロン茶のグラスを置いて、ノリはテーブルの上に指で白線を引いた。\nオフサイドの説明は、なぜかジャンル境界の説明よりも熱がこもっていた。\n話が終わったのは20時前。明日の集合8時のことは、本人がいちばんよく分かっている。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "F3",
          "text": "ショウのアルパカ写真閲覧会にする",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 3
            },
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "ショウ",
              "text": "見るか。",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "差し出されたスマホには、角度違いのアルパカが214枚入っていた。",
              "type": "narration"
            },
            {
              "speaker": "リコの長女",
              "text": "これ全部同じ子？",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "違う。全員名前がある。",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "モブに名前を……いえ、何でもありません",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ショウは一枚ごとに毛質と表情の違いを三文字以内で解説した。\nふわい。」「強い。」「賢い。\n週末の牧場を待つ男の写真フォルダが、金曜の夜のテーブルを静かに支配した。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "F4",
          "text": "ケイスケのWi-Fi改善を見守る",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 5
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 3
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "ケイスケ",
              "text": "お、見ます？　この店、電子レンジとルーターが同じ壁にあるんですよ。信じられます？",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "敵の休日労働を眺める趣味はないんだけど",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "休日じゃなくて趣味です。チャンネルを1と6と11に分けて——ほら、速くなった",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "店員がお礼を言いに来る。世界征服を目指す男は「いえ、気になっただけなので」と名乗らずに手を振った。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "敵性行動ではありません。むしろ地域貢献です",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "報告書に書きにくいからやめて",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "世界改変UIの開発者は、金曜の夜、ファミレスのWi-Fiを一段だけ良くして満足した。\n征服の予定は、また月曜以降へ延びた。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "20時13分。会計は割り勘、ケイスケの分だけ別会計。\n店を出ると、金曜の夜風がRAMLにもGADGETにも同じ温度で吹いた。",
              "type": "narration"
            },
            {
              "speaker": "リコ",
              "text": "解散。月曜まで、世界は各自の余白で見ておいて",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "こっちも月曜まで動きません。更新審査があるので",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "敵の工程管理に救われる金曜です",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "敵も味方も、それぞれの土日へ帰っていく。\n金曜は、誰のジャンルでもなく、全員の生活のものだった。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C3_HOLIDAY_SHIFT": {
      "id": "EV_C3_HOLIDAY_SHIFT",
      "title": "休日の司令系統",
      "chapter": 3,
      "day": 6,
      "phase": "morning_briefing",
      "cast": [
        "rico",
        "nori"
      ],
      "onEnterEffects": [
        {
          "key": "day_system",
          "path": "current_day",
          "op": "set",
          "value": 6
        }
      ],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "土曜、午前八時十二分。\n司令室の中央卓は空いている。代わりに壁面モニターへ、四つの生活が並んでいた。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "河川敷の白線を確認するノリ。アルパカ牧場の柵を直すショウ。買い物袋と洗濯物の間に端末を立てたリコ。量販店の明るすぎる照明の下で、新しい機器を並べるケイスケ。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "休日だから空いている者は、一人もいなかった。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "休日シフトを開始する。全員、いまいる場所と、離れられる時刻だけ報告して",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "試合開始まで十八分。ハーフタイムは七分です",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "柵、あと二枚。",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "僕は敵側なので報告義務ないんですけど、オフ会は十時開始です。新型入力デバイス、触ります？",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "最後の一名は回線を切って。——さて、休日の司令系統をどう組む？",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "A1",
          "text": "予定を十五分単位に切り、空いた窓だけRAMLへつなぐ",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "ノリはハーフタイム七分。ショウは柵二枚のあと十二分。私は洗濯終了まで九分。空き時間だけ共有して",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "任務時間ではなく、生活の隙間を同期するわけですね",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "逆。生活の予定が正で、任務をそこへ入れる",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "世界を守る予定が、洗濯機の終了音と試合の笛の間へ収まった。余白は狭い。だがリコは、狭い余白を使うことには慣れている。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "A2",
          "text": "それぞれの現場を臨時の司令席にする",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 5
            },
            {
              "key": "character_status",
              "path": "sho.ailments.at_alpaca_farm",
              "op": "set",
              "value": true
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "集合はしない。ノリは河川敷、ショウは牧場から判断を返して",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "司令室を場所ではなく、判断の接続として扱う",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "牧場、電波は二本。",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "十分。電波より足場を見て",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "河川敷の白線と牧場の柵が、モニター上でジャンル境界の測定線になった。休日の場所が、そのまま観測設備になる。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "A3",
          "text": "司令室をリコ一人で維持する",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": 15
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "各員は予定を優先。司令室は私が残す",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "家庭タスクとの同時稼働になります",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "だから残れるのが私しかいないの。心配するなら、返答を短くして",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "司令室の画面は整った。リコの机の横には、畳みかけの洗濯物が積み上がった。SFの秩序と生活の未処理が、同じ高さで並ぶ。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "A4",
          "text": "応答を非同期にし、全員が手の空いた時だけ記録する",
          "effects": [
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "即答は禁止。見た人が、見た時刻と判断だけ残す",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "非同期ログ、いいですね。閲覧位置も同期しましょうか",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "敵側が機能追加を始めないで",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "もう試作画面を出しました",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "休日の会話は途切れ途切れになった。その空白を埋めるように、ケイスケの説明欄だけが少しずつ長くなった。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C3_NORI_REFEREE_LIVE": {
      "id": "EV_C3_NORI_REFEREE_LIVE",
      "title": "判定は試合中",
      "chapter": 3,
      "day": 6,
      "phase": "life_interrupt",
      "cast": [
        "nori",
        "rico"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "土埃が上がる。ノリはタッチライン沿いを走り、短く笛を吹いた。\n同じ瞬間、耳元の端末が振動する。RAMLの観測画面では、現実と別ジャンルの境界が、白線を越えたり戻ったりしていた。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "ノリ、境界の判定が必要。いま話せる？",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "プレー続行中です。十七秒なら",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "短すぎる",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "試合は待ちません。世界のほうを要約してください",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "N1",
          "text": "ハーフタイムまで待ち、七分すべてを解析に使う",
          "effects": [
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": 15
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "地の文",
              "text": "ハーフタイム。ノリは水を一口だけ飲み、残りの時間を波形へ渡した。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "侵食は三回に一回だけ線を越えています。規則性があります",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "休憩は",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "解析の残り四十秒が休憩です",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "答えは正確だった。水のボトルは、ほとんど減らなかった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "N2",
          "text": "境界を越えたかどうかだけ判定してもらう",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 15
            },
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "解析はいらない。越えたか、越えてないか。それだけ",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "了解。——いまの侵食は、線上。続行です",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "線上は中？",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "判定上は中です。現実側に有利なルールを採用します",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "複雑な波形が、ノリの一言で内側と外側に分かれた。迷った時に線を引ける。それが休日に磨かれている技術だった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "N3",
          "text": "試合の笛を、ジャンル境界の同期信号にする",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 20
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 10
            },
            {
              "key": "character_status",
              "path": "nori.ailments.shinpan_yake",
              "op": "delta",
              "value": 1
            }
          ],
          "collect": [
            {
              "category": "seikatsu_trouble",
              "id": "nori_realtime_referee"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "次の笛に、境界補正を同期する",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "笛の理由は試合側にあります。RAMLは便乗してください",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ノリが走る。接触を見て、腕を上げ、笛を吹く。\n甲高い一音が河川敷から観測網へ抜けた。ジャンル境界は「ここから先は反則だ」と告げられたように、白線の外へ戻る。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "判定、確定。異議は受け付けません",
              "type": "dialogue"
            }
          ]
        },
        {
          "id": "N4",
          "text": "試合が終わるまでRAML側が待つ",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": -10
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "通信終了。試合を見て。こちらは持たせる",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "しかし、境界が",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "世界は十分待たせてる。今日は試合を待つ番",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ノリの回線から、選手たちの声だけが遠ざかっていく。RAMLは七十分、急がずに持ちこたえた。待つ判断も、司令の仕事だった。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C3_KEISUKE_OFFMEET": {
      "id": "EV_C3_KEISUKE_OFFMEET",
      "title": "敵も休日の机にいる",
      "chapter": 3,
      "day": 6,
      "phase": "field_event",
      "cast": [
        "rico",
        "keisuke"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "午後。観測されたGADGET信号を追った先は、家電量販店のイベント階だった。\n明るい照明。折りたたみ机。充電ケーブル。机の中央で、ケイスケが手のひらほどの投影機を調整している。",
          "type": "narration"
        },
        {
          "speaker": "ケイスケ",
          "text": "あ。RAMLも来たんですか。今日は世界改変じゃなくて、個人持ち込み機器のオフ会です",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "その投影機から、汚染波が出てる",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "出力を見せ合う会なので、多少は出ます",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "多少の定義を提出してください",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "K1",
          "text": "敵性機器として電源を切る",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "keisuke",
              "op": "delta",
              "value": 5
            },
            {
              "key": "character_status",
              "path": "keisuke.ailments.gadget_charging",
              "op": "set",
              "value": true
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "電源を切って。今日は展示より安全確認が先",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "終了処理を通してからでいいですか。突然切るとログが",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "三秒",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "短い！",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "投影は消えた。机だけが残る。世界改変は止まり、ケイスケは電源の落ち方について長い改善メモを書き始めた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "K2",
          "text": "何をする機器か、仕様だけ聞く",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 10
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "三十秒で仕様を説明して",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "空間に共通の操作面を出します。入力遅延は理論上ゼロで、画面右側の——",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "二十二秒。すでに説明が操作面を占有しています",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "説明欄も機能の一部です",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "機器の仕組みは分かった。その代わり、世界の右端に説明パネルが居座った。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "K3",
          "text": "見つけた表示ずれを指摘し、修正させる",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "keisuke",
              "op": "delta",
              "value": 10
            },
            {
              "key": "character_status",
              "path": "keisuke.ailments.gadget_charging",
              "op": "set",
              "value": false
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "ノリ",
              "text": "境界表示が二ピクセル外へずれています",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "本当だ。待ってください、いま直します",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "世界改変は",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "修正が終わるまで保留です。ずれたまま出すほうが嫌なので",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ケイスケは椅子へ座り、世界より先に表示を直した。敵の計画は止まった。理由は、完成度だった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "K4",
          "text": "同じ机に座り、全員で一度だけ検証する",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 15
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [
            {
              "category": "hidden_event",
              "id": "gadget_offmeet_shared_table"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "一回だけ。危険箇所を確認したら解散",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "敵味方合同のユーザーテストですね",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "休日の同じ机に座っただけ。関係を増やさないで",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "机の片側にRAML、反対側にGADGET。だが全員の視線は中央の小さな画面へ向いていた。\n不具合が出るたび、誰かが指を差し、ケイスケが直す。世界の危機はしばらく、休日の検証会に姿を変えた。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C3_RENTON_ON_TIME": {
      "id": "EV_C3_RENTON_ON_TIME",
      "title": "急がないから見える",
      "chapter": 3,
      "day": 7,
      "phase": "life_interrupt",
      "cast": [
        "renton",
        "rico"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "日曜、午前十時ちょうど。\n司令室の扉が開く。",
          "type": "narration"
        },
        {
          "speaker": "レントン",
          "text": "お疲れさまです。間に合いました",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "誰も返事をしなかった。\nリコが時計を見る。ノリも時計を見る。ショウはレントンの後ろに誰かいるのか確認した。",
          "type": "narration"
        },
        {
          "speaker": "レントン",
          "text": "……部屋、合ってますよね？",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "合ってる。時間も合ってる。それが合ってなさすぎて",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "遅刻ゲージ、ゼロ。計測器の故障を疑いました",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "今日は本業が休みです。目覚ましより先に起きました",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "現場の観測映像が開く。日曜の街。人々は普通に歩いている。転倒も混乱もない。\nただ全員が、同じ場所で半歩だけ歩幅を狭めていた。",
          "type": "narration"
        },
        {
          "speaker": "レントン",
          "text": "急いでないなら、先に見てもいいですか",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "T1",
          "text": "レントンへ現場判断を任せる",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 20
            },
            {
              "key": "genre_pollution",
              "path": "renai_novel",
              "op": "delta",
              "value": 15
            },
            {
              "key": "character_status",
              "path": "renton.ailments.chikoku_gauge",
              "op": "delta",
              "value": -100
            },
            {
              "key": "character_status",
              "path": "renton.available",
              "op": "set",
              "value": true
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "今日はあなたが最初に見て。急がなくていい",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "分かりました。歩幅じゃなくて、呼吸から見ます",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "レントンは画面の一人ひとりを追った。半歩狭くなる直前、全員が同じ方向へ視線を送っている。",
              "type": "narration"
            },
            {
              "speaker": "レントン",
              "text": "床じゃない。そこに『誰かが立っている距離』を空けています",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "映像上、人はいません",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "でも、人が人を避ける間合いです",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "数値より先に、人と人の距離が異常の輪郭を作った。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "T2",
          "text": "身体の変化だけを観察してもらう",
          "effects": [
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "renai_novel",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "renton",
              "op": "delta",
              "value": -10
            },
            {
              "key": "character_status",
              "path": "renton.ailments.chikoku_gauge",
              "op": "delta",
              "value": -100
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "ノリ",
              "text": "原因の推測は私がします。レントンは身体情報だけを",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "了解。右足の接地が短い。肩は下がってる。怖がってはいません",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "恐怖ではない？",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "場所を譲っています。無意識に",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ノリの解析とレントンの観察が、同じ答えへ別々の道から届いた。異常は、人に避けられることで場所を得ていた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "T3",
          "text": "いつもの速度で急いでもらう",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "renton",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 5
            },
            {
              "key": "character_status",
              "path": "renton.ailments.chikoku_gauge",
              "op": "delta",
              "value": -100
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "時間はある。でも、いつもの手順で短く確認して",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "はい。……急ぐ必要、ないんですよね",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "ない。ないけど、私たちが慣れてない",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "レントンは反射的に画面を早送りし、一度見落としてから、黙って元へ戻した。",
              "type": "narration"
            },
            {
              "speaker": "レントン",
              "text": "すみません。遅れてないのに、急いでました",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "今日は戻せる。もう一度見て",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "時間の余白が、見落としをやり直せる余白になった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "T4",
          "text": "結論を出さず、現場の一分をそのまま見る",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "renai_novel",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 15
            },
            {
              "key": "life_load",
              "path": "renton",
              "op": "delta",
              "value": -10
            },
            {
              "key": "character_status",
              "path": "renton.ailments.chikoku_gauge",
              "op": "delta",
              "value": -100
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "レントン",
              "text": "一分だけ、何もしないで見たいです",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "一分で足りる？",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "急いでない一分なら",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "人々が歩く。買い物袋を持ち替える。信号を待つ。誰かが笑う。\n四十二秒目、狭くなっていた歩幅が自然に戻った。異常は押し返されたのではない。誰にも主役の場所を譲られなくなり、立つ場所を失った。",
              "type": "narration"
            },
            {
              "speaker": "レントン",
              "text": "戻りました",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "介入なしで？",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "みんな、自分の行き先を優先しただけです",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "世界を動かしたのは、急がない観察と、名もない人たちの日常だった。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C3_SUNDAY_HORROR": {
      "id": "EV_C3_SUNDAY_HORROR",
      "title": "人だけがいない",
      "chapter": 3,
      "day": 7,
      "phase": "field_event",
      "cast": [
        "renton",
        "rico"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "日曜、午後十一時四分。\n明日の予定を確認していたリコの端末へ、無人の中継画面が一枚だけ開いた。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "廊下。白い床。点いたままの照明。壁の時計は動いている。\n誰もいない。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "それだけなら、異常ではない。\n画面の奥では、自動ドアが人を通したように一度開き、足音のないまま閉じた。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "ノリ。録画？",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "現在映像です。温度、空調、時刻は正常。人の情報だけがありません",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "画面を少し戻せますか。ドアが開く前",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "戻した映像には、やはり誰もいなかった。\nただ、床に置かれた紙コップの水面だけが、足音の形に揺れていた。",
          "type": "narration"
        }
      ],
      "choices": [
        {
          "id": "H1",
          "text": "照明をすべて点け、SF観測へ戻す",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "horror",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "全照明、最大。赤外線と距離計を重ねて",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "暗い場所はなくなった。廊下はただの白い通路へ戻る。\nそれでも自動ドアは、もう一度、誰も通さずに開いた。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "見えるようになっただけで、埋まってはいません",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "それでいい。見えないままにしない",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "怖さは薄れた。欠けた一人分の空間だけが、観測記録に残った。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "H2",
          "text": "三十秒、無音のまま観測する",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "horror",
              "op": "delta",
              "value": 20
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "ノリ",
              "text": "音を切ります。こちらの解釈が、向こうへ形を与える可能性があります",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "三十秒。\n時計の秒針だけが動く。聞こえないはずなのに、その刻みが画面の内側から届くように思えた。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "二十七秒目。紙コップが、誰かに避けられたように半回転した。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "記録しました。名前は付けません",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "付けないまま、閉じて",
              "type": "dialogue"
            }
          ]
        },
        {
          "id": "H3",
          "text": "空の画面を切らず、最後まで記録する",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "horror",
              "op": "delta",
              "value": 40
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [
            {
              "category": "seisei_jiko_log",
              "id": "day7_empty_frame"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "切らない。何も起きないところまで残す",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "誰もいない廊下を、全員で見続けた。\n五分後、清掃用の小さな機械が画面を横切った。自動ドアはそれには反応せず、紙コップへ軽くぶつかった。\n水がこぼれる。急に、ただの夜になった。",
              "type": "narration"
            },
            {
              "speaker": "リコ",
              "text": "……記録終了",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "異常の終端は確認できません",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "何も起きなくなった。それを終端にする",
              "type": "dialogue"
            }
          ]
        },
        {
          "id": "H4",
          "text": "レントンに、画面の中の身体動作を読んでもらう",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "horror",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "renai_novel",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 15
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "レントン",
              "text": "誰かが歩いた映像じゃありません。人が歩くなら、ドアの前で一度速度が落ちる。水面も、左右へ揺れるはずです",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "じゃあ、何が通ったの",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "通ったんじゃなくて。『通った後の形』だけが再生されています",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "レントンは紙コップの揺れを一拍ずつ追った。欠けているのは人ではなく、動作の始まりだった。\n目の前の身体を見る仕事が、身体のない映像にも効いていた。",
              "type": "narration"
            },
            {
              "speaker": "レントン",
              "text": "始まりのない動きは、続けられません。次で止まります",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "次の一回で、自動ドアは止まった。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "画面が閉じる。\nリコの部屋では、明日のために予約していた炊飯器が動き始めた。生活の音が戻る。\nhorror は値として残る。だが専用の出来事は、これで終わる。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C3_FRAGMENT_09_11": {
      "id": "EV_C3_FRAGMENT_09_11",
      "title": "OBSERVATION FRAGMENT No.09〜11",
      "chapter": 3,
      "day": 8,
      "phase": "morning_briefing",
      "cast": [
        "rico",
        "nori"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "演出:\n黒背景。低い持続音。画面中央に細い走査線。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "OBSERVATION FRAGMENT No.09\n漫画9Pの一部を、人物関係の説明なしに提示する。",
          "type": "narration"
        },
        {
          "speaker": "キャプション:",
          "text": "局所的な因果の反転を確認。発生源は画面外へ移動",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "一度暗転。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "OBSERVATION FRAGMENT No.10\n漫画10Pの一部。輪郭がわずかに二重化して見える加工。",
          "type": "narration"
        },
        {
          "speaker": "キャプション:",
          "text": "対象の輪郭情報が物語層から分離",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "一度暗転。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "OBSERVATION FRAGMENT No.11\n漫画11Pの一部。表示終了後も走査線だけを一拍残す。",
          "type": "narration"
        },
        {
          "speaker": "キャプション:",
          "text": "観測終了後も、未記録の一拍が残留",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "全消灯。一秒の黒。\n司令室へ。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "フラグメント09から11、受信完了。前回の断片と同一座標です",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "連続してる？",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "映像は連続しています。因果だけが、三枚の間で切れています",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "切れた部分を推測しないで。観測できたものだけ残す",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "了解。未記録の一拍を、未記録のまま保存します",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "ノリの手が、一度だけ止まる。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "補足を一件だけ。三枚目の記録に、損傷によらない機能停止が含まれます。停止の直前、記録側の音声にこう残っています——『完全に主役の座をとられた』と",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "決着の項目は",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "損害ではありません。……主役度です",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "記録どおりに保存して。解釈は付けない",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "三枚の断片が、司令室の保管領域へ静かに収まった。\nそこで初めて、リコの端末が週明けの通知音を鳴らす。",
          "type": "narration"
        }
      ],
      "choices": []
    },
    "EV_C3_RICO_WEEKLY_DEBT": {
      "id": "EV_C3_RICO_WEEKLY_DEBT",
      "title": "月曜に届くもの",
      "chapter": 3,
      "day": 8,
      "phase": "life_interrupt",
      "cast": [
        "rico",
        "nori"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "一件目、保育園から体調確認。\n二件目、学校から今週の持ち物変更。\n三件目、仕事の予定変更。\n四件目、RAMLの未処理ログ。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "先週の判断は消えない。週末を挟んで、月曜の受信箱へ形を変えて戻ってくる。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "……来た。先週のツケ",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "優先度順に並べますか",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "その優先度を決めるのが、いま一番重いの",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "R1",
          "text": "一件ずつ開き、今日の予定として受け取る",
          "effects": [
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 15
            },
            {
              "key": "character_status",
              "path": "rico.ailments.hoikuen_call",
              "op": "set",
              "value": false
            }
          ],
          "collect": [
            {
              "category": "seikatsu_trouble",
              "id": "rico_senshu_no_tsuke"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "保育園、学校、仕事、RAML。この順で返す",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "任務が最後です",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "最後でも、やる。先にやることと、やらないことは違う",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "リコは一件ずつ返事をした。件数は減る。負荷は消えない。それでも、予定は再び人が扱える大きさへ戻った。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "R2",
          "text": "ノリへ十二分だけ司令を委任する",
          "effects": [
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": -5
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "ノリ、十二分だけ任せる。十三分目には戻る",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "了解。未処理を種類別に——",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "生活連絡は分類しないで。触らないで",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "境界を明確にします。RAMLだけ預かります",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ノリは任務だけを受け取った。全部を代わるのではなく、混ざっている一種類だけを外す。それでリコの手は動いた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "R3",
          "text": "生活予定と任務予定を同じ一枚へ並べる",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 10
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "別々に管理するから衝突する。同じ時刻表へ出して",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "十七時四十分、汚染ピーク。十八時、お迎え",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "ピークを十七時三十五分までに切る。五分は移動の予備",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "世界の危機に、お迎えという締切が入った。途端に作戦は具体的になった。リコの生活は、任務へ現実の終了時刻を与えた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "R4",
          "text": "通知を伏せ、観測を優先する",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": 25
            },
            {
              "key": "character_status",
              "path": "rico.ailments.hoikuen_call",
              "op": "set",
              "value": true
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "観測を先に終わらせる。通知は、そのあと",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "未処理は残ります",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "分かってる。分かってるものを、いま増やさないで",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "司令室は静かになった。観測は進んだ。\n伏せた端末の下で、先週はもう一週間ぶんの重さになって待っていた。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "午後の現場は小康状態だった。汚染係数は高止まりのまま、動かない。\nノリはそれを「静かすぎる」と記録した。前日の夜の廊下と、同じ種類の静けさだった。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C3_MAHO_SECOND": {
      "id": "EV_C3_MAHO_SECOND",
      "title": "二度目の光",
      "chapter": 3,
      "day": 9,
      "phase": "field_event",
      "cast": [
        "sho",
        "magical_shojo"
      ],
      "illustration": {
        "src": "assets/illustrations/day08_magical_shojo_second.png",
        "alt": "二度目の光"
      },
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "火曜、夕方。観測地点の空は、まだ平日の色をしていた。\n定時後に合流したショウが境界装置を支え、レントンが床面の歪みを確認している。ノリは司令室から数値を読む。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "その時、前日に保管したはずのフラグメント11の走査線が、保管領域から一本だけ漏れた。\n線はショウの足元へ届き、円を描く。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "低いSFの持続音に、鈴の音が一つ重なった。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "魔法少女系の演出波。前回と同一です",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "同一じゃない。光の始まりが速い",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "ピンクの光がショウの肩を包む。白い翼の輪郭。胸元へ集まるハート形の光。まだ衣装ではない。ただ、世界の側が完成形を覚えている。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "ショウは逃げない。両足を肩幅に置き、光の中心で呼吸を整えた。",
          "type": "narration"
        },
        {
          "speaker": "ショウ",
          "text": "二回目。",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "覚えてるんですか",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "身体が。",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "前回は、何が起きるか分からなかった。\n今回は全員が知っている。最後まで見れば、世界は主役の場所を空ける。遮れば、光は残滓になる。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "だから二度目の選択は、事故への反応ではない。\nどこまで見届けるかを、分かった上で決める選択だった。",
          "type": "narration"
        }
      ],
      "choices": [
        {
          "id": "M1",
          "text": "口上が始まる前に、観測波を切る",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "mahou_shoujo",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "リコ",
              "text": "光源を切る。ショウ、円の外へ一歩",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "了解。",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ショウが足を上げる。円が追いかけるより先に、レントンが肩を支え、ノリが波形を閉じた。\n光は衣装になる前に薄れた。翼の輪郭だけが、夕方の空へ残って消える。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "変身、未完了。前回より残留は少ないです",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "今日は、胸の日だった。",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "報告はそこまででいい",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "世界はSFの画面へ戻った。二度目だからこそ、止め方にも生活の手際があった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "M2",
          "text": "今度こそ、最後まで見守る",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "mahou_shoujo",
              "op": "delta",
              "value": 25
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": -5
            },
            {
              "key": "protagonist_score",
              "path": "maho_sho",
              "op": "delta",
              "value": 25
            },
            {
              "key": "character_status",
              "path": "maho_sho.available",
              "op": "set",
              "value": true
            }
          ],
          "collect": [
            {
              "category": "henshin_sabun",
              "id": "maho_sho_second_watch"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "全員、手を出さない。記録だけ回して",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "前回より主役補正の立ち上がりが速いです",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "速さを理由に止めない。最後まで",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "光がショウの輪郭を持ち上げる。\nピンクの衣装が肩から胸元へ編まれ、白い翼が背中で開く。杖の先端にハート形の光が収束する。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "前回は、世界が無理に場所を空けていた。\n二度目は違った。ショウ自身が、空いた場所へ一歩進んだ。",
              "type": "narration"
            },
            {
              "speaker": "魔法ショウ女",
              "text": "きらめく大胸筋。はばたく僧帽筋。",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ノリは解析を止めた。レントンはショウの足元だけを見ている。リコは、画面を切らない。",
              "type": "narration"
            },
            {
              "speaker": "魔法ショウ女",
              "text": "生活の余白に、今日も一番の追い込みを。",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "翼が大きく開く。\n夕方の風が一度だけ逆向きに流れ、司令室の無機質なフレームへ細い金色の縁が走った。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "決めポーズは前回と同じではない。\n片手に杖。もう片方の手には、ショウが現場まで持ってきた作業用手袋。魔法の完成形へ、平日の仕事が一つだけ残っていた。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "変身完了。二度目の記録、保存します",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "分類は",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "魔法ショウ女。差分あり",
              "type": "dialogue"
            },
            {
              "speaker": "魔法ショウ女",
              "text": "終わった？",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "終わった。手袋、忘れないで",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "主役の光の中で、ショウは作業用手袋を拾った。\n隠しスチル「二度目の光」が、変身差分へ登録される。\n初回の見守りがDay 1の記録に残っている場合、その観測記録も「一度目の光」として同時に整理される。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "M3",
          "text": "二度の変身間隔を解析する",
          "effects": [
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "mahou_shoujo",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "ノリ",
              "text": "初回ログと重ねます。口上開始まで三・二秒短縮。翼の生成は一・八秒短縮",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "二回目なので演出資産の読み込みが効いてますね。画面右の光量バー、きれいに伸びてるでしょう",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "敵側が鑑賞会に入らないで",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "性能測定です",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "変身は数値へ分解された。理解は進んだ。そのぶん、世界には解説欄が増えた。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "解析完了。ただし、三回目はさらに速くなる可能性があります",
              "type": "dialogue"
            }
          ]
        },
        {
          "id": "M4",
          "text": "ショウ自身の呼吸で、変身の速度を決めさせる",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "kinniku_battle",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "mahou_shoujo",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 15
            }
          ],
          "collect": [],
          "result": [
            {
              "speaker": "レントン",
              "text": "ショウ、光に合わせなくていい。いつもの呼吸で",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "四つ吸う。六つ吐く。",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "変身の光が、ショウの呼吸へ速度を合わせ始めた。\nフリルは急がない。翼も、背中が伸びる時だけ開く。魔法少女の文法に、筋肉の回復時間が入り込む。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "演出波が身体側へ同期しました。主導権はショウにあります",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "それなら続行。自分の速度で終わらせて",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "二度目の変身は、世界に持っていかれずに終わった。生活で覚えた呼吸が、物語の速度を決めた。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C4_RENTON_WALK": {
      "id": "EV_C4_RENTON_WALK",
      "title": "歩行再開の日",
      "chapter": 4,
      "day": 10,
      "phase": "life_interrupt",
      "cast": [
        "renton",
        "rico"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "水曜日、午後四時十二分。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "RAMLの観測モニタが、二週間でいちばん整った警告音を鳴らした。同じ時刻、レントンの前では、長く止まっていた一歩が動こうとしていた。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "レントン。現場の人体動作が、現実の関節可動域から外れ始めた。身体を読める人が必要",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "こっちも、いま立つところです",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "あなたが？",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "担当の人がです。今日、最初の一歩なんです",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "通信窓の向こうで、リコは一秒だけ黙った。保留音の代わりに、歩行器の小さな金属音が入る。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "現場到着の最短は十八分。歩行見守りを切れば十一分です",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "七分で人の一歩を割り切る計算、やめません？",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "同意します。だから最短だけ読みました。決めるのはそちらです",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "R1",
          "text": "最初の一歩を最後まで見守る",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 25
            },
            {
              "key": "genre_pollution",
              "path": "renai_novel",
              "op": "delta",
              "value": 20
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "renton",
              "op": "delta",
              "value": 5
            },
            {
              "key": "character_status",
              "path": "renton.ailments.chikoku_gauge",
              "op": "delta",
              "value": 20
            }
          ],
          "collect": [
            {
              "category": "seikatsu_trouble",
              "id": "day10_honmu_yuusen"
            },
            {
              "category": "ninmu_log",
              "id": "day10_renton_walk"
            }
          ],
          "result": [
            {
              "speaker": "レントン",
              "text": "リコ。足裏が着く瞬間だけ見ます。終わったら、こっちで見えた動きを全部送る",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "了解。世界のほうを七分待たせる",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "レントンは通信端末を伏せた。急かさない声で数を取り、重心が前へ移るのを待った。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "一歩は小さかった。けれど、床へ力が返る順番は、RAMLが追っていた異常な身体動作と同じだった。",
              "type": "narration"
            },
            {
              "speaker": "レントン",
              "text": "送ります。世界の歩き方、たぶんここが引っかかってます",
              "type": "dialogue"
            }
          ]
        },
        {
          "id": "R2",
          "text": "通話で身体観察だけを先に渡す",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "renai_novel",
              "op": "delta",
              "value": 10
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "renton",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day10_renton_walk"
            }
          ],
          "result": [
            {
              "speaker": "レントン",
              "text": "映像を止めて。右肩じゃなく、左の骨盤を見てください。そこから全体がずれてます",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "補正点を確認。現場班へ共有します",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "レントンは本業の声量を崩さないまま、二つの身体を同時に読んだ。片方は目の前に、もう片方は画面の向こうにある。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "R3",
          "text": "予定どおり終えてから現場へ向かう",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 15
            },
            {
              "key": "life_load",
              "path": "renton",
              "op": "delta",
              "value": -5
            },
            {
              "key": "character_status",
              "path": "renton.ailments.chikoku_gauge",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day10_renton_walk"
            }
          ],
          "result": [
            {
              "speaker": "レントン",
              "text": "遅れます。でも、雑に早くはしません",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "いつもどおりね。遅れる理由まで含めて予定に入れる",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "RAMLの到着予定欄に、赤い遅刻表示ではなく「本業終了後」と書き直された。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "R4",
          "text": "歩行リズムを解析モデルとして共有する",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 10
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "renton",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day10_renton_walk"
            }
          ],
          "result": [
            {
              "speaker": "レントン",
              "text": "人は、正しい角度だけで歩いてるわけじゃない。怖さが抜けるタイミングも含めて見てください",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "数値化できない部分を、解析条件に入れます",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "それ、矛盾してません？",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "今日は矛盾も観測対象です",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "午後四時二十九分。現実の歩幅は、ほんの少しだけ正常へ戻った。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "レントンは遅れている。けれど、その遅れがなければ見えなかった補正点が、RAMLのモニタに残った。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C4_RICO_EMPTY_COMMAND": {
      "id": "EV_C4_RICO_EMPTY_COMMAND",
      "title": "司令室が空になる日",
      "chapter": 4,
      "day": 11,
      "phase": "field_event",
      "cast": [
        "rico",
        "nori"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "木曜日、午後五時三十一分。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "現場と司令室をつなぐ中継点が、物語の都合だけを拒むように沈黙した。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "遠隔指示が通りません。現場で接続順を組み直せるのは——",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "私",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "お迎えまで二十九分です",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "知ってる。だから、二十九分で戻る段取りを作る",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "リコが司令席を立つ。二週間、必ず誰かを送り出してきた椅子が、初めて空になる。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "司令室を空ける。監視の優先順位は上から三つ。四つ目以降は通知だけ残して",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "現場へ出たあとも司令するつもりですね",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "現場に行ったら司令官じゃなくなる、なんて規則はないでしょ",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "C1",
          "text": "リコ自身が現場へ行く",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 25
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 20
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": 15
            },
            {
              "key": "character_status",
              "path": "rico.ailments.hoikuen_call",
              "op": "set",
              "value": true
            },
            {
              "key": "day_system",
              "path": "dispatched",
              "op": "append",
              "value": "rico"
            }
          ],
          "collect": [
            {
              "category": "seikatsu_trouble",
              "id": "day11_ohanashi_mae_29min"
            },
            {
              "category": "ninmu_log",
              "id": "day11_rico_field"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "ノリ、監視席。レントン、現場の動線。ショウ、押していい物と駄目な物を確認。私が接続を戻す",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "確認前に押さない",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "それを今、宣言して",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "リコは移動しながら、迎えの連絡、現場の入退場、監視の優先度を一枚の予定表へ重ねた。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "司令室は空だった。それでも司令は、リコの歩く速度で動き続けた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "C2",
          "text": "移動中の端末から全員へ分担する",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day11_rico_field"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "私が全部持たない。ノリは監視、レントンは現場、ショウは待機。ケイスケの通知は既読だけ付けて",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "扱いが雑じゃない？",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "雑じゃない。優先順位が低い",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "空席の画面が五分割され、司令が人へ分かれていく。リコは歩きながら、誰にも同じ仕事を二度させなかった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "C3",
          "text": "ノリへ司令を委任し、生活予定を守る",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 15
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": -10
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day11_rico_field"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "ノリ、任せる。私は迎えに行く。判断に迷ったら、今日中に終わらせない選択を優先して",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "了解。明日へ残せるものは残します",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "リコは司令室と反対の出口へ向かった。危機を放置したのではない。担当を決めて、生活へ戻った。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "C4",
          "text": "必要な監視だけ自動化し、短時間だけ現場へ出る",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 10
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day11_rico_field"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "二十九分のうち、移動九分、接続五分、戻り九分。残り六分を予備にする",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "その自動化、僕の補助UIを使えば四分余るよ",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "余った四分で説明を短くして",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "自動監視が必要な三項目だけを追い、残りは静かに記録へ回した。全部を見ない判断が、空席を機能させた。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "午後五時五十八分。中継点が復帰する。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "司令席の画面に、リコの帰投予定と生活予定が同じ太さの線で表示された。どちらも、消されなかった。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C4_SHO_RELEASE": {
      "id": "EV_C4_SHO_RELEASE",
      "title": "温存の解放",
      "chapter": 4,
      "day": 12,
      "phase": "field_event",
      "cast": [
        "sho",
        "alpaca"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "金曜日、午後六時四十七分。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "二週間ぶんの物語が、一本の細い出口へ同時に集まった。SFの警告、恋愛ノベルの間、知略ものの注釈、魔法少女の光。どれも先へ行こうとして、全部が詰まった。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "構造上の渋滞です。どれか一つを消すと、別の一つが主役になります",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "消さない方法",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "通る幅を広げる、とか",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "広げる",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "待って。まだ主語しか聞いてない",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "ショウが一歩、前へ出る。牧場で温存されていた場合、その呼吸は驚くほど静かだった。",
          "type": "narration"
        },
        {
          "speaker": "ショウ",
          "text": "詰まっているなら、通す",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "M1",
          "text": "圧を止めず、そのまま通す",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 25
            },
            {
              "key": "genre_pollution",
              "path": "kinniku_battle",
              "op": "delta",
              "value": 25
            },
            {
              "key": "life_load",
              "path": "sho",
              "op": "delta",
              "value": 15
            },
            {
              "key": "character_status",
              "path": "sho.ailments.at_alpaca_farm",
              "op": "set",
              "value": false
            }
          ],
          "collect": [
            {
              "category": "bousou_form_zukan",
              "id": "day12_kinniku_release"
            },
            {
              "category": "ninmu_log",
              "id": "day12_sho_release"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "ショウ、幅だけ。全部持っていかないで",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "幅だけ",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ショウが両手を開く。筋肉バトルの色が世界を塗るのではなく、重なった物語の間へ、無理やり全員分の余白を作った。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "モニタの注釈が一斉に横へずれる。魔法の光も、SFの警告も、恋愛ノベルの沈黙も、押し出されながら残った。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "理屈は通っていません",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "でも、通路は通りました",
              "type": "dialogue"
            }
          ]
        },
        {
          "id": "M2",
          "text": "牧場の呼吸で圧を整える",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "kinniku_battle",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "sho",
              "op": "delta",
              "value": -10
            },
            {
              "key": "character_status",
              "path": "sho.ailments.at_alpaca_farm",
              "op": "set",
              "value": false
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day12_sho_release"
            }
          ],
          "result": [
            {
              "speaker": "ショウ",
              "text": "牧場では、近づきすぎるとアルパカが離れる",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "今、その知識が必要になるとは思わなかった",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ショウは一歩引き、詰まりが自分からほどける距離を作った。圧を使わないことまで、圧の使い方だった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "M3",
          "text": "レントンの観察で力の向きを決める",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "renai_novel",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "kinniku_battle",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "sho",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day12_sho_release"
            }
          ],
          "result": [
            {
              "speaker": "レントン",
              "text": "右じゃない。左へ半歩。押すなら、世界が踏ん張れる方向へ",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "左へ半歩",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "力は大きいまま、向きだけが整った。ショウの一歩が、世界の重心を戻した。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "M4",
          "text": "魔法の光へ圧を逃がす",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "maho_sho",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "mahou_shoujo",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "kinniku_battle",
              "op": "delta",
              "value": 10
            },
            {
              "key": "character_status",
              "path": "maho_sho.available",
              "op": "set",
              "value": true
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day12_sho_release"
            }
          ],
          "result": [
            {
              "speaker": "ショウ",
              "text": "光っているところへ流す",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "その判断に説明は？",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "目立つから",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "筋肉の圧がピンクの光へ流れ込み、変身待機中の輪郭が一瞬だけ大きくなる。説明はなかったが、次の入口は開いた。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "物語の渋滞が解ける。金曜の夜は、ようやく全員を一列に通した。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "ショウは何も誇らず、明日の牧場の天気だけを確認した。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C4_KEISUKE_COMPLETE": {
      "id": "EV_C4_KEISUKE_COMPLETE",
      "title": "「完成」の通知",
      "chapter": 4,
      "day": 12,
      "phase": "field_event",
      "cast": [
        "rico",
        "keisuke"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "金曜日、午後十一時五十八分。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "GADGETから「完成」という件名の通知が届いた。添付はなく、代わりに更新履歴が四十七項目あった。",
          "type": "narration"
        },
        {
          "speaker": "ケイスケ",
          "text": "最終ビルド。二週間ぶんのジャンル偏差を、一画面に自動整列する",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "世界征服は？",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "整列できたら考える",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "目的と実装の順序が逆です",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "実装が目的になっただけだよ",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "午前零時を越え、土曜になる。解析度が60以上なら、RAMLの画面右端が何の確認もなくケイスケ式のカード表示へ並び替わる。",
          "type": "narration"
        },
        {
          "speaker": "ケイスケ",
          "text": "ほら。君たちが二週間選び続けた値、こっちのほうが読みやすい",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "K1",
          "text": "最終ビルドを完成まで観測する",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 25
            },
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 25
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "keisuke",
              "op": "delta",
              "value": 10
            },
            {
              "key": "character_status",
              "path": "keisuke.ailments.gadget_charging",
              "op": "set",
              "value": false
            }
          ],
          "collect": [
            {
              "category": "seisei_jiko_log",
              "id": "gadget_final_ui"
            },
            {
              "category": "ninmu_log",
              "id": "day12_keisuke_complete"
            }
          ],
          "result": [
            {
              "speaker": "ノリ",
              "text": "観測を継続。どこまでRAML側へ入るか見ます",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "止めないの？",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "完成したものを見てから、使うか決める",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "進捗表示が100%へ届く。世界改変の装置より先に、世界改変を説明する画面が完成した。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "ケイスケは満足そうに一度うなずき、すぐ次の改善点を三つ見つけた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "K2",
          "text": "必要な仕様だけ聞き、接続を切る",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 15
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "keisuke",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day12_keisuke_complete"
            }
          ],
          "result": [
            {
              "speaker": "ノリ",
              "text": "入力、出力、停止方法。この三つだけ答えてください",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "思想は？",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "今日は要らない",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "三行の仕様だけがRAMLへ残り、四十八項目目になりかけた説明は通信ごと切れた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "K3",
          "text": "本人に最後まで説明させて時間を使わせる",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 5
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "keisuke",
              "op": "delta",
              "value": 15
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day12_keisuke_complete"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "全部説明して。省略なし",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "いいの？",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "説明中は新しい実装が止まります",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ケイスケは嬉々として話し始めた。RAMLは聞き流しながら、世界が説明の長さに追いつく時間を稼いだ。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "K4",
          "text": "充電して寝るよう通知する",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "keisuke",
              "op": "delta",
              "value": -15
            },
            {
              "key": "character_status",
              "path": "keisuke.ailments.gadget_charging",
              "op": "set",
              "value": true
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day12_keisuke_complete"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "完成。保存。充電。寝る。順番に押して",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "最後だけ機能じゃなくない？",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "いちばん必要な運用",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "画面が省電力表示へ落ちる。世界征服の最終ビルドは、充電台の上で土曜の朝を待つことになった。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "午前零時七分。RAML側には、完成したUIか、三行の仕様か、長い説明か、充電中の表示が残った。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "どの形でも、ケイスケの「完成」は世界へ一度触れた。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C4_NORI_FINAL_JUDGE": {
      "id": "EV_C4_NORI_FINAL_JUDGE",
      "title": "二つの最終判定",
      "chapter": 4,
      "day": 13,
      "phase": "life_interrupt",
      "cast": [
        "nori",
        "rico"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "土曜日、午後三時二十六分。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "ノリの前では試合の最終盤が動き、耳元ではRAMLの最終解析が99%で止まっていた。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "ノリ。現実側が、どのルールを採用するか待ってる",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "こちらも、次の笛で試合が決まります",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "切れる？",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "どちらも、いま切ると判断が遅れます",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "ボールが白線ぎりぎりを走る。RAMLのモニタでも、二つのジャンル値が境界ぎりぎりに並ぶ。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "同じですね。入ったか、出たか。感情より先に、位置を見る",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "N1",
          "text": "試合もRAMLも、同じ瞬間にジャッジする",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 25
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 25
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": 15
            },
            {
              "key": "character_status",
              "path": "nori.ailments.shinpan_yake",
              "op": "delta",
              "value": 1
            }
          ],
          "collect": [
            {
              "category": "seikatsu_trouble",
              "id": "day13_double_judge"
            },
            {
              "category": "ninmu_log",
              "id": "day13_nori_final_judge"
            }
          ],
          "result": [
            {
              "speaker": "地の文",
              "text": "ノリが笛を吹く。同時に、通信へ短く告げた。",
              "type": "narration"
            },
            {
              "speaker": "ノリ",
              "text": "ボールは外。物語は内側です。境界線を現実側へ五度戻してください",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "両方、見えてたの？",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "片方しか見ていない時間はありませんでした",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ピッチの進行と世界の進行が、同じ笛で再開する。ノリはすぐ次の位置へ走った。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "N2",
          "text": "試合を先に終え、最終解析を保留する",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": 5
            },
            {
              "key": "character_status",
              "path": "nori.ailments.shinpan_yake",
              "op": "delta",
              "value": 1
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day13_nori_final_judge"
            }
          ],
          "result": [
            {
              "speaker": "ノリ",
              "text": "RAML、三分保留。こちらの時間を最後まで進めます",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "三分なら持たせる",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "世界の判定欄に「審判中」と表示された。急かす者はいなかった。三分後、ノリは試合終了の礼を見届けてから通信へ戻った。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "N3",
          "text": "解析結果だけ送り、最終判断をリコへ渡す",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 10
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 10
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day13_nori_final_judge"
            }
          ],
          "result": [
            {
              "speaker": "ノリ",
              "text": "境界位置と予測だけ送ります。採用ルールはリコが決めてください",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "受け取った。こっちは私が持つ",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "ノリは判断材料を切り分けた。すべてを自分で決めないことも、参謀の仕事だった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "N4",
          "text": "解析を止め、ピッチの勘をそのまま送る",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 5
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": -5
            },
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": -5
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day13_nori_final_judge"
            }
          ],
          "result": [
            {
              "speaker": "ノリ",
              "text": "解析を止めます。二週間見た感覚では、現実側へ戻すべきです",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "参謀が勘？",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "十分に見た後の勘は、短い解析です",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "数字の列が閉じる。残ったのは白線と、そこを越えたかどうかを見る目だった。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "午後三時三十四分。試合は終わり、最終解析は再開した。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "ノリの腕には、二週間前より濃い日差しの跡が残っていた。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C4_HENSHIN_COMPLETE": {
      "id": "EV_C4_HENSHIN_COMPLETE",
      "title": "3回目を最後まで",
      "chapter": 4,
      "day": 13,
      "phase": "field_event",
      "cast": [
        "rico",
        "magical_shojo"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "土曜の夜から日曜へ変わる直前、ジャンル境界に三度目の音楽が流れた。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "一度目は異常だった。二度目は観測だった。三度目になると、全員が曲の長さを知っている。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "変身、入ります。所要時間は前回と同じ",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "日付変更まで二分四十秒",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "急かすと長くなるやつですよね",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "スキップボタンは付けられるけど",
          "type": "dialogue"
        },
        {
          "speaker": "全員",
          "text": "付けない",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "ショウの輪郭が光へ包まれ、魔法ショウ女が杖を掲げる。変身は、最後まで見られる前提で始まった。",
          "type": "narration"
        }
      ],
      "choices": [
        {
          "id": "H1",
          "text": "3回目も最後まで見守る",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "maho_sho",
              "op": "delta",
              "value": 25
            },
            {
              "key": "genre_pollution",
              "path": "mahou_shoujo",
              "op": "delta",
              "value": 25
            },
            {
              "key": "life_load",
              "path": "sho",
              "op": "delta",
              "value": 10
            },
            {
              "key": "character_status",
              "path": "maho_sho.available",
              "op": "set",
              "value": true
            }
          ],
          "collect": [
            {
              "category": "henshin_sabun",
              "id": "maho_sho_third_watch"
            },
            {
              "category": "ninmu_log",
              "id": "day14_henshin_complete"
            }
          ],
          "result": [
            {
              "speaker": "地の文",
              "text": "誰も遮らない。説明もしない。光が肩から腕へ、杖から翼へ移り、最後の決めポーズまで流れる。",
              "type": "narration"
            },
            {
              "speaker": "魔法ショウ女",
              "text": "三度目の夜も、愛と余白で現実を照らす！　魔法ショウ女、変身完了！",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "日付は変わっていた。全員、二秒遅れて拍手した。",
              "type": "narration"
            },
            {
              "speaker": "ショウ",
              "text": "待たせた",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "予定内",
              "type": "dialogue"
            }
          ]
        },
        {
          "id": "H2",
          "text": "日曜用の短い口上を頼む",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "maho_sho",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "mahou_shoujo",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "sho",
              "op": "delta",
              "value": -5
            },
            {
              "key": "character_status",
              "path": "maho_sho.available",
              "op": "set",
              "value": true
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day14_henshin_complete"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "明日の生活に響かない長さでお願いします",
              "type": "dialogue"
            },
            {
              "speaker": "魔法ショウ女",
              "text": "愛と余白で——変身完了！",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "十二秒。過去最短です",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "短くなっても、決めポーズだけは省略されなかった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "H3",
          "text": "変身構造をノリに解析させる",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "maho_sho",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "chiryaku",
              "op": "delta",
              "value": 10
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day14_henshin_complete"
            }
          ],
          "result": [
            {
              "speaker": "ノリ",
              "text": "翼の展開より先に、主役補正が空間を確保しています",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "つまり演出が物理より先",
              "type": "dialogue"
            },
            {
              "speaker": "魔法ショウ女",
              "text": "解説は変身の後にして！",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "解析窓が光へ押し戻される。構造は読めたが、見せ場の順番までは変えられなかった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "H4",
          "text": "ショウの呼吸で光量を整える",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 15
            },
            {
              "key": "protagonist_score",
              "path": "maho_sho",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "kinniku_battle",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "mahou_shoujo",
              "op": "delta",
              "value": 10
            },
            {
              "key": "life_load",
              "path": "sho",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day14_henshin_complete"
            }
          ],
          "result": [
            {
              "speaker": "レントン",
              "text": "ショウ、肩の力を少し抜いて。光が上がりすぎてます",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "抜く",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "筋肉の呼吸に合わせて光柱が細くなる。魔法と身体が、ようやく同じ人物の中で折り合った。",
              "type": "narration"
            },
            {
              "speaker": "魔法ショウ女",
              "text": "調光まで生活スキルでやるの？",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "日曜日、午前零時三分。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "変身の光が消えると、司令室の予定表が自動で「最終日」に切り替わった。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C4_SUNDAY_DAYLIGHT": {
      "id": "EV_C4_SUNDAY_DAYLIGHT",
      "title": "世界より先に、日曜日",
      "chapter": 4,
      "day": 14,
      "phase": "life_interrupt",
      "cast": [
        "rico",
        "nori"
      ],
      "onEnterEffects": [],
      "onEnterCollect": [],
      "intro": [
        {
          "speaker": "地の文",
          "text": "日曜日、午前十一時十六分。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "世界の最終判定まで、あと九時間四十四分。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "リコの画面には買い物と明日の持ち物。ノリの机には洗った笛。レントンは月曜の予定を確認し、ショウは牧場の柵を見ている。ケイスケの端末は充電中だった。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "最終日だけど、昼は普通に進めます",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "世界の結末より買い物？",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "夜に世界が残っても、明日の朝ごはんがないと困る",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "合理的です。最終判定は二十時。生活タスクは、それ以前に締切がある",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "世界のほうが待てるんですね",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "二週間待たせ方を覚えたから",
          "type": "dialogue"
        }
      ],
      "choices": [
        {
          "id": "S1",
          "text": "生活予定を先に全部終える",
          "effects": [
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 25
            },
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": -10
            },
            {
              "key": "life_load",
              "path": "nori",
              "op": "delta",
              "value": -10
            },
            {
              "key": "life_load",
              "path": "renton",
              "op": "delta",
              "value": -10
            },
            {
              "key": "life_load",
              "path": "sho",
              "op": "delta",
              "value": -10
            },
            {
              "key": "life_load",
              "path": "keisuke",
              "op": "delta",
              "value": -10
            }
          ],
          "collect": [
            {
              "category": "seikatsu_trouble",
              "id": "day14_life_first"
            },
            {
              "category": "ninmu_log",
              "id": "day14_sunday_choice"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "買い物、洗濯、明日の準備。終わった人から監視へ戻る",
              "type": "dialogue"
            },
            {
              "speaker": "ノリ",
              "text": "世界の最終判定を、生活タスクの後ろへ移動しました",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "警告は鳴っていた。けれど誰も走らない。洗濯機が止まり、充電が終わり、牧場の確認が済むまで、世界は赤い通知のまま待った。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "午後一時四分。全員が戻る。誰の生活も、置き去りになっていなかった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "S2",
          "text": "生活と監視を一人ずつ分担する",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "nori",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "renton",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "sho",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 5
            },
            {
              "key": "protagonist_score",
              "path": "maho_sho",
              "op": "delta",
              "value": 5
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 10
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 10
            }
          ],
          "collect": [
            {
              "category": "hidden_event",
              "id": "day14_equal_shift"
            },
            {
              "category": "ninmu_log",
              "id": "day14_sunday_choice"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "二十分交代。監視する人、生活を進める人、休む人。全部を担当にします",
              "type": "dialogue"
            },
            {
              "speaker": "ショウ",
              "text": "休む人も担当",
              "type": "dialogue"
            },
            {
              "speaker": "レントン",
              "text": "そこ、いちばん忘れやすいですからね",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "監視席は空かず、生活も止まらなかった。誰か一人が長く画面の中央にいることもなかった。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "S3",
          "text": "監視を先に整え、夕方で必ず切り上げる",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "rico",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "sf",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 5
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "rico",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day14_sunday_choice"
            }
          ],
          "result": [
            {
              "speaker": "リコ",
              "text": "先に監視条件を固定する。十七時で切る。延長なし",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "最終日でも？",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "最終日だから。終わる時刻を決めないと、最後は来ない",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "夕方の終了線がモニタへ引かれた。危機ではなく、生活の時刻が世界へ締切を与えた。",
              "type": "narration"
            }
          ]
        },
        {
          "id": "S4",
          "text": "ケイスケの自動監視へ預けて生活へ戻る",
          "effects": [
            {
              "key": "protagonist_score",
              "path": "keisuke",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "meta_kaisetsu",
              "op": "delta",
              "value": 15
            },
            {
              "key": "genre_pollution",
              "path": "nichijou",
              "op": "delta",
              "value": 15
            },
            {
              "key": "analysis_level",
              "path": "value",
              "op": "delta",
              "value": 5
            },
            {
              "key": "life_load",
              "path": "keisuke",
              "op": "delta",
              "value": 5
            }
          ],
          "collect": [
            {
              "category": "ninmu_log",
              "id": "day14_sunday_choice"
            }
          ],
          "result": [
            {
              "speaker": "ケイスケ",
              "text": "僕のUIに預けるの？　最終日に？",
              "type": "dialogue"
            },
            {
              "speaker": "リコ",
              "text": "通知は三段階。赤だけ連絡。勝手に項目を増やさない",
              "type": "dialogue"
            },
            {
              "speaker": "ケイスケ",
              "text": "一個も？",
              "type": "dialogue"
            },
            {
              "speaker": "全員",
              "text": "一個も",
              "type": "dialogue"
            },
            {
              "speaker": "地の文",
              "text": "自動監視が静かに動く。全員が画面を閉じ、それぞれの日曜日へ戻った。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "午後七時五十三分。",
              "type": "narration"
            },
            {
              "speaker": "地の文",
              "text": "生活の音が一つずつ止まり、RAMLの通信表示が一つずつ点く。最終判定まで、あと七分。",
              "type": "narration"
            }
          ]
        }
      ]
    },
    "EV_C4_FINAL_JUDGMENT": {
      "id": "EV_C4_FINAL_JUDGMENT",
      "title": "日曜の夜、集計",
      "chapter": 4,
      "day": 14,
      "phase": "day_log",
      "cast": [
        "rico",
        "nori"
      ],
      "illustration": {
        "src": "assets/illustrations/day14_after_hours_group.png",
        "alt": "日曜の夜、集計"
      },
      "onEnterEffects": [],
      "onEnterCollect": [
        {
          "category": "ninmu_log",
          "id": "day14_final_judgment"
        }
      ],
      "intro": [
        {
          "speaker": "地の文",
          "text": "日曜日、午後八時。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "RAML司令室の照明が、夜間モードへ落ちる。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "最終判定を始めます。新しい選択はなし。二週間ぶんを、そのまま読む",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "主役度を集計。ジャンル汚染、上位二系統を比較",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "最後に誰かを選ぶんじゃないんですね",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "もう選び終わっています。毎日の遅刻、委任、見守り、生活優先。全部が入力です",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "集計する",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "表示は僕のUIのほうが見やすいけど",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "今日は黙って結果を待って",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "六つの主役度と、八つのジャンル値が並ぶ。数字は点滅せず、派手なカウントダウンもない。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "午後八時一分。世界は、二週間でいちばん積み上がった物語を選ぶ。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "horror が支配ジャンルでも専用ENDは作らない。日常判定に該当しなければ、主役度1位のキャラENDへ進む。QAでは第3章の単発スパイクが最終時点で他ジャンルを不当に固定しないことを確認する。GENRE_PRIORITY の同点固定順（horror が nichijou より先）は現状維持で確定（2026-07-20 カントク裁定10・QA-B-13 明文化）。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "**score_gap 閾値の緩和（2026-07-20 つる裁定・series_plan.md 第10-6節）**: 真ENDの拮抗閾値は **≤5 → ≤7 へ変更**（genre_gap ≤10・critical 条件・評価順「真→日常→キャラ」は不変。日次 day_log の拮抗判定は5のまま）。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "**critical_ids の性質（2026-07-20 カントク裁定・QA-A-06 明文化）**: critical_ids 6件はイベント1〜6の固定通過collectのため**全周回で自動成立する**。したがって真ENDの実条件は score_gap ≤ 7 と genre_gap ≤ 10 の二重拮抗判定であり、条件3は仕様変更に備えた安全条件として現状維持する（決定的選択の固有collectへの差し替え案は次期検討）。",
          "type": "narration"
        }
      ],
      "choices": []
    }
  },
  "endings": {
    "rico_end": {
      "id": "rico_end",
      "title": "リコEND「司令官SF任務もの」",
      "lines": [
        {
          "speaker": "SYSTEM",
          "text": "PRIMARY NARRATIVE: リコ / COMMAND SF",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "最終値が確定した瞬間、散らばっていた通信窓が、リコの予定表と同じ順番に並び替わった。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "現場、解析、ケア、筋肉、GADGET、変身。二週間ぶんの混線が、誰に何を渡すかという一枚の段取りへ収まっていく。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "支配ジャンル、SF。主役度一位、リコ",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "各自、終了報告だけ。反省会は明日以降、必要なら",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "世界が終わるかもしれない夜に、反省会を延期する？",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "終わらなかったから延期できるの",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "リコが最後の警告を閉じる。世界は正常域へ戻ったが、予定表の下には未完了が三つ残った。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "明日の持ち物確認。朝食の準備。本業の連絡。",
          "type": "narration"
        },
        {
          "speaker": "レントン",
          "text": "手伝えること、あります？",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "今日は全員、接続を切って寝る。それが手伝い",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "午後八時十二分。司令官は世界を救い、生活の残りへ戻った。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "世界は、誰かの本業と、誰かの副業で回っている。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "collection_log.end_kaishu.collected += rico_end",
          "type": "narration"
        }
      ]
    },
    "nori_end": {
      "id": "nori_end",
      "title": "ノリEND「全部読んでいた知略もの」",
      "lines": [
        {
          "speaker": "SYSTEM",
          "text": "PRIMARY NARRATIVE: ノリ / FINAL JUDGMENT",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "世界中の境界線が、サッカーコートの白線のように一本ずつ表示された。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "どこまでが現実で、どこからが物語か。曖昧だった二週間が、ノリの判定で静かに区切られる。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "SFは内側。魔法少女は演出区域。筋肉は……線の概念を越えていますが、今回は有効とします",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "有効",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "全部、読めてたの？",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "途中までは。最後は、今日のピッチで決まりました",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "判定完了の緑が灯る。ノリは椅子へ深く座り、腕の日差しの跡を見た。",
          "type": "narration"
        },
        {
          "speaker": "レントン",
          "text": "冷やしたほうがいいですよ",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "解析結果にも同じ提案が出ています",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "そこまで読めるなら、先に日焼け止めも——",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "それは先週の自分へ言ってください",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "世界の判定は間に合った。明日の疲労までは、計算どおりに消えない。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "世界は、誰かの本業と、誰かの副業で回っている。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "collection_log.end_kaishu.collected += nori_end",
          "type": "narration"
        }
      ]
    },
    "renton_end": {
      "id": "renton_end",
      "title": "レントンEND「現場ケアと人間ドラマ」",
      "lines": [
        {
          "speaker": "SYSTEM",
          "text": "PRIMARY NARRATIVE: レントン / ONE STEP FIRST",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "最終判定の画面から、派手な警告が消えた。代わりに、世界の各所で止まっていた動きが、小さく再開する。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "開かなかった扉。進まなかった時計。踏み出せなかった一歩。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "支配ジャンル、恋愛ノベルと日常の境界。主役度一位、レントン",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "恋愛要素、どこにありました？",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "目の前の人を放っておけないところ",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "それは本業です",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "だから強かったんでしょ",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "レントンの端末へ、今日見守った歩行記録が届く。世界の安定通知より先に、彼はその一歩を確認した。",
          "type": "narration"
        },
        {
          "speaker": "レントン",
          "text": "明日も、続きがあります",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "こっちも。でも今日は終わり",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "世界は一度で元に戻らなかった。人が歩き直すように、少しずつ現実の重心を取り戻した。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "世界は、誰かの本業と、誰かの副業で回っている。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "collection_log.end_kaishu.collected += renton_end",
          "type": "narration"
        }
      ]
    },
    "kinniku_end": {
      "id": "kinniku_end",
      "title": "筋肉END「すべてが筋肉に飲まれる」",
      "lines": [
        {
          "speaker": "SYSTEM",
          "text": "PRIMARY NARRATIVE: ショウ / MUSCLE OVERRIDE",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "集計結果が出るより先に、表示枠が横へ広がった。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "狭かったから広げた。ただそれだけの処理で、SFの警告も魔法の光も、全員分が一画面へ収まる。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "支配ジャンル、筋肉バトル。主役度一位、ショウ",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "通った",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "僕のレスポンシブ設計より物理的なんだけど",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "画面を押して直した人、初めて見た",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "世界の詰まりは消えた。代わりに、あらゆる確認画面の最後へ、意味の分からない力こぶのアイコンが付いた。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "遠くの牧場中継に、アルパカが映る。何も驚いていない。",
          "type": "narration"
        },
        {
          "speaker": "レントン",
          "text": "明日、筋肉痛は？",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "明日は軽め",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "すべての理屈を押し流したショウは、月曜のトレーニング予定だけは崩さなかった。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "世界は、誰かの本業と、誰かの副業で回っている。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "collection_log.end_kaishu.collected += kinniku_end",
          "type": "narration"
        }
      ]
    },
    "keisuke_end": {
      "id": "keisuke_end",
      "title": "ケイスケEND「メタ解説とガジェット支配」",
      "lines": [
        {
          "speaker": "SYSTEM",
          "text": "PRIMARY NARRATIVE: ケイスケ / STANDARD UI INSTALLED",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "最終判定の結果が、RAMLの書式ではなく、ケイスケのカードUIで表示された。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "救済完了。支配完了。どちらの欄にも同じ緑のチェックが付いている。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "どっちなの",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "両方。世界は安定したし、僕のUIが標準になった",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "主役度一位、ケイスケ。支配ジャンル、メタ解説",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "元に戻せます？",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "戻すボタンはあるよ。設定の三階層下",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "全員が同時にため息をつく。その音まで、ケイスケのUIは「共同反応」として記録した。",
          "type": "narration"
        },
        {
          "speaker": "ケイスケ",
          "text": "二週間、君が押したものは全部残ってる。この画面を閉じても、選んだ並び順までは消えない",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "勝者みたいに言わないで。明日、戻し方の手順書を出して",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "明日は更新版を——",
          "type": "dialogue"
        },
        {
          "speaker": "全員",
          "text": "手順書",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "世界は救われたのか、使いやすく支配されたのか。答えは月曜の標準画面に持ち越された。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "世界は、誰かの本業と、誰かの副業で回っている。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "collection_log.end_kaishu.collected += keisuke_end",
          "type": "narration"
        }
      ]
    },
    "maho_sho_end": {
      "id": "maho_sho_end",
      "title": "魔法ショウ女END「変身バンクに世界が飲まれる」",
      "lines": [
        {
          "speaker": "SYSTEM",
          "text": "PRIMARY NARRATIVE: 魔法ショウ女 / TRANSFORMATION COMPLETE",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "最終値が確定すると、司令室の床からピンクの光が伸びた。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "二週間で三度、最後まで見守られた変身は、もう異常現象ではなく世界が期待する順番になっていた。",
          "type": "narration"
        },
        {
          "speaker": "魔法ショウ女",
          "text": "愛と余白で、日曜の夜を照らす！　最終——",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "最終でも時間は延ばさないで",
          "type": "dialogue"
        },
        {
          "speaker": "魔法ショウ女",
          "text": "——定時変身、完了！",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "光が全員へ分かれる。リコの肩にリボン、ノリの笛に宝石、レントンの端末に羽、ケイスケのUIにフリルが付いた。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "最後まで抵抗していたケイスケの腕も、決めポーズの角度へ自動補正される。",
          "type": "narration"
        },
        {
          "speaker": "ケイスケ",
          "text": "僕の可動域じゃない！",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "無理しない角度に直します",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "月曜は戻る",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "戻って。全員、明日は普通の服で",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "世界は完全な決めポーズで安定した。光が消えたあとも、全員の足元に少しだけラメが残った。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "世界は、誰かの本業と、誰かの副業で回っている。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "collection_log.end_kaishu.collected += maho_sho_end",
          "type": "narration"
        }
      ]
    },
    "nichijou_end": {
      "id": "nichijou_end",
      "title": "日常END「世界より生活が勝つ」",
      "lines": [
        {
          "speaker": "SYSTEM",
          "text": "PRIMARY NARRATIVE: DAILY LIFE / CLOSED FOR SUNDAY",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "最終判定の時刻になっても、世界は派手に光らなかった。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "買い物は済み、洗濯物は乾き、笛は片づき、端末は充電されている。監視画面の警告は、その合間に一つずつ消えていた。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "支配ジャンル、日常",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "世界の危機が、家事の進行に負けた？",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "順番を守っただけ",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "誰も無理してないですね",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "日曜",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "午後八時三分。世界は元の法則へ戻る。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "誰かが大きな見せ場を取ったわけではない。全員が生活を落とさず、空いた手で一つずつ戻した結果だった。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "じゃあ終わり。明日のために寝ます",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "世界の危機は、生活に負けた。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "それは二週間で、いちばん静かな勝ち方だった。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "世界は、誰かの本業と、誰かの副業で回っている。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "collection_log.end_kaishu.collected += nichijou_end",
          "type": "narration"
        }
      ]
    },
    "shin_end": {
      "id": "shin_end",
      "title": "真END「全員の生活と副業で世界が回る」",
      "lines": [
        {
          "speaker": "SYSTEM",
          "text": "PRIMARY NARRATIVE: NO SINGLE OWNER",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "主役度一位と二位の差は七以内。ジャンル汚染一位と二位の差は十以内。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "どの名前も、単独で中央へ出なかった。",
          "type": "narration"
        },
        {
          "speaker": "ノリ",
          "text": "判定不能ではありません。単独支配なし、が判定です",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "二週間の決定的イベント、確認",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "レントンの一歩。リコの現場。ショウの解放。ケイスケの完成。ノリの笛。魔法ショウ女の変身。全件あります",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "誰か一人の話にならなかったんですね",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "中央が空いてるUI、落ち着かないな",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "空いていていい",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "中央の空白へ、六人の通信窓が同じ大きさで並ぶ。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "リコは明日の予定を確認している。ノリは笛を片づける。レントンは本業の連絡を見る。ショウは牧場の天気を確かめる。ケイスケは新しい更新を思いつき、全員に止められる。魔法ショウ女の光は、画面の端で小さく消える。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "世界、正常域",
          "type": "dialogue"
        },
        {
          "speaker": "ノリ",
          "text": "最終ログ、保存",
          "type": "dialogue"
        },
        {
          "speaker": "レントン",
          "text": "明日、月曜ですね",
          "type": "dialogue"
        },
        {
          "speaker": "ショウ",
          "text": "本業がある",
          "type": "dialogue"
        },
        {
          "speaker": "ケイスケ",
          "text": "副業もある",
          "type": "dialogue"
        },
        {
          "speaker": "リコ",
          "text": "副業は余力で",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "午後八時五分。誰の物語にも決めきれなかった世界が、いちばん現実に近い形で回り始める。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "世界は、誰かの本業と、誰かの副業で回っている。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "だから今日も——世界征服は、定時後に始まる。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "collection_log.end_kaishu.collected += shin_end",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "月曜日、午前七時二十四分。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "世界がどのジャンルで終わった朝でも、月曜は同じ時刻に明るくなる。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "歯みがきした？　上履きは？　……はい、出発",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "保育園バッグと仕事鞄が、同じ肩にかかる。長女はもう玄関の外にいる。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "ノリは日焼けの残る腕で吊り革をつかみ、今日の予定を確認する。会議二件。解析の予定は、ない。",
          "type": "narration"
        },
        {
          "speaker": "レントン",
          "text": "おはようございます。今日も、続きの一歩からやりましょう",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "レントンの朝は定刻に始まった。遅刻ゲージは、まだ誰にも表示されていない。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "ショウは出勤前にアルパカの写真を一枚だけ見て、玄関の扉を静かに閉めた。週末は牧場に行く。",
          "type": "narration"
        },
        {
          "speaker": "ケイスケ",
          "text": "充電100%。……続きは、今夜",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "GADGETの最終ビルドは、鞄の中で省電力のまま眠っている。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "RAMLの通知は、鳴っていない。世界の危機は、今のところ誰の定時後の予定にも入っていない。",
          "type": "narration"
        },
        {
          "speaker": "リコ",
          "text": "行ってきます",
          "type": "dialogue"
        },
        {
          "speaker": "地の文",
          "text": "誰の物語でもない朝が、いちばん普通の速度で動き出す。",
          "type": "narration"
        },
        {
          "speaker": "地の文",
          "text": "世界は今日も、誰かの本業で回っている。副業の出番は、あるとしても——定時後だ。",
          "type": "narration"
        },
        {
          "speaker": "画面見出し",
          "text": "RAML 勤怠記録 — 全件閲覧済",
          "type": "dialogue"
        },
        {
          "speaker": "本文",
          "text": "生成事故ログ、4件。暴走フォーム、1件。変身、3回——すべて最後まで見守られた。",
          "type": "dialogue"
        },
        {
          "speaker": "本文",
          "text": "任務ログ、18日ぶん。生活トラブル、14件。隠しイベント、4件。",
          "type": "dialogue"
        },
        {
          "speaker": "本文",
          "text": "そして、世界の終わり方が8通り。",
          "type": "dialogue"
        },
        {
          "speaker": "本文",
          "text": "すべての記録の欄外に、同じ但し書きがある。",
          "type": "dialogue"
        },
        {
          "speaker": "本文",
          "text": "本業に支障のない範囲で対応した",
          "type": "dialogue"
        },
        {
          "speaker": "最終行",
          "text": "閲覧ありがとうございました。RAMLは明日も、定時後に営業します。",
          "type": "dialogue"
        }
      ]
    }
  },
  "epilogue": [
    {
      "speaker": "地の文",
      "text": "月曜日、午前七時二十四分。",
      "type": "narration"
    },
    {
      "speaker": "地の文",
      "text": "世界がどのジャンルで終わった朝でも、月曜は同じ時刻に明るくなる。",
      "type": "narration"
    },
    {
      "speaker": "リコ",
      "text": "歯みがきした？　上履きは？　……はい、出発",
      "type": "dialogue"
    },
    {
      "speaker": "地の文",
      "text": "保育園バッグと仕事鞄が、同じ肩にかかる。長女はもう玄関の外にいる。",
      "type": "narration"
    },
    {
      "speaker": "地の文",
      "text": "ノリは日焼けの残る腕で吊り革をつかみ、今日の予定を確認する。会議二件。解析の予定は、ない。",
      "type": "narration"
    },
    {
      "speaker": "レントン",
      "text": "おはようございます。今日も、続きの一歩からやりましょう",
      "type": "dialogue"
    },
    {
      "speaker": "地の文",
      "text": "レントンの朝は定刻に始まった。遅刻ゲージは、まだ誰にも表示されていない。",
      "type": "narration"
    },
    {
      "speaker": "地の文",
      "text": "ショウは出勤前にアルパカの写真を一枚だけ見て、玄関の扉を静かに閉めた。週末は牧場に行く。",
      "type": "narration"
    },
    {
      "speaker": "ケイスケ",
      "text": "充電100%。……続きは、今夜",
      "type": "dialogue"
    },
    {
      "speaker": "地の文",
      "text": "GADGETの最終ビルドは、鞄の中で省電力のまま眠っている。",
      "type": "narration"
    },
    {
      "speaker": "地の文",
      "text": "RAMLの通知は、鳴っていない。世界の危機は、今のところ誰の定時後の予定にも入っていない。",
      "type": "narration"
    },
    {
      "speaker": "リコ",
      "text": "行ってきます",
      "type": "dialogue"
    },
    {
      "speaker": "地の文",
      "text": "誰の物語でもない朝が、いちばん普通の速度で動き出す。",
      "type": "narration"
    },
    {
      "speaker": "地の文",
      "text": "世界は今日も、誰かの本業で回っている。副業の出番は、あるとしても——定時後だ。",
      "type": "narration"
    }
  ]
};
