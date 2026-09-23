import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const resumeText = `MUKIL KARUPUSAMY
Full-Stack & AI Developer | React.js | Next.js | Python
Email: mukil@example.com | Location: Tamil Nadu, India

SUMMARY
Full-Stack Developer with 2.5+ years of experience building scalable web applications, real-time analytics engines, and AI integrations. Proficient in React.js, Next.js, TypeScript, Python, FastAPI, PostgreSQL, MongoDB, and Google Cloud Generative AI tools.

EXPERIENCE
Full Stack Developer | Aagnia Technology (May 2025 - Present)
- Developing 'Everest Tutoring', a multi-domain e-learning platform supporting admins, tutors, and students.
- Engineered real-time class scheduling, exam attempt engines, and student progress dashboard analytics.
- Built backend APIs with Python, FastAPI, and PostgreSQL with optimized query execution.

KEY PROJECTS
1. Everest Tutoring (React, TypeScript, FastAPI, PostgreSQL)
2. Moneypeechu (Next.js 14, React, Tailwind CSS, SEO JSON-LD)
3. Personal Gemini Journal (Generative AI, Gemini 3.8 Flash, Firebase)
4. Badminton Scorer (React, PWA, Live Match Tracking)

CERTIFICATIONS & EDUCATION
- Google Cloud Gen AI Academy APAC Edition Cohort 3 (2026)
  Credential ID: 2026H2S09GCGENAIAPACC3-P01666

SKILLS
Frontend: React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Material UI, PrimeReact, Vite
Backend & DB: Node.js, Python, FastAPI, PostgreSQL, MongoDB, Firebase, Cloud Firestore
AI & Cloud: Gemini API, Google Cloud Platform, AI Agents, RAG Architecture`;

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([resumeText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Mukil_Karupusamy_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8 space-y-6">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-950 font-display">Mukil Karupusamy — Resume</h2>
              <p className="text-xs text-blue-600 font-bold">React.js & Next.js Full-Stack Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3 py-2 rounded-full transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="space-y-6 text-xs text-slate-700 leading-relaxed">
          {/* Summary */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-blue-600" />
              Professional Summary
            </div>
            <p className="font-medium text-slate-600">
              Full-Stack Developer with 2.5+ years of experience building scalable web applications, real-time analytics engines, and AI integrations. Proficient in React.js, Next.js, TypeScript, Python, FastAPI, PostgreSQL, MongoDB, and Google Cloud Generative AI tools.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-2">
            <div className="font-black text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 font-display">
              <Briefcase className="w-4 h-4 text-blue-600" />
              Work Experience
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2 shadow-xs">
              <div className="flex items-center justify-between font-bold">
                <span className="text-slate-900 text-sm">Full Stack Developer — Aagnia Technology</span>
                <span className="text-blue-600 text-[11px]">May 2025 - Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600 font-medium">
                <li>Developing 'Everest Tutoring', a multi-domain e-learning platform supporting admins, tutors, and students.</li>
                <li>Engineered real-time class scheduling, exam attempt engines, and student progress dashboard analytics.</li>
                <li>Built backend REST APIs with Python, FastAPI, and PostgreSQL with optimized query execution.</li>
              </ul>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-2">
            <div className="font-black text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 font-display">
              <Award className="w-4 h-4 text-blue-600" />
              Key Projects
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900">Everest Tutoring</div>
                <div className="text-[11px] text-slate-500">React, TypeScript, FastAPI, PostgreSQL</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900">Moneypeechu</div>
                <div className="text-[11px] text-slate-500">Next.js 14, React, Tailwind, SEO JSON-LD</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900">Personal Gemini Journal</div>
                <div className="text-[11px] text-slate-500">Generative AI, Gemini 3.8 Flash, Firebase</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900">Badminton Scorer</div>
                <div className="text-[11px] text-slate-500">React, PWA, Live Match Scoreboard</div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <div className="font-black text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 font-display">
              <GraduationCap className="w-4 h-4 text-blue-600" />
              Certifications & Credentials
            </div>
            <div className="bg-blue-50/70 border border-blue-200 p-4 rounded-2xl flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Google Cloud Gen AI Academy</div>
                <div className="text-[11px] text-blue-700 font-semibold">APAC Edition Cohort 3 (2026)</div>
              </div>
              <span className="font-mono text-[10px] bg-white border border-blue-200 px-2 py-1 rounded text-slate-600 font-bold">
                ID: 2026H2S09GCGENAIAPACC3-P01666
              </span>
            </div>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-slate-900 text-white font-bold text-xs px-6 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
};
