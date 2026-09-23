import React from 'react';
import { ArrowRight, Code2, Rocket, Users } from 'lucide-react';
import { HERO_IMAGES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative scroll-mt-24" id="about">
      <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">
        <span className="w-2 h-0.5 bg-blue-600"></span>
        About Me
        <span className="w-2 h-0.5 bg-blue-600"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Text & Metric Cards Column */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight uppercase leading-tight font-display">
            I Build <br />
            <span className="text-blue-600">Digital Experiences.</span>
          </h2>

          <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            <p>
              I'm <strong className="text-slate-900 font-bold">Mukil Karupusamy</strong>, a React.js and Next.js full-stack developer with 2.5+ years of experience building modern web applications.
            </p>
            <p>
              My experience spans frontend engineering, backend APIs, databases, testing, and cutting-edge AI-powered applications that solve genuine everyday problems.
            </p>
          </div>

          {/* Feature Cards Row */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 text-center shadow-sm hover:border-blue-300 transition-all">
              <div className="w-9 h-9 mx-auto bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold text-sm mb-2">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="font-bold text-xs text-slate-900">Clean<br />Code</div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 text-center shadow-sm hover:border-blue-300 transition-all">
              <div className="w-9 h-9 mx-auto bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center font-bold text-sm mb-2">
                <Rocket className="w-4 h-4" />
              </div>
              <div className="font-bold text-xs text-slate-900">Modern<br />Solutions</div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-3.5 text-center shadow-sm hover:border-blue-300 transition-all">
              <div className="w-9 h-9 mx-auto bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold text-sm mb-2">
                <Users className="w-4 h-4" />
              </div>
              <div className="font-bold text-xs text-slate-900">Real<br />Impact</div>
            </div>
          </div>

          <div>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all"
            >
              <span>More About Me</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Mountain Sunset Visual Column with Hand-written notes */}
        <div className="lg:col-span-6 relative">
          {/* Top Right Handwriting Doodle */}
          <div className="absolute -top-6 -right-2 z-20 font-handwriting text-slate-800 text-lg sm:text-xl font-bold rotate-[4deg] select-none text-right">
            Build<br />Learn<br />Improve<br />Repeat <span className="text-amber-500">⚡</span>
          </div>

          {/* Floating ambient glow */}
          <div className="absolute -inset-3 bg-gradient-to-r from-amber-400/20 via-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl -z-10 pointer-events-none"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-slate-950 group">
            <img
              src={HERO_IMAGES.mountainSunset}
              alt="Cinematic young developer working on laptop overlooking sunset mountain view"
              className="w-full h-80 sm:h-96 object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Bottom Left Handwriting Callout overlay */}
            <div className="absolute bottom-4 left-6 z-20 font-handwriting text-white text-xl sm:text-2xl font-bold rotate-[-4deg] drop-shadow-md">
              Some Better Solutions ✨
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
