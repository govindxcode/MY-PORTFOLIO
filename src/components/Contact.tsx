import { Mail, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin, Instagram } from './icons';
import { portfolioData, isPlaceholder } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { ResumeButton } from './ResumeButton';

export function Contact() {
  const { email, github, linkedin, instagram } = portfolioData.personal;
  const hasEmail = !isPlaceholder(email);

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <Reveal>
          <SectionHeading number="05" title="Get In Touch" />

          <h3 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 mt-8">
            Let's build something together
          </h3>

          <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
            Whether you have a question, a project opportunity, or just want to say hi, I’d be happy to connect.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            {hasEmail ? (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full border border-red-300/50 bg-gradient-to-r from-red-600 to-red-400 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_22px_rgba(255,35,55,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(255,35,55,0.4)] w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base"
              >
                <Mail className="w-5 h-5" />
                Say Hello
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-8 py-4 bg-bg-surface border border-border-subtle text-text-muted rounded-md font-medium text-lg w-full sm:w-auto justify-center cursor-not-allowed">
                <Mail className="w-5 h-5" />
                Email Not Configured
              </span>
            )}
            <ResumeButton variant="secondary" className="w-full sm:w-auto py-4 text-lg" />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {!isPlaceholder(github) && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-text-secondary hover:text-accent-500 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base rounded-md px-2 py-1"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-1 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            )}
            {!isPlaceholder(linkedin) && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-text-secondary hover:text-accent-500 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base rounded-md px-2 py-1"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-1 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            )}
            {!isPlaceholder(instagram) && (
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-text-secondary hover:text-accent-500 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-base rounded-md px-2 py-1"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-1 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
