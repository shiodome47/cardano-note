# 用語集・表記ルール

HTML を生成するときは必ずこのファイルを参照して、全回で表記を統一する。

**RealFi 固有の用語は `shiodome47/2026RealFi` の `shared/glossary.md` にある。**こちらには Cardano 全般と、各チャンネルの動画で出た語を置く。両方に出る語（Leios、DRep など）は**こちらを正**とし、あちらには足さない。

## 文字起こしの誤変換 → 正しい表記

YouTube の自動字幕は Zoom の字幕より荒い。固有名詞は毎回同じ間違い方をするので、生成時に機械的に直す。**直すのは `docs/` 側だけ。`episodes/` の原本は触らない。**

| 誤変換 | 正しい表記 |
| --- | --- |
| Godano, Cordano, Kudarn, card data | Cardano |
| Mid night, Midnite | Midnight |
| Leos, Layos, Lay OS | Leios |
| Paris, Para, Peris | Peras |
| D-rep, Deep rep | DRep |
| SPAs, SPO's | SPOs |
| Amergo | EMURGO |
| Intersect MBO / intersect | Intersect |
| Pogen | Pogun |
| Ave | Aave |
| Morfo | Morpho |
| pith | Pyth |
| Dexes | DEX |
| Dows | DAOs |
| Hydra head / hydrahead | Hydra Head |
| Mithril / Mithrill | Mithril |
| TXPipe, TX Pipe | TxPipe |
| dollars, dollar, Dolo | Dolos（文脈で判断。"dollars per user" のように本当にドルのこともある） |
| block frost | Blockfrost |
| coupon | Kupo |
| Agmios, off-mirror | Ogmios（"off-mirror" は 2026-09-02 の 1 か所のみ。Dolos の上に載せる文脈から Ogmios と判断） |
| system D | systemd |
| MIT process | MIPs process |
| Stan（Stevan への呼びかけ） | Stevan |
| learning agent | alerting agent（2026-09-02。同じ動画の冒頭で "alerting agent" と言っている） |
| sinking（検知ルールの列挙の中） | syncing |
| Nate String | Nate Strang |
| Soulflare, Salana | Solflare、Solana |
| datalus | Daedalus |
| Realy, Reali, Realfi, real（"and real I can take"） | RealFi |
| poking（"poking credit market"） | Pogun |
| USDCX | USDCx |
| Ian Bolina | Ian Balina |
| chatgbt, claude | ChatGPT、Claude |
| rabbit hole（Ethereum の教育プラットフォームの文脈） | RabbitHole |
| DRUPS, dereppp | DReps / DRep（dereppp は 2026-09-02 Block//45 の "my DRep load"） |
| LA's, Lac's（Lace の所有格） | Lace's |
| Trad（"what Trad wants"） | TradFi |
| Cardono, Cardona（"Cardona coffee"） | Cardano、Cardano Over Coffee |
| Matt Plowman, Matt Plman | Matt Plomin（USDM の創業者。2024-11 死去） |
| Jed（"calling out Jed"） | Djed |
| Min Swap | Minswap |
| SIP 113, SIP 1113, zip 1113, CIP113 | CIP-113 |
| Mika | MiCA |
| Treadfi, trifi, stratfi, Trevy | TradFi |
| Vlabs | VIA Labs |
| MBX | NBX（Norwegian Block Exchange。USDM の EEA 側の発行者） |
| USM, USCM | USDM |
| Manetta, mana global, app a.mmonetta.global | Moneta、moneta.global、app.moneta.global |
| Athena（"Athena Pay"） | Ethena |
| three Jane | 3Jane |
| steam stream, stream（Eric の発言、DeFi の事故の文脈） | Stream（Stream Finance） |
| USS the teras | UST, the Terras |
| Robin Hood | Robinhood |
| Micro Strategy | MicroStrategy |
| Poly Market | Polymarket |
| X42, x42 | x402 |
| Msumi and Sakosumi | Masumi and Sokosumi |
| Enriion Fund | Orion Fund |
| AlphaGo（AlphaGrowth への呼びかけ） | AlphaGrowth |
| Cardono Prime, Cardano Prime | Cardano PRIME |
| Erica（"Me and Erica"） | Eric |
| apology（"apology from the network state"） | Balaji（Srinivasan） |
| lock（Adam Smith ではない経済学者を探して） | Locke |
| galaxy or layer three | Galxe or Layer3 |
| Nigerian beer | Nigerian naira |
| cherry carry trade | yen carry trade |
| multi-IG, multi-yc, multi-pig | multisig |
| so sofur（"sub so sofur"） | SOFR |
| Padre tickets | Padres tickets |
| Immunifi | Immunefi |
| Merkel（"Merkel or Turtle Clubs"） | Merkl |
| Gravity Decks | Gravity DEX |
| blockjack 2017 | blockjock2017（James Meidinger の X） |
| f Mary kill, fad merry kill | Fad, Marry, Kill |
| DREApp council to D5 | DApp council to DeFi |

**特定できなかった名前は聞こえたまま残し、まとめページで「名前だけ挙がって説明されなかった」と事実として書く。**

回ごとの誤変換は、下に見出しを足して追記する。

### 2026-09-02 Midnight Fireside Dev Hang（Agentic Monitoring & Infrastructure）

上の表に足したもののほか、**特定できずに聞こえたまま残した名前**が 1 つ。

- **link caps** — Santiago Carmuega が「Blockfrost チームと、Cardano エコシステムで活動するもう 1 つのチーム」としてスナップショットの共同署名の相手に挙げた名前。TxPipe と Demeter を共同運営している **Blink Labs** が候補だが、動画からは確かめられない。まとめでは「候補」として `補足` で書き、全文は聞こえたまま
- **Midnight questing** — 終わりの告知で一言。何を指すかは動画で説明されていない

### 2026-09-02 IOG Block//45（Lace、Nate Strang）

