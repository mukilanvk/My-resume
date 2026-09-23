import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../data/portfolioData';
import { ProjectItem, OtherProjectItem } from '../types';

interface FeaturedProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onSelectOtherProject: (project: OtherProjectItem) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  onSelectProject,
  onSelectOtherProject,
}) => {
  return (
    <section className="scroll-mt-24 space-y-8" id="projects">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-1.5">
            <span className="w-2 h-0.5 bg-blue-600"></span>
            Featured Projects
            <span className="w-2 h-0.5 bg-blue-600"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
            Turning Ideas Into <span className="text-blue-600">Real Products</span>
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous Project"
            className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Next Project"
            className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <a href="#projects" className="ml-2 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
            View All Projects →
          </a>
        </div>
      </div>

      {/* 4 Project Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURED_PROJECTS.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm flex flex-col justify-between hover:shadow-card hover:border-blue-300 transition-all cursor-pointer group"
          >
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <span className={`text-3xl font-black font-display ${project.colorScheme === 'blue' || project.colorScheme === 'indigo' ? 'text-blue-600' : 'text-slate-950'}`}>
                  {project.number}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {project.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              {/* Card Mock Preview Representation */}
              {project.id === 'everest-tutoring' && (
                <div className="my-3 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-xl p-3 border border-blue-100 flex flex-col justify-center items-center h-28 text-center shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center mb-1 font-display">
                    ET
                  </div>
                  <span className="text-[11px] font-bold text-slate-800">{project.subtitle}</span>
                  <span className="text-[9px] text-slate-500">{project.badgeText}</span>
                </div>
              )}

              {project.id === 'moneypeechu' && (
                <div className="my-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-3 border border-amber-100 flex flex-col justify-center items-center h-28 text-center shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-orange-600 text-white font-black text-xs flex items-center justify-center mb-1 font-display">
                    MP
                  </div>
                  <span className="text-[11px] font-bold text-slate-800">{project.subtitle}</span>
                  <span className="text-[9px] text-slate-500">{project.badgeText}</span>
                </div>
              )}

              {project.id === 'personal-gemini-journal' && (
                <div className="my-3 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-3 border border-indigo-100 flex flex-col justify-center items-center h-28 text-center shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-xs flex items-center justify-center mb-1 font-display">
                    GJ
                  </div>
                  <span className="text-[11px] font-bold text-slate-800">{project.subtitle}</span>
                  <span className="text-[9px] text-slate-500">{project.badgeText}</span>
                </div>
              )}

              {project.id === 'badminton-scorer' && (
                <div className="my-3 bg-slate-900 text-white rounded-xl p-3 border border-slate-800 flex flex-col justify-center items-center h-28 text-center shadow-inner">
                  <div className="text-[9px] font-bold uppercase text-emerald-400 tracking-widest mb-1">
                    Match Point
                  </div>
                  <div className="flex items-center gap-3 font-mono">
                    <span className="text-2xl font-black text-emerald-400">21</span>
                    <span className="text-slate-500 text-sm font-bold">-</span>
                    <span className="text-2xl font-black text-amber-400">16</span>
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1">Live Scoreboard</span>
                </div>
              )}

              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {project.description}
              </p>

              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 my-3">
                {project.tags.map((tag, idx) => (
                  <React.Fragment key={tag}>
                    <span>{tag}</span>
                    {idx < project.tags.length - 1 && <span className="text-slate-300">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-800 pt-2 border-t border-slate-100">
              <span>Interactive Live Demo</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects Strip */}
      <div className="space-y-2 pt-2">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Other Projects</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {OTHER_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectOtherProject(proj)}
              className="bg-white border border-slate-200/90 rounded-xl p-3 flex items-center gap-2.5 shadow-xs hover:border-blue-300 hover:shadow-card transition-all cursor-pointer group"
            >
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 group-hover:scale-110 transition-transform">
                {proj.icon}
              </span>
              <div className="overflow-hidden">
                <div className="text-xs font-bold text-slate-900 leading-tight truncate group-hover:text-blue-600 transition-colors">
                  {proj.title}
                </div>
                <div className="text-[10px] text-slate-400 truncate">{proj.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
