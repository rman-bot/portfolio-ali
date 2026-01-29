const Contact = () => {
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
      color: 'from-green-400 to-green-600',
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
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'Jl. Kemangsari 4c no. 1, Jakwarsa Pondok Gede, 17412',
      link: '#',
      color: 'from-red-400 to-red-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk diskusi proyek baru, ide kreatif, atau peluang menjadi bagian dari visi Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-20 transition duration-300 border border-white border-opacity-20 hover:border-opacity-40"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300 mx-auto`}>
                <div className="text-white">{info.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{info.title}</h3>
              <p className="text-gray-300 text-center break-words">{info.value}</p>
            </a>
          ))}
        </div>

        {/* Social Links or Additional Info */}
        <div className="text-center mt-12 pt-8 border-t border-white border-opacity-20">
          <p className="text-gray-300 mb-4">Let's connect and create something amazing together!</p>
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:aliyusupr@gmail.com"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
            >
              Send Email
            </a>
            <a
              href="tel:+6289536004303"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
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