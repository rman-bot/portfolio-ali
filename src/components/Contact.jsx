import { useState, useEffect, useRef } from 'react';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+62 89536004303',
      link: 'tel:+6289536004303',
      color: 'from-green-400 to-emerald-600',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'aliyusupr@gmail.com',
      link: 'mailto:aliyusupr@gmail.com',
      color: 'from-blue-400 to-cyan-600',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'Jl. Kemangsari 4c no. 1, Jatiwaringin Pondok Gede, 17412',
      link: '#',
      color: 'from-red-400 to-pink-600',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden animated-gradient text-white" ref={sectionRef}>
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
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text drop-shadow-lg">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-200 max-w-2xl mx-auto backdrop-blur-sm bg-white/5 p-4 rounded-lg drop-shadow-md">
            Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk diskusi proyek baru, ide kreatif, atau peluang menjadi bagian dari visi Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className={`group bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-500 border border-white/20 hover:border-white/40 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} glow-effect`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto animate-float shadow-lg`}>
                <div className="text-white drop-shadow-lg">{info.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center group-hover:text-cyan-300 transition-colors drop-shadow-md">{info.title}</h3>
              <p className="text-gray-200 text-center break-words group-hover:text-white transition-colors">{info.value}</p>
            </a>
          ))}
        </div>

        {/* Social Links or Additional Info */}
        <div className={`text-center mt-12 pt-8 border-t border-white/20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-200 mb-4 animate-pulse drop-shadow-md backdrop-blur-sm bg-white/5 p-3 rounded-lg inline-block">Let's connect and create something amazing together! ✨</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a
              href="mailto:aliyusupr@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 inline-block glow-effect"
            >
              Send Email
            </a>
            <a
              href="tel:+6289536004303"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 inline-block glow-effect"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;