import { ExternalLink } from 'lucide-react';
import { Github } from './icons';
import type { Project } from '../data/portfolio';
import { isPlaceholder } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasGithub = !isPlaceholder(project.githubUrl);
  const hasLive = !isPlaceholder(project.liveUrl);

  return (
    <div className="group flex flex-col h-full bg-bg-surface border border-border-subtle rounded-xl overflow-hidden hover:border-accent-500/50 transition-colors shadow-sm">
      {/* Image Placeholder / Banner */}
      <div className="h-48 relative overflow-hidden bg-bg-base border-b border-border-subtle">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-500/40 via-transparent to-transparent" />
        )}
        
        {project.statusBadge && (
          <div className="absolute top-4 right-4 px-2.5 py-1 bg-bg-surface/90 backdrop-blur-sm text-text-primary text-xs font-semibold rounded shadow-sm border border-border-subtle">
            {project.statusBadge}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent-500 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-text-secondary mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span 
              key={tag} 
              className="px-2.5 py-1 text-xs font-medium text-accent-600 dark:text-accent-400 bg-accent-500/10 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border-subtle">
          {hasGithub ? (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-accent-500 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm font-medium text-text-muted cursor-not-allowed">
              <Github className="w-4 h-4 opacity-50" />
              <span>No Code</span>
            </span>
          )}

          {hasLive ? (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-accent-500 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm font-medium text-text-muted cursor-not-allowed">
              <ExternalLink className="w-4 h-4 opacity-50" />
              <span>No Demo</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
