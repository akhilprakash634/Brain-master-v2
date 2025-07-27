'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState('today');

  const leaderboardData = {
    today: [
      { rank: 1, name: "Rajesh Kumar", score: 15, winnings: 450, avatar: "🥇" },
      { rank: 2, name: "Priya Sharma", score: 14, winnings: 350, avatar: "🥈" },
      { rank: 3, name: "Amit Patel", score: 13, winnings: 280, avatar: "🥉" },
      { rank: 4, name: "Sneha Reddy", score: 12, winnings: 220, avatar: "🏆" },
      { rank: 5, name: "Vikram Singh", score: 11, winnings: 180, avatar: "⭐" },
      { rank: 6, name: "Kavya Nair", score: 10, winnings: 150, avatar: "💎" },
      { rank: 7, name: "Rohit Gupta", score: 9, winnings: 120, avatar: "🎯" },
      { rank: 8, name: "Ananya Joshi", score: 8, winnings: 100, avatar: "🚀" },
      { rank: 9, name: "Suresh Yadav", score: 7, winnings: 80, avatar: "⚡" },
      { rank: 10, name: "Deepika Rao", score: 6, winnings: 60, avatar: "🌟" }
    ],
    weekly: [
      { rank: 1, name: "Arjun Mehta", score: 98, winnings: 2450, avatar: "🥇" },
      { rank: 2, name: "Ritu Verma", score: 92, winnings: 1850, avatar: "🥈" },
      { rank: 3, name: "Manoj Tiwari", score: 87, winnings: 1450, avatar: "🥉" },
      { rank: 4, name: "Pooja Agarwal", score: 83, winnings: 1200, avatar: "🏆" },
      { rank: 5, name: "Karan Malhotra", score: 78, winnings: 980, avatar: "⭐" }
    ],
    monthly: [
      { rank: 1, name: "Sanjay Kapoor", score: 387, winnings: 12500, avatar: "🥇" },
      { rank: 2, name: "Meera Iyer", score: 352, winnings: 9800, avatar: "🥈" },
      { rank: 3, name: "Rahul Chandra", score: 341, winnings: 8200, avatar: "🥉" },
      { rank: 4, name: "Sunita Devi", score: 325, winnings: 6500, avatar: "🏆" },
      { rank: 5, name: "Ajay Thakur", score: 312, winnings: 5200, avatar: "⭐" }
    ]
  };

  const currentData = leaderboardData[activeTab as keyof typeof leaderboardData];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 pb-20">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm px-4 py-6 text-white">
        <div className="flex items-center justify-between">
          <Link href="/game" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <i className="ri-arrow-left-line text-white text-lg"></i>
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-semibold">Leaderboard</h1>
            <p className="text-purple-100 text-sm">Top Movie Quiz Players</p>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <i className="ri-trophy-fill text-white text-lg"></i>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Tab Selector */}
        <div className="bg-white rounded-2xl p-4 shadow-xl">
          <div className="flex space-x-1 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setActiveTab('today')}
              className={`flex-1 py-2 px-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'today' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Today
            </button>
            <button
              onClick={() => setActiveTab('weekly')}
              className={`flex-1 py-2 px-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'weekly' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={`flex-1 py-2 px-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === 'monthly' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              This Month
            </button>
          </div>
        </div>

        {/* Top 3 Winners */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h2 className="text-lg font-bold text-gray-800 mb-4 text-center">Top 3 Champions</h2>
          <div className="flex justify-center items-end space-x-4">
            {/* 2nd Place */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 text-2xl">
                🥈
              </div>
              <p className="text-sm font-semibold text-gray-800">{currentData[1]?.name}</p>
              <p className="text-xs text-gray-600">{currentData[1]?.score} points</p>
              <p className="text-sm font-bold text-green-600">₹{currentData[1]?.winnings}</p>
            </div>
            
            {/* 1st Place */}
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-2 text-3xl">
                🥇
              </div>
              <p className="text-sm font-semibold text-gray-800">{currentData[0]?.name}</p>
              <p className="text-xs text-gray-600">{currentData[0]?.score} points</p>
              <p className="text-sm font-bold text-green-600">₹{currentData[0]?.winnings}</p>
            </div>
            
            {/* 3rd Place */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-2 text-2xl">
                🥉
              </div>
              <p className="text-sm font-semibold text-gray-800">{currentData[2]?.name}</p>
              <p className="text-xs text-gray-600">{currentData[2]?.score} points</p>
              <p className="text-sm font-bold text-green-600">₹{currentData[2]?.winnings}</p>
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Complete Rankings</h3>
          <div className="space-y-3">
            {currentData.map((player, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-lg">
                    {player.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{player.name}</p>
                    <p className="text-sm text-gray-600">{player.score} points</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-purple-600">#{player.rank}</p>
                  <p className="text-sm font-semibold text-green-600">₹{player.winnings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Rank */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Your Performance</h3>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <i className="ri-user-fill text-purple-600 text-xl"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">You</p>
                  <p className="text-sm text-gray-600">4 points</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-purple-600">#47</p>
                <p className="text-sm font-semibold text-green-600">₹12</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link href="/game" className="block">
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap">
              Play Another Game
            </button>
          </Link>
          
          <Link href="/dashboard" className="block">
            <button className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors whitespace-nowrap">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}