- **dereppp**（4:32、Crypto Crow が Lace が固まる要因として挙げた語）— **DRep**。「自分の DRep の負荷」という文脈で、依頼者の判断でも DRep。上の表に登録
- **Dimensions**（23:53 "Dimensions already setting in"）— dementia（認知症）の誤変換。固有名詞ではないので英語全文はそのまま、日本語は「認知症」
- **bare markets** — bear markets（弱気相場）。同上
- **2020**（"hindsight's 2020"）— 20/20。同上
- **the car**（26:45 "first roll out of the car"）— 語尾が切れており、Carbon か carry trade か決められない。英語全文はそのまま
- **収録と公開のずれ**に注意。動画内の「今年 5 月」「近日中」「今月後半」は 2026 年 7 月上旬の基準（`meta.yml` の recorded）

### 2026-09-06 AlphaGrowth Dose of Alpha Ep. 16（USDM の James と Marco）

上の表に足したもののほか、**特定できずに聞こえたまま残した名前**。

- **Nighthawk**（9:08 "that Nighthawk that was going on there"）— 大きなステークホルダーから凍結できるか確認が来た「件」。時期と文脈から **2026-07-20 の Wanchain ブリッジからの 5 億 1,500 万 NIGHT 流出（NIGHT hack）** の可能性が高いが、動画内に説明がなく確定できない。まとめでは `補足` で候補として書き、全文は聞こえたまま
- **Tala Emali**（11:51）— Bryan が Draper のプログラムで会った南アフリカの ZAR 決済処理の会社。特定できず
- **Army of Spies**（3:27）— Matt Plomin が Djed を批判して「注目を浴びた」場。特定できず
- **1010en**（18:29 "our markets were safe from 1010en"）— 意味不明。聞こえたまま
- **the brain**（29:24 "with the brain and etherfine"）— ネオバンク領域の競合の名前。カード発行の Rain の可能性があるが確認できず
- **red.xyz**（45:10）— 「以前一緒にプロジェクトをやった」相手。オンチェーン再保険の **Re（re.xyz）** の可能性。まとめでは候補として `補足`
- **agent to aagent.xyz**（47:23）— 「agent dynamics」の URL として挙げられたもの。確認できず
- **Esco**、**E Envent**、**River Arc**、**pure.xyz**、**Pete from Astro Boy**、**Yoda** — 名前だけ
- **Syria Deutsche Bank**（3:35）— "subsidiary of Deutsche Bank" の誤変換。固有名詞ではないので英語全文はそのまま、日本語は「Deutsche Bank の傘下」
- **swap meat**、**rapper**（wrapper）、**junior trunch**（tranche）、**illquid** — 普通名詞の誤変換。英語全文はそのまま
- **収録と公開のずれ**は小さい。ライブ配信の録画で、「Ethena Pay が昨日」（発表 2026-09-01）から収録は 09-02 ごろ。公開日は依頼者の指定「4 日前」= 09-06 で、YouTube 側の日付はこの環境から確認できていない

### 2026-09-09 Charles Hoskinson — Navier-Stokes

本人のチャンネルのライブ配信。YouTube の自動字幕なので固有名詞の崩れが多い。

| 誤変換 | 正しい表記 |
| --- | --- |
| Cray Institute | Clay Institute（Clay Mathematics Institute） |
| ponor conjecture | Poincaré conjecture |
| reman hypothesis | Riemann hypothesis |
| nir stokes, neighbor Stokes, Nivier Stokes, nibier stokes | Navier–Stokes（英語全文では本人の言い方どおり "Navier Stokes"） |
| Claude Louie Navier | Claude-Louis Navier |
| GPT6 Astra | GPT-6 Astra |
| Chad GPT, CHPT | ChatGPT |
| open AAI | OpenAI |
| Sam Alman | Sam Altman |
| Daario | Dario（Amodei） |
| enthropies | Anthropic |
| Linets | Leibniz |
| Larry's Page | Larry Page |
| Carnegie Melon | Carnegie Mellon |
| Jeremy Avagad | Jeremy Avigad |
| automath | Automath |
| lean | Lean |
| Bob FSY, Bob Fos | Bob Fosse |

**文脈から推定して直したもの**（全文に `(推定)` / `(inferred)` を付けた）。

- **Peter Schwab** → **Peter Scholze**。「Lean を証明の正当な形式と認める本職の数学者」として Terry Tao と並べて挙げられた名前。Lean での形式化（Liquid Tensor Experiment）に関わった Scholze と読んだ
- **managars paradox** → **Banach–Tarski paradox**。「Lean で形式化されて驚いた」集合論の結果として連続体仮説と並べて挙げられたもの
- **health's tertinary gold injection proof** → **Helfgott's ternary Goldbach conjecture proof**。「正しいと分かっているのに手続きが追いつかない証明」の例。本人の専門（加法的整数論）と音の両方が合う

**特定できず聞こえたまま残したもの**: **the uadidus manifesto**（直後に "the QED manifesto" と言い直しているので、同じものの言い間違いの可能性）。

**直さなかった誤変換**（固有名詞ではないので英語全文はそのまま。日本語では正しく訳した）: PTEES / PTE（PDEs / PDE）、OD（ODE）、nextG（next-generation）、awake（a wake）、squirrel（squirt）、similacro（simulacrum）、parro（parrot）、open G。

**動画の言い分と事実が違う固有名詞**: Jay Cummings を「UCSD の教授」と紹介しているが、本人の所属はカリフォルニア州立大学サクラメント校で、UCSD は博士号の取得先（2016 年）。docs/ では動画の言い分を残し、`補足` で事実を添えた。

### 2026-09-10 Cardano Over Coffee — AlphaGrowth が PRIME の監査と RFP を説明した回

X スペースの録音の文字起こし。**話者名も時刻もない**ので、話者はすべて文脈からの推定（`speakers.md`）。音声のみなので `画面` は使っていない。

| 誤変換 | 正しい表記 |
| --- | --- |
| Alpha Growth | AlphaGrowth |
| Cardano dev skill / dev skills | Cardano Dev Skills |
| TX Pipe | TxPipe |
| GS Script DSL | GCScript DSL（GameChanger のスクリプト言語） |
| Eli5 | ELI5（explain like I'm five） |
| Ton | TON |
| linear claims | Linear Leios |
| Omani Padme Om | Om Mani Padme Hum |
| Brandon（AlphaGrowth の文脈） | Bryan（Colligan） |
| Brian（AlphaGrowth の登場以降） | Bryan（Colligan） |

