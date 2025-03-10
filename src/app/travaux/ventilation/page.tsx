import React from 'react';
import Image from 'next/image';

const Ventilation = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center">
        <Image
            src="/images/ventilation.jpg"
            alt="Système de ventilation mécanique contrôlée"
            fill
            priority
            className="absolute z-0 object-cover"
         />  
        <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-2xl relative z-10">
          <h1 className="text-4xl font-bold">Optimisez la ventilation de votre logement</h1>
          <p className="mt-2 text-lg">Assurez une qualité d'air optimale et limitez l'humidité</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-blue-600">Pourquoi la ventilation est essentielle ?</h2>
        <p className="mt-6 text-lg leading-relaxed text-center">
          Une bonne ventilation permet de renouveler l'air intérieur, d'éliminer l'humidité excessive et de prévenir l'apparition de moisissures. Découvrez les différents systèmes de VMC adaptés à votre habitation.
        </p>
      </section>

      {/* Types of Ventilation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/vmc_simple.jpg" 
              alt="VMC Simple Flux"
              width={384}
              height={320}
              className="w-full h-auto md:h-80 md:min-h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">VMC Simple Flux</h3>
            <p className="mt-4 text-gray-700">
              Système économique permettant d'extraire l'air vicié des pièces humides tout en apportant un renouvellement d'air extérieur constant.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/images/vmc_double.jpg" 
              alt="VMC Double Flux"
              width={384}
              height={320}
              className="w-full h-auto md:h-80 md:min-h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">VMC Double Flux</h3>
            <p className="mt-4 text-gray-700">
              Un système plus performant qui permet de récupérer la chaleur de l'air extrait pour préchauffer l'air entrant, réduisant ainsi vos besoins en chauffage.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-600">Les avantages d'une ventilation performante</h2>
        <ul className="mt-6 space-y-4 text-lg">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Amélioration de la qualité de l'air intérieur.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Réduction de l'humidité et prévention des moisissures.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Réduction des pertes de chaleur avec la VMC double flux.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Valorisation de votre bien immobilier.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Ventilation;
