export interface Training {
  id: string;
  title: string;
  description: string;
  type: 'tutorial/guide' | 'article/blog' | 'course';
  domains: string[];
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  imageUrl: string;
  bannerUrl: string;
}

export const mockTrainings: Training[] = [
  {
    id: 'amazon-q-mcp-asana',
    title: '🚀 Tutorial: Build an AI‑Powered Weekly Asana Report with Amazon Q Developer CLI and MCP',
    description: 'Learn to combine Amazon Q Developer CLI, MCP servers and agents to produce automated weekly reports from Asana and send them via Gmail. Master context management, security best practices, and workflow automation.',
    type: 'tutorial/guide',
    domains: ['Software Development'],
    duration: '3 hours',
    level: 'Advanced',
    imageUrl: '/qcli.jpeg',
    bannerUrl: '/banner1.jpeg'
  },
  {
    id: 'amazon-q-cli',
    title: 'Using Amazon Q CLI with Youtube MCP for Technical training',
    description: 'Learn Q CLI from theory to practice: master context & tokens, configure trusted MCPs, and build a production-worthy pipeline for Youtube integration.',
    type: 'tutorial/guide',
    domains: ['Software Development'],
    duration: '2 hours',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjBhd3MlMjBjbGklMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzU1Nzk0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjBhd3MlMjBjbGklMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzU1Nzk0NzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '1',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of ML algorithms and their applications in modern AI systems.',
    type: 'tutorial/guide',
    domains: ['Software Development'],
    duration: '45 min',
    level: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1553678324-f84674bd7b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTc2ODgzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1553678324-f84674bd7b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTc2ODgzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '2',
    title: 'Building Agentic AI Systems',
    description: 'Deep dive into creating autonomous AI agents that can perform complex tasks.',
    type: 'course',
    domains: ['Software Development'],
    duration: '2 hours',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzU1Nzc0ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwcm9ib3R8ZW58MXx8fHwxNzU1Nzc0ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '3',
    title: 'The Mindset for Success in Tech',
    description: 'Developing the right mental framework for thriving in the technology industry.',
    type: 'article/blog',
    domains: ['Business', 'Software Development'],
    duration: '10 min read',
    level: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1606235729070-5da8437f6e30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwbWluZHNldCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1NzkyMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1606235729070-5da8437f6e30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwbWluZHNldCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1NzkyMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '4',
    title: 'React Best Practices 2025',
    description: 'Modern React patterns, hooks, and performance optimization techniques.',
    type: 'tutorial/guide',
    domains: ['Software Development'],
    duration: '1.5 hours',
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1653387319597-84bde7e5368e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHByb2dyYW1taW5nJTIwY29kZXxlbnwxfHx8fDE3NTU3OTIyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1653387319597-84bde7e5368e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMHByb2dyYW1taW5nJTIwY29kZXxlbnwxfHx8fDE3NTU3OTIyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '5',
    title: 'Public Speaking for Developers',
    description: 'Master the art of presenting technical concepts to diverse audiences.',
    type: 'course',
    domains: ['Public Speaking', 'Software Development'],
    duration: '3 hours',
    level: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1585404544089-b386c0723dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzcGVha2luZyUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTU3OTIyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1585404544089-b386c0723dd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBzcGVha2luZyUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTU3OTIyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '6',
    title: 'Mindfulness for Programmers',
    description: 'Integrate meditation and mindfulness practices into your coding routine.',
    type: 'article/blog',
    domains: ['Health/Fitness', 'Software Development'],
    duration: '8 min read',
    level: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1655970580622-4a547789c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTU3OTIyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1655970580622-4a547789c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTU3OTIyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '7',
    title: 'Advanced Neural Networks',
    description: 'Explore deep learning architectures and their practical implementations.',
    type: 'tutorial/guide',
    domains: ['Software Development'],
    duration: '2.5 hours',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTU3MDQxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTU3MDQxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '8',
    title: 'Building Scalable Web Applications',
    description: 'Learn to design and implement web applications that can handle millions of users.',
    type: 'course',
    domains: ['Software Development', 'Business'],
    duration: '4 hours',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1517309561013-16f6e4020305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjYWxhYmxlfGVufDF8fHx8MTc1NTc5MjI5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1517309561013-16f6e4020305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjYWxhYmxlfGVufDF8fHx8MTc1NTc5MjI5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '9',
    title: 'Leadership in Tech',
    description: 'Develop leadership skills specifically tailored for technology professionals.',
    type: 'article/blog',
    domains: ['Business', 'Software Development'],
    duration: '12 min read',
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1477865300989-86ba6d4adcab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwbGVhZGVyc2hpcCUyMHRlYW18ZW58MXx8fHwxNzU1NzcwMDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1477865300989-86ba6d4adcab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwbGVhZGVyc2hpcCUyMHRlYW18ZW58MXx8fHwxNzU1NzcwMDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '10',
    title: 'Personal Finance for Developers',
    description: 'Master budgeting, investing, and financial planning for tech professionals.',
    type: 'tutorial/guide',
    domains: ['Finance', 'Software Development'],
    duration: '1.5 hours',
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1620969427101-7a2bb6d83273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nfGVufDF8fHx8MTc1NTc5MjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1620969427101-7a2bb6d83273?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nfGVufDF8fHx8MTc1NTc5MjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '11',
    title: 'Teaching Programming Effectively',
    description: 'Best practices for educators to teach programming concepts and engage students.',
    type: 'course',
    domains: ['Education', 'Software Development'],
    duration: '1 hour',
    level: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1643981509466-c37ac9d10045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjB0ZWFtJTIwY29tbXVuaWNhdGlvbnxlbnwxfHx8fDE3NTU3OTIyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1643981509466-c37ac9d10045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjB0ZWFtJTIwY29tbXVuaWNhdGlvbnxlbnwxfHx8fDE3NTU3OTIyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '12',
    title: 'Stress Management for High Performers',
    description: 'Learn techniques to manage stress and maintain peak performance in demanding roles.',
    type: 'article/blog',
    domains: ['Health/Fitness', 'Business'],
    duration: '15 min read',
    level: 'All Levels',
    imageUrl: 'https://images.unsplash.com/photo-1522211428786-f90e5e79a46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3MlMjBtYW5hZ2VtZW50JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NTc5MjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1522211428786-f90e5e79a46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlc3MlMjBtYW5hZ2VtZW50JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NTc5MjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '13',
    title: 'AI Ethics and Responsible Development',
    description: 'Understanding the ethical implications of AI development and deployment.',
    type: 'course',
    domains: ['Software Development', 'Business', 'Education'],
    duration: '2 hours',
    level: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaScyMGV0aGljcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1NzkyMjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaScyMGV0aGljcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1NzkyMjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: '14',
    title: 'Investment Strategies for Tech Professionals',
    description: 'Advanced investment approaches tailored for high-income tech workers.',
    type: 'article/blog',
    domains: ['Finance'],
    duration: '20 min read',
    level: 'Advanced',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwaW52ZXN0bWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1NzkyMjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bannerUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwaW52ZXN0bWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU1NzkyMjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];
