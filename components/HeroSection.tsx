
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=cinematic%20movie%20theater%20with%20colorful%20neon%20lights%2C%20film%20reels%20and%20popcorn%20scattered%20around%2C%20vibrant%20purple%20and%20blue%20gradient%20background%2C%20entertainment%20theme%2C%20modern%20digital%20art%20style%2C%20exciting%20atmosphere%20with%20movie%20screens%20and%20cameras&width=800&height=600&seq=hero-bg&orientation=landscape')`
        }}
      ></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-pacifico">
          Movie Guess Challenge
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-medium">
          Guess Movies. Win Cash. Daily.
        </p>
        
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-8 max-w-md mx-auto border border-white/30">
          <div className="text-yellow-300 text-lg font-semibold mb-2">
            🏆 Today's Prize Pool
          </div>
          <div className="text-3xl font-bold">₹500</div>
        </div>
        
        <Link href="/login">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap">
            Play for ₹1 Now!
          </button>
        </Link>
        
        <div className="mt-6 text-sm opacity-90">
          <p>⚡ Instant payout • 🎯 Daily challenges • 🎬 New movies every day</p>
        </div>
      </div>
    </section>
  );
}
