
'use client';

import { useState, useEffect } from 'react';

export default function RecentWinners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  
  const winners = [
    { name: "Priya S.", amount: "₹250", time: "2 min ago", avatar: "https://readdy.ai/api/search-image?query=young%20Indian%20woman%20smiling%20happily%2C%20profile%20picture%20style%2C%20bright%20background%2C%20winner%20celebration%20expression%2C%20modern%20portrait%20photography&width=80&height=80&seq=winner1&orientation=squarish" },
    { name: "Raj M.", amount: "₹180", time: "15 min ago", avatar: "https://readdy.ai/api/search-image?query=young%20Indian%20man%20happy%20expression%2C%20profile%20picture%20style%2C%20bright%20background%2C%20winner%20celebration%2C%20modern%20portrait%20photography&width=80&height=80&seq=winner2&orientation=squarish" },
    { name: "Anjali K.", amount: "₹320", time: "1 hour ago", avatar: "https://readdy.ai/api/search-image?query=young%20Indian%20woman%20excited%20expression%2C%20profile%20picture%20style%2C%20bright%20background%2C%20winner%20celebration%2C%20modern%20portrait%20photography&width=80&height=80&seq=winner3&orientation=squarish" },
    { name: "Arjun P.", amount: "₹150", time: "2 hours ago", avatar: "https://readdy.ai/api/search-image?query=young%20Indian%20man%20cheerful%20expression%2C%20profile%20picture%20style%2C%20bright%20background%2C%20winner%20celebration%2C%20modern%20portrait%20photography&width=80&height=80&seq=winner4&orientation=squarish" },
    { name: "Sneha R.", amount: "₹200", time: "3 hours ago", avatar: "https://readdy.ai/api/search-image?query=young%20Indian%20woman%20joyful%20expression%2C%20profile%20picture%20style%2C%20bright%20background%2C%20winner%20celebration%2C%20modern%20portrait%20photography&width=80&height=80&seq=winner5&orientation=squarish" },
  ];
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    if (!mounted) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % winners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [mounted, winners.length]);
  
  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          🎉 Recent Winners
        </h2>
        
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: mounted ? `translateX(-${currentIndex * 100}%)` : 'translateX(0%)' }}
            suppressHydrationWarning={true}
          >
            {winners.map((winner, index) => (
              <div key={index} className="flex-none w-full">
                <div className="bg-white rounded-2xl p-6 shadow-lg max-w-sm mx-auto border border-gray-200">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={winner.avatar} 
                      alt={winner.name}
                      className="w-16 h-16 rounded-full object-cover object-top"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">{winner.name}</div>
                      <div className="text-green-600 font-bold text-lg">{winner.amount}</div>
                      <div className="text-gray-500 text-sm">{winner.time}</div>
                    </div>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <i className="ri-trophy-fill text-yellow-600"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {winners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
