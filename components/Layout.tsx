
import React, { useState } from 'react';
import { Menu, X, GraduationCap, School, Phone, MessageCircle, Mail, Facebook, Twitter } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Collège', href: '#/college' },
    { name: 'Lycée', href: '#/lycee' },
    { name: 'Méthodes', href: '#/methodes' },
    { name: 'Parents', href: '#/parents' },
    { name: 'À Propos', href: '#/a-propos' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                  < GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">
                  Génie Académie
                </span>
              </a>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#/contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                S'inscrire
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-blue-600 text-white px-3 py-3 rounded-md font-bold mt-4"
              >
                S'inscrire gratuitement
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold text-white font-display">Génie Académie</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Accompagner chaque élève vers l'excellence grâce à des méthodes pédagogiques adaptées au contexte africain francophone.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-blue-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-green-600 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Liens Rapides</h4>
              <ul className="space-y-3">
                <li><a href="#/college" className="hover:text-blue-400 transition-colors">Section Collège</a></li>
                <li><a href="#/lycee" className="hover:text-blue-400 transition-colors">Section Lycée</a></li>
                <li><a href="#/methodes" className="hover:text-blue-400 transition-colors">Méthodes & Conseils</a></li>
                <li><a href="#/a-propos" className="hover:text-blue-400 transition-colors">À propos de nous</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Niveaux</h4>
              <ul className="space-y-3">
                <li><a href="#/grade/3e" className="hover:text-blue-400 transition-colors">Classe de 3ème</a></li>
                <li><a href="#/grade/2nde" className="hover:text-blue-400 transition-colors">Classe de Seconde</a></li>
                <li><a href="#/grade/1ere" className="hover:text-blue-400 transition-colors">Classe de Première</a></li>
                <li><a href="#/grade/tle" className="hover:text-blue-400 transition-colors">Classe de Terminale</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span>bsabi2028@gmail.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span>+229 93 66 60 59</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>WhatsApp: +229 59 27 07 18</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Génie Académie – Collège & Lycée. Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Action Button */}
      <a
        href="https://wa.me/22959270718"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50 flex items-center justify-center"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
};

export default Layout;
