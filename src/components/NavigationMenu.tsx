import React from 'react';
import { Code, Menu, X } from 'lucide-react';
import { navigationItems } from '../data/navigationItems';

interface NavigationMenuProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const scrollToSection = (sectionId: string, setIsMenuOpen: (value: boolean) => void) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  setIsMenuOpen(false);
};

const NavigationMenu: React.FC<NavigationMenuProps> = ({ activeSection, isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Code className="h-8 w-8 text-blue-600 mr-2" />
          <span className="font-bold text-xl text-gray-800">Moctar Daff</span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navigationItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id, setIsMenuOpen)}
              className={`capitalize transition-colors ${
                activeSection === item.id ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </div>
    {isMenuOpen && (
      <div className="md:hidden bg-white border-t">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigationItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id, setIsMenuOpen)}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

export default NavigationMenu; 