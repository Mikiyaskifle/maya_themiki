// Thoughtful moments and playful connections
// Each feature is a little piece of our story

export const funFeatures = {
  loveMeter: {
    title: "Our Love Scale",
    description: "How full does your heart feel today?",
    levels: [
      { min: 0, max: 20, message: "Just thinking of you makes me smile." },
      { min: 21, max: 40, message: "Every memory with you feels precious." },
      { min: 41, max: 60, message: "You have my whole heart, always." },
      { min: 61, max: 80, message: "My love for you grows with each passing day." },
      { min: 81, max: 99, message: "You are my greatest joy and deepest comfort." },
      { min: 100, max: 100, message: "Infinite love, for every moment we share together." }
    ]
  },

  emergencyButton: {
    title: "Quick Love Boost",
    buttonText: "I MISS YOU",
    messages: [
      "Thinking of you and sending all my love your way.",
      "Wishing I could be there to hug you right now.",
      "You're in my thoughts, as you always are.",
      "Sending you warmth and affection across the distance.",
      "My heart feels lighter knowing you're in the world."
    ]
  },

  loveFortune: {
    title: "Our Future Together",
    buttonText: "Reveal Our Future",
    fortunes: [
      "A lifetime of shared laughter and quiet moments awaits.",
      "Endless adventures, both big and small, will fill our days.",
      "Your smile will continue to brighten even the simplest moments.",
      "We'll build a home filled with love, understanding, and inside jokes.",
      "Every challenge will only bring us closer together.",
      "Our story will be one of mutual support and endless growth.",
      "You'll always have my unwavering love and deepest respect.",
      "Together, we'll create memories that last a lifetime."
    ]
  },

  openWhenLetters: {
    title: "Letters For You",
    letters: [
      {
        id: 1,
        title: "When you miss me",
        content: "I'm thinking of you too. No matter where we are, you're always with me in my heart. Every memory we share makes the distance feel smaller.",
        emoji: "💕"
      },
      {
        id: 2,
        title: "When you need comfort",
        content: "I'm here for you, always. You're stronger than you know, and more loved than you can imagine. Let me be your safe place.",
        emoji: "☀️"
      },
      {
        id: 3,
        title: "When you're proud",
        content: "I'm so incredibly proud of you. Watching you grow and achieve brings me more joy than I can express. You inspire me every day.",
        emoji: "🎉"
      },
      {
        id: 4,
        title: "When you're thoughtful",
        content: "Your kindness and thoughtfulness never cease to amaze me. The way you care for others is one of my favorite things about you.",
        emoji: "💭"
      },
      {
        id: 5,
        title: "When you're happy",
        content: "Your happiness is contagious. Seeing you smile makes everything better. Keep shining that beautiful light of yours.",
        emoji: "✨"
      }
    ]
  },

  boyfriendComplaints: {
    title: "Sweet Nothings",
    complaints: [
      {
        id: 1,
        text: "You make me feel incredibly loved",
        response: "That's not a complaint—that's my favorite thing to do."
      },
      {
        id: 2,
        text: "You remember the little things",
        response: "How could I forget anything about you?"
      },
      {
        id: 3,
        text: "You believe in me",
        response: "Because you're worthy of every belief and dream."
      },
      {
        id: 4,
        text: "You make me smile",
        response: "Your smile is what I live for."
      }
    ],
    departmentName: "Department of Appreciation & Affection"
  },

  reasonsILoveYou: {
    title: "Why You're Amazing",
    buttonText: "Another Reason",
    reasons: [
      "The way your eyes light up when you talk about something you love",
      "Your unwavering kindness, even when no one is watching",
      "How you make me feel completely understood and accepted",
      "Your intelligence and the thoughtful way you see the world",
      "The sound of your laughter—it's my favorite sound",
      "Your strength and resilience through everything",
      "How you remember small details about what matters to me",
      "Your ability to find beauty in ordinary moments",
      "The way you challenge me to be better, without ever making me feel less",
      "Your compassion for others and gentle spirit",
      "How you make even quiet moments feel meaningful",
      "Your creativity and unique perspective on life",
      "The comfort of simply being with you",
      "Your authenticity—you're always beautifully yourself",
      "How you listen, truly listen, to what I'm saying",
      "Your patience and understanding when I need it most",
      "The way you celebrate my successes as if they were your own",
      "Your sense of humor that always knows how to lift my spirits",
      "How you make every day feel like an adventure worth having",
      "Simply because you're you—perfectly, wonderfully you"
    ]
  },

  virtualHug: {
    title: "Moments of Comfort",
    buttonText: "I need a hug",
    messages: [
      "Sending you warmth and comfort, wrapped in all my affection.",
      "Imagine my arms around you, holding you close.",
      "You're never alone—I'm with you in spirit, always.",
      "Take this virtual hug and know how much you're cared for.",
      "Wrapping you in love and understanding from afar."
    ]
  },

  loveWheel: {
    title: "Little Connections",
    options: [
      "Share a beautiful moment from today",
      "Tell me what made you smile recently",
      "Remember a favorite memory we share",
      "Share something you're looking forward to",
      "Tell me what you appreciate right now",
      "Describe something that inspired you",
      "Share a quiet thought you've been having",
      "Tell me about something that made you proud"
    ]
  },

  futureFamily: {
    title: "Our Future Dreams",
    description: "A glimpse of the beautiful life ahead",
    family: {
      dad: "Someone who still looks at you the way he did on our first date",
      mom: "A remarkable woman who continues to inspire everyone around her",
      kids: [
        "Curious minds full of wonder and kindness",
        "Creative spirits who see magic in everyday life",
        "Little hearts that overflow with love and laughter"
      ],
      pets: [
        "A gentle cat who curls up in sunbeams",
        "A loyal dog with endless affection"
      ],
      home: "A peaceful space filled with love, understanding, and cherished moments",
      motto: "Home is where our hearts are together"
    }
  }
}

export const gameConfig = {
  kissCollector: {
    title: "Kiss Collector",
    targetScore: 12,
    winMessage: "You've collected all the kisses! A lifetime of affection awaits.",
    kissTypes: ["💕", "💋", "😘", "❤️", "✨", "🥰", "💖", "🌟"]
  }
}