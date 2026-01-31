
import React from 'react';
import { ArrowRight, ChevronRight, GraduationCap } from 'lucide-react';
import { GRADES } from '../constants';
import { SchoolLevel } from '../types';

interface LevelListProps {
  category: SchoolLevel;
}

const LevelList: React.FC<LevelListProps> = ({ category }) => {
  const levels = GRADES.filter(g => g.category === category);
  const title = category === SchoolLevel.COLLEGE ? 'Section Collège' : 'Section Lycée';
  const subtitle = category === SchoolLevel.COLLEGE 
    ? 'De la 6ème à la 3ème, construisons ensemble des bases solides.' 
    : 'De la Seconde à la Terminale, visons l’excellence et le Bac.';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {levels.map((level) => (
          <a
            key={level.id}
            href={`#/grade/${level.id}`}
            className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="bg-blue-50 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{level.name}</h3>
            <p className="text-slate-600 mb-6 line-clamp-2">{level.description}</p>
            <div className="flex items-center text-blue-600 font-bold">
              Découvrir
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>

      {category === SchoolLevel.LYCEE && (
        <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-emerald-900">Spécialisation & Séries</h2>
            <p className="text-emerald-800 leading-relaxed">
              Nous accompagnons toutes les séries (Littéraires, Scientifiques, Économiques). 
              Nos contenus sont adaptés aux exigences spécifiques des épreuves du Baccalauréat de chaque filière.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 grid grid-cols-2 gap-4">
            <div className="text-center">
              <span className="block text-3xl font-bold text-emerald-600">Séries A</span>
              <span className="text-sm text-slate-500 uppercase">Littéraires</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-bold text-emerald-600">Séries C/D</span>
              <span className="text-sm text-slate-500 uppercase">Scientifiques</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelList;
