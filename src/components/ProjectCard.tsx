import React from 'react';
import type { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(tech => (
          <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.github}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Github className="h-5 w-5" />
          Code
        </a>
        <a
          href={project.demo}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ExternalLink className="h-5 w-5" />
          Demo
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard; 