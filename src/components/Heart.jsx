import { useState } from 'react'

function Heart() {
  const [isBeating, setIsBeating] = useState(true)

  return (
    <div 
      className={`text-8xl md:text-9xl cursor-pointer transition-transform duration-300 hover:scale-110 ${isBeating ? 'animate-heartbeat' : ''}`}
      onClick={() => setIsBeating(!isBeating)}
    >
      ❤️
    </div>
  )
}

export default Heart
