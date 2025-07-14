import React from 'react';
import SkillBar from './SkillBar';
import type { Skill } from '../types';

const SkillCategory: React.FC<{ 
  title: string; 
  icon: React.ReactNode; 
  skills: Skill[]; 
  iconColor: string 
}> = ({ title, icon, skills, iconColor }) => (
  <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-6">
      <div className={iconColor}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
    </div>
    {skills.map(skill => (
      <SkillBar key={skill.name} skill={skill} />
    ))}
  </div>
);

export default SkillCategory; 