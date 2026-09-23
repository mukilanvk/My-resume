import React, { useState } from 'react';
import { Users, GraduationCap, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [role, setRole] = useState<'Admin' | 'Tutor' | 'Student'>('Admin');
  const [selectedMonth, setSelectedMonth] = useState<number>(5); // Sep
  const [classes, setClasses] = useState([
    { id: '1', title: 'Math - Grade 10', subtitle: 'Algebra Prep', time: '10:00 AM', status: 'Upcoming', teacher: 'Dr. Sarah Smith' },
    { id: '2', title: 'Physics - Grade 12', subtitle: 'Optics & Wave', time: '12:00 PM', status: 'Upcoming', teacher: 'Prof. Mukil' },
    { id: '3', title: 'Practice Test', subtitle: 'Mock 03 Exam', time: '03:00 PM', status: 'Completed', teacher: 'Automated AI' },
  ]);

  const toggleClassStatus = (id: string) => {
    setClasses((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: c.status === 'Completed' ? 'Upcoming' : 'Completed' } : c
      )
    );
  };

  const growthHeights = [30, 45, 40, 60, 75, 95, 85];
  const months = ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov', 'Dec'];

  return (
    <section className="scroll-mt-24 space-y-6" id="experience">
      <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
        <span className="w-2 h-0.5 bg-blue-600"></span>
        Experience
        <span className="w-2 h-0.5 bg-blue-600"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-card">
        {/* Left Job Description */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md font-display">
                A
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-950 font-display">Aagnia Technology</h3>
                <p className="text-xs font-bold text-blue-600">Full Stack Developer</p>
              </div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-slate-100 rounded-full text-slate-600 shrink-0">
              May 2025 - Present
            </span>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            Working on Everest Tutoring, a multi-domain e-learning platform supporting administration, tutors, and students with exams, classes, study materials, and real-time live performance analytics.
          </p>

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-lg border border-blue-200/60">⚛ React</span>
            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-lg border border-blue-200/60">TS TypeScript</span>
            <span className="px-2.5 py-1 bg-purple-50 text-purple-700 text-[11px] font-bold rounded-lg border border-purple-200/60">⚡ Vite</span>
            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-lg border border-blue-200/60">MUI Material UI</span>
            <span className="px-2.5 py-1 bg-sky-50 text-sky-700 text-[11px] font-bold rounded-lg border border-sky-200/60">🛡 PrimeReact</span>
            <span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-[11px] font-bold rounded-lg border border-amber-200/60">🐍 Python</span>
            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-lg border border-emerald-200/60">⚡ FastAPI</span>
            <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-[11px] font-bold rounded-lg border border-indigo-200/60">🐘 PostgreSQL</span>
          </div>
        </div>

        {/* Right: Everest Tutoring Platform Interactive Dashboard UI Preview */}
        <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-inner">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="font-bold text-slate-800">Everest Tutoring</span>
              <span className="text-slate-400">/ Live Interactive View</span>
            </div>
            
            {/* Interactive Role Switcher */}
            <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-xs">
              {(['Admin', 'Tutor', 'Student'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                    role === r ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Role-Based Dashboard Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 my-3">
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
              <div className="text-[11px] text-slate-500 font-medium flex items-center justify-between">
                <span>{role === 'Student' ? 'My Exams' : role === 'Tutor' ? 'My Students' : 'Total Students'}</span>
                <Users className="w-3.5 h-3.5 text-blue-500" />
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5 font-display">
                {role === 'Student' ? '18 / 20' : role === 'Tutor' ? '124' : '1,240'}
              </div>
              <span className="text-[9px] text-emerald-600 font-bold">+15% this mo.</span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
              <div className="text-[11px] text-slate-500 font-medium flex items-center justify-between">
                <span>{role === 'Student' ? 'Avg Score' : role === 'Tutor' ? 'Hours Taught' : 'Active Tutors'}</span>
                <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5 font-display">
                {role === 'Student' ? '94.2%' : role === 'Tutor' ? '142 hrs' : '48'}
              </div>
              <span className="text-[9px] text-blue-600 font-bold">
                {role === 'Student' ? 'Top 5%' : role === 'Tutor' ? '98% rating' : '24 Online'}
              </span>
            </div>

            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 transition-colors">
              <div className="text-[11px] text-slate-500 font-medium flex items-center justify-between">
                <span>{role === 'Student' ? 'Study Materials' : role === 'Tutor' ? 'Assignments' : 'Total Classes'}</span>
                <BookOpen className="w-3.5 h-3.5 text-purple-500" />
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5 font-display">
                {role === 'Student' ? '45 Docs' : role === 'Tutor' ? '28 Active' : '320'}
              </div>
              <span className="text-[9px] text-purple-600 font-bold">In 2026</span>
            </div>
          </div>

          {/* Interactive Chart & Upcoming Classes Schedule */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {/* Interactive Bar Chart */}
            <div className="bg-white p-3 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                <span>Growth & Analytics</span>
                <span className="text-[10px] text-blue-600 font-medium">Selected: {months[selectedMonth]}</span>
              </div>
              <div className="flex items-end justify-between h-24 gap-1.5 pt-2 px-1">
                {growthHeights.map((h, i) => (
                  <button
                    type="button"
                    key={i}
                    onClick={() => setSelectedMonth(i)}
                    aria-label={`Select month ${months[i]}`}
                    className={`w-full rounded-t transition-all cursor-pointer relative group ${
                      selectedMonth === i ? 'bg-blue-600 shadow-xs' : 'bg-blue-100 hover:bg-blue-300'
                    }`}
                    style={{ height: `${h}%` }}
                    title={`${months[i]}: ${h * 15} sessions`}
                  >
                    <span className="sr-only">{months[i]}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-100 font-mono">
                {months.map((m, i) => (
                  <span
                    key={m}
                    className={`cursor-pointer ${selectedMonth === i ? 'text-blue-600 font-bold' : ''}`}
                    onClick={() => setSelectedMonth(i)}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Upcoming Schedule List */}
            <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  Upcoming Classes
                </span>
                <span className="text-[9px] text-slate-400">Click to toggle done</span>
              </div>

              {classes.map((c) => (
                <div
                  key={c.id}
                  onClick={() => toggleClassStatus(c.id)}
                  className={`flex items-center justify-between text-xs p-1.5 rounded-lg border transition-all cursor-pointer ${
                    c.status === 'Completed' ? 'bg-emerald-50/60 border-emerald-200/80' : 'bg-slate-50/60 border-slate-100 hover:border-blue-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${
                        c.status === 'Completed' ? 'text-emerald-600 fill-emerald-100' : 'text-slate-300'
                      }`}
                    />
                    <div>
                      <div className={`font-bold text-[11px] ${c.status === 'Completed' ? 'line-through text-slate-500' : 'text-slate-800'}`}>
                        {c.title}
                      </div>
                      <div className="text-[10px] text-slate-400">{c.subtitle} • {c.teacher}</div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold shrink-0 ${c.status === 'Completed' ? 'text-emerald-600' : 'text-blue-600'}`}>
                    {c.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
