
import React from 'react';
import { Brain, Cog, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Leveraging cutting-edge machine learning algorithms to deliver unprecedented automation capabilities."
    },
    {
      icon: Cog,
      title: "Seamless Integration",
      description: "Effortlessly integrate with your existing systems and workflows without disruption."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of AI specialists and automation experts bring decades of combined experience."
    },
    {
      icon: Award,
      title: "Enterprise Grade",
      description: "Built for scale with enterprise-level security, reliability, and performance standards."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black-oak-900 mb-6">
            About Black Oak AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded on the principles of innovation and excellence, Black Oak AI represents the perfect fusion of 
            sophisticated technology and timeless business values.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-playfair font-semibold text-black-oak-900 mb-6">
              Redefining Automation for the Modern Era
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Black Oak AI, we believe that artificial intelligence should enhance human potential, not replace it. 
              Our sophisticated automation solutions are crafted with the same attention to detail and quality that 
              defines luxury craftsmanship.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We serve discerning enterprises who demand nothing less than excellence. Our bespoke AI solutions 
              are designed to integrate seamlessly into your operations, delivering measurable results while 
              maintaining the highest standards of security and reliability.
            </p>
            <div className="flex items-center space-x-4 text-black-oak-copper-500 font-semibold">
              <span className="text-3xl font-playfair">Est. 2024</span>
              <div className="w-px h-8 bg-black-oak-copper-500"></div>
              <span>Trusted by Industry Leaders</span>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-gradient-to-br from-black-oak-800 to-black-oak-900 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <Brain className="w-16 h-16 mx-auto mb-4 text-black-oak-copper-500" />
              <p className="text-lg font-medium">AI Innovation Hub</p>
              <p className="text-sm text-gray-300 mt-2">Where Technology Meets Excellence</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black-oak-copper-500 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-black-oak-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
