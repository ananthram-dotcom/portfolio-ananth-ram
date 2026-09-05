import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold mb-2">
            Academic Foundation & Credentials
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Education & Verified Certifications
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Formal B.Sc Data Science degree paired with verified industry credentials from Microsoft, Google, Infosys, Cisco, MongoDB, NeST Digital, and IIT Bombay.
          </p>
        </div>

        {/* Education Highlight Cards */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-blue-500" />
            <span>Academic Qualifications</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bento-card p-6 sm:p-7 relative border-l-4 border-l-blue-600"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">
                    {edu.score}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" /> {edu.period}
                  </span>
                </div>

                <h4 className="text-lg font-extrabold text-slate-900 dark:text-white mb-1">
                  {edu.degree}
                </h4>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {edu.institution} • {edu.location}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Bento Grid */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-500" />
            <span>8 Professional Certifications</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bento-card p-5 flex flex-col justify-between hover:border-purple-500/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-purple-600 dark:text-purple-400">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 line-clamp-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3 h-3" /> Issued
                  </span>
                  <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300">
                    {cert.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
