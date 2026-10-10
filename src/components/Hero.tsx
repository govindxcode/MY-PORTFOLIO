import { useEffect, useState } from 'react';
import { ArrowRight, Code2, Mail } from 'lucide-react';
import { Github, Instagram, Linkedin } from './icons';
import { portfolioData, isPlaceholder } from '../data/portfolio';
import { Reveal } from './Reveal';
import { AnimatedCodeScreen } from './AnimatedCodeScreen';
import heroScene from '../assets/anime2.jpg';

const TYPING_STEPS = ['G', 'Go', 'Gov', 'Govi', 'Govin', 'Govind', 'Govind ', 'Govind R', 'Govind Ra', 'Govind Ran', 'Govind Rana'];

export function Hero() {
  const { name, headline, email, github, linkedin, instagram } = portfolioData.personal;
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [typedName, setTypedName] = useState(() => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? name : ''
  ));

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let step = 0;
    const interval = window.setInterval(() => {
      step += 1;
      setTypedName(TYPING_STEPS[Math.min(step, TYPING_STEPS.length - 1)]);
      if (step >= TYPING_STEPS.length - 1) window.clearInterval(interval);
    }, 130);

    return () => window.clearInterval(interval);
  }, [name]);

  return (
    <section
      id="top"
      className="relative isolate min-h-[490px] overflow-hidden bg-[#020204] lg:h-[520px]"
      onPointerMove={(event) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
          y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
        });
      }}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[75%] lg:w-[66%]">
        <img
          src={heroScene}
          alt="Developer working at a neon-lit desk surrounded by code and technology"
          className="hero-scene absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="anime-keyboard-activity absolute bottom-[17%] left-[24%] h-[9%] w-[27%]" aria-hidden="true">
          {[
            { left: '16%', top: '54%', delay: '0s' },
            { left: '27%', top: '36%', delay: '0.17s' },
            { left: '38%', top: '57%', delay: '0.34s' },
            { left: '49%', top: '35%', delay: '0.51s' },
            { left: '60%', top: '54%', delay: '0.68s' },
            { left: '71%', top: '34%', delay: '0.85s' },
            { left: '82%', top: '53%', delay: '1.02s' },
          ].map(({ left, top, delay }) => (
            <span
              key={left}
              className="anime-keypress"
              style={{ left, top, animationDelay: delay }}
            />
          ))}
        </div>
        <div className="hero-image-overlay absolute inset-0 bg-gradient-to-r from-[#020204] via-[#020204]/20 to-transparent" />
        <div className="hero-image-shade absolute inset-0 bg-gradient-to-t from-[#020204]/30 via-transparent to-[#020204]/15" />
        <div
          className="framework-stage absolute inset-0 hidden lg:block"
          style={{ transform: `translate3d(${pointer.x * 7}px, ${pointer.y * 5}px, 0)` }}
          aria-hidden="true"
        >
          {[
            { name: 'React', mark: 'R', detail: 'UI library' },
            { name: 'C++', mark: 'C++', detail: 'Systems' },
            { name: 'GitHub', mark: 'GH', detail: 'Repositories' },
            { name: 'MongoDB', mark: 'M', detail: 'Database' },
            { name: 'DSA', mark: 'DSA', detail: 'Problem solving' },
          ].map(({ name: technology, mark, detail }, index) => (
            <div
              key={technology}
              className={`framework-float framework-float-${index + 1}`}
              style={{ animationDelay: `${index * -1.1}s` }}
            >
              <div className="framework-card">
                <span className={`framework-mark framework-mark-${index + 1}`}>{mark}</span>
                <span className="framework-card-copy">
                  <span className="framework-card-name">{technology}</span>
                  <span className="framework-card-detail">{detail}</span>
                </span>
                <span className="framework-card-indicator" />
              </div>
            </div>
          ))}
        </div>
        <AnimatedCodeScreen />
      </div>

      <div className="relative mx-auto flex min-h-[490px] max-w-[1400px] items-center px-5 py-12 sm:px-8 lg:h-full lg:min-h-0 lg:py-0">
        <div className="relative z-10 w-full max-w-[510px]">
          <Reveal>
            <div data-theme-surface className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/80 bg-[#020204]/80 px-3.5 py-1.5 text-sm font-bold text-red-300 shadow-[0_0_18px_rgba(255,40,65,0.12)]">
              <Code2 className="h-4 w-4" />
              CSE STUDENT
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[3.8rem]">
              <span className="block">Hi, I&apos;m</span>
              <span className="mt-1 block whitespace-nowrap">
                {typedName}
                <span className="ml-1 inline-block h-[0.78em] w-[3px] translate-y-[0.06em] animate-pulse bg-red-300 align-baseline shadow-[0_0_12px_rgba(255,45,65,0.8)]" aria-hidden="true" />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="hero-copy mt-4 text-base font-semibold leading-snug text-text-secondary sm:text-lg">
              {headline.split(' & ').join('  •  ')}
            </p>
          </Reveal>

          <Reveal delay={280}>
            <p className="hero-copy mt-4 max-w-[450px] text-[15px] leading-relaxed text-text-secondary sm:text-base">
              I build modern web applications, explore AI tools, and love turning ideas into real products.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-red-300/50 bg-gradient-to-r from-red-600 to-red-400 px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_24px_rgba(255,30,55,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(255,30,55,0.58)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
              >
                View My Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${email}`}
                data-theme-surface
                className="hero-connect-button inline-flex items-center gap-2 rounded-full border border-red-400/80 bg-[#020204]/75 px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-red-500/10 hover:shadow-[0_0_18px_rgba(255,40,65,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
              >
                Let&apos;s Connect
                <Mail className="h-4 w-4 text-red-300" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={440}>
            <div className="mt-5 flex items-center gap-3">
              {[
                { href: github, label: 'GitHub', Icon: Github },
                { href: linkedin, label: 'LinkedIn', Icon: Linkedin },
                { href: instagram, label: 'Instagram', Icon: Instagram },
                { href: `mailto:${email}`, label: 'Email', Icon: Mail },
              ].filter((social) => !isPlaceholder(social.href)).map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={label}
                  data-theme-surface
                  className="hero-social-link flex h-10 w-10 items-center justify-center rounded-full border border-red-500/80 bg-[#020204]/75 text-white transition-all hover:-translate-y-0.5 hover:border-red-300 hover:text-red-300 hover:shadow-[0_0_16px_rgba(255,40,65,0.35)]"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="pointer-events-none absolute bottom-[23%] right-0 hidden flex-col items-center gap-2 text-center text-[11px] font-bold leading-tight tracking-wide text-white drop-shadow-[0_1px_8px_rgba(0,0,0,1)] xl:flex">
          <span>TURNING<br />IDEAS INTO<br />REALITY</span>
          <Code2 className="h-4 w-4 text-red-400" />
          <span className="h-14 w-px bg-red-400 shadow-[0_0_12px_rgba(255,45,65,0.8)]" />
        </div>
      </div>
    </section>
  );
}
