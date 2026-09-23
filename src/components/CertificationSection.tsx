import React, { useState } from 'react';
import { ArrowRight, Globe, CheckCircle, ShieldCheck, X } from 'lucide-react';

export const CertificationSection: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <section className="scroll-mt-24 space-y-6" id="certifications">
      <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
        <span className="w-2 h-0.5 bg-blue-600"></span>
        Certification
        <span className="w-2 h-0.5 bg-blue-600"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Google Cloud Gen AI Card */}
        <div className="lg:col-span-8 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-card flex flex-col justify-between hover:border-blue-300 transition-colors">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-7 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-xl">
                🌐
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-950 leading-tight font-display">
                  Google Cloud Gen AI Academy
                </h3>
                <p className="text-xs text-blue-600 font-bold mt-0.5">APAC Edition Cohort 3</p>
              </div>

              <div className="text-xs text-slate-500 space-y-1">
                <div>Year: <span className="font-semibold text-slate-700">2026</span></div>
                <div className="text-[11px] font-mono bg-slate-100 px-2 py-1 rounded inline-block text-slate-600">
                  ID: 2026H2S09GCGENAIAPACC3-P01666
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 text-xs font-bold px-4 py-2 rounded-full transition-colors"
                >
                  <span>View Certificate Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Simulated Certificate Preview */}
            <div className="sm:col-span-5 bg-gradient-to-tr from-slate-50 to-blue-50/50 border border-blue-200/60 rounded-2xl p-4 shadow-sm text-center relative overflow-hidden">
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Credential</div>
              <div className="text-sm font-black text-slate-900 mt-1 font-display">Google Cloud</div>
              <div className="text-xs font-bold text-blue-600">Gen AI Academy</div>
              <div className="text-[10px] text-slate-500 mt-1">APAC Edition • Cohort 3</div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[9px] text-slate-400 font-medium">
                <span className="font-bold text-slate-800 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-blue-600" />
                  Google Verified
                </span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Learning Quote Card */}
        <div className="lg:col-span-4 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40 border border-blue-200/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-center text-center shadow-card">
          <div className="text-3xl mb-3">🌱</div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug font-display">
            Continuous Learning.<br />
            <span className="text-blue-600">Continuous Growth.</span>
          </h3>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            Embracing newest web protocols, LLM orchestration frameworks, and clean reactive state machines.
          </p>
        </div>
      </div>

      {/* Credential Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                G
              </div>
              <div>
                <h3 className="text-base font-black text-slate-950 font-display">Google Cloud Certification</h3>
                <p className="text-xs text-blue-600 font-bold">Gen AI Academy APAC Edition</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Recipient:</span>
                <span className="font-bold text-slate-900">Mukil Karupusamy</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Issuer:</span>
                <span className="font-bold text-slate-900">Google Cloud Training</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Cohort:</span>
                <span className="font-bold text-slate-900">APAC Cohort 3 (2026)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Credential ID:</span>
                <span className="font-mono font-bold text-blue-600 text-[11px]">2026H2S09GCGENAIAPACC3-P01666</span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-slate-200">
                <span className="text-slate-500">Status:</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Completed intensive curriculum covering Gemini multimodal models, prompt engineering, agentic architecture, server-side integration patterns, and enterprise RAG solutions.
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="bg-slate-900 text-white font-bold text-xs px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
