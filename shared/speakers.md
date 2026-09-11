# 話者の特定メモ

このリポジトリは**公開動画だけ**を扱うので、匿名化はしない。発言者は実名のまま書く。

## 話者の特定のしかた

YouTube の自動字幕には**話者ラベルがない**。次の順で特定する。

1. **動画の説明欄と画面の表示名**（名前のテロップ、参加者一覧）が一次情報
2. **自己紹介と呼びかけ**（"I'm ○○ from…"、"Thanks, ○○"）
3. **役割の言及**（"as the person running the research team…"）
4. それでも決まらない箇所は `<em>(推定)</em>` / `<em>(inferred)</em>` を付ける

**字幕の綴りは本人の綴りと違うことが多い。**特定できたら直し、`glossary.md` の誤変換表に載せる。**特定できなかった名前は聞こえたまま残す**。

## 書き方

- **1 人語りの動画**は、まとめでは「〜と述べています」の受動でよい
- **複数人の動画**は、誰の発言かを書く。立場が違うと発言の重さが違う（研究者の見通しと、財団の決定は別）
- **本人のチャンネル**（Charles Hoskinson）の発言は「本人の見解として」と帰属させる。組織の決定として書けるのは公式チャンネルか公式文書が出典のときだけ
- **第三者への評価や批判**は、話者の発言として帰属させる。地の文にしない

## 回ごとのメモ

回を足すたびに、話者の割り当てと、確度が低かった箇所、制作で気づいたことをここに追記する。

### 2026-09-02 Midnight — Fireside Dev Hang: Agentic Monitoring & Infrastructure

**話者 2 名。**字幕に話者ラベルはない。

| 表記 | 根拠 |
| --- | --- |
| **Stevan Lohja**（司会、Midnight Foundation） | 動画内では「Stevan」（"Yes, thanks, Stevan"）と "Thank you, Stan"（誤変換）。「Foundation の側で」と自称。**姓は公開プロフィール（Midnight Foundation の Developer Relations）から**で、音声にはない |
| **Santiago Carmuega**（ゲスト、TxPipe） | 動画内では「TxPipe の Santiago」。動画で触れられる MPS-0038 の著者が GitHub の scarmuega（Santiago Carmuega）で、2026-09-02 に本人が「昨日投稿し、少し前にマージされた」と言っている内容と一致 |

**割り当ての方針**

- 前半（〜28:59）は 2 人の対話。Dolos の説明は Santiago、合いの手と MIPs の紹介は Stevan。79 番の "Yeah." だけは Stevan の発言の途中に入る Santiago の相づちとして独立させた
- 171 番は 1 ブロックの中で話者が替わる。"And who?" までを Stevan、"Yeah, exactly. We are working with the Blockfrost team…" 以降を Santiago にした（TxPipe の取り組みを一人称で語っているため）
- **確度が低い箇所**：チャットを読んでいる 27:43〜27:52 の 3 ブロック（189〜191 番）。「コメントを見ると興味を持っているようだ」「見知った顔がいる」は言葉だけではどちらとも取れる。Stevan → Santiago の順に割り当て、両方に `(推定)` を付けた
- 198 番 "You or your agents. We accept AI PRs." は Dolos のリポジトリの話なので Santiago
- 後半（28:59〜）は Stevan の 1 人語り。話題の切れ目で `.turn` を分けた

**チャットの名前**：Alex、John（見知った顔として）、Johnny（質問）、Stephanie（コメント）。いずれもチャットの表示名で、それ以上は分からない。

**まとめでの書き方**：前半は誰の発言かを書く（TxPipe の立場と Foundation の立場は違う）。後半は Stevan の 1 人語りなので「〜と述べています」でよいが、監視エージェントは本人が作ったものなので、評価（「不安が減った」など）は本人の言葉として帰属させた。

### 2026-09-02 Input Output — Block//45: Lace Wallet Interview with Nate Strang

**話者 3 名。**字幕に話者名はなく、交代は ">>" の印だけ。

| 表記 | 根拠 |
| --- | --- |
| **Wendy O**（司会） | "Welcome back to Block 45. I'm Wendy O." と名乗る。Nate に "Wendy" と呼びかけられる（9:19、33:41） |
| **Crypto Crow**（司会） | 冒頭で "the Crypto Crow" と紹介。"Crow" と呼ばれ、"old man" とからかわれる。Cardano 寄りで Lace ユーザー |
| **Nate Strang**（ゲスト、Lace） | 題名と冒頭の紹介。字幕は "Nate String"。肩書は公開プロフィール（Lace の Product Manager）から |

