export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  colorScheme: 'blue' | 'amber' | 'indigo' | 'emerald';
  badgeText: string;
  fullDescription: string;
  highlights: string[];
  techStack: string[];
}

export interface OtherProjectItem {
  id: string;
  icon: string;
  title: string;
  category: string;
  description: string;
  details: string[];
}

export interface SkillCategory {
  id: string;
  icon: string;
  title: string;
  skills: string;
  colorBg: string;
  colorText: string;
  proficiency: number;
  sampleCode?: string;
}

export interface JournalEntry {
  id: string;
  text: string;
  mood: string;
  timestamp: string;
  aiResponse?: {
    summary: string;
    insights: string[];
    moodAnalysis: string;
    advice: string;
  };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export interface BadmintonMatchState {
  playerA: string;
  playerB: string;
  scoreA: number;
  scoreB: number;
  setsA: number;
  setsB: number;
  server: 'A' | 'B';
  currentSet: number;
  setHistory: { setNum: number; scoreA: number; scoreB: number; winner: string }[];
  isMatchPoint: boolean;
  isFinished: boolean;
  winner?: string;
}
