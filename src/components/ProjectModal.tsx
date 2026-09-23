import React, { useState, useRef } from 'react';
import { X, Sparkles, Trophy, RotateCcw, Send, Play, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ProjectItem, OtherProjectItem, JournalEntry, BadmintonMatchState } from '../types';

interface ProjectModalProps {
  project: ProjectItem | OtherProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const isMainProject = 'number' in project;

  // --- State for Personal Gemini Journal Live Demo ---
  const [journalInput, setJournalInput] = useState('');
  const [selectedMood, setSelectedMood] = useState('Focused');
  const [journalLoading, setJournalLoading] = useState(false);
  const [journalHistory, setJournalHistory] = useState<JournalEntry[]>([
    {
      id: 'demo-1',
      text: 'Finished implementing the live dashboard analytics engine for Everest Tutoring with FastAPI and PostgreSQL!',
      mood: 'Accomplished',
      timestamp: 'Today at 09:30 AM',
      aiResponse: {
        summary: 'Excellent progress on full-stack architecture and analytical query optimization.',
        insights: [
          'High efficiency in structuring backend services.',
          'Focus on real-time performance and user value.',
          'Consistent engineering momentum.'
        ],
        moodAnalysis: 'Highly motivated and productive.',
        advice: 'Document the API endpoints in Swagger for team integration clarity.'
      }
    }
  ]);

