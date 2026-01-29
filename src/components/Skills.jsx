const Skills = () => {
  const skills = [
    {
      name: 'Fast Learning',
      level: 90,
      icon: '⚡',
      color: 'bg-yellow-500',
    },
    {
      name: 'Public Speaking',
      level: 85,
      icon: '🎤',
      color: 'bg-blue-500',
    },
    {
      name: 'Leadership',
      level: 80,
      icon: '👑',
      color: 'bg-purple-500',
    },
  ];

  const technicalSkills = [
    { name: 'Logistics Management', icon: '📊' },
    { name: 'FIFO/FEFO/LIFO', icon: '🔄' },
    { name: 'Inventory Control', icon: '📦' },
    { name: 'Programming Basics', icon: '💻' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'Team Collaboration', icon: '🤝' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Keahlian dan kemampuan yang saya kuasai
          </p>
        </div>

        {/* Soft Skills with Progress Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{skill.icon}</span>
                  <h4 className="text-xl font-bold text-gray-900">{skill.name}</h4>
                </div>
                
                {/* Progress Bar */}
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-gray-600">
                        Proficiency
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-3 mb-4 text-xs flex rounded-full bg-gray-200">
                    <div
                      style={{ width: `${skill.level}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${skill.color} transition-all duration-1000 ease-out`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 border border-blue-100 cursor-pointer group"
              >
                <span className="text-5xl mb-3 group-hover:scale-110 transition duration-300">
                  {skill.icon}
                </span>
                <p className="text-sm font-semibold text-gray-700 text-center group-hover:text-blue-600 transition duration-300">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-blue-100 mb-6">
              Saya selalu terbuka untuk diskusi proyek baru dan peluang kolaborasi
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
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