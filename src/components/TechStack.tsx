import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, BarChart3, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    Layout: <Layout className="w-5 h-5 text-sky-400" />,
    Palette: <Palette className="w-5 h-5 text-purple-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-emerald-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-teal-400" />
  };

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const filteredCategories = activeCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.title === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-mono-tech uppercase tracking-widest text-sky-500 dark:text-sky-400 font-bold mb-2">
            Technical Competencies
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Skills & Modern Frameworks
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Equipped with production-grade engineering tools, analytical algorithms, design systems, and generative AI capabilities.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono-tech">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/25 scale-105'
                  : 'glass-panel text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bento-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                    {categoryIcons[cat.iconName]}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
                      {cat.skills.length} Core Stack Technologies
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill List with Progress Bars */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                          {skill.highlight && <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
                          {skill.name}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400 font-mono-tech text-[11px]">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className={`h-full rounded-full ${
                            skill.highlight
                              ? 'bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400'
                              : 'bg-slate-400 dark:bg-slate-600'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono-tech text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Production Ready
                </span>
                <span>Verified Competency</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
