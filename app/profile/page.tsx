'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const [upiId, setUpiId] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [referralCode] = useState('QUIZ2024ABC');
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    setShowCopySuccess(true);
    setTimeout(() => setShowCopySuccess(false), 2000);
  };

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseFloat(withdrawAmount) < 50) {
      alert('Minimum withdrawal amount is ₹50');
      return;
    }
    // Handle withdrawal logic here
    alert('Withdrawal request submitted successfully!');
    setShowWithdrawForm(false);
    setUpiId('');
    setWithdrawAmount('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 pb-20">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm px-4 py-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/dashboard" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <i className="ri-arrow-left-line text-white text-xl"></i>
            </Link>
            <h1 className="text-xl font-semibold">My Profile</h1>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <i className="ri-settings-3-fill text-white text-lg"></i>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Profile Info Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <i className="ri-user-fill text-white text-3xl"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Rajesh Kumar</h2>
              <p className="text-gray-600 flex items-center">
                <i className="ri-phone-fill mr-2"></i>
                +91 98765 43210
              </p>
              <p className="text-sm text-gray-500 mt-1">Member since Dec 2023</p>
            </div>
          </div>
          
          {/* Wallet Balance */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-wallet-3-fill text-green-600 text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Current Balance</p>
                  <p className="text-2xl font-bold text-green-600">₹340</p>
                </div>
              </div>
              <button 
                onClick={() => setShowWithdrawForm(true)}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap"
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>

        {/* Referral Section */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-gift-2-fill text-yellow-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Invite Friends & Earn</h3>
            <p className="text-gray-600">Earn ₹2 for every friend who joins using your code</p>
          </div>

          {/* Referral Code */}
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-600 mb-2">Your Referral Code</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-purple-600 tracking-wider">{referralCode}</span>
              <button 
                onClick={copyReferralCode}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap"
              >
                {showCopySuccess ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>

          {/* Invite Button */}
          <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all whitespace-nowrap">
            Invite & Earn ₹2 per friend
          </button>

          {/* Referral Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">12</p>
              <p className="text-sm text-gray-600">Friends Invited</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">₹24</p>
              <p className="text-sm text-gray-600">Referral Earnings</p>
            </div>
          </div>
        </div>

        {/* Game Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-trophy-fill text-blue-600"></i>
              </div>
              <p className="text-xl font-bold text-gray-800">23</p>
              <p className="text-sm text-gray-600">Games Won</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-gamepad-fill text-purple-600"></i>
              </div>
              <p className="text-xl font-bold text-gray-800">45</p>
              <p className="text-sm text-gray-600">Games Played</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-money-dollar-circle-fill text-green-600"></i>
              </div>
              <p className="text-xl font-bold text-gray-800">₹340</p>
              <p className="text-sm text-gray-600">Total Won</p>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 text-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <i className="ri-fire-fill text-yellow-600"></i>
              </div>
              <p className="text-xl font-bold text-gray-800">7</p>
              <p className="text-sm text-gray-600">Win Streak</p>
            </div>
          </div>
        </div>
      </div>

      {/* Withdrawal Form Modal */}
      {showWithdrawForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Withdraw Winnings</h3>
              <button 
                onClick={() => setShowWithdrawForm(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>

            <form onSubmit={handleWithdraw} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  UPI ID
                </label>
                <input
                  type="text"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="username@paytm"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount to Withdraw
                </label>
                <input
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  placeholder="Enter amount"
                  min="50"
                  max="340"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  required
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-start space-x-2">
                  <i className="ri-information-fill text-yellow-600 text-lg mt-0.5"></i>
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Important Notice</p>
                    <p className="text-sm text-yellow-700 mt-1">
                      • Minimum withdrawal amount is ₹50<br/>
                      • Processing time: 2-3 business days<br/>
                      • No withdrawal charges
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all whitespace-nowrap"
              >
                Submit Withdrawal Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around items-center">
          <Link href="/dashboard" className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-home-fill text-xl"></i>
            </div>
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/game" className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-play-circle-fill text-xl"></i>
            </div>
            <span className="text-xs mt-1">Play</span>
          </Link>
          <button className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-wallet-3-fill text-xl"></i>
            </div>
            <span className="text-xs mt-1">Wallet</span>
          </button>
          <Link href="/winners" className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-trophy-fill text-xl"></i>
            </div>
            <span className="text-xs mt-1">Winners</span>
          </Link>
          <button className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-purple-600 bg-purple-50">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-user-fill text-xl"></i>
            </div>
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}