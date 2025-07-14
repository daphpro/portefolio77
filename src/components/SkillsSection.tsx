import React from 'react';
import SkillCategory from './SkillCategory';
import { skillsData } from '../data/skillsData';
import { Code, Database, Network } from 'lucide-react';

const SkillsSection: React.FC = () => (
  <section id="skills" className="py-16 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Compétences Techniques
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <SkillCategory
          title="Programmation"
          icon={<Code className="h-8 w-8 text-blue-600 mr-3" />}
          skills={skillsData.programmation}
          iconColor="text-blue-600"
        />
        <SkillCategory
          title="Base de Données"
          icon={<Database className="h-8 w-8 text-green-600 mr-3" />}
          skills={skillsData.database}
          iconColor="text-green-600"
        />
        <SkillCategory
          title="Réseau & Système"
          icon={<Network className="h-8 w-8 text-purple-600 mr-3" />}
          skills={skillsData.network}
          iconColor="text-purple-600"
        />
      </div>
    </div>
  </section>
);

export default SkillsSection; 