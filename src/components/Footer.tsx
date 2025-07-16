import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Player } from '@lottiefiles/react-lottie-player';
import brainAnimation from '../assets/lottie/brain.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Github, href: '#', name: 'GitHub' }
  ];
  const [showMore, setShowMore] = useState(false);

  return (
    <footer className="relative bg-black-oak-900 text-white overflow-hidden">
      {/* Animated Aurora/Wave */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="aurora-animation" />
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center py-16">
        <img 
          src="/lovable-uploads/d55373d2-0084-45e1-afb3-f51828ac2254.png" 
          alt="Black Oak AI" 
          className="h-28 w-auto mb-4"
        />
        <p className="text-gray-300 mb-4 leading-relaxed text-lg max-w-xl font-bold italic">
          &quot;Empowering your business with AI-driven automation.&quot;
        </p>
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-center space-x-3">
            <Mail className="w-4 h-4 text-black-oak-copper-500" />
            <span className="text-gray-300">blackoakai@gmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <Phone className="w-4 h-4 text-black-oak-copper-500" />
            <span className="text-gray-300">+1 (804) 986-6966</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <MapPin className="w-4 h-4 text-black-oak-copper-500" />
            <span className="text-gray-300">Richmond, VA</span>
          </div>
        </div>
        <button
          className="mt-4 px-6 py-2 bg-black-oak-copper-500 rounded-lg text-white font-semibold z-10"
          onClick={() => setShowMore(v => !v)}
        >
          More
        </button>
        {showMore && (
          <div className="mt-4 bg-black-oak-800/80 rounded-lg p-4 shadow-lg">
            <p className="mb-2 font-semibold">More Links</p>
            <ul className="space-y-2">
              <li><a href="#about" className="text-black-oak-copper-500 hover:underline">About Us</a></li>
              <li><a href="#services" className="text-black-oak-copper-500 hover:underline">Our Services</a></li>
              <li><a href="#contact" className="text-black-oak-copper-500 hover:underline">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
      <div className="border-t border-black-oak-700 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Black Oak AI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-black-oak-copper-500 transition-colors duration-200"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Aurora/Wave Animation CSS */}
      <style>{`
        .aurora-animation {
          position: absolute;
          width: 100vw;
          height: 100%;
          background: linear-gradient(120deg, #fffbe6 0%, #f5e9da 100%);
          opacity: 0.18;
          animation: auroraMove 8s ease-in-out infinite alternate;
          filter: blur(60px);
        }
        @keyframes auroraMove {
          0% { transform: translateY(0) scaleX(1); }
          100% { transform: translateY(-30px) scaleX(1.2); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
