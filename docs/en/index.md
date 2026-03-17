---
layout: default
title: Portfolio Hub (EN)
description: A portal showcasing QA / SDET / LLM highlights with weekly summaries in English
---

<section class="hero hero--home" style="padding: 2rem 0 3rem;">
  <h1 class="hero__title">QA × SDET × LLM Portfolio</h1>
  <p class="hero__subtitle">Showcasing QA automation pipelines, LLM-powered test generation, and CI observability</p>
</section>

<div class="badges badges--hero">
  <a href="https://github.com/RNA4219/portfolio" class="badge">GitHub</a>
  <a href="{{ '/reports/junit/index.html' | relative_url }}" class="badge">JUnit Report</a>
  <a href="{{ '/reports/flaky/index.html' | relative_url }}" class="badge">Flaky Analysis</a>
  <a href="{{ '/reports/coverage/index.html' | relative_url }}" class="badge">Coverage</a>
  <a href="{{ '/' | relative_url }}" class="badge">Japanese</a>
</div>

## CI Metrics Trend

<div class="metrics-card">
  <img src="{{ '/assets/metrics/ci-pass-rate-flaky.svg' | relative_url }}" alt="CI Pass Rate and Flaky Trend">
</div>

## Projects

<div class="demo-grid">
  <article class="demo-card">
    <header>
      <span class="demo-card__id">01</span>
      <h2><a href="{{ '/en/evidence/spec2cases.html' | relative_url }}">Spec to Cases</a></h2>
    </header>
    <p>A pipeline that turns specification Markdown into test case JSON with LLM drafting and rule-based post-processing.</p>
    <ul>
      <li>Schema validation and type-preserving transformation logic</li>
      <li>CLI helpers and JSON samples for quick onboarding</li>
    </ul>
    <a class="demo-card__link" href="{{ '/en/evidence/spec2cases.html' | relative_url }}">View Evidence</a>
  </article>

  <article class="demo-card">
    <header>
      <span class="demo-card__id">02</span>
      <h2><a href="{{ '/en/evidence/llm2pw.html' | relative_url }}">LLM to Playwright</a></h2>
    </header>
    <p>A proof of concept where an LLM expands acceptance criteria and generates Playwright tests automatically.</p>
    <ul>
      <li>Robust selector strategy based on <code>data-testid</code> with a11y scanning</li>
      <li>Data-driven tests via JSON / CSV drivers</li>
    </ul>
    <a class="demo-card__link" href="{{ '/en/evidence/llm2pw.html' | relative_url }}">View Evidence</a>
  </article>

  <article class="demo-card">
    <header>
      <span class="demo-card__id">03</span>
      <h2><a href="{{ '/en/evidence/flaky.html' | relative_url }}">CI Flaky Analyzer</a></h2>
    </header>
    <p>A CLI that detects flaky tests from CI logs and automatically produces HTML reports and ticket templates.</p>
    <ul>
      <li>Streaming analysis for large JUnit XML files with scoring</li>
      <li>One-command generation of HTML, JSONL, and GitHub Issue templates</li>
    </ul>
    <a class="demo-card__link" href="{{ '/en/evidence/flaky.html' | relative_url }}">View Evidence</a>
  </article>

  <article class="demo-card">
    <header>
      <span class="demo-card__id">04</span>
      <h2><a href="{{ '/en/evidence/llm-adapter.html' | relative_url }}">LLM Adapter</a></h2>
    </header>
    <p>An adapter that orchestrates provider calls and comparison runs while keeping production fallbacks intact.</p>
    <ul>
      <li>Supports OpenAI, Gemini, Ollama, and OpenRouter</li>
      <li>Run prompts with <code>llm-adapter --provider config.yaml --prompts tasks.jsonl</code></li>
    </ul>
    <a class="demo-card__link" href="{{ '/en/evidence/llm-adapter.html' | relative_url }}">View Evidence</a>
  </article>
</div>

## Weekly Summary

{% include weekly-summary-card.md locale="en" %}

<div class="badges" style="justify-content: flex-start; margin-top: 1.5rem;">
  <a href="{{ '/en/weekly-summary.html' | relative_url }}" class="badge">View All Summaries</a>
</div>
