import { portfolioData } from '../data/portfolio';
import { Reveal } from './Reveal';
import { Code2 } from 'lucide-react';

function SkillLogo({ skill }: { skill: string }) {
  if (skill === 'MongoDB') {
    return (
      <svg className="skill-brand-logo skill-brand-mongodb" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 2.5c-1.1 3.4-7.2 8.3-7.2 15.2 0 5.1 3.2 9 6.4 10.4l.8-5.1.8 5.1c3.2-1.4 6.4-5.3 6.4-10.4C23.2 10.8 17.1 5.9 16 2.5Z" />
        <path d="M16 22.8v7" />
      </svg>
    );
  }

  if (skill === 'Node.js') {
    return (
      <svg className="skill-brand-logo skill-brand-node" viewBox="0 0 42 24" aria-hidden="true">
        <path d="M2 6.5 10.5 2 19 6.5v11L10.5 22 2 17.5v-11Z" />
        <path d="m6.5 15.5 4-7 4 7m-6.2-2.7h4.4" />
        <text x="22" y="16.5">node</text>
      </svg>
    );
  }

  if (skill === 'Express.js') {
    return (
      <svg className="skill-brand-logo skill-brand-express" viewBox="0 0 56 20" aria-hidden="true">
        <text x="1" y="15">express</text>
      </svg>
    );
  }

  const logo = skillLogos[skill] ?? { mark: skill.slice(0, 2), className: 'skill-logo-default' };
  return <span className={`skill-logo ${logo.className}`} aria-hidden="true">{logo.mark}</span>;
}

const skillLogos: Record<string, { mark: string; className: string }> = {
  C: { mark: 'C', className: 'skill-logo-c' },
  'C++': { mark: 'C++', className: 'skill-logo-cpp' },
  Python: { mark: 'Py', className: 'skill-logo-python' },
  Java: { mark: 'J', className: 'skill-logo-java' },
  HTML: { mark: '5', className: 'skill-logo-html' },
  CSS: { mark: '3', className: 'skill-logo-css' },
  JavaScript: { mark: 'JS', className: 'skill-logo-javascript' },
  React: { mark: 'R', className: 'skill-logo-react' },
  'Tailwind CSS': { mark: 'TW', className: 'skill-logo-tailwind' },
  Git: { mark: 'Git', className: 'skill-logo-git' },
  GitHub: { mark: 'GH', className: 'skill-logo-github' },
  'VS Code': { mark: '<>', className: 'skill-logo-vscode' },
  Cursor: { mark: 'C', className: 'skill-logo-cursor' },
  Vercel: { mark: '▲', className: 'skill-logo-vercel' },
  'AI Agents': { mark: 'AI', className: 'skill-logo-agents' },
  'Prompt Engineering': { mark: 'P', className: 'skill-logo-prompt' },
};

export function Skills() {
  const { skills } = portfolioData;

  return (
    <div id="skills" className="skills-panel rounded-2xl border border-red-500/75 p-4 shadow-[0_0_24px_rgba(255,35,55,0.09)] sm:p-5">
      <div className="mb-2.5 flex items-center gap-3 border-b border-red-500/20 pb-2">
        <Code2 className="h-6 w-6 text-red-400" />
        <h2 className="text-lg font-bold text-white">Skills</h2>
        <span className="h-px flex-1 bg-gradient-to-r from-red-400/60 to-transparent" />
      </div>
      <div className="space-y-2.5">
        {skills.map((group, groupIndex) => (
          <Reveal key={group.category} delay={groupIndex * 60}>
            <div>
              <h3 className="mb-1 text-[13px] font-semibold text-slate-100">{group.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => {
                return (
                  <span key={skill} className="skill-badge inline-flex items-center gap-1.5 rounded-full border border-red-500/70 px-2.5 py-1 text-[11px] font-medium leading-none transition-all duration-200 hover:border-red-300 hover:shadow-[0_0_12px_rgba(255,35,55,0.2)]">
                    <SkillLogo skill={skill} />
                    {skill}
                  </span>
                );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
