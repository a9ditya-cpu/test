import { useEffect, useState } from 'react'

function SecretSurprise() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 12000) // appear after 12s
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Tiny heart teaser in the corner */}
      <button
        className="fixed bottom-20 right-4 z-40 ios-card px-4 py-3 flex items-center gap-2 text-black hover:bg-ios-light transition-all duration-200 text-sm"
        onClick={() => setOpen(true)}
      >
        <span className="animate-heartbeat">💜</span>
        <span className="hidden sm:inline">Chupke se...</span>
      </button>

      {/* Full-screen surprise overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className="ios-card max-w-sm mx-4 p-6 animate-fade-in relative">
            <h2 className="text-xl font-semibold text-black text-center mb-4">
              Tumhare liye ek gupt sa sandesh, Sakshi
            </h2>
            <p className="text-sm mb-3 text-center text-ios-gray leading-relaxed">
              Agar tumne ise dhoondh liya hai, to iska matlab tum utni hi natkhat aur pyaari ho,
              jitni mujhe pasand ho.
            </p>
            <p className="text-sm mb-4 text-center text-ios-gray leading-relaxed">
              Zindagi kaisi bhi ho, main bas itna chahta hoon ki uska har mod tumhare saath
              haath pakadkar, haste hue aur tumhe thoda-thoda aur zyada pyaar karte hue guzre.
            </p>
            <p className="text-center text-ios-blue font-semibold mb-6 text-sm">
              Tum meri zindagi ki sabse pyaari surprise ho, Sakshi. 💫
            </p>

            <div className="flex justify-center">
              <button
                className="ios-button text-sm"
                onClick={() => setOpen(false)}
              >
                Aah, main bhi tumse pyaar karta hoon 💜
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SecretSurprise

