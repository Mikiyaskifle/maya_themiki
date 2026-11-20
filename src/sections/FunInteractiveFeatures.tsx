import { useState, useEffect } from 'react'
import { Heart, AlertTriangle, Sparkles, Mail, MessageSquare, RotateCw, Users, Trophy, Smile } from 'lucide-react'
import { funFeatures, gameConfig } from '../data/funFeatures'

const FunInteractiveFeatures = () => {
  const [lovePercentage, setLovePercentage] = useState(50)
  const [emergencyMessage, setEmergencyMessage] = useState<string | null>(null)
  const [fortune, setFortune] = useState<string | null>(null)
  const [openLetter, setOpenLetter] = useState<number | null>(null)
  const [complaintSubmitted, setComplaintSubmitted] = useState(false)
  const [reasonIndex, setReasonIndex] = useState(0)
  const [hugMessage, setHugMessage] = useState<string | null>(null)
  const [wheelResult, setWheelResult] = useState<string | null>(null)
  const [kissScore, setKissScore] = useState(0)
  const [floatingKisses, setFloatingKisses] = useState<Array<{id: number, x: number, y: number, type: string}>>([])

  // Love Meter
  const getLoveMessage = (percentage: number) => {
    const level = funFeatures.loveMeter.levels.find(
      l => percentage >= l.min && percentage <= l.max
    )
    return level?.message || "I love you! ❤️"
  }

  // Emergency Button
  const handleEmergencyClick = () => {
    const randomMessage = funFeatures.emergencyButton.messages[
      Math.floor(Math.random() * funFeatures.emergencyButton.messages.length)
    ]
    setEmergencyMessage(randomMessage)
    setTimeout(() => setEmergencyMessage(null), 5000)
  }

  // Love Fortune
  const handleFortuneClick = () => {
    const randomFortune = funFeatures.loveFortune.fortunes[
      Math.floor(Math.random() * funFeatures.loveFortune.fortunes.length)
    ]
    setFortune(randomFortune)
  }



  // Reasons I Love You
  const handleNextReason = () => {
    setReasonIndex((prev) => (prev + 1) % funFeatures.reasonsILoveYou.reasons.length)
  }

  // Virtual Hug
  const handleHugClick = () => {
    const randomMessage = funFeatures.virtualHug.messages[
      Math.floor(Math.random() * funFeatures.virtualHug.messages.length)
    ]
    setHugMessage(randomMessage)
    setTimeout(() => setHugMessage(null), 4000)
  }

  // Spin the Wheel
  const handleSpinWheel = () => {
    const randomOption = funFeatures.loveWheel.options[
      Math.floor(Math.random() * funFeatures.loveWheel.options.length)
    ]
    setWheelResult(randomOption)
    setTimeout(() => setWheelResult(null), 5000)
  }

  // Kiss Collector Game
  const generateKisses = () => {
    const kisses = []
    for (let i = 0; i < 15; i++) {
      kisses.push({
        id: i,
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
        type: gameConfig.kissCollector.kissTypes[
          Math.floor(Math.random() * gameConfig.kissCollector.kissTypes.length)
        ]
      })
    }
    setFloatingKisses(kisses)
  }

  const handleKissClick = (id: number) => {
    setFloatingKisses(prev => prev.filter(kiss => kiss.id !== id))
    setKissScore(prev => {
      const newScore = prev + 1
      if (newScore >= gameConfig.kissCollector.targetScore) {
        setTimeout(() => {
          alert(gameConfig.kissCollector.winMessage)
          setKissScore(0)
          generateKisses()
        }, 500)
      }
      return newScore
    })
  }

  useEffect(() => {
    generateKisses()
    // Random initial reason
    setReasonIndex(Math.floor(Math.random() * funFeatures.reasonsILoveYou.reasons.length))
  }, [])

  return (
    <section id="fun-features" className="section-spacing bg-gradient-to-b from-dark-burgundy/20 to-deep-black/30">
      <div className="container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-champagne" />
            <span className="text-soft-rose text-sm uppercase tracking-widest">
              Interactive Fun Zone
            </span>
            <Sparkles className="w-6 h-6 text-champagne" />
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-champagne mb-6">
            Let's Play & Laugh Together! 😂❤️
          </h2>
          
          <p className="text-soft-rose text-lg max-w-3xl mx-auto">
            Your romantic website just got an upgrade! Explore these fun features designed to make you smile, laugh, and feel extra special.
          </p>
        </div>

        {/* Grid of Interactive Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Love Meter */}
          <div className="glass-effect rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-romantic-red fill-romantic-red/20" />
              <h3 className="font-playfair text-xl font-bold text-champagne">
                {funFeatures.loveMeter.title}
              </h3>
            </div>
            
            <p className="text-soft-rose mb-6">{funFeatures.loveMeter.description}</p>
            
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="100"
                value={lovePercentage}
                onChange={(e) => setLovePercentage(parseInt(e.target.value))}
                className="w-full h-3 bg-dark-burgundy rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-romantic"
              />
              
              <div className="flex justify-between items-center">
                <span className="text-soft-rose font-semibold">{lovePercentage}%</span>
                <button 
                  onClick={() => setLovePercentage(100)}
                  className="px-4 py-2 bg-romantic-red/20 text-romantic-red rounded-full text-sm hover:bg-romantic-red/30 transition-colors"
                >
                  Max Love! ❤️
                </button>
              </div>
              
              <div className="p-4 bg-dark-burgundy/30 rounded-lg">
                <p className="text-champagne font-semibold">{getLoveMessage(lovePercentage)}</p>
              </div>
            </div>
          </div>

          {/* 2. Emergency Love Button */}
          <div className="glass-effect rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-romantic-red" />
              <h3 className="font-playfair text-xl font-bold text-champagne">
                {funFeatures.emergencyButton.title}
              </h3>
            </div>
            
            <button
              onClick={handleEmergencyClick}
              className="w-full py-4 bg-gradient-to-r from-romantic-red to-soft-rose rounded-xl font-bold text-vintage-ivory text-lg hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl mb-4 animate-pulse"
            >
              🚨 {funFeatures.emergencyButton.buttonText} 🚨
            </button>
            
            {emergencyMessage && (
              <div className="p-4 bg-romantic-red/10 border border-romantic-red/30 rounded-lg animate-fade-in">
                <p className="text-champagne font-semibold">{emergencyMessage}</p>
              </div>
            )}
            
            <p className="text-soft-rose/70 text-sm mt-4">
              Click when you need immediate love attention! ⚡
            </p>
          </div>

          {/* 3. Love Fortune Machine */}
          <div className="glass-effect rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-champagne" />
              <h3 className="font-playfair text-xl font-bold text-champagne">
                {funFeatures.loveFortune.title}
              </h3>
            </div>
            
            <button
              onClick={handleFortuneClick}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-vintage-ivory text-lg hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl mb-4"
            >
              {funFeatures.loveFortune.buttonText} 🔮
            </button>
            
            {fortune && (
              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <p className="text-champagne font-semibold">{fortune}</p>
              </div>
            )}
            
            <p className="text-soft-rose/70 text-sm mt-4">
              Discover what the future holds for us! ✨
            </p>
          </div>

          {/* 4. Reasons I Love You Generator */}
          <div className="glass-effect rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-romantic-red fill-romantic-red/20" />
              <h3 className="font-playfair text-xl font-bold text-champagne">
                {funFeatures.reasonsILoveYou.title}
              </h3>
            </div>
            
            <div className="p-4 bg-dark-burgundy/30 rounded-lg min-h-[120px] flex items-center justify-center mb-4">
              <p className="text-champagne text-lg font-semibold text-center">
                "{funFeatures.reasonsILoveYou.reasons[reasonIndex]}"
              </p>
            </div>
            
            <button
              onClick={handleNextReason}
              className="w-full py-3 bg-gradient-romantic rounded-xl font-semibold text-vintage-ivory hover:scale-105 active:scale-95 transition-all"
            >
              {funFeatures.reasonsILoveYou.buttonText} 💖
            </button>
            
            <p className="text-soft-rose/70 text-sm mt-4 text-center">
              {reasonIndex + 1} of {funFeatures.reasonsILoveYou.reasons.length} reasons
            </p>
          </div>

          {/* 5. Virtual Hug Machine */}
          <div className="glass-effect rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 text-2xl text-soft-rose">🤗</div>
              <h3 className="font-playfair text-xl font-bold text-champagne">
                {funFeatures.virtualHug.title}
              </h3>
            </div>
            
            <button
              onClick={handleHugClick}
              className="w-full py-4 bg-gradient-to-r from-soft-rose to-champagne rounded-xl font-bold text-deep-black text-lg hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl mb-4"
            >
              {funFeatures.virtualHug.buttonText}
            </button>
            
            {hugMessage && (
              <div className="p-4 bg-soft-rose/10 border border-soft-rose/30 rounded-lg">
                <p className="text-champagne font-semibold">{hugMessage}</p>
              </div>
            )}
            
            <p className="text-soft-rose/70 text-sm mt-4">
              Sending digital hugs your way! 🤗
            </p>
          </div>

          {/* 6. Spin the Love Wheel */}
          <div className="glass-effect rounded-2xl p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <RotateCw className="w-6 h-6 text-champagne" />
              <h3 className="font-playfair text-xl font-bold text-champagne">
                {funFeatures.loveWheel.title}
              </h3>
            </div>
            
            <button
              onClick={handleSpinWheel}
              className="w-full py-4 bg-gradient-to-r from-golden-seal to-champagne rounded-xl font-bold text-deep-black text-lg hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl mb-4"
            >
              SPIN THE WHEEL! 🎡
            </button>
            
            {wheelResult && (
              <div className="p-4 bg-golden-seal/10 border border-golden-seal/30 rounded-lg">
                <p className="text-champagne font-semibold text-xl text-center">🎯 {wheelResult}</p>
              </div>
            )}
            
            <p className="text-soft-rose/70 text-sm mt-4 text-center">
              See what romantic challenge awaits! 💝
            </p>
          </div>

        </div>

        {/* Kiss Collector Game - Full Width */}
        <div className="mt-16 glass-effect rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-golden-seal" />
              <div>
                <h3 className="font-playfair text-2xl font-bold text-champagne">
                  {gameConfig.kissCollector.title}
                </h3>
                <p className="text-soft-rose">
                  Collect {gameConfig.kissCollector.targetScore} kisses to win!
                </p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold text-romantic-red">{kissScore}</div>
              <div className="text-soft-rose text-sm">Kisses Collected</div>
            </div>
          </div>
          
          {/* Game Area */}
          <div className="relative h-64 bg-dark-burgundy/30 rounded-xl overflow-hidden mb-6">
            {floatingKisses.map((kiss) => (
              <button
                key={kiss.id}
                onClick={() => handleKissClick(kiss.id)}
                className="absolute text-3xl hover:scale-125 transition-transform cursor-pointer animate-float"
                style={{
                  left: `${kiss.x}%`,
                  top: `${kiss.y}%`,
                  animationDelay: `${kiss.id * 0.2}s`
                }}
              >
                {kiss.type}
              </button>
            ))}
            
            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-soft-rose bg-dark-burgundy/70 px-4 py-2 rounded-full">
                Click the floating kisses to collect them! 💋
              </p>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={generateKisses}
              className="px-6 py-3 bg-dark-burgundy text-soft-rose rounded-full hover:bg-dark-burgundy/80 transition-colors"
            >
              Reset Kisses 🔄
            </button>
            
            <div className="text-soft-rose text-sm">
              Target: {gameConfig.kissCollector.targetScore} kisses
            </div>
          </div>
        </div>

        {/* Open When Letters - Full Width */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <Mail className="w-8 h-8 text-romantic-red" />
            <h3 className="font-playfair text-2xl font-bold text-champagne">
              {funFeatures.openWhenLetters.title}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFeatures.openWhenLetters.letters.map((letter) => (
              <button
                key={letter.id}
                onClick={() => setOpenLetter(openLetter === letter.id ? null : letter.id)}
                className={`glass-effect rounded-2xl p-6 text-left transition-all hover:scale-[1.02] ${
                  openLetter === letter.id ? 'ring-2 ring-romantic-red' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-romantic-red/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{letter.emoji}</span>
                  </div>
                  <h4 className="font-playfair text-lg font-bold text-champagne">
                    {letter.title}
                  </h4>
                </div>
                
                {openLetter === letter.id && (
                  <div className="mt-4 p-4 bg-dark-burgundy/30 rounded-lg">
                    <p className="text-soft-rose">{letter.content}</p>
                  </div>
                )}
                
                <div className="mt-4 text-romantic-red text-sm">
                  {openLetter === letter.id ? 'Click to close' : 'Click to open'}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Boyfriend Complaint Department */}
        <div className="mt-16 glass-effect rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-8 h-8 text-romantic-red" />
            <div>
              <h3 className="font-playfair text-2xl font-bold text-champagne">
                {funFeatures.boyfriendComplaints.title}
              </h3>
              <p className="text-soft-rose text-sm">
                {funFeatures.boyfriendComplaints.departmentName}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {funFeatures.boyfriendComplaints.complaints.map((complaint) => (
              <button
                key={complaint.id}
                onClick={() => {
                  setComplaintSubmitted(true)
                  setTimeout(() => setComplaintSubmitted(false), 3000)
                  alert(complaint.response)
                }}
                className="glass-effect rounded-xl p-6 text-left hover:scale-[1.02] transition-all border border-dark-burgundy hover:border-romantic-red/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-romantic-red/10 rounded-full flex items-center justify-center">
                    <span className="text-xl">📝</span>
                  </div>
                  <h4 className="font-semibold text-champagne">Complaint #{complaint.id}</h4>
                </div>
                <p className="text-soft-rose mb-4">{complaint.text}</p>
                <div className="text-romantic-red text-sm">Click to submit complaint</div>
              </button>
            ))}
          </div>
          
          {complaintSubmitted && (
            <div className="p-4 bg-romantic-red/10 border border-romantic-red/30 rounded-lg text-center">
              <p className="text-champagne font-semibold">
                📢 Announcement: All complaints have been reviewed and unanimously rejected! 
                Your boyfriend is officially perfect! 😎❤️
              </p>
            </div>
          )}
        </div>

        {/* Future Family Simulator */}
        <div className="mt-16 glass-effect rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-soft-rose" />
            <div>
              <h3 className="font-playfair text-2xl font-bold text-champagne">
                {funFeatures.futureFamily.title}
              </h3>
              <p className="text-soft-rose">{funFeatures.futureFamily.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Family Illustration */}
            <div className="bg-gradient-to-br from-romantic-red/10 to-soft-rose/10 rounded-2xl p-8 flex flex-col items-center justify-center">
              <div className="text-6xl mb-6">👨‍👩‍👧‍👦</div>
              <h4 className="font-playfair text-2xl font-bold text-champagne mb-4">
                Our Future Home
              </h4>
              <p className="text-soft-rose text-center">
                {funFeatures.futureFamily.family.motto}
              </p>
            </div>
            
            {/* Family Details */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h5 className="font-semibold text-champagne text-lg">👨 Dad</h5>
                <p className="text-soft-rose pl-6">{funFeatures.futureFamily.family.dad}</p>
                
                <h5 className="font-semibold text-champagne text-lg">👩 Mom</h5>
                <p className="text-soft-rose pl-6">{funFeatures.futureFamily.family.mom}</p>
              </div>
              
              <div>
                <h5 className="font-semibold text-champagne text-lg mb-3">👧👦 Our Future Kids</h5>
                <ul className="space-y-2 pl-6">
                  {funFeatures.futureFamily.family.kids.map((kid, index) => (
                    <li key={index} className="text-soft-rose flex items-center gap-2">
                      <Smile className="w-4 h-4" /> {kid}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-champagne text-lg mb-3">🐱🐶 Family Pets</h5>
                <ul className="space-y-2 pl-6">
                  {funFeatures.futureFamily.family.pets.map((pet, index) => (
                    <li key={index} className="text-soft-rose">{pet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-romantic-red fill-romantic-red" />
            <span className="text-soft-rose text-lg">
              Made with laughter, love, and lots of coding magic! ✨
            </span>
            <Heart className="w-6 h-6 text-romantic-red fill-romantic-red" />
          </div>
          
          <p className="text-champagne text-xl font-playfair italic max-w-2xl mx-auto">
            "Life with you is the greatest adventure, and every day is a new chance to make you smile."
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-romantic rounded-full font-semibold text-vintage-ivory hover:scale-105 transition-transform">
              💖 Forever Yours
            </button>
            <button className="px-6 py-3 glass-effect rounded-full font-semibold text-soft-rose hover:scale-105 transition-transform">
              😂 Always Making You Laugh
            </button>
            <button className="px-6 py-3 bg-dark-burgundy rounded-full font-semibold text-champagne hover:scale-105 transition-transform">
              ✨ Endless Surprises
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FunInteractiveFeatures