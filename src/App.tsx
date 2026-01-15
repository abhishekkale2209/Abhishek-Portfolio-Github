import { useState } from 'react';
import TerminalIntro from './components/TerminalIntro';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Vision from './sections/Vision';
import Contact from './sections/Contact';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <TerminalIntro onComplete={() => setShowIntro(false)} />}
      
      <div className={`transition-opacity duration-500 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Vision />
          <Contact />
        </main>
      </div>
    </>
  );
}
