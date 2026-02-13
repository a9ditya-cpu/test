import { useState, useEffect } from 'react'
import Heart from './components/Heart'
import LoveMessage from './components/LoveMessage'
import FloatingHearts from './components/FloatingHearts'
import PhotoGallery from './components/PhotoGallery'
import Countdown from './components/Countdown'
import Proposal from './components/Proposal'
import SecretSurprise from './components/SecretSurprise'
import UniversePage from './components/UniversePage'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [page, setPage] = useState('home')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  
  const videoId = "ZjUimNoYFLY"; 

  const startEverything = () => {
    setIsStarted(true)
    setIsPlaying(true)
    setTimeout(() => setShowContent(true), 500)
  }

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex flex-col items-center overflow-hidden">
      
      {!isStarted && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pink-50 px-6 text-center">
          <div className="animate-bounce text-6xl mb-6">🌸</div>
          <h1 className="text-2xl font-bold text-pink-600 mb-6 font-serif">
            Sakshi, aapke liye ek chhota sa surprise...
          </h1>
          <button 
            onClick={startEverything}
            className="bg-pink-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-2xl active:scale-90 transition-all"
          >
            Enter My World 💜
          </button>
        </div>
      )}

      {isPlaying && (
        <div className="fixed opacity-0 pointer-events-none">
          <iframe
            width="1"
            height="1"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}&enablejsapi=1`}
            allow="autoplay"
          ></iframe>
        </div>
      )}

      {/* Main iPhone Frame */}
      <div className={`w-full md:max-w-[430px] md:my-4 bg-white md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col relative transition-all duration-1000 ${isStarted ? 'opacity-100' : 'opacity-0'} h-screen md:h-[880px] border-x-0 md:border-[8px] border-pink-100`}>
        
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-50"></div>
        
        <div className="pt-10 md:pt-12 px-8 flex justify-between items-center text-xs font-semibold text-black z-40 bg-white/80 backdrop-blur-md">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="text-[10px]">📶</span>
            <span className="text-[10px]">🔋</span>
          </div>
        </div>

        {/* --- SCROLLABLE CONTENT AREA --- */}
        <div className="flex-1 overflow-y-auto relative bg-white pb-32">
          <FloatingHearts />

          <div className="pt-6 px-4">
            {showContent && (
              <div className="animate-fade-in">
                {page === 'home' && (
                  <div className="space-y-8">
                    <header className="text-center mb-8">
                      <h1 className="text-3xl font-bold text-black mb-2">Happy Valentine's 💜</h1>
                      <h2 className="text-xl font-semibold text-pink-400 italic">For my Sakshi</h2>
                    </header>
                    <div className="flex justify-center mb-10"><Heart /></div>
                    <LoveMessage />
                    <Countdown />
                    <PhotoGallery />
                    <Proposal />
                  </div>
                )}

                {page === 'memories' && (
                  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
                    <h2 className="text-2xl font-bold text-pink-600">A Secret for You... 💌</h2>
                    <p className="text-gray-500 text-sm">Click the envelope to reveal a memory</p>
                    {/* Yahan SecretSurprise envelope dikhega */}
                    <SecretSurprise />
                  </div>
                )}

                {page === 'universe' && (
                  <UniversePage />
                )}
              </div>
            )}
          </div>
        </div>

        {/* --- iOS STYLE BOTTOM TAB BAR (3 Buttons + Music) --- */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white/80 backdrop-blur-xl border-t border-pink-100 flex items-center justify-around px-6 pb-6 z-50">
          
          {/* Home Tab */}
          <button 
            onClick={() => setPage('home')}
            className={`flex flex-col items-center gap-1 transition-all ${page === 'home' ? 'text-pink-500 scale-110' : 'text-pink-200'}`}
          >
            <span className="text-2xl">🏠</span>
            <span className="text-[8px] font-bold uppercase tracking-widest">Home</span>
          </button>

          {/* Memories Tab (Envelope) */}
          <button 
            onClick={() => setPage('memories')}
            className={`flex flex-col items-center gap-1 transition-all ${page === 'memories' ? 'text-pink-500 scale-110' : 'text-pink-200'}`}
          >
            <span className="text-2xl">📸</span>
            <span className="text-[8px] font-bold uppercase tracking-widest">Memories</span>
          </button>

          {/* Music Controller (Center) */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 bg-pink-500 rounded-full shadow-lg shadow-pink-200 flex items-center justify-center text-white -mt-10 border-4 border-white active:scale-90 transition-transform"
          >
            <span className="text-xl">{isPlaying ? '🎵' : '🔇'}</span>
          </button>

          {/* Universe Tab */}
          <button 
            onClick={() => setPage('universe')}
            className={`flex flex-col items-center gap-1 transition-all ${page === 'universe' ? 'text-pink-500 scale-110' : 'text-pink-200'}`}
          >
            <span className="text-2xl">🌌</span>
            <span className="text-[8px] font-bold uppercase tracking-widest">Universe</span>
          </button>

        </div>

        {/* iOS Home Indicator Bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-200 rounded-full z-50"></div>
      </div>
    </div>
  )
}

export default App