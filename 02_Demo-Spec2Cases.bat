@echo off
chcp 65001 >nul
echo ========================================
echo  Project 01: Spec to Cases Demo
echo  (Markdown → JSON Test Cases)
echo ========================================
echo.

echo [1/3] Generating test cases from Markdown...
call npm run spec:generate
echo.

echo [2/3] Validating generated JSON...
call npm run spec:validate
echo.

echo [3/3] Running test cases (smoke tag)...
call npm run spec:run -- docs/examples/spec2cases/cases.sample.json --tag smoke
echo.

echo ========================================
echo  Demo complete!
echo  Generated: projects/01-spec2cases-md2json/cases.generated.json
echo ========================================
pause