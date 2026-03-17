---
layout: default
title: Portfolio Hub
description: QA / SDET / LLM 成果物のハイライトと週次サマリを俯瞰できるポータル
---

<style>
  .hero {
    text-align: center;
    padding: 4rem 0;
    margin-bottom: 2rem;
  }
  .hero__title {
    font-size: 2.75rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .hero__subtitle {
    font-size: 1.2rem;
    color: var(--color-text-secondary);
    max-width: 650px;
    margin: 0 auto 2rem;
    line-height: 1.8;
  }
  .quick-links {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 3rem;
  }
  .quick-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-text-secondary);
    transition: all 0.2s;
  }
  .quick-link:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-2px);
  }
  .section-divider {
    height: 1px;
    background: var(--color-border);
    margin: 3rem 0;
  }
  .metrics-card {
    background: var(--color-bg-secondary);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    padding: 1.5rem;
    margin: 2rem 0;
  }
  .metrics-card h3 {
    margin-top: 0;
    color: var(--color-text);
  }
</style>

<section class="hero">
  <h1 class="hero__title">QA × SDET × LLM Portfolio</h1>
  <p class="hero__subtitle">
    QA自動化パイプラインの構築・運用ノウハウ、LLM活用によるテスト生成・評価の実践知、CIパイプラインの可観測性・改善サイクルの設計をまとめた成果物集
  </p>
</section>

<div class="quick-links">
  <a href="https://github.com/RNA4219/portfolio" class="quick-link">📦 GitHub Repository</a>
  <a href="{{ '/evidence/README.html' | relative_url }}" class="quick-link">📋 Evidence Catalog</a>
  <a href="{{ '/reports/junit/index.html' | relative_url }}" class="quick-link">📊 JUnit Report</a>
  <a href="{{ '/reports/flaky/index.html' | relative_url }}" class="quick-link">🔧 Flaky Analysis</a>
  <a href="{{ '/weekly-summary.html' | relative_url }}" class="quick-link">📅 Weekly Summary</a>
  <a href="{{ '/en/' | relative_url }}" class="quick-link">🇬🇧 English Version</a>
</div>

## Projects

<div class="demo-grid">
  <article class="demo-card" id="demo-01">
    <header>
      <p class="demo-card__id">01</p>
      <h2><a href="{{ '/evidence/spec2cases.html' | relative_url }}">Spec to Cases</a></h2>
    </header>
    <p>仕様書 Markdown からテストケース JSON を抽出する LLM + ルールベース変換パイプライン。</p>
    <ul>
      <li>スキーマ検証と type-preserving な変換ロジック</li>
      <li>スモールスタート向け CLI / JSON サンプル同梱</li>
    </ul>
    <p><a class="demo-card__link" href="{{ '/evidence/spec2cases.html' | relative_url }}">View Evidence →</a></p>
  </article>

  <article class="demo-card" id="demo-02">
    <header>
      <p class="demo-card__id">02</p>
      <h2><a href="{{ '/evidence/llm2pw.html' | relative_url }}">LLM to Playwright</a></h2>
    </header>
    <p>LLM が受け入れ基準を補完しながら Playwright テストを自動生成する PoC。</p>
    <ul>
      <li>data-testid ベースの堅牢なセレクタ戦略</li>
      <li>a11y スキャン統合、データ駆動テスト対応</li>
    </ul>
    <p><a class="demo-card__link" href="{{ '/evidence/llm2pw.html' | relative_url }}">View Evidence →</a></p>
  </article>

  <article class="demo-card" id="demo-03">
    <header>
      <p class="demo-card__id">03</p>
      <h2><a href="{{ '/evidence/flaky.html' | relative_url }}">CI Flaky Analyzer</a></h2>
    </header>
    <p>CI ログから Flaky テストを検出し、HTML レポート / 起票テンプレートまで自動生成する CLI。</p>
    <ul>
      <li>JUnit XML ストリーミング解析・スコアリング</li>
      <li>HTML / JSONL 履歴 / GitHub Issue テンプレート生成</li>
    </ul>
    <p><a class="demo-card__link" href="{{ '/evidence/flaky.html' | relative_url }}">View Evidence →</a></p>
  </article>

  <article class="demo-card" id="demo-04">
    <header>
      <p class="demo-card__id">04</p>
      <h2><a href="{{ '/evidence/llm-adapter.html' | relative_url }}">LLM Adapter</a></h2>
    </header>
    <p>OpenAI / Azure / ローカルモックを統合し、比較ランと本番フォールバックを両立する LLM アダプタ。</p>
    <ul>
      <li>プロバイダ統合レイヤーでトレース共通化</li>
      <li>JSONL テンプレートからの単発・比較実行</li>
      <li>監査ログ接続可能なメトリクス蓄積</li>
    </ul>
    <p><a class="demo-card__link" href="{{ '/evidence/llm-adapter.html' | relative_url }}">View Evidence →</a></p>
  </article>
</div>

<div class="section-divider"></div>

## CI Metrics Trend

<div class="metrics-card">
  <img src="{{ '/assets/metrics/ci-pass-rate-flaky.svg' | relative_url }}" alt="CI Pass Rate & Flaky Trend" style="width: 100%; border-radius: 8px;">
</div>

## Weekly Summary

{% include weekly-summary-card.md locale="ja" %}

<a href="{{ '/weekly-summary.html' | relative_url }}" class="quick-link" style="margin-top: 1rem;">View All Weekly Summaries →</a>

<div class="section-divider"></div>

## Evidence Library

<div class="card-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
  <a href="{{ '/evidence/README.html' | relative_url }}" class="quick-link" style="justify-content: flex-start;">
    📋 QA Evidence Catalog
  </a>
  <a href="{{ '/test-plan.html' | relative_url }}" class="quick-link" style="justify-content: flex-start;">
    📝 Test Plan
  </a>
  <a href="{{ '/defect-report-sample.html' | relative_url }}" class="quick-link" style="justify-content: flex-start;">
    🐛 Defect Report Sample
  </a>
  <a href="{{ '/development-log-hub.html' | relative_url }}" class="quick-link" style="justify-content: flex-start;">
    📚 Development Log Hub
  </a>
</div>