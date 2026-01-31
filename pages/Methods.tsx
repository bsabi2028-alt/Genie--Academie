
import React from 'react';
import { Lightbulb, Clock, Brain, Layout, PenTool, CheckCircle2 } from 'lucide-react';

const Methods: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Méthodes & Conseils</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Travaillez plus intelligemment, pas plus dur. Découvrez les secrets de la réussite scolaire.</p>
        <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Organisation du travail",
            icon: <Clock className="w-8 h-8 text-blue-600" />,
            tips: ["Utiliser un planning hebdomadaire", "Prioriser les matières difficiles", "Faire des pauses de 10 min toutes les heures"]
          },
          {
            title: "Révisions Efficaces",
            icon: <Brain className="w-8 h-8 text-emerald-600" />,
            tips: ["Faire des fiches de synthèse", "S'auto-évaluer régulièrement", "Expliquer le cours à quelqu'un d'autre"]
          },
          {
            title: "Gestion du Stress",
            icon: <Layout className="w-8 h-8 text-orange-600" />,
            tips: ["Bien dormir avant un examen", "Pratiquer la respiration profonde", "Arriver à l'avance le jour J"]
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
            <div className="mb-6">{item.icon}</div>
            <h3 className="text-xl font-bold mb-6 text-slate-900">{item.title}</h3>
            <ul className="space-y-4">
              {item.tips.map((tip, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Focus on exams */}
      <section className="bg-blue-600 rounded-[3rem] p-12 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-10">
            <PenTool className="w-64 h-64" />
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold">Préparer ses contrôles & examens</h2>
                <p className="text-blue-100 text-lg">
                    La clé d'un examen réussi réside dans l'anticipation. Ne révisez jamais à la dernière minute. 
                    Un contrôle se prépare 3 à 5 jours à l'avance, et un examen national (BEPC/Bac) se prépare toute l'année.
                </p>
                <div className="flex flex-wrap gap-4">
                    <span className="bg-white/20 px-4 py-2 rounded-full font-bold"># Discipline</span>
                    <span className="bg-white/20 px-4 py-2 rounded-full font-bold"># Rigueur</span>
                    <span className="bg-white/20 px-4 py-2 rounded-full font-bold"># Régularité</span>
                </div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20">
                <h4 className="font-bold text-xl mb-4">La règle d'or 3-2-1</h4>
                <ul className="space-y-3">
                    <li><span className="font-bold">3 jours avant :</span> Relire toutes les fiches et refaire les TD.</li>
                    <li><span className="font-bold">2 jours avant :</span> Se focaliser sur les points non compris.</li>
                    <li><span className="font-bold">1 jour avant :</span> Revoir uniquement les schémas et se reposer.</li>
                </ul>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Methods;
