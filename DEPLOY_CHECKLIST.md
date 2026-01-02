# ✅ Deployment Checklist

Follow these steps to deploy your website to GitHub Pages.

## Pre-Deployment Steps

### 1. Organize Assets ✅
```bash
./setup-assets.sh
```

This will copy:
- Images from `img/` → `public/img/`
- CV from `cv/cv.pdf` → `public/cv/cv.pdf`
- Project images to `public/projects/`

### 2. Verify Configuration ✅

Check these files are correct:
- ✅ `next.config.js` - Has `output: 'export'` and empty `basePath`
- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow exists
- ✅ `package.json` - All dependencies listed

### 3. Test Build Locally ✅
```bash
npm install
npm run build
```

If build succeeds, you're ready to deploy!

## Deployment Steps

### Step 1: Stage All Changes
```bash
git add .
```

### Step 2: Commit Changes
```bash
git commit -m "Deploy React website with animations to GitHub Pages"
```

### Step 3: Push to GitHub
```bash
git push origin main
```

### Step 4: Enable GitHub Pages

1. Go to: https://github.com/GayanSamuditha/gayansamuditha.github.io/settings/pages

2. Under **"Source"**, select:
   - **"GitHub Actions"** (NOT "Deploy from a branch")

3. Click **Save**

### Step 5: Monitor Deployment

1. Go to **Actions** tab: https://github.com/GayanSamuditha/gayansamuditha.github.io/actions

2. You should see a workflow run called "Deploy to GitHub Pages"

3. Wait 2-3 minutes for it to complete

4. Once complete (green checkmark), your site is live!

## Verify Deployment

Visit: **https://gayansamuditha.github.io**

## Troubleshooting

### Build Fails in Actions
- Check Actions tab for error messages
- Common issues: Missing dependencies, TypeScript errors
- Fix errors and push again

### Images Not Showing
- Verify images are in `public/img/` folder
- Check file paths in code (should be `/img/...` not `/public/img/...`)
- Ensure file names match exactly (case-sensitive)

### 404 Errors
- Verify `next.config.js` has `output: 'export'`
- Check `basePath` is empty
- Ensure all routes are properly defined

### GitHub Actions Not Running
- Check `.github/workflows/deploy.yml` exists
- Verify GitHub Actions is enabled in repository settings
- Check you have write permissions

## Future Updates

After making changes:
```bash
git add .
git commit -m "Your update message"
git push
```

GitHub Actions will automatically rebuild and deploy!

## Files to Commit

Make sure these are committed:
- ✅ All files in `app/` directory
- ✅ All files in `components/` directory
- ✅ `public/` directory with assets
- ✅ `next.config.js`
- ✅ `package.json`
- ✅ `.github/workflows/deploy.yml`
- ✅ Configuration files (tsconfig.json, tailwind.config.js, etc.)

## Files NOT to Commit (in .gitignore)

- ❌ `node_modules/`
- ❌ `.next/`
- ❌ `out/`
- ❌ `.env` files

---

**Ready to deploy?** Run the commands in order above! 🚀

