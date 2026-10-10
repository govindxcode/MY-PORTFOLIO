import { portfolioData } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { GraduationCap, Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

export function Journey() {
  const { journey, learning } = portfolioData;

  return (
    <section id="journey" className="py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
          <SectionHeading number="03" title="Education & Journey" />
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-border-subtle ml-3 md:ml-6 space-y-12 pb-8">
            {journey.map((entry, index) => (
              <Reveal key={entry.id} delay={index * 100}>
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-500 ring-4 ring-bg-base" />

                  <div className={`bg-bg-surface border ${entry.isDraft ? 'border-dashed border-border-subtle/70 opacity-80' : 'border-border-subtle'} p-6 md:p-8 rounded-xl shadow-sm hover:border-accent-500/50 transition-colors`}>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-text-primary">
                            {entry.title}
                          </h3>
                          {entry.isDraft && (
                            <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-bg-base text-text-muted rounded border border-border-subtle">
                              Draft
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary font-medium">
                          {entry.id.startsWith('edu') ? <GraduationCap className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                          {entry.organization}
                        </div>
                      </div>

                      <div className="flex flex-col md:items-end gap-1.5 text-sm text-text-muted">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{entry.date}</span>
                        </div>
                        {entry.location && !entry.location.includes('TODO:') && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span>{entry.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {entry.grade && !entry.grade.includes('TODO:') && (
                      <div className="mb-4 inline-block px-3 py-1 bg-accent-500/10 text-accent-600 dark:text-accent-400 text-sm font-medium rounded-md">
                        {entry.grade}
                      </div>
                    )}

                    {entry.description && (
                      <p className="text-text-secondary leading-relaxed">
                        {entry.description}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150}>
          <div className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-accent-500" />
              <h3 className="text-2xl font-semibold text-text-primary">Learning & Currently Exploring</h3>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {learning.map((item) => (
                <div key={item.id} className="group rounded-xl border border-border-subtle bg-bg-surface p-5 transition-colors hover:border-accent-500/50 hover:shadow-sm">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h4 className="text-lg font-semibold text-text-primary">{item.title}</h4>
                    <span className="rounded-full border border-accent-500/20 bg-accent-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-600 dark:text-accent-400">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
