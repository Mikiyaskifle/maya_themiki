@echo off
echo ========================================
echo    VERCEL LOGIN & DEPLOYMENT
echo ========================================
echo.
echo Step 1: Logging into Vercel...
echo.
echo IMPORTANT: This will open a browser window.
echo.
echo Follow these steps:
echo 1. Sign in with GitHub (recommended)
echo 2. Authorize Vercel access
echo 3. Return here after login
echo.
pause

vercel login

if %errorlevel% neq 0 (
    echo Login failed! Try manually: vercel login
    pause
    exit /b 1
)

echo.
echo ✓ Successfully logged into Vercel!
echo.
echo Step 2: Deploying your romantic website...
echo.
echo When Vercel asks:
echo 1. Press Enter for defaults
echo 2. Type "n" for "Link to existing project?"
echo 3. Press Enter for everything else
echo.
pause

vercel --prod

echo.
echo ========================================
echo    DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Your PRIVATE romantic website is now live!
echo.
echo Check the URL above from Vercel.
echo Example: https://a-world-made-for-you.vercel.app
echo.
echo Share this private link only with her!
echo.
pause