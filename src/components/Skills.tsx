import React from 'react';

const SkillCircle = ({ skill, percentage, logo }: { skill: string; percentage: number; logo: string }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90">
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="48"
            cy="48"
          />
          <circle
            className="text-purple-600"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="48"
            cy="48"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={logo} alt={skill} className="w-8 h-8" />
        </div>
      </div>
      <span className="mt-2 font-medium text-gray-700">{skill}</span>
    </div>
  );
};

const SkillSection = ({ title, skills }: { title: string; skills: Array<{ name: string; percentage: number; logo: string }> }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6 text-gray-800">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <SkillCircle
            key={skill.name}
            skill={skill.name}
            percentage={skill.percentage}
            logo={skill.logo}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const programmingLanguages = [
    { name: "Python", percentage: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", percentage: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "React", percentage: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node", percentage: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "JavaScript", percentage: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  ];

  const markupLanguages = [
    { name: "HTML", percentage: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", percentage: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  ];

  const frameworks = [
    { name: "ReactJS", percentage: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Flutter", percentage: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Figma", percentage: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  const ides = [
    { name: "IntelliJ IDEA", percentage: 72, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
    { name: "VS Code", percentage: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Android Studio", percentage: 78, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>

        </div>

        <div className="space-y-12">
          <SkillSection title="Programming Languages" skills={programmingLanguages} />
          <SkillSection title="Markup Languages" skills={markupLanguages} />
          <SkillSection title="Libraries, Frameworks and Tools" skills={frameworks} />
          <SkillSection title="Integrated Development Environments" skills={ides} />
        </div>
      </div>
    </section>
  );
};

export default Skills;