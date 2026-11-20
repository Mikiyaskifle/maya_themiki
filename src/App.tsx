import { useEffect, useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'
import HeroSection from './sections/HeroSection'
import SimpleGallery from './sections/SimpleGallery'
import FutureMarriage from './sections/FutureMarriage'
import FunInteractiveFeatures from './sections/FunInteractiveFeatures'
import LoadingScreen from './components/LoadingScreen'
import PostcardIntro from './components/PostcardIntro'
import MusicToggle from './components/MusicToggle'
import ScrollProgress from './components/ScrollProgress'
import FloatingParticles from './components/FloatingParticles'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showPostcard, setShowPostcard] = useState(true)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [showFuture, setShowFuture] = useState(false)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handlePostcardOpen = () => {
    setShowPostcard(false)
  }

  const handleEnterWorld = () => {
    console.log('Revealing our future...')
    setShowFuture(true)
    
    // Scroll to future section
    setTimeout(() => {
      document.getElementById('future')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }, 100)
  }

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  if (showPostcard) {
    return <PostcardIntro onOpen={handlePostcardOpen} />
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
      
      <div className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 flex items-center gap-2 sm:gap-4">
        <MusicToggle isPlaying={isMusicPlaying} onToggle={toggleMusic} />
        <button className="p-2 sm:p-3 glass-effect rounded-full hover:bg-romantic-red/20 transition-colors">
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-champagne" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 py-4 px-4 sm:py-6 sm:px-8 glass-effect backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-romantic-red fill-romantic-red" />
            <span className="font-playfair text-lg sm:text-xl font-bold text-champagne">
              A World Made For You
            </span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#hero" className="text-soft-rose hover:text-champagne transition-colors text-sm lg:text-base">Home</a>
            <a href="#memories" className="text-soft-rose hover:text-champagne transition-colors text-sm lg:text-base">Memories</a>
            <button 
              onClick={handleEnterWorld}
              className="px-4 py-2 lg:px-6 lg:py-2 bg-gradient-romantic rounded-full font-semibold hover:scale-105 transition-transform text-sm lg:text-base"
            >
              Enter World
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-soft-rose hover:text-champagne transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24">
        <section id="hero">
          <HeroSection onEnterWorld={handleEnterWorld} />
        </section>

        {/* Photo Gallery */}
        <SimpleGallery />

        {/* Fun Interactive Features - NEW! */}
        <FunInteractiveFeatures />

        {/* Future Marriage Section - Revealed when clicking heart */}
        {showFuture && <FutureMarriage />}
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-dark-burgundy/30">
        <div className="container-padding">
          <p className="text-soft-rose">
            Created with endless love, just for you
          </p>
          <p className="text-sm text-romantic-red/60 mt-2">
            Forever yours
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App