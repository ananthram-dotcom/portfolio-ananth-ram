import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Briefcase, Users, Database, Cloud, ShieldCheck } from 'lucide-react';
import { METRICS } from '../data/portfolioData';

export const BentoStats: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-sky-400" />,
    Code2: <Code2 className="w-6 h-6 text-teal-400" />,
    Briefcase: <Briefcase className="w-6 h-6 text-emerald-400" />,
    Users: <Users className="w-6 h-6 text-purple-400" />
  };

  return (
    <section className="py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-mono-tech uppercase tracking-widest text-sky-500 dark:text-sky-400 font-bold mb-2">
            Core Impact & Track Record
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Engineering & Leadership Highlights
          </p>
        </div>

        {/* 4 Top Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bento-card p-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                  {iconMap[metric.icon]}
                </div>
                <span className="text-[10px] font-mono-tech font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Verified
                </span>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-mono-tech font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                  {metric.value}
                </h3>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-200 mb-1">
                  {metric.label}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {metric.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multi-Disciplinary Bento Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1: Full-Stack Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card p-7 md:col-span-2 bg-gradient-to-br from-sky-500/5 via-teal-500/5 to-transparent border border-sky-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono-tech font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
                Primary Core
              </span>
              <Code2 className="w-6 h-6 text-sky-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Full-Stack Web Engineering
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Building modular, responsive React & TypeScript web applications powered by Node.js, RESTful APIs, MySQL, and Tailwind CSS. Specializing in component architecture and zero-cost Vercel deployments.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono-tech">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">React 19</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">TypeScript</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Node.js</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Tailwind CSS</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Vite</span>
            </div>
          </motion.div>

          {/* Bento Card 2: Data Analytics & AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bento-card p-7 bg-gradient-to-br from-purple-500/5 via-teal-500/5 to-transparent border border-purple-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono-tech font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                Analytics & ML
              </span>
              <Database className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Data Science & AI
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              NLP transaction parsing, TF-IDF vectorization, cosine similarity movie recommendations, and Microsoft Power BI dashboards.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono-tech">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Python</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Power BI</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">NLP</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">SQL</span>
            </div>
          </motion.div>

          {/* Bento Card 3: Cloud & DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bento-card p-7 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-transparent border border-emerald-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono-tech font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Cloud Stack
              </span>
              <Cloud className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Microsoft Azure & DevOps
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Hands-on cloud experience from NeST Digital Kochi internship. Configuring CI/CD automation, cloud services, and scalable web apps.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono-tech">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">MS Azure</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">CI/CD</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Cloud Web Apps</span>
            </div>
          </motion.div>

          {/* Bento Card 4: Governance & Cabinet Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bento-card p-7 md:col-span-2 bg-gradient-to-br from-teal-500/5 via-sky-500/5 to-transparent border border-teal-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono-tech font-bold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                Leadership
              </span>
              <ShieldCheck className="w-6 h-6 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Cabinet Advisor (14 Ministries) & Former Research Minister
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Appointed Student Cabinet Advisor (2025–2026) at NASC following excellence as Research Minister (2024–2025). Directing 14 cabinet ministries, re-establishing the campus Research Cell, and organizing inter-collegiate events.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono-tech">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Governance</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">14 Ministries</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Research Cell Founder</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">Event Operations</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
