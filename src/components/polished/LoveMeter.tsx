import { useState } from 'react'
import { Heart } from 'lucide-react'

interface LoveMeterProps {
  initialValue?: number
}

const LoveMeter = ({ initialValue = 50 }: LoveMeterProps) => {
  const [percentage, setPercentage] = useState(initialValue)

  const getMessage = (value: number) => {
    if (value < 20) return "Are you even trying? 😅"
    if (value < 40) return "Getting warmer... ❄️"
    if (value < 60) return "Okay, I see effort! 😊"
    if (value < 80) return "Now we're talking! ❤️"
    if (value < 100) return "Almost perfect! 💖"
    return "Only 100%? This website needs at least 1,000,000%! 😂❤️"
  }

  const getColor = (value: number) => {
    if (value < 20) return 'from-gray-400 to-gray-600'
    if (value < 40) return 'from-blue-400 to-blue-600'
    if (value < 60) return 'from-purple-400 to-purple-600'
    if (value < 80) return 'from-pink-500 to-rose-500'
    return 'from-romantic-red to-soft-rose'
  }

  return (
    <div className="glass-effect rounded-2xl p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-romantic-red/10 rounded-full">
          <Heart className="w-6 h-6 text-romantic-red" />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-semibold text-champagne">
            How much do you love me?
          </h3>
          <p className="text-soft-rose/80 text-sm mt-1">
            Slide to show your love percentage
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Visual percentage display */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-champagne">{percentage}</span>
            <span className="text-soft-rose">%</span>
          </div>
          <button
            onClick={() => setPercentage(100)}
            className="px-4 py-2 bg-romantic-red/20 text-romantic-red rounded-full text-sm hover:bg-romantic-red/30 transition-colors"
          >
            Max love
          </button>
        </div>

        {/* Custom styled slider */}
        <div className="relative pt-2">
          <input
            type="range"
            min="0"
            max="100"
            value={percentage}
            onChange={(e) => setPercentage(parseInt(e.target.value))}
            className="w-full h-2 bg-dark-burgundy/50 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #A71942 0%, #A71942 ${percentage}%, #310714 ${percentage}%, #310714 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-soft-rose/60 mt-2">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Message display with smooth transition */}
        <div 
          className="p-4 rounded-xl bg-gradient-to-r from-dark-burgundy/40 to-transparent border border-soft-rose/10 transition-all duration-500"
          key={percentage} // Force re-animation on change
        >
          <p className="text-champagne font-medium text-center">
            {getMessage(percentage)}
          </p>
        </div>

        {/* Progress bar visualization */}
        <div className="h-2 w-full bg-dark-burgundy/30 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${getColor(percentage)} rounded-full transition-all duration-500`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default LoveMeter