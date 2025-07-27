
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth } from '../../src/firebase'; // Adjust the import path as necessary
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function LoginPage() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const router = useRouter();

  const handleSendOTP = async () => {
    if (phoneNumber.length < 10) return;
    setIsLoading(true);
    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
    }, 1500);
  };

  const handleVerifyOTP = async () => {
    if (otp.length < 6) return;
    setIsLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to dashboard
      router.push('/dashboard');
    }, 1500);
  };

  const handleGoogleLogin = async () => {
  setIsGoogleLoading(true);
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const token = await user.getIdToken();

    // ✅ Call FastAPI backend to register/login user
    const res = await fetch("http://localhost:8000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        uid: user.uid,
        name: user.displayName,
        phone: user.phoneNumber || ""
      })
    });

    const data = await res.json();
    console.log("Login successful:", data);
    router.push("/dashboard");

  } catch (error) {
    console.error("Google login error:", error);
    alert("Google login failed");
  } finally {
    setIsGoogleLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-movie-2-fill text-purple-600 text-2xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back!</h1>
          <p className="text-purple-100">Login to continue playing</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          {step === 'phone' ? (
            <div className="space-y-6">
              {/* Google Login Button */}
              <button
                onClick={handleGoogleLogin}
                disabled={isGoogleLoading}
                className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isGoogleLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  <>
                    <i className="ri-google-fill text-red-500 text-xl"></i>
                    Continue with Google
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <span className="text-gray-500 text-sm">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="Enter your phone number"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    maxLength={10}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">We'll send you a verification code</p>
              </div>

              <button
                onClick={handleSendOTP}
                disabled={phoneNumber.length < 10 || isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all whitespace-nowrap"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending OTP...
                  </div>
                ) : (
                  'Get OTP'
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Enter OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter 6-digit OTP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm text-center tracking-widest"
                  maxLength={6}
                />
                <p className="text-xs text-gray-500 mt-1">
                  OTP sent to +91 {phoneNumber}
                </p>
              </div>

              <button
                onClick={handleVerifyOTP}
                disabled={otp.length < 6 || isLoading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all whitespace-nowrap"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Verifying...
                  </div>
                ) : (
                  'Continue to Dashboard'
                )}
              </button>

              <button
                onClick={() => setStep('phone')}
                className="w-full text-purple-600 text-sm font-medium hover:text-purple-800 transition-colors"
              >
                ← Change Phone Number
              </button>
            </div>
          )}

          {/* Skip Login */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <Link href="/dashboard">
              <button className="w-full text-gray-600 text-sm font-medium py-2 hover:text-gray-800 transition-colors whitespace-nowrap">
                Skip Login (Continue as Guest)
              </button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-purple-100 text-xs">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="underline">
              Terms & Conditions
            </Link>
            {' '}and{' '}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
