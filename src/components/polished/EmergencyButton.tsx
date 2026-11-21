import { useState } from 'react'
import { AlertCircle } from 'lucide-react'

const EmergencyButton = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')

  const messages = [
    "Emergency! Your boyfriend needs 1 hug, 2 kisses, and unlimited attention!",
    "Alert: Severe cuteness deficiency detected! Maya presence required!",
    "Warning: Extreme missing-Maya syndrome! Treatment: Your smile!",
    "Code Red: Love levels critical! Emergency cuddle protocol activated!",
    "SOS: Heart beating too fast thinking about you! Need your calming effect!",
  ]

  const handleClick = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)]
    setMessage(randomMessage)
    setShowMessage(true)
    
    setTimeout(() => {
      setShowMessage(false)
    }, 4000)
  }

  return (
    <div className="glass-effect rounded-2xl p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-romantic-red/10 rounded-full">
          <AlertCircle className="w-6 h-6 text-romantic-red" />
        </div>
        <div>
          <h3 className="font-playfair text-xl font-semibold text-champagne">
            Emergency Love Button
          </h3>
          <p className="text-soft-rose/80 text-sm mt-1">
            Click when you need immediate love
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <button
          onClick={handleClick}
          className="w-full py-4 bg-gradient-to-r from-romantic-red to-soft-rose rounded-xl font-bold text-vintage-ivory text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
        >
          {/* Animated pulse effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          
          <div className="relative z-10 flex items-center justify-center gap-3">
            <span className="text-2xl">🚨</span>
            <span>I MISS YOU!</span>
            <span className="text-2xl">🚨</span>
          </div>
        </button>

        {showMessage && (
          <div 
            className="p-4 rounded-xl bg-romantic-red/10 border border-romantic-red/20 animate-fade-in"
            key={message} // Force re-animation
          >
            <div className="flex items-start gap-3">
              <div className="p-1.5 bg-romantic-red/20 rounded-full mt-0.5">
                <AlertCircle className="w-4 h-4 text-romantic-red" />
              </div>
              <p className="text-champagne font-medium">{message}</p>
            </div>
          </div>
        )}

        <p className="text-soft-rose/60 text-sm text-center pt-2">
          Click for urgent love requests ⚡
        </p>
      </div>
    </div>
  )
}

export default EmergencyButton