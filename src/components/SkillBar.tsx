import React from 'react';
import type { Skill } from '../types';

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-2">
      <span className="flex items-center gap-2 font-medium text-gray-700">
        <span className="text-lg">{skill.icon}</span>
        {skill.name}
      </span>
      <span className="text-sm text-gray-500">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

export default SkillBar; 