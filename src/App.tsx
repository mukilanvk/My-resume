import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationSection } from './components/CertificationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { AIAssistantModal } from './components/AIAssistantModal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectItem, OtherProjectItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | OtherProjectItem | null>(null);
  const [isAIChatOpen, setIsAIChatOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAIChat={() => setIsAIChatOpen(true)}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-6 pb-20">
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAIChat={() => setIsAIChatOpen(true)}
        />

        <AboutSection />

        <ExperienceSection />

        <FeaturedProjectsSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onSelectOtherProject={(proj) => setSelectedProject(proj)}
        />

        <SkillsSection onOpenAIChat={() => setIsAIChatOpen(true)} />

        <CertificationSection />

        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <AIAssistantModal
        isOpen={isAIChatOpen}
        onClose={() => setIsAIChatOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
