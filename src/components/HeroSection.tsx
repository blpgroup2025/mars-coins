import React from 'react';
import { Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <div id="home" className="relative min-h-screen bg-black flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-orange-500/20" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500 mb-8">
            Welcome to Mars Coins
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            The first cryptocurrency designed for the Mars colonization era
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:opacity-90 transition-all duration-200 transform hover:scale-105">
              <Rocket size={20} />
              <span>Buy Now</span>
            </button>
            <button className="border-2 border-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-500/10 transition-all duration-200 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;