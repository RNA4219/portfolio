@echo off
chcp 65001 >nul
echo ========================================
echo  Portfolio - Run All Tests
echo ========================================
echo.

echo [1/4] Running Node.js tests...
call npm run spec:validate
if %errorlevel% neq 0 goto :error

echo.
echo [2/4] Generating Playwright tests...
call npm run e2e:gen
if %errorlevel% neq 0 goto :error

echo.
echo [3/4] Running Playwright stub tests...
call npm test
if %errorlevel% neq 0 goto :error

echo.
echo [4/4] Running Python tests (offline mode)...
set LLM_ADAPTER_OFFLINE=1
py -3.11 -m pytest projects/04-llm-adapter/tests -v -x --ignore=projects/04-llm-adapter/tests/cli_single_prompt
if %errorlevel% neq 0 goto :error

echo.
echo ========================================
echo  All tests passed!
echo ========================================
pause
exit /b 0

:error
echo.
echo [ERROR] Tests failed!
pause
exit /b 1