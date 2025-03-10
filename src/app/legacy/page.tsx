"use client";

import { useState } from "react";
import legacyData from "@/constants/legacy.json";

export default function Legacy() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-gray-100 text-gray-800 p-6 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">Mentions Légales</h1>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl mx-auto">
        {/* Section fixe */}
        <h2 className="w-full text-left py-3 flex justify-between items-center font-semibold text-lg text-blue-800">Editeur</h2>
        <p className="p-4 text-gray-700">
          Le site est édité par <span className="text-blue-800">Eco Renov Solution</span>, <br/>
          dont le siège social est situé <span className="text-blue-800">8 rue Victor Griffuelhes 91690 Saclas</span> <br/>
          N° SIRET: <span className="text-blue-800">FR76 0000</span> , N° TVA intracommunautaire: <span className="text-blue-800">6666666</span> <br />
          Téléphone : <span className="text-blue-800">06 6666666</span> <br />
          Email: <span className="text-blue-800">contact@eco-renov-solutions.fr</span>
        </p>
        <h2 className="w-full text-left py-3 flex justify-between items-center font-semibold text-lg text-blue-800">Conception / Réalisation / Hébergement</h2>
        <p className="p-4 text-gray-700">
          Le site est réalisé par la société <a href="https://boucletflorian.com" className="text-blue-800">Bouclet Florian</a>, <br/>
          et est hébergé par <span className="text-blue-800">Vercel</span>, <br />
          Siège social: <span className="text-blue-800">siege</span>
        </p>
        <h2 className="w-full text-left py-3 flex justify-between items-center font-semibold text-lg text-blue-800">Propriété intellectuelle</h2>
        <p className="p-4 text-gray-700">
        La structure générale du site, ainsi que les textes sont la propriété de Eco Renov Solutions. Les graphiques, images, sons et vidéos le composant peuvent être libres de droits. Toute reproduction sans autorisation est interdite et pourrait constituer une contrefaçon selon les articles L 335-2 et suivants du Code de la propriété intellectuelle.
        </p>
        <h2 className="w-full text-left py-3 flex justify-between items-center font-semibold text-lg text-blue-800">Politique de confidentialité des données personnelles</h2>
        <p className="p-4 text-gray-700">
        Nous collectons des données personnelles dans le respect du RGPD. Pour plus d'informations, contactez notre Délégué à la Protection des Données (DPO) à l'adresse indiquée ci-dessus.
        </p>
     
        {/* Sections dynamiques depuis le json */}
        {legacyData.map((section, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left py-3 flex justify-between items-center font-semibold text-lg text-blue-800"
            >
              {section.title}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700">
                <p>{section.content}</p>
                {section.list && (
                  <ul className="mt-2 list-disc pl-6">
                    {section.list.map((item: string, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
