# Gayan Samuditha - Personal Website

A modern, React-based personal website built with Next.js and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Building for Production

To build the static site for deployment:

```bash
npm run build
```

This will create an `out` directory with all the static files ready for deployment.

## 🌐 Deployment to GitHub Pages

This website is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Quick Deploy

1. **Organize assets:**
   ```bash
   ./setup-assets.sh
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Deploy website"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source
   - Save

4. **Wait for deployment:**
   - Check the Actions tab
   - Site will be live at: `https://gayansamuditha.github.io`

### Automatic Deployment

The `.github/workflows/deploy.yml` workflow automatically:
- Builds the site on every push to `main` branch
- Deploys to GitHub Pages
- No manual steps needed after initial setup

See `QUICK_DEPLOY.md` for detailed instructions.

## 📁 Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── articles/          # Article pages
│   ├── cv/                # CV page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── researchProjects/  # Research projects page
│   ├── teaching/          # Teaching page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
│   └── img/               # Images
└── package.json           # Dependencies
```

## 🎨 Customization

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Content**: Edit the page components in the `app/` directory
- **Styling**: Modify `app/globals.css` or individual component files

## 📝 Notes

### Migration from Quarto

Since this website was migrated from Quarto, you need to:

1. **Move images**: Copy all files from the root `img/` directory to `public/img/` directory
2. **Move CV**: Copy `cv/cv.pdf` to `public/cv/cv.pdf`
3. **Move project images**: Copy project images from `projects/` to `public/projects/`

### File Structure

- Images should be placed in the `public/img/` directory (accessible as `/img/...`)
- The CV PDF should be at `public/cv/cv.pdf` (accessible as `/cv/cv.pdf`)
- Project images should be in `public/projects/` (accessible as `/projects/...`)
- All routes are automatically generated from the `app/` directory structure

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## 📄 License

CC BY-SA 4.0
