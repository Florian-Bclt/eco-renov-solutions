import React from 'react';
import Image from 'next/image';

const Photovoltaique = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center">
        <Image
          src="/images/panneau.jpg"
          alt="Hero background"
          fill
          priority
          className="absolute z-0 object-cover"
        />
        <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-2xl relative z-10">
          <h1 className="text-4xl font-bold">Installation de panneaux photovoltaïques</h1>
          <p className="mt-2 text-lg">Produisez votre propre énergie et réduisez vos factures</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-blue-600">Pourquoi choisir le solaire ?</h2>
        <p className="mt-6 text-lg leading-relaxed text-center">
          L’installation de panneaux photovoltaïques vous permet de produire votre propre électricité,
          de réduire votre dépendance aux fournisseurs d’énergie et de réaliser des économies importantes
          sur vos factures.
        </p>
      </section>

      {/* Image & Text Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 lg:px-24">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            src="/images/panneau1.jpg" 
            alt="Panneaux photovoltaïques"
            height={300}
            width={500}
            className="w-full h-full max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-700 text-left">
            Opter pour l'énergie solaire, c'est faire un choix écologique et économique. <br />
             Grâce aux avancées
            technologiques, les panneaux photovoltaïques sont plus performants que jamais et offrent un
            excellent retour sur investissement.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-600">Les avantages de l'énergie solaire</h2>
        <ul className="mt-6 space-y-4 text-lg">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Réduction significative des factures énergétiques.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Production d'une énergie propre et renouvelable.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Valorisation de votre bien immobilier.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Indépendance énergétique face aux hausses des prix de l'électricité.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Photovoltaique;
