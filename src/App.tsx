import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoStats } from './components/BentoStats';
import { TechStack } from './components/TechStack';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ProjectModal } from './components/ProjectModal';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Certifications } from './components/Certifications';
import { InteractiveDemo } from './components/InteractiveDemo';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import type { Project } from './data/portfolioData';

export function AppContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-500 selection:text-white transition-colors duration-300">
      {/* Navigation */}
      <Navbar onOpenHireMe={scrollToContact} />

      {/* Main Sections */}
      <main>
        <Hero onOpenHireMe={scrollToContact} />
        <BentoStats />
        <TechStack />
        <ProjectsShowcase onSelectProject={setSelectedProject} />
        <ExperienceTimeline />
        <Certifications />
        <InteractiveDemo />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
