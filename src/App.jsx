import { useState, useEffect } from 'react'
import Heart from './components/Heart'
import LoveMessage from './components/LoveMessage'
import FloatingHearts from './components/FloatingHearts'
import PhotoGallery from './components/PhotoGallery'
import MemeGallery from './components/MemeGallery'
import Countdown from './components/Countdown'
import Proposal from './components/Proposal'
import SecretSurprise from './components/SecretSurprise'
import UniversePage from './components/UniversePage'

function App() {
  const [showContent, setShowContent] = useState(false)
  const [page, setPage] = useState('home')
  const [isPlaying, setIsPlaying] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  
  // YouTube Video ID: ZjUimNoYFLY
  const videoId = "ZjUimNoYFLY"; 

  const startEverything = () => {
    setIsStarted(true)
    setIsPlaying(true)
    setTimeout(() => setShowContent(true), 500)
  }

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex flex-col items-center overflow-hidden">
      
      {/* 1. MOBILE START OVERLAY (Bina iske phone pe gaana nahi bajega) */}
      {!isStarted && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-pink-50 px-6 text-center">
          <div className="animate-bounce text-7xl mb-6 shadow-sm">🌸</div>
          <h1 className="text-3xl font-extrabold text-pink-600 mb-6 font-serif">
            Sakshi, aapke liye ek chhota sa surprise...
          </h1>
          <p className="text-pink-400 mb-8 font-medium italic">Make sure your volume is UP! 🔊</p>
          <button 
            onClick={startEverything}
            className="bg-pink-500 text-white px-12 py-4 rounded-full text-xl font-bold shadow-[0_10px_20px_rgba(236,72,153,0.3)] hover:bg-pink-600 active:scale-90 transition-all"
          >
            Enter My World 💜
          </button>
        </div>
      )}

      {/* 2. BACKGROUND MUSIC (YouTube Hidden Player) */}
      {isPlaying && (
        <div className="fixed -left-[1000px] top-0 opacity-0 pointer-events-none">
          <iframe
            width="100"
            height="100"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}&enablejsapi=1`}
            title="YouTube Music"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      )}

      {/* 3. MAIN APP FRAME (iPhone Style) */}
      <div className={`w-full md:max-w-[430px] md:my-4 bg-white md:rounded-[3.5rem] shadow-2xl overflow-hidden flex flex-col relative transition-all duration-1000 ${isStarted ? 'opacity-100' : 'opacity-0'} h-screen md:h-[880px] border-x-0 md:border-[8px] border-pink-100`}>
        
        {/* Notch - Visible on Desktop */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-50"></div>
        
        {/* iOS Status Bar Look */}
        <div className="pt-10 md:pt-12 px-8 flex justify-between items-center text-xs font-bold text-black z-40 bg-white/60 backdrop-blur-md">
          <span>{new Date().getHours()}:{new Date().getMinutes()}</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[12px]">📶</span>
            <span className="text-[12px]">🔋</span>
          </div>
        </div>

        {/* --- SCROLLABLE CONTENT AREA --- */}
        <div className="flex-1 overflow-y-auto relative bg-white pb-32 scroll-smooth">
          <FloatingHearts />

          <div className="pt-6 px-4">
            {showContent && (
              <div className="animate-fade-in">
                
                {/* PAGE 1: HOME */}
                {page === 'home' && (
                  <div className="space-y-8 pb-10">
                    <header className="text-center mb-6">
                      <span className="text-pink-400 font-bold text-[10px] tracking-[0.2em] uppercase">Special Delivery</span>
                      <h1 className="text-4xl font-extrabold text-gray-900 mt-1">For Sakshi 💜</h1>
                    </header>
                    <div className="flex justify-center mb-10"><Heart /></div>
                    <div className="space-y-8">
                      <LoveMessage />
                      <Countdown />
                      <PhotoGallery />
                      <MemeGallery />
                      <Proposal />
                    </div>
                  </div>
                )}

                {/* PAGE 2: MEMORIES (Envelope Surprise) */}
                {page === 'memories' && (
                  <div className="flex flex-col items-center justify-center min-h-[65vh] text-center space-y-8 animate-slide-up">
                    <div className="bg-pink-50 p-6 rounded-[2.5rem] border border-pink-100 shadow-sm mx-4">
                      <h2 className="text-3xl font-extrabold text-pink-600 mb-2">A Secret for You... 💌</h2>
                      <p className="text-pink-400 text-sm font-medium">Click the envelope to reveal what's inside</p>
                    </div>
                    <div className="scale-110 transition-transform">
                      <SecretSurprise />
                    </div>
                  </div>
                )}

                {/* PAGE 3: UNIVERSE */}
                {page === 'universe' && (
                  <div className="animate-fade-in h-full">
                    <UniversePage />
                  </div>
                )}
                
              </div>
            )}
          </div>
        </div>

        {/* --- FIXED BOTTOM TAB BAR --- */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white/80 backdrop-blur-xl border-t border-pink-50 flex items-center justify-around px-4 pb-6 z-50">
          
          <button 
            onClick={() => setPage('home')}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${page === 'home' ? 'text-pink-500 scale-110' : 'text-pink-200'}`}
          >
            <span className="text-2xl">{page === 'home' ? '🏠' : '🏠'}</span>
            <span className="text-[9px] font-bold uppercase tracking-wider">Home</span>
            {page === 'home' && <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-0.5"></div>}
          </button>

          <button 
            onClick={() => setPage('memories')}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${page === 'memories' ? 'text-pink-500 scale-110' : 'text-pink-200'}`}
          >
            <span className="text-2xl">📸</span>
            <span className="text-[9px] font-bold uppercase tracking-wider">Memories</span>
            {page === 'memories' && <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-0.5"></div>}
          </button>

          {/* Music Controller (Center Tab) */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white -mt-12 border-[6px] border-white active:scale-90 transition-all duration-500 ${isPlaying ? 'bg-pink-500 rotate-[360deg]' : 'bg-gray-300'}`}
          >
            <span className="text-2xl">{isPlaying ? '🎵' : '🔇'}</span>
          </button>

          <button 
            onClick={() => setPage('universe')}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${page === 'universe' ? 'text-pink-500 scale-110' : 'text-pink-200'}`}
          >
            <span className="text-2xl">🌌</span>
            <span className="text-[9px] font-bold uppercase tracking-wider">Universe</span>
            {page === 'universe' && <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-0.5"></div>}
          </button>

        </div>

        {/* iOS Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-100 rounded-full z-50"></div>
      </div>
    </div>
  )
}

export default App