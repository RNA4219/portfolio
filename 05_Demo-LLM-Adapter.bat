@echo off
chcp 65001 >nul
echo ========================================
echo  Project 04: LLM Adapter Test
echo  (Multi-Provider LLM CLI)
echo ========================================
echo.

echo Running Python tests in offline mode...
set LLM_ADAPTER_OFFLINE=1
py -3.11 -m pytest projects/04-llm-adapter/tests -v --ignore=projects/04-llm-adapter/tests/cli_single_prompt
echo.

echo ========================================
echo  Test complete!
echo.
echo  NOTE: For actual LLM calls, set API keys:
echo   - OPENAI_API_KEY
echo   - GEMINI_API_KEY
echo   - OPENROUTER_API_KEY
echo.
echo  Then run:
echo   cd projects/04-llm-adapter
echo   llm-adapter --provider adapter/config/providers/openai.yaml --prompt "Hello"
echo ========================================
pause