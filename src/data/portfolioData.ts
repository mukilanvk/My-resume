import { ProjectItem, OtherProjectItem, SkillCategory } from '../types';

export const HERO_IMAGES = {
  workspace: 'https://lh3.googleusercontent.com/aida/AEtjO1VcDki0ER9QgBKr6Pj_jHNO7WDxEWq_A-CNDEz3h17BG8cuIT-wd8IvdGdXXpPiXvJqk5hVp2De288ldZTlY7JNqz7TlRm1w5hdc37iuwwMTrXeiXhY4OyRGcLt6th8w1-cgqcdEQRRBUp8sEONF768XZmj9mNi50ejJKNppG9BT14qKFIYPAnJol2ij5ANyMsMLsGUAYPhdHq9RPoDR8p0jsPmMjMCt4y8i4H6Ks1dvIrptHjTFpqw70c',
  mountainSunset: 'https://lh3.googleusercontent.com/aida/AEtjO1X2DjLtNDVqb6PJ5jcDo20LTnMbjTBmeqQ69HAnoSgZg6j16uDsmcUnURabxHiCkuB6Okgffo5kYL_qugM9Rv2zgFKUnK0IOP64T8b0N0HZju7pGGZfq-YskSRC-tCaeWZ_sDWJpnMerbqaZxylLdeflzKLA7QFa1TI0V88MLkG-_3DD0I-o9SLnRy9XVwYV153rqmiKKPCJxvwIqX0PQHEkCN98LcwuHFOxoZAu5ey2xKVfdbRbe_aJw',
  aiRobot: 'https://lh3.googleusercontent.com/aida/AEtjO1Vhrmmf7APHMJ8_dJohHlHlTqxdI6YC_dg7d8UcLMn3b8gAT1hdaGusXnIymPwMX5mq7OV9BRW9I3Qb-bHTRjfFkr1v7zoTSXNXQgrB5UXkJrXofBXZR_I6B9dXH0GNiQjdr7CoHXfM2j7J6glxg34rE_f6VxAtG8mMDkIW_Jw6rE4W2bt8YemLLMILKUmC1gMuZU-rexhxJuYUX57-F8Y0nHT0-H7bv153YeMGjdVRoiq2CGvyqHKaHw',
  sunriseBanner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvVR-I4wooXi1QT_jcqgzPjupRM141HZ_IT7AGklnLpR4odeiM2XzS9cDDvZPZh7EJ_L0jfugdB6fw7bFf5vAmHlRm8-phM4W0uhJPjkrxQ32jEvN3hFc7HoCv5cxKrUB8yqnOjW0kElQisWnZ-clsWio8BQf-4eSi6TlVVkQrR1yd-HhMY3eigwGEuWXOFenAooby2K_CXwtIhPXjiEgdTJHHi-yAXpKDiDGB-UuZviU-DLSkRw8c',
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'everest-tutoring',
    number: '01',
    category: 'E-LEARNING PLATFORM',
    title: 'Everest Tutoring',
    subtitle: 'Tutoring Portal',
    description: 'Multi-domain platform for admin, tutors and students.',
    tags: ['⚛ React', 'TypeScript', 'FastAPI'],
    colorScheme: 'blue',
    badgeText: 'Live Dashboard & Tutors',
    fullDescription: 'A comprehensive, multi-role e-learning platform built for Aagnia Technology. It streamlines operations for administrators, empowers tutors with real-time study management tools, and offers students interactive exam practice, class schedules, and live progress analytics.',
    highlights: [
      'Multi-tenant RBAC supporting Admin, Tutor, and Student personas',
      'Real-time student progress tracking & exam attempt analytics',
      'Interactive class scheduling and homework document management',
      'High-performance backend built on FastAPI and PostgreSQL'
    ],
    techStack: ['React 18', 'TypeScript', 'Vite', 'Material UI', 'PrimeReact', 'Python', 'FastAPI', 'PostgreSQL']
  },
  {
    id: 'moneypeechu',
    number: '02',
    category: 'NEWS / BLOG WEBSITE',
    title: 'Moneypeechu',
    subtitle: 'Financial Blog',
    description: 'A dynamic blog and news website built with Next.js, focused on SEO.',
    tags: ['Next.js', 'React', 'SEO'],
    colorScheme: 'amber',
    badgeText: 'Next.js 14 & SEO Boosted',
    fullDescription: 'Moneypeechu is a high-speed financial news and educational portal designed to deliver financial literacy articles in Tamil and English. Engineered with Next.js 14 App Router, Server-Side Rendering (SSR), and automated Schema.org structured data for maximum search engine performance.',
    highlights: [
      'Core Web Vitals optimized with sub-second page loads',
      'Dynamic Schema.org JSON-LD generation for Google News indexing',
      'Custom Content Management System integration with live preview',
      'Responsive reading layout with font scaling & audio synthesis'
    ],
    techStack: ['Next.js 14', 'React', 'Tailwind CSS', 'TypeScript', 'SEO / JSON-LD', 'Node.js']
  },
  {
    id: 'personal-gemini-journal',
    number: '03',
    category: 'GENERATIVE AI',
    title: 'Personal Gemini Journal',
    subtitle: 'Smart Reflection AI',
    description: 'An AI journaling application with Gemini and Firebase cloud sync.',
    tags: ['🔥 Firebase', 'Gemini', 'React'],
    colorScheme: 'indigo',
    badgeText: 'Gemini 3.8 Flash Powered',
    fullDescription: 'Personal Gemini Journal is a cognitive wellness application that converts raw user thoughts and daily reflections into structured insights, emotional sentiment trends, and practical mental frameworks using Google Gemini 3.8 Flash AI.',
    highlights: [
      'Server-side Gemini 3.8 Flash AI processing with zero client secret exposure',
      'Automated mood analysis, key takeaway extractions, and actionable advice',
      'Secure persistent journaling history synced with Firebase Firestore',
      'Built-in prompt templates for gratitude, stress release, and career planning'
    ],
    techStack: ['React', 'Gemini 3.8 Flash API', 'Firebase Firestore', 'Firebase Auth', 'Tailwind CSS']
  },
  {
    id: 'badminton-scorer',
    number: '04',
    category: 'WEB APPLICATION',
    title: 'Badminton Scorer',
    subtitle: 'Live Scoreboard 21 - 16',
    description: 'A real-time badminton scoring application with live tracking.',
    tags: ['⚛ React', 'JavaScript', 'PWA'],
    colorScheme: 'emerald',
    badgeText: 'Live Match Score Tracking',
    fullDescription: 'A progressive web app (PWA) built for badminton enthusiasts and tournament organizers. Enables instantaneous point scoring, court side switching, serving sequence tracking, match point alerts, and detailed set-by-set breakdown.',
    highlights: [
      'Offline-first PWA architecture with instant court state persistence',
      'Automatic match-point detection, tie-break handling, and serve indicators',
      'Visual match statistics chart (point distribution, rally length, error count)',
      'Undo/redo match state history stack'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'PWA / Service Worker', 'Web Storage API']
  }
];