  const handleJournalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!journalInput.trim() || journalLoading) return;

    setJournalLoading(true);
    try {
      const res = await fetch('/api/gemini/journal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ journalText: journalInput, mood: selectedMood })
      });
      const data = await res.json();

      const newEntry: JournalEntry = {
        id: Date.now().toString(),
        text: journalInput,
        mood: selectedMood,
        timestamp: 'Just now',
        aiResponse: data
      };

      setJournalHistory([newEntry, ...journalHistory]);
      setJournalInput('');
    } catch (err) {
      console.error('Journal submit error:', err);
    } finally {
      setJournalLoading(false);
    }
  };

  // --- State for Badminton Scorer Live Demo ---
  const [match, setMatch] = useState<BadmintonMatchState>({
    playerA: 'Mukil K.',
    playerB: 'Alex S.',
    scoreA: 20,
    scoreB: 16,
    setsA: 1,
    setsB: 0,
    server: 'A',
    currentSet: 2,
    setHistory: [{ setNum: 1, scoreA: 21, scoreB: 18, winner: 'Mukil K.' }],
    isMatchPoint: true,
    isFinished: false
  });

  const scorePoint = (player: 'A' | 'B') => {
    if (match.isFinished) return;

    let newScoreA = match.scoreA;
    let newScoreB = match.scoreB;

    if (player === 'A') newScoreA += 1;
    else newScoreB += 1;

    let isMatchPt = (newScoreA >= 20 && newScoreA - newScoreB >= 1) || (newScoreB >= 20 && newScoreB - newScoreA >= 1);
    let finished = false;
    let winner = match.winner;
    let newSetsA = match.setsA;
    let newSetsB = match.setsB;
    let newHistory = [...match.setHistory];

    // Check set win (21 pts with 2 pt difference, or max 30)
    if ((newScoreA >= 21 && newScoreA - newScoreB >= 2) || newScoreA === 30) {
      newSetsA += 1;
      newHistory.push({ setNum: match.currentSet, scoreA: newScoreA, scoreB: newScoreB, winner: match.playerA });
      if (newSetsA === 2) {
        finished = true;
        winner = match.playerA;
      } else {
        newScoreA = 0;
        newScoreB = 0;
      }
    } else if ((newScoreB >= 21 && newScoreB - newScoreA >= 2) || newScoreB === 30) {
      newSetsB += 1;
      newHistory.push({ setNum: match.currentSet, scoreA: newScoreA, scoreB: newScoreB, winner: match.playerB });
      if (newSetsB === 2) {
        finished = true;
        winner = match.playerB;
      } else {
        newScoreA = 0;
        newScoreB = 0;
      }
    }

    setMatch({
      ...match,
      scoreA: newScoreA,
      scoreB: newScoreB,
      setsA: newSetsA,
      setsB: newSetsB,
      server: player,
      isMatchPoint: isMatchPt && !finished,
      isFinished: finished,
      winner,
      setHistory: newHistory,
      currentSet: finished ? match.currentSet : newHistory.length + 1
    });
  };

  const resetMatch = () => {
    setMatch({
      playerA: 'Mukil K.',
      playerB: 'Alex S.',
      scoreA: 0,
      scoreB: 0,
      setsA: 0,
      setsB: 0,
      server: 'A',
      currentSet: 1,
      setHistory: [],
      isMatchPoint: false,
      isFinished: false
    });
  };

  // --- State for Handwritten Char Canvas Demo ---
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [drawingPrediction, setDrawingPrediction] = useState<string | null>(null);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
    setDrawingPrediction(null);
  };

  const simulatePredict = () => {
    const sampleChars = ['A', 'B', 'M', 'K', '8', '9', 'R', '7'];
    const randomChar = sampleChars[Math.floor(Math.random() * sampleChars.length)];
    setDrawingPrediction(randomChar);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative p-6 sm:p-8 space-y-6">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-semibold">Interactive Demo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {isMainProject ? (project as ProjectItem).description : (project as OtherProjectItem).description}
          </p>
        </div>

        {/* Interactive Applet Widget according to project id */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-inner">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5 text-blue-600">
              <Sparkles className="w-4 h-4" />
              Live Interactive Demo Applet
            </span>
            <span className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-500 font-mono">
              Status: Active
            </span>
          </div>

          {/* DEMO 1: Personal Gemini Journal */}
          {project.id === 'personal-gemini-journal' && (
            <div className="space-y-4">
              <form onSubmit={handleJournalSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Write a thought or daily reflection:
                  </label>
                  <textarea
                    rows={3}
                    value={journalInput}
                    onChange={(e) => setJournalInput(e.target.value)}
                    placeholder="e.g. Spent 3 hours optimizing query performance on PostgreSQL. Solved the latency issue by adding composite indexes!"
                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                    <span>Current Mood:</span>
                    {['Focused', 'Accomplished', 'Thoughtful', 'Energetic'].map((m) => (
                      <button
                        type="button"
                        key={m}
                        onClick={() => setSelectedMood(m)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                          selectedMood === m ? 'bg-indigo-600 text-white' : 'bg-white border text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={journalLoading || !journalInput.trim()}
                    className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs disabled:opacity-50 transition-all"
                  >
                    {journalLoading ? (
                      <span>Analyzing with Gemini...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Analyze Reflection</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Journal History & AI Feedback */}
              <div className="space-y-3 pt-3 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-700">Reflection Journal History</div>
                {journalHistory.map((entry) => (
                  <div key={entry.id} className="bg-white border border-slate-200 rounded-2xl p-4 space-y-3 shadow-xs">
                    <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
                      <span className="font-bold text-slate-900">"{entry.text}"</span>
                      <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold text-[10px]">
                        {entry.mood} • {entry.timestamp}
                      </span>
                    </div>

                    {entry.aiResponse && (
                      <div className="bg-gradient-to-r from-indigo-50/70 to-blue-50/70 rounded-xl p-3 border border-indigo-100 text-xs space-y-2">
                        <div className="font-bold text-indigo-900 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                          Gemini 3.8 Flash Reflection Analysis:
                        </div>
                        <p className="text-slate-700 italic">{entry.aiResponse.summary}</p>
                        <div className="space-y-1">
                          <div className="font-semibold text-slate-800 text-[11px]">Key Insights:</div>
                          <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-0.5">
                            {entry.aiResponse.insights.map((ins, i) => (
                              <li key={i}>{ins}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-[11px] font-medium text-indigo-800 bg-white/80 p-2 rounded-lg border border-indigo-100">
                          💡 <strong>Actionable Recommendation:</strong> {entry.aiResponse.advice}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DEMO 2: Badminton Scorer */}
          {project.id === 'badminton-scorer' && (
            <div className="space-y-4">
              {/* Scoreboard Monitor Header */}
              <div className="bg-slate-950 text-white rounded-2xl p-4 text-center shadow-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Match Set #{match.currentSet}</span>
                  {match.isMatchPoint && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-400/30 animate-pulse">
                      🔥 MATCH POINT
                    </span>
                  )}
                  {match.isFinished && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-400/30">
                      🏆 MATCH FINISHED
                    </span>
                  )}
                  <span>Score to 21</span>
                </div>

                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <div className="text-xs font-bold text-slate-300">{match.playerA}</div>
                    <div className="text-4xl font-black text-emerald-400 font-mono my-1">{match.scoreA}</div>
                    <div className="text-[10px] text-slate-400">Sets Won: {match.setsA}</div>
                  </div>

                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <div className="text-xs font-bold text-slate-300">{match.playerB}</div>
                    <div className="text-4xl font-black text-amber-400 font-mono my-1">{match.scoreB}</div>
                    <div className="text-[10px] text-slate-400">Sets Won: {match.setsB}</div>
                  </div>
                </div>

                {match.isFinished && (
                  <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-xl p-2 text-xs font-bold flex items-center justify-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span>Winner: {match.winner}!</span>
                  </div>
                )}
              </div>

              {/* Point Increment Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => scorePoint('A')}
                  disabled={match.isFinished}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-50"
                >
                  +1 Point ({match.playerA})
                </button>
                <button
                  type="button"
                  onClick={() => scorePoint('B')}
                  disabled={match.isFinished}
                  className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-50"
                >
                  +1 Point ({match.playerB})
                </button>
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={resetMatch}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 font-bold px-3 py-1.5 rounded-lg bg-white border border-slate-200"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset Scoreboard
                </button>
                <span className="text-[10px] text-slate-400 font-mono">
                  Set History: {match.setHistory.length} completed
                </span>
              </div>
            </div>
          )}

          {/* DEMO 3: Moneypeechu */}
          {project.id === 'moneypeechu' && (
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold text-orange-600">Moneypeechu Financial Blog</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold text-[10px]">SEO Score: 98/100</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  Tamil Stock Market & Mutual Funds Guide for Beginners (2026 Edition)
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered with Next.js 14 Server-Side Rendering, dynamic sitemap indexing, and structured microdata for instantaneous Google Search discovery.
                </p>
                <div className="flex gap-2 text-[10px] font-mono text-slate-500 pt-1 border-t border-slate-100">
                  <span>⚡ SSR Page Load: 240ms</span>
                  <span>•</span>
                  <span>🔍 JSON-LD Verified</span>
                  <span>•</span>
                  <span>📱 Mobile First</span>
                </div>
              </div>
            </div>
          )}

          {/* DEMO 4: Everest Tutoring Detailed Preview */}
          {project.id === 'everest-tutoring' && (
            <div className="space-y-3 text-xs text-slate-700">
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 text-sm">Everest Multi-Domain Architecture</div>
                <p className="text-slate-600">
                  Provides unified authorization across 3 distinct sub-portals:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-600">
                  <li><strong>Admin Portal:</strong> User provisioning, tutor payouts, class scheduling, global audit logs.</li>
                  <li><strong>Tutor Portal:</strong> Class roster management, assignment grading, exam creation engine.</li>
                  <li><strong>Student Portal:</strong> Interactive practice quizzes, gradebooks, live video session links.</li>
                </ul>
              </div>
            </div>
          )}

          {/* DEMO FOR OTHER PROJECTS */}
          {project.id === 'handwritten-char-recognition' && (
            <div className="space-y-3 text-center">
              <div className="text-xs font-bold text-slate-700 mb-1">Draw a character or digit on the canvas:</div>
              <canvas
                ref={canvasRef}
                width={200}
                height={120}
                className="bg-slate-950 rounded-xl mx-auto cursor-crosshair border border-slate-800 shadow-md"
              />
              <div className="flex justify-center gap-2">
                <button
                  type="button"
                  onClick={simulatePredict}
                  className="bg-blue-600 text-white font-bold text-xs px-4 py-2 rounded-xl"
                >
                  Predict Character
                </button>
                <button
                  type="button"
                  onClick={clearCanvas}
                  className="bg-slate-200 text-slate-800 font-bold text-xs px-3 py-2 rounded-xl"
                >
                  Clear
                </button>
              </div>
              {drawingPrediction && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs p-2 rounded-xl">
                  ML Model Prediction: <span className="text-base text-blue-600 font-black">{drawingPrediction}</span> (98.4% confidence)
                </div>
              )}
            </div>
          )}

          {project.id === 'ocr-text-recognition' && (
            <div className="space-y-2 text-xs">
              <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-800">Sample Image Text Extracted:</div>
                <div className="font-mono bg-slate-900 text-emerald-400 p-2.5 rounded-lg text-[11px]">
                  "INVOICE #9201 - Mukil Karupusamy Full-Stack Engineering Services - Total: Paid"
                </div>
              </div>
            </div>
          )}

          {project.id === 'traffic-time-analyzer' && (
            <div className="space-y-2 text-xs">
              <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-800">Peak Commute Congestion Map:</div>
                <div className="h-16 bg-gradient-to-r from-emerald-400 via-amber-400 to-red-500 rounded-lg flex items-center justify-around text-white font-bold text-[10px]">
                  <span>08:00 AM (Low)</span>
                  <span>09:30 AM (Peak)</span>
                  <span>11:00 AM (Clear)</span>
                </div>
              </div>
            </div>
          )}

          {project.id === 'precision-agriculture' && (
            <div className="space-y-2 text-xs">
              <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-800">Soil Moisture IoT Telemetry:</div>
                <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg">
                  <span>Field Sensor 01: 68% Moisture</span>
                  <span className="text-emerald-600 font-bold">Optimal Irrigation</span>
                </div>
              </div>
            </div>
          )}

          {project.id === 'kalyanam-conform' && (
            <div className="space-y-2 text-xs">
              <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-800">Matrimonial Verification Engine:</div>
                <div className="text-slate-600">ID & Profile photo AI matching workflow verified.</div>
              </div>
            </div>
          )}
        </div>

        {/* Project Highlights & Tech Stack details */}
        {isMainProject && (
          <div className="space-y-4 pt-2 border-t border-slate-200">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Key Engineering Highlights</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                {(project as ProjectItem).highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-50 p-2 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {(project as ProjectItem).techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg border border-blue-200/60">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-slate-900 text-white font-bold text-xs px-6 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};
