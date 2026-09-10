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
