import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Check, Copy } from 'lucide-react';
import { HERO_IMAGES } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mukil@example.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="scroll-mt-24 space-y-8" id="contact">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950">
        {/* Golden Mountain Sunrise Developer Background Image */}
        <img
          src={HERO_IMAGES.sunriseBanner}
          alt="Cinematic silhouette of a traveler or developer watching golden sunrise"
          className="w-full h-[520px] sm:h-[500px] object-cover object-center"
        />

        {/* Dark and warm golden gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent"></div>

        {/* Handwriting Note Overlay top right */}
        <div className="absolute top-6 right-8 z-20 font-handwriting text-amber-300 text-xl sm:text-2xl font-bold rotate-[6deg] drop-shadow-lg text-right hidden sm:block">
          Good Code<br />Better Future ✨
        </div>

        {/* Inner Content Overlay */}
        <div className="absolute inset-0 z-20 p-6 sm:p-10 flex flex-col justify-end max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest">
            <span className="w-2 h-0.5 bg-amber-400"></span>
            Have an idea?
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-display">
            Let's Build <br />
            <span className="text-amber-400">Something Amazing.</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed max-w-lg">
            I'm always open to discussing new opportunities, interesting projects, or just a friendly chat about technology and the AI revolution.
          </p>

          {/* Quick Contact Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="mailto:mukil@example.com"
              className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-transform active:scale-95"
            >
              <Mail className="w-4 h-4 text-slate-800" />
              <span>Email Me</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm px-4 py-3 rounded-full backdrop-blur transition-all"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied Email!' : 'mukil@example.com'}</span>
            </button>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 font-bold text-xs sm:text-sm px-4 py-3 rounded-full backdrop-blur transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 font-bold text-xs sm:text-sm px-4 py-3 rounded-full backdrop-blur transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Contact Form Card */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-card">
        <h3 className="text-xl font-black text-slate-950 font-display mb-2">Send a Direct Message</h3>
        <p className="text-xs text-slate-500 mb-4 font-medium">
          Fill out the form below and I will respond to your email within 24 hours.
        </p>

        {status === 'success' ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fadeIn">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>Thank you! Your message has been sent successfully to Mukil.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
              <textarea
                required
                rows={3}
                placeholder="Hi Mukil, I'd like to discuss a React / Next.js / AI project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-full shadow-md transition-all active:scale-95 disabled:opacity-50"
            >
              {status === 'sending' ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
