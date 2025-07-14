import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection: React.FC = () => (
  <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-white mb-8">
        Travaillons Ensemble
      </h2>
      <p className="text-xl text-blue-100 mb-12">
        Prêt à donner vie à vos idées ? Contactez-moi pour discuter de votre prochain projet.
      </p>
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="mailto:moctardaff77@gmail.com"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
        >
          <Mail className="h-5 w-5" />
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/moctar-daff-143088361/"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
        >
          <Linkedin className="h-5 w-5" />
          LinkedIn
        </a>
        <a
          href="https://github.com/daphpro"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
        >
          <Github className="h-5 w-5" />
          GitHub
        </a>
      </div>
      <p className="text-blue-100">
        📍 Dakar, Sénégal | 📧 moctardaff77@gmail.com | 📱 +221 70 592 59 65
      </p>
    </div>
  </section>
);

export default ContactSection; 