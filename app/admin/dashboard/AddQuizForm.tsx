'use client';

import { useState } from 'react';

export default function AddQuizForm() {
  const [formData, setFormData] = useState({
    emoji: '',
    correctAnswer: '',
    timeLimit: '30',
    difficulty: 'medium',
    category: 'bollywood'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    // Simulate API call
    setTimeout(() => {
      setMessage('Quiz added successfully!');
      setIsSubmitting(false);
      setFormData({
        emoji: '',
        correctAnswer: '',
        timeLimit: '30',
        difficulty: 'medium',
        category: 'bollywood'
      });
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <i className="ri-add-circle-fill text-blue-600 text-xl"></i>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Add New Quiz</h2>
          <p className="text-gray-600">Create a new movie guess quiz</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Movie Emoji Clues
            </label>
            <textarea
              value={formData.emoji}
              onChange={(e) => setFormData({...formData, emoji: e.target.value})}
              placeholder="🦸‍♂️💥🕷️ (Example: Spider-Man)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={3}
              required
            />
            <p className="text-xs text-gray-500 mt-1">Use emojis to represent the movie</p>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Correct Answer
            </label>
            <input
              type="text"
              value={formData.correctAnswer}
              onChange={(e) => setFormData({...formData, correctAnswer: e.target.value})}
              placeholder="Enter the correct movie name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Exact movie title</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Time Limit (seconds)
            </label>
            <select
              value={formData.timeLimit}
              onChange={(e) => setFormData({...formData, timeLimit: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
            >
              <option value="15">15 seconds</option>
              <option value="30">30 seconds</option>
              <option value="45">45 seconds</option>
              <option value="60">1 minute</option>
              <option value="90">1.5 minutes</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Difficulty Level
            </label>
            <select
              value={formData.difficulty}
              onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
            >
              <option value="bollywood">Bollywood</option>
              <option value="hollywood">Hollywood</option>
              <option value="animation">Animation</option>
              <option value="classic">Classic</option>
              <option value="thriller">Thriller</option>
            </select>
          </div>
        </div>

        {message && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <i className="ri-check-circle-fill text-green-600 text-lg mr-2"></i>
              <p className="text-green-700">{message}</p>
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => setFormData({
              emoji: '',
              correctAnswer: '',
              timeLimit: '30',
              difficulty: 'medium',
              category: 'bollywood'
            })}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
          >
            Reset Form
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Adding Quiz...
              </div>
            ) : (
              'Add Quiz'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}