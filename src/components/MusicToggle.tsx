import { Music, MusicOff } from 'lucide-react'
import { useState } from 'react'

interface MusicToggleProps {
  isPlaying: boolean
  onToggle: () => void
}

const MusicToggle = ({ isPlaying, onToggle }: MusicToggleProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Background glow */}
      <div className={`absolute inset-0 rounded-full blur transition-all duration-300 ${
        isPlaying ? 'bg-romantic-red/30' : 'bg-dark-burgundy/30'
      } ${isHovered ? 'scale-125' : 'scale-100'}`}></div>
      
      {/* Main button */}
      <div className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
        isPlaying 
          ? 'bg-gradient-romantic text-white' 
          : 'glass-effect text-soft-rose'
      } ${isHovered ? 'scale-110' : 'scale-100'}`}>
        {isPlaying ? (
          <Music className="w-6 h-6" />
        ) : (
          <MusicOff className="w-6 h-6" />
        )}
      </div>
      
      {/* Tooltip */}
      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 rounded-lg text-xs whitespace-nowrap transition-all duration-200 ${
        isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
      } glass-effect border border-romantic-red/20`}>
        {isPlaying ? 'Music On' : 'Music Off'}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 border-t border-romantic-red/20 border-l border-romantic-red/20 bg-dark-burgundy rotate-45"></div>
      </div>
      
      {/* Animated sound waves when playing */}
      {isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute w-full h-full rounded-full border border-romantic-red/30"
              style={{
                animation: `pulse 1.5s ease-in-out infinite ${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      )}
    </button>
  )
}

export default MusicToggle