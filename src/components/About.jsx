import { useState, useEffect, useRef } from 'react';

const About = () => {
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden animated-gradient-light" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-4">
              Logistics Professional & IT Student
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed backdrop-blur-sm bg-white/50 p-4 rounded-lg">
              Saya memiliki pengalaman di salah satu perusahaan logistik di PT. Tri Adi Bersama
              Memahami FIFO, FEFO, Dan LIFO. Untuk saat ini saya masih menempuh studi di salah satu
              perguruan tinggi dan memiliki jurusan teknik informatika.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: 'Logistics Expertise',
                  desc: 'Berpengalaman dalam FIFO, FEFO, dan LIFO management',
                  icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                  delay: '300',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Continuous Learning',
                  desc: 'Sedang menempuh studi Teknik Informatika',
                  icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
                  delay: '400',
                  gradient: 'from-cyan-500 to-blue-500'
                },
                {
                  title: 'Fast Learner',
                  desc: 'Cepat beradaptasi dengan teknologi dan sistem baru',
                  icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                  delay: '500',
                  gradient: 'from-blue-500 to-purple-500'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start transition-all duration-700 delay-${item.delay} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} hover:translate-x-2 backdrop-blur-sm bg-white/60 p-4 rounded-lg`}
                >
                  <div className="flex-shrink-0">
                    <div className={`flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br ${item.gradient} text-white hover:scale-110 transform transition-all duration-300 shadow-lg`}>
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image/Icon */}
          <div className={`flex justify-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-float glow-effect backdrop-blur-sm">
              <svg
                className="w-64 h-64 text-white drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;