import React from 'react';
import { 
  BookOpen, 
  Target, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  UserPlus, 
  PhoneCall, 
  Check, 
  Monitor, 
  School, 
  GraduationCap, 
  UsersRound,
  MessageCircle,
  Globe
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20 overflow-x-hidden">
      {/* Hero Section Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold">
                <Star className="w-4 h-4 fill-current" />
                <span>N°1 de l'accompagnement scolaire au secondaire</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                  La réussite scolaire au collège et au lycée, <span className="text-blue-600">en ligne et en présentiel</span>
                </h1>
                <p className="text-xl text-slate-700 font-medium max-w-2xl mx-auto lg:mx-0">
                  Accompagnez votre enfant vers l’excellence grâce à un suivi structuré, des méthodes efficaces et un encadrement sérieux.
                </p>
                <p className="text-lg text-slate-500 italic max-w-xl mx-auto lg:mx-0 border-l-4 border-blue-600 pl-4 py-1">
                  🎯 Génie Académie accompagne les élèves et rassure les parents avec des solutions pédagogiques adaptées aux programmes francophones.
                </p>

                {/* Main CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center group">
                    <BookOpen className="mr-2 w-5 h-5" />
                    📘 Inscrire un élève
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="https://wa.me/22959270718" className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-md hover:-translate-y-1 flex items-center justify-center group">
                    <PhoneCall className="mr-2 w-5 h-5 text-blue-600" />
                    📞 Parler à un conseiller
                  </a>
                </div>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right duration-1000">
              <div className="absolute -inset-4 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                alt="Accompagnement scolaire de qualité" 
                className="relative rounded-[2.5rem] shadow-2xl border-4 border-white object-cover aspect-video lg:aspect-square"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block max-w-[240px] animate-bounce-slow">
                <div className="flex items-center space-x-2 text-blue-600 mb-2 font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Suivi Garanti</span>
                </div>
                <p className="text-xs text-slate-500">Mise à jour régulière des parents sur les progrès de l'élève.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Double Target Section: Pupils & Parents */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Students */}
          <div className="bg-blue-600 text-white p-10 rounded-[2rem] shadow-xl relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <GraduationCap className="w-48 h-48" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl font-bold flex items-center">
                <GraduationCap className="mr-3 w-8 h-8" /> 🎓 Pour les élèves
              </h3>
              <p className="text-xl font-semibold text-blue-100">Tu as du mal à comprendre certains cours ?</p>
              <p className="text-lg leading-relaxed">
                Nous t’aidons à progresser, à prendre confiance et à réussir tes examens grâce à des méthodes simples et efficaces. Libère ton génie dès aujourd'hui !
              </p>
              <a href="#/college" className="inline-flex items-center font-bold text-white border-b-2 border-white pb-1 hover:text-blue-200 hover:border-blue-200 transition-all">
                Commencer à progresser <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* For Parents */}
          <div className="bg-emerald-600 text-white p-10 rounded-[2rem] shadow-xl relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <UsersRound className="w-48 h-48" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl font-bold flex items-center">
                <UsersRound className="mr-3 w-8 h-8" /> 👨‍👩‍👧 Pour les parents
              </h3>
              <p className="text-xl font-semibold text-emerald-100">Vous souhaitez garantir la réussite scolaire de votre enfant ?</p>
              <p className="text-lg leading-relaxed">
                Génie Académie vous offre un accompagnement sérieux, un suivi régulier et des résultats mesurables. Soyez sereins, l'avenir de votre enfant est entre de bonnes mains.
              </p>
              <a href="#/parents" className="inline-flex items-center font-bold text-white border-b-2 border-white pb-1 hover:text-emerald-200 hover:border-emerald-200 transition-all">
                En savoir plus pour mon enfant <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulas Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">📚 Nos Formules d'Accompagnement</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto italic">Des solutions flexibles adaptées à chaque besoin.</p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Online */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <Monitor className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">💻 Accompagnement en ligne</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Cours interactifs",
                "Exercices corrigés",
                "Suivi à distance",
                "Accès flexible"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-700 font-medium">
                  <div className="bg-blue-100 p-1 rounded-full mr-3">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Presentiel */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-emerald-50 text-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
              <School className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6">🏫 Accompagnement en présentiel</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Encadrement direct",
                "Groupes réduits",
                "Suivi individualisé",
                "Discipline et rigueur"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-slate-700 font-medium">
                  <div className="bg-emerald-100 p-1 rounded-full mr-3">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">⭐ Pourquoi nous choisir ?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Méthodes pédagogiques éprouvées", desc: "Des approches qui ont fait leurs preuves sur des milliers d'élèves.", icon: <Target className="w-8 h-8 text-blue-600" /> },
              { title: "Enseignants compétents et engagés", desc: "Des experts passionnés par la transmission du savoir.", icon: <Users className="w-8 h-8 text-emerald-600" /> },
              { title: "Suivi personnalisé élève – parent", desc: "Un lien permanent pour assurer la cohérence de l'encadrement.", icon: <UsersRound className="w-8 h-8 text-orange-600" /> },
              { title: "Adapté aux réalités africaines", desc: "Des contenus qui résonnent avec le contexte et les programmes locaux.", icon: <Globe className="w-8 h-8 text-blue-400" /> },
              { title: "Résultats visibles et durables", desc: "Une progression mesurable dès les premières semaines.", icon: <CheckCircle2 className="w-8 h-8 text-green-500" /> }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-white shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
                <div className="mb-4 bg-slate-50 p-4 rounded-full">{feature.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-slate-900">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="bg-slate-900 mx-4 lg:mx-auto max-w-7xl rounded-[3rem] py-20 px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Prêt à faire le bon choix pour l’avenir scolaire ?
          </h2>
          <p className="text-slate-300 text-xl">
            👉 Inscrivez votre enfant dès aujourd’hui ou contactez-nous pour un accompagnement personnalisé.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
            <a href="#/contact" className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all flex items-center justify-center shadow-2xl">
              <UserPlus className="mr-3 w-6 h-6" /> Inscrire mon enfant
            </a>
            <a href="https://wa.me/22959270718" target="_blank" rel="noopener" className="bg-green-600 text-white px-8 py-5 rounded-2xl font-bold text-xl hover:bg-green-700 transition-all flex items-center justify-center shadow-2xl">
              <MessageCircle className="mr-3 w-6 h-6" /> WhatsApp Direct
            </a>
          </div>

          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-400">
            <div className="flex items-center space-x-2">
              <PhoneCall className="w-5 h-5 text-blue-400" />
              <span>+229 93 66 60 59</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>bsabi2028@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;