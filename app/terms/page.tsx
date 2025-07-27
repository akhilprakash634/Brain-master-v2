
'use client';

import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-6">
            <Link href="/" className="text-purple-600 hover:text-purple-800 flex items-center">
              <div className="w-6 h-6 flex items-center justify-center mr-2">
                <i className="ri-arrow-left-line text-xl"></i>
              </div>
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
              <p className="text-gray-600">Last updated: December 2024</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to QuizMaster! These Terms of Service govern your use of our mobile quiz application and website. By accessing or using our service, you agree to be bound by these terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our quiz platform allows users to participate in interactive quizzes, compete for prizes, and engage with our community. Please read these terms carefully before using our service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Accounts</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To participate in quizzes and competitions, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>You must provide accurate and complete information when creating your account</li>
                  <li>You must be at least 18 years old to participate in prize competitions</li>
                  <li>One account per person is allowed</li>
                  <li>You are responsible for keeping your login credentials secure</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Quiz Participation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our platform offers various types of quizzes with different prize structures. By participating, you agree to abide by the rules and regulations of each quiz.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Answer submissions are final and cannot be changed after submission</li>
                  <li>Each user can submit only one answer per quiz</li>
                  <li>Cheating, fraud, or manipulation of results is strictly prohibited</li>
                  <li>Prize distribution is at the sole discretion of QuizMaster</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Prizes and Rewards</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prizes are awarded based on quiz performance and are subject to verification. We reserve the right to modify prize structures and eligibility requirements.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Prizes are non-transferable and have no cash value unless specified</li>
                  <li>Tax obligations are the responsibility of the winner</li>
                  <li>Minimum withdrawal amounts may apply</li>
                  <li>Prize distribution may take 5-7 business days</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Conduct</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to use our service responsibly and in accordance with all applicable laws and regulations. Prohibited activities include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Using automated systems or bots to participate in quizzes</li>
                  <li>Sharing or selling account credentials</li>
                  <li>Attempting to hack or exploit our systems</li>
                  <li>Harassing other users or our staff</li>
                  <li>Submitting false or misleading information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content, including quiz questions, images, and software, is owned by QuizMaster or our licensors. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  QuizMaster shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our service. Our total liability shall not exceed the amount paid by you, if any, for using our service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may terminate or suspend your account at any time for violation of these terms. Upon termination, your access to our service will cease immediately.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective upon posting on our website. Your continued use of our service constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> support@quizmaster.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 98765 43210</p>
                  <p className="text-gray-700"><strong>Address:</strong> 123 Tech Park, Bangalore, Karnataka 560001</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
