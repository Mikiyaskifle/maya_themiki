# A World Made For You ❤️

An immersive digital love experience featuring 3D animations, cinematic transitions, and emotional storytelling.

## ✨ Features

- **Cinematic 3D Opening**: Floating glass heart with realistic lighting and reflections
- **Interactive 3D Gallery**: Personal photos in floating glass frames with smooth animations
- **Emotional Storytelling**: Personal messages with cinematic text reveals
- **3D Timeline**: Glowing curved path with relationship milestones
- **Midnight Memories**: Beautiful night scene with stars and moon
- **Interactive Love Cards**: 3D cards that flip to reveal personal messages
- **Realistic Love Letter**: 3D envelope with unfolding animation
- **Secret Surprise**: Hidden interactive element with special message
- **Cinematic Ending**: Heartbeat animation with final romantic message

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd a-world-made-for-you

# Install dependencies
npm install
```

### Development
```bash
# Start development server
npm run dev
```

### Build for Production
```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 🎨 Personalization

Edit `src/data/loveContent.ts` to customize:

1. **Names**: Your name and her name
2. **Relationship Dates**: Start date and special moments  
3. **Personal Messages**: Feelings, stories, and love letter
4. **Her Photos**: Add her beautiful photos to `public/images/` (photo1.jpg, photo2.jpg, etc.)
5. **Timeline**: Your journey together
6. **Reasons**: Why you love her (interactive cards)
7. **Secret Message**: Hidden surprise just for her

### Adding Her Photos
1. Place her photos in `public/images/` (rename to photo1.jpg, photo2.jpg, etc.)
2. Update the `memories` array in `loveContent.ts` if needed
3. Use the path `/images/photo1.jpg`, `/images/photo2.jpg`, etc.

## 🎵 Adding Music
1. Place your audio file in `public/audio/`
2. Update the `audio.backgroundMusic` path in `loveContent.ts`
3. Recommended: Romantic instrumental music (MP3 format)

## 🏗️ Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── LoadingScreen.tsx
│   ├── MusicToggle.tsx
│   ├── ScrollProgress.tsx
│   ├── FloatingParticles.tsx
│   └── PhotoLightbox.tsx
├── sections/          # Main website sections
│   ├── HeroSection.tsx
│   ├── LoveUniverse.tsx
│   ├── FeelingsSection.tsx
│   ├── MemoriesGallery.tsx
│   ├── StoryTimeline.tsx
│   ├── MidnightSection.tsx
│   ├── ReasonsSection.tsx
│   └── FinalSection.tsx
├── scenes/           # 3D scenes (Three.js)
│   ├── HeartScene.tsx
│   ├── FloatingGallery.tsx
│   ├── NightScene.tsx
│   ├── EnvelopeScene.tsx
│   └── ParticleScene.tsx
├── data/             # Content configuration
│   └── loveContent.ts
├── hooks/            # Custom React hooks
├── assets/           # Static assets
├── styles/           # Global styles
├── App.tsx           # Main app component
└── main.tsx          # Entry point
```

## 🛠️ Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Three.js** - 3D graphics
- **React Three Fiber** - React bindings for Three.js
- **Framer Motion** - Animations
- **GSAP + ScrollTrigger** - Scroll-based animations
- **Lucide React** - Icons

## 📱 Responsive Design

The website is optimized for:
- Desktop (1440p, 1080p)
- Laptop (13-15")
- Tablet (iPad)
- Mobile (iPhone, Android)

## 🚀 Deployment

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy
```

### GitHub Pages
```bash
# Build and deploy
npm run build
# Upload dist/ folder to GitHub Pages
```

## 🎯 Performance

- Lazy-loaded images
- Optimized 3D models
- Code splitting
- Progressive Web App ready
- WebGL fallback support

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to change the color palette:
```javascript
colors: {
  'deep-black': '#080609',
  'dark-burgundy': '#310714',
  'romantic-red': '#A71942',
  'soft-rose': '#F1A5B5',
  'champagne': '#F5D9CB',
  'pure-white': '#FFF8F5',
}
```

### Fonts
Change fonts in `index.html` and `tailwind.config.js`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

### Animations
Adjust animation speeds in `src/index.css`:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

## 🤝 Contributing

This is a personal project, but suggestions are welcome!

## 📄 License

Personal Use - Not for commercial distribution.

## 💖 Special Thanks

Built with love using cutting-edge web technologies to create a truly memorable digital experience.

---

**Note**: This is a frontend-only application. All content is stored locally in the configuration file. No backend, database, or authentication is required.