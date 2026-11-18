@echo off
echo ========================================
echo  DEPLOYING ROMANTIC WEBSITE TO GITHUB
echo ========================================
echo.

echo Step 1: Installing gh-pages...
call npm install gh-pages --save-dev

echo.
echo Step 2: Building project...
call npm run build

if %errorlevel% neq 0 (
    echo Build failed! Check errors above.
    pause
    exit /b 1
)

echo.
echo Step 3: Deploying to GitHub Pages...
call npm run deploy

if %errorlevel% neq 0 (
    echo Deployment failed! Check errors above.
    pause
    exit /b 1
)

echo.
echo ========================================
echo  SUCCESS! Your site is being deployed.
echo.
echo  Visit: https://mikiyaskifle.github.io/maya_themiki
echo.
echo  Note: It may take 1-2 minutes to go live.
echo ========================================
pause