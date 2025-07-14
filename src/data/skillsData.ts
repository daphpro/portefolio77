import type { Skill } from '../types';

export const skillsData: { [key: string]: Skill[] } = {
  programmation: [
    { name: 'PHP', level: 65, color: 'bg-purple-500', icon: '🐘' },
    { name: 'Java', level: 75, color: 'bg-red-500', icon: '☕' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-500', icon: '🚀' },
    { name: 'Python', level: 82, color: 'bg-green-500', icon: '🐍' },
    { name: 'C', level: 65, color: 'bg-blue-500', icon: '⚡' }
  ],
  database: [
    { name: 'MySQL', level: 85, color: 'bg-orange-500', icon: '🗄️' },
    { name: 'PostgreSQL', level: 70, color: 'bg-blue-600', icon: '🐘' },
    { name: 'SQL Server', level: 70, color: 'bg-red-600', icon: '💾' }
  ],
  network: [
    { name: 'Linux', level: 68, color: 'bg-gray-800', icon: '🐧' },
    { name: 'CCNA', level: 70, color: 'bg-blue-700', icon: '🌐' },
  ]
}; 