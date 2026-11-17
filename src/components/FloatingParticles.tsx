import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  delay: number
  type: 'circle' | 'heart'
  color: string
}

interface FloatingParticlesProps {
  count?: number
}

const FloatingParticles = ({ count = 30 }: FloatingParticlesProps) => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Generate particles
    const newParticles: Particle[] = Array.from({ length: count }, (_, i) => {
      const isHeart = Math.random() > 0.8
      const size = isHeart 
        ? Math.random() * 12 + 8 
        : Math.random() * 6 + 2
      
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
        delay: Math.random() * 5,
        type: isHeart ? 'heart' : 'circle',
        color: Math.random() > 0.5 ? 'romantic-red' : 'soft-rose'
      }
    })
    
    setParticles(newParticles)

    // Handle mouse movement for interactive particles
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => {
        const distanceToMouse = Math.sqrt(
          Math.pow(particle.x - mousePosition.x, 2) + 
          Math.pow(particle.y - mousePosition.y, 2)
        )
        
        const mouseInfluence = distanceToMouse < 20 
          ? (20 - distanceToMouse) / 20 
          : 0
        
        const style = {
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          opacity: particle.opacity,
          animation: `float ${3 / particle.speed}s ease-in-out infinite`,
          animationDelay: `${particle.delay}s`,
          transform: `translate(${mouseInfluence * 10}px, ${mouseInfluence * 10}px)`,
        }

        if (particle.type === 'heart') {
          return (
            <div
              key={particle.id}
              className="absolute"
              style={style}
            >
              <Heart className={`w-full h-full ${
                particle.color === 'romantic-red' 
                  ? 'text-romantic-red/30 fill-romantic-red/10' 
                  : 'text-soft-rose/30 fill-soft-rose/10'
              }`} />
            </div>
          )
        }

        return (
          <div
            key={particle.id}
            className={`absolute rounded-full ${
              particle.color === 'romantic-red' 
                ? 'bg-romantic-red/20' 
                : 'bg-soft-rose/20'
            }`}
            style={style}
          />
        )
      })}

      {/* Interactive glow effect on mouse */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-romantic-red/5 blur-3xl transition-all duration-200"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  )
}

export default FloatingParticles