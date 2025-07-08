
import React from 'react';
import { ArrowRight, Zap, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen gradient-dark flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-oak-900 via-black-oak-800 to-black-oak-700 opacity-90"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-black-oak-copper-500 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-black-oak-copper-600 rounded-full blur-3xl opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/d55373d2-0084-45e1-afb3-f51828ac2254.png" 
              alt="Black Oak AI" 
              className="h-24 w-auto mx-auto mb-6"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Black Oak
            <span className="block text-black-oak-copper-500">AI</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses through intelligent automation. 
            <span className="text-black-oak-copper-500 font-medium"> Premium AI solutions</span> for the modern enterprise.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 text-gray-300">
              <Zap className="w-5 h-5 text-black-oak-copper-500" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Shield className="w-5 h-5 text-black-oak-copper-500" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Target className="w-5 h-5 text-black-oak-copper-500" />
              <span>Precision Automation</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-black-oak-copper-500 hover:bg-black-oak-copper-600 text-white font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-black-oak-copper-500 text-black-oak-copper-500 hover:bg-black-oak-copper-500 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black-oak-copper-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black-oak-copper-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
