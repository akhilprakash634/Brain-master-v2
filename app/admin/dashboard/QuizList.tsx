'use client';

import { useState } from 'react';

interface Quiz {
  id: string;
  emoji: string;
  correctAnswer: string;
  timeLimit: number;
  difficulty: string;
  category: string;
  createdAt: string;
  totalSubmissions: number;
  correctSubmissions: number;
  isActive: boolean;
}

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([
    {
      id: 'Q001',
      emoji: '🦸‍♂️💥🕷️',
      correctAnswer: 'Spider-Man',
      timeLimit: 30,
      difficulty: 'medium',
      category: 'hollywood',
      createdAt: '2024-01-15 10:00:00',
      totalSubmissions: 45,
      correctSubmissions: 23,
      isActive: true
    },
    {
      id: 'Q002',
      emoji: '👑🦁🌍',
      correctAnswer: 'Lion King',
      timeLimit: 45,
      difficulty: 'easy',
      category: 'animation',
      createdAt: '2024-01-15 11:30:00',
      totalSubmissions: 32,
      correctSubmissions: 28,
      isActive: true
    },
    {
      id: 'Q003',
      emoji: '🚢❄️💔',
      correctAnswer: 'Titanic',
      timeLimit: 60,
      difficulty: 'easy',
      category: 'classic',
      createdAt: '2024-01-15 13:00:00',
      totalSubmissions: 28,
      correctSubmissions: 25,
      isActive: false
    },
    {
      id: 'Q004',
      emoji: '🏃‍♂️🔫💰',
      correctAnswer: 'John Wick',
      timeLimit: 30,
      difficulty: 'hard',
      category: 'thriller',
      createdAt: '2024-01-15 14:00:00',
      totalSubmissions: 18,
      correctSubmissions: 8,
      isActive: true
    }
  ]);

  const toggleQuizStatus = (quizId: string) => {
    setQuizzes(quizzes.map(quiz => 
      quiz.id === quizId ? { ...quiz, isActive: !quiz.isActive } : quiz
    ));
  };

  const deleteQuiz = (quizId: string) => {
    setQuizzes(quizzes.filter(quiz => quiz.id !== quizId));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'bollywood': return 'bg-orange-100 text-orange-800';
      case 'hollywood': return 'bg-blue-100 text-blue-800';
      case 'animation': return 'bg-purple-100 text-purple-800';
      case 'classic': return 'bg-gray-100 text-gray-800';
      case 'thriller': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <i className="ri-question-fill text-purple-600 text-xl"></i>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">All Quizzes</h2>
            <p className="text-gray-600">Manage existing quizzes</p>
          </div>
        </div>
        
        <div className="text-sm text-gray-600">
          Total: {quizzes.length} quizzes
        </div>
      </div>

      <div className="space-y-4">
        {quizzes.map(quiz => (
          <div key={quiz.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="text-3xl">{quiz.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-gray-800">{quiz.correctAnswer}</h3>
                      <span className="text-sm text-gray-500">({quiz.id})</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(quiz.difficulty)}`}>
                        {quiz.difficulty}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(quiz.category)}`}>
                        {quiz.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {quiz.timeLimit}s
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Total Submissions</p>
                    <p className="text-lg font-semibold text-gray-800">{quiz.totalSubmissions}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Correct Answers</p>
                    <p className="text-lg font-semibold text-green-600">{quiz.correctSubmissions}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">Success Rate</p>
                    <p className="text-lg font-semibold text-blue-600">
                      {quiz.totalSubmissions > 0 ? Math.round((quiz.correctSubmissions / quiz.totalSubmissions) * 100) : 0}%
                    </p>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500">Created: {quiz.createdAt}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  quiz.isActive 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {quiz.isActive ? 'Active' : 'Inactive'}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleQuizStatus(quiz.id)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                    quiz.isActive 
                      ? 'bg-yellow-600 text-white hover:bg-yellow-700' 
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {quiz.isActive ? 'Deactivate' : 'Activate'}
                </button>
                
                <button
                  onClick={() => deleteQuiz(quiz.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm whitespace-nowrap"
                >
                  <i className="ri-delete-bin-fill mr-1"></i>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {quizzes.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-question-fill text-gray-400 text-2xl"></i>
          </div>
          <p className="text-gray-500">No quizzes created yet</p>
        </div>
      )}
    </div>
  );
}