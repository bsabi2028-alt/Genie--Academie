
import React from 'react';
import { Heart, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

const Parents: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
       <header className="bg-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Espace Parents</h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Le rôle des parents est crucial dans la réussite scolaire. Nous vous donnons les clés pour accompagner votre enfant sereinement.
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Signs of Difficulty */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 text-orange-500 mr-3" />
                Signes de difficulté scolaire
            </h2>
            <div className="space-y-4">
                {[
                    "Chute brutale des notes dans une ou plusieurs matières",
                    "Démotivation et refus soudain d'aller en cours",
                    "Temps excessif passé sur les devoirs sans résultats",
                    "Stress ou anxiété avant les évaluations",
                    "Oublis fréquents de cahiers ou de matériel"
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center p-3 bg-slate-50 rounded-xl">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-4"></span>
                        <p className="text-slate-700">{item}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Good Practices */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <ShieldCheck className="w-8 h-8 text-blue-500 mr-3" />
                Bonnes pratiques à la maison
            </h2>
            <div className="grid grid-cols-1 gap-4">
                {[
                    { title: "Instaurer un rituel", desc: "Un horaire fixe pour les devoirs aide à créer une habitude de travail." },
                    { title: "Valoriser l'effort", desc: "Encouragez le travail fourni plus que la note finale obtenue." },
                    { title: "Limiter les écrans", desc: "Favorisez un environnement calme sans distractions numériques." },
                    { title: "Dialogue ouvert", desc: "Discutez de ce qu'il a appris, pas seulement de ses erreurs." }
                ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-1">{item.title}</h4>
                        <p className="text-blue-800 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
      </div>

      {/* FAQ or Advice by level */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-12">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4">Accompagnement par Cycle</h2>
                  <p className="text-slate-400">Chaque âge a ses besoins spécifiques.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-emerald-400 font-bold mb-2">
                          <Heart className="w-6 h-6" />
                          <span>Au Collège (11-15 ans)</span>
                      </div>
                      <p className="text-slate-300">
                          Votre enfant a besoin de structure. Aidez-le à organiser son sac, son agenda et à diviser ses tâches complexes en petites étapes simples.
                      </p>
                  </div>
                  <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-blue-400 font-bold mb-2">
                          <HelpCircle className="w-6 h-6" />
                          <span>Au Lycée (15-18 ans)</span>
                      </div>
                      <p className="text-slate-300">
                          L'adolescent réclame de l'autonomie. Devenez un coach plutôt qu'un surveillant. Discutez d'orientation et de projets d'avenir pour donner du sens à ses études.
                      </p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Parents;
