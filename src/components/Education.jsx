import { useState, useEffect, useRef } from 'react';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educations = [
    {
      year: '2023 - Sekarang',
      school: 'STMIK Mercusuar',
      major: 'Teknik Informatika',
      status: 'Sedang Berjalan',
      icon: '🎓',
      gradient: 'from-blue-500 to-cyan-600',
      borderGradient: 'from-blue-400 to-cyan-500',
    },
    {
      year: '2014 - 2017',
      school: 'SMK Abdi Karya',
      major: 'Teknik Kendaraan Ringan',
      status: 'Lulus',
      icon: '🚗',
      gradient: 'from-green-500 to-emerald-600',
      borderGradient: 'from-green-400 to-emerald-500',
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden animated-gradient-light" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-200 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perjalanan pendidikan saya dalam mengembangkan pengetahuan dan keterampilan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm bg-white/80 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105 border-2 border-transparent hover:border-opacity-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1`,
                borderImageSlice: 1,
              }}
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${edu.gradient} p-6 text-white relative overflow-hidden`}>
                {/* Animated background circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white opacity-5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <span className="text-5xl mb-2 block animate-bounce-slow drop-shadow-lg">{edu.icon}</span>
                    <p className="text-sm opacity-90 font-medium">{edu.year}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all border border-white/30">
                    <p className="text-xs font-semibold">{edu.status}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3 className={`text-2xl font-bold mb-2 group-hover:scale-105 transition-transform bg-gradient-to-r ${edu.gradient} text-transparent bg-clip-text`}>
                  {edu.school}
                </h3>
                <p className={`font-semibold mb-4 bg-gradient-to-r ${edu.borderGradient} text-transparent bg-clip-text`}>{edu.major}</p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span className="font-medium">Progress</span>
                    <span className="font-semibold bg-gradient-to-r ${edu.gradient} text-transparent bg-clip-text">{edu.status === 'Lulus' ? '100%' : '70%'}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                    <div
                      className={`bg-gradient-to-r ${edu.gradient} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg ${isVisible ? 'w-full' : 'w-0'}`}
                      style={{ 
                        width: isVisible ? (edu.status === 'Lulus' ? '100%' : '70%') : '0%',
                        transitionDelay: `${(index * 200) + 300}ms`
                      }}
                    ></div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span className="font-medium">
                      {edu.status === 'Lulus' ? 'Graduated Successfully' : 'Currently Studying'}
                    </span>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${edu.gradient} opacity-10 rounded-bl-full`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;