import { useState, useEffect } from 'react'
import { Heart, ChevronRight, Mail, Sparkles } from 'lucide-react'

interface PostcardIntroProps {
  onOpen: () => void
}

const PostcardIntro = ({ onOpen }: PostcardIntroProps) => {
  const [isFlashing, setIsFlashing] = useState(true)
  const [envelopeOpen, setEnvelopeOpen] = useState(false)
  const [letterVisible, setLetterVisible] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [isOpening, setIsOpening] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Flash animation for envelope
    const flashInterval = setInterval(() => {
      setIsFlashing(prev => !prev)
    }, 800)

    return () => clearInterval(flashInterval)
  }, [])

  const handleEnvelopeClick = () => {
    if (isOpening) return
    
    setIsOpening(true)
    setEnvelopeOpen(true)
    
    // Animation sequence
    setTimeout(() => {
      setLetterVisible(true)
    }, 500)
    
    setTimeout(() => {
      setShowButton(true)
    }, 1200)
  }

  const handleOpenClick = () => {
    if (isExiting) return
    
    // Start exit animation
    setIsExiting(true)
    // Start fade out animation
    setTimeout(() => {
      onOpen()
    }, 500)
  }

  return (
    <div className={`fixed inset-0 bg-deep-black z-[60] flex items-center justify-center p-2 sm:p-4 md:p-6 transition-opacity duration-500 ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-romantic-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-soft-rose/10 rounded-full blur-3xl"></div>
        
        {/* Floating hearts */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-romantic-red/20 hidden sm:block"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-${Math.floor(Math.random() * 3) + 1} ${Math.random() * 10 + 10}s infinite linear`,
              fontSize: `${Math.random() * 16 + 12}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-2 sm:mx-4">
        {/* Main postcard container */}
        <div className={`relative transition-all duration-1000 ${envelopeOpen ? 'scale-105 sm:scale-110' : 'scale-100'}`}>
          {/* Envelope */}
          <div 
            className={`relative cursor-pointer transition-all duration-500 ${envelopeOpen ? 'opacity-0 -translate-y-8 sm:-translate-y-10' : 'opacity-100'}`}
            onClick={handleEnvelopeClick}
          >
            {/* Envelope back */}
            <div className="relative bg-vintage-ivory rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl border border-golden-seal/20">
              {/* Envelope flap */}
              <div className="absolute -top-4 sm:-top-6 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48">
                <div className={`relative h-8 sm:h-10 md:h-12 bg-vintage-ivory border-l border-r border-t border-golden-seal/20 rounded-t-lg sm:rounded-t-xl ${isFlashing ? 'bg-gradient-to-b from-soft-rose/10 to-transparent' : ''}`}>
                  {/* Seal */}
                  <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-romantic-red rounded-full border-2 sm:border-3 md:border-4 border-vintage-ivory shadow-md sm:shadow-lg flex items-center justify-center">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-vintage-ivory fill-vintage-ivory" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Envelope content */}
              <div className="pt-6 sm:pt-8 text-center">
                <Mail className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-golden-seal/50 mx-auto mb-4 sm:mb-6" />
                <h2 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-deep-black mb-2 sm:mb-4">
                  A Special Delivery
                </h2>
                <p className="text-deep-black/70 text-sm sm:text-base mb-1 sm:mb-2">
                  For your eyes only
                </p>
                <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-golden-seal/60">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Click to open</span>
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Letter that slides out */}
          <div className={`absolute top-0 left-0 w-full transition-all duration-1000 ${letterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 sm:translate-y-10'}`}>
            <div className="relative bg-vintage-ivory rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl border border-golden-seal/20 overflow-hidden">
              {/* Wax seal - hide on very small screens */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-romantic-red/90 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-vintage-ivory fill-vintage-ivory" />
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-1 sm:inset-2 border border-golden-seal/10 rounded-lg sm:rounded-xl pointer-events-none"></div>

              {/* Letter content */}
              <div className="relative z-10">
                {/* Letterhead with button immediately after */}
                <div className="border-b border-golden-seal/20 pb-3 sm:pb-4">
                  <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-deep-black leading-tight">
                    To My Dearest Maya,
                  </h1>
                  <p className="text-golden-seal/60 text-sm sm:text-base mt-1 sm:mt-2 mb-4 sm:mb-6">
                    From the one who loves you endlessly
                  </p>
                  
                  {/* Open button at the TOP - right after heading */}
                  <div className={`transition-all duration-700 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <button
                      onClick={handleOpenClick}
                      disabled={isExiting || !showButton}
                      className="w-full py-3 sm:py-4 bg-gradient-romantic rounded-lg sm:rounded-xl font-semibold text-vintage-ivory flex items-center justify-center gap-2 sm:gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 text-base sm:text-lg mb-6 sm:mb-8"
                    >
                      <span>Open Our World</span>
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    
                    {/* Debug message for small screens */}
                    <p className="text-center text-xs text-golden-seal/50 sm:hidden mb-4">
                      {!showButton ? "Button will appear in a moment..." : "Click above to enter our world"}
                    </p>
                  </div>
                </div>

                {/* Letter body - now appears BELOW the button */}
                <div className="font-serif text-deep-black/80 leading-relaxed space-y-3 sm:space-y-4 pt-4 sm:pt-6">
                  <p className="text-base sm:text-lg">
                    This isn't just a website — it's a world I've created just for you.
                  </p>
                  <p className="text-sm sm:text-base">
                    Every pixel, every animation, every word was crafted with you in mind.
                  </p>
                  <p className="text-sm sm:text-base">
                    It's my way of showing how much you mean to me, in a way that words alone could never capture.
                  </p>
                  <p className="font-semibold text-romantic-red text-base sm:text-lg mt-4 sm:mt-6 italic">
                    Please open this and step into our world...
                  </p>
                </div>
              </div>

              {/* Letter footer */}
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-golden-seal/20 text-center text-xs sm:text-sm text-golden-seal/50">
                <p>Made with infinite love and countless hours of coding magic ✨</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions when envelope is closed */}
        {!envelopeOpen && (
          <div className="mt-4 sm:mt-6 md:mt-8 text-center text-soft-rose/70 text-xs sm:text-sm">
            <p className="mb-1 sm:mb-2">📬 Click the envelope above to reveal the letter</p>
            <p>💝 Then click "Open Our World" to begin</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostcardIntro