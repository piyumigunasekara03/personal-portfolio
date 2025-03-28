import React from 'react';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <header id="home" className="min-h-screen flex items-center bg-gradient-to-br from-purple-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-purple-600">Piyumi Gunasekara</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
            Blending aesthetics and functionality to create impactful digital interfaces
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Download Resume <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="relative">
            <img
              src="/profilepic.png"
              alt="Designer workspace"
              className="rounded-lg shadow-2xl w-100 h-100 object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;