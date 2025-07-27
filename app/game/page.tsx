'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function GamePage() {
  const [gameType, setGameType] = useState<'emoji' | 'blurred' | 'dialogue'>('emoji');
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gameResult, setGameResult] = useState<'correct' | 'wrong' | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || showResult) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted, showResult]);

  const handleTimeUp = () => {
    setGameResult('wrong');
    setShowResult(true);
  };

  const handleSubmit = async () => {
    if (!userAnswer.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Random result for demo (in real app, this would be server validation)
    const isCorrect = Math.random() > 0.5;
    setGameResult(isCorrect ? 'correct' : 'wrong');
    setIsSubmitting(false);
    setShowResult(true);
  };

  const gameData = {
    emoji: {
      question: "Guess the Movie from Emoji",
      content: "🦁👑🌅",
      answer: "The Lion King"
    },
    blurred: {
      question: "Guess the Movie from Blurred Poster",
      content: "https://readdy.ai/api/search-image?query=blurred%20movie%20poster%20of%20a%20famous%20blockbuster%20film%20with%20action%20hero%20silhouette%2C%20mysterious%20dark%20background%2C%20cinematic%20lighting%2C%20movie%20theater%20style%20poster%20design&width=300&height=400&seq=game1&orientation=portrait",
      answer: "Mission Impossible"
    },
    dialogue: {
      question: "Guess the Movie from Dialogue",
      content: "\"I'll be back.\"",
      answer: "Terminator"
    }
  };

  const currentGame = gameData[gameType];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
        <div className="animate-pulse text-white text-lg">Loading game...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 pb-20">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm px-4 py-6 text-white">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <i className="ri-arrow-left-line text-white text-lg"></i>
          </Link>
          <div className="text-center">
            <h1 className="text-lg font-semibold">Movie Quiz Game</h1>
            <p className="text-purple-100 text-sm">Entry Fee: ₹1</p>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <i className="ri-question-line text-white text-lg"></i>
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Timer */}
        <div className="bg-white rounded-2xl p-4 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <i className="ri-timer-2-fill text-red-600"></i>
              </div>
              <span className="text-gray-700 font-medium">Time Left</span>
            </div>
            <div className="text-2xl font-bold text-red-600" suppressHydrationWarning={true}>
              {timeLeft}s
            </div>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Game Type Selector */}
        <div className="bg-white rounded-2xl p-4 shadow-xl">
          <div className="flex space-x-1 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setGameType('emoji')}
              className={`flex-1 py-2 px-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                gameType === 'emoji' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              🎭 Emoji
            </button>
            <button
              onClick={() => setGameType('blurred')}
              className={`flex-1 py-2 px-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                gameType === 'blurred' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              🖼️ Poster
            </button>
            <button
              onClick={() => setGameType('dialogue')}
              className={`flex-1 py-2 px-3 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                gameType === 'dialogue' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              💬 Dialogue
            </button>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
            {currentGame.question}
          </h2>
          
          {/* Content Display */}
          <div className="flex justify-center mb-6">
            {gameType === 'emoji' && (
              <div className="text-8xl text-center leading-none">
                {currentGame.content}
              </div>
            )}
            
            {gameType === 'blurred' && (
              <div className="relative">
                <img 
                  src={currentGame.content} 
                  alt="Blurred movie poster" 
                  className="w-60 h-80 object-cover rounded-lg"
                  style={{ filter: 'blur(8px)' }}
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              </div>
            )}
            
            {gameType === 'dialogue' && (
              <div className="bg-gray-100 rounded-lg p-6 max-w-md">
                <div className="text-2xl font-bold text-gray-800 text-center italic">
                  {currentGame.content}
                </div>
              </div>
            )}
          </div>

          {/* Input Field */}
          <div className="mb-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type your answer..."
              disabled={isSubmitting || showResult}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-800 text-sm disabled:bg-gray-100"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!userAnswer.trim() || isSubmitting || showResult}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all whitespace-nowrap"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Checking Answer...</span>
              </div>
            ) : (
              'Submit Answer'
            )}
          </button>
        </div>

        {/* Result Display */}
        {showResult && (
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="text-center">
              {gameResult === 'correct' ? (
                <div className="space-y-4">
                  <div className="text-6xl">🎉</div>
                  <h3 className="text-2xl font-bold text-green-600">Correct!</h3>
                  <p className="text-gray-700">You won ₹15!</p>
                  <p className="text-sm text-gray-500">
                    Answer: {currentGame.answer}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-6xl">😔</div>
                  <h3 className="text-2xl font-bold text-red-600">Oops! Wrong Answer</h3>
                  <p className="text-gray-700">Better luck next time!</p>
                  <p className="text-sm text-gray-500">
                    Correct Answer: {currentGame.answer}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link href="/leaderboard" className="block">
            <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors whitespace-nowrap">
              View Leaderboard
            </button>
          </Link>
          
          <Link href="/dashboard" className="block">
            <button className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors whitespace-nowrap">
              Back to Dashboard
            </button>
          </Link>
        </div>

        {/* Game Stats */}
        <div className="bg-white rounded-2xl p-4 shadow-xl">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-group-fill text-blue-600"></i>
              </div>
              <p className="text-xs text-gray-600">Players</p>
              <p className="text-lg font-bold text-gray-800">847</p>
            </div>
            <div>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-money-dollar-circle-fill text-green-600"></i>
              </div>
              <p className="text-xs text-gray-600">Prize Pool</p>
              <p className="text-lg font-bold text-gray-800">₹12,705</p>
            </div>
            <div>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-trophy-fill text-purple-600"></i>
              </div>
              <p className="text-xs text-gray-600">Winners</p>
              <p className="text-lg font-bold text-gray-800">156</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}