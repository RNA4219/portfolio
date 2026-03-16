@echo off
chcp 65001 >nul
echo ========================================
echo  Portfolio - Quick Setup
echo ========================================
echo.

:: Check Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js not found. Please install Node.js first.
    pause
    exit /b 1
)

:: Check Python 3.11+
py -3.11 --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [INFO] Python 3.11 not found. Installing via winget...
    winget install Python.Python.3.11 --accept-package-agreements --accept-source-agreements
)

echo [1/3] Installing Node.js dependencies...
call npm ci
if %errorlevel% neq 0 (
    echo [ERROR] npm ci failed
    pause
    exit /b 1
)

echo.
echo [2/3] Installing Python dependencies...
py -3.11 -m pip install -r projects/04-llm-adapter-shadow/requirements.txt
py -3.11 -m pip install -r projects/04-llm-adapter/requirements.txt
if %errorlevel% neq 0 (
    echo [ERROR] pip install failed
    pause
    exit /b 1
)

echo.
echo [3/3] Setup complete!
echo.
echo ========================================
echo  Next steps:
echo  - Run "01_Test-All.bat" to run all tests
echo  - Run "02_Demo-Spec2Cases.bat" for Project 01 demo
echo  - Run "03_Demo-Playwright.bat" for Project 02 demo
echo  - Run "04_Demo-Flaky.bat" for Project 03 demo
echo ========================================
pause