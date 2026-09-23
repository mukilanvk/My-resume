import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAIChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenAIChat }) => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 max-w-7xl mx-auto transition-all duration-300">
      <nav className={`bg-white/85 backdrop-blur-md border border-slate-200/80 shadow-soft rounded-full px-5 py-3 flex items-center justify-between transition-all ${scrolled ? 'shadow-md border-blue-200/60' : ''}`}>
        {/* Monogram Brand Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-900 via-blue-950 to-orange-500 flex items-center justify-center text-white font-extrabold text-base tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
            MK
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-black text-slate-900 leading-tight">Mukil Karupusamy</span>
            <span className="text-[10px] text-blue-600 font-semibold leading-none">Full-Stack Dev</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] font-semibold text-slate-600">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors relative py-1 ${
                  isActive ? 'text-blue-600 font-bold' : 'hover:text-blue-600'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-pulse" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action CTA Buttons */}
        <div className="flex items-center gap-2">
          {/* AI Assistant Quick Trigger */}
          <button
            type="button"
            onClick={onOpenAIChat}
            className="hidden sm:inline-flex items-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-[12px] font-bold px-3 py-2 rounded-full border border-blue-200/80 transition-all"
            title="Chat with Mukil's AI Assistant"
          >
            <span className="text-xs">✨</span>
            <span>Ask AI</span>
          </button>

          {/* Resume Modal Trigger */}
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-[12px] font-bold px-3.5 py-2 rounded-full transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-slate-600" />
            <span>Resume</span>
          </button>

          {/* Let's Connect CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-[13px] font-bold px-4 sm:px-5 py-2.5 rounded-full shadow-md shadow-blue-500/25 transition-all"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-lg border border-slate-200 rounded-2xl p-4 shadow-xl space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAIChat();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold py-2.5 rounded-xl border border-blue-200"
            >
              <span>✨</span>
              <span>Ask Mukil's AI</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-900 text-white text-xs font-bold py-2.5 rounded-xl"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
