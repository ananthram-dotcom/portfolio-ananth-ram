import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BrandLogo } from './Icons';

interface NavbarProps {
  onOpenHireMe: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenHireMe }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'skills', 'projects', 'experience', 'certifications', 'demo', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Live Demo', href: '#demo' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-3">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-xl py-3 px-6' : 'bg-transparent py-4 px-4'
      }`}>
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Un-Cramped Professional Sub-Title */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden">
              <BrandLogo className="w-10 h-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 font-mono-tech font-medium tracking-wide flex items-center gap-1.5 truncate max-w-[150px] sm:max-w-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span className="truncate">Full-Stack & Data Engineer</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Capsule */}
          <nav className="hidden lg:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-sky-500 text-white shadow-sm font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Switcher & Hire Me Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl glass-panel text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center"
              aria-label="Toggle Dark/Light Theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Hire Me Button */}
            <button
              onClick={onOpenHireMe}
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-teal-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-bold px-4.5 py-2.5 shadow-md hover:shadow-sky-500/25 transition-all flex items-center gap-1.5 font-mono-tech"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin-slow" />
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass-panel text-slate-700 dark:text-slate-200"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-panel text-slate-700 dark:text-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 p-4 glass-panel rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium rounded-xl text-slate-700 dark:text-slate-200 hover:bg-sky-500/10 hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireMe();
              }}
              className="mt-2 w-full bg-gradient-to-r from-sky-500 via-teal-500 to-indigo-600 text-white font-bold text-sm py-2.5 rounded-xl shadow-md flex items-center justify-center gap-2 font-mono-tech"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Hire Me for Projects</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
