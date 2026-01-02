# Quick Deployment Guide

## 🚀 Quick Start (5 minutes)

### 1. Organize Assets
```bash
# Make script executable and run it
chmod +x setup-assets.sh
./setup-assets.sh
```

Or manually copy files:
```bash
mkdir -p public/img public/cv public/projects
cp -r img/* public/img/
cp cv/cv.pdf public/cv/
cp projects/*.jpg public/projects/ 2>/dev/null || true
cp projects/*.png public/projects/ 2>/dev/null || true
```

### 2. Initialize Git (if not done)
```bash
cd "/Users/gayansamuditha/Desktop/My Website/gayansamuditha.github.io"
git init
git remote add origin https://github.com/GayanSamuditha/gayansamuditha.github.io.git
```

### 3. Commit and Push
```bash
git add .
git commit -m "Deploy React website to GitHub Pages"
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to: https://github.com/GayanSamuditha/gayansamuditha.github.io/settings/pages
2. Under "Source", select **"GitHub Actions"**
3. Save

### 5. Wait for Deployment
- Go to **Actions** tab
- Wait 2-3 minutes for build to complete
- Visit: **https://gayansamuditha.github.io**

## ✅ That's it!

Your site will auto-deploy on every push to `main` branch.

## 🔄 Updating Your Site

```bash
# Make changes, then:
git add .
git commit -m "Update website"
git push
```

GitHub Actions will automatically rebuild and deploy!

