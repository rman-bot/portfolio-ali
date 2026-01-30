import { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  const experiences = [
    {
      year: '2023',
      period: 'Jan - April',
      title: 'Petugas Pemasangan Rel Kereta',
      company: 'PT. SinoHydro',
      description: 'Memasarkan rel untuk kereta dengan ukuran yang presisi.',
      icon: '🚂',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      year: '2021 - 2022',
      period: 'Full Year',
      title: 'Satria Anteraja',
      company: 'PT. Tri Adi Bersama',
      description: 'Mengirim dan mengantarkan pesanan barang pelanggan, juga mengambil barang yang dijual penjual barang dari e-commerce.',
      icon: '📦',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      year: '2020',
      period: 'End of Year',
      title: 'Banquet',
      company: 'Event Services',
      description: 'Membersihkan ruangan dan menta ruangan untuk di gunakan berbagai kegiatan.',
      icon: '🎪',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      year: '2020',
      period: 'Early Year',
      title: 'Sales MNC Play Media',
      company: 'MNC Play Media',
      description: 'Memasarkan produk ke pelanggan.',
      icon: '📺',
      gradient: 'from-pink-500 to-red-500',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('.experience-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-white" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-100 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-transparent bg-clip-text mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pengalaman profesional saya di berbagai bidang industri
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line with gradient */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-cyan-400 to-purple-300"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                data-index={index}
                className={`experience-item relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-700 ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                {/* Timeline Dot with gradient */}
                <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${exp.gradient} rounded-full border-4 border-white shadow-xl items-center justify-center z-10 hover:scale-125 transition-transform duration-300 glow-effect`}>
                  <span className="text-xl">{exp.icon}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="backdrop-blur-sm bg-white/80 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:scale-105 hover:border-cyan-300 group relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} relative z-10`}>
                      <span className="text-4xl animate-bounce-slow">{exp.icon}</span>
                      <div>
                        <span className={`inline-block bg-gradient-to-r ${exp.gradient} text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md`}>
                          {exp.year}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{exp.period}</p>
                      </div>
                    </div>
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${exp.gradient} text-transparent bg-clip-text mb-2 relative z-10`}>{exp.title}</h3>
                    <p className="text-blue-600 font-semibold mb-3 relative z-10">{exp.company}</p>
                    <p className="text-gray-600 leading-relaxed relative z-10">{exp.description}</p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;