import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkle } from 'lucide-react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 5
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-deep-black"
        >
          <div className="text-center max-w-md px-4">
            {/* Animated Heart */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-8 flex justify-center"
            >
              <Heart className="w-24 h-24 text-romantic-red" />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-playfair font-bold text-gradient mb-4"
            >
              A World Made For You
            </motion.h1>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Sparkle className="w-4 h-4 text-soft-rose" />
              <p className="text-champagne text-lg">
                Creating your romantic experience
              </p>
              <Sparkle className="w-4 h-4 text-soft-rose" />
            </motion.div>

            {/* Progress Bar */}
            <div className="relative mb-4">
              <div className="h-2 bg-dark-burgundy/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-romantic-red to-soft-rose rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
              </div>
              
              {/* Progress Percentage */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-8 right-0 text-soft-rose text-sm font-medium"
              >
                {progress}%
              </motion.div>
            </div>

            {/* Loading Messages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-soft-rose/70 text-sm h-6"
            >
              {progress < 25 && "Initializing WebGL..."}
              {progress >= 25 && progress < 50 && "Creating 3D scene..."}
              {progress >= 50 && progress < 75 && "Loading romantic particles..."}
              {progress >= 75 && progress < 100 && "Almost ready for love..."}
              {progress >= 100 && "Welcome to our world ❤️"}
            </motion.div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-romantic-red/50 rounded-full"
                  initial={{
                    x: Math.random() * 100 - 50 + '%',
                    y: Math.random() * 100 - 50 + '%',
                    opacity: 0
                  }}
                  animate={{
                    y: ['0%', '-100%'],
                    opacity: [0, 1, 0],
                    x: ['0%', `${Math.random() * 100 - 50}%`]
                  }}
                  transition={{
                    duration: Math.random() * 2 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}