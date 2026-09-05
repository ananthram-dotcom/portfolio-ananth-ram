import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowUpRight, Eye, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface ProjectsShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Full-Stack Web', 'Data Analytics & AI', 'UI/UX & Web'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono-tech uppercase tracking-widest text-sky-500 dark:text-sky-400 font-bold mb-2">
            Featured Software & Analytics
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Projects & Code Showcase
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Explore live deployments and repositories spanning AI-assisted analytics frameworks, e-commerce web apps, smart manufacturing hubs, and recommendation engines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-mono-tech">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 scale-105'
                  : 'glass-panel text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Bento Grid & Sticky Stacking Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bento-card flex flex-col justify-between group p-6 sm:p-7 relative border border-slate-200/80 dark:border-slate-800/80 hover:border-sky-500/40"
            >
              <div>
                {/* Header & Category Badge */}
                <div className="flex items-center justify-between mb-4 font-mono-tech">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                      <Sparkles className="w-3 h-3 fill-amber-400" /> Featured
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1 group-hover:text-sky-400 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-sky-400" />
                </h3>

                <p className="text-xs font-semibold text-sky-500 dark:text-sky-400 mb-3">
                  {project.tagline}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Top Highlights Preview */}
                <div className="space-y-1.5 mb-6">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 font-mono-tech">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-mono-tech font-semibold text-slate-700 dark:text-slate-300 hover:text-sky-400 flex items-center gap-1 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-sky-400" /> Details
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg glass-panel text-slate-600 dark:text-slate-300 hover:text-purple-400 transition-colors"
                      title="GitHub Repository"
                      aria-label={`${project.title} GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs flex items-center gap-1 shadow-sm transition-all"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-500 font-mono-tech text-[11px] font-medium">
                      GitHub Repo
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
