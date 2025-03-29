import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo & Branding (Aligned Left) */}
          <div className="flex items-center space-x-3 mb-8 md:mb-0">
            <img src="/icon.png" alt="Logo" className="h-12 w-12 rounded-full" />
            <div>
              <span className="text-2xl font-bold text-purple-400">Portfolio</span>
              <p className="mt-1 text-gray-400">
                Designing and developing beautiful experiences
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://github.com/piyumigunasekara03" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/piyumi-gunasekara-613123293/" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/piyumiii_g/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
