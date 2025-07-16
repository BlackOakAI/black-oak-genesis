
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import DemoSection from '@/components/DemoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <DemoSection id="demo"/> */}
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Demos Coming Soon!</h2>
        <p>Check back later for interactive demonstrations of our technology.</p>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
