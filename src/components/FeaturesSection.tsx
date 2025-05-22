import React from 'react';
import { Rocket, Shield, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="w-8 h-8 text-pink-500" />,
    title: 'Interplanetary Transactions',
    description: 'Send and receive payments across Earth and Mars with minimal latency',
  },
  {
    icon: <Shield className="w-8 h-8 text-orange-500" />,
    title: 'Quantum Security',
    description: 'Advanced encryption ensuring your assets are safe across the solar system',
  },
  {
    icon: <Zap className="w-8 h-8 text-pink-500" />,
    title: 'Lightning Fast',
    description: 'Process thousands of transactions per second with near-zero fees',
  },
  {
    icon: <Globe className="w-8 h-8 text-orange-500" />,
    title: 'Cross-Planet Compatible',
    description: 'Seamlessly integrate with both Earth and Mars financial systems',
  },
];

const FeaturesSection = () => {
  return (
    <div id="features" className="py-24 bg-black relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-orange-500/10" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            Revolutionary Features
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Experience the future of interplanetary finance
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-pink-500/20 hover:border-orange-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;