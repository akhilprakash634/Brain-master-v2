
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RecentWinners from '@/components/RecentWinners';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <RecentWinners />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}
