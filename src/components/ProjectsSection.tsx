import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

const ProjectsSection: React.FC = () => (
  <section id="projects" className="py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Projets Réalisés
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection; 