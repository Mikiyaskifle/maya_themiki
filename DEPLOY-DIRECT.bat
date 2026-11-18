@echo off
echo ========================================
echo    DIRECT DEPLOYMENT (NO GIT CLONE)
echo ========================================
echo.
echo This deploys your local files directly to Vercel.
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
echo Step 2: Creating deployment...
echo.
echo Creating direct deployment from local files...
echo.
vercel deploy --prod

echo.
if %errorlevel% equ 0 (
    echo ========================================
    echo    SUCCESS! DEPLOYMENT CREATED
    echo ========================================
    echo.
    echo Check the URL above!
    echo.
    echo To make it permanent:
    echo 1. Go to https://vercel.com/dashboard
    echo 2. Find the deployment
    echo 3. Click "Promote to Production"
) else (
    echo ========================================
    echo    ALTERNATIVE METHOD
    echo ========================================
    echo.
    echo Try making repo public temporarily:
    echo 1. Go to GitHub repo settings
    echo 2. Change to Public
    echo 3. Try Vercel import again
    echo 4. Change back to Private after
)

echo.
pause