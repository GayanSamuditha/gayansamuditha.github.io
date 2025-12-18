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

1. Build the static site:
```bash
npm run build
```

2. The `out` directory contains all the static files.

3. If your repository is named `gayansamuditha.github.io`, you can:
   - Copy the contents of the `out` directory to the `docs` folder, OR
   - Configure GitHub Pages to use the `out` directory as the source

4. Push to GitHub and enable GitHub Pages in your repository settings.

### Alternative: Using GitHub Actions

You can set up a GitHub Action to automatically build and deploy. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

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
