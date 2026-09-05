import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Internship' | 'Leadership'>('All');

  const filteredExperiences = activeTab === 'All'
    ? EXPERIENCES
    : EXPERIENCES.filter(e => e.type === activeTab);

  return (
    <section id="experience" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-2">
            Professional Track & Leadership
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Internships & Cabinet Leadership
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Proven track record of engineering cloud deployments, machine learning modeling, and governing student affairs across 14 cabinet ministries.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-2 mb-12">
          {(['All', 'Internship', 'Leadership'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
                  : 'glass-panel text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab === 'All' ? 'All Roles' : tab === 'Internship' ? 'Technical Internships' : 'Cabinet Leadership'}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 md:ml-12 space-y-12 pl-6 sm:pl-10">
          {filteredExperiences.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-600 shadow-md group-hover:scale-125 transition-transform" />

              {/* Bento Content Card */}
              <div className="bento-card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        item.type === 'Internship'
                          ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300/50'
                          : 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300/50'
                      }`}>
                        {item.type}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {item.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-xs font-bold text-slate-700 dark:text-slate-300 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Bullet Descriptions */}
                <div className="space-y-2 mb-6">
                  {item.description.map((desc, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
