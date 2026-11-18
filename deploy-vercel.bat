@echo off
echo ========================================
echo  DEPLOYING TO VERCEL (Works with Private Repos)
echo ========================================
echo.

echo Step 1: Installing Vercel CLI...
call npm install -g vercel

if %errorlevel% neq 0 (
    echo Failed to install Vercel. Try: npm install -g vercel
    pause
    exit /b 1
)

echo.
echo Step 2: Building project...
call npm run build

if %errorlevel% neq 0 (
    echo Build failed! Check errors above.
    pause
    exit /b 1
)

echo.
echo Step 3: Deploying to Vercel...
echo.
echo IMPORTANT: When asked:
echo 1. Press Enter for default project name
echo 2. Press Enter for default settings
echo 3. Say NO to link to existing project
echo.
vercel

echo.
echo ========================================
echo  SUCCESS! Your site is deployed to Vercel.
echo.
echo  Check the URL above (e.g., *.vercel.app)
echo.
echo  Note: Vercel works with PRIVATE repositories!
echo ========================================
pause