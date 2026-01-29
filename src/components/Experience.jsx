const Experience = () => {
  const experiences = [
    {
      year: '2023',
      period: 'Jan - April',
      title: 'Petugas Pemasangan Rel Kereta',
      company: 'PT. Tri Adi Bersama',
      description: 'Memasarkan rel untuk kereta dengan ukuran yang presisi.',
      icon: '🚂',
    },
    {
      year: '2021 - 2022',
      period: 'Full Year',
      title: 'Satria Anteraja',
      company: 'PT. Tri Adi Bersama',
      description: 'Mengirim dan mengantarkan pesanan barang pelanggan, juga mengambil barang yang dijual penjual barang dari e-commerce.',
      icon: '📦',
    },
    {
      year: '2020',
      period: 'End of Year',
      title: 'Banquet',
      company: 'Event Services',
      description: 'Membersihkan ruangan dan menta ruangan untuk di gunakan berbagai kegiatan.',
      icon: '🎪',
    },
    {
      year: '2020',
      period: 'Early Year',
      title: 'Sales MNC Play Media',
      company: 'MNC Play Media',
      description: 'Memasarkan produk ke pelanggan.',
      icon: '📺',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pengalaman profesional saya di berbagai bidang industri
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg items-center justify-center z-10">
                  <span className="text-xs text-white font-bold">{index + 1}</span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-blue-100">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="text-4xl">{exp.icon}</span>
                      <div>
                        <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                          {exp.year}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{exp.period}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{exp.company}</p>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
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