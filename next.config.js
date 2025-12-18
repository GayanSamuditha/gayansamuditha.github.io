/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages: if your repo is username.github.io, basePath should be empty
  // If your repo has a different name, set basePath to '/repo-name'
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig

