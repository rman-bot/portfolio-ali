import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState({});
  const sectionRef = useRef(null);

  const skills = [
    {
      name: 'Fast Learning',
      level: 90,
      icon: '⚡',
      color: 'bg-yellow-500',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      name: 'Public Speaking',
      level: 85,
      icon: '🎤',
      color: 'bg-blue-500',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      name: 'Leadership',
      level: 80,
      icon: '👑',
      color: 'bg-purple-500',
      gradient: 'from-purple-400 to-pink-500',
    },
  ];

  const technicalSkills = [
    { name: 'Logistics Management', icon: '📊', gradient: 'from-blue-400 to-cyan-500' },
    { name: 'FIFO/FEFO/LIFO', icon: '🔄', gradient: 'from-cyan-400 to-blue-500' },
    { name: 'Inventory Control', icon: '📦', gradient: 'from-purple-400 to-pink-500' },
    { name: 'Programming Basics', icon: '💻', gradient: 'from-green-400 to-emerald-500' },
    { name: 'Problem Solving', icon: '🧩', gradient: 'from-orange-400 to-red-500' },
    { name: 'Team Collaboration', icon: '🤝', gradient: 'from-pink-400 to-purple-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels(prev => ({ ...prev, [skill.name]: skill.level }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-white" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-100 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Keahlian dan kemampuan yang saya kuasai
          </p>
        </div>

        {/* Soft Skills with Progress Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-8 text-center">Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`backdrop-blur-sm bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:scale-105 group relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="flex items-center mb-4 relative z-10">
                  <span className="text-4xl mr-4 animate-bounce-slow">{skill.icon}</span>
                  <h4 className={`text-xl font-bold bg-gradient-to-r ${skill.gradient} text-transparent bg-clip-text`}>{skill.name}</h4>
                </div>
                
                {/* Progress Bar */}
                <div className="relative pt-1 z-10">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-gray-600">
                        Proficiency
                      </span>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-semibold inline-block bg-gradient-to-r ${skill.gradient} text-transparent bg-clip-text`}>
                        {animatedLevels[skill.name] || 0}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-gray-200 shadow-inner">
                    <div
                      style={{ width: `${animatedLevels[skill.name] || 0}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${skill.gradient} transition-all duration-1000 ease-out`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-6 backdrop-blur-sm bg-white/80 rounded-xl shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 border border-gray-200 hover:border-transparent cursor-pointer group relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                <span className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300 animate-float relative z-10">
                  {skill.icon}
                </span>
                <p className={`text-sm font-semibold text-center relative z-10 bg-gradient-to-r ${skill.gradient} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative backdrop-blur-sm bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden group">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500"></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 animate-pulse relative z-10 drop-shadow-lg">
              Interested in working together?
            </h3>
            <p className="text-blue-100 mb-6 relative z-10">
              Saya selalu terbuka untuk diskusi proyek baru dan peluang kolaborasi
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 relative z-10"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;