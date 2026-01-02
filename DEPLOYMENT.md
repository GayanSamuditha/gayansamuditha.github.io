# GitHub Pages Deployment Guide

This guide will help you deploy your Next.js website to GitHub Pages at `gayansamuditha.github.io`.

## Prerequisites

1. GitHub account
2. Git installed on your computer
3. Node.js 18+ installed

## Step 1: Prepare Your Repository

### Option A: If you already have the repository

1. Navigate to your repository directory:
   ```bash
   cd /Users/gayansamuditha/Desktop/My\ Website/gayansamuditha.github.io
   ```

2. Check current git status:
   ```bash
   git status
   ```

### Option B: If you need to initialize git

1. Initialize git (if not already done):
   ```bash
   git init
   ```

2. Add remote repository:
   ```bash
   git remote add origin https://github.com/GayanSamuditha/gayansamuditha.github.io.git
   ```

## Step 2: Move Static Assets

Make sure your images and assets are in the `public` folder:

```bash
# Create necessary directories if they don't exist
mkdir -p public/img
mkdir -p public/cv
mkdir -p public/projects
mkdir -p public/icons

# Copy images (if not already there)
cp -r img/* public/img/ 2>/dev/null || true
cp cv/cv.pdf public/cv/ 2>/dev/null || true
cp projects/*.jpg public/projects/ 2>/dev/null || true
cp projects/*.png public/projects/ 2>/dev/null || true
```

## Step 3: Commit and Push to GitHub

1. **Stage all files:**
   ```bash
   git add .
   ```

2. **Commit your changes:**
   ```bash
   git commit -m "Initial commit: React-based personal website with animations"
   ```

3. **Push to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

   If you get authentication errors, you may need to:
   - Use a Personal Access Token instead of password
   - Or set up SSH keys

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/GayanSamuditha/gayansamuditha.github.io`

2. Click on **Settings** tab

3. Scroll down to **Pages** section (left sidebar)

4. Under **Source**, select:
   - **Source**: `GitHub Actions`
   - (Not "Deploy from a branch")

5. Save the settings

## Step 5: GitHub Actions Will Deploy Automatically

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build your Next.js site when you push to `main` or `master`
- Deploy to GitHub Pages
- Your site will be live at: `https://gayansamuditha.github.io`

## Step 6: Verify Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see a workflow run starting
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, visit: `https://gayansamuditha.github.io`

## Troubleshooting

### Build Fails

If the build fails:
1. Check the Actions tab for error messages
2. Common issues:
   - Missing dependencies in `package.json`
   - TypeScript errors
   - Missing image files

### Images Not Showing

1. Make sure all images are in the `public` folder
2. Check that paths in code use `/img/...` not `/public/img/...`
3. Verify file names match exactly (case-sensitive)

### 404 Errors

1. Make sure `next.config.js` has `output: 'export'`
2. Verify `basePath` is empty (for username.github.io)
3. Check that all routes are properly defined

### GitHub Actions Not Running

1. Make sure the workflow file is in `.github/workflows/deploy.yml`
2. Check that you've enabled GitHub Actions in repository settings
3. Verify you have the correct permissions

## Updating Your Site

After making changes:

1. **Make your changes** to the code

2. **Test locally:**
   ```bash
   npm run dev
   ```

3. **Build locally to test:**
   ```bash
   npm run build
   ```

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push
   ```

5. **GitHub Actions will automatically deploy** the updated site

## File Structure for GitHub Pages

```
gayansamuditha.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── app/                         # Next.js app directory
├── components/                  # React components
├── public/                      # Static assets
│   ├── img/                     # Images
│   ├── cv/                      # CV PDF
│   ├── projects/                # Project images
│   └── icons/                   # Animated icons
├── next.config.js              # Next.js config (export mode)
├── package.json                # Dependencies
└── README.md                   # Project documentation
```

## Important Notes

1. **Repository Name**: Must be exactly `gayansamuditha.github.io` (username.github.io)
2. **Branch**: GitHub Actions watches `main` or `master` branch
3. **Build Output**: Next.js exports to `out/` directory
4. **Base Path**: Empty (since it's username.github.io, not a subdirectory)

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain
2. Update DNS settings with your domain provider
3. GitHub will automatically detect and configure it

## Support

If you encounter issues:
1. Check GitHub Actions logs
2. Verify all file paths are correct
3. Ensure all dependencies are in `package.json`
4. Check that images exist in `public/` folder

---

**Your site will be live at:** `https://gayansamuditha.github.io`

