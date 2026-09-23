import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(express.json({ limit: '2mb' }));

const PORT = parseInt(process.env.PORT || '3000', 10);

// Initialize Gemini SDK with telemetry header
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Endpoint: Personal Gemini Journal Reflection AI
app.post('/api/gemini/journal', async (req: Request, res: Response) => {
  try {
    const { journalText, mood } = req.body || {};
    if (!journalText || typeof journalText !== 'string' || !journalText.trim()) {
      return res.status(400).json({ error: 'Journal text is required.' });
    }

    // Fallback if AI SDK is not configured
    if (!ai) {
      return res.json({
        summary: `Reflected on your thought regarding "${journalText.slice(0, 40)}..."`,
        insights: [
          'Strong self-awareness and focus on personal progress.',
          'Alignment with engineering growth mindset and problem solving.',
          'Consistently building momentum towards technical goals.'
        ],
        moodAnalysis: mood ? `Identified mood state: ${mood}. Positively aligned.` : 'Reflective and thoughtful tone detected.',
        advice: 'Continue capturing daily wins, breaking down complex tasks into smaller sub-components, and maintaining steady iteration habits.',
        isFallback: true,
      });
    }

    const prompt = `Analyze this journal reflection entry written by a user.
Journal Entry: "${journalText.slice(0, 2000)}"
User Stated Mood: ${mood || 'Not specified'}

Provide a JSON object response with:
1. "summary": A warm, encouraging 1-2 sentence summary of their reflection.
2. "insights": An array of 3 actionable key insights or observations about their thought pattern or goal.
3. "moodAnalysis": A concise analysis of their emotional or psychological state.
4. "advice": 1 practical recommendation or mental framework to help them succeed.

Response must strictly be valid JSON format.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.7,
      },
    });

    const textOutput = response.text || '';
    let parsedData;
    try {
      parsedData = JSON.parse(textOutput);
    } catch {
      parsedData = {
        summary: textOutput.slice(0, 150) || 'Thank you for journaling today!',
        insights: ['Great self-reflection moment.', 'Clear focus on growth.', 'Action-oriented perspective.'],
        moodAnalysis: 'Thoughtful and constructive mindset.',
        advice: 'Keep writing down your ideas and taking small daily steps.',
      };
    }

    return res.json(parsedData);
  } catch (error: any) {
    console.error('Gemini Journal API Error:', error?.message || error);
    return res.status(500).json({
      error: 'Failed to process journal reflection with AI.',
      summary: 'Processed entry locally due to temporary connectivity.',
      insights: ['Continuous learning mindset.', 'Adaptability under pressure.', 'Focus on execution.'],
      moodAnalysis: 'Determined and reflective.',
      advice: 'Stay consistent with your daily reflection routine!',
      isFallback: true,
    });
  }
});

// Endpoint: Mukil's AI Twin Assistant Chatbot
app.post('/api/gemini/chat', async (req: Request, res: Response) => {
  try {
    const { message, chatHistory } = req.body || {};
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Message text is required.' });
    }

    const systemInstruction = `You are "Mukil's AI Assistant", an intelligent AI representation of Mukil Karupusamy, a React.js & Next.js Full-Stack Developer with 2.5+ years of experience.

Mukil's Profile Details:
- Name: Mukil Karupusamy
- Role: Full-Stack Developer (React, Next.js, TypeScript, Python, FastAPI, PostgreSQL, MongoDB, Firebase)
- Current Experience: Full Stack Developer at Aagnia Technology (May 2025 - Present), working on "Everest Tutoring", a multi-domain e-learning platform supporting administration, tutors, and students with exams, classes, study materials, and real-time live performance analytics.
- Key Projects:
  1. Everest Tutoring (E-Learning platform - React, TS, FastAPI, PostgreSQL)
  2. Moneypeechu (Financial blog & news website built with Next.js 14 and SEO optimization)
  3. Personal Gemini Journal (Generative AI reflection app with Firebase and Gemini API)
  4. Badminton Scorer (Real-time badminton scoring PWA application with match points and sets tracking)
  5. Kalyanam Conform (Weddings web app)
  6. OCR Text Recognition (Computer vision text extraction tool)
  7. Handwritten Character Recognition (ML model)
  8. Traffic Time Analyzer & Precision Agriculture (AI / IoT)
- Certification: Google Cloud Gen AI Academy APAC Edition Cohort 3 (2026, Credential ID: 2026H2S09GCGENAIAPACC3-P01666)
- Tone: Professional, friendly, confident, technological, concise, and helpful.
- Goal: Answer questions about Mukil's background, technical stack, projects, work experience, availability, and engineering philosophy. Always answer in first/third person as Mukil's representative. Keep responses engaging and around 2-4 sentences unless detailed code or lists are requested.`;

    if (!ai) {
      // Fallback assistant response
      const lowerMsg = message.toLowerCase();
      let reply = "I'm Mukil's AI assistant! Mukil is a Full-Stack Developer specializing in React.js, Next.js, TypeScript, Python, FastAPI, and AI integrations. Feel free to ask about his work on Everest Tutoring, Moneypeechu, or his Google Cloud Gen AI certification!";
      if (lowerMsg.includes('experience') || lowerMsg.includes('aagnia') || lowerMsg.includes('everest')) {
        reply = "Mukil has 2.5+ years of full-stack engineering experience. Currently at Aagnia Technology, he builds 'Everest Tutoring' — a comprehensive e-learning platform with multi-tenant roles for admins, tutors, and students, featuring real-time analytics, exam engines, and class scheduling.";
      } else if (lowerMsg.includes('project') || lowerMsg.includes('work') || lowerMsg.includes('portfolio')) {
        reply = "Mukil has built over 10+ projects including Everest Tutoring (E-learning portal), Moneypeechu (Next.js SEO financial blog), Personal Gemini Journal (Generative AI reflection tool), and Badminton Scorer (Real-time PWA scoreboard).";
      } else if (lowerMsg.includes('skill') || lowerMsg.includes('stack') || lowerMsg.includes('tech')) {
        reply = "Mukil's core technical stack includes React, Next.js, TypeScript, Python, FastAPI, Material UI, PrimeReact, PostgreSQL, MongoDB, Firebase, and Google Cloud Generative AI tools.";
      } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('hire')) {
        reply = "You can get in touch with Mukil directly via email at mukil@example.com or connect with him on LinkedIn and GitHub! He is open to discussing new engineering opportunities and AI collaborations.";
      }
      return res.json({ reply, isFallback: true });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: message.slice(0, 1000),
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I'm happy to tell you more about Mukil's engineering background and projects!";
    return res.json({ reply });
  } catch (error: any) {
    console.error('Gemini Chat API Error:', error?.message || error);
    return res.json({
      reply: "Mukil is a Full-Stack Developer specializing in React.js, Next.js, Python, and Generative AI. How can I help you explore his portfolio today?",
      isFallback: true,
    });
  }
});

// Serve Vite in development or static dist in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile('dist/index.html', { root: '.' });
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
