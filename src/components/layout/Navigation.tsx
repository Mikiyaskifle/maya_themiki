import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Home, MessageSquare, GalleryVerticalEnd, Clock, Moon, Lock } from 'lucide-react'

const navItems = [
  { id: 'hero', label: 'Home', icon: <Home className="w-4 h-4" /> },
  { id: 'feelings', label: 'My Feelings', icon: <MessageSquare className="w-4 h-4" /> },
  { id: 'memories', label: 'Our Memories', icon: <GalleryVerticalEnd className="w-4 h-4" /> },
  { id: 'story', label: 'Our Story', icon: <Clock className="w-4 h-4" /> },
  { id: 'midnight', label: 'Midnight Memories', icon: <Moon className="w-4 h-4" /> },
  { id: 'love', label: 'Why I Love You', icon: <Heart className="w-4 h-4" /> },
  { id: 'secret', label: 'Secret Surprise', icon: <Lock className="w-4 h-4" /> },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id)
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <Heart className="w-6 h-6 text-romantic-red heart-beat" />
            <span className="text-xl font-playfair font-bold text-gradient">Our World</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeSection === item.id
                    ? 'bg-romantic-red text-white'
                    : 'text-soft-rose hover:bg-white/5'
                }`}
              >
                {item.icon}
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <MobileMenu 
              navItems={navItems} 
              activeSection={activeSection} 
              scrollToSection={scrollToSection} 
            />
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="hidden md:block mt-4">
          <div className="h-1 w-full bg-dark-burgundy/30 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-romantic-red to-soft-rose"
              animate={{
                width: `${((navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length) * 100}%`
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function MobileMenu({ 
  navItems, 
  activeSection, 
  scrollToSection 
}: { 
  navItems: Array<{ id: string, label: string, icon: React.ReactNode }>
  activeSection: string
  scrollToSection: (sectionId: string) => void 
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 glass-effect rounded-lg"
      >
        <div className="w-6 h-6 flex flex-col justify-center gap-1">
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
              backgroundColor: isOpen ? '#A71942' : '#F1A5B5'
            }}
            className="w-full h-0.5 bg-soft-rose rounded-full origin-center"
          />
          <motion.span
            animate={{
              opacity: isOpen ? 0 : 1,
              backgroundColor: isOpen ? '#A71942' : '#F1A5B5'
            }}
            className="w-full h-0.5 bg-soft-rose rounded-full"
          />
          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
              backgroundColor: isOpen ? '#A71942' : '#F1A5B5'
            }}
            className="w-full h-0.5 bg-soft-rose rounded-full origin-center"
          />
        </div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 top-16 z-50 bg-deep-black/95 backdrop-blur-glass"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="max-w-sm mx-auto px-4 py-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2">
              {navItems.map((item: { id: string, label: string, icon: React.ReactNode }) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsOpen(false)
                  }}
                  className={`w-full px-6 py-4 rounded-xl text-left flex items-center gap-4 transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-romantic-red/20 border border-romantic-red/30'
                      : 'glass-effect'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    activeSection === item.id
                      ? 'bg-romantic-red'
                      : 'bg-dark-burgundy'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className={`font-medium ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-soft-rose'
                    }`}>
                      {item.label}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}