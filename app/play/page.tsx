
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PlayPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('play');
  const [mounted, setMounted] = useState(false);
  const [isProUser, setIsProUser] = useState(false); // For demo purposes

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = [
    { id: 'all', label: 'All', icon: '🔎' },
    { id: 'malayalam', label: 'Malayalam', icon: '🎬' },
    { id: 'hindi', label: 'Hindi', icon: '🎥' },
    { id: 'tamil', label: 'Tamil', icon: '🎞️' },
    { id: 'bollywood', label: 'Bollywood', icon: '🌟' },
    { id: 'south', label: 'South Hits', icon: '🔥' },
    { id: 'classics', label: 'Classics', icon: '🕰️' },
    { id: 'new', label: 'New Releases', icon: '🆕' },
    { id: 'host', label: 'Host Game', icon: '➕' }
  ];

  const games = [
    {
      id: 1,
      category: 'Bollywood',
      categoryIcon: '🌟',
      prize: 50,
      entryFee: 1,
      timeLeft: '03:21',
      status: 'starting',
      difficulty: 'Easy',
      type: 'Emoji',
      typeIcon: '🎭',
      players: 234,
      prizePool: 350,
      isUserHosted: false
    },
    {
      id: 2,
      category: 'Malayalam',
      categoryIcon: '🎬',
      prize: 75,
      entryFee: 2,
      timeLeft: 'Live Now!',
      status: 'live',
      difficulty: 'Medium',
      type: 'Poster',
      typeIcon: '🖼️',
      players: 156,
      prizePool: 468,
      isUserHosted: true,
      hostName: 'Movie_Buff23'
    },
    {
      id: 3,
      category: 'Tamil',
      categoryIcon: '🎞️',
      prize: 100,
      entryFee: 3,
      timeLeft: '12:45',
      status: 'starting',
      difficulty: 'Hard',
      type: 'Dialogue',
      typeIcon: '💬',
      players: 89,
      prizePool: 890,
      isUserHosted: false
    },
    {
      id: 4,
      category: 'South Hits',
      categoryIcon: '🔥',
      prize: 60,
      entryFee: 1,
      timeLeft: '08:30',
      status: 'starting',
      difficulty: 'Easy',
      type: 'Emoji',
      typeIcon: '🎭',
      players: 312,
      prizePool: 468,
      isUserHosted: true,
      hostName: 'TamilCinema_Pro'
    },
    {
      id: 5,
      category: 'Classics',
      categoryIcon: '🕰️',
      prize: 90,
      entryFee: 2,
      timeLeft: '15:20',
      status: 'starting',
      difficulty: 'Medium',
      type: 'Poster',
      typeIcon: '🖼️',
      players: 178,
      prizePool: 534,
      isUserHosted: false
    },
    {
      id: 6,
      category: 'New Releases',
      categoryIcon: '🆕',
      prize: 120,
      entryFee: 3,
      timeLeft: '02:15',
      status: 'starting',
      difficulty: 'Hard',
      type: 'Dialogue',
      typeIcon: '💬',
      players: 67,
      prizePool: 805,
      isUserHosted: false
    }
  ];

  const filteredGames = activeCategory === 'all' 
    ? games 
    : games.filter(game => game.category.toLowerCase().includes(activeCategory));

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'live' ? 'text-red-600' : 'text-purple-600';
  };

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'host') {
      // Handle host game action
      return;
    }
    setActiveCategory(categoryId);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 pb-20">
        <div className="animate-pulse">
          <div className="bg-white/10 backdrop-blur-sm px-4 py-6">
            <div className="h-6 bg-white/20 rounded mb-2"></div>
            <div className="h-4 bg-white/20 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 pb-20">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm px-4 py-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <i className="ri-play-circle-fill text-white text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold">Play Game</h1>
              <p className="text-purple-100 text-sm">Choose your challenge!</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-full px-3 py-1">
              <span className="text-sm font-semibold">₹18</span>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <i className="ri-notification-3-fill text-white text-lg"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 py-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                category.id === 'host'
                  ? isProUser
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 shadow-lg'
                    : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 shadow-lg'
                  : activeCategory === category.id
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <span className="text-sm">{category.icon}</span>
              <span className="text-sm font-medium">{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Pro Feature Card */}
      <div className="px-4 mb-4">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-4 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                <i className="ri-vip-crown-fill text-yellow-200 text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-yellow-900">Host Your Own Game</h3>
                <p className="text-yellow-800 text-sm">Create your own quiz, set your prize pool</p>
              </div>
            </div>
            <div className="bg-yellow-600 px-3 py-1 rounded-full">
              <span className="text-yellow-100 text-xs font-bold">PRO</span>
            </div>
          </div>
          <div className="mt-4">
            <button className={`w-full py-3 rounded-xl font-bold transition-all whitespace-nowrap ${
              isProUser
                ? 'bg-yellow-600 text-yellow-100 hover:bg-yellow-700'
                : 'bg-yellow-600 text-yellow-100 hover:bg-yellow-700'
            }`}>
              {isProUser ? 'Start Hosting Now' : 'Go Pro & Host'}
            </button>
          </div>
        </div>
      </div>

      {/* Games List */}
      <div className="px-4 space-y-4">
        {filteredGames.map((game) => (
          <div key={game.id} className="bg-white rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300">
            {/* Game Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{game.categoryIcon}</span>
                <span className="text-sm font-semibold text-gray-800">{game.category}</span>
                {game.isUserHosted && (
                  <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                    Hosted by {game.hostName}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-bold ${getStatusColor(game.status)}`}>
                  {game.status === 'live' ? '🔴 Live Now!' : `⏱️ ${game.timeLeft}`}
                </span>
              </div>
            </div>

            {/* Prize and Entry Info */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">₹{game.prize}</div>
                  <div className="text-xs text-gray-500">Prize Pool</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-purple-600">₹{game.entryFee}</div>
                  <div className="text-xs text-gray-500">Entry Fee</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-800">{game.players} players</div>
                <div className="text-xs text-gray-500">Total Pool: ₹{game.prizePool}</div>
              </div>
            </div>

            {/* Game Details */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <span className="text-sm">{game.typeIcon}</span>
                  <span className="text-sm text-gray-600">{game.type}</span>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                  {game.difficulty}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Link href="/game" className="block">
              <button className={`w-full py-3 rounded-xl font-bold text-white transition-all whitespace-nowrap transform hover:scale-105 ${
                game.status === 'live' 
                  ? 'bg-gradient-to-r from-red-500 to-red-600 hover:shadow-lg' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg'
              }`}>
                {game.status === 'live' ? '🎮 Join Live Game' : '🎁 Join Game'}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="px-4 py-6">
        <div className="bg-white rounded-2xl p-4 shadow-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <i className="ri-bar-chart-fill text-purple-600 mr-2"></i>
            Today's Stats
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-group-fill text-blue-600"></i>
              </div>
              <p className="text-xs text-gray-600">Active Players</p>
              <p className="text-lg font-bold text-gray-800">1,247</p>
            </div>
            <div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-money-dollar-circle-fill text-green-600"></i>
              </div>
              <p className="text-xs text-gray-600">Total Prizes</p>
              <p className="text-lg font-bold text-gray-800">₹45,680</p>
            </div>
            <div>
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-trophy-fill text-yellow-600"></i>
              </div>
              <p className="text-xs text-gray-600">Winners</p>
              <p className="text-lg font-bold text-gray-800">342</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <Link href="/dashboard" className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-purple-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-home-fill text-xl"></i>
            </div>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <button
            onClick={() => setActiveTab('play')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'play' ? 'text-purple-600 bg-purple-50' : 'text-gray-500'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-play-circle-fill text-xl"></i>
            </div>
            <span className="text-xs mt-1">Play</span>
          </button>
          <Link href="/wallet" className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-purple-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-wallet-3-fill text-xl"></i>
            </div>
            <span className="text-xs mt-1">Wallet</span>
          </Link>
          <Link href="/winners" className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-purple-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-trophy-fill text-xl"></i>
            </div>
            <span className="text-xs mt-1">Winners</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-purple-600">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-user-fill text-xl"></i>
            </div>
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
