@echo off
chcp 65001 >nul
echo ========================================
echo  Project 02: Blueprint to Playwright Demo
echo  (Blueprint → E2E Tests)
echo ========================================
echo.

echo [1/2] Generating Playwright tests from blueprint...
call npm run e2e:gen
echo.

echo [2/2] Running Playwright stub tests...
call npm test
echo.

echo ========================================
echo  Demo complete!
echo  Generated: projects/02-blueprint-to-playwright/tests/generated/
echo ========================================
pause