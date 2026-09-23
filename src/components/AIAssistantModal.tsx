import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot, User } from 'lucide-react';
import { ChatMessage } from '../types';
import { HERO_IMAGES } from '../data/portfolioData';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hello! I'm Mukil's AI Assistant powered by Google Gemini 3.8 Flash. I can answer questions about Mukil Karupusamy's engineering background, work at Aagnia Technology, portfolio projects, or technical skills. What would you like to know?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, chatHistory: messages })
      });
      const data = await res.json();

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.reply || "I'm happy to tell you more about Mukil's projects and skills!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error('AI Assistant Error:', err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: "Mukil is a Full-Stack Developer with 2.5+ years of experience in React, Next.js, TypeScript, Python, and FastAPI. Feel free to contact him directly at mukil@example.com!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  const samplePrompts = [
    "Tell me about Mukil's experience at Aagnia Technology",
    "What projects has Mukil built with React & Next.js?",
    "What are Mukil's core technical skills?",
    "How can I contact Mukil for a job or project?"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full h-[85vh] flex flex-col shadow-2xl border border-slate-200 relative overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-blue-950 text-white p-4 sm:p-5 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 p-0.5 shadow-md">
              <img
                src={HERO_IMAGES.aiRobot}
                alt="Mukil AI Avatar"
                className="w-full h-full object-cover rounded-full bg-slate-900"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-900 animate-pulse" />
            </div>
            <div>
              <div className="font-bold text-sm font-display flex items-center gap-1.5">
                <span>Mukil's AI Agent</span>
                <span className="text-[10px] bg-blue-500/30 text-blue-300 border border-blue-400/30 px-2 py-0.2 rounded-full font-mono">
                  Gemini 3.8
                </span>
              </div>
              <div className="text-[11px] text-slate-300 font-medium">Interactive Portfolio Representative</div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message History Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gradient-to-tr from-slate-900 to-indigo-900 text-amber-300'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none font-medium'
                    : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-none font-medium'
                }`}
              >
                <p>{msg.text}</p>
                <div
                  className={`text-[9px] mt-1 font-mono ${
                    msg.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium italic animate-pulse pl-10">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-spin" />
              <span>Mukil's AI is thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Sample Prompt Chips */}
        <div className="px-4 py-2 bg-white border-t border-slate-200/80 flex items-center gap-2 overflow-x-auto text-[11px] font-semibold text-slate-600">
          <span className="text-slate-400 font-bold shrink-0">Try asking:</span>
          {samplePrompts.map((p, i) => (
            <button
              key={i}
              onClick={() => handleSend(p)}
              className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-slate-200/60 shrink-0 transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Chat Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Mukil's skills, projects, or background..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="w-10 h-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-md transition-transform active:scale-95 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
