import { useState, useEffect } from 'react'

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Calculate time until next Valentine's Day
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      let nextValentine = new Date(currentYear, 1, 14) // February 14

      // If Valentine's Day has passed this year, set it for next year
      if (now > nextValentine) {
        nextValentine = new Date(currentYear + 1, 1, 14)
      }

      const difference = nextValentine - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="ios-card p-6">
      <h2 className="text-xl font-semibold text-black text-center mb-6">
        Valentine's😚
      </h2>
      <div className="grid grid-cols-4 gap-3 mb-6">
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            className="bg-ios-light rounded-2xl p-4 text-center"
          >
            <div className="text-2xl font-bold text-black mb-1">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs font-medium text-ios-gray">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-sm font-medium text-ios-blue">
        We spend almost 12 hours together everyday but not on Valentine's, its frustrating😤 ☕💜
      </p>
    </div>
  )
}

export default Countdown
