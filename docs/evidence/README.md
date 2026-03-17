---
layout: default
title: QA Evidence Catalog
description: RTMに記載されたEvidenceLinkの遷移先をまとめた検証一次情報カタログ
---

<section class="hero" style="padding: 2rem 0 3rem;">
  <h1 class="hero__title">Evidence Catalog</h1>
  <p class="hero__subtitle">RTM に記載された EvidenceLink の遷移先をまとめ、検証時に参照する一次情報を一覧化</p>
</section>

<div class="demo-grid">
  <article class="demo-card">
    <header>
      <span class="demo-card__id">01</span>
      <h2><a href="{{ '/evidence/spec2cases.html' | relative_url }}">Spec to Cases</a></h2>
    </header>
    <p>仕様書からテストケースを抽出する LLM × スキーマ駆動パイプライン</p>
    <ul>
      <li>ケース設計テンプレ: <code>examples/spec2cases/spec.sample.md</code></li>
      <li>自動生成スクリプト: <code>projects/01-spec2cases-md2json/scripts/spec2cases.mjs</code></li>
      <li>サンプルケース: <code>examples/spec2cases/cases.sample.json</code></li>
    </ul>
    <a class="demo-card__link" href="{{ '/evidence/spec2cases.html' | relative_url }}">View Details</a>
  </article>

  <article class="demo-card">
    <header>
      <span class="demo-card__id">02</span>
      <h2><a href="{{ '/evidence/llm2pw.html' | relative_url }}">LLM to Playwright</a></h2>
    </header>
    <p>受け入れ基準を拡張して自動生成 Playwright テストへ落とし込む PoC</p>
    <ul>
      <li>テスト概要: <code>projects/02-blueprint-to-playwright/tests/README.md</code></li>
      <li>サンプルブループリント: <code>examples/llm2pw/blueprint.sample.json</code></li>
      <li>デモHTML: <code>examples/llm2pw/demo</code></li>
    </ul>
    <a class="demo-card__link" href="{{ '/evidence/llm2pw.html' | relative_url }}">View Details</a>
  </article>

  <article class="demo-card">
    <header>
      <span class="demo-card__id">03</span>
      <h2><a href="{{ '/evidence/flaky.html' | relative_url }}">CI Flaky Analyzer</a></h2>
    </header>
    <p>CI ログから Flaky テストを検知・可視化する CLI</p>
    <ul>
      <li>プロダクト README: <code>projects/03-ci-flaky/README.md</code></li>
      <li>仕様書: <code>projects/03-ci-flaky/docs/spec_flaky_analyzer.md</code></li>
      <li>解析ストア: <code>projects/03-ci-flaky/data/runs.jsonl</code></li>
    </ul>
    <a class="demo-card__link" href="{{ '/evidence/flaky.html' | relative_url }}">View Details</a>
  </article>

  <article class="demo-card">
    <header>
      <span class="demo-card__id">04</span>
      <h2><a href="{{ '/evidence/llm-adapter.html' | relative_url }}">LLM Adapter</a></h2>
    </header>
    <p>複数プロバイダの比較・記録・可視化を一括で担う LLM アダプタ</p>
    <ul>
      <li>プロダクト README: <code>projects/04-llm-adapter/README.md</code></li>
      <li>プロバイダ設定サンプル: <code>projects/04-llm-adapter/adapter/config/providers</code></li>
      <li>ゴールデンタスク: <code>projects/04-llm-adapter/datasets/golden</code></li>
    </ul>
    <a class="demo-card__link" href="{{ '/evidence/llm-adapter.html' | relative_url }}">View Details</a>
  </article>
</div>

<div class="badges" style="justify-content: flex-start; margin-top: 3rem;">
  <a href="{{ '/test-plan.html' | relative_url }}" class="badge">Test Plan</a>
  <a href="{{ '/defect-report-sample.html' | relative_url }}" class="badge">Defect Report</a>
  <a href="{{ '/weekly-summary.html' | relative_url }}" class="badge">Weekly Summary</a>
  <a href="{{ '/en/evidence/README.html' | relative_url }}" class="badge">English Version</a>
</div>