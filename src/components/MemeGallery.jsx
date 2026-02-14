import React from 'react';

function MemeGallery() {
  const memes = [
    { id: 1, url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndnd4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/c76IJLufpN960/giphy.gif', caption: "😼" },
    { id: 2, url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndnd4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/L2z7uYM5qn830JqlyC/giphy.gif', caption: "Me waiting for your reply like..." },
    { id: 3, url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJndnd4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4Z3B4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/L2z7uYM5qn830JqlyC/giphy.gif', caption: "Our first inside joke" },
    // Aur memes yahan add karo...
  ];

  return (
    <div className="space-y-6">
      <div className="px-2">
        <h3 className="text-xl font-bold text-pink-600 mb-4 flex items-center gap-2">
          <span>😼</span> Inside Jokes
        </h3>
        
        <div className="columns-2 gap-4 space-y-4">
          {memes.map((meme) => (
            <div key={meme.id} className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-100 hover:scale-[1.02] transition-transform">
              <img src={meme.url} alt="Meme" className="w-full h-auto" />
              <div className="p-3">
                <p className="text-[11px] font-medium text-pink-500 italic leading-tight">
                  {meme.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ios-card bg-pink-50 p-4 text-center">
        <p className="text-xs text-pink-400"> This website will keep receiving updates by the love of your life kindly be patient!❤️</p>
      </div>
    </div>
  );
}

export default MemeGallery;