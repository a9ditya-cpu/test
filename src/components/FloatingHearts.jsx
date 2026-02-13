import { useEffect, useState } from 'react'

function FloatingHearts() {
  const [stickers, setStickers] = useState([])

  useEffect(() => {
    const stickerSymbols = [
      '☕',
      '🍫',
      '🍩',
      '🎧',
      '🎬',
      '📸',
      '🌙',
      '🐻',
      '🧸',
      '🌌',
    ]
    const newStickers = []

    for (let i = 0; i < 20; i++) {
      newStickers.push({
        id: i,
        symbol: stickerSymbols[Math.floor(Math.random() * stickerSymbols.length)],
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5,
      })
    }

    setStickers(newStickers)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stickers.map((item) => (
        <div
          key={item.id}
          className="absolute text-2xl md:text-3xl animate-float opacity-60"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          {item.symbol}
        </div>
      ))}
    </div>
  )
}

export default FloatingHearts
