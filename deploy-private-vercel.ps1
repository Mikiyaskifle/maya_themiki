Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  PRIVATE REPO + VERCEL DEPLOYMENT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "Step 1: Initializing Git..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Romantic website deployment"
    Write-Host "✓ Git initialized" -ForegroundColor Green
} else {
    Write-Host "✓ Git already initialized" -ForegroundColor Green
}

# Step 2: Connect to GitHub (private repo)
Write-Host "`nStep 2: Connecting to GitHub private repo..." -ForegroundColor Yellow
$remote = git remote get-url origin 2>$null
if (-not $remote) {
    git remote add origin https://github.com/Mikiyaskifle/maya_themiki.git
    Write-Host "✓ Connected to GitHub" -ForegroundColor Green
} else {
    Write-Host "✓ Already connected to GitHub" -ForegroundColor Green
}

# Step 3: Push to private repo
Write-Host "`nStep 3: Pushing to private GitHub repo..." -ForegroundColor Yellow
git branch -M main
git push -u origin main
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Pushed to GitHub" -ForegroundColor Green
} else {
    Write-Host "✗ GitHub push failed. Continuing with Vercel deployment..." -ForegroundColor Red
}

# Step 4: Install Vercel if needed
Write-Host "`nStep 4: Checking Vercel CLI..." -ForegroundColor Yellow
$vercelCheck = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelCheck) {
    Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Vercel CLI installed" -ForegroundColor Green
    } else {
        Write-Host "✗ Failed to install Vercel. Try: npm install -g vercel" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
} else {
    Write-Host "✓ Vercel CLI already installed" -ForegroundColor Green
}

# Step 5: Build project
Write-Host "`nStep 5: Building project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Build successful" -ForegroundColor Green
} else {
    Write-Host "✗ Build failed. Check errors above." -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Step 6: Deploy to Vercel
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  DEPLOYING TO VERCEL (Private Repo OK)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "When Vercel asks:" -ForegroundColor Yellow
Write-Host "1. Press Enter for defaults" -ForegroundColor Yellow
Write-Host "2. Say 'n' to link existing project" -ForegroundColor Yellow
Write-Host "3. Your site will be live in 1 minute!" -ForegroundColor Yellow
Write-Host ""
Write-Host "Starting Vercel deployment..." -ForegroundColor Green
Write-Host ""

# Deploy to Vercel
vercel --prod

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DEPLOYMENT COMPLETE!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Your private romantic website is now live!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Check the URL above from Vercel" -ForegroundColor Yellow
Write-Host "2. Share it with her privately" -ForegroundColor Yellow
Write-Host "3. Update anytime with: vercel --prod" -ForegroundColor Yellow
Write-Host ""
Read-Host "Press Enter to finish"