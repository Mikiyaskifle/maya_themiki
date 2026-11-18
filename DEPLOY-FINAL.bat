@echo off
echo ========================================
echo    FINAL DEPLOYMENT TO VERCEL
echo ========================================
echo.
echo Deploying without interactive prompts...
echo.
pause

echo Step 1: Building project...
call npm run build

if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)

echo.
echo Step 2: Deploying to Vercel (non-interactive)...
echo.
vercel --prod --yes

if %errorlevel% neq 0 (
    echo.
    echo Trying alternative deployment method...
    vercel deploy --prod
)

echo.
echo ========================================
echo    CHECK VERCEL DASHBOARD
echo ========================================
echo.
echo If deployment succeeded, check:
echo https://vercel.com/dashboard
echo.
echo Look for project: "a-world-made-for-you"
echo.
echo If not deployed, try manual import:
echo 1. Go to https://vercel.com/dashboard
echo 2. Click "Add New..." -> "Project"
echo 3. Select your GitHub repo
echo 4. Click "Import" and deploy
echo.
pause