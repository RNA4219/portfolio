@echo off
chcp 65001 >nul
echo ========================================
echo  Project 03: CI Flaky Analyzer Demo
echo  (JUnit → Flaky Detection)
echo ========================================
echo.

echo [1/2] Running flaky analysis...
call npm run ci:analyze
echo.

echo [2/2] Generating issue templates...
call npm run ci:issue
echo.

echo ========================================
echo  Demo complete!
echo  Output: projects/03-ci-flaky/out/
echo ========================================
pause