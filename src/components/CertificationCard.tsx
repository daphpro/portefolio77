import React from 'react';
import type { Certification } from '../types';
import { Award } from 'lucide-react';

const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => (
  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
    <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
    <h3 className="font-bold text-gray-800 mb-2">{certification.name}</h3>
    <p className="text-gray-600 text-sm mb-1">{certification.issuer}</p>
    <p className="text-blue-600 font-semibold">{certification.year}</p>
  </div>
);

export default CertificationCard; 