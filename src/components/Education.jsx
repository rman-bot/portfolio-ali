const Education = () => {
  const educations = [
    {
      year: '2023 - Sekarang',
      school: 'STMIK Mercusuar',
      major: 'Teknik Informatika',
      status: 'Sedang Berjalan',
      icon: '🎓',
      color: 'from-blue-500 to-blue-600',
    },
    {
      year: '2014 - 2017',
      school: 'SMK Abdi Karya',
      major: 'Teknik Kendaraan Ringan',
      status: 'Lulus',
      icon: '🚗',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perjalanan pendidikan saya dalam mengembangkan pengetahuan dan keterampilan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${edu.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-5xl mb-2 block">{edu.icon}</span>
                    <p className="text-sm opacity-90">{edu.year}</p>
                  </div>
                  <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full">
                    <p className="text-xs font-semibold">{edu.status}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                  {edu.school}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">{edu.major}</p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{edu.status === 'Lulus' ? '100%' : '70%'}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${edu.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: edu.status === 'Lulus' ? '100%' : '70%' }}
                    ></div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    <span>
                      {edu.status === 'Lulus' ? 'Graduated Successfully' : 'Currently Studying'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;