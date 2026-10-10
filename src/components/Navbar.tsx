import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ResumeButton } from './ResumeButton';
import { useActiveSection } from '../hooks/useActiveSection';
import { portfolioData } from '../data/portfolio';

const NAV_LINKS = [
  { name: 'Home', href: '#top', id: 'top' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#journey', id: 'journey' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(['top', 'about', 'skills', 'projects', 'journey', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[70px] border-b border-red-500/20 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-base/90 backdrop-blur-xl'
          : 'bg-bg-base/95'
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center px-5 sm:px-8">
        <nav className="flex w-full items-center justify-between">
          <a
            href="#top"
            className="theme-primary-text flex shrink-0 items-center gap-3 text-xl font-bold tracking-tight text-white transition-colors hover:text-red-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="inline-flex h-9 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-300 text-lg font-black tracking-[-0.12em] text-[#1a0305] shadow-[0_0_20px_rgba(255,40,65,0.35)]">
              GR
            </span>
            <span>{portfolioData.personal.name}</span>
          </a>

          <div className="hidden md:flex items-center">
            <ul className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative py-2 text-[15px] font-semibold transition-colors hover:text-red-300 ${
                      activeSection === (link.id ?? link.name.toLowerCase())
                        ? 'text-red-300 after:absolute after:inset-x-0 after:-bottom-[7px] after:h-[2px] after:bg-red-400 after:shadow-[0_0_12px_#ff3045]'
                        : 'theme-secondary-text text-text-secondary'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-auto flex items-center gap-4">
              <ResumeButton variant="nav" />
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-primary hover:text-red-300 transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[70px] z-40 bg-bg-base transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 text-text-primary">
          <ul className="flex flex-col items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-semibold transition-colors hover:text-red-300 ${
                    activeSection === (link.id ?? link.name.toLowerCase())
                      ? 'text-red-300'
                      : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4" onClick={() => setIsOpen(false)}>
            <ResumeButton variant="primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
