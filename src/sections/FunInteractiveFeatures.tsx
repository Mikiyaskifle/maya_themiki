import { useState, useEffect, useCallback } from 'react'
import { Heart, AlertTriangle, Sparkles, Mail, MessageSquare, RotateCw, Users, Trophy, Star, Zap, ChevronRight } from 'lucide-react'
import { funFeatures, gameConfig } from '../data/funFeatures'

// Helper functions
const getRandomItem = <T,>(items: T[]): T => items[Math.floor(Math.random() * items.length)]

const FunInteractiveFeatures = () => {
  // State
  const [lovePercentage, setLovePercentage] = useState(85)
  const [activeMessage, setActiveMessage] = useState<{
    type: 'emergency' | 'fortune' | 'hug' | 'wheel';
    text: string;
  } | null>(null)
  const [openLetter, setOpenLetter] = useState<number | null>(null)
  const [reasonIndex, setReasonIndex] = useState(0)
  const [kissScore, setKissScore] = useState(0)
  const [floatingKisses, setFloatingKisses] = useState<Array<{id: number, x: number, y: number, type: string}>>([])
  const [isKissGameActive, setIsKissGameActive] = useState(true)

  // Love meter message
  const getLoveMessage = useCallback((percentage: number) => {
    const level = funFeatures.loveMeter.levels.find(
      l => percentage >= l.min && percentage <= l.max
    )
    return level?.message || "I cherish every moment with you."
  }, [])

  // Feature handlers
  const handleFeatureClick = useCallback((type: 'emergency' | 'fortune' | 'hug' | 'wheel') => {
    const messages = {
      emergency: getRandomItem(funFeatures.emergencyButton.messages),
      fortune: getRandomItem(funFeatures.loveFortune.fortunes),
      hug: getRandomItem(funFeatures.virtualHug.messages),
      wheel: getRandomItem(funFeatures.loveWheel.options)
    }
    
    setActiveMessage({ type, text: messages[type] })
    setTimeout(() => setActiveMessage(null), 4000)
  }, [])

  const handleNextReason = useCallback(() => {
    setReasonIndex((prev) => (prev + 1) % funFeatures.reasonsILoveYou.reasons.length)
  }, [])

  // Kiss game
  const generateKisses = useCallback(() => {
    const kisses = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 85 + 7.5,
      y: Math.random() * 80 + 10,
      type: getRandomItem(gameConfig.kissCollector.kissTypes)
    }))
    setFloatingKisses(kisses)
    setIsKissGameActive(true)
  }, [])

  const handleKissClick = useCallback((id: number) => {
    setFloatingKisses(prev => prev.filter(kiss => kiss.id !== id))
    setKissScore(prev => {
      const newScore = prev + 1
      if (newScore >= gameConfig.kissCollector.targetScore) {
        setIsKissGameActive(false)
        setTimeout(() => {
          setKissScore(0)
          generateKisses()
        }, 1800)
      }
      return newScore
    })
  }, [generateKisses])

  // Initialize
  useEffect(() => {
    generateKisses()
    setReasonIndex(Math.floor(Math.random() * funFeatures.reasonsILoveYou.reasons.length))
  }, [generateKisses])

  return (
    <section id="fun-features" className="section-spacing bg-gradient-to-b from-dark-burgundy/10 to-deep-black/20">
      <div className="container-padding">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-romantic-red/10 rounded-full">
            <Sparkles className="w-5 h-5 text-champagne" />
            <span className="text-soft-rose text-sm font-medium tracking-wide">
              Interactive Love & Laughter
            </span>
            <Sparkles className="w-5 h-5 text-champagne" />
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-champagne mb-6 leading-tight">
            Our Playful Connection
          </h2>
          
          <p className="text-soft-rose/90 text-lg max-w-2xl mx-auto leading-relaxed">
            Little moments of joy, made just for us. Each feature here is a reminder of why every day with you feels special.
          </p>
        </div>

        {/* Primary Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          
          {/* Love Meter */}
          <div className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-romantic-red/10 rounded-full">
                <Heart className="w-6 h-6 text-romantic-red fill-romantic-red/30" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-champagne">
                Our Love Scale
              </h3>
            </div>
            
            <p className="text-soft-rose/80 mb-8 leading-relaxed">
              How full does your heart feel today?
            </p>
            
            <div className="space-y-6">
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={lovePercentage}
                  onChange={(e) => setLovePercentage(parseInt(e.target.value))}
                  className="w-full h-2 bg-dark-burgundy/50 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-romantic [&::-webkit-slider-thumb]:shadow-lg"
                />
                <div 
                  className="absolute top-0 left-0 h-2 bg-gradient-romantic rounded-full pointer-events-none transition-all duration-300"
                  style={{ width: `${lovePercentage}%` }}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-soft-rose font-semibold text-lg">{lovePercentage}%</span>
                <button 
                  onClick={() => setLovePercentage(100)}
                  className="px-5 py-2.5 bg-romantic-red/15 text-romantic-red rounded-full text-sm font-medium hover:bg-romantic-red/25 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Overflowing 💖
                </button>
              </div>
              
              <div className="p-5 bg-dark-burgundy/20 rounded-xl border border-soft-rose/10">
                <p className="text-champagne font-medium leading-relaxed italic">
                  "{getLoveMessage(lovePercentage)}"
                </p>
              </div>
            </div>
          </div>

          {/* Quick Love Actions */}
          <div className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-champagne/10 rounded-full">
                <Zap className="w-6 h-6 text-champagne" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-champagne">
                Quick Love Boost
              </h3>
            </div>
            
            <p className="text-soft-rose/80 mb-8 leading-relaxed">
              Instant moments of connection, for when you need them most.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => handleFeatureClick('emergency')}
                className="group relative py-4 px-4 bg-gradient-to-br from-romantic-red/20 to-soft-rose/20 rounded-xl font-semibold text-champagne hover:from-romantic-red/30 hover:to-soft-rose/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-romantic-red/20"
              >
                <div className="flex flex-col items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-romantic-red" />
                  <span className="text-sm">I Miss You</span>
                </div>
              </button>
              
              <button
                onClick={() => handleFeatureClick('hug')}
                className="group relative py-4 px-4 bg-gradient-to-br from-soft-rose/20 to-champagne/20 rounded-xl font-semibold text-champagne hover:from-soft-rose/30 hover:to-champagne/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-soft-rose/20"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="text-xl">🤗</div>
                  <span className="text-sm">Need a Hug</span>
                </div>
              </button>
              
              <button
                onClick={() => handleFeatureClick('fortune')}
                className="group relative py-4 px-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl font-semibold text-champagne hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-purple-600/20"
              >
                <div className="flex flex-col items-center gap-2">
                  <Sparkles className="w-5 h-5 text-champagne" />
                  <span className="text-sm">Our Future</span>
                </div>
              </button>
              
              <button
                onClick={() => handleFeatureClick('wheel')}
                className="group relative py-4 px-4 bg-gradient-to-br from-golden-seal/20 to-champagne/20 rounded-xl font-semibold text-champagne hover:from-golden-seal/30 hover:to-champagne/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 border border-golden-seal/20"
              >
                <div className="flex flex-col items-center gap-2">
                  <RotateCw className="w-5 h-5 text-champagne" />
                  <span className="text-sm">Spin & Play</span>
                </div>
              </button>
            </div>
            
            {activeMessage && (
              <div className={`p-5 rounded-xl border animate-fade-in ${
                activeMessage.type === 'emergency' ? 'bg-romantic-red/10 border-romantic-red/20' :
                activeMessage.type === 'hug' ? 'bg-soft-rose/10 border-soft-rose/20' :
                activeMessage.type === 'fortune' ? 'bg-purple-600/10 border-purple-600/20' :
                'bg-golden-seal/10 border-golden-seal/20'
              }`}>
                <p className="text-champagne font-medium leading-relaxed">{activeMessage.text}</p>
              </div>
            )}
          </div>

          {/* Reasons I Love You */}
          <div className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-romantic-red/10 rounded-full">
                <Star className="w-6 h-6 text-romantic-red fill-romantic-red/30" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-champagne">
                Why You're Amazing
              </h3>
            </div>
            
            <p className="text-soft-rose/80 mb-8 leading-relaxed">
              Just a few of the countless reasons my heart beats for you.
            </p>
            
            <div className="p-6 bg-dark-burgundy/20 rounded-xl border border-soft-rose/10 min-h-[140px] flex items-center justify-center mb-6">
              <p className="text-champagne text-lg font-medium leading-relaxed text-center">
                "{funFeatures.reasonsILoveYou.reasons[reasonIndex]}"
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <button
                onClick={handleNextReason}
                className="group flex items-center gap-3 px-5 py-3 bg-gradient-romantic rounded-xl font-semibold text-vintage-ivory hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Another Reason</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="text-soft-rose/60 text-sm">
                {reasonIndex + 1} / {funFeatures.reasonsILoveYou.reasons.length}
              </div>
            </div>
          </div>

        </div>

        {/* Extended Features */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-champagne mb-4">
              More Little Joys
            </h3>
            <p className="text-soft-rose/80 max-w-2xl mx-auto">
              Discover these thoughtful features, each crafted with you in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kiss Collector Game */}
            <div className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-romantic-red/10 rounded-full">
                    <Trophy className="w-6 h-6 text-romantic-red" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-xl font-bold text-champagne">
                      Kiss Collector
                    </h4>
                    <p className="text-soft-rose/80 text-sm">
                      Collect {gameConfig.kissCollector.targetScore} kisses for a sweet surprise
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-3xl font-bold text-romantic-red">{kissScore}</div>
                  <div className="text-soft-rose/60 text-sm">collected</div>
                </div>
              </div>
              
              {/* Game Area */}
              <div className="relative h-56 bg-gradient-to-br from-dark-burgundy/40 to-romantic-red/5 rounded-xl overflow-hidden mb-6 border border-soft-rose/10">
                {floatingKisses.map((kiss) => (
                  <button
                    key={kiss.id}
                    onClick={() => handleKissClick(kiss.id)}
                    className="absolute text-2xl hover:scale-125 transition-all duration-300 cursor-pointer animate-float"
                    style={{
                      left: `${kiss.x}%`,
                      top: `${kiss.y}%`,
                      filter: `drop-shadow(0 2px 4px rgba(167, 25, 66, ${0.2 + Math.random() * 0.3}))`,
                      animationDelay: `${kiss.id * 0.3}s`
                    }}
                  >
                    {kiss.type}
                  </button>
                ))}
                
                {/* Instructions */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <p className="text-soft-rose/90 bg-dark-burgundy/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                    Click the kisses to collect them ✨
                  </p>
                </div>
                
                {/* Progress */}
                {!isKissGameActive && (
                  <div className="absolute inset-0 bg-gradient-to-br from-romantic-red/20 to-soft-rose/20 backdrop-blur-sm flex items-center justify-center animate-fade-in">
                    <div className="text-center p-6">
                      <div className="text-4xl mb-4">🎉</div>
                      <p className="text-champagne font-bold text-lg">You collected them all!</p>
                      <p className="text-soft-rose mt-2">A million more kisses are yours ❤️</p>
                    </div>
                  </div>
                )}
              </div>
              
              <button
                onClick={generateKisses}
                className="w-full py-3 bg-dark-burgundy/40 text-soft-rose rounded-xl font-medium hover:bg-dark-burgundy/60 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                Refresh the kisses
              </button>
            </div>

            {/* Open When Letters */}
            <div className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-romantic-red/10 rounded-full">
                  <Mail className="w-6 h-6 text-romantic-red" />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-champagne">
                    Letters For You
                  </h4>
                  <p className="text-soft-rose/80 text-sm">
                    Little notes for different moments
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {funFeatures.openWhenLetters.letters.map((letter) => (
                  <div
                    key={letter.id}
                    className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer hover:scale-[1.02] ${
                      openLetter === letter.id 
                        ? 'bg-romantic-red/10 border-romantic-red/30' 
                        : 'bg-dark-burgundy/20 border-dark-burgundy/40 hover:border-soft-rose/20'
                    }`}
                    onClick={() => setOpenLetter(openLetter === letter.id ? null : letter.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-romantic-red/10 rounded-full flex items-center justify-center">
                        <span className="text-xl">{letter.emoji}</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-champagne mb-1">{letter.title}</h5>
                        {openLetter === letter.id && (
                          <p className="text-soft-rose/90 text-sm mt-3 leading-relaxed animate-fade-in">
                            {letter.content}
                          </p>
                        )}
                      </div>
                      <div className={`text-sm transition-colors ${
                        openLetter === letter.id ? 'text-romantic-red' : 'text-soft-rose/60'
                      }`}>
                        {openLetter === letter.id ? 'Close' : 'Open'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sweet Compliments & Future Dreams */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sweet Compliments */}
          <div className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-soft-rose/10 rounded-full">
                <MessageSquare className="w-6 h-6 text-soft-rose" />
              </div>
              <div>
                <h4 className="font-playfair text-xl font-bold text-champagne">
                  Sweet Nothings
                </h4>
                <p className="text-soft-rose/80 text-sm">
                  The best "complaints" I could ask for
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {funFeatures.boyfriendComplaints.complaints.map((complaint) => (
                <button
                  key={complaint.id}
                  onClick={() => alert(complaint.response)}
                  className="group p-5 bg-gradient-to-r from-dark-burgundy/30 to-dark-burgundy/10 rounded-xl text-left border border-dark-burgundy/50 hover:border-romantic-red/30 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-romantic-red/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-lg">💌</span>
                    </div>
                    <div>
                      <p className="text-champagne font-medium mb-2">{complaint.text}</p>
                      <div className="text-romantic-red/80 text-sm font-medium group-hover:text-romantic-red transition-colors">
                        Click to see my response →
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Future Dreams */}
          <div className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-soft-rose/10 rounded-full">
                <Users className="w-6 h-6 text-soft-rose" />
              </div>
              <div>
                <h4 className="font-playfair text-xl font-bold text-champagne">
                  Our Future Dreams
                </h4>
                <p className="text-soft-rose/80 text-sm">
                  A glimpse of the beautiful life ahead
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-5 bg-gradient-to-r from-romantic-red/5 to-soft-rose/5 rounded-xl border border-soft-rose/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">👨‍👩‍👧‍👦</div>
                  <h5 className="font-semibold text-champagne">Our Family</h5>
                </div>
                <p className="text-soft-rose/90 text-sm leading-relaxed">
                  {funFeatures.futureFamily.family.motto}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-dark-burgundy/20 rounded-xl border border-dark-burgundy/40">
                  <h6 className="font-medium text-champagne mb-2">👨 Dad</h6>
                  <p className="text-soft-rose/80 text-sm">{funFeatures.futureFamily.family.dad}</p>
                </div>
                
                <div className="p-4 bg-dark-burgundy/20 rounded-xl border border-dark-burgundy/40">
                  <h6 className="font-medium text-champagne mb-2">👩 Mom</h6>
                  <p className="text-soft-rose/80 text-sm">{funFeatures.futureFamily.family.mom}</p>
                </div>
              </div>
              
              <div className="p-4 bg-dark-burgundy/20 rounded-xl border border-dark-burgundy/40">
                <h6 className="font-medium text-champagne mb-3">Our Little Ones</h6>
                <div className="flex flex-wrap gap-2">
                  {funFeatures.futureFamily.family.kids.map((kid, index) => (
                    <span key={index} className="px-3 py-1.5 bg-romantic-red/10 text-soft-rose rounded-full text-sm">
                      {kid}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-20 text-center">
          <div className="inline-block mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-romantic rounded-full blur-lg opacity-50"></div>
              <div className="relative px-8 py-4 glass-effect rounded-full border border-romantic-red/30">
                <span className="text-soft-rose font-medium">
                  Made with endless love and thoughtful moments ✨
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-champagne text-xl font-playfair italic max-w-xl mx-auto mb-10 leading-relaxed">
            "Every feature here is a small reflection of the joy you bring to my life."
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="group px-6 py-3 bg-gradient-romantic rounded-full font-medium text-vintage-ivory hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-2">
                💖 Our Journey
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-6 py-3 glass-effect rounded-full font-medium text-champagne hover:scale-105 transition-all duration-300">
              😊 Always Smiling With You
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FunInteractiveFeatures