**文脈から推定して割り当てたもの**: 冒頭の挨拶に出る **Brian** は、直後に発言する **Ryan** の聞き違いと読み、話者は Ryan に、英語全文の文言は聞こえたまま残した。

**特定できず聞こえたまま残した名前**: **Astra**、**Tebow**、**Cmon**、**Blaster**（Phil が「形式的な保証のツール」の例として挙げた名前。公式サイトは未確認）、**Cranston AI**、**Krill**、**Elk**、**Apple Duo**、**Dave Dinesio**、**Nifa**、**Mateo**、**van Rossem**、**CAP portal**。

**数字の食い違い**: PRIME の監査文書は 2026-09-06 の Dose of Alpha で Eric が「77 ページほど」、この回では Christina が「97 ページ」。両方を記録し、どちらにも寄せていない。

**要点で置き換えた語**（`.thesis` / `.tldr` では平易な言葉、原語は本文の初出で渡す）: yield compression → 「利回りの圧縮」（本文で「チームが名前を考えている、と Bryan が言った語」と示す）、TVL → 「預けられた資産の総額」を初出で添える、RFP → 「提案募集（RFP）」、stale answers → 「古い答え」、competitive bidding → 「競争入札」。

## Cardano の基本用語

| 用語 | 説明 | 訳し方 |
| --- | --- | --- |
| **ADA** | Cardano のネイティブ通貨 | 訳さない |
| **SPO（Stake Pool Operator）** | ステークプールを運営し、ブロックを生成する事業者。委任を集めた量に応じてブロック生成の機会を得る | SPO（初出で「ステークプール運営者」と補う） |
| **DRep（Delegated Representative）** | CIP-1694 のガバナンスで、ADA 保有者から投票権を委任される代表。**SPO とは別の役割**で、兼ねることもできる | DRep（初出で補う） |
| **CIP-1694** | Cardano のオンチェーン・ガバナンスの枠組み。DRep・SPO・憲法委員会（Constitutional Committee）の 3 者で提案を審議する。「Voltaire」時代の中核 | 訳さない |
| **Constitutional Committee（憲法委員会）** | ガバナンス提案が Cardano の憲法に沿っているかを判定する委員会 | 憲法委員会（原語を添える） |
| **Info Action** | オンチェーンで意思を示すだけで、**可決しても自動で何かが実行されるわけではない**種類のガバナンス提案。閾値に届かなくても結果が実務に効くことがある。**「可決」と「支持を示した」を区別して書く** | 訳さない・初出で説明 |
| **treasury（財務庫）** | Cardano のオンチェーンの資金。取引手数料の一部と発行分が積み上がり、ガバナンスで支出を決める | 財務庫（原語を添える） |
| **エポック（epoch）** | Cardano の時間の単位。約 5 日 | エポック |
| **Ouroboros** | Cardano のプルーフ・オブ・ステークのコンセンサス・プロトコル群の名前。Praos が現行、Leios と Peras はその拡張 | 訳さない |
| **Leios** | ブロック生成を段階に分けて並列化し、スループット（単位時間あたりの処理量）を上げるための Ouroboros の拡張。**時期・仕様は動画ごとに違うことを言っている可能性がある**ので、必ず公開日を添える | 訳さない |
| **Peras** | ブロックの確定（finality）を速くするための Ouroboros の拡張。投票でチェーンの重みを付ける | 訳さない |
| **Hydra（Hydra Head）** | Cardano のレイヤー 2。参加者どうしがオフチェーンで高速に取引し、結果だけをレイヤー 1 に書く | 訳さない |
| **Mithril** | ステークにもとづく署名で、ノードの同期を速くする仕組み | 訳さない |
| **EUTXO** | Cardano の台帳モデル。Ethereum のアカウント型と違い、取引の結果が事前に決まる。**他チェーンの仕組みを Cardano に持ってくるときに「単純移植できない」理由としてよく出る** | 訳さない・初出で補う |
| **Plutus / Aiken** | Cardano のスマートコントラクト言語（Plutus は Haskell 系の本家、Aiken はコミュニティ発の代替） | 訳さない |
| **Voltaire** | Cardano のロードマップでガバナンスを指す時代の名前（Byron → Shelley → Goguen → Basho → Voltaire） | 訳さない |
| **partner chain（パートナーチェーン）** | Cardano のインフラ（SPO、ステーク）を使って立ち上げる別チェーンの枠組み。Midnight がその最初の例として語られることが多い | パートナーチェーン（原語を添える） |
| **cardano-db-sync（db-sync）** | Cardano の全データを PostgreSQL に流し込む索引ツール。エクスプローラやウォレットの裏で使われる「汎用インデクサ」。Midnight のノードは Cardano の状態を読むのにこれを要求している（2026-09 時点）。動画の字幕では "DB sync" と出るが、docs/ の本文では **db-sync** に統一。英語全文は "DB sync" のまま | db-sync。**要点では「Cardano 側の巨大な索引データベース」と書く** |
| **stability window（安定性ウィンドウ）** | ある深さより古いブロックは覆らない（巻き戻しが起きない）と見なされる期間。Midnight が Cardano の履歴を「数日分」しか要らない理由として出る | 安定性ウィンドウ（原語を添える） |
| **finality（ファイナリティ）** | ブロックが確定して覆らなくなること。Midnight の監視では「finality gap（確定の遅れ）が 3 ブロックを超えたら」という閾値の話で出る | ファイナリティ（確定）。**要点では「ブロックの確定」と書く** |
| **reorg（ブロックの再編成）** | チェーンの先頭が別の枝に置き換わること。Substrate 系では 1〜2 ブロックは普通、と 2026-09-02 の動画で述べられた | 再編成（原語を添える） |
| **Kupo / Ogmios** | Cardano の DApp 開発でよく組み合わせる補助ツール。Kupo はアドレスごとの UTXO の索引、Ogmios はノードとの WebSocket の橋渡し。Midnight のバリデータの初期の手順にも入っていた | 訳さない・初出で補う |
| **Blockfrost** | Cardano のデータを読むための API サービス。「Blockfrost 互換 API」は、そのエンドポイントと同じ形で問い合わせられるという意味。公式: <https://blockfrost.io> | 訳さない |
| **UTxO RPC** | UTXO 型チェーン向けの gRPC ベースのデータ API。TxPipe が仕様を出している | 訳さない |
| **Lace** | Input Output が開発する Cardano のウォレット（ブラウザ拡張とモバイル）。**v2（2.0.0）は 2026-04-28**、2.1.0 は 07-09、2.2.0 は 07-23。公式: <https://www.lace.io>、リポジトリ: <https://github.com/input-output-hk/lace> | 訳さない |
| **Lace Carbon** | Lace のユーザーインターフェースの刷新。2026-09-02 の動画（7 月収録）で「今月後半にオプトインで」と語られた。**提供開始の時期は 2026-09-10 時点で未確認** | 訳さない |
| **Daedalus** | Cardano のフルノード型ウォレット。同期に時間がかかる、という文脈で出る | 訳さない |
| **Solflare** | Solana のウォレット。Nate Strang の前職 | 訳さない |
| **非カストディアル（non-custodial）** | 業者が鍵を預からず、ユーザー自身がリカバリーフレーズで鍵を持つウォレットの方式 | 非カストディアル（原語を添える）。**要点では「自分で鍵を持つ」と書く** |
| **リカバリーフレーズ（recovery phrase）** | 12〜24 語の単語列。これから鍵が導かれ、これがあればウォレットを復元できる。**見た人は誰でも中身を動かせる** | リカバリーフレーズ |
| **段階的開示（progressive disclosure）** | UI 設計の用語。初心者には基本だけを見せ、慣れるにつれて機能を出す。Lace Carbon のオンボーディングの方針として 2026-09-02 の動画で出た | 段階的開示（原語を添える） |
| **キャリートレード（carry trade）** | 低い金利で借りて高い利回りで運用し、差を取る取引。差がプラスなら「ポジティブ・キャリー」。2026-09-02 の動画では「ADA を担保に Pogun で借り、RealFi にステーク」の意味で使われた。姉妹サイトの 2026-08-06 では Liqwid 経由の「ポジティブ・キャリー」が別の経路として出る。**数字を書くときは仮の数字だと分かる言葉を隣に置く** | キャリートレード（原語を添える） |
| **P2P のクレジット市場（peer-to-peer credit market）** | 借り手と貸し手が金利・期間・担保を直接交渉する貸し借り。アルゴリズム型と違い、担保の値下がりで自動清算されず、支払いの不履行で清算される、と説明される（Pogun）。**リスクが消えるのではなく、貸し手側に移る**ことを `補足` で書く | 訳さない・初出で説明 |
| **USDCx** | Circle の USDC を Cardano 上で使えるようにしたもの。2026 年 2 月に mainnet 稼働（姉妹サイトの用語集）。動画では借りるステーブルコインの例として出た | 訳さない |
| **RabbitHole** | Ethereum の、報酬付きで使い方を学ばせる教育プラットフォーム。Nate Strang が成功例として挙げた | 訳さない |
| **ステーブルコイン / 利回りコイン（yield coin）** | 2026-09-06 の Marco の線引き。利回りを配るものはステーブルコインではなく「利回りコイン」。法定通貨に 1 対 1 で裏付けられ利回りを払わないものがステーブルコイン、という立場 | 利回りコイン（原語を添える）。**要点では「利回りを配るもの」と書く** |
| **決済用ステーブル（payment stable）** | 価値の移動・保存に使う、利回りを払わないステーブルコイン。James が USDM をこう位置づけた | 決済用のステーブル |
| **CIP-113** | Cardano のネイティブアセットに凍結などのプログラム可能な振る舞いを付ける改善提案。2026-09-06 の動画で James は「まだ固まっていない」と評価。字幕では SIP 113 / SIP 1113 / zip 1113 | 訳さない・初出で説明 |
| **KYC / KYB** | 本人確認（Know Your Customer）／法人確認（Know Your Business） | KYC / KYB（初出で補う） |
| **MiCA** | EU の暗号資産規制（Markets in Crypto-Assets）。字幕では Mika | 訳さない |
| **GENIUS Act** | 米国のステーブルコイン法（2025 年成立）。2026-09-06 で Eric が "genius compliant" と言及 | 訳さない |
| **SOFR** | 米ドルの翌日物の基準金利（Secured Overnight Financing Rate）。Marco が「これ以下しか払わない理由はない」の基準に使った | 訳さない・初出で「ドルの基準金利」と補う |
| **MMF（マネーマーケットファンド）** | 短期国債などで運用する低リスクのファンド。トークン化 MMF が Marco の「ステーブルコインのサンドイッチ」の両側 | MMF（初出で補う） |
| **ステーブルコインのサンドイッチ（stablecoin sandwich）** | Marco の構想。資産はトークン化 MMF に置き、カードをかざす瞬間だけステーブルコインに換えて払う。**構想であり動いているプロダクトではない** | 原語を添える |
| **DeFi マレット（DeFi mullet）** | 表は CeFi、裏は DeFi。利用者は普通の金融アプリを使い、裏の運用が DeFi。2026-07-26（姉妹サイト）と 2026-09-06 の両方で出た | DeFi マレット（初出で説明） |
| **リンディ効果（Lindy effect）** | 長く生き残ったものはさらに長く生き残る、という経験則。Marco は「もうリンディではない、むしろハニーポット」と述べた | リンディ効果（原語を添える） |
| **TRC（Treasury Reserve Contract）** | Intersect が管理する、財務庫から引き出した ADA を保持しマイルストーンごとに支払う契約。2026-09-06 で James が「その中で ADA の代わりに USDM / USDCx を置く」用途を挙げた | 訳さない・初出で説明 |
| **B2B4C** | 2026-09-06 で Eric が「こう呼ぶ」と言った造語。大きな案件は B2B だが、それを個人（C）にも開く | 訳さない |
| **x402** | HTTP 402（Payment Required）を使い、エージェントが機械的にステーブルコインで支払う標準。Coinbase 発。Masumi が Cardano 実装を公開。字幕では X42 | 訳さない・初出で説明 |
| **クラウド規制（cloud regulation）** | Balaji Srinivasan『The Network State』の語。2026-09-06 で Bryan がエージェント間取引の紛争解決の文脈で借用 | クラウド規制（原語を添える） |
| **scooper** | Cardano の DEX で注文を束ねて処理する役（バッチャー）。PRIME が「標準化」の対象に挙げた | 訳さない・初出で補う |
| **ボールト（vault）** | 資金を預かって運用する契約の器。PRIME が「標準化」の対象に挙げた | ボールト（原語を添える） |
| **CDP（担保付き債務ポジション）** | 担保を入れて合成資産やステーブルコインを発行する仕組み。Indigo が Cardano の例 | CDP（初出で補う） |
| **再担保（rehypothecation）** | 預けた資産を裏で別の運用に回すこと。Bryan の「Uniswap v4 型の DEX」の文脈 | 再担保（原語を添える） |
| **キャピタルコール（capital call）** | プライベートファンドが約束済みの出資を実際に払い込ませる請求。3Jane の「キャピタルコールなし」の文脈 | キャピタルコール（原語を添える） |
| **リキッドステーキング** | ステークした ADA の代わりに流動性のあるトークン（Lava の場合 L-ADA）を受け取り、DeFi で使える形 | リキッドステーキング |
| **AMM（自動マーケットメーカー）** | 数式で価格を決めて交換する DEX の仕組み。「片側だけ（single-sided）」は片方の資産だけを預ける形 | AMM（初出で補う） |
| **MCP / CLI** | AI エージェントがソフトウェアを操作するための接続口（Model Context Protocol、コマンドライン）。Crypto Crow が「エージェントを Lace につなぐ計画は」の文脈で挙げた | 訳さない・初出で補う |

