import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { loveContent } from '../data/loveContent'

const SimpleGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handleImageClick = (id: number) => {
    setSelectedImage(id)
  }

  const handleCloseLightbox = () => {
    setSelectedImage(null)
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage % loveContent.memories.length) + 1)
    }
  }

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 1 ? loveContent.memories.length : selectedImage - 1
      )
    }
  }

  return (
    <section id="memories" className="section-spacing">
      <div className="container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-romantic-red fill-romantic-red/20" />
            <span className="text-soft-rose text-sm uppercase tracking-widest">
              Beautiful Memories
            </span>
            <Heart className="w-6 h-6 text-romantic-red fill-romantic-red/20" />
          </div>
          
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-champagne mb-6">
            Moments Captured Just For You
          </h2>
          
          <p className="text-soft-rose text-lg max-w-2xl mx-auto">
            A collection of beautiful moments that remind me how incredibly lucky I am to have you in my life.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loveContent.memories.map((memory) => (
            <div
              key={memory.id}
              className="group relative overflow-hidden rounded-2xl glass-effect cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              onClick={() => handleImageClick(memory.id)}
            >
              {/* Image Container */}
              <div className="aspect-square overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-dark-burgundy/30">
                  {memory.image ? (
                    <img
                      src={memory.image}
                      alt={memory.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  ) : (
                    <div className="text-center p-8">
                      <Heart className="w-16 h-16 text-romantic-red/30 fill-romantic-red/10 mx-auto mb-4" />
                      <p className="text-soft-rose">Beautiful memory #{memory.id}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-xl font-bold text-champagne mb-2">
                    {memory.caption}
                  </h3>
                  <p className="text-soft-rose text-sm">
                    {memory.description}
                  </p>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-romantic-red/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-soft-rose/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-deep-black/95 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
              {/* Close button */}
              <button
                onClick={handleCloseLightbox}
                className="absolute -top-12 right-0 z-10 p-2 text-champagne hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 glass-effect rounded-full hover:bg-romantic-red/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-champagne" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 glass-effect rounded-full hover:bg-romantic-red/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-champagne" />
              </button>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                {loveContent.memories.find(m => m.id === selectedImage)?.image ? (
                  <img
                    src={loveContent.memories.find(m => m.id === selectedImage)!.image}
                    alt={loveContent.memories.find(m => m.id === selectedImage)!.caption}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                ) : (
                  <div className="aspect-video flex items-center justify-center bg-dark-burgundy/50 rounded-2xl">
                    <div className="text-center">
                      <Heart className="w-20 h-20 text-romantic-red/30 fill-romantic-red/10 mx-auto mb-6" />
                      <p className="text-soft-rose text-lg">Beautiful memory #{selectedImage}</p>
                    </div>
                  </div>
                )}

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-black/90 to-transparent p-6">
                  <h3 className="font-playfair text-2xl font-bold text-champagne mb-2">
                    {loveContent.memories.find(m => m.id === selectedImage)?.caption}
                  </h3>
                  <p className="text-soft-rose">
                    {loveContent.memories.find(m => m.id === selectedImage)?.description}
                  </p>
                  <p className="text-romantic-red/60 text-sm mt-2">
                    {loveContent.memories.find(m => m.id === selectedImage)?.date && 
                      new Date(loveContent.memories.find(m => m.id === selectedImage)!.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })
                    }
                  </p>
                </div>
              </div>

              {/* Image counter */}
              <div className="text-center mt-4 text-soft-rose">
                {selectedImage} / {loveContent.memories.length}
              </div>
            </div>
          </div>
        )}

        {/* Simple instruction */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect">
            <Heart className="w-5 h-5 text-romantic-red" />
            <p className="text-soft-rose text-sm">
              Click on any photo to view it larger
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SimpleGallery