import { portfolioData } from '../data/portfolio';
import { Reveal } from './Reveal';
import { BrainCircuit, Code2, GraduationCap } from 'lucide-react';
import aboutImage from '../assets/about.jpeg';
import { Skills } from './Skills';

export function About() {
  const { intro } = portfolioData.about;
  const highlights = [
    { title: 'CSE Student', detail: 'Graphic Era Hill University', Icon: GraduationCap },
    { title: 'Full Stack Dev', detail: 'Learning by building', Icon: Code2 },
    { title: 'AI Enthusiast', detail: 'Agents | Prompting', Icon: BrainCircuit },
  ];

  return (
    <section id="about" className="border-t border-red-500/25 bg-bg-base py-7 md:py-8">
      <div className="mx-auto grid max-w-[1400px] gap-5 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr_1fr] lg:items-center">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/[0.06] px-3 py-1 text-sm font-semibold text-red-300">
            <BrainCircuit className="h-4 w-4" />
            About Me
          </div>
          <h2 className="theme-primary-text mb-3 text-[28px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-3xl">
            Turning Ideas
            <span className="block">Into Real Solutions</span>
          </h2>
          <p className="max-w-[430px] text-[15px] leading-[1.55] text-text-secondary">{intro} I enjoy solving problems, learning new technologies, and creating projects that make an impact.</p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {highlights.map(({ title, detail, Icon }) => (
              <div key={title} data-theme-surface className="flex min-w-[145px] items-center gap-2 rounded-xl border border-red-500/35 bg-[#0b0708] px-2.5 py-2.5 shadow-[0_0_16px_rgba(255,35,55,0.08)]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-red-400/35 bg-red-500/10 text-red-300">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="theme-primary-text block text-xs font-bold text-white">{title}</span>
                  <span className="mt-0.5 block text-[10px] leading-tight text-text-secondary">{detail}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative flex h-[250px] items-center justify-center overflow-hidden sm:h-[300px]">
            <div className="absolute inset-10 rounded-full bg-red-500/10 blur-3xl" />
            <img src={aboutImage} alt="Developer working at a laptop in a bedroom workspace" className="relative h-full w-full object-cover object-[center_85%] drop-shadow-[0_0_24px_rgba(255,35,55,0.24)]" />
          </div>
        </Reveal>

        <Reveal delay={180}>
          <Skills />
        </Reveal>
      </div>
    </section>
  );
}
