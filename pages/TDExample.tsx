
import React, { useState } from 'react';
import { Calculator, Lightbulb, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';

const TDExample: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Analyse de l'énoncé", content: "Identifier les données (distances, vitesses, forces) et la question posée." },
    { title: "Choix de la formule", content: "Sélectionner l'outil mathématique ou physique approprié." },
    { title: "Calcul / Démonstration", content: "Effectuer les opérations en respectant les unités." },
    { title: "Réponse rédigée", content: "Donner la conclusion avec une phrase claire." }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      <div className="text-center space-y-4">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">Exemple de TD - Lycée (Seconde)</span>
        <h1 className="text-4xl font-bold text-slate-900">Mathématiques : Fonctions du second degré</h1>
        <p className="text-slate-600">Découvrez notre méthode pédagogique en 4 étapes.</p>
      </div>

      {/* Statement Box */}
      <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 relative">
        <div className="absolute top-0 left-8 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
          <Calculator className="w-4 h-4 mr-2" /> Énoncé
        </div>
        <p className="text-lg text-slate-800 font-medium leading-relaxed italic">
          "Soit la fonction f(x) = 2x² - 4x + 1. Déterminez les coordonnées du sommet de la parabole représentant cette fonction."
        </p>
      </div>

      {/* Methodology Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center">
          <Lightbulb className="w-6 h-6 text-orange-500 mr-2" />
          Méthode étape par étape
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left transition-all ${
                activeStep === idx 
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-105' 
                : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300'
              }`}
            >
              <span className="block text-xs font-bold uppercase opacity-70 mb-1">Étape {idx + 1}</span>
              <span className="font-bold">{step.title}</span>
            </button>
          ))}
        </div>
        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 min-h-[100px] animate-in fade-in duration-500">
          <p className="text-blue-900 font-medium">{steps[activeStep].content}</p>
        </div>
      </section>

      {/* Correction Section */}
      <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-900 px-8 py-4 text-white font-bold flex items-center">
          <CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />
          Correction détaillée
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-4 text-slate-700">
            <p>1. On identifie les coefficients : <strong>a = 2</strong>, <strong>b = -4</strong>, <strong>c = 1</strong>.</p>
            <p>2. La formule de l'abscisse du sommet (α) est : <strong>α = -b / (2a)</strong>.</p>
            <p className="bg-slate-50 p-4 rounded-lg font-mono text-center text-xl">
               α = -(-4) / (2 * 2) = 4 / 4 = 1
            </p>
            <p>3. Pour trouver l'ordonnée (β), on calcule f(1) :</p>
            <p className="bg-slate-50 p-4 rounded-lg font-mono text-center text-xl">
               β = f(1) = 2(1)² - 4(1) + 1 = 2 - 4 + 1 = -1
            </p>
            <p className="text-lg">Conclusion : Le sommet de la parabole est le point <strong>S(1 {'>'} -1)</strong>.</p>
          </div>
        </div>
      </section>

      {/* Pro Tip */}
      <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 flex items-start space-x-4">
        <div className="bg-emerald-500 text-white p-2 rounded-lg">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-bold text-emerald-900">Astuce du Professeur</h4>
          <p className="text-emerald-800">
            "Vérifie toujours le signe de 'a'. S'il est positif (comme ici 2 {'>'} 0), la parabole est tournée vers le haut, ce qui signifie que le sommet est un minimum !"
          </p>
        </div>
      </div>

      <div className="text-center pt-8">
        <a href="#/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg">
          Accéder à tous les TD corrigés
        </a>
      </div>
    </div>
  );
};

export default TDExample;
