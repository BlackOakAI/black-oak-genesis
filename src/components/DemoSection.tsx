
import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Monitor, Smartphone, Tablet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demos = [
    {
      title: "Intelligent Process Automation",
      description: "Watch our AI streamline complex business workflows in real-time, reducing manual effort by up to 80%.",
      category: "Process Automation",
      duration: "2:30"
    },
    {
      title: "Advanced Data Analytics",
      description: "See how our AI transforms raw business data into actionable insights and predictive analytics.",
      category: "Data Intelligence",
      duration: "3:15"
    },
    {
      title: "Conversational AI Assistant",
      description: "Experience our natural language processing capabilities through interactive customer service scenarios.",
      category: "AI Assistant",
      duration: "1:45"
    }
  ];

  const devices = [
    { icon: Monitor, name: "Desktop", active: true },
    { icon: Tablet, name: "Tablet", active: false },
    { icon: Smartphone, name: "Mobile", active: false }
  ];

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black-oak-900 mb-6">
            Experience Our Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See Black Oak AI in action through interactive demonstrations of our core automation capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Demo Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-black-oak-900 mb-6">Featured Demos</h3>
            <div className="space-y-4">
              {demos.map((demo, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeDemo === index 
                      ? 'bg-black-oak-copper-500 text-white shadow-lg' 
                      : 'bg-white hover:bg-gray-100 border border-gray-200'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{demo.title}</h4>
                    <span className={`text-sm px-2 py-1 rounded ${
                      activeDemo === index ? 'bg-white/20' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {demo.duration}
                    </span>
                  </div>
                  <p className={`text-sm mb-3 ${
                    activeDemo === index ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {demo.description}
                  </p>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    activeDemo === index 
                      ? 'bg-white/20 text-white' 
                      : 'bg-black-oak-copper-100 text-black-oak-copper-700'
                  }`}>
                    {demo.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Demo Player */}
          <div className="lg:col-span-2">
            <div className="bg-black-oak-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Player Header */}
              <div className="bg-black-oak-800 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-white font-medium">{demos[activeDemo].title}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {devices.map((device, index) => (
                    <button 
                      key={index}
                      className={`p-2 rounded ${
                        device.active ? 'bg-black-oak-copper-500 text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <device.icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Demo Content */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-black-oak-700 to-black-oak-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-black-oak-copper-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Play className="w-12 h-12 text-black-oak-copper-500" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-2">{demos[activeDemo].title}</h4>
                    <p className="text-gray-300 mb-6 max-w-md">{demos[activeDemo].description}</p>
                    <p className="text-sm text-gray-400">Demo content will be embedded here</p>
                  </div>
                </div>

                {/* Player Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black-oak-900 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/10"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/10"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </Button>
                      <span className="text-white text-sm">0:00 / {demos[activeDemo].duration}</span>
                    </div>
                    <Button 
                      size="sm"
                      className="bg-black-oak-copper-500 hover:bg-black-oak-copper-600 text-white"
                    >
                      Request Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo CTA */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
          <h3 className="text-3xl font-playfair font-semibold text-black-oak-900 mb-4">
            Want to See More?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demonstration tailored to your specific business needs and use cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-black-oak-copper-500 hover:bg-black-oak-copper-600 text-white font-semibold px-8 py-4"
            >
              Book Live Demo
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-black-oak-copper-500 text-black-oak-copper-500 hover:bg-black-oak-copper-500 hover:text-white font-semibold px-8 py-4"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
