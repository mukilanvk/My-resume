import React from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { HERO_IMAGES } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenAIChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenAIChat }) => {
  return (
    <section className="relative pt-6 pb-12 lg:pt-10" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            React | Next.js | AI-Powered
          </div>

          {/* Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.08] text-slate-950 uppercase font-display">
              MUKIL <br className="hidden sm:block" />
              <span className="text-blue-600">KARUPUSAMY</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight pt-1">
              Full-Stack Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
            I build modern, scalable web applications and interactive digital experiences with seamless AI integrations, robust APIs, and clean component architectures.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 active:scale-95 text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md shadow-slate-900/20 transition-all"
            >
              <span>View My Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-full shadow-sm hover:border-slate-400 transition-all"
            >
              <span>Download Resume</span>
              <Download className="w-3.5 h-3.5 text-slate-600" />
            </button>
            <button
              onClick={onOpenAIChat}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-full shadow-md shadow-blue-500/20 transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Talk to Mukil's AI Twin</span>
            </button>
          </div>

          {/* Metric Counters */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-md">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">2.5+</div>
              <div className="text-xs text-slate-500 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">10+</div>
              <div className="text-xs text-slate-500 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">500+</div>
              <div className="text-xs text-slate-500 font-medium">
                Daily Users <span className="text-[11px] text-slate-400 block">(Everest)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Workspace Showcase with Doodle Overlays */}
        <div className="lg:col-span-5 relative">
          {/* Cursive handwriting doodle */}
          <div className="absolute -top-7 left-6 z-20 font-handwriting text-slate-700 text-xl font-bold rotate-[-6deg] select-none pointer-events-none drop-shadow-sm flex items-center gap-1">
            <span>Ideas to Real Products</span>
            <span className="text-blue-600">✨</span>
          </div>

          {/* Floating ambient gradient backdrop glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/30 via-indigo-300/25 to-amber-200/35 rounded-3xl blur-2xl -z-10 pointer-events-none transform -rotate-1 scale-105"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-slate-900 group">
            <img
              src={HERO_IMAGES.workspace}
              alt="Cinematic cozy developer desk workspace at golden hour"
              className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
            {/* Ambient Golden Hue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Tech Stack Icon Bar */}
      <div className="mt-12 py-4 px-6 bg-white/90 backdrop-blur border border-slate-200/90 rounded-2xl shadow-sm flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <span className="text-blue-500 font-bold">⚛</span>
          <span>React</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <span className="font-extrabold text-black">N</span>
          <span>Next.js</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <span className="bg-blue-600 text-white text-[10px] font-bold px-1 rounded">TS</span>
          <span>TypeScript</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <span className="text-amber-500 font-bold">🐍</span>
          <span>Python</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <span className="text-emerald-500 font-bold">⚡</span>
          <span>FastAPI</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <span className="text-blue-700 font-bold">🐘</span>
          <span>PostgreSQL</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <span className="text-green-600 font-bold">🍃</span>
          <span>MongoDB</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <span className="text-amber-600 font-bold">🔥</span>
          <span>Firebase</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <span className="text-blue-500 font-bold">☁</span>
          <span>Google Cloud</span>
        </div>
      </div>
    </section>
  );
};
