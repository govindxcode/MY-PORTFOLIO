export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  statusBadge?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface LearningItem {
  id: string;
  title: string;
  status: string;
  description: string;
}

export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  date: string;
  location?: string;
  description?: string;
  grade?: string;
  isDraft?: boolean;
}

export const isPlaceholder = (value: string | undefined): boolean => {
  if (!value) return true;
  return value.includes('TODO') || value.includes('YOUR_') || value === '#' || value === '';
};

export const portfolioData = {
  personal: {
    name: 'Govind Rana',
    headline: 'CSE Student & Aspiring Full-Stack Developer',
    availability: 'Open to opportunities and collaborations',
    location: '',
    email: 'ranagovind6969@gmail.com',
    github: 'https://github.com/govindxcode',
    linkedin: 'https://www.linkedin.com/in/govind-rana-201179371/?isSelfProfile=true',
    instagram: 'https://www.instagram.com/thatmidn.ighthurtsalot/',
  },

  about: {
    intro: 'Exploring software development, building practical projects, and learning how AI can make development workflows more effective.',
    interests: ['Full-Stack Development', 'Problem Solving', 'AI & Tools', 'Learning by Building'],
  },

  skills: [
    {
      category: 'Programming',
      skills: ['C', 'C++', 'Python', 'Java'],
    },
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    },
    {
      category: 'Backend & Database',
      skills: ['Node.js', 'Express.js', 'MongoDB'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Cursor', 'Vercel'],
    },
    {
      category: 'AI & Others',
      skills: ['AI Agents', 'Prompt Engineering'],
    },
  ] as SkillGroup[],

  learning: [
    {
      id: 'dsa-cpp',
      title: 'DSA in C++',
      status: 'Currently Learning',
      description: 'Learning data structures, algorithms, problem-solving, and coding patterns using C++.',
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      status: 'Learning / Building Projects',
      description: 'Developing practical skills in frontend development, backend APIs, databases, and web application deployment.',
    },
    {
      id: 'ai-tools',
      title: 'AI & AI Tools',
      status: 'Exploring',
      description: 'Exploring AI concepts and practical ways to use AI tools in software development.',
    },
    {
      id: 'ai-agents',
      title: 'AI Agents',
      status: 'Exploring',
      description: 'Learning how AI agents use tools and structured workflows to assist with multi-step tasks.',
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering',
      status: 'Exploring',
      description: 'Practising clear, structured prompts to guide AI tools and improve their outputs.',
    },
    {
      id: 'system-design',
      title: 'System Design',
      status: 'Looking Forward',
      description: 'Planning to learn scalable application architecture, API design, databases, and distributed systems.',
    },
  ] as LearningItem[],

  journey: [
    {
      id: 'edu-1',
      title: 'Computer Science Student',
      organization: 'Self-directed learning and project building',
      date: 'Currently studying',
      description: 'Building fundamentals in software development, problem solving, and practical application design.',
      isDraft: false,
    },
    {
      id: 'learning-1',
      title: 'Full-Stack Development',
      organization: 'Projects and experiments',
      date: 'Ongoing',
      description: 'Improving frontend, backend, database, and deployment skills through hands-on building.',
      isDraft: true,
    },
  ] as TimelineEntry[],

  projects: [
    {
      id: 'chatroulette-clone',
      title: 'Stranger Lock Video',
      description: 'A real-time stranger video chat application featuring random matchmaking, peer-to-peer video calling, text chat, and call controls.',
      tags: ['React', 'Node.js', 'Express.js', 'Socket.IO', 'WebRTC'],
      githubUrl: '',
      liveUrl: 'https://stranger-lock-video.vercel.app/chat',
      statusBadge: 'Live',
    },
    {
      id: 'shyam-residency',
      title: 'Hotel Shyam Residency',
      description: 'A hotel website designed to present hotel information and provide visitors with a convenient browsing experience.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: '',
      liveUrl: 'https://hotel-shyam-residency.vercel.app/',
      statusBadge: 'Live',
    },
  ] as Project[]
};