**割り当ての方針**

- Nate への質問は Wendy が「番組の進行」（経歴、いちばんの問題、年末のユースケース、ほかに触れたいこと、締め）、Crow が「ユーザーとしての不満と要望」（固まる、エージェント連携、Carbon で何が変わるか、利回りで返済、テーマ）という役割分担で読める
- 1 行の中で話者が替わる箇所は 9 つ（発話番号 18, 31, 37, 41, 68, 69, 104, 119, 121）。切る位置は `gen_block45.py`（生成スクリプト）の SPLIT に記録。例：18 は "You know, I joke around a lot" から Crow、69 は "I think it's going to be important for the future, too" から Wendy（"old man, remember?" で終わるので Crow ではない）
- ">>" が誤りとみられる箇所（同じ話者の続き）は結合した。例：30–31a（Nate）、60–62（Nate）、86–87（Nate）
- **確度が低い箇所**：冒頭ダイジェストの短い掛け合い、2:16–2:21 の「本当に喧嘩だ」「あちらの人を一人もらった」「ええ」、9:13–9:16 の相づち、10:52–10:55、11:25 "don't I know it"、12:43–13:23 の司会 2 人の掛け合い（誰が「入り口」「いちばん重要」「ユーザーガイド」を言ったか）、18:11、20:56、28:25–28:33、そして 34:56 以降のマスコットの雑談。いずれも `(推定)` を付けた
- 26 "for their jobs and I don't know anything" は文脈が取れない。Crow の茶々として `(推定)`

**まとめでの書き方**：IOG の公式チャンネルなので、Nate Strang の発言は Lace の製品担当の説明として書ける。司会 2 人の評価（「美しいウォレット」「もっと儲かる」など）は本人の見解として帰属させる。**Crow の「もっと儲かる」を地の文にしない。**


### 2026-09-06 AlphaGrowth — Dose of Alpha Ep. 16: Why Real Stablecoins Don't Pay Yield（USDM の James と Marco）

**話者 4 名。**字幕に話者名はなく、交代は ">>" の印だけ。司会 2 人は動画内で名乗らない。

| 表記 | 根拠 |
| --- | --- |
| **Bryan Colligan**（司会、AlphaGrowth CEO） | 番組「Dose of Alpha」の公開情報（司会は Bryan Colligan と Eric Waisanen）。動画内で "Eric, you want to talk a little bit about that?"、"All right, Eric, as we move on"、"Eric, I know you got to go" と**Eric に振る側**。姉妹サイト 2026-07-26 の「Eric、どうぞ」と振る側は Brian、と同じ判定 |
| **Eric Waisanen**（司会、AlphaGrowth DeFi Strategist） | 動画内で "Eric" と呼ばれる。"our markets, the ones that we're personally curating"（17:53）、再保険・リステーキングの話題（"Eric, you've done a ton on…"）が DeFi 担当の立場と一致 |
| **James Meidinger**（ゲスト、USDM / Moneta） | 冒頭で "James"、Marco が "Jim"。終わりに本人が X のアカウント "blockjock2017" を挙げ、公開プロフィール（USDM）と一致。姓は動画にはない |
| **Marco**（ゲスト、Moneta 取締役会） | 冒頭で "Marco"。"I actually sit on the board of directors there"、"I work in TradFi" と自称。**姓は動画・説明欄に出ず、特定していない** |

**割り当ての方針**

