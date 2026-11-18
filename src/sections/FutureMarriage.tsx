import { Heart, Gem, Home, Users, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const FutureMarriage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="future" className="section-spacing">
      <div className="container-padding">
        {/* Animated entrance */}
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-champagne" />
              <Gem className="w-8 h-8 text-romantic-red" />
              <Sparkles className="w-6 h-6 text-champagne" />
            </div>
            
            <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-champagne mb-6">
              Our Beautiful Future Together
            </h2>
            
            <p className="text-soft-rose text-lg max-w-2xl mx-auto">
              A glimpse into the beautiful life we will build together
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* Future Marriage Image */}
            <div className="mb-12">
              <div className="relative rounded-3xl overflow-hidden glass-effect border-2 border-romantic-red/20">
                <div className="aspect-video flex items-center justify-center bg-gradient-dark">
                  {/* Your future marriage image */}
                  <div className="relative w-full h-full">
                    <img
                      src="/futuremarage.png"
                      alt="Our Future Marriage"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        // Show placeholder
                        const placeholder = document.createElement('div')
                        placeholder.className = 'w-full h-full flex items-center justify-center'
                        placeholder.innerHTML = `
                          <div class="text-center p-8">
                            <div class="mb-6">
                              <svg class="w-20 h-20 text-romantic-red mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                              <svg class="w-16 h-16 text-soft-rose fill-soft-rose/20 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                            </div>
                            <div class="mb-8">
                              <h3 class="font-playfair text-4xl font-bold text-champagne mb-4">Our Future Together</h3>
                              <p class="text-soft-rose text-lg max-w-xl mx-auto">Add your future marriage image as futuremarage.png in public folder</p>
                            </div>
                          </div>
                        `
                        target.parentNode?.appendChild(placeholder)
                      }}
                    />
                  </div>
                </div>

                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-romantic-red/30"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-romantic-red/30"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-soft-rose/30"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-soft-rose/30"></div>
              </div>
            </div>

            {/* Future Vision */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Wedding */}
              <div className="text-center p-8 rounded-2xl glass-effect hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-romantic flex items-center justify-center">
                  <Gem className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-champagne mb-4">
                  Our Wedding Day
                </h3>
                <p className="text-soft-rose">
                  The day we officially become one, surrounded by love and celebration
                </p>
              </div>

              {/* Home */}
              <div className="text-center p-8 rounded-2xl glass-effect hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-dark flex items-center justify-center border border-soft-rose/30">
                  <Home className="w-8 h-8 text-soft-rose" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-champagne mb-4">
                  Our Home Together
                </h3>
                <p className="text-soft-rose">
                  Building a warm, loving home filled with laughter and beautiful memories
                </p>
              </div>

              {/* Family */}
              <div className="text-center p-8 rounded-2xl glass-effect hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-dark flex items-center justify-center border border-champagne/30">
                  <Users className="w-8 h-8 text-champagne" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-champagne mb-4">
                  Our Beautiful Family
                </h3>
                <p className="text-soft-rose">
                  Growing our love into a family, creating new generations of happiness
                </p>
              </div>
            </div>

            {/* Love Letter */}
            <div className="rounded-3xl p-8 md:p-12 bg-gradient-dark border border-romantic-red/10">
              <div className="flex items-center gap-4 mb-8">
                <Heart className="w-8 h-8 text-romantic-red fill-romantic-red/20" />
                <h3 className="font-playfair text-3xl font-bold text-champagne">
                  My Promise to You
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-soft-rose text-lg">
                  My love, when I imagine our future together, my heart fills with so much joy and anticipation. 
                  I see us standing together, promising to love each other for all eternity.
                </p>
                
                <div className="pl-6 border-l-2 border-romantic-red/30">
                  <p className="text-champagne text-xl italic">
                    "We will get married and have children together, building a family rooted in love, respect, and endless happiness."
                  </p>
                </div>
                
                <p className="text-soft-rose text-lg">
                  I dream of our wedding day, where we'll exchange vows and rings, promising to be each other's forever. 
                  I envision our home filled with laughter, our children growing up surrounded by love, and every day 
                  being an adventure we share together.
                </p>
                
                <p className="text-soft-rose text-lg">
                  No matter what challenges come our way, I know that with you by my side, we can build 
                  the most beautiful life imaginable. Our love story is just beginning, and the best chapters 
                  are yet to be written.
                </p>
              </div>
              
              <div className="mt-8 pt-8 border-t border-dark-burgundy/30">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-romantic-red fill-romantic-red/20" />
                    <span className="text-soft-rose">Forever and always,</span>
                  </div>
                  <div className="text-champagne font-playfair text-xl">
                    Your Future Husband
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Hearts */}
            <div className="relative h-32 mt-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`absolute w-8 h-8 ${
                    i % 2 === 0 ? 'text-romantic-red' : 'text-soft-rose'
                  } ${i % 3 === 0 ? 'float-delay-1' : i % 2 === 0 ? 'float-delay-2' : 'float-delay-3'}`}
                  style={{
                    left: `${i * 15}%`,
                    top: `${Math.sin(i) * 40 + 50}%`,
                  }}
                >
                  <Heart className="w-full h-full fill-current/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FutureMarriage