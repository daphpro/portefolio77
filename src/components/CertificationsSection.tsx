import React from 'react';
import CertificationCard from './CertificationCard';
import { certificationsData } from '../data/certificationsData';

const CertificationsSection: React.FC = () => (
  <section id="certifications" className="py-16 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Certifications
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificationsData.map((cert, index) => (
          <CertificationCard key={index} certification={cert} />
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection; 