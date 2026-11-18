# Quick GitHub Pages Deployment

## 🚀 5-Minute Deployment to GitHub Pages

### **Step 1: Initialize Git (if not done)**
```bash
# Open PowerShell in D:\mykey_project\baby
cd "d:\mykey_project\baby"

# Initialize git
git init

# Add all files
git add .

# Commit changes
git commit -m "Deploy romantic website for her"
```

### **Step 2: Connect to Your GitHub Repository**
```bash
# Add your GitHub repository
git remote add origin https://github.com/Mikiyaskifle/maya_themiki.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

### **Step 3: Install GitHub Pages Deployment Tool**
```bash
# Install gh-pages
npm install gh-pages --save-dev
```

### **Step 4: Update package.json**
Add these lines to your `package.json`:

```json
{
  "name": "a-world-made-for-you",
  "homepage": "https://mikiyaskifle.github.io/maya_themiki",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  // ... rest of your package.json
}
```

### **Step 5: Deploy to GitHub Pages**
```bash
# Build and deploy
npm run deploy
```

### **Step 6: Enable GitHub Pages**
1. Go to: `https://github.com/Mikiyaskifle/maya_themiki`
2. Click **Settings** → **Pages**
3. Under **Source**, select: **GitHub Actions**
4. Wait 1-2 minutes for deployment

### **🎉 Your Site is Live!**
Visit: **`https://mikiyaskifle.github.io/maya_themiki`**

## 🔧 Troubleshooting GitHub Pages

### **If deployment fails:**
```bash
# Clean and retry
rm -rf node_modules package-lock.json
npm install
npm run build
npm run deploy
```

### **If site shows 404:**
1. Wait 5 minutes (GitHub needs time)
2. Check Actions tab for build status
3. Ensure `dist/` folder exists after build

### **If images don't load:**
- Use relative paths: `./images/photo1.jpg`
- Check file names (case-sensitive)
- Re-upload images to `public/images/`

## 📁 Required Files Checklist
- [ ] `public/images/photo1.jpg` - Her photo 1
- [ ] `public/images/photo2.jpg` - Her photo 2
- [ ] `public/images/photo3.jpg` - Her photo 3
- [ ] `public/images/photo4.jpg` - Her photo 4
- [ ] `public/images/photo5.jpg` - Her photo 5
- [ ] `public/images/photo6.jpg` - Her photo 6
- [ ] `public/audio/music1.mp3` - Your music
- [ ] `public/futuremarage.png` - Future marriage image

## 🎯 Quick Test Before Deploying
```bash
# Test build locally
npm run build

# Preview build
npm run preview

# Visit: http://localhost:4173
# Check everything works
```

## ⚡ One-Command Deployment (After Setup)
```bash
# Just run this after making changes
npm run deploy
```

## 🔄 Updating Your Site
1. Make changes to your code
2. Run:
```bash
git add .
git commit -m "Update romantic content"
git push
npm run deploy
```

## 📞 Need Help?
- **GitHub Issues**: Check build logs in Actions tab
- **Browser Console**: F12 → Console for errors
- **Network Tab**: Check if files load correctly

**Your romantic website will be live at:**  
**`https://mikiyaskifle.github.io/maya_themiki`** 🎉❤️