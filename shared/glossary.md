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
| **MCP / CLI** | AI エージェントがソフトウェアを操作するための接続口（Model Context Protocol、コマンドライン）。Crypto Crow が「エージェントを Lace につなぐ計画は」の文脈で挙げた | 訳さない・初出で補う |

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
| **TxPipe** | アルゼンチン拠点の Cardano 向け開発ツール企業。Pallas（Rust ライブラリ群）、Oura（インデクサ）、Dolos（データノード）、Demeter（ホスティング、Blink Labs と共同運営）。公式: <https://txpipe.io>。RealFi 側の glossary では監査の協力先として出る |
| **Dolos** | TxPipe の Cardano「データノード」。1 バイナリで、ブロック生成・検証はせず、リレーにつないで台帳のコピーを組み込み DB に持ち、Blockfrost 互換・UTxO RPC・Kupo 互換・Ogmios 経由の API を出す。履歴は期間を決めて切り詰められる。公式ドキュメント: <https://docs.txpipe.io/dolos> |
| **Demeter** | TxPipe と Blink Labs が運営する Cardano の DApp 向けインフラ基盤。2026-09-02 のデモでは「Demeter のリレー」が接続先の選択肢として出た。公式: <https://demeter.run> |
| **Blink Labs** | Cardano のインフラ・ツール開発チーム。Demeter を TxPipe と共同運営。公式: <https://blinklabs.io>。2026-09-02 の動画で「link caps」と聞こえた名前の候補（未確認） |
| **Cardano Foundation のリレー** | 2026-09-02 のデモで "CF relays" として、Demeter と並ぶ接続先の選択肢に出た |

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
