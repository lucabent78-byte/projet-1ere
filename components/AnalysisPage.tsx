import React from 'react';
import { ArrowUpFromLine, Hammer, Users, CheckCircle2, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const AnalysisPage: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in pb-12 max-w-5xl mx-auto">
      
      {/* Title Section */}
      <div className="text-center space-y-4 py-8 border-b border-slate-200">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Comparaison Critique
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Deux modèles de développement urbain opposés.
        </p>
      </div>

      {/* 1. Verticalité vs Horizontalité */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-slate-900">
           <ArrowUpFromLine className="w-8 h-8 text-blue-600" />
           <h2 className="text-2xl font-bold">1. Morphologie : Verticale vs Horizontale</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* DUBAI */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100">
                 <ImageWithFallback 
                    src="/assets/dubai-skyline.jpg" 
                    alt="Skyline Dubaï" 
                    className="absolute inset-0 w-full h-full object-cover"
                 />
              </div>
              <div className="p-6 flex-1">
                 <h3 className="font-bold text-lg mb-2 text-blue-600">Dubaï : La course au ciel</h3>
                 <p className="text-slate-600 text-sm">
                    Une ville verticale.Le paysage est dominé par le Burj Khalifa (828m) et une forêt le long de la Sheikh Zayed Road.
                 </p>
              </div>
           </div>
           {/* ZURICH */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100">
                 <ImageWithFallback 
                    src="/assets/zurich-roofs.jpg" 
                    alt="Vue toits Zurich" 
                    className="absolute inset-0 w-full h-full object-cover"
                 />
              </div>
              <div className="p-6 flex-1">
                 <h3 className="font-bold text-lg mb-2 text-red-600">Zurich : L'échelle humaine</h3>
                 <p className="text-slate-600 text-sm">
                    Une ville horizontale. La réglementation stricte et la volonté de préserver la vue sur le lac et les Alpes limitent la hauteur. Les rares tours (Prime Tower) sont des exceptions à la règle.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 2. Chantier Permanent vs Ville Finie */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-slate-900">
           <Hammer className="w-8 h-8 text-orange-600" />
           <h2 className="text-2xl font-bold">2. Dynamique : Chantier vs Préservation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* DUBAI */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100">
                 <ImageWithFallback 
                    src="/assets/dubai-construction.jpg" 
                    alt="Construction Dubaï" 
                    className="absolute inset-0 w-full h-full object-cover"
                 />
              </div>
              <div className="p-6 flex-1">
                 <div className="flex items-center gap-2 mb-2 text-orange-600 font-medium text-sm">
                    <AlertTriangle size={16} /> En construction permanente
                 </div>
                 <p className="text-slate-600 text-sm">
                    Le paysage est marqué par l'omniprésence des grues. La ville est en perpétuel développement, avec des quartiers entiers sortant du sable en quelques années (ex: Creek Harbour). 
                 </p>
              </div>
           </div>
           {/* ZURICH */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100">
                 <ImageWithFallback 
                    src="/assets/zurich-street.jpg" 
                    alt="Rue calme Zurich" 
                    className="absolute inset-0 w-full h-full object-cover"
                 />
              </div>
              <div className="p-6 flex-1">
                 <div className="flex items-center gap-2 mb-2 text-emerald-600 font-medium text-sm">
                    <CheckCircle2 size={16} /> Stabilité & Rénovation
                 </div>
                 <p className="text-slate-600 text-sm">
                    Pas de chantiers aussi importants. On rénove, on transforme mais on ne démolit pas le centre. Le paysage semble "fini", stable , privilégiant la solidité
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. Ségrégation vs Homogénéité */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 text-slate-900">
           <Users className="w-8 h-8 text-purple-600" />
           <h2 className="text-2xl font-bold">3. Structure Sociale : Inégalités vs Mixité</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* DUBAI */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="grid grid-cols-2 h-48 border-b border-slate-100">
                  <div className="bg-slate-50 relative border-r border-slate-100">
                     <ImageWithFallback 
                        src="/assets/dubai-luxury.jpg" 
                        alt="Luxe Dubaï" 
                        className="absolute inset-0 w-full h-full object-cover" 
                     />
                  </div>
                  <div className="bg-slate-100 relative">
                     <ImageWithFallback 
                        src="/assets/dubai-labor.jpg" 
                        alt="Travail Dubaï" 
                        className="absolute inset-0 w-full h-full object-cover" 
                     />
                  </div>
              </div>
              <div className="p-6 flex-1">
                 <h3 className="font-bold text-lg mb-2 text-purple-600">Dubaï : Mondes séparés</h3>
                 <p className="text-slate-600 text-sm">
                    Une ségrégation spatiale extrême. D'un côté, les gated communities et tours de luxe (Marina, Palm) pour les expatriés riches. De l'autre, les camps de travailleurs (Sonapur) cachés en périphérie industrielle. Les deux mondes ne se croisent pas.
                 </p>
              </div>
           </div>
           {/* ZURICH */}
           <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="h-48 bg-slate-100 relative border-b border-slate-100">
                 <ImageWithFallback 
                    src="/assets/zurich-housing.jpg" 
                    alt="Logement Zurich" 
                    className="absolute inset-0 w-full h-full object-cover" 
                 />
              </div>
              <div className="p-6 flex-1">
                 <h3 className="font-bold text-lg mb-2 text-emerald-600">Zurich : Tissu Homogène</h3>
                 <p className="text-slate-600 text-sm">
                    Il n'y a pas de "quartiers pauvres" ou de bidonvilles. Le standard de logement est élevé partout, créant un paysage urbain socialement continu sans grosse rupture.
                 </p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};
