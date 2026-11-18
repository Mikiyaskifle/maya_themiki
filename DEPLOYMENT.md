# Deployment Guide for "A World Made For You ❤️"

## 🚀 Quick Deployment Options

### **Option 1: GitHub Pages (Free & Simple)**
1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Deploy romantic website"
   git branch -M main
   git remote add origin https://github.com/Mikiyaskifle/maya_themiki.git
   git push -u origin main
   ```

2. **Install GitHub Pages dependency:**
   ```bash
   npm install gh-pages --save-dev
   ```

3. **Update package.json:**
   ```json
   {
     "homepage": "https://mikiyaskifle.github.io/maya_themiki",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Your site will be live at:** `https://mikiyaskifle.github.io/maya_themiki`

### **Option 2: Vercel (Recommended - Best for React)**
1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   - Answer prompts (press Enter for defaults)
   - Your site will be live instantly!

3. **Continuous Deployment:** Connect GitHub repo to Vercel for automatic updates

### **Option 3: Netlify (Easy & Free)**
1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   netlify deploy
   ```
   - Choose "Create & configure a new site"
   - Site name: `maya-themiki` (or your choice)
   - Deploy path: `dist`

3. **Live URL:** `maya-themiki.netlify.app`

## 📁 Project Structure for Deployment

### **Required Files:**
```
dist/                    # Build output (created by npm run build)
├── index.html          # Main HTML file
├── assets/             # CSS, JS, images
└── ...

public/                 # Static assets
├── images/             # Her photos
├── audio/              # Music files
└── futuremarage.png    # Future marriage image
```

### **Build Command:**
```bash
npm run build
```
This creates the `dist/` folder ready for deployment.

## ⚙️ Configuration for Different Platforms

### **For GitHub Pages:**
1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
```

### **For Vercel:**
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### **For Netlify:**
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🔧 Pre-Deployment Checklist

### **1. Test Locally:**
```bash
npm run build
npm run preview
```
Visit: `http://localhost:4173`

### **2. Verify Build Output:**
- Check `dist/` folder exists
- Verify all images load
- Test music functionality
- Check responsiveness

### **3. Optimize Assets:**
- Compress images if large (>1MB)
- Ensure audio file is optimized
- Remove unused dependencies

### **4. Environment Variables:**
No environment variables needed for this frontend-only project.

## 🌐 Domain Configuration (Optional)

### **Custom Domain:**
1. **GitHub Pages:** Settings → Pages → Custom domain
2. **Vercel:** Project Settings → Domains
3. **Netlify:** Domain Management → Add custom domain

### **SSL/HTTPS:**
- Automatic on all platforms
- No configuration needed

## 🛠️ Troubleshooting

### **Build Errors:**
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **404 Errors on Refresh:**
- For GitHub Pages: Add 404.html with redirect
- For SPA routing: All platforms handle this automatically

### **Images Not Loading:**
- Check paths in `public/` folder
- Use relative paths: `./images/photo1.jpg`
- Verify file extensions (.jpg, .png, not .jpeg)

### **Music Not Playing:**
- Ensure audio file is in `public/audio/`
- Check browser console for CORS errors
- Test with different browsers

## 📊 Deployment Status

### **GitHub Pages:**
- **URL:** `https://mikiyaskifle.github.io/maya_themiki`
- **Branch:** `gh-pages` (auto-created)
- **Build:** Automatic on push to `main`

### **Vercel:**
- **URL:** Auto-generated (e.g., `maya-themiki.vercel.app`)
- **Preview:** Every PR gets preview URL
- **Analytics:** Built-in

### **Netlify:**
- **URL:** `maya-themiki.netlify.app`
- **Forms:** Can add contact form
- **Functions:** Serverless functions available

## 🔄 Continuous Deployment

### **Automatic Updates:**
1. Push to `main` branch
2. Platform automatically:
   - Builds project
   - Runs tests
   - Deploys to production

### **Manual Deployment:**
```bash
# Build locally
npm run build

# Deploy manually
npm run deploy  # For GitHub Pages
vercel --prod   # For Vercel
netlify deploy --prod  # For Netlify
```

## 📱 Mobile Optimization

### **Already Included:**
- Responsive design
- Touch-friendly buttons
- Mobile-optimized images
- Reduced animations on low-power devices

### **Testing:**
- Chrome DevTools Device Mode
- Test on actual iPhone/Android
- Check loading speeds

## 🎯 Quick Start Recommendation

**For fastest deployment:**
1. **Use Vercel** (most React-friendly)
2. **Push to GitHub** (backup & version control)
3. **Connect Vercel to GitHub** (auto-deploy)

**Commands:**
```bash
# 1. Initialize git
git init
git add .
git commit -m "Deploy romantic website"

# 2. Push to GitHub
git remote add origin https://github.com/Mikiyaskifle/maya_themiki.git
git branch -M main
git push -u origin main

# 3. Deploy to Vercel
npm i -g vercel
vercel
```

## ❤️ Final Steps Before Deploying

1. **Add her photos** to `public/images/`
2. **Add futuremarage.png** to `public/`
3. **Test everything** locally
4. **Deploy** using preferred platform
5. **Share the link** with her!

**Your romantic website will be live in minutes!** 🚀