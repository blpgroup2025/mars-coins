import React from 'react';
import { Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <div id="home" className="relative min-h-screen bg-black flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Welcome to Mars Coins
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            The first cryptocurrency designed for the Mars colonization era
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:opacity-90 transition-opacity">
              <Rocket size={20} />
              <span>Buy Now</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;