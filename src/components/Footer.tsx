import { portfolioData, isPlaceholder } from '../data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();
  const { name, github, linkedin, instagram } = portfolioData.personal;

  return (
    <footer className="py-8 border-t border-border-subtle mt-auto">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm text-center md:text-left">
          &copy; {year} {isPlaceholder(name) ? 'Your Name' : name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm text-text-muted">
          {!isPlaceholder(github) && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors">
              GitHub
            </a>
          )}
          {!isPlaceholder(linkedin) && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors">
              LinkedIn
            </a>
          )}
          {!isPlaceholder(instagram) && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors">
              Instagram
            </a>
          )}
        </div>

        <p className="text-text-muted text-sm text-center md:text-right">
          Built with React, Vite, and Tailwind
        </p>
      </div>
    </footer>
  );
}
