import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Footer Identity */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-slate-900 to-orange-500 flex items-center justify-center text-white font-extrabold text-sm shadow-xs font-display">
            MK
          </div>
          <div>
            <div className="font-extrabold text-xs text-slate-900 font-display">Mukil Karupusamy</div>
            <div className="text-[11px] text-slate-500">React.js & Next.js Full-Stack Developer</div>
          </div>
        </div>

        {/* Quick Footer Links */}
        <div className="flex items-center gap-6 text-xs font-semibold text-slate-500">
          <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>

        {/* Copyright & Back to top */}
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span>© 2026 Mukil Karupusamy. All rights reserved.</span>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-1.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 transition-colors text-slate-600"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
