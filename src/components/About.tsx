import React from 'react';
import { Code, Palette, Monitor } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          I'm a passionate Software Engineering undergraduate with a strong foundation in full-stack development, problem-solving, and leadership.
           Dedicated to leveraging technology for impactful solutions and continuous innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-purple-50 rounded-lg">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Palette className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600">Creating intuitive and engaging user experiences through thoughtful design</p>
          </div>

          <div className="p-6 bg-purple-50 rounded-lg">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-gray-600">Building responsive and performant web applications with modern technologies</p>
          </div>

          <div className="p-6 bg-purple-50 rounded-lg">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Monitor className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p className="text-gray-600">Designing beautiful and functional websites that meet business objectives</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;