'use client';

import { useState } from 'react';

interface Answer {
  id: string;
  userId: string;
  userName: string;
  userPhone: string;
  quizId: string;
  quizEmoji: string;
  correctAnswer: string;
  userAnswer: string;
  submittedAt: string;
  isCorrect: boolean;
  isPrizeSent: boolean;
}

export default function SubmittedAnswers() {
  const [selectedQuiz, setSelectedQuiz] = useState('all');
  const [answers, setAnswers] = useState<Answer[]>([
    {
      id: '1',
      userId: '001',
      userName: 'Rajesh Kumar',
      userPhone: '+91 9876543210',
      quizId: 'Q001',
      quizEmoji: '🦸‍♂️💥🕷️',
      correctAnswer: 'Spider-Man',
      userAnswer: 'Spiderman',
      submittedAt: '2024-01-15 14:30:25',
      isCorrect: true,
      isPrizeSent: false
    },
    {
      id: '2',
      userId: '002',
      userName: 'Priya Sharma',
      userPhone: '+91 9876543211',
      quizId: 'Q001',
      quizEmoji: '🦸‍♂️💥🕷️',
      correctAnswer: 'Spider-Man',
      userAnswer: 'Iron Man',
      submittedAt: '2024-01-15 14:31:10',
      isCorrect: false,
      isPrizeSent: false
    },
    {
      id: '3',
      userId: '003',
      userName: 'Amit Patel',
      userPhone: '+91 9876543212',
      quizId: 'Q002',
      quizEmoji: '👑🦁🌍',
      correctAnswer: 'Lion King',
      userAnswer: 'Lion King',
      submittedAt: '2024-01-15 14:32:45',
      isCorrect: true,
      isPrizeSent: true
    },
    {
      id: '4',
      userId: '004',
      userName: 'Sneha Singh',
      userPhone: '+91 9876543213',
      quizId: 'Q001',
      quizEmoji: '🦸‍♂️💥🕷️',
      correctAnswer: 'Spider-Man',
      userAnswer: 'Spider-Man',
      submittedAt: '2024-01-15 14:29:15',
      isCorrect: true,
      isPrizeSent: false
    }
  ]);

  const markAsCorrect = (answerId: string) => {
    setAnswers(answers.map(answer => 
      answer.id === answerId ? { ...answer, isCorrect: true } : answer
    ));
  };

  const markAsIncorrect = (answerId: string) => {
    setAnswers(answers.map(answer => 
      answer.id === answerId ? { ...answer, isCorrect: false } : answer
    ));
  };

  const sendPrize = (answerId: string) => {
    setAnswers(answers.map(answer => 
      answer.id === answerId ? { ...answer, isPrizeSent: true } : answer
    ));
  };

  const filteredAnswers = selectedQuiz === 'all' 
    ? answers 
    : answers.filter(answer => answer.quizId === selectedQuiz);

  const uniqueQuizzes = [...new Set(answers.map(answer => answer.quizId))];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
            <i className="ri-file-list-fill text-yellow-600 text-xl"></i>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">Submitted Answers</h2>
            <p className="text-gray-600">Review and manage user submissions</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={selectedQuiz}
            onChange={(e) => setSelectedQuiz(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent pr-8"
          >
            <option value="all">All Quizzes</option>
            {uniqueQuizzes.map(quizId => (
              <option key={quizId} value={quizId}>Quiz {quizId}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {filteredAnswers.map(answer => (
          <div key={answer.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <i className="ri-user-fill text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{answer.userName}</h3>
                    <p className="text-sm text-gray-600">{answer.userPhone}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Quiz ID: {answer.quizId}</p>
                    <p className="text-xs text-gray-500">{answer.submittedAt}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Quiz Emoji</label>
                      <p className="text-2xl">{answer.quizEmoji}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">Correct Answer</label>
                      <p className="text-sm text-gray-800 font-medium">{answer.correctAnswer}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">User Answer</label>
                      <p className={`text-sm font-medium ${
                        answer.isCorrect ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {answer.userAnswer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  answer.isCorrect 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {answer.isCorrect ? 'Correct' : 'Incorrect'}
                </div>
                
                {answer.isPrizeSent && (
                  <div className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                    Prize Sent
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => markAsCorrect(answer.id)}
                  className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm whitespace-nowrap"
                >
                  <i className="ri-check-fill mr-1"></i>
                  Mark Correct
                </button>
                
                <button
                  onClick={() => markAsIncorrect(answer.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm whitespace-nowrap"
                >
                  <i className="ri-close-fill mr-1"></i>
                  Mark Incorrect
                </button>
                
                {answer.isCorrect && !answer.isPrizeSent && (
                  <button
                    onClick={() => sendPrize(answer.id)}
                    className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm whitespace-nowrap"
                  >
                    <i className="ri-gift-fill mr-1"></i>
                    Send Prize
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredAnswers.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-file-list-fill text-gray-400 text-2xl"></i>
          </div>
          <p className="text-gray-500">No answers submitted yet</p>
        </div>
      )}
    </div>
  );
}