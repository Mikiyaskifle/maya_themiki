import { ArrowRight, Heart, Sparkles } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

interface HeroSectionProps {
  onEnterWorld: () => void
}

const HeroSection = ({ onEnterWorld }: HeroSectionProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
        
        setMousePosition({ x, y })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-dark opacity-70"></div>
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-romantic-red/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-soft-rose/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
          }}
        ></div>
      </div>

      {/* 3D Heart Scene (Placeholder - will be replaced with actual Three.js) */}
      <div className="relative z-10">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          {/* Glass heart container */}
          <div 
            className="absolute inset-0 rounded-full glass-effect border border-romantic-red/30"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {/* Inner glow */}
            <div className="absolute inset-8 rounded-full bg-romantic-red/10 blur-xl"></div>
            
            {/* Heart icon - Clickable */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={onEnterWorld}
                className="focus:outline-none hover:scale-110 transition-transform duration-300"
                aria-label="Reveal our future"
              >
                <Heart className="w-3/4 h-3/4 text-romantic-red fill-romantic-red/20 animate-heartbeat" />
              </button>
            </div>
            
            {/* Reflective highlights */}
            <div 
              className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-sm"
              style={{
                transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
              }}
            ></div>
          </div>

          {/* Floating particles around heart */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            const distance = 160
            const x = Math.cos(angle) * distance
            const y = Math.sin(angle) * distance
            
            return (
              <div
                key={i}
                className={`absolute w-3 h-3 rounded-full ${
                  i % 3 === 0 ? 'bg-romantic-red' : i % 3 === 1 ? 'bg-soft-rose' : 'bg-champagne'
                } ${i % 2 === 0 ? 'float-delay-1' : i % 3 === 0 ? 'float-delay-2' : 'float-delay-3'}`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              ></div>
            )
          })}

          {/* Rose petals */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-8 h-8 rounded-full bg-soft-rose/30 blur-sm ${
                i % 2 === 0 ? 'float-delay-2' : 'float-delay-3'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Text content */}
        <div className="mt-12 text-center max-w-3xl mx-auto px-4">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-champagne" />
              <span className="text-soft-rose text-sm uppercase tracking-widest">
                A Cinematic Experience
              </span>
              <Sparkles className="w-5 h-5 text-champagne" />
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-champagne mb-6 leading-tight">
              Somewhere between a thousand<br />
              <span className="text-gradient">ordinary moments</span>,<br />
              you became my favorite.
            </h1>
            
            <p className="text-2xl text-soft-rose mb-12">
              A little world, made just for you.
            </p>
          </div>

          {/* Enter World Button */}
          <button
            onClick={onEnterWorld}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-romantic"></div>
            <div 
              className={`absolute inset-0 bg-gradient-dark transition-opacity duration-300 ${
                isHovering ? 'opacity-0' : 'opacity-30'
              }`}
            ></div>
            
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-romantic-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Button content */}
            <span className="relative z-10 text-white">ENTER MY WORLD</span>
            <Heart className="relative z-10 w-5 h-5 fill-white" />
            <ArrowRight className={`relative z-10 w-5 h-5 transition-transform duration-300 ${
              isHovering ? 'translate-x-2' : ''
            }`} />
          </button>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-romantic-red/30 rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-romantic-red rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
            </div>
            <p className="text-romantic-red/50 text-sm mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-black to-transparent"></div>
    </div>
  )
}

export default HeroSection