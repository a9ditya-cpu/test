import { useState, useEffect } from 'react'

function PhotoGallery() {
  // Add your image filenames here - images should be in public/images/ folder
  const photos = [
    { id: 1, src: '/images/photo1.jpeg', alt: 'Memory 1', delay: '0s' },
    { id: 2, src: '/images/photo2.jpeg', alt: 'Memory 2', delay: '0.5s' },
    { id: 3, src: '/images/photo3.jpeg', alt: 'Memory 3', delay: '1s' },
    { id: 4, src: '/images/photo4.jpeg', alt: 'Memory 4', delay: '1.5s' },
    { id: 5, src: '/images/photo5.jpeg', alt: 'Memory 5', delay: '2s' },
    { id: 6, src: '/images/photo6.jpeg', alt: 'Memory 6', delay: '2.5s' },
  ]

  const [imageErrors, setImageErrors] = useState({})
  const [envelopeClicked, setEnvelopeClicked] = useState(false)
  const [countdown, setCountdown] = useState(5)
  const [photosExploded, setPhotosExploded] = useState(false)

  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }))
  }

  const handleEnvelopeClick = () => {
    setEnvelopeClicked(true)
  }

  useEffect(() => {
    if (envelopeClicked && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (envelopeClicked && countdown === 0) {
      setPhotosExploded(true)
    }
  }, [envelopeClicked, countdown])

  // Calculate explosion positions for each photo
  const getExplodePosition = (index) => {
    const angle = (index * 60) * (Math.PI / 180) // 60 degrees apart
    const distance = 400 // pixels
    const x = Math.cos(angle) * distance
    const y = Math.sin(angle) * distance
    return { x, y }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-black text-center mb-4">
        Yaadeinnnn😭
      </h2>

      {/* Envelope - appears before explosion */}
      {!photosExploded && (
        <div className="flex flex-col items-center justify-center min-h-[300px] ios-card p-8">
          <button
            onClick={handleEnvelopeClick}
            disabled={envelopeClicked}
            className={`relative transition-all duration-300 ${
              envelopeClicked ? 'animate-envelope-open pointer-events-none' : 'active:scale-95 cursor-pointer'
            }`}
          >
            <div className="text-7xl animate-heartbeat">
              💌
            </div>
            {!envelopeClicked && (
              <p className="text-ios-gray text-sm mt-4 animate-pulse">
                Click karo, Bbgurll! ✨
              </p>
            )}
          </button>

          {/* Countdown */}
          {envelopeClicked && countdown > 0 && (
            <div className="mt-6 text-center">
              <div className="text-5xl font-bold text-ios-blue animate-countdown-pulse mb-3">
                {countdown}
              </div>
              <p className="text-ios-gray text-base">
                Abhi abhi... 🎆
              </p>
            </div>
          )}
        </div>
      )}

      {/* Photos explode out */}
      {photosExploded && (
        <div className="grid grid-cols-2 gap-3">
          {photos.map((photo, index) => {
            const explodePos = getExplodePosition(index)
            return (
          <div
            key={photo.id}
            className="aspect-square rounded-2xl overflow-hidden cursor-pointer group relative ios-card"
            style={{
              '--explode-x': `${explodePos.x * 0.5}px`,
              '--explode-y': `${explodePos.y * 0.5}px`,
              '--final-x': '0px',
              '--final-y': '0px',
              animation: `explode 1s ease-out ${index * 0.1}s forwards, float 6s ease-in-out infinite ${2 + index * 0.1}s`,
            }}
          >
            {/* Clear image */}
            <div className="relative w-full h-full">
              {imageErrors[photo.id] ? (
                <div className="w-full h-full flex items-center justify-center text-ios-gray text-4xl">
                  📸
                </div>
              ) : (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover rounded-2xl active:opacity-80 transition-opacity duration-200"
                  onError={() => handleImageError(photo.id)}
                  loading="lazy"
                />
              )}
            </div>
          </div>
            )
          })}
        </div>
      )}

      {photosExploded && (
        <p className="text-center mt-4 text-ios-gray text-sm animate-fade-in">
          Idhr humari world trip ki pictures save krnge , like an album, baad mee! 📸
        </p>
      )}
    </div>
  )
}

export default PhotoGallery
