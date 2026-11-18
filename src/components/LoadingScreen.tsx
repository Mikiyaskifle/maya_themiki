import { Heart, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  message?: string
}

const LoadingScreen = ({ message = "Creating your world..." }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100
        return prev + Math.random() * 10
      })
    }, 200)

    const dotsInterval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)

    return () => {
      clearInterval(interval)
      clearInterval(dotsInterval)
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-deep-black z-50 flex items-center justify-center">
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-romantic-red/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-soft-rose/10 rounded-full blur-3xl"></div>
        
        {/* Main content */}
        <div className="relative z-10 text-center">
          {/* Animated heart */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto relative">
              <Heart className="w-full h-full text-romantic-red fill-romantic-red/20 animate-heartbeat" />
              
              {/* Glowing effect */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-romantic-red/20 rounded-full blur-xl animate-pulse"></div>
              </div>
              
              {/* Floating particles around heart */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-champagne rounded-full ${
                    i % 2 === 0 ? 'float-delay-1' : i % 3 === 0 ? 'float-delay-2' : 'float-delay-3'
                  }`}
                  style={{
                    top: `${Math.sin(i * 0.785) * 60 + 50}%`,
                    left: `${Math.cos(i * 0.785) * 60 + 50}%`,
                  }}
                ></div>
              ))}
            </div>
            
            {/* Sparkles */}
            <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-champagne animate-spin" style={{ animationDuration: '3s' }} />
            <Sparkles className="absolute -bottom-4 -left-4 w-6 h-6 text-soft-rose animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
          </div>

          {/* Loading text */}
          <h1 className="font-playfair text-4xl font-bold text-champagne mb-4">
            A World Made For You
          </h1>
          
          <div className="mb-8">
            <p className="text-soft-rose text-lg mb-2">
              {message}{dots}
            </p>
            <p className="text-romantic-red/60 text-sm">
              Creating 3D scenes, cinematic animations, and heartfelt storytelling just for you...
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-64 mx-auto mb-2">
            <div className="h-2 bg-dark-burgundy rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-romantic rounded-full transition-all duration-300"
                style={{ width: `${Math.min(progress, 100)}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-soft-rose mt-1">
              <span>Loading...</span>
              <span>{Math.min(Math.round(progress), 100)}%</span>
            </div>
          </div>

          {/* Tips */}
          <div className="mt-8 text-sm text-romantic-red/50 max-w-md mx-auto">
            <p className="mb-1">✨ Tip: This experience works best with a modern browser</p>
            <p>💖 Tip: Enable audio for the full romantic atmosphere</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen