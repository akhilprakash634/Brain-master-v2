'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <i className="ri-movie-2-fill text-purple-600 text-lg"></i>
          </div>
          <h1 className="text-xl font-bold font-pacifico">Movie Guess</h1>
        </div>
        <Link href="/login">
          <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}