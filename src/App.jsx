import { ReactLenis } from 'lenis/react';
import { Download } from 'lucide-react';
import Header from './components/Header';
import HeroScene from './components/HeroScene';
import Experience from './components/Experience';
import SkillsBento from './components/SkillsBento';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2 }}>
      <main className="relative min-h-screen bg-background-base flex flex-col overflow-x-hidden">
        
        <Header />
        
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <HeroScene />
          
          <div className="relative z-10 text-center pointer-events-none mt-[30vh] sm:mt-[40vh] flex flex-col items-center px-4 sm:px-6 w-full">
            <div className="absolute inset-0 bg-background-base/60 blur-3xl -z-10 rounded-full scale-[2] sm:scale-150" />
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,1)]">
              Software Engineer
            </h1>
            
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-200 w-full max-w-[90%] sm:max-w-xl lg:max-w-2xl mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,1)] font-medium">
              Building scalable backend architectures and precision-crafted frontend experiences.
            </p>

            <a 
              href="/cv.pdf" 
              download="Roman_Ali_Sher_CV.pdf"
              className="pointer-events-auto mt-8 flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-black/40 hover:bg-black/60 border border-white/20 hover:border-accent rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </section>

        <div id="experience">
          <Experience />
        </div>

        <div id="skills">
          <SkillsBento />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="contact">
          <Footer />
        </div>
        
      </main>
    </ReactLenis>
  );
}

export default App;