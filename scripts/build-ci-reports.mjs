#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

import { XMLParser } from '../packages/fast-xml-parser/index.js';

const rootDir = process.cwd();
const junitInputPath = path.resolve(rootDir, 'junit-results.xml');
const flakyOutputDir = path.resolve(rootDir, 'projects/03-ci-flaky/out');
const coverageHtmlDir = path.resolve(rootDir, 'projects/04-llm-adapter/htmlcov');
const coverageXmlPath = path.resolve(rootDir, 'projects/04-llm-adapter/coverage.xml');
const reportsDir = path.resolve(rootDir, 'reports');

function ensureCleanDir(target) {
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(target, { recursive: true });
}

function toArray(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function extractText(node) {
  if (node == null) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'number' || typeof node === 'boolean') return String(node);
  if (Array.isArray(node)) return node.map(extractText).filter(Boolean).join('\n');
  if (typeof node === 'object') {
    const text = [];
    if (typeof node['#text'] === 'string') text.push(node['#text']);
    for (const value of Object.values(node)) {
      if (typeof value === 'object' || Array.isArray(value)) {
        text.push(extractText(value));
      }
    }
    return text.filter(Boolean).join('\n');
  }
  return '';
}

export function summariseJUnit(inputPath, outputDir) {
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_', textNodeName: '#text' });
  const xml = fs.readFileSync(inputPath, 'utf8');
  const parsed = parser.parse(xml) ?? {};

  const suiteNodes = [];
  if (parsed.testsuite) suiteNodes.push(parsed.testsuite);
  if (parsed.testsuites) {
    const suites = parsed.testsuites.testsuite ?? parsed.testsuites;
    suiteNodes.push(...toArray(suites));
  }

  const tests = [];
  for (const suite of suiteNodes) {
    if (!suite) continue;
    const suiteName = suite['@_name'] ?? suite.name ?? 'Suite';
    const cases = toArray(suite.testcase);
    for (const testCase of cases) {
      if (!testCase) continue;
      const className = testCase['@_classname'] ?? suiteName;
      const name = testCase['@_name'] ?? 'Unnamed test';
      const timeSeconds = Number.parseFloat(testCase['@_time'] ?? '0') || 0;
      const rawStatus = typeof testCase['@_status'] === 'string' ? testCase['@_status'].toLowerCase() : '';
      let status = rawStatus && rawStatus !== 'run' ? rawStatus : 'passed';
      let detail = '';
      if (testCase.failure !== undefined) {
        status = 'failed';
        detail = extractText(testCase.failure);
      } else if (testCase.error !== undefined) {
        status = 'error';
        detail = extractText(testCase.error);
      } else if (testCase.skipped !== undefined) {
        status = 'skipped';
        detail = extractText(testCase.skipped);
      }
      tests.push({ suite: suiteName, className, name, status, timeSeconds, detail });
    }
  }

  const errorStatuses = new Set(['error', 'errored']);

  const summary = {
    suites: suiteNodes.length,
    tests: tests.length,
    failures: tests.filter((item) => item.status === 'failed').length,
    errors: tests.filter((item) => errorStatuses.has(item.status)).length,
    skipped: tests.filter((item) => item.status === 'skipped').length,
    passed: tests.filter((item) => item.status === 'passed').length,
    duration_seconds: Number.parseFloat(
      tests.reduce((total, item) => total + item.timeSeconds, 0).toFixed(3),
    ),
    generated_at: new Date().toISOString(),
  };

  fs.mkdirSync(outputDir, { recursive: true });
  fs.copyFileSync(inputPath, path.join(outputDir, 'junit-results.xml'));
  fs.writeFileSync(path.join(outputDir, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`, 'utf8');

  const rows = tests
    .map((test) => {
      const durationMs = Math.round(test.timeSeconds * 1000);
      const detail = test.detail ? `<pre>${escapeHtml(test.detail)}</pre>` : '';
      return `              <tr class="status-${test.status}">\n                <td>${escapeHtml(test.suite)}</td>\n                <td>${escapeHtml(test.className)}</td>\n                <td>${escapeHtml(test.name)}</td>\n                <td class="cell-status">${escapeHtml(test.status)}</td>\n                <td class="numeric">${durationMs}</td>\n                <td>${detail}</td>\n              </tr>`;
    })
    .join('\n');

  const html = `<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <title>JUnit Summary</title>\n    <style>\n      :root {\n        --bg-primary: #f6f4ef;\n        --bg-secondary: #ece7de;\n        --bg-card: rgba(255, 255, 255, 0.82);\n        --bg-card-hover: rgba(255, 255, 255, 0.94);\n        --text-primary: #1f2937;\n        --text-secondary: #4b5563;\n        --text-muted: #7b8794;\n        --accent-primary: #2563eb;\n        --accent-secondary: #22d3ee;\n        --accent-gradient: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);\n        --border-color: rgba(148, 163, 184, 0.28);\n        --glow: 0 20px 45px rgba(148, 163, 184, 0.18);\n        --radius: 16px;\n        --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;\n        --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;\n      }\n      * { box-sizing: border-box; }\n      body {\n        margin: 0;\n        font-family: var(--font-sans);\n        color: var(--text-primary);\n        background: var(--bg-primary);\n        line-height: 1.7;\n        background-image:\n          radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37, 99, 235, 0.12), transparent),\n          radial-gradient(ellipse 60% 40% at 100% 50%, rgba(14, 165, 233, 0.08), transparent),\n          linear-gradient(180deg, #fcfbf8 0%, #f6f4ef 100%);\n      }\n      a {\n        color: var(--accent-primary);\n        text-decoration: none;\n      }\n      a:hover { color: var(--accent-secondary); }\n      .site-header {\n        background: rgba(252, 251, 248, 0.88);\n        backdrop-filter: blur(20px);\n        border-bottom: 1px solid var(--border-color);\n        padding: 1rem 2rem;\n        position: sticky;\n        top: 0;\n        z-index: 100;\n      }\n      .site-header__inner {\n        max-width: 1200px;\n        margin: 0 auto;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n      .site-header__title {\n        font-size: 1.1rem;\n        font-weight: 600;\n        color: var(--text-primary);\n      }\n      .site-header__title span {\n        background: var(--accent-gradient);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-clip: text;\n      }\n      .site-header__nav {\n        display: flex;\n        gap: 2rem;\n      }\n      .site-header__nav a {\n        color: var(--text-secondary);\n        font-size: 0.875rem;\n        font-weight: 500;\n      }\n      main {\n        max-width: 1200px;\n        margin: 0 auto;\n        padding: 2.5rem 2rem 4rem;\n      }\n      .hero {\n        text-align: left;\n        padding: 2rem 0 2.5rem;\n      }\n      .hero__eyebrow {\n        display: inline-flex;\n        align-items: center;\n        gap: 0.5rem;\n        padding: 0.35rem 0.75rem;\n        border: 1px solid var(--border-color);\n        border-radius: 999px;\n        color: var(--text-secondary);\n        font-size: 0.75rem;\n        letter-spacing: 0.08em;\n        text-transform: uppercase;\n        margin-bottom: 1rem;\n        background: var(--bg-card);\n      }\n      .hero h1 {\n        margin: 0 0 1rem;\n        font-size: 3rem;\n        line-height: 1.1;\n        letter-spacing: -0.02em;\n        background: var(--accent-gradient);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-clip: text;\n      }\n      .meta {\n        color: var(--text-secondary);\n        width: min(100%, 48rem);\n        margin: 0 0 2rem;\n        font-size: 1.05rem;\n      }\n      .summary {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n        gap: 1rem;\n        margin-bottom: 2rem;\n      }\n      .metric {\n        background: var(--bg-card);\n        border: 1px solid var(--border-color);\n        border-radius: var(--radius);\n        padding: 1.2rem;\n        box-shadow: var(--glow);\n      }\n      .metric__label {\n        margin: 0 0 0.35rem;\n        font-size: 0.75rem;\n        text-transform: uppercase;\n        letter-spacing: 0.08em;\n        color: var(--text-muted);\n      }\n      .metric__value {\n        margin: 0;\n        font-size: 2rem;\n        font-weight: 700;\n        color: var(--text-primary);\n      }\n      .status-summary {\n        display: flex;\n        gap: 0.75rem;\n        flex-wrap: wrap;\n        margin-bottom: 2rem;\n      }\n      .badge {\n        display: inline-flex;\n        align-items: center;\n        gap: 0.5rem;\n        padding: 0.6rem 1rem;\n        background: var(--bg-card);\n        border: 1px solid var(--border-color);\n        border-radius: 999px;\n        font-size: 0.875rem;\n        color: var(--text-secondary);\n      }\n      .table-shell {\n        background: var(--bg-card);\n        border: 1px solid var(--border-color);\n        border-radius: var(--radius);\n        overflow: hidden;\n        box-shadow: var(--glow);\n      }\n      .table-scroll {\n        overflow-x: auto;\n      }\n      table {\n        width: 100%;\n        border-collapse: collapse;\n      }\n      thead {\n        background: rgba(37, 99, 235, 0.06);\n      }\n      th, td {\n        padding: 0.9rem 1rem;\n        text-align: left;\n        vertical-align: top;\n        border-bottom: 1px solid rgba(148, 163, 184, 0.18);\n      }\n      th {\n        font-size: 0.78rem;\n        letter-spacing: 0.08em;\n        text-transform: uppercase;\n        color: var(--text-muted);\n      }\n      td {\n        color: var(--text-secondary);\n      }\n      tbody tr:hover {\n        background: var(--bg-card-hover);\n      }\n      .cell-status {\n        font-weight: 600;\n        text-transform: capitalize;\n      }\n      .status-passed .cell-status { color: #059669; }\n      .status-failed .cell-status { color: #dc2626; }\n      .status-error .cell-status { color: #ea580c; }\n      .status-skipped .cell-status { color: #64748b; }\n      pre {\n        margin: 0;\n        white-space: pre-wrap;\n        word-break: break-word;\n        font-family: var(--font-mono);\n        font-size: 0.75rem;\n        color: #334155;\n        background: rgba(226, 232, 240, 0.75);\n        padding: 0.75rem;\n        border-radius: 0.75rem;\n        border: 1px solid rgba(148, 163, 184, 0.18);\n      }\n      .numeric { text-align: right; }\n      .site-footer {\n        border-top: 1px solid var(--border-color);\n        padding: 2rem;\n        text-align: center;\n        color: var(--text-muted);\n        font-size: 0.875rem;\n      }\n      @media (max-width: 768px) {\n        .site-header { padding: 1rem; }\n        .site-header__nav { display: none; }\n        main { padding: 2rem 1rem 3rem; }\n        .hero h1 { font-size: 2.25rem; }\n        .meta { font-size: 0.95rem; }\n      }\n    </style>\n  </head>\n  <body>\n    <header class="site-header">\n      <div class="site-header__inner">\n        <a href="/portfolio/" class="site-header__title"><span>QA × SDET × LLM Portfolio</span></a>\n        <nav class="site-header__nav">\n          <a href="/portfolio/evidence/README.html">Evidence</a>\n          <a href="/portfolio/reports/junit/index.html">Reports</a>\n          <a href="https://github.com/RNA4219/portfolio">GitHub</a>\n        </nav>\n      </div>\n    </header>\n    <main>\n      <section class="hero">\n        <div class="hero__eyebrow">QA Reports</div>\n        <h1>JUnit Summary</h1>\n        <p class="meta">生成日時: ${escapeHtml(summary.generated_at)} / 実行時間合計: ${summary.duration_seconds.toFixed(3)} 秒</p>\n      </section>\n      <section class="summary">\n        <div class="metric"><p class="metric__label">Total</p><p class="metric__value">${summary.tests}</p></div>\n        <div class="metric"><p class="metric__label">Passed</p><p class="metric__value">${summary.passed}</p></div>\n        <div class="metric"><p class="metric__label">Failed</p><p class="metric__value">${summary.failures}</p></div>\n        <div class="metric"><p class="metric__label">Errors</p><p class="metric__value">${summary.errors}</p></div>\n        <div class="metric"><p class="metric__label">Skipped</p><p class="metric__value">${summary.skipped}</p></div>\n        <div class="metric"><p class="metric__label">Suites</p><p class="metric__value">${summary.suites}</p></div>\n      </section>\n      <div class="status-summary">\n        <span class="badge">XML: junit-results.xml</span>\n        <span class="badge">JSON: summary.json</span>\n        <a class="badge" href="/portfolio/reports/">Reports Hub</a>\n      </div>\n      <section class="table-shell">\n        <div class="table-scroll">\n          <table>\n            <thead>\n              <tr>\n                <th>Suite</th>\n                <th>Class</th>\n                <th>Name</th>\n                <th>Status</th>\n                <th class="numeric">Duration (ms)</th>\n                <th>Details</th>\n              </tr>\n            </thead>\n            <tbody>\n${rows || '              <tr><td colspan="6">No testcases found.</td></tr>'}\n            </tbody>\n          </table>\n        </div>\n      </section>\n    </main>\n    <footer class="site-footer">\n      <p>&copy; ${new Date().getFullYear()} QA × SDET × LLM Portfolio</p>\n    </footer>\n  </body>\n</html>\n`;

  fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');
  return summary;
}

function hasDirectoryContent(target) {
  if (!fs.existsSync(target)) return false;
  const entries = fs.readdirSync(target);
  return entries.length > 0;
}

function summariseCoverage(xmlPath) {
  if (!fs.existsSync(xmlPath)) return null;
  const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_', textNodeName: '#text' });
  const xml = fs.readFileSync(xmlPath, 'utf8');
  const parsed = parser.parse(xml) ?? {};
  const coverage = parsed.coverage ?? {};
  const toNumber = (value) => {
    const num = Number.parseFloat(value ?? '0');
    return Number.isFinite(num) ? num : 0;
  };
  return {
    line_rate: toNumber(coverage['@_line-rate']) * 100,
    branch_rate: toNumber(coverage['@_branch-rate']) * 100,
    lines_valid: toNumber(coverage['@_lines-valid']),
    lines_covered: toNumber(coverage['@_lines-covered']),
    branches_valid: toNumber(coverage['@_branches-valid']),
    branches_covered: toNumber(coverage['@_branches-covered']),
    timestamp: coverage['@_timestamp'] ?? new Date().toISOString(),
  };
}

function renderIndex(targetDir, sections) {
  const cards = sections
    .map((section) => {
      const description =
        section.id === 'junit'
          ? `テスト件数 ${section.meta.tests} 件 / 成功 ${section.meta.passed} 件`
          : section.id === 'coverage' && section.meta
            ? `ライン網羅率 ${section.meta.line_rate.toFixed(1)}%`
            : section.id === 'flaky'
              ? 'flaky スコアの HTML レポート'
              : '';
      return `      <article class="card">\n        <h2><a href="${escapeHtml(section.href)}">${escapeHtml(section.title)}</a></h2>\n        <p>${escapeHtml(description)}</p>\n      </article>`;
    })
    .join('\n');

  const html = `<!DOCTYPE html>\n<html lang="ja">\n  <head>\n    <meta charset="utf-8" />\n    <title>CI Reports</title>\n    <style>\n      body {\n        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n        margin: 2rem;\n        color: #0f172a;\n        background: #f8fafc;\n      }\n      h1 {\n        margin-bottom: 0.5rem;\n      }\n      p.lead {\n        color: #475569;\n        margin-bottom: 2rem;\n      }\n      .cards {\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n        gap: 1rem;\n      }\n      .card {\n        background: #fff;\n        border-radius: 0.75rem;\n        padding: 1.25rem;\n        box-shadow: 0 1px 2px rgba(15, 23, 42, 0.12);\n      }\n      .card h2 {\n        margin-top: 0;\n        margin-bottom: 0.5rem;\n        font-size: 1.1rem;\n      }\n      .card a {\n        color: #2563eb;\n        text-decoration: none;\n      }\n      .card a:hover {\n        text-decoration: underline;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>CI Reports</h1>\n    <p class="lead">Playwright E2E / flaky 解析 / Python カバレッジの最新 CI レポート。</p>\n    <section class="cards">\n${cards || '      <p>レポートはまだ生成されていません。</p>'}\n    </section>\n  </body>\n</html>\n`;

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
}

function main() {
  ensureCleanDir(reportsDir);
  const sections = [];

  if (fs.existsSync(junitInputPath)) {
    const junitSummary = summariseJUnit(junitInputPath, path.join(reportsDir, 'junit'));
    sections.push({ id: 'junit', title: 'JUnit Summary', href: 'junit/index.html', meta: junitSummary });
  }

  if (hasDirectoryContent(flakyOutputDir)) {
    const target = path.join(reportsDir, 'flaky');
    fs.mkdirSync(target, { recursive: true });
    fs.cpSync(flakyOutputDir, target, { recursive: true });
    sections.push({ id: 'flaky', title: 'Flaky Ranking', href: 'flaky/index.html' });
  }

  if (hasDirectoryContent(coverageHtmlDir)) {
    const target = path.join(reportsDir, 'coverage');
    fs.mkdirSync(target, { recursive: true });
    fs.cpSync(coverageHtmlDir, target, { recursive: true });
    const coverageSummary = summariseCoverage(coverageXmlPath);
    if (coverageSummary) {
      fs.writeFileSync(
        path.join(target, 'summary.json'),
        `${JSON.stringify({ ...coverageSummary, generated_at: new Date().toISOString() }, null, 2)}\n`,
        'utf8',
      );
    }
    sections.push({ id: 'coverage', title: 'Coverage HTML', href: 'coverage/index.html', meta: coverageSummary });
  }

  renderIndex(reportsDir, sections);
}

const isDirectExecution = () => {
  const entry = process.argv[1];
  if (!entry) return false;
  try {
    return pathToFileURL(entry).href === import.meta.url;
  } catch {
    return false;
  }
};

if (isDirectExecution()) {
  main();
}
