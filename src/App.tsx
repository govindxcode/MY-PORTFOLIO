import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  useEffect(() => {
    document.title = 'Govind Rana | Portfolio';
  }, []);

  return (
    <div className="portfolio-app min-h-screen overflow-hidden bg-bg-base text-text-primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent-600 focus:text-white focus:rounded-md"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content" className="flex-grow pt-[70px]">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ThemeToggle />
    </div>
  );
}

export default App;
