import { Github, Calendar, Code } from 'lucide-react';
import resumeData from '../../../resume_data.json';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/60 dark:text-[#eae6df]/60 font-headline">Section III • Technology & dispatches</span>
        <h1 className="text-4xl md:text-5xl font-black font-headline text-black dark:text-white uppercase mt-1 pb-4 border-b border-black dark:border-white/20">
          ENGINEERING & SYSTEMS REPORT
        </h1>
        <p className="text-sm md:text-base font-serif italic text-[#1c1917]/70 dark:text-[#eae6df]/70 max-w-2xl mx-auto mt-4 leading-relaxed">
          "Detailed dispatches from projects on web development, geospatial data analysis, and advanced database engineering."
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-12">
        {resumeData.projects.map((project, index) => (
          <div
            key={index}
            className={`pb-12 ${index < resumeData.projects.length - 1
                ? 'border-b-4 border-double border-black/30 dark:border-white/20'
                : ''
              }`}
          >
            {/* Headline */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/60 dark:text-[#eae6df]/60 font-headline">
                <span>Dispatch No. 0{index + 1}</span>
                <span>{project.period.toUpperCase()}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black font-headline text-black dark:text-white uppercase tracking-tight leading-tight">
                {project.title.toUpperCase()}
              </h2>
            </div>

            {/* Layout Column */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Description & Features */}
              <div className="md:col-span-8 space-y-4">
                <p className="text-sm leading-relaxed drop-cap text-[#1c1917]/90 dark:text-[#eae6df]/90 font-serif text-justify">
                  {project.description}
                </p>

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div className="pt-2">
                    <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white mb-2">
                      Key Reports & Achievements:
                    </h4>
                    <ul className="space-y-1.5 list-disc list-inside text-xs font-serif text-[#1c1917]/80 dark:text-[#eae6df]/80 text-justify">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="leading-relaxed">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technologies & Actions */}
              <div className="md:col-span-4 space-y-4 md:border-l md:border-black/20 md:dark:border-white/10 md:pl-6 text-xs">
                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white border-b border-black/10 dark:border-white/5 pb-1">
                    System Architecture
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 border border-black/30 dark:border-white/20 font-headline uppercase tracking-wider text-[9px] font-bold text-[#1c1917]/80 dark:text-[#eae6df]/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-black/10 dark:border-white/5 space-y-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full text-center block"
                    >
                      [ SOURCE REPOSITORY ]
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-center block"
                    >
                      [ LIVE DEMO ]
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Statistics */}
      <section className="mt-20 border-t-4 border-double border-black dark:border-white/40 pt-10">
        <h2 className="font-headline font-black text-xl text-center uppercase tracking-wider mb-8 text-black dark:text-white">
          STATISTICAL INVENTORY
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border border-black/10 dark:border-white/5">
            <div className="font-headline font-black text-3xl text-black dark:text-white mb-1">
              {resumeData.projects.length}
            </div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/70 dark:text-[#eae6df]/70">
              Total Systems Catalogued
            </div>
          </div>
          <div className="text-center p-4 border border-black/10 dark:border-white/5">
            <div className="font-headline font-black text-3xl text-black dark:text-white mb-1">
              {resumeData.projects.reduce((acc, project) => acc + project.technologies.length, 0)}
            </div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/70 dark:text-[#eae6df]/70">
              Libraries & Interfaces Employed
            </div>
          </div>
          <div className="text-center p-4 border border-black/10 dark:border-white/5">
            <div className="font-headline font-black text-3xl text-black dark:text-white mb-1">
              {resumeData.projects.filter(p => p.github).length}
            </div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/70 dark:text-[#eae6df]/70">
              Public Ledger Repositories
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
