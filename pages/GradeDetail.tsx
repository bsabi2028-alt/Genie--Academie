
import React from 'react';
import { useParams } from 'react-router-dom';
import { GRADES, SUBJECTS, getIcon } from '../constants';
import { Target, Trophy, HelpCircle, ArrowRight } from 'lucide-react';

const GradeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const grade = GRADES.find(g => g.id === id);

  if (!grade) {
    return (
      <div className="text-center py-32">
        <h2 className="text-2xl font-bold">Classe introuvable</h2>
        <a href="#/" className="text-blue-600 hover:underline mt-4 inline-block">Retour à l'accueil</a>
      </div>
    );
  }

  const gradeSubjects = SUBJECTS.filter(s => grade.subjects.includes(s.id));

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <header className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Classe de {grade.name}</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              {grade.description} Nous vous accompagnons pour relever les défis de cette année cruciale.
            </p>
          </div>
        </div>
      </header>

      {/* Objectives & Subjects */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - Subjects */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                Matières principales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {gradeSubjects.map((subject) => (
                  <div key={subject.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
                    <div className="text-blue-600 mb-4">{getIcon(subject.icon)}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{subject.name}</h3>
                    <p className="text-slate-600 text-sm mb-4">{subject.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {subject.skills.slice(0, 2).map((skill, i) => (
                        <span key={i} className="text-xs font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Example TD Entry Point */}
            <section className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Besoin d'un exemple concret ?</h3>
                    <p className="text-slate-400 mb-6">
                        Découvrez comment nous corrigeons les exercices pour aider les élèves à comprendre la méthode plutôt que de simplement copier la réponse.
                    </p>
                    <a href="#/exemple-td" className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors">
                        Consulter un exemple de TD corrigé
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>
          </div>

          {/* Sidebar - Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <Trophy className="w-6 h-6 text-orange-500 mr-2" />
                Objectifs de l'année
              </h3>
              <ul className="space-y-4">
                {grade.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-slate-700 leading-tight">{obj}</span>
                  </li>
                ))}
              </ul>

              {grade.examPrep && (
                <div className="mt-8 pt-8 border-t border-slate-100">
                   <h4 className="font-bold text-blue-700 mb-3 flex items-center">
                     <HelpCircle className="w-5 h-5 mr-2" />
                     Préparation Examen
                   </h4>
                   <p className="text-sm text-slate-600 leading-relaxed italic">
                     {grade.examPrep}
                   </p>
                </div>
              )}

              <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl mt-8 hover:bg-blue-700 transition-colors shadow-lg">
                Rejoindre la classe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeDetail;
