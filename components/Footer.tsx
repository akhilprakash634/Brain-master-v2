'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <i className="ri-movie-2-fill text-purple-600 text-lg"></i>
            </div>
            <h3 className="text-xl font-bold font-pacifico">Movie Guess</h3>
          </div>
          <p className="text-gray-400 text-sm mb-6">
            India's favorite movie guessing game with daily cash prizes
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6 text-center">
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fair Play Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-6 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4">
            📱 Download our app for better experience
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-google-play-fill text-xl text-gray-400 hover:text-white transition-colors cursor-pointer"></i>
            </div>
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-app-store-fill text-xl text-gray-400 hover:text-white transition-colors cursor-pointer"></i>
            </div>
          </div>
          <p className="text-gray-500 text-xs">
            © 2024 Movie Guess Challenge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}