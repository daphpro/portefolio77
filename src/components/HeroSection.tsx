import React from 'react';
import { ExternalLink, Download } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';

const scrollToSection = (sectionId: string, setIsMenuOpen: (value: boolean) => void) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  setIsMenuOpen(false);
};

const HeroSection: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV_Moctar_Daff.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="relative w-40 h-40 mx-auto mb-6">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Photo de profil de Moctar Daff" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Développeur <span className="text-blue-600">Full Stack</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Passionné par le développement et les technologies réseau, je crée des solutions innovantes 
            avec une expertise en programmation multi-langages, bases de données et administration système.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <button 
              onClick={() => scrollToSection('projects', () => {})}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Voir mes projets
              <ExternalLink className="h-5 w-5" />
            </button>
            <button 
              onClick={handleDownloadCV}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Télécharger CV
            </button>
            <button 
              onClick={() => scrollToSection('contact', () => {})}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Me contacter
            </button>
          </div>
        </div>
        <div className="animate-bounce">
          <svg className="h-8 w-8 text-gray-400 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 