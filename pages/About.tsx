
import React from 'react';
import { Target, Users, BookOpen, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      <header className="bg-slate-900 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Notre Vision</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Démocratiser l'excellence académique en Afrique francophone en rendant l'apprentissage simple, accessible et motivant.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">Une réponse concrète au contexte local</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Génie Académie est née du constat que de nombreux élèves d'Afrique francophone possèdent un potentiel immense, mais manquent souvent d'outils méthodologiques structurés pour réussir les grands examens nationaux.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nous avons réuni des enseignants expérimentés pour concevoir une plateforme qui parle le langage des élèves, lève les doutes et redonne confiance aux familles.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <span className="block text-3xl font-bold text-blue-600">100%</span>
                <span className="text-sm text-slate-500 uppercase font-bold tracking-wider">Programmes Africains</span>
              </div>
              <div className="p-4 bg-emerald-50 rounded-2xl">
                <span className="block text-3xl font-bold text-emerald-600">24/7</span>
                <span className="text-sm text-slate-500 uppercase font-bold tracking-wider">Support Élèves</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/school/800/800" 
              alt="Education Africa" 
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="font-bold text-lg mb-2">"L'éducation est l'arme la plus puissante pour changer le monde."</p>
              <p className="text-blue-200 text-sm">- Nelson Mandela</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nos Objectifs à Long Terme</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Réussite", desc: "Augmenter le taux de réussite aux examens nationaux.", icon: <GraduationCap className="w-8 h-8 text-blue-600" /> },
              { title: "Autonomie", desc: "Apprendre aux élèves à travailler de façon indépendante.", icon: <BookOpen className="w-8 h-8 text-emerald-600" /> },
              { title: "Inclusion", desc: "Rendre le contenu accessible au plus grand nombre.", icon: <Users className="w-8 h-8 text-orange-600" /> },
              { title: "Impact", desc: "Bâtir la future génération de leaders africains.", icon: <Target className="w-8 h-8 text-purple-600" /> }
            ].map((obj, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center space-y-4">
                <div className="inline-block p-4 bg-slate-50 rounded-full">{obj.icon}</div>
                <h3 className="font-bold text-xl">{obj.title}</h3>
                <p className="text-slate-500 text-sm">{obj.desc}</p>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
};

export default About;
