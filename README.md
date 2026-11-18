# A World Made For You

A premium 3D interactive romantic website dedicated to Maya, featuring cinematic animations, photo gallery, music, and heartfelt storytelling.

## Features

- **Postcard Intro Screen**: Interactive envelope and letter reveal before entering the website
- **Cinematic Hero Section**: 3D animations and romantic storytelling
- **Photo Gallery**: Dedicated section showcasing her photos
- **Music System**: Background music toggle with romantic atmosphere
- **Future Marriage Section**: Revealable section with special message
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- React 18
- TypeScript
- Vite
- Three.js (3D animations)
- Tailwind CSS
- Lucide React Icons

## Project Structure

```
src/
├── components/
│   ├── PostcardIntro.tsx    # Interactive postcard intro screen
│   ├── LoadingScreen.tsx    # Initial loading animation
│   ├── MusicToggle.tsx      # Music control component
│   ├── ScrollProgress.tsx   # Scroll progress indicator
│   └── FloatingParticles.tsx# Background particles
├── sections/
│   ├── HeroSection.tsx      # Main hero section
│   ├── SimpleGallery.tsx    # Photo gallery
│   └── FutureMarriage.tsx   # Marriage reveal section
└── App.tsx                 # Main application
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment to Netlify

This project includes a `netlify.toml` configuration file for easy deployment:

1. **Push to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Add postcard intro screen and Netlify config"
   git push
   ```

2. **Deploy to Netlify**:
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect to your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Configure custom domain** (optional):
   - In Netlify dashboard, go to "Domain settings"
   - Add your custom domain
   - Follow DNS configuration instructions

## Usage

### Adding Photos
1. Place photos in `public/images/` folder
2. Name them `photo1.jpg`, `photo2.jpg`, etc.
3. Update photo array in `SimpleGallery.tsx` if needed

### Adding Music
1. Place MP3 files in `public/audio/` folder
2. Name them `music1.mp3`, `music2.mp3`, etc.
3. Update the music file path in `MusicToggle.tsx` if needed

### Customizing Colors
Edit color values in:
- `tailwind.config.js` for theme colors
- `src/index.css` for CSS variables

## License

This project was created with love 💖