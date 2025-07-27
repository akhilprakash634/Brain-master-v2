'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function WinnersPage() {
  const [activeFilter, setActiveFilter] = useState('today');
  const [animatedTrophies, setAnimatedTrophies] = useState(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedTrophies(prev => {
        const newSet = new Set(prev);
        if (Math.random() > 0.7) {
          newSet.add(Math.floor(Math.random() * 10));
        }
        return newSet;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const winnersData = {
    today: [
      { rank: 1, name: "Rajesh Kumar", amount: 2500, avatar: "🏆", games: 8, streak: 5 },
      { rank: 2, name: "Priya Sharma", amount: 1800, avatar: "💎", games: 6, streak: 3 },
      { rank: 3, name: "Amit Patel", amount: 1200, avatar: "⭐", games: 5, streak: 2 },
      { rank: 4, name: "Sneha Reddy", amount: 950, avatar: "🎯", games: 4, streak: 4 },
      { rank: 5, name: "Vikram Singh", amount: 750, avatar: "🚀", games: 3, streak: 1 },
      { rank: 6, name: "Kavya Nair", amount: 600, avatar: "💰", games: 3, streak: 2 },
      { rank: 7, name: "Rohit Gupta", amount: 480, avatar: "🎪", games: 2, streak: 1 },
      { rank: 8, name: "Ananya Joshi", amount: 350, avatar: "🌟", games: 2, streak: 3 },
      { rank: 9, name: "Suresh Yadav", amount: 280, avatar: "⚡", games: 1, streak: 1 },
      { rank: 10, name: "Deepika Rao", amount: 200, avatar: "🎊", games: 1, streak: 2 }
    ],
    weekly: [
      { rank: 1, name: "Arjun Mehta", amount: 15500, avatar: "🏆", games: 42, streak: 8 },
      { rank: 2, name: "Ritu Verma", amount: 12800, avatar: "💎", games: 38, streak: 6 },
      { rank: 3, name: "Manoj Tiwari", amount: 10200, avatar: "⭐", games: 32, streak: 5 },
      { rank: 4, name: "Pooja Agarwal", amount: 8900, avatar: "🎯", games: 28, streak: 4 },
      { rank: 5, name: "Karan Malhotra", amount: 7500, avatar: "🚀", games: 25, streak: 3 },
      { rank: 6, name: "Nisha Gupta", amount: 6200, avatar: "💰", games: 22, streak: 2 },
      { rank: 7, name: "Sanjay Kumar", amount: 5100, avatar: "🎪", games: 19, streak: 1 },
      { rank: 8, name: "Meera Jain", amount: 4300, avatar: "🌟", games: 16, streak: 3 },
      { rank: 9, name: "Rahul Singh", amount: 3800, avatar: "⚡", games: 14, streak: 2 },
      { rank: 10, name: "Sunita Rao", amount: 3200, avatar: "🎊", games: 12, streak: 1 }
    ],
    monthly: [
      { rank: 1, name: "Sanjay Kapoor", amount: 85000, avatar: "🏆", games: 180, streak: 15 },
      { rank: 2, name: "Meera Iyer", amount: 72000, avatar: "💎", games: 165, streak: 12 },
      { rank: 3, name: "Rahul Chandra", amount: 65000, avatar: "⭐", games: 152, streak: 10 },
      { rank: 4, name: "Sunita Devi", amount: 58000, avatar: "🎯", games: 145, streak: 9 },
      { rank: 5, name: "Ajay Thakur", amount: 51000, avatar: "🚀", games: 138, streak: 8 },
      { rank: 6, name: "Priya Kapoor", amount: 44000, avatar: "💰", games: 125, streak: 7 },
      { rank: 7, name: "Vikash Sharma", amount: 38000, avatar: "🎪", games: 115, streak: 6 },
      { rank: 8, name: "Neha Gupta", amount: 32000, avatar: "🌟", games: 108, streak: 5 },
      { rank: 9, name: "Manish Joshi", amount: 28000, avatar: "⚡", games: 95, streak: 4 },
      { rank: 10, name: "Kavita Singh", amount: 24000, avatar: "🎊", games: 88, streak: 3 }
    ]
  };

  const currentWinners = winnersData[activeFilter as keyof typeof winnersData];
  const userRank = { rank: 47, score: 340, games: 12 };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-blue-600 pb-20">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-8 w-6 h-6 bg-orange-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-40 left-6 w-8 h-8 bg-blue-300 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-60 right-20 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm px-4 py-6 text-white relative">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
            <i className="ri-arrow-left-line text-white text-xl"></i>
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold">🏆 Winners Hall 🏆</h1>
            <p className="text-yellow-100 text-sm">Celebrating Our Champions</p>
          </div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <i className="ri-medal-fill text-yellow-300 text-xl animate-pulse"></i>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Filter Tabs */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-yellow-200">
          <div className="flex space-x-1 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full p-1">
            <button
              onClick={() => setActiveFilter('today')}
              className={`flex-1 py-3 px-4 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeFilter === 'today' 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              🌅 Today
            </button>
            <button
              onClick={() => setActiveFilter('weekly')}
              className={`flex-1 py-3 px-4 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeFilter === 'weekly' 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              📅 This Week
            </button>
            <button
              onClick={() => setActiveFilter('monthly')}
              className={`flex-1 py-3 px-4 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeFilter === 'monthly' 
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg' 
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              🗓️ This Month
            </button>
          </div>
        </div>

        {/* Top 3 Champions Podium */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-yellow-200">
          <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
            🎉 Top 3 Champions 🎉
          </h2>
          <div className="flex justify-center items-end space-x-4">
            {/* 2nd Place */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <span className="text-3xl">🥈</span>
              </div>
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-3">
                <p className="text-sm font-bold text-gray-800">{currentWinners[1]?.name}</p>
                <p className="text-xs text-gray-600">{currentWinners[1]?.games} games</p>
                <p className="text-lg font-bold text-blue-600">₹{currentWinners[1]?.amount}</p>
              </div>
            </div>
            
            {/* 1st Place */}
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-3 shadow-xl animate-pulse">
                <span className="text-4xl">🏆</span>
              </div>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 border-2 border-yellow-400">
                <p className="text-sm font-bold text-gray-800">{currentWinners[0]?.name}</p>
                <p className="text-xs text-gray-600">{currentWinners[0]?.games} games</p>
                <p className="text-xl font-bold text-orange-600">₹{currentWinners[0]?.amount}</p>
              </div>
            </div>
            
            {/* 3rd Place */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <span className="text-3xl">🥉</span>
              </div>
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-3">
                <p className="text-sm font-bold text-gray-800">{currentWinners[2]?.name}</p>
                <p className="text-xs text-gray-600">{currentWinners[2]?.games} games</p>
                <p className="text-lg font-bold text-orange-600">₹{currentWinners[2]?.amount}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Winners List */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-yellow-200">
          <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🌟 Complete Winners List 🌟
          </h3>
          <div className="space-y-3">
            {currentWinners.map((winner, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all border border-blue-100">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                      winner.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                      winner.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500' :
                      winner.rank === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                      'bg-gradient-to-br from-blue-400 to-purple-500'
                    }`}>
                      {winner.avatar}
                    </div>
                    {animatedTrophies.has(index) && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                        <i className="ri-trophy-fill text-white text-xs"></i>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{winner.name}</p>
                    <div className="flex items-center space-x-2 text-xs text-gray-600">
                      <span>🎮 {winner.games} games</span>
                      <span>🔥 {winner.streak} streak</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-blue-600">#{winner.rank}</p>
                  <p className="text-lg font-bold text-green-600">₹{winner.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Performance */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-yellow-200">
          <h3 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🎯 Your Performance 🎯
          </h3>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <i className="ri-user-star-fill text-white text-2xl"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-800">You</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>🎮 {userRank.games} games</span>
                    <span>💫 Rising Star</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600">#{userRank.rank}</p>
                <p className="text-lg font-bold text-green-600">₹{userRank.score}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link href="/game" className="block">
            <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all whitespace-nowrap">
              🎮 Play & Win Now
            </button>
          </Link>
          
          <Link href="/leaderboard" className="block">
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all whitespace-nowrap">
              📊 View Full Leaderboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}