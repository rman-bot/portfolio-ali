import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Ali Yusup Ramadhan';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden animated-gradient">
      {/* Animated blur circles */}
      <div className="blur-circles">
        <div className="blur-circle blur-circle-1"></div>
        <div className="blur-circle blur-circle-2"></div>
        <div className="blur-circle blur-circle-3"></div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(10)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image with floating animation */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative animate-float">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl hover:shadow-blue-500/50 transition-shadow duration-300 hover:scale-105 transform transition-transform glow-effect">
                <img
                  src={profile}
                  alt="Ali Yusup Ramadhan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-bounce-slow glow-effect">
                <span className="text-3xl">👨‍💻</span>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400/30 rounded-full animate-ping"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -top-8 -right-8 w-12 h-12 bg-cyan-400/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Text Content with animations */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="block text-white animate-slide-down mb-2 drop-shadow-lg">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text inline-block">
                {text}
                <span className="animate-blink text-white">|</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 animate-fade-in-up drop-shadow-md" style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}>
              Teknik Informatika Student & Logistics Professional
            </p>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl animate-fade-in-up backdrop-blur-sm bg-white/5 p-4 rounded-lg" style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}>
              Saya memiliki pengalaman di salah satu perusahaan logistik di PT. Tri Adi Bersama
              Memahami FIFO, FEFO, dan LIFO. Untuk saat ini saya masih menempuh studi di salah satu
              perguruan tinggi dan memiliki jurusan teknik informatika.
            </p>
            
            {/* CTA Buttons with staggered animation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 animate-fade-in-up glow-effect"
                style={{ animationDelay: '1s', animationFillMode: 'backwards' }}
              >
                Contact Me
              </a>
              <a
                href="#experience"
                className="bg-white/10 backdrop-blur-sm border-2 border-blue-400 hover:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: '1.2s', animationFillMode: 'backwards' }}
              >
                View Work
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 animate-bounce">
              <a href="#about" className="inline-block">
                <svg className="w-6 h-6 text-blue-400 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;