- 前半（0:39〜36:42）の質問はほぼ Bryan。Eric の問いは 17:53 の「拡張性と安全性」と、28:38 の 3Jane（推定）
- 冒頭 0:00〜0:39 は本編の抜粋（Marco 2:00、James 3:50、Marco 17:32）。3 つの `.turn` に分けた
- 1 行の中で話者が替わる箇所は手で分けた。主なもの: 0:24（James → Marco の抜粋）、1:02（Marco → Bryan）、9:55（Eric の補足 → James "I love it and I love Charles reference"）、17:53 と 19:00（Marco → Eric → James）、43:01（Bryan → Eric "Yeah, I we just talked with"）、48:36（Bryan → Eric "How do you do chargebacks?" → Bryan）、50:38〜51:52（Bryan "Locke" → Eric → Bryan「信頼の進化」→ Eric "it was Milton Friedman"）、53:22（Eric "No." → Bryan）
- ">>" が誤りとみられる箇所は結合した: 0:46（James の "I've got no audio" と "I knew it was going to drop on me"）、28:31（Marco の続き）
- 1 人が長く話す箇所は話題の切れ目で分けた: 25:46（Marco の RWA の話）、46:29（Bryan のエージェントの話）、54:38（Bryan の Draper のプロジェクト列挙）
- **確度が低い箇所**（`(推定)` 付き）: 0:52〜1:02 の音声トラブルの掛け合い（"Typical. I told you that was going to happen" を Marco としたが Eric の可能性）、9:21 の CIP の補足説明（Eric としたが Bryan の可能性）、20:55〜21:04 の「7 年前は最年少」（Bryan）と「髪に雪」（James）、22:15 の "CeFi in the front / DeFi in the back" の 2 人、23:50〜24:41 の Hermes と妻の冗談（司会 2 人の切り分け）、28:38〜30:54 の 3Jane・Ethena Pay・カードの雑談（Eric と Bryan の切り分け。chain.com を持ち出す側を Bryan とした）、35:17 "what goes up"（James）、36:42 "Take care"（James）、51:10 の「信頼の進化」（Bryan）
- 後半（36:42〜）の司会 2 人は、"I was in San Francisco Monday and yesterday" と "You know how I love foreign currencies" を Bryan（前半 11:46 で Tala Emali に会ったと言うのも Bryan）、"I was in San Francisco as well. So both of us…" を Eric として切り分けた

**まとめでの書き方**：前半は誰の発言かを書く（取締役の Marco と実務の James は立場が違う。Marco は TradFi の勤め人としての見方をたびたび断っている）。**後半は AlphaGrowth が自分の事業（Cardano PRIME）を語る部分**なので、数字も評価も「運営者の説明」として帰属させ、地の文にしない。第三者への評価（Stream、Robinhood Chain、CIP-113 の完成度、Midnight の準備状況）はすべて話者に帰属させた。

### 2026-09-09 Charles Hoskinson — Navier-Stokes

**1 人語り。**冒頭で "Hi, this is Charles Hoskinson" と名乗る。本人のチャンネル（@charleshoskinsoncrypto、oEmbed で確認）。話者の割り当ての問題はない。

- **書き方**: 本人のチャンネルなので、評価・方針・時期はすべて「本人の見解として」。Midnight についても「私たちが作った理由」という本人の位置づけとして書き、公式見解にはしない
- **第三者への評価**: OpenAI（「独自だと言うが、ログの仕事が土台に見える」）、Sam Altman・Dario Amodei（「いつでも持っていける」）、Jay Cummings（「れっきとした数学者」）、Peter Scholze・Terence Tao（「同意してくれている」）。いずれも本人の発言として帰属させ、地の文にしない
- **確度が低かった箇所**: 固有名詞の推定が 3 つ（Scholze、Banach–Tarski、Helfgott）。`glossary.md` の同回の見出しに根拠を書いた。全文では `(推定)` / `(inferred)` を付けた
- **事実と違う紹介**: Jay Cummings を「UCSD の教授」と言っているが、所属はカリフォルニア州立大学サクラメント校。動画の言い分を残し、`補足` で添えた
- **動画に出てこない当事者**: 報道で先行研究者として出る Tristan Buckmaster と Levent Alpöge。本人は触れていない。まとめでは `補足` の時系列で示した

### 2026-09-10 Cardano Over Coffee — AlphaGrowth が PRIME の監査と RFP を説明した回

**X スペースの録音。文字起こしには話者名も交代の印も時刻もない。**割り当てはすべて文脈からの推定で、全文の 436 ターンのうち 107 ターン（短い相づちと雑談が中心）に `(推定)` / `(inferred)` を付けた。**司会の Christina に 189 ターン**を割り当てている。番組の司会は回ごとに替わるので、次に同じ番組を扱うときは司会を前提にしない。