## 数学・AI の用語（Charles Hoskinson のチャンネルで出るもの）

| 用語 | 説明 | 訳し方 |
| --- | --- | --- |
| **ミレニアム懸賞問題（Millennium Prize Problems）** | Clay Mathematics Institute（米国の私設の数学研究所）が 2000 年に発表した 7 つの未解決問題。各 100 万ドルの懸賞金。解決済みは Poincaré 予想のみ（2003 年、Perelman）。動画の字幕では "Cray Institute" | ミレニアム問題（原語を添える）。**要点では「数学で一番難しい問題のひとつ」と書く** |
| **Navier–Stokes の存在と滑らかさ** | ミレニアム問題のひとつ。3 次元で滑らかな初期状態から始めた流体の方程式の解が、いつまでも滑らかか、有限時間で破綻しうるか。**公式の問題文はどちらの証明も認め、滑らかな外力を加えた設定も認めている。**2026-09-08 に OpenAI が「有限時間で破綻する」側の結果を、外力ありの設定で示したと発表（Clay は 09-10 時点で未解決のまま掲載） | Navier–Stokes（訳さない） |
| **偏微分方程式（PDE）** | ある場所・時刻の値がまわりや少し前の値とどう関係するかを表す式。流体、熱、波など | 偏微分方程式（初出で補う）。**要点では「流体の方程式」と書く** |
| **Lean** | 証明支援系（proof assistant）のひとつ。数学の主張と証明をプログラムのように書き、機械が検査する。Hoskinson は「テスト駆動開発のようなもの」と説明 | Lean（訳さない）。**要点では「証明を機械で検査する仕組み」と書く** |
| **形式化（formalization）／形式数学** | 数学の証明を、機械が一行ずつ検査できる形に書き直すこと | 形式化 |
| **Hoskinson Center for Formal Mathematics** | カーネギーメロン大学の形式数学センター。2021 年 9 月に Charles Hoskinson の 2,000 万ドルの寄付で設立発表。所長は哲学科の Jeremy Avigad。公式: <https://www.cmu.edu/hoskinson/> | 訳さない（初出で「形式数学センター」と補う） |
| **QED マニフェスト** | 1994 年に出た、すべての数学を機械で検査できる形にしようという呼びかけ | 訳さない |
| **Automath** | N. G. de Bruijn が始めた最初期の証明検査システム。一般には 1967〜68 年開始とされる（動画では 1970 年） | 訳さない |
| **依存型（dependent types）／構成的数学** | 型に条件を書き込める型システム。「型が合う＝証明が通る」という対応を作れ、Lean はこの上に作られている。構成的数学は「存在する」なら実際に作って見せることを求める流儀 | 依存型／構成的数学（初出で補う） |
| **ZFC** | 現代数学の大半が依拠する集合論の公理系 | 訳さない |
| **信頼の半径（radius of trust）** | Hoskinson の言葉。数学の共著で「全部を理解し検証した」と信じられる相手の数（3〜5 人）。Lean があれば広がる、というのが 2021 年の本人の予測 | 信頼の半径（原語を添える） |
| **ショットガン・ウェディング（shotgun wedding）** | Hoskinson の言葉。先取権の争いで双方に貢献があるとき、急ごしらえで共著にすること | そのまま片仮名で（初出で補う） |

