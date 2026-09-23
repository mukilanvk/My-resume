import React, { useState } from 'react';
import { Sparkles, Code, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES, HERO_IMAGES } from '../data/portfolioData';

interface SkillsSectionProps {
  onOpenAIChat: () => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ onOpenAIChat }) => {
  const [activeCodeCategory, setActiveCodeCategory] = useState<string | null>(null);

  return (
    <section className="scroll-mt-24 space-y-8" id="skills">
      <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-1.5">
        <span className="w-2 h-0.5 bg-blue-600"></span>
        Skills & Technologies
        <span className="w-2 h-0.5 bg-blue-600"></span>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight font-display">
          Tools That <br className="hidden sm:block" /> Power Ideas.
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md font-medium">
          A robust stack built on modern JavaScript, reactive frontend engines, flexible databases, and high-performance serverless APIs.
        </p>
      </div>

      {/* 5 Categorized Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => setActiveCodeCategory(activeCodeCategory === cat.id ? null : cat.id)}
            className={`bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm hover:border-blue-300 transition-all cursor-pointer relative group ${
              activeCodeCategory === cat.id ? 'ring-2 ring-blue-500 border-blue-500' : ''
            }`}
          >
            <div className={`w-9 h-9 rounded-xl ${cat.colorBg} ${cat.colorText} flex items-center justify-center text-lg mb-3 font-display`}>
              {cat.icon}
            </div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-black text-slate-950 text-sm font-display">{cat.title}</h3>
              <span className="text-[10px] font-mono text-slate-400">{cat.proficiency}%</span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed font-medium mb-3">
              {cat.skills}
            </p>

            {/* Proficiency progress bar */}
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${cat.proficiency}%` }}
              />
            </div>

            <div className="mt-2 text-[10px] font-bold text-blue-600 flex items-center gap-1 opacity-80 group-hover:opacity-100">
              <Code className="w-3 h-3" />
              <span>{activeCodeCategory === cat.id ? 'Hide Code' : 'View Code Spec'}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Code Snippet Spec Drawer */}
      {activeCodeCategory && (
        <div className="bg-slate-900 text-slate-100 rounded-2xl p-4 border border-slate-800 font-mono text-xs shadow-xl transition-all animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <span className="flex items-center gap-2 text-blue-400 font-bold">
              <Terminal className="w-4 h-4" />
              {SKILL_CATEGORIES.find((c) => c.id === activeCodeCategory)?.title} Code Sample
            </span>
            <button
              onClick={() => setActiveCodeCategory(null)}
              className="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded bg-slate-800"
            >
              Close
            </button>
          </div>
          <pre className="overflow-x-auto text-emerald-400 p-2 bg-slate-950/60 rounded-xl leading-relaxed">
            {SKILL_CATEGORIES.find((c) => c.id === activeCodeCategory)?.sampleCode}
          </pre>
        </div>
      )}

      {/* Large AI-Assisted Development Feature Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
        {/* Glow accents behind robot */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Info & AI Tool Pills */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <span>AI-Assisted Development</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight font-display">
              Development <br />
              in the AI Era
            </h3>

            <blockquote className="text-slate-300 text-xs sm:text-sm italic border-l-2 border-blue-500 pl-3">
              "AI won't replace developers.<br />
              Developers who use AI will replace those who don't."
            </blockquote>

            {/* Tool buttons: Cursor, Windsurf, Codex, Antigravity */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg text-xs font-semibold backdrop-blur text-slate-200">
                <span>✦</span> Cursor
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg text-xs font-semibold backdrop-blur text-slate-200">
                <span>🌊</span> Windsurf
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg text-xs font-semibold backdrop-blur text-slate-200">
                <span>⚙</span> Codex
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/15 border border-white/10 rounded-lg text-xs font-semibold backdrop-blur text-slate-200">
                <span>⚛</span> Antigravity
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAIChat}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-lg transition-transform active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Interact with Mukil's AI Agent</span>
              </button>
            </div>
          </div>

          {/* Middle: 3D Robot Avatar Companion */}
          <div className="lg:col-span-4 flex items-center justify-center py-4">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-3 bg-gradient-to-tr from-blue-500/30 via-cyan-400/20 to-transparent flex items-center justify-center shadow-2xl backdrop-blur-md border border-white/10">
              <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-xl pointer-events-none"></div>
              <img
                src={HERO_IMAGES.aiRobot}
                alt="Cute modern 3D glossy white and blue AI assistant robot floating with soft blue cyan glowing visor screen"
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(59,130,246,0.5)] transform hover:scale-105 transition-transform duration-500 relative z-10"
              />
            </div>
          </div>

          {/* Right: Workflow Step Pipeline */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs font-bold text-slate-200">
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-blue-500/30 text-blue-300 flex items-center justify-center text-[10px]">1</span>
                IDE
              </span>
              <span className="text-blue-400 font-mono">→</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs font-bold text-slate-200">
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-cyan-500/30 text-cyan-300 flex items-center justify-center text-[10px]">2</span>
                AI Assistance
              </span>
              <span className="text-blue-400 font-mono">→</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs font-bold text-slate-200">
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-purple-500/30 text-purple-300 flex items-center justify-center text-[10px]">3</span>
                Code
              </span>
              <span className="text-blue-400 font-mono">→</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs font-bold text-slate-200">
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-amber-500/30 text-amber-300 flex items-center justify-center text-[10px]">4</span>
                Component
              </span>
              <span className="text-blue-400 font-mono">→</span>
            </div>
            <div className="bg-white/10 border border-blue-400/40 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs font-bold text-white shadow-sm shadow-blue-500/20">
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">5</span>
                Product
              </span>
              <span className="text-emerald-400 font-bold">Ready ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
