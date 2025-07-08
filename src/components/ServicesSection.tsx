
import React from 'react';
import { Zap, Database, MessageSquare, BarChart3, Shield, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline your business operations with intelligent workflow automation that adapts to your unique requirements.",
      features: ["Custom Workflow Design", "Real-time Monitoring", "Scalable Solutions"]
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with our advanced analytics and machine learning capabilities.",
      features: ["Predictive Analytics", "Data Visualization", "Real-time Reporting"]
    },
    {
      icon: MessageSquare,
      title: "Conversational AI",
      description: "Deploy sophisticated chatbots and virtual assistants that understand context and deliver human-like interactions.",
      features: ["Natural Language Processing", "Multi-platform Integration", "24/7 Availability"]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Make informed decisions with comprehensive business intelligence solutions powered by AI-driven insights.",
      features: ["Executive Dashboards", "Performance Metrics", "Trend Analysis"]
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Protect your digital assets with AI-powered security solutions that learn and adapt to emerging threats.",
      features: ["Threat Detection", "Automated Response", "Compliance Monitoring"]
    },
    {
      icon: Cpu,
      title: "Custom AI Solutions",
      description: "Bespoke artificial intelligence solutions tailored to your specific industry needs and business objectives.",
      features: ["Industry Expertise", "Scalable Architecture", "Ongoing Support"]
    }
  ];

  return (
    <section id="services" className="py-20 gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI automation solutions designed to elevate your business operations 
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black-oak-800/50 backdrop-blur-sm border border-black-oak-copper-500/20 rounded-xl p-8 hover:bg-black-oak-800/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-copper rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-black-oak-copper-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline"
                className="w-full border-black-oak-copper-500 text-black-oak-copper-500 hover:bg-black-oak-copper-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-black-oak-800/30 rounded-2xl p-12 border border-black-oak-copper-500/20">
          <h3 className="text-3xl font-playfair font-semibold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI automation solutions can drive efficiency and growth for your organization.
          </p>
          <Button 
            size="lg"
            className="bg-black-oak-copper-500 hover:bg-black-oak-copper-600 text-white font-semibold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
