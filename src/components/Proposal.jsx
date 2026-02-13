import { useState } from 'react'

function Proposal() {
  const [yesClicked, setYesClicked] = useState(false)
  const [noPosition, setNoPosition] = useState({ top: '50%', left: '65%' })

  const moveNoButton = () => {
    // Generate random positions within a safe range so the button stays visible
    const top = 20 + Math.random() * 60 // 20% - 80%
    const left = 10 + Math.random() * 80 // 10% - 90%
    setNoPosition({ top: `${top}%`, left: `${left}%` })
  }

  return (
    <section className="mt-6">
      <div className="ios-card p-6">
        <h2 className="text-xl font-semibold text-black text-center mb-3">
          Ek bahut zaroori sawaal, babygurll 💍
        </h2>
        <p className="text-center text-sm text-ios-gray mb-6">
          Tumhare saath bitaya har pal mujhe yeh ehsaas dilata hai ki tum mere liye kitni zyada khaas ho.
          Bas tumse ek masoom sa sawaal poochna hai...
        </p>

        <div className="relative h-40 flex items-center justify-center">
          {!yesClicked ? (
            <>
              <p className="absolute top-2 left-1/2 -translate-x-1/2 text-base font-semibold text-black text-center px-4">
                will you marry me 💋?
              </p>

              <button
                className="ios-button text-base"
                onClick={() => setYesClicked(true)}
              >
                ofccccc💋💜
              </button>

              <button
                className="px-4 py-2 rounded-2xl bg-ios-light text-ios-gray font-semibold text-sm absolute transition-all duration-150 select-none"
                style={{
                  top: noPosition.top,
                  left: noPosition.left,
                  transform: 'translate(-50%, -50%)',
                }}
                onMouseEnter={moveNoButton}
                onMouseMove={moveNoButton}
                onClick={(e) => {
                  e.preventDefault()
                  moveNoButton()
                }}
              >
                Nahi 😈
              </button>
            </>
          ) : (
            <div className="text-center animate-fade-in">
              <p className="text-2xl font-bold text-ios-blue mb-3">
                Tumne haan keh di! 🎉
              </p>
              <p className="text-sm text-ios-gray">
                Main wada karta hoon ki har din tumhe muskuraane ki wajah doonga aur tumhara saath kabhi nahi chhodunga, Sakshi. 💜
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Proposal

