import { useEffect, useState } from 'react'
import { Heart, Music, Sparkles } from 'lucide-react'
import HeroSection from './sections/HeroSection'
import LoadingScreen from './components/LoadingScreen'
import MusicToggle from './components/MusicToggle'
import ScrollProgress from './components/ScrollProgress'
import FloatingParticles from './components/FloatingParticles'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleEnterWorld = () => {
    console.log('Entering the world...')
    // This will trigger the cinematic transition
  }

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen bg-deep-black overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-romantic-red/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-soft-rose/5 rounded-full blur-3xl"></div>
      </div>

      {/* UI Components */}
      <FloatingParticles count={50} />
      <ScrollProgress />
      
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <MusicToggle isPlaying={isMusicPlaying} onToggle={toggleMusic} />
        <button className="p-3 glass-effect rounded-full hover:bg-romantic-red/20 transition-colors">
          <Sparkles className="w-5 h-5 text-champagne" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 py-6 px-8 glass-effect backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-romantic-red fill-romantic-red" />
            <span className="font-playfair text-xl font-bold text-champagne">
              A World Made For You
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-soft-rose hover:text-champagne transition-colors">Home</a>
            <a href="#feelings" className="text-soft-rose hover:text-champagne transition-colors">Feelings</a>
            <a href="#memories" className="text-soft-rose hover:text-champagne transition-colors">Memories</a>
            <a href="#story" className="text-soft-rose hover:text-champagne transition-colors">Our Story</a>
            <button 
              onClick={handleEnterWorld}
              className="px-6 py-2 bg-gradient-romantic rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Enter World
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24">
        <section id="hero">
          <HeroSection onEnterWorld={handleEnterWorld} />
        </section>

        {/* Placeholder sections */}
        <div className="section-spacing container-padding text-center">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-champagne mb-8">
            The Experience is Loading...
          </h2>
          <p className="text-soft-rose text-lg max-w-2xl mx-auto">
            We're building your personalized romantic universe with interactive 3D scenes, 
            cinematic animations, and beautiful storytelling.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-effect rounded-2xl p-8 animate-pulse">
                <div className="w-16 h-16 bg-romantic-red/20 rounded-full mx-auto mb-4"></div>
                <div className="h-6 bg-romantic-red/20 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-4 bg-romantic-red/20 rounded w-full mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-dark-burgundy/30">
        <div className="container-padding">
          <p className="text-soft-rose">
            Made with ❤️ using React, Three.js, and endless love
          </p>
          <p className="text-sm text-romantic-red/60 mt-2">
            © {new Date().getFullYear()} A World Made For You
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App