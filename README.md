# 2025 Portfolio Hub
_QA / SDET / LLM 成果物をまとめた可視化ポータル_


[![Tests][badge-tests]][ci-workflow]
[![Lint][badge-lint]][lint-workflow]
[![CodeQL](https://github.com/RNA4219/portfolio/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/RNA4219/portfolio/actions/workflows/codeql.yml)
[![Pages](https://img.shields.io/website?url=https%3A%2F%2Frna4219.github.io%2Fportfolio%2F&label=pages)](https://rna4219.github.io/portfolio/)
[![Coverage](https://img.shields.io/github/actions/workflow/status/RNA4219/portfolio/coverage.yml?branch=main&label=coverage)](https://github.com/RNA4219/portfolio/actions/workflows/coverage.yml)
[![Release](https://img.shields.io/github/v/release/RNA4219/portfolio?display_name=tag&sort=semver)](https://github.com/RNA4219/portfolio/releases)
[![QA Snapshot](https://img.shields.io/badge/QA%20Snapshot-Auto%20weekly-6f42c1?logo=github)](https://rna4219.github.io/portfolio/reports/latest.html)

[GitHub Pages Dashboard](https://rna4219.github.io/portfolio/) → [Coverage HTML](https://rna4219.github.io/portfolio/reports/coverage/) ・ [Weekly Summary](https://rna4219.github.io/portfolio/weekly-summary.html)

[badge-tests]: https://img.shields.io/github/actions/workflow/status/RNA4219/portfolio/ci.yml?branch=main&label=tests
[ci-workflow]: https://github.com/RNA4219/portfolio/actions/workflows/ci.yml
[badge-lint]: https://img.shields.io/github/actions/workflow/status/RNA4219/portfolio/lint.yml?branch=main&label=lint
[lint-workflow]: https://github.com/RNA4219/portfolio/actions/workflows/lint.yml


<!-- qa-metrics:start -->
| 指標 | 値 |
|------|----|
| Pass Rate | 100.00% (134/134) |
| Top Flaky | データなし |
| 最終更新 | 2025-09-29T10:38:40.894000Z |
| レポート | [最新レポートを見る](https://rna4219.github.io/portfolio/reports/latest.html) |

直近3回の差分:
- local_1759142320 (2025-09-29T10:38:40.894000Z): Pass Rate 100.00% (±0.00pp) / Flaky 0件 (±0)
- local_20250923T074605Z_20_20250923074606 (2025-09-23T07:46:06.005000Z): Pass Rate 100.00% (±0.00pp) / Flaky 0件 (±0)
- local_20250923T074604Z_19_20250923074604 (2025-09-23T07:46:04.396000Z): Pass Rate 100.00% (±0.00pp) / Flaky 0件 (±0)

<!-- qa-metrics:end -->
<sub>※週次ワークフロー (`weekly-qa-summary.yml`) が `tools/update_readme_metrics.py` で自動更新します。手動で反映する場合は `python tools/update_readme_metrics.py --source artifacts/runs-metrics.jsonl --report-url https://rna4219.github.io/portfolio/reports/latest.html --write` を実行してください。</sub>


> 🔎 最新CIレポート: [JUnit要約][junit-report] / [Flakyランキング][flaky-report] / [Coverage HTML][coverage-report]

[junit-report]: https://rna4219.github.io/portfolio/reports/junit/index.html
[flaky-report]: https://rna4219.github.io/portfolio/reports/flaky/index.html
[coverage-report]: https://rna4219.github.io/portfolio/reports/coverage/index.html

> QA × SDET × LLM の実践ポートフォリオ。小さく完結した自動化パイプラインを公開。 / Practical QA × SDET × LLM portfolio featuring compact automation pipelines.

- **Website:** <https://rna4219.github.io/portfolio/> — Portfolio Gallery on GitHub Pages
- **行動規範:** [Contributor Covenant v2.1](CODE_OF_CONDUCT.md)
- **Docs Deploy:** `.github/workflows/pages.yml` が `docs/` をビルド&公開（追加の Pages ワークフローは不要）
- **CI:** `.github/workflows/ci.yml` が Node/Python の回帰と LLM Adapter Shadow を `push`／`pull_request`／`workflow_dispatch` で実行。
- **Topics:** `qa`, `sdet`, `playwright`, `llm`, `pytest`, `github-actions`, `devcontainers`, `codeql`

Quick Start はこちら → [Quick Start (JA / EN)](#quick-start-ja--en).

### Quick Start (JA / EN)

ハンズオンな QA × SDET × LLM パイプラインを継続公開しています。 / Hands-on portfolio showcasing QA × SDET × LLM automation pipelines, continuously published via GitHub Pages.

- **`just setup`** — Node.js / Python 依存と Playwright スタブを初期化します。 / Initialize Node.js & Python dependencies alongside Playwright stubs.
- **`just test`** — Node＋Python の回帰テストを一括で実行します。 / Run combined regression across Node and Python projects.
- **`just lint`** — JavaScript の構文チェックと Python バイトコード検証を行います。 / Execute JavaScript linting and Python bytecode validation.
- **`just report`** — Python プロジェクトのテスト＋カバレッジレポートを生成します。 / Produce pytest coverage reports for the Python adapter.
- **`just openrouter-stream-probe -- --dry-run`** — OpenRouter のストリーミングプローブを CLI 引数付きで実行します。 / Launch the OpenRouter streaming probe with passthrough CLI flags.
- **`just openrouter-stats -- --since 2024-01-01`** — OpenRouter 障害メトリクスを `artifacts/openrouter` に出力します。 / Export OpenRouter failure metrics into `artifacts/openrouter`.
- **GitHub Pages** — <https://rna4219.github.io/portfolio/> — 公開ギャラリー。 / Public gallery on GitHub Pages.

### GitHub Pages 公開 / 復旧手順

- 公開 URL: <https://rna4219.github.io/portfolio/>
- 復旧手順:
  1. GitHub Actions → Pages ワークフローを `Run workflow` で再実行し、`Build with Jekyll` と `Deploy to GitHub Pages` の両ステップが `Completed` になったことを実行ログで確認。
  2. ビルド失敗時はローカルで `bundle exec jekyll build --source docs --destination _site` を実行しエラー箇所を修正。
  3. 修正を `main` ブランチへプッシュすると自動でデプロイが再開されます。

---

> [!TIP] Quick Start
> Quick Start はこちら → [Quick Start (JA / EN)](#quick-start-ja--en) — JA/EN 併記のセットアップ手順を掲載。 / Jump to the JA/EN Quick Start section for setup steps.
>
> ✅ ローカル環境の準備が必要な場合は [ローカルセットアップ (Local onboarding)](#ローカルセットアップ-local-onboarding) も併せて確認してください。

---

## 概要 (Overview)

QA × SDET × LLM を軸にした実践的ポートフォリオで、テスト自動化やLLM活用のPoCを継続的に追加していきます。
GitHub Pages の [Portfolio Gallery](docs/index.md) ではサマリと成果物を常時公開しています。

Practical portfolio focusing on **QA × SDET × LLM**.
New automation pipelines and LLM-driven PoCs are published regularly, with a persistent [Portfolio Gallery](docs/index.md) available via GitHub Pages.

---

## プロジェクト一覧 (Projects)

1. **01: spec2cases-md2json — Markdown → JSON（決定的）**  
   LLMを使わず、Markdown仕様を**決定的に**テストケースJSONへ変換します。

2. **02: blueprint-to-playwright — Blueprint → Playwright（決定的）**  
   受け入れ基準の blueprint から、**決定的に** `.spec.ts` を生成しスタブ実行します。

3. **03: ci-flaky-analyzer — JUnit → HTML/CSV（決定的）**  
   CIのJUnitログを取り込み、flaky挙動を集計・可視化します。

4. **04: llm-adapter — LLMモデル選択/比較（唯一のLLM使用箇所）**
   複数プロバイダを並走させ、差分・フォールバック・異常系を検証します。

   **最短コマンドと入出力例:**

   ```bash
   llm-adapter --provider adapter/config/providers/openai.yaml \
     --prompts examples/prompts/ja_one_liner.jsonl --out out/
   ```

   * `examples/prompts/ja_one_liner.jsonl`

     ```jsonl
     {"prompt": "日本語で1行、自己紹介して"}
     ```

   * `out/metrics.jsonl`（一例）

     ```jsonl
     {"provider": "openai", "model": "gpt-4o-mini", "latency_ms": 812, "status": "ok", "prompt_sha256": "d16a2c…", "output": "こんにちは、QAエンジニアのRyです。"}
     ```

### LLM使用ポリシー（重要）

- **01 / 02 / 03 は LLM を使用しません（決定的処理）**  
  同じ入力から常に同じ出力が得られます。CI向きです。
- **LLM を使うのは 04 のみ**  
  モデル選択・比較・フォールバック・shadow実行など、確率的要素は **04 に集約**しています。

### 1. 仕様書テキスト → 構造化テストケース → CLIで自動実行

* `docs/examples/spec2cases/spec.sample.md` のような Markdown からテストケース JSON を生成。

  ```bash
  npm run spec:generate
  # => projects/01-spec2cases-md2json/cases.generated.json を出力
  ```
* 内蔵の軽量バリデータで JSON 構造を検証。

  ```bash
  npm run spec:validate -- projects/01-spec2cases-md2json/cases.generated.json
  ```
* CLI からテストケースを読み込み、タグや ID でフィルタして擬似実行。

  ```bash
  npm run spec:run -- projects/01-spec2cases-md2json/cases.generated.json --tag smoke
  ```

  * `--tag` や `--id` で絞り込めるため、スモークテスト／個別ケースを即座に確認可能。
  * 期待値や手順が欠落している場合は失敗としてサマリに計上し、仕様漏れを検知。

→ 詳細: [Spec2Cases CLI README](projects/01-spec2cases-md2json/README.md)

### 2. LLM設計 → Playwright E2E テスト自動生成

* `docs/examples/llm2pw/blueprint.sample.json` をもとにテストコードを自動生成。

  ```bash
  npm run e2e:gen
  ```

  * シナリオごとに ID/タイトル・セレクタ・テストデータ・アサーションをチェックし、欠損時は即エラー。
  * `url:`/`text:` 形式のアサーションはそれぞれ `toHaveURL`／`getByText().toBeVisible()` に変換。
* 生成されたテストは `projects/02-blueprint-to-playwright/tests/generated/` に配置され、同梱の Playwright 互換スタブでシナリオを検証。

  ```bash
  npm test
  ```

  * スタブランナーは静的デモの遷移と文言を解析し、`junit-results.xml` / `test-results/` を生成。
  * CI ではこれらの成果物を `npm run ci:analyze` / `npm run ci:issue` へ渡して履歴管理を行う。
  * `projects/02-blueprint-to-playwright/tests/README.md` にテスト生成時の**セレクタ・ガード方針**や**ビジュアル／a11y スモーク**の運用メモを記載。`login-cases.json` / `a11y-pages.csv` を編集するだけでデータドリブンにシナリオを増やせる構成とした。

→ 詳細: [LLM → Playwright Pipeline README](projects/02-blueprint-to-playwright/README.md)

### 3. CI ログ解析と flaky テスト検出

* JUnit XML を解析して履歴 DB (`database.json`) を更新。

  ```bash
  npx flaky parse --input path/to/junit-xml/ --run-id demo_001 --branch main --commit deadbeef
  ```

  * Node.js のみで動作する軽量 XML パーサーを実装し、外部依存なしでレポートを吸収。
  * 直近 5 件の実行から fail→pass を検知すると flaky として表示。
  * 直近で fail→pass したテストを Markdown で出力し、Issue 化に利用。

  ```bash
  npx flaky analyze --config projects/03-ci-flaky/config/flaky.yml
  npm run ci:issue
  ```

  * 失敗率や平均時間、直近 10 実行のタイムラインを含むレポートを生成。
  * 解析結果は `projects/03-ci-flaky/out/`（HTML/CSV/JSON）に出力され、CI 実行時はアーティファクトとして取得できる。

→ 詳細: [Flaky Analyzer CLI README](projects/03-ci-flaky/README.md)

### 4. llm-adapter — Multi Provider CLI (Core)

**概要**
複数プロバイダの応答を比較・記録・可視化する**本体 CLI**（`projects/04-llm-adapter`）。Shadow 実行を前提にせず、`llm-adapter` コマンドから直接プロダクション想定のリクエストを発行し、レイテンシ・トークン数・コスト・失敗分類などを JSON/JSONL で取得します。

**セットアップ**

```bash
cd projects/04-llm-adapter
python3 -m venv .venv && source .venv/bin/activate   # Windows: .\.venv\Scripts\activate
pip install -r requirements.txt
pip install -e .
```

**CLI クイックスタート**

```bash
llm-adapter --provider adapter/config/providers/openai.yaml \
  --prompt "日本語で1行、自己紹介して" --format json
```

```json
{
  "provider": "openai", "model": "gpt-4o-mini", "latency_ms": 480,
  "input_tokens": 21, "output_tokens": 34, "status": "ok"
}
```

JSONL バッチを処理する場合は次のように指定します。

```bash
llm-adapter --provider adapter/config/providers/openai.yaml \
  --prompts examples/prompts/ja_one_liner.jsonl \
  --out out/ --format jsonl --json-logs
```

出力は `out/metrics.jsonl`（および `out/logs/` 配下の詳細ログ）として生成されます。

**収集メトリクス（代表）**

* ベース指標：`latency_ms`, `input_tokens`, `output_tokens`, `cost_usd`, `status`, `error`
* 追跡用：`prompt_sha256`, `endpoint`, `provider`, `model`
* 追加設定：`--parallel`, `--rpm`, `--aggregate`, `--tie-breaker`, `--judge` などで比較モードや再試行を制御

**just との連携**

* `just setup` — 仮想環境と依存関係を初期化し、`pip install -e .` まで一括実行。
* `just test` — Node/Python 回帰の一括実行。Python 側は `projects/04-llm-adapter/tests` を対象。
* `just lint` — JavaScript の構文検証と `projects/04-llm-adapter` のバイトコード検証。
* `just report` — Python テスト＋カバレッジ計測後に週次サマリを生成。
* `just openrouter-stream-probe -- --dry-run` — OpenRouter ストリーミング確認用のプローブ。
* `just openrouter-stats -- --since 2024-01-01` — OpenRouter 429/5xx 集計を `artifacts/openrouter` へ出力。

**レガシー補足**

* 影実行と障害注入に特化した旧 shadow 版は v0.2 系の Git 履歴に残してあります。現行の primary/shadow 並走は README 冒頭の `just test` → Python 回帰フローからたどれる導線で確認してください。

---

## リリース (Releases)

- 最新: [v1.0.0 – ポートフォリオ統合リリース](docs/releases/v1.0.0.md) — [GitHub Releases 一覧](https://github.com/RNA4219/portfolio/releases)

### マイルストーン一覧

1. **[v1.0.0 – ポートフォリオ統合リリース](docs/releases/v1.0.0.md)** — 4 本の自動化パイプラインと CI / Pages / Releases の公開フローを整備し、ポートフォリオ全体を横断的に参照できるようにしました。
2. **[v0.3 – flaky検出＋週次サマリ](docs/releases/v0.3.md)** — 週次 QA サマリ（README 自動更新）と CI レポート公開を整備し、Pages／Releases から参照できるようにしました。
3. **[v0.2 – LLMアダプタ（shadow/fallback）最小版](docs/releases/v0.2.md)** — Python 製 LLM アダプタを追加し、shadow 実行とフォールバック検証を pytest / GitHub Actions で自動化しました。
4. **[v0.1 – 初期プロジェクト群](docs/releases/v0.1.md)** — テキスト仕様 → テストケース生成、LLM→Playwright 自動化、CI ログ解析の 3 パイプラインを公開しました。

### リリース運用手順

1. 直近のマイルストーンを `docs/releases/` に追記し、変更点・テスト・関連ドキュメントを整理。
2. 対象コミットに注釈付きタグを作成: `git tag -a vX.Y <commit> -m "vX.Y – サマリ"`
3. `gh release create vX.Y --verify-tag --notes-file docs/releases/vX.Y.md` で GitHub Releases を公開し、README の最新リンクを更新。
4. タグと README 更新を `git push --follow-tags` で共有。


---

## ローカルセットアップ (Local onboarding)

Quick Start で触れた `just` コマンドを詳しく説明します。セットアップの前後関係や内部で呼び出すスクリプトの構成を把握したい場合に参照してください。

1. `just setup` で Node.js / Python 依存と Playwright ブラウザスタブをまとめて初期化します。
   * `.cache/` を共有キャッシュとして利用し、npm と pip のダウンロードを再利用します。
   * `.venv/` に Python 3.11 の仮想環境を自動作成します。
2. `just test` で CI 相当の検証を一括実行できます。
   * Node 側: 仕様ケースの検証 → E2E テスト生成 → デモサーバー起動 → Playwright スタブ実行 → JUnit 解析/レポート生成。
   * Python 側: `projects/04-llm-adapter/tests` の pytest を実行。
3. `just lint` / `just report` でワンコマンド lint / カバレッジ計測が可能です。
4. `pre-commit install` で Git フックを有効化し、初回は `pre-commit run --all-files` で一括検証できます。

VS Code Dev Container を利用する場合は `devcontainer.json` の postCreateCommand で自動的に `just setup` が走ります。

## 環境 (Environment)

* Node: v24.6.0 (fnm)
* Python: 3.11+ (uv)
* CI: GitHub Actions
* Node.js 標準ライブラリのみで動く CLI を採用。`just setup`（内部で `npm ci` / `pip install` などを実行）は Playwright 実行時のみ必要。

## セットアップ & テスト (Setup & Test)

開発環境は VS Code Dev Containers に対応しています。`devcontainer.json` と `.devcontainer/Dockerfile` を利用することで、Node.js と Playwright 拡張が揃った環境が自動構築されます。

ローカル／Dev Container のいずれでも、以下の 2 コマンドで依存関係の導入からテスト実行まで完結します。

```bash
just setup
just test
```

### 品質ゲート (Quality Gates)

Python 側の静的解析・型チェック・テストは CI で `ruff` / `mypy(strict)` / `pytest` を採用しています。ローカルでも以下を実行すると同じ品質ゲートを再現できます（`uv tool run` が利用できない環境では `pipx run` や仮想環境への直接インストールに置き換えてください）。

```bash
uv tool run ruff check .
uv tool run mypy --config-file pyproject.toml projects/04-llm-adapter
uv tool run pytest projects/04-llm-adapter/tests
```

---

## 今後 (Next Steps)

* 各プロジェクトのサンプルコードを追加
* メトリクスや成果（工数削減、安定化率など）をREADME内に明記
* 英語ツアー動画と GitHub Pages での追加デモを整備

*Add more sample code for each project, include metrics/results (e.g., effort reduction, stability rate), and produce English walkthrough videos plus extra demos on GitHub Pages.*


---

## AI利用に関する開示 / AI Usage Disclosure

### 日本語
本リポジトリのコードおよびドキュメントは、**AI支援**（GitHub Copilot、ChatGPT 等）を用いて作成しています。  
設計・統合・最終判断は作者が行い、**コミット前に人手でレビュー・編集・検証**しています。出力は CI（テスト／Lint／CodeQL 等）で継続的に確認しています。

- **機密・個人情報**は AI ツールに投入していません。
- **ライセンス適合・重複**については可能な範囲で確認しています。
- 外部成果物やプロンプト由来の要素がある場合は、必要に応じて **CREDITS.md／LICENSE** に出所を記載します。
- 必要に応じ、コミット末尾に由来を示すトレーラー（例：`AI-Generated: partial|substantial` / `AI-Tools: copilot, chatgpt`）を付すことがあります.

### English
Code and documents in this repository are created **with AI assistance** (e.g., GitHub Copilot, ChatGPT).  
Design, integration, and final decisions remain the author’s responsibility. **All changes are human-reviewed and validated** prior to commit and continuously checked in CI (tests/lint/CodeQL).

- **No proprietary or personal data** is provided to AI tools.
- **License compliance and duplication** are checked to a reasonable extent.
- Where appropriate, sources are noted in **CREDITS.md / LICENSE**.
- Commit trailers may be used to indicate provenance (e.g., `AI-Generated: partial|substantial`, `AI-Tools: copilot, chatgpt`).

## QAロール定義 / QA Role Definition
### 日本語
このリポジトリでは、AIエージェントによる自動開発を行っていますが、
人間のオーナーは 品質保証（QA）および検証責任者 の立場で運用しています。

- 受け入れ基準（Acceptance Criteria）およびレビュー方針を定義する
- 設計およびテストカバレッジの整合性を検証する
- AIが生成した成果物を、QA憲章（QA Charter）に基づき監督・承認する

## QA Role Definition
This repository automates development via AI agents, but the human owner operates in a **QA and verification capacity**:
- Defines acceptance criteria and review policies
- Validates design/test coverage integrity
- Oversees AI-generated deliverables under the QA charter


