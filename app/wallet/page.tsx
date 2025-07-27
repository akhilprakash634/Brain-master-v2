'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Transaction {
  id: string;
  type: 'earning' | 'spend';
  title: string;
  amount: number;
  date: string;
  time: string;
  icon: string;
}

export default function WalletPage() {
  const [currentBalance] = useState(34);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showWithdrawForm, setShowWithdrawForm] = useState(false);
  const [showAddCoins, setShowAddCoins] = useState(false);
  const [upiId, setUpiId] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(0);

  const minWithdrawAmount = 50;
  const canWithdraw = currentBalance >= minWithdrawAmount;

  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'earning',
      title: 'Won Quiz #1247',
      amount: 15,
      date: '2024-01-15',
      time: '14:30',
      icon: 'ri-trophy-fill'
    },
    {
      id: '2',
      type: 'spend',
      title: 'Joined Quiz #1246',
      amount: 1,
      date: '2024-01-15',
      time: '14:00',
      icon: 'ri-play-circle-fill'
    },
    {
      id: '3',
      type: 'earning',
      title: 'Won Quiz #1245',
      amount: 8,
      date: '2024-01-15',
      time: '13:45',
      icon: 'ri-trophy-fill'
    },
    {
      id: '4',
      type: 'spend',
      title: 'Joined Quiz #1245',
      amount: 1,
      date: '2024-01-15',
      time: '13:30',
      icon: 'ri-play-circle-fill'
    },
    {
      id: '5',
      type: 'earning',
      title: 'Referral Bonus',
      amount: 2,
      date: '2024-01-14',
      time: '18:20',
      icon: 'ri-gift-2-fill'
    },
    {
      id: '6',
      type: 'spend',
      title: 'Joined Quiz #1244',
      amount: 1,
      date: '2024-01-14',
      time: '16:15',
      icon: 'ri-play-circle-fill'
    },
    {
      id: '7',
      type: 'earning',
      title: 'Won Quiz #1243',
      amount: 12,
      date: '2024-01-14',
      time: '15:45',
      icon: 'ri-trophy-fill'
    },
    {
      id: '8',
      type: 'spend',
      title: 'Add Coins',
      amount: 10,
      date: '2024-01-14',
      time: '10:30',
      icon: 'ri-add-circle-fill'
    }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'earnings') return transaction.type === 'earning';
    if (activeFilter === 'spends') return transaction.type === 'spend';
    return true;
  });

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault();
    if (!upiId) {
      alert('Please enter your UPI ID');
      return;
    }
    alert('Withdrawal request submitted successfully! Processing will take 24 hours.');
    setShowWithdrawForm(false);
    setUpiId('');
  };

  const handleAddCoins = (amount: number) => {
    setSelectedAmount(amount);
    alert(`Added ₹${amount} to your wallet successfully!`);
    setShowAddCoins(false);
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
            <h1 className="text-xl font-semibold">My Wallet</h1>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <i className="ri-wallet-3-fill text-white text-lg"></i>
          </div>
        </div>
      </div>

      {/* Wallet Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Balance Card */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-wallet-3-fill text-white text-3xl"></i>
            </div>
            <h2 className="text-lg font-medium text-gray-600 mb-2">Current Balance</h2>
            <p className="text-5xl font-bold text-gray-800">₹{currentBalance}</p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setShowAddCoins(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all whitespace-nowrap flex items-center justify-center space-x-2"
            >
              <i className="ri-add-circle-fill text-lg"></i>
              <span>Add Coins</span>
            </button>
            <button
              onClick={() => setShowWithdrawForm(true)}
              disabled={!canWithdraw}
              className={`${
                canWithdraw
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              } py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all whitespace-nowrap flex items-center justify-center space-x-2`}
            >
              <i className="ri-bank-fill text-lg"></i>
              <span>Withdraw</span>
            </button>
          </div>

          {/* Withdraw Warning */}
          {!canWithdraw && (
            <div className="mt-4 bg-orange-50 border border-orange-200 rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <i className="ri-information-fill text-orange-600 text-lg"></i>
                <p className="text-sm text-orange-700">
                  You need at least ₹{minWithdrawAmount} to withdraw
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Transaction History */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Transaction History</h3>

          {/* Filter Buttons */}
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('earnings')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeFilter === 'earnings'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Earnings
            </button>
            <button
              onClick={() => setActiveFilter('spends')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                activeFilter === 'spends'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Spends
            </button>
          </div>

          {/* Transaction List */}
          <div className="space-y-3">
            {filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'earning' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <i className={`${transaction.icon} text-lg ${
                      transaction.type === 'earning' ? 'text-green-600' : 'text-red-600'
                    }`}></i>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{transaction.title}</p>
                    <p className="text-sm text-gray-500">{transaction.date} at {transaction.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-lg ${
                    transaction.type === 'earning' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'earning' ? '+' : '-'}₹{transaction.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-list-3-fill text-gray-400 text-2xl"></i>
              </div>
              <p className="text-gray-500">No transactions found</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Coins Modal */}
      {showAddCoins && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Add Coins</h3>
              <button 
                onClick={() => setShowAddCoins(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <i className="ri-close-line text-gray-600"></i>
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 text-center mb-6">Select amount to add to your wallet</p>
              
              <div className="grid grid-cols-3 gap-4">
                {[5, 10, 20, 50, 100, 200].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAddCoins(amount)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all whitespace-nowrap"
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
                <div className="flex items-start space-x-2">
                  <i className="ri-information-fill text-blue-600 text-lg mt-0.5"></i>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Payment Info</p>
                    <p className="text-sm text-blue-700 mt-1">
                      Safe and secure payment via UPI/Card
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <div className="relative">
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="username@paytm"
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    required
                  />
                  <i className="ri-bank-fill text-gray-400 text-lg absolute left-4 top-1/2 transform -translate-y-1/2"></i>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount Available
                </label>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-2xl font-bold text-green-600">₹{currentBalance}</p>
                  <p className="text-sm text-gray-600">Full amount will be withdrawn</p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-start space-x-2">
                  <i className="ri-time-fill text-yellow-600 text-lg mt-0.5"></i>
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Processing Time</p>
                    <p className="text-sm text-yellow-700 mt-1">
                      Manual processing in 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-xl font-bold text-lg hover:shadow-lg transition-all whitespace-nowrap"
              >
                Request Withdrawal
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
          <button className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-purple-600 bg-purple-50">
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