| 表記 | 根拠 |
| --- | --- |
| **Christina**（司会） | 冒頭で共同司会を集める側。"I work at Blink Labs"、"I'm an old-school infra person"、PRIME の運営グループに「私も入っている」と自称。"I'm stirring stuff up with Pragma"、"I've already added Cardano Ignite as a project on Pragma's website" と Pragma の側でも動いている。AlphaGrowth 側も "we've got Christina here" と運営グループの一員として呼ぶ。**姓は出ない** |
| **James**（共同司会） | Christina が名前で呼ぶ。"I'm on the product committee, and we're reviewing everything"（Intersect の Product Committee）と自称。Sam（"lives in GitHub"）の話をする側。姓・所属の詳細は出ない |
| **Chad**（共同司会） | ミッドロールと TSC（Technical Steering Committee）の情報を読み上げる側。名前で呼ばれる |
| **Eric Waisanen**（AlphaGrowth） | "Eric" と呼ばれる。"Happy Thursday. You cut off a second after…" で登場。「3 つか 5 つ選べ」への長い答え、Ken Eric の EVM とマーケットメーカーの質問への答え、"Go, go for it Brandon" と Bryan に振る側。姓は番組 Dose of Alpha の公開情報（2026-09-06 と同じ根拠） |
| **Bryan Colligan**（AlphaGrowth） | 音声では "Brian"、一度 "Brandon"。「監査でいちばん面白い数字」（1,140 万ドル）、50 対 1、ダイヤモンドの仮の話をする側。"I got a meeting at 11:17" で退出。姓は同上 |
| **Giovanni**（Cardano Dev Skills） | Christina が名前で紹介。"I made a post about the MCP server" と作者として語る。姓は出ない |
| **Bora**（Cardano の教育チーム） | Giovanni が "Bora from the education team" と紹介。発言は「唯一の KPI は新しい開発者の獲得コスト」の 1 ターンのみ |
| **Phil** | 形式手法・安全性の長い発言。Christina が "Phil" と呼び、Giovanni も "the great Phil" と呼ぶ。姓・所属は出ない |
| **Ryan** | 「AI エージェントで自動研究・取引エンジンを作っている」参加者。"Thank you, guys. I gotta hop" で退出 |
| **Chris**（Blink Labs） | 「今日 Boston Blockchain Week へ」と短い発言。Christina が "my partner" と呼ぶ相手（OpenZeppelin の提案に「もう投票した」と「ノー」を入れた人）も同じ Chris と読んだ |
| **Ken Eric**（Team Void、ノルウェー） | "since I'm a part of Team Void" と自称。EVM・マーケットメーカーの 3 つの質問をする側 |
| **Beatrice**（Pragma に関わる） | Christina が "Miss Beatrice" と呼ぶ。Pragma の会合の記録を「note taker が送ってきた」と読む側で、Christina の「Robertino のプロジェクトを受け入れた」の発表に「本人に伝えたか」と返す。OpenZeppelin の提案について「約 1,100 万を求めている」「保守のコストは誰が持つのか」の発言。所属の明言はない |
| **Serg** | node 11.1 / 11.2 と Dijkstra・Musashi のテストネットの状況を説明する側。名前で呼ばれる |
| **Satoshi's Bride、Alex、Gamechanger、DC Dog、Mustafa** | 表示名で呼ばれる参加者。Gamechanger は GCScript DSL を Cardano Dev Skills に載せたいと発言。DC Dog と Mustafa は終盤の雑談 |
| **名前の出ない参加者 1 名** | 「何のためにやっているのか」と問いかけた、くたびれた参加者。名前で呼ばれないまま 4 ターン |

**割り当ての方針と、確度が低かった箇所**

- **冒頭の "Good morning, Brian"** は、直後に発言する Ryan の聞き違いと読んで Ryan に割り当てた。英語全文の文言は聞こえたまま。AlphaGrowth の登場（189 ターン目）以降の "Brian" は Bryan Colligan に直した
- **文の途中に挟まる短い相づち**（原本では "- … " で示される）は、話している側のターンの中に残した。相づちの主を当てるのは無理があるため
- **雑談の切り分けが不確か**な箇所: 冒頭の AI エージェントの雑談（Ryan と Chris）、"Donkey Kong" のやり取り、"pull request approver should be a job"（Ryan）と "Chris put out like 70"（James）、Dave の姓 "Dinesio" をめぐる 3 分（Christina と James の掛け合い）、終盤の DC Dog・Mustafa・Ken Eric の本の話
- **AlphaGrowth の 2 人の切り分け**: 「透明性報告」の説明（"We'll give transparency reports"）は Eric としたが Bryan の可能性がある。まとめでは「Eric（推定）」と書いた。"For Cardano or for us?"、"Yeah, just getting started" も Eric とした
- **"Business and competence. Thank you. Or competence and results"** は Phil とした。直前の Phil の発言の言い直しと読んだ
- **"The Argentinian" / "The Italian"** の短いやり取り（Ken Eric、Christina、Beatrice）は誰の訂正かが不確か
- **共同司会 James の所属**は "product committee" の自称だけ。Intersect のものと読んだが、動画の中で組織名は言っていない

**まとめでの書き方**: AlphaGrowth の 2 人は PRIME の運営者、Christina はその運営グループの一員なので、監査の数字・RFP の条件・互いの評価は当事者の発言として帰属させた。Phil の安全性の主張、OpenZeppelin の提案への賛否、ノードの版の情報は各参加者の見解として書いた。
