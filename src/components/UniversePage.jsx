import React from 'react';

function UniversePage() {
  const stars = Array(12).fill(0); // More stars for better effect

  return (
    <div className="flex flex-col h-full bg-[#FFF5F7] animate-fade-in">
      
      {/* App Header Style */}
      <div className="px-6 pt-4 pb-2">
        <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">February 14, 2026</span>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-1">For You</h1>
      </div>

      <div className="px-4 space-y-6 pb-24 overflow-y-auto">
        
        {/* Main Feature Card (App Store Style) */}
        <div className="relative h-[400px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
          {/* Background Gradient & Stars */}
          <div className="absolute inset-0 bg-gradient-to-b from-pink-200 via-pink-300 to-pink-400">
            {stars.map((_, i) => (
              <div 
                key={i}
                className="absolute bg-white rounded-full animate-pulse"
                style={{
                  width: Math.random() * 4 + 'px',
                  height: Math.random() * 4 + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  animationDelay: Math.random() * 2 + 's'
                }}
              />
            ))}
          </div>

          {/* Floating Galaxy Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-white blur-3xl opacity-40 rounded-full animate-pulse"></div>
              <span className="text-8xl relative z-10">🪐</span>
            </div>
            
            <h2 className="text-3xl font-bold text-white drop-shadow-md mb-2">
              Sakshi's Galaxy
            </h2>
            <p className="text-white/90 text-sm font-medium px-4">
              Is puri universe mein, mera favorite destination tumhari muskaan hai.
            </p>
          </div>

          {/* Bottom Card Label */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/20 to-transparent">
             <div className="bg-white/20 backdrop-blur-md rounded-2xl p-3 flex items-center justify-between border border-white/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center text-xl shadow-inner">💫</div>
                  <div className="text-left">
                    <p className="text-white text-xs font-bold">CURRENT STATUS</p>
                    <p className="text-white text-sm">Deeply in love with you</p>
                  </div>
                </div>
                <button className="bg-white text-pink-500 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">VIEW</button>
             </div>
          </div>
        </div>

        {/* Info Card 1: Time Together */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-pink-50">
          <h3 className="text-pink-500 font-bold text-lg mb-2 flex items-center gap-2">
            <span>✨</span> Cosmic Connection
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed italic">
            "Sitaare tumhara naam likhte hain aur har grah tumhari muskaan se roshan ho jaata hai."
          </p>
        </div>

        {/* Info Card 2: Mission Control */}
        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-pink-50 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-pink-200">🚀</div>
              <div>
                <h4 className="font-bold text-gray-800">Mission: Forever</h4>
                <p className="text-xs text-gray-400">Destination: Sakshi's Heart</p>
              </div>
           </div>
           <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-100 flex items-center justify-center text-xs">👨‍🚀</div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-200 flex items-center justify-center text-xs">👩‍🚀</div>
           </div>
        </div>

      </div>

      {/* iOS Style Bottom Tab Bar (Fixed at bottom of frame) */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-xl border-t border-gray-100 flex items-center justify-around px-8 pb-4">
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <span className="text-2xl">🏠</span>
          <span className="text-[10px] font-bold">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-pink-500">
          <span className="text-2xl animate-bounce">🌌</span>
          <span className="text-[10px] font-bold">Universe</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-gray-400">
          <span className="text-2xl">📸</span>
          <span className="text-[10px] font-bold">Memories</span>
        </div>
      </div>
    </div>
  );
}

export default UniversePage;