export const OTHER_PROJECTS: OtherProjectItem[] = [
  {
    id: 'kalyanam-conform',
    icon: '💍',
    title: 'Kalyanam Conform',
    category: 'Web Application',
    description: 'Matrimonial matching & venue management portal with automated verification workflows.',
    details: ['Matchmaking algorithm', 'Profile photo verification', 'Event timeline manager']
  },
  {
    id: 'ocr-text-recognition',
    icon: '📄',
    title: 'OCR Text Recognition',
    category: 'Computer Vision',
    description: 'High-accuracy document text extraction tool processing scanned PDFs and camera snapshots.',
    details: ['Tesseract / PyTesseract OCR engine', 'Image preprocessing pipeline', 'JSON / TXT export']
  },
  {
    id: 'handwritten-char-recognition',
    icon: '✍',
    title: 'Handwritten Char Recognition',
    category: 'Machine Learning',
    description: 'Deep neural network model classifying handwritten alphabet and digit canvas strokes.',
    details: ['CNN architecture in Python', 'Interactive web drawing canvas', 'Confidence rating meter']
  },
  {
    id: 'traffic-time-analyzer',
    icon: '⏱',
    title: 'Traffic Time Analyzer',
    category: 'Data Analysis',
    description: 'Urban mobility tool analyzing peak commuting hours and predicting congestion metrics.',
    details: ['Time series forecasting', 'Interactive map visualization', 'Heatmap analytics']
  },
  {
    id: 'precision-agriculture',
    icon: '🌾',
    title: 'Precision Agriculture',
    category: 'AI / IoT',
    description: 'Smart farming dashboard monitoring soil moisture, weather forecast, and crop health alerts.',
    details: ['Sensor telemetry ingestion', 'Yield estimation model', 'Automated irrigation alerts']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    icon: '⚛',
    title: 'Frontend',
    skills: 'React.js, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Material UI, PrimeReact, Vite',
    colorBg: 'bg-cyan-50',
    colorText: 'text-cyan-600',
    proficiency: 95,
    sampleCode: `// Clean React Component
export function HeroCard({ title }: { title: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white/80 backdrop-blur shadow-card border border-slate-200">
      <h1 className="text-2xl font-black text-slate-900">{title}</h1>
    </div>
  );
}`
  },
  {
    id: 'backend',
    icon: '⚙',
    title: 'Backend',
    skills: 'Node.js, Python, FastAPI, Express.js, REST APIs',
    colorBg: 'bg-emerald-50',
    colorText: 'text-emerald-600',
    proficiency: 90,
    sampleCode: `# FastAPI Endpoint
@app.get("/api/v1/analytics")
async def get_analytics(user_id: str):
    data = await db.fetch_user_metrics(user_id)
    return {"status": "success", "data": data}`
  },
  {
    id: 'database',
    icon: '🗄',
    title: 'Database',
    skills: 'PostgreSQL, MongoDB, Firebase, Cloud Firestore',
    colorBg: 'bg-blue-50',
    colorText: 'text-blue-600',
    proficiency: 88,
    sampleCode: `// Firestore Query
const q = query(
  collection(db, "interactions"),
  where("userId", "==", auth.currentUser?.uid),
  orderBy("createdAt", "desc")
);`
  },
  {
    id: 'ai-cloud',
    icon: '☁',
    title: 'AI / Cloud',
    skills: 'Generative AI, Gemini API, Google Cloud, AI Agents, RAG',
    colorBg: 'bg-indigo-50',
    colorText: 'text-indigo-600',
    proficiency: 92,
    sampleCode: `// Gemini 3.8 Flash SDK call
const response = await ai.models.generateContent({
  model: 'gemini-3.8-flash',
  contents: prompt,
});`
  },
  {
    id: 'tools',
    icon: '🛠',
    title: 'Tools',
    skills: 'Git, GitHub, GitLab, Postman, Swagger, VS Code',
    colorBg: 'bg-purple-50',
    colorText: 'text-purple-600',
    proficiency: 94,
    sampleCode: `# CI/CD Workflow
git add .
git commit -m "feat: enhance AI journal modal"
git push origin main`
  }
];
