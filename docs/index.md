---
layout: default
title: Portfolio Hub
description: QA / SDET / LLM 成果物のハイライトと週次サマリを俯瞰できるポータル
---

<section class="hero">
  <h1 class="hero__title">QA × SDET × LLM Portfolio</h1>
  <p class="hero__subtitle">
    <span class="hero__subtitle-line">QA自動化パイプラインの構築・運用ノウハウ、LLM活用によるテスト生成・評価の実践知、</span>
    <span class="hero__subtitle-line">CIパイプラインの可観測性・改善サイクルの設計をまとめた成果物集</span>
  </p>
</section>

<div class="badges">
  <a href="https://github.com/RNA4219/portfolio" class="badge">GitHub</a>
  <a href="{{ '/evidence/README.html' | relative_url }}" class="badge">Evidence Catalog</a>
  <a href="{{ '/reports/junit/index.html' | relative_url }}" class="badge">JUnit Report</a>
  <a href="{{ '/reports/flaky/index.html' | relative_url }}" class="badge">Flaky Analysis</a>
  <a href="{{ '/weekly-summary.html' | relative_url }}" class="badge">Weekly Summary</a>
  <a href="{{ '/en/' | relative_url }}" class="badge">English</a>
</div>

## Projects

<div class="demo-grid">
  <article class="demo-card">
    <header>
      <span class="demo-card__id">01</span>
      <h2><a href="{{ '/evidence/spec2cases.html' | relative_url }}">Spec to Cases</a></h2>
    </header>
    <p>仕様書 Markdown からテストケース JSON を抽出する LLM + ルールベース変換パイプライン。</p>
    <ul>
      <li>スキーマ検証と type-preserving な変換ロジック</li>
      <li>スモールスタート向け CLI / JSON サンプル同梱</li>
    </ul>
    <a class="demo-card__link" href="{{ '/evidence/spec2cases.html' | relative_url }}">View Evidence</a>
  </article>

  <article class="demo-card">
    <header>
      <span class="demo-card__id">02</span>
      <h2><a href="{{ '/evidence/llm2pw.html' | relative_url }}">LLM to Playwright</a></h2>
    </header>
    <p>LLM が受け入れ基準を補完しながら Playwright テストを自動生成する PoC。</p>
    <ul>
      <li>data-testid ベースの堅牢なセレクタ戦略</li>
      <li>a11y スキャン統合、データ駆動テスト対応</li>
    </ul>
    <a class="demo-card__link" href="{{ '/evidence/llm2pw.html' | relative_url }}">View Evidence</a>
  </article>

  <article class="demo-card">
    <header>
      <span class="demo-card__id">03</span>
      <h2><a href="{{ '/evidence/flaky.html' | relative_url }}">CI Flaky Analyzer</a></h2>
    </header>
    <p>CI ログから Flaky テストを検出し、HTML レポート / 起票テンプレートまで自動生成する CLI。</p>
    <ul>
      <li>JUnit XML ストリーミング解析・スコアリング</li>
      <li>HTML / JSONL 履歴 / GitHub Issue テンプレート生成</li>
    </ul>
    <a class="demo-card__link" href="{{ '/evidence/flaky.html' | relative_url }}">View Evidence</a>
  </article>

  <article class="demo-card">
    <header>
      <span class="demo-card__id">04</span>
      <h2><a href="{{ '/evidence/llm-adapter.html' | relative_url }}">LLM Adapter</a></h2>
    </header>
    <p>OpenAI / Azure / ローカルモックを統合し、比較ランと本番フォールバックを両立する LLM アダプタ。</p>
    <ul>
      <li>プロバイダ統合レイヤーでトレース共通化</li>
      <li>JSONL テンプレートからの単発・比較実行</li>
    </ul>
    <a class="demo-card__link" href="{{ '/evidence/llm-adapter.html' | relative_url }}">View Evidence</a>
  </article>
</div>

## CI Metrics Trend

<div class="metrics-card">
  <img src="{{ '/assets/metrics/ci-pass-rate-flaky.svg' | relative_url }}" alt="CI Pass Rate and Flaky Trend">
</div>

## Weekly Summary

{% include weekly-summary-card.md locale="ja" %}

<div class="badges" style="justify-content: flex-start; margin-top: 1.5rem;">
  <a href="{{ '/weekly-summary.html' | relative_url }}" class="badge">View All Summaries</a>
</div>

## Evidence Library

<div class="card-grid">
  <a href="{{ '/evidence/README.html' | relative_url }}" class="card">
    <div class="card__title">QA Evidence Catalog</div>
    <p class="card__desc">RTMに記載されたEvidenceLinkの遷移先をまとめた検証一次情報カタログ</p>
  </a>
  <a href="{{ '/test-plan.html' | relative_url }}" class="card">
    <div class="card__title">Test Plan</div>
    <p class="card__desc">テスト計画書とテスト戦略</p>
  </a>
  <a href="{{ '/defect-report-sample.html' | relative_url }}" class="card">
    <div class="card__title">Defect Report Sample</div>
    <p class="card__desc">欠陥レポートのサンプル</p>
  </a>
  <a href="{{ '/development-log-hub.html' | relative_url }}" class="card">
    <div class="card__title">Development Log Hub</div>
    <p class="card__desc">開発ログと技術ノート</p>
  </a>
</div>
