import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 md:py-32 bg-bg-surface/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
          <SectionHeading 
            number="04" 
            title="Projects" 
            subtitle="Some things I've built or am currently working on."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
