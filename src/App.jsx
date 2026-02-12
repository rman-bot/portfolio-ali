import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ali Yusup Ramadhan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App