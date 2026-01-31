
import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">Nous Contacter</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Une question ? Un besoin d'accompagnement ? Notre équipe est à votre écoute.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Info Cards */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Téléphone</h4>
              <p className="text-slate-600">+229 93 66 60 59</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
            <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">WhatsApp</h4>
              <p className="text-slate-600">+229 59 27 07 18</p>
              <a href="https://wa.me/22959270718" className="text-emerald-600 text-sm font-bold hover:underline">Démarrer une discussion</a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
            <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Email</h4>
              <p className="text-slate-600">bsabi2028@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in duration-500">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-green-600">
                <Send className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Message envoyé !</h2>
              <p className="text-slate-600 text-lg">L'équipe de Génie Académie vous répondra sous 24h.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-blue-600 font-bold hover:underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nom & Prénom</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Jean Kouassi" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Adresse Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="votre@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Niveau de l'élève</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                  <option>Collège - 6ème</option>
                  <option>Collège - 5ème</option>
                  <option>Collège - 4ème</option>
                  <option>Collège - 3ème</option>
                  <option>Lycée - Seconde</option>
                  <option>Lycée - Première</option>
                  <option>Lycée - Terminale</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Votre Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Comment pouvons-nous aider votre enfant ?"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
