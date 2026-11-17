import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPosition = window.scrollY
      const progress = (scrollPosition / totalHeight) * 100
      setScrollProgress(progress)
      setIsVisible(scrollPosition > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div 
          className="h-full bg-gradient-romantic transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          isVisible
            ? 'opacity-100 translate-y-0 bg-gradient-romantic text-white shadow-lg'
            : 'opacity-0 translate-y-10 bg-dark-burgundy/50 text-soft-rose'
        } hover:scale-110 hover:shadow-xl`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Scroll percentage indicator (desktop only) */}
      <div className="fixed bottom-24 right-8 z-50 hidden lg:block">
        <div className="relative">
          <div className="w-16 h-16 rounded-full glass-effect flex items-center justify-center">
            <span className="font-bold text-champagne">
              {Math.round(scrollProgress)}%
            </span>
          </div>
          
          {/* Circular progress */}
          <svg className="absolute inset-0 w-16 h-16 transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="188.4"
              strokeDashoffset={188.4 - (scrollProgress / 100) * 188.4}
              className="transition-all duration-300"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A71942" />
                <stop offset="100%" stopColor="#F1A5B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  )
}

export default ScrollProgress