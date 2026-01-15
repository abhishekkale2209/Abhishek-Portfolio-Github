import { useState } from 'react';
import TerminalIntro from './components/TerminalIntro';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Vision from './sections/Vision';
import Contact from './sections/Contact';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <TerminalIntro onComplete={() => setShowIntro(false)} />}
      
      <div className={showIntro ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Vision />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
