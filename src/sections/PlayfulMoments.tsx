import { useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'

const PlayfulMoments = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null)

  const features = [
    {
      id: 'love-meter',
      title: 'Love Meter',
      icon: '💖',
      description: 'How much do you love me today?',
      content: () => (
        <div className="space-y-4">
          <div className="h-2 bg-dark-burgundy/50 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-soft-rose to-romantic-red rounded-full w-3/4" />
          </div>
          <p className="text-champagne text-center">75% - Almost perfect! Just need your smile to reach 100%</p>
        </div>
      )
    },
    {
      id: 'virtual-hug',
      title: 'Virtual Hug',
      icon: '🤗',
      description: 'Need a hug? Click here!',
      content: () => (
        <div className="text-center space-y-4">
          <div className="text-6xl animate-bounce">🤗</div>
          <p className="text-champagne">Sending you the warmest digital hug! Distance can't stop my love.</p>
        </div>
      )
    },
    {
      id: 'love-letters',
      title: 'Love Letters',
      icon: '💌',
      description: 'Little notes for different moods',
      content: () => (
        <div className="space-y-3">
          {['When you miss me', 'When you need a smile', 'When you can\'t sleep'].map((title, i) => (
            <button
              key={i}
              className="w-full p-3 text-left bg-dark-burgundy/30 rounded-lg hover:bg-dark-burgundy/50 transition-colors"
              onClick={() => alert(`My dearest Maya,\n\nThis letter is for ${title.toLowerCase()}.\n\nI love you always.\n\nForever yours`)}
            >
              <div className="flex items-center gap-3">
                <span>💌</span>
                <span className="text-soft-rose">{title}</span>
              </div>
            </button>
          ))}
        </div>
      )
    },
    {
      id: 'kiss-game',
      title: 'Kiss Collector',
      icon: '💋',
      description: 'Catch the floating kisses!',
      content: () => (
        <div className="text-center space-y-4">
          <div className="text-3xl space-x-2">
            {['💋', '😘', '❤️', '💕'].map((kiss, i) => (
              <span key={i} className="inline-block animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                {kiss}
              </span>
            ))}
          </div>
          <p className="text-champagne">Click the kisses to collect them!</p>
          <div className="text-soft-rose text-sm">Score: 12/20 kisses</div>
        </div>
      )
    },
    {
      id: 'fortune',
      title: 'Love Fortune',
      icon: '🔮',
      description: 'What does our future hold?',
      content: () => (
        <div className="text-center space-y-4">
          <div className="text-4xl">✨</div>
          <p className="text-champagne italic">
            "You will marry a handsome software engineer who writes love letters in code"
          </p>
          <button
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-vintage-ivory text-sm hover:scale-105 transition-transform"
            onClick={() => alert('New fortune: Lifetime supply of cuddles and laughter awaits!')}
          >
            New Fortune
          </button>
        </div>
      )
    },
    {
      id: 'future-us',
      title: 'Future Us',
      icon: '👨‍👩‍👧‍👦',
      description: 'A glimpse of our future',
      content: () => (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-romantic-red/20 rounded-full flex items-center justify-center">
              <span>👨</span>
            </div>
            <div className="text-soft-rose">Handsome tech guy still coding for you</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-soft-rose/20 rounded-full flex items-center justify-center">
              <span>👩</span>
            </div>
            <div className="text-soft-rose">Beautiful Maya running the world</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-champagne/20 rounded-full flex items-center justify-center">
              <span>🐱</span>
            </div>
            <div className="text-soft-rose">Fluffy cat named Byte</div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-20">
      <div className="container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-champagne" />
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-champagne">
              Playful Moments
            </h2>
            <Sparkles className="w-6 h-6 text-champagne" />
          </div>
          
          <p className="text-soft-rose text-lg max-w-2xl mx-auto">
            Little interactive surprises to make you smile and laugh. Because our love should be fun too!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`glass-effect rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                activeFeature === feature.id ? 'ring-2 ring-soft-rose/30' : ''
              }`}
              onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
            >
              {/* Feature Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="font-playfair text-lg font-semibold text-champagne">
                    {feature.title}
                  </h3>
                  <p className="text-soft-rose/80 text-sm mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Feature Content */}
              {activeFeature === feature.id && (
                <div className="mt-6 pt-6 border-t border-soft-rose/10 animate-fade-in">
                  <feature.content />
                </div>
              )}

              {/* Hint */}
              <div className="mt-4 text-romantic-red/60 text-sm">
                {activeFeature === feature.id ? 'Click to collapse' : 'Click to explore'}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-romantic-red fill-romantic-red/20" />
            <span className="text-soft-rose">
              Made with laughter and love
            </span>
            <Heart className="w-5 h-5 text-romantic-red fill-romantic-red/20" />
          </div>
          
          <p className="text-champagne font-playfair italic max-w-xl mx-auto">
            "The best relationships are the ones where you can be silly together, 
            laugh at nothing, and find joy in the simplest moments."
          </p>
          
          <div className="mt-8 flex justify-center">
            <button
              className="px-6 py-3 bg-gradient-romantic rounded-full font-medium text-vintage-ivory hover:scale-105 transition-transform"
              onClick={() => alert('I love making you smile more than anything! ❤️')}
            >
              You make everything better
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlayfulMoments