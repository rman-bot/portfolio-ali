import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl">
                <img
                  src={profile}
                  alt="Ali Yusup Ramadhan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-blue-400">Ali Yusup Ramadhan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Teknik Informatika Student & Logistics Professional
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              Saya memiliki pengalaman di salah satu perusahaan logistik di PT. Tri Adi Bersama
              Memahami FIFO, FEFO, dan LIFO. Untuk saat ini saya masih menempuh studi di salah satu
              perguruan tinggi dan memiliki jurusan teknik informatika.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Me
              </a>
              <a
                href="#experience"
                className="bg-transparent border-2 border-blue-400 hover:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
