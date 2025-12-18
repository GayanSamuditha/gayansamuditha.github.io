# Animated Icons Guide

This guide explains how to add animated icons (GIFs or MP4 videos) to your website.

## 📁 Directory Structure

Place your animated icons in: `public/icons/`

## 🎯 Where Icons Are Used

### 1. Homepage (`app/page.tsx`)
- **Hero Section**: Research focus area icons (Brain, DNA, AI, LLM)
- **Summary Section**: Technology icons (Python, PyTorch, TensorFlow, ANTsX)

### 2. Skills Page (`app/skills/page.tsx`)
- **Programming Languages**: Python, Java, Go, JavaScript, R
- **ML Frameworks**: PyTorch, TensorFlow, Keras, Scikit-learn
- **Neuroimaging Tools**: ANTsX, FreeSurfer, FSL
- **Cloud Platforms**: AWS, GCP, Azure

## 📋 Required Icon Files

### Research Areas (Homepage Hero)
- `brain.gif` or `brain.mp4` - Brain/Neuroimaging
- `dna.gif` or `dna.mp4` - DNA/Genomics
- `ai.gif` or `ai.mp4` - AI/Deep Learning
- `llm.gif` or `llm.mp4` - Large Language Models

### Technologies (Homepage Summary)
- `python.gif` or `python.mp4`
- `pytorch.gif` or `pytorch.mp4`
- `tensorflow.gif` or `tensorflow.mp4`
- `ants.gif` or `ants.mp4`

### Skills Page
- `java.gif` or `java.mp4`
- `go.gif` or `go.mp4`
- `javascript.gif` or `javascript.mp4`
- `r.gif` or `r.mp4`
- `keras.gif` or `keras.mp4`
- `sklearn.gif` or `sklearn.mp4`
- `freesurfer.gif` or `freesurfer.mp4`
- `fsl.gif` or `fsl.mp4`
- `aws.gif` or `aws.mp4`
- `gcp.gif` or `gcp.mp4`
- `azure.gif` or `azure.mp4`

## 🎨 Icon Specifications

### Recommended Settings:
- **Format**: MP4 preferred (smaller file size, better quality)
- **Dimensions**: 64x64 to 128x128 pixels
- **Duration**: 2-5 second loops
- **File Size**: Under 500KB per icon
- **Background**: Transparent or matching website theme

## 🔧 How to Add Icons

1. **Get or Create Icons**:
   - Download from icon libraries (see resources below)
   - Create custom animations
   - Convert existing GIFs to MP4

2. **Place Files**:
   - Save files in `public/icons/` directory
   - Use exact filenames listed above
   - Both `.gif` and `.mp4` versions work (MP4 preferred)

3. **Test**:
   - Run `npm run dev`
   - Check homepage and skills page
   - Icons should animate automatically

## 📚 Resources for Icons

### Free Icon Sources:
- [LottieFiles](https://lottiefiles.com/) - Animated icons (convert to MP4)
- [IconScout](https://iconscout.com/) - Animated icon library
- [Giphy](https://giphy.com/) - GIFs (convert to MP4)
- [Flaticon](https://www.flaticon.com/) - Animated icons
- [Icons8](https://icons8.com/) - Animated icons

### Conversion Tools:
- **GIF to MP4**: Use FFmpeg, HandBrake, or online converters
- **Optimize**: Compress videos with HandBrake or similar
- **Create Custom**: Use After Effects, Blender, or online animation tools

### FFmpeg Command (GIF to MP4):
```bash
ffmpeg -i input.gif -vf "scale=128:128:flags=lanczos" -c:v libx264 -pix_fmt yuv420p -movflags +faststart output.mp4
```

## 🎭 Customization

### Change Icon Sizes:
Edit the `size` prop in components:
- `size="sm"` - 48x48px
- `size="md"` - 64x64px (default)
- `size="lg"` - 96x96px

### Add More Icons:
1. Add icon files to `public/icons/`
2. Update the icon arrays in:
   - `app/page.tsx` (homepage)
   - `app/skills/page.tsx` (skills page)
3. Follow the format: `{ src: '/icons/filename.gif', videoSrc: '/icons/filename.mp4', alt: 'Description', label: 'Label' }`

## ⚠️ Fallback Behavior

If icons are missing:
- The website will still work
- Placeholder gray boxes will appear
- No errors will be thrown
- You can add icons later without breaking the site

## 🚀 Performance Tips

1. **Use MP4 instead of GIF**: Better compression, smaller files
2. **Optimize videos**: Compress before uploading
3. **Lazy load**: Icons load as you scroll (already implemented)
4. **Cache**: Browser will cache icons after first load

## 📝 Example Icon Array

```typescript
const researchIcons = [
  { 
    src: '/icons/brain.gif',           // Fallback GIF
    videoSrc: '/icons/brain.mp4',      // Preferred MP4
    alt: 'Brain MRI',                   // Alt text
    label: 'Neuroimaging'               // Display label
  },
  // ... more icons
]
```

## 🎯 Next Steps

1. Collect or create your animated icons
2. Place them in `public/icons/` directory
3. Use exact filenames from the list above
4. Test on your local development server
5. Icons will automatically appear on the website!

---

**Note**: The website is fully functional without icons. They enhance the visual appeal but are optional.

