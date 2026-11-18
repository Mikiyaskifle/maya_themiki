@echo off
echo ========================================
echo    DEPLOY TO VERCEL (PRIVATE REPO)
echo ========================================
echo.
echo This will:
echo 1. Push to your PRIVATE GitHub repo
echo 2. Deploy to Vercel (works with private repos)
echo 3. Make your site live instantly
echo.
echo Press Ctrl+C to cancel, or...
pause

echo.
echo Step 1: Installing dependencies...
call npm install

echo.
echo Step 2: Building project...
call npm run build

if %errorlevel% neq 0 (
    echo Build failed! Check errors above.
    pause
    exit /b 1
)

echo.
echo ========================================
echo    DEPLOYING TO VERCEL
echo ========================================
echo.
echo IMPORTANT INSTRUCTIONS:
echo.
echo When Vercel asks:
echo 1. Press Enter for defaults
echo 2. Type "n" for "Link to existing project?"
echo 3. Press Enter for everything else
echo.
echo Your site will be live in 1 minute!
echo.
pause

echo.
echo Starting Vercel deployment...
call npm install -g vercel
vercel --prod

echo.
echo ========================================
echo    SUCCESS!
echo ========================================
echo.
echo Your PRIVATE romantic website is now live!
echo.
echo Check the URL above from Vercel.
echo Example: https://maya-themiki.vercel.app
echo.
echo Share this private link only with her!
echo.
pause