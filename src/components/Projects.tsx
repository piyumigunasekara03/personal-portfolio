import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Air Travel Assistant app",
      description: "Built a smart air travel assistant for Sri Lankan travelers using Flutter, and Firebase with flight tracking, document upload, and transport assist.",
      image: "/Jetsetgo.png",
      link: "https://github.com/CREW-72/jet-set-go"
    },
    {
      title: "Marketing Website of JetSetGo",
      description: "Designed and developed the marketing website for the smart air travel assistant app using React, TypeScript, and Tailwind CSS. Focused on performance, accessibility, and user experience while ensuring a modern and responsive design. Collaborated via GitHub for verson control and team coordination.",
      image: "/website.png",
      link: "https://jetsetgo-kappa.vercel.app/"
    },
    {
      title: "Company Website of IOT Solutions Pvt Ltd",
      description: "Contributed to designing the company website using Figma, developed the frontend with React and frameworks, integrated UI components, implemented responsive design, and collaborated via GitHub for version control.",
      image: "/iot.png",
      link: "https://www.figma.com/proto/Gj5CGm5XqKseW444OG2Ugf/IOT-Web?page-id=0%3A1&node-id=1-2&viewport=492%2C-39%2C0.25&t=6Qw19Dh2TNmTgGDZ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2"
    },
    {
      title: "Real-Time Ticketing System with Producer Consumer model",
      description: "Developed a Real-Time Event Ticketing System with a producer-consumer model, using React for the frontend, Node.js for the backend, Java for the GUI, and GitHub for version control.",
      image: "/ticketing.jpg",
      link: "https://github.com/piyumigunasekara03/ticketing-system.git"
    },
    {
      title: "Plane Seat Management System",
      description: "Developed a Java-based seat reservation system for a private plane using arrays, implementing booking, cancellation, availability tracking, ticket management with OOP, and file handling for ticket storage.",
      image: "/codinggirl.jpg",
      link: "#"
    },
    {
      title: "University Progression Prediction system",
      description: "Developed a Python model to predict student progression using credit inputs, with validation, looping, graphical histograms, and data storage in lists and a text file.",
      image: "/girl.webp",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills in UI/UX design and frontend development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;