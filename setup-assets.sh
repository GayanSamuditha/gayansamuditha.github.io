#!/bin/bash

# Script to organize assets for GitHub Pages deployment

echo "Setting up assets for GitHub Pages..."

# Create public directories
mkdir -p public/img
mkdir -p public/cv
mkdir -p public/projects
mkdir -p public/icons

# Copy images to public folder
if [ -d "img" ]; then
  echo "Copying images..."
  cp -r img/* public/img/ 2>/dev/null || true
fi

# Copy CV
if [ -f "cv/cv.pdf" ]; then
  echo "Copying CV..."
  cp cv/cv.pdf public/cv/ 2>/dev/null || true
fi

# Copy project images
if [ -d "projects" ]; then
  echo "Copying project images..."
  cp projects/*.jpg public/projects/ 2>/dev/null || true
  cp projects/*.png public/projects/ 2>/dev/null || true
  cp projects/*.JPG public/projects/ 2>/dev/null || true
fi

echo "Asset setup complete!"
echo ""
echo "Next steps:"
echo "1. git add ."
echo "2. git commit -m 'Setup for GitHub Pages'"
echo "3. git push"