## Midnight の用語

| 用語 | 説明 | 訳し方 |
| --- | --- | --- |
| **Midnight** | Cardano のパートナーチェーンとして開発されている、データ保護（プライバシー）に重点を置いたチェーン。ゼロ知識証明で、**データを開示せずに正しさだけを証明する**取引を扱う | 訳さない |
| **NIGHT** | Midnight のトークン。ガバナンスと、DUST を生む元になる | 訳さない |
| **DUST** | Midnight で取引手数料を払うためのリソース。NIGHT を持つことで生成され、**それ自体は譲渡できない**設計として語られている。**「手数料が無料」ではない**ので書き方に注意 | 訳さない・初出で説明 |
| **Compact** | Midnight のスマートコントラクト言語 | 訳さない |
| **Glacier Drop** | NIGHT の初期配布の方式として発表されたもの。**時点によって段階が違う**ので、必ず公開日を添える | 訳さない |
| **MIP / MPS** | Midnight Improvement Proposal（改善提案）と Midnight Problem Statement（問題提起）。CIP / CPS と同じ 2 段構えで、**MPS は解決策を書かない**。リポジトリは <https://github.com/midnightntwrk/midnight-improvement-proposals> | 訳さない・初出で「問題提起」「改善提案」と補う |
| **MPS-0038** | "Operational Cost of Cardano Observation"。TxPipe の Santiago Carmuega が 2026-09-01 付で書き、09-02 にマージ（Draft）。Midnight ノードと「Cardano オブザーバー」の境界の仕様・差し替え可能なデータソース・適合テストを求める。**Dolos の採用を求める文書ではない** | 訳さない |
| **Fireside Dev Hang** | Midnight の公式チャンネルが配信している開発者向けのライブ枠。回ごとに独立 | 訳さない |
| **Substrate** | Midnight のノードが使っているブロックチェーン開発フレームワーク（Polkadot 系）。2026-09-02 の動画で本人が言及 | 訳さない・初出で補う |
| **連合型（federated）のバリデータ** | 2026-09 時点の Midnight は、あらかじめ選ばれた組織が運用する 13 のバリデータで動いている、と 2026-09-02 の動画で述べられた。**数は時点を添える** | 連合型（原語を添える） |
| **ZK（ゼロ知識証明）** | ある命題が正しいことを、その中身を明かさずに証明する暗号技術。Midnight の中核 | ゼロ知識証明（原語を添える） |

## 組織・プロダクト名

| 名前 | 説明 |
| --- | --- |
| **Input Output（IOG / IO）** | Cardano の中核開発企業。Charles Hoskinson が創業。**2025 年以降、ベンチャースタジオとしての性格を強めていると本人が語っている**（2026-07-26 A Dose of Alpha） |
| **Cardano Foundation** | スイスの財団。エコシステムの推進と、ネットワークの運営面を担う |
| **EMURGO** | Cardano の商業部門として発足した企業。**2026 年 7 月 8 日に the Pentad からの離脱を通知**（自社ウォレット SecondFi の事故対応に専念するため、と説明） |
| **Intersect** | Cardano のエコシステム組織（member-based organization）。ガバナンスの運営と、開発の調整を担う |
| **Midnight Foundation** | Midnight の財団 |
| **the Pentad** | Cardano の主要組織による共同の調整・実行体制。発足時は 5 組織（Input Output / Cardano Foundation / EMURGO / Midnight Foundation / Intersect）だが、**EMURGO の離脱後は 4 組織**。**「5 組織」と書く前に時点を確認する。**プロダクトでも新会社でもない |
| **Pogun** | Input Output が進める、Cardano 向けのエンドツーエンド型 Bitcoin DeFi 構想。音声認識では "Pogen" "Pogan" "poking" と出る。**2026-08-01 時点の提案上のロードマップ**（詳細は `2026RealFi` の glossary）。2026-09-02 の Block//45 では「ピアツーピアのクレジット市場」の側面が語られた |
| **RealFi / USDR** | Input Output の取り組み。USDR は利回り付きのステーブルコイン。**2026-08-26 の投票でティッカーは USDrf / sUSDrf に改称と決まった**が、7 月収録の動画では USDR。各回の表記は動画のとおりにし、書き換えない。詳細は `2026RealFi` の glossary |
| **Block//45** | Input Output Group の公式チャンネルにある番組。司会は Wendy O と Crypto Crow（外部の配信者）。回ごとに独立 |
| **AlphaGrowth** | DeFi の成長支援の会社。ポッドキャスト「A Dose of Alpha」を運営し、Cardano の PRIME 提案を出している |
| **USDM / Moneta** | Cardano ネイティブのドル建てステーブルコイン（2024-03 発行開始）。米国側の発行体は Moneta Digital、開発は W3i Software、CEO は Jillian Plomin。創業者 Matt Plomin は 2024-11-14 死去。EEA 側の共同発行者は NBX。ミントは 20 の州で可。公式: <https://moneta.global>。2026-08-13 に VIA Labs との協業で Cardano↔Midnight のネイティブ移動が mainnet で稼働（USDM 公式 X） |
| **NBX（Norwegian Block Exchange）** | ノルウェーの取引所。USDM の EEA 側の発行者で、MiCA 準拠の根拠。カード Visa Flex を USDM 残高と結びつけて再始動（2026-09-06 の動画と James の X）。字幕では MBX。公式: <https://nbx.com> |
| **VIA Labs** | クロスチェーンのメッセージング基盤。USDM の Cardano↔Midnight の移動を提供。James は「ブリッジではなくメッセージングサービス」と表現。字幕では Vlabs。公式: <https://vialabs.tech>（開発者ドキュメント developer.vialabs.tech） |
| **Dose of Alpha** | AlphaGrowth の番組。司会は Bryan Colligan（CEO）と Eric Waisanen（DeFi Strategist）。Ep. 16 が 2026-09-06 の回 |
| **Cardano PRIME** | Protocol Readiness, Incentives & Market Expansion。AlphaGrowth が提案者、独立した Operating Group が監督、Intersect が資金管理者。財務庫から 1 億 2,000 万 ADA（2026-08 に DRep の投票で可決）。目標は 12 か月で TVL を約 9,000 万→2 億 9,000 万ドル。2026-09-06 時点でインフラ監査（社内 77 ページ）の段階、RFP を「今日か明日」に開く、と運営者が発言。2026-09-10 の Cardano Over Coffee では、監査の結論として「1,140 万ドルの TVL が入ると全プロトコルの年率が半分になる」（運営者が「利回りの圧縮」と呼ぶ）、RFP は「助成 1 ドルにつき TVL 50 ドル」、助成はマイルストーン払いで透明性報告に受領者を載せる、と説明。監査のページ数は 09-06 で「77」、09-10 で「97」と食い違う |
| **Orion Fund** | Cardano と Draper Dragon による 8,000 万ドルのエコシステム・ファンド。Draper University の Genesis（プレアクセラレーター）と Apex（10 週間）に資金提供。字幕では Enriion Fund |
| **Draper University** | Tim Draper の起業家育成機関。Cardano 向けに Genesis と Apex を運営。2026-09-06 の動画で Bryan が「月曜と昨日サンフランシスコで」見たピッチはこのプログラム |
| **Masumi / Sokosumi** | Cardano 上の AI エージェントの決済・登録プロトコル（Masumi）と、その上のマーケットプレイス（Sokosumi）。Serviceplan、Cardano Foundation、NMKR の共同。x402 の Cardano 実装を公開。詳細は 2026RealFi の 2026-08-11 の回 |
| **ChatterPay** | WhatsApp 上のウォレット。ADA、USDCx、USDM を送れると公表。Draper University の Genesis に参加 |
| **Lava** | Cardano のリキッドステーキング。ADA をステークして L-ADA を受け取る。公式: <https://lava.markets> |
| **Gravity DEX** | 2026-09-06 で Bryan が「片側だけの AMM に見えた、Bitcoin の価格が良いと主張」と挙げた Cardano の DEX。公式サイトは未確認 |
| **Strike / Bodega / Fluid** | James が「USDM を日常的に使っているパートナー」として挙げた Cardano の DeFi。公式サイトは未確認 |
| **Indigo** | Cardano の CDP 型合成資産プロトコル。PRIME が「何かをやる」相手として挙げた |
| **Re（re.xyz）** | オンチェーン再保険プロトコル。2026-09-06 で「red.xyz」と聞こえた相手の候補（未確認） |
| **3Jane** | Ethereum 系の信用プロトコル。2026 年に「Levered Callable Capital」（キャピタルコールまで利回りを付けて待てる仕組み）を出した。公式: <https://www.3jane.xyz> |
| **Ethena Pay** | Ethena の決済アプリ（2026-09-01 発表）。USDe を残高に持ち Visa カードを発行 |
| **Stream Finance** | 2025-11 に外部運用者の約 9,300 万ドルの損失を開示し、xUSD が大きく下落。Elixir の deUSD も終了。2026-09-06 で Eric が「私たちの市場はエクスポージャーがなかった」と言及 |
| **Robinhood Chain** | Robinhood の Ethereum レイヤー 2（2026-07 メインネット）。トークン化株とミームコインの組み合わせが多数。2026-09-06 で Bryan が MicroStrategy の一件を語った |
| **Hermes（Hermes Agent）** | Nous Research のオープンソースの AI エージェント。Marco が自分のパソコンで動かし OpenRouter 経由で USDC で払っている、と述べた |
| **TxPipe** | アルゼンチン拠点の Cardano 向け開発ツール企業。Pallas（Rust ライブラリ群）、Oura（インデクサ）、Dolos（データノード）、Demeter（ホスティング、Blink Labs と共同運営）。公式: <https://txpipe.io>。RealFi 側の glossary では監査の協力先として出る |
| **Dolos** | TxPipe の Cardano「データノード」。1 バイナリで、ブロック生成・検証はせず、リレーにつないで台帳のコピーを組み込み DB に持ち、Blockfrost 互換・UTxO RPC・Kupo 互換・Ogmios 経由の API を出す。履歴は期間を決めて切り詰められる。公式ドキュメント: <https://docs.txpipe.io/dolos> |
| **Demeter** | TxPipe と Blink Labs が運営する Cardano の DApp 向けインフラ基盤。2026-09-02 のデモでは「Demeter のリレー」が接続先の選択肢として出た。公式: <https://demeter.run> |
| **Blink Labs** | Cardano のインフラ・ツール開発チーム。Demeter を TxPipe と共同運営。公式: <https://blinklabs.io>。2026-09-02 の動画で「link caps」と聞こえた名前の候補（未確認） |
| **OpenAI** | 2026-09-08 に「AI が Navier–Stokes のミレニアム問題を解いた」と発表。投稿: <https://x.com/OpenAI/status/2097374640582668336>、解説: <https://openai.com/index/navier-stokes-solution/>。懸賞金は請求しないと表明 |
| **Jay Cummings** | 数学の教科書で知られる数学者（カリフォルニア州立大学サクラメント校、PhD は UCSD 2016）。2026-09-08 に OpenAI の投稿を引用して「この証明に 1 年取り組んだのに、ただツイートされた」と投稿（<https://x.com/LongFormMath/status/2097404073406521691>）。Hoskinson はこれを字義どおりに読んだが、報道の先取権の話にこの名前は出てこない |
| **Tristan Buckmaster / Levent Alpöge** | 報道で「先に取り組んでいた」として名前が出る 2 人（NYU の数学者と、Anthropic 所属の研究者）。2026 年 8 月に AI を使って Euler 方程式の関連する結果に到達、09-07 に公表。Hoskinson の動画には出てこない |
| **Clay Mathematics Institute** | ミレニアム懸賞問題を出している米国の私設研究所。公式: <https://www.claymath.org/> |
| **Monument Health** | サウスダコタ州を拠点にする医療システム。Hoskinson は「Mayo の関連機関」と紹介し、ワイオミング州 Gillette の自分たちの建物を引き継いでいると述べた（2026-09-09） |
| **Cardano Foundation のリレー** | 2026-09-02 のデモで "CF relays" として、Demeter と並ぶ接続先の選択肢に出た |
| **Cardano Over Coffee（@coc_space）** | X スペースで平日毎朝配信されているコミュニティの番組。司会は回によって替わる（2026-09-10 の回は Christina、共同司会 James と Chad）。番組のアカウント: <https://x.com/coc_space>。録音が公開されている回だけを扱う。2026-09-10 の回の録音: <https://x.com/i/spaces/1yKAPwbXnNWxb>（題は「Cardano Over Coffee ☕️ w/ guests @CryptoJoe101 & @alphagrowth1」） |
| **PRIME の Operating Group（運営グループ）** | PRIME の提案で AlphaGrowth を監督するとされた独立の合議体。2026-09-10 の回で、司会の Christina が「私も入っている」と述べ、AlphaGrowth 側も「運営グループの前に立つ」と表現した。構成員の一覧は動画では語られていない |
| **Cardano Dev Skills** | 作者は Giovanni（X: @CryptoJoe101、表示名「Giovanni EASY1」、ステークプール EASY1 の運営者）。Cardano Foundation の公開リポジトリ（<https://github.com/cardano-foundation/cardano-dev-skills>）。Claude Code のプラグイン／Codex のスキルとして、Cardano の最新の文書を AI コーディングエージェントに渡す「知識ベース」。週次で自動更新、と作者の Giovanni が 2026-09-10 に説明。教育チームの Bora は「新しい開発者を獲得するコストが下がるか」が唯一の KPI と述べた |
| **MCP（Model Context Protocol）** | AI エージェントに外部のツールやデータを渡すための共通の規格。2026-09-10 の回で Giovanni が「Solana 側には MCP サーバーの知識ベースがあると言われて作り始めたが、Phil に『MCP サーバーは使うな』と助言され、スキルの形式にした」と経緯を語った。MCP は「知識の共有ではなく遠隔で何かを実行するためのもの」で部分的な答えでエージェントを混乱させる、というのが Giovanni の説明。2026-09-02 の Block//45 では Lace の連携先として出た |
| **Blink Labs / Dingo** | Blink Labs は Cardano のインフラ・ツール開発チーム（上の行も参照）。Dingo は同社の Go 言語による Cardano ノード実装。2026-09-10 の司会 Christina と参加者 Chris の所属 |
| **Team Void** | ノルウェーの DRep チーム。2026-09-10 で Ken Eric が名乗った所属。公式サイトは未確認 |
| **Pragma** | Cardano のオープンソース開発の団体（Amaru、Aiken などを擁する）。2026-09-10 で Christina（「Pragma で騒ぎを起こしている」と自称）が「Robertino のプロジェクトが Pragma のプロジェクトとして受け入れられた」「Cardano Ignite を Pragma のサイトに載せた」と述べた。Beatrice は Pragma の会合の記録を読んでいる側として会話に加わった。公式: <https://pragma.builders>（2026-09-11 に確認。Aiken、Amaru を掲載） |
| **Amaru** | Pragma の Rust による Cardano ノード実装。2026-09-10 で Ryan が「数か月から 1 年で出て、RAM は数 GB で済むだろう」と述べ、Christina が「Leios より先に出ても Leios を実装しなければならない」と補った |
| **Harmonic Labs / Pebble** | Harmonic Labs は Cardano の開発ツールのチーム（plu-ts など）。Pebble はそのスマートコントラクト言語。2026-09-10 の Cardano Dev Skills の対応言語として名前が出た |
| **Scalus** | Scala による Cardano のスマートコントラクト開発環境。同上 |
| **Tx3** | TxPipe のトランザクション記述言語。同上 |
| **GameChanger / GCScript** | Cardano のウォレット GameChanger と、その取引記述の DSL。2026-09-10 で参加者 Gamechanger が「GCScript DSL」を Cardano Dev Skills に載せたいと発言。字幕では GS Script |
| **OpenZeppelin** | Ethereum 系で知られるスマートコントラクトのライブラリとセキュリティ監査の企業。2026-09-10 で参加者が「約 1,100 万（単位は発言にない）のガバナンス提案が出ている、12 か月のセキュリティ人員を含む」と述べたが、こちらで提案文書は未確認 |
| **Cardano Ignite** | Robertino Martinez（IOG）のプロジェクト。2026-09-10 で「Pragma のプロジェクトとして受け入れられ、オンボーディング中」と Christina が述べた。中身（イベントか、開発者体験の取り組みか）はこの回では説明されていない |
| **Developer Experience Initiative** | IOG の Robertino Martinez が提案した 360 万 ADA の開発者体験の提案。2026 年 4〜5 月の投票で可決（67.9%）。2026-09-10 で OpenZeppelin の提案の比較対象として名前が出た |
| **Dijkstra / DijkstraNet / MusashiNet** | Dijkstra は Cardano の次のハードフォークの名前。DijkstraNet はそのテストネット、MusashiNet は Leios のテストネット。2026-09-11 時点の見込み: ハードフォークは 2026-12-05〜2027-01-04（中程度の確度）、2027-02-24〜03-26（高い確度）。2026-09-10 で Serg が「node 11.1 は間近、11.2 は Dijkstra 向け」と述べ、cardano-node 11.1.1 は 09-06 までに公開済み |
| **Merkl** | DeFi のインセンティブ配布基盤。2026-09-10 で Eric が「Cardano にない部品」の例として挙げた |
| **Linear Leios** | Leios（Cardano のスループット拡張）の段階的な設計の 1 つ。字幕では "linear claims" |

