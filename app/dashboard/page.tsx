
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 3, seconds: 42 });
  const [activeTab, setActiveTab] = useState('home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted]);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 pb-20">
        <div className="bg-white/10 backdrop-blur-sm px-4 py-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <i className="ri-user-fill text-purple-600 text-xl"></i>
              </div>
              <div>
                <h1 className="text-lg font-semibold">Welcome back!</h1>
                <p className="text-purple-100 text-sm">Ready to win today?</p>
              </div>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <i className="ri-notification-2-fill text-white text-lg"></i>
            </div>
          </div>
        </div>
        <div className="px-4 py-6">
          <div className="bg-white rounded-2xl p-6 shadow-xl animate-pulse">
            <div className="h-6 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
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
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <i className="ri-user-fill text-purple-600 text-xl"></i>
            </div>
            <div>
              <h1 className="text-lg font-semibold">Welcome back!</h1>
              <p className="text-purple-100 text-sm">Ready to win today?</p>
            </div>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <i className="ri-notification-2-fill text-white text-lg"></i>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Wallet Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-wallet-3-fill text-green-600 text-lg"></i>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Your Wallet</h2>
                <p className="text-2xl font-bold text-green-600">₹12</p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap">
              Add Coins
            </button>
          </div>
        </div>

        {/* Next Game Countdown */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-timer-2-fill text-yellow-600 text-2xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Next Quiz Starting</h3>
            <div className="text-3xl font-bold text-purple-600 mb-4" suppressHydrationWarning={true}>
              {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </div>
            <p className="text-gray-600 text-sm mb-4">Get ready for the next movie challenge!</p>
            <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all whitespace-nowrap">
              Join Now - ₹1 Entry
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-trophy-fill text-blue-600"></i>
            </div>
            <p className="text-sm text-gray-600">Games Won</p>
            <p className="text-xl font-bold text-gray-800">23</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-lg">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-money-dollar-circle-fill text-green-600"></i>
            </div>
            <p className="text-sm text-gray-600">Total Won</p>
            <p className="text-xl font-bold text-gray-800">₹340</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-add-circle-fill text-green-600 text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Won Quiz #1247</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <p className="text-green-600 font-semibold">+₹15</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <i className="ri-subtract-fill text-red-600 text-sm"></i>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Joined Quiz #1246</p>
                  <p className="text-xs text-gray-500">3 hours ago</p>
                </div>
              </div>
              <p className="text-red-600 font-semibold">-₹1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'home' ? 'text-purple-600 bg-purple-50' : 'text-gray-500'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-home-fill text-xl"></i>
            </div>
            <span className="text-xs mt-1">Home</span>
          </button>
          <button
            onClick={() => setActiveTab('play')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'play' ? 'text-purple-600 bg-purple-50' : 'text-gray-500'
            }`}
          >
            <Link href="/play" className="flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-play-circle-fill text-xl"></i>
              </div>
              <span className="text-xs mt-1">Play</span>
            </Link>
          </button>
          <button
            onClick={() => setActiveTab('wallet')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'wallet' ? 'text-purple-600 bg-purple-50' : 'text-gray-500'
            }`}
          >
            <Link href="/wallet" className="flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-wallet-3-fill text-xl"></i>
              </div>
              <span className="text-xs mt-1">Wallet</span>
            </Link>
          </button>
          <button
            onClick={() => setActiveTab('winners')}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
              activeTab === 'winners' ? 'text-purple-600 bg-purple-50' : 'text-gray-500'
            }`}
          >
            <Link href="/winners" className="flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-trophy-fill text-xl"></i>
              </div>
              <span className="text-xs mt-1">Winners</span>
            </Link>
          </button>
          <Link href="/profile" className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500">
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
