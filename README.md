# Abhishek Kale - Portfolio Website

A premium, interactive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Linux Boot Sequence Animation** - Unique terminal-style intro showcasing technical background
- **Interactive Career Timeline** - Clickable experience nodes with detailed case studies
- **Filterable Projects Grid** - Categorized project showcase
- **Responsive Design** - Fully optimized for mobile devices
- **GitHub Pages Ready** - Auto-deploys via GitHub Actions

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This site auto-deploys to GitHub Pages when you push to the `main` branch.

### Manual Setup

1. Go to your GitHub repository settings
2. Navigate to Pages
3. Under "Build and deployment", select "GitHub Actions"
4. Push to main branch - the workflow will build and deploy automatically

## Customization

All content is centralized in `src/data/content.ts`. Update this file to customize:

- Profile information
- Boot sequence messages
- Experience details
- Projects
- Skills
- Education & certifications

## License

MIT