## 数字を書くときの単位

**桁だけを書かない。必ず単位を付ける。**英語の "seven figure" をそのまま「7 桁」と訳すと、**日本語の読者は円で読む**。

- ×「7 桁の資金」 → ○「**7 桁ドル**の資金（100 万ドル以上）」
- **通貨が自明でも書く。**ADA なのかドルなのかを読者が知っている前提を置かない
- **桁で語られたら、一度は実数に開いて添える**

## 翻訳の方針

- **プロダクト用語・チェーン名・組織名は訳さない**
- **外部プロトコルに URL を張るときは公式ドメインを毎回確認する。**DeFi は偽サイトが多く、1 文字違いで読者を危険な場所に送る。**うろ覚えで張らない。**使った先はこのファイルに記録する
- **testnet / mainnet** はそのまま。1 本の中では統一する
- **監視・運用の用語**（2026-09-02 で整理）— mean time to acknowledgement は「平均認知時間」、mean time to resolution は「平均復旧時間」、runbook は「ランブック（対応手順書）」、debounce は「デバウンス（連続確認）」、page は「呼び出す」、observability は「可観測性」。**要点では「通知が届くまでの時間」「対応手順書」のように平易に書く**
- 話者の発言は「ですます調」で訳す。口語のフィラーは落とす
- 断定していない発言（"I think", "probably", "hopefully"）は**日本語でも断定しない**
- **`.thesis` と `.tldr` では業界用語を平易な語に置き換える。**置き換えた語は、上の表の「訳し方」の欄に「要点では〜と書く」まで記録する
