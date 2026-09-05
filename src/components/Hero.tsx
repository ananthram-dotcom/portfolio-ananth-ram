import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Code2, 
  Eye, 
  Zap, 
  ShieldCheck, 
  Globe
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenHireMe: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenHireMe }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] lg:h-screen pt-20 lg:pt-24 pb-6 px-4 sm:px-8 flex items-center justify-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start my-auto">
        {/* Left Column: Clean & Concise Hero Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start gap-4 z-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Availability Status Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono-tech">{PERSONAL_INFO.freelanceStatus}</span>
          </div>

          {/* Headline & Kinetic Multi-Role Switcher */}
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>
            <div className="h-9 flex items-center overflow-hidden">
              <motion.div
                key={currentRoleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-base sm:text-xl xl:text-2xl font-bold text-sky-500 dark:text-sky-400 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{PERSONAL_INFO.titles[currentRoleIndex]}</span>
              </motion.div>
            </div>
          </div>

          {/* Bio Description - Filling Text Space */}
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
            <span className="font-semibold text-slate-900 dark:text-white">Multi-disciplinary software engineer & data analyst</span> delivering high-impact solutions for global clients. Specialized in architecting modern full-stack web platforms in React, TypeScript, and Node.js, alongside AI data pipelines and Power BI business intelligence dashboards.
          </p>

          {/* Core Discipline Badges */}
          <div className="flex flex-wrap gap-2 font-mono-tech text-xs">
            <span className="px-3 py-1 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/50 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-sky-500" /> Full-Stack Web
            </span>
            <span className="px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-500" /> UI/UX Design
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-500" /> Data Analytics & AI
            </span>
          </div>

          {/* Action Buttons & Social Links Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 w-full">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenHireMe}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 via-teal-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 hover:-translate-y-0.5 transition-all flex items-center gap-2 font-mono-tech"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Hire Me for Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl glass-panel text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/80 font-bold text-xs transition-all flex items-center gap-2 border border-slate-300 dark:border-slate-700 font-mono-tech"
              >
                <Eye className="w-3.5 h-3.5 text-sky-400" />
                <span>View My Work</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:text-sky-500 dark:hover:text-sky-400 hover:scale-105 transition-all border border-slate-200 dark:border-slate-800"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:text-purple-500 dark:hover:text-purple-400 hover:scale-105 transition-all border border-slate-200 dark:border-slate-800"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:text-rose-500 dark:hover:text-rose-400 hover:scale-105 transition-all border border-slate-200 dark:border-slate-800"
                title={`Email: ${PERSONAL_INFO.email}`}
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 hover:scale-105 transition-all border border-slate-200 dark:border-slate-800"
                title={`Phone: ${PERSONAL_INFO.phone}`}
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Elongated Bottom Left Engineering Capability & Client Guarantee Banner */}
          <div className="w-full p-3 rounded-2xl glass-panel border border-sky-500/20 bg-sky-500/5 dark:bg-sky-500/10 flex items-center justify-between gap-3 font-mono-tech text-xs mt-1">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-xl bg-sky-500/20 text-sky-400 shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white block text-xs">Rapid Turnaround & Async Global Delivery</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Architecting full-stack web platforms & data pipelines</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-semibold shrink-0">
              ⚡ &lt; 2h Response
            </span>
          </div>

          {/* Bottom Highlight Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] sm:text-[11px] font-mono-tech w-full pt-1">
            <div className="p-2 rounded-xl glass-panel border border-slate-200/70 dark:border-slate-800/70 flex items-center justify-center gap-1.5 text-slate-700 dark:text-slate-300">
              <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate font-medium">High Performance</span>
            </div>
            <div className="p-2 rounded-xl glass-panel border border-slate-200/70 dark:border-slate-800/70 flex items-center justify-center gap-1.5 text-slate-700 dark:text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate font-medium">Clean Architecture</span>
            </div>
            <div className="p-2 rounded-xl glass-panel border border-slate-200/70 dark:border-slate-800/70 flex items-center justify-center gap-1.5 text-slate-700 dark:text-slate-300">
              <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="truncate font-medium">Global Async Delivery</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Lifted Bento Profile Card (Filling Free Top Space) */}
        <motion.div 
          className="lg:col-span-5 flex justify-center z-10 lg:-mt-2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-full max-w-sm">
            {/* Ambient Backdrop Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-teal-500 rounded-3xl blur-xl opacity-20 dark:opacity-30"></div>

            {/* Bento Glass Card Container */}
            <div className="relative glass-panel rounded-3xl p-4 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl overflow-hidden flex flex-col gap-3">
              
              {/* Card Header Credentials */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 text-[10px] sm:text-[11px] font-mono-tech font-bold flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>8.0 CGPA Data Science</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30 text-[10px] sm:text-[11px] font-mono-tech font-bold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Azure & Power BI</span>
                </span>
              </div>

              {/* Photo Image Box - Zoomed Out Framing */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/3.8] max-h-[320px] sm:max-h-[350px] bg-slate-950 shadow-inner group border border-slate-700/50">
                {/* Subtle Framing Focus Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent z-10 pointer-events-none"></div>
                
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt="Ananth Ram S - Full-Stack & Data Engineer Portrait"
                  className="w-full h-full object-cover object-top scale-95 group-hover:scale-100 transition-transform duration-500 ease-out"
                  loading="eager"
                />
                
                {/* Overlaid Title & Credentials */}
                <div className="absolute bottom-3 left-3 right-3 text-white z-20">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono-tech font-semibold mb-1 shadow-sm backdrop-blur-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Verified Full-Stack & Data Engineer</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white drop-shadow-lg">{PERSONAL_INFO.name}</h2>
                  <p className="text-[11px] text-slate-300 font-mono-tech flex items-center gap-1.5 mt-0.5 drop-shadow">
                    <span>Full-Stack Architect</span>
                    <span>•</span>
                    <span>AI & Data Specialist</span>
                  </p>
                </div>
              </div>

              {/* Bottom Quick Highlights */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono-tech text-slate-600 dark:text-slate-300">
                <div className="p-2 rounded-xl bg-slate-100/60 dark:bg-slate-800/60 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  <span className="font-semibold">7+ Production Apps</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-100/60 dark:bg-slate-800/60 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="font-semibold">14 Cabinet Ministries</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
