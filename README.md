# QA × SDET × LLM Portfolio

[![Tests](https://img.shields.io/github/actions/workflow/status/RNA4219/portfolio/ci.yml?branch=main&label=tests)][ci-workflow]
[![Lint](https://img.shields.io/github/actions/workflow/status/RNA4219/portfolio/lint.yml?branch=main&label=lint)][lint-workflow]
[![CodeQL](https://github.com/RNA4219/portfolio/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/RNA4219/portfolio/actions/workflows/codeql.yml)
[![Pages](https://img.shields.io/website?url=https%3A%2F%2Frna4219.github.io%2Fportfolio%2F&label=pages)](https://rna4219.github.io/portfolio/)
[![Release](https://img.shields.io/github/v/release/RNA4219/portfolio?display_name=tag&sort=semver)](https://github.com/RNA4219/portfolio/releases)

[ci-workflow]: https://github.com/RNA4219/portfolio/actions/workflows/ci.yml
[lint-workflow]: https://github.com/RNA4219/portfolio/actions/workflows/lint.yml

**[GitHub Pages](https://rna4219.github.io/portfolio/)** | **[Coverage Report](https://rna4219.github.io/portfolio/reports/coverage/)** | **[Weekly Summary](https://rna4219.github.io/portfolio/weekly-summary.html)**

---

## Quick Start (Windows)

### 初回セットアップ
```
00_Setup.bat をダブルクリック
```

### 全テスト実行
```
01_Test-All.bat をダブルクリック
```

### 個別デモ
| ファイル | 内容 |
|----------|------|
| `02_Demo-Spec2Cases.bat` | Markdown → JSON テストケース生成 |
| `03_Demo-Playwright.bat` | Blueprint → Playwright テスト生成 |
| `04_Demo-Flaky.bat` | CI ログ解析・Flaky 検出 |
| `05_Demo-LLM-Adapter.bat` | LLM プロバイダ統合テスト |

---

## Quick Start (CLI)

```bash
# セットアップ
npm ci
pip install -r projects/04-llm-adapter-shadow/requirements.txt

# 全テスト実行
npm run spec:validate && npm run e2e:gen && npm test
pytest projects/04-llm-adapter/tests -v
```

---

## プロジェクト一覧

| # | プロジェクト | 機能 | LLM使用 |
|---|-------------|------|---------|
| 01 | **spec2cases-md2json** | Markdown仕様書 → JSONテストケース | ❌ 決定的 |
| 02 | **blueprint-to-playwright** | Blueprint → Playwrightテスト自動生成 | ❌ 決定的 |
| 03 | **ci-flaky-analyzer** | JUnit解析 → Flaky検出・レポート生成 | ❌ 決定的 |
| 04 | **llm-adapter** | 複数プロバイダ比較・フォールバック | ✅ |

---

## 品質メトリクス

| 指標 | 値 |
|------|-----|
| Pass Rate | 100% (134/134) |
| Flaky Tests | 0件 |
| カバレッジ | 90%+ |

---

## 環境要件

| 項目 | バージョン |
|------|-----------|
| Node.js | 24.6.0+ |
| Python | 3.11+ |
| OS | Windows / Linux / macOS |

---

## プロジェクト詳細

### 01: Spec to Cases (決定的)

Markdown仕様書からJSONテストケースを生成・検証・実行。

```bash
npm run spec:generate                          # 生成
npm run spec:validate                          # 検証
npm run spec:run -- cases.json --tag smoke    # 実行
```

→ [詳細](projects/01-spec2cases-md2json/README.md)

### 02: Blueprint to Playwright (決定的)

Blueprint JSONからPlaywrightテストを自動生成。

```bash
npm run e2e:gen    # テスト生成
npm test           # スタブ実行
```

→ [詳細](projects/02-blueprint-to-playwright/README.md)

### 03: CI Flaky Analyzer (決定的)

JUnit XMLを解析し、Flakyテストを検出・可視化。

```bash
npm run ci:analyze    # 解析・レポート生成
npm run ci:issue      # Issueテンプレート生成
```

→ [詳細](projects/03-ci-flaky/README.md)

### 04: LLM Adapter

複数LLMプロバイダを統合し、比較・フォールバックを検証。

```bash
# セットアップ
cd projects/04-llm-adapter
pip install -e .

# 実行例
llm-adapter --provider adapter/config/providers/openai.yaml \
  --prompt "こんにちは" --format json
```

→ [詳細](projects/04-llm-adapter/README.md)

---

## CI/CD

| ワークフロー | 内容 |
|-------------|------|
| `ci.yml` | テスト・Lint・解析 |
| `coverage.yml` | カバレッジ計測 |
| `codeql.yml` | セキュリティスキャン |
| `pages.yml` | GitHub Pages公開 |

---

## ドキュメント

- [GitHub Pages](https://rna4219.github.io/portfolio/)
- [リリースノート](docs/releases/v1.0.0.md)
- [Evidence Library](docs/evidence/README.md)

---

## AI利用に関する開示

本リポジトリはAI支援（GitHub Copilot、ChatGPT等）を用いて作成しています。
設計・統合・最終判断は作者が行い、CIで継続的に品質を確認しています。

---

## License

[Apache-2.0](LICENSE)