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

**特定できなかった名前は聞こえたまま残し、まとめページで「名前だけ挙がって説明されなかった」と事実として書く。**

回ごとの誤変換は、下に見出しを足して追記する。

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

## Midnight の用語

| 用語 | 説明 | 訳し方 |
| --- | --- | --- |
| **Midnight** | Cardano のパートナーチェーンとして開発されている、データ保護（プライバシー）に重点を置いたチェーン。ゼロ知識証明で、**データを開示せずに正しさだけを証明する**取引を扱う | 訳さない |
| **NIGHT** | Midnight のトークン。ガバナンスと、DUST を生む元になる | 訳さない |
| **DUST** | Midnight で取引手数料を払うためのリソース。NIGHT を持つことで生成され、**それ自体は譲渡できない**設計として語られている。**「手数料が無料」ではない**ので書き方に注意 | 訳さない・初出で説明 |
| **Compact** | Midnight のスマートコントラクト言語 | 訳さない |
| **Glacier Drop** | NIGHT の初期配布の方式として発表されたもの。**時点によって段階が違う**ので、必ず公開日を添える | 訳さない |
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
| **Pogun** | Input Output が進める、Cardano 向けのエンドツーエンド型 Bitcoin DeFi 構想。音声認識では "Pogen" と出る。**2026-08-01 時点の提案上のロードマップ**（詳細は `2026RealFi` の glossary） |
| **AlphaGrowth** | DeFi の成長支援の会社。ポッドキャスト「A Dose of Alpha」を運営し、Cardano の PRIME 提案を出している |

## 数字を書くときの単位

**桁だけを書かない。必ず単位を付ける。**英語の "seven figure" をそのまま「7 桁」と訳すと、**日本語の読者は円で読む**。

- ×「7 桁の資金」 → ○「**7 桁ドル**の資金（100 万ドル以上）」
- **通貨が自明でも書く。**ADA なのかドルなのかを読者が知っている前提を置かない
- **桁で語られたら、一度は実数に開いて添える**

## 翻訳の方針

- **プロダクト用語・チェーン名・組織名は訳さない**
- **外部プロトコルに URL を張るときは公式ドメインを毎回確認する。**DeFi は偽サイトが多く、1 文字違いで読者を危険な場所に送る。**うろ覚えで張らない。**使った先はこのファイルに記録する
- **testnet / mainnet** はそのまま。1 本の中では統一する
- 話者の発言は「ですます調」で訳す。口語のフィラーは落とす
- 断定していない発言（"I think", "probably", "hopefully"）は**日本語でも断定しない**
- **`.thesis` と `.tldr` では業界用語を平易な語に置き換える。**置き換えた語は、上の表の「訳し方」の欄に「要点では〜と書く」まで記録する
