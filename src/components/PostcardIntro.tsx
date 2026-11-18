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
    // Exit animation
    setIsOpening(true)
    setTimeout(() => {
      onOpen()
    }, 800)
  }

  return (
    <div className="fixed inset-0 bg-deep-black z-[60] flex items-center justify-center p-4">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-romantic-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-soft-rose/10 rounded-full blur-3xl"></div>
        
        {/* Floating hearts */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-romantic-red/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-${Math.floor(Math.random() * 3) + 1} ${Math.random() * 10 + 10}s infinite linear`,
              fontSize: `${Math.random() * 20 + 16}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-md w-full">
        {/* Main postcard container */}
        <div className={`relative transition-all duration-1000 ${envelopeOpen ? 'scale-110' : 'scale-100'}`}>
          {/* Envelope */}
          <div 
            className={`relative cursor-pointer transition-all duration-500 ${envelopeOpen ? 'opacity-0 -translate-y-10' : 'opacity-100'}`}
            onClick={handleEnvelopeClick}
          >
            {/* Envelope back */}
            <div className="relative bg-vintage-ivory rounded-2xl p-8 shadow-2xl border border-golden-seal/20">
              {/* Envelope flap */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48">
                <div className={`relative h-12 bg-vintage-ivory border-l border-r border-t border-golden-seal/20 rounded-t-xl ${isFlashing ? 'bg-gradient-to-b from-soft-rose/10 to-transparent' : ''}`}>
                  {/* Seal */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 bg-romantic-red rounded-full border-4 border-vintage-ivory shadow-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-vintage-ivory fill-vintage-ivory" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Envelope content */}
              <div className="pt-8 text-center">
                <Mail className="w-20 h-20 text-golden-seal/50 mx-auto mb-6" />
                <h2 className="font-playfair text-3xl font-bold text-deep-black mb-4">
                  A Special Delivery
                </h2>
                <p className="text-deep-black/70 mb-2">
                  For your eyes only
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-golden-seal/60">
                  <Sparkles className="w-4 h-4" />
                  <span>Click to open</span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Letter that slides out */}
          <div className={`absolute top-0 left-0 w-full transition-all duration-1000 ${letterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-vintage-ivory rounded-2xl p-8 shadow-2xl border border-golden-seal/20 overflow-hidden">
              {/* Wax seal */}
              <div className="absolute -top-4 -right-4">
                <div className="w-20 h-20 bg-romantic-red/90 rounded-full flex items-center justify-center">
                  <Heart className="w-10 h-10 text-vintage-ivory fill-vintage-ivory" />
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-2 border border-golden-seal/10 rounded-xl pointer-events-none"></div>

              {/* Letter content */}
              <div className="relative z-10">
                {/* Letterhead */}
                <div className="border-b border-golden-seal/20 pb-4 mb-6">
                  <h1 className="font-playfair text-4xl font-bold text-deep-black leading-tight">
                    To My Dearest Maya,
                  </h1>
                  <p className="text-golden-seal/60 mt-2">
                    From the one who loves you endlessly
                  </p>
                </div>

                {/* Letter body */}
                <div className="font-serif text-deep-black/80 leading-relaxed space-y-4 mb-8">
                  <p className="text-lg">
                    This isn't just a website — it's a world I've created just for you.
                  </p>
                  <p>
                    Every pixel, every animation, every word was crafted with you in mind.
                  </p>
                  <p>
                    It's my way of showing how much you mean to me, in a way that words alone could never capture.
                  </p>
                  <p className="font-semibold text-romantic-red">
                    Please open this and step into our world...
                  </p>
                </div>

                {/* Open button */}
                {showButton && (
                  <div className={`transition-all duration-700 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <button
                      onClick={handleOpenClick}
                      disabled={isOpening}
                      className="w-full py-4 bg-gradient-romantic rounded-xl font-semibold text-vintage-ivory flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                    >
                      <span className="text-lg">Open Our World</span>
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}
              </div>

              {/* Letter footer */}
              <div className="mt-8 pt-4 border-t border-golden-seal/20 text-center text-sm text-golden-seal/50">
                <p>Made with infinite love and countless hours of coding magic ✨</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions when envelope is closed */}
        {!envelopeOpen && (
          <div className="mt-8 text-center text-soft-rose/70 text-sm">
            <p className="mb-2">📬 Click the envelope above to reveal the letter</p>
            <p>💝 Then click "Open Our World" to begin</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PostcardIntro