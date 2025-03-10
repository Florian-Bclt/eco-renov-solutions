import React from 'react';
import Image from 'next/image';

const Huisseries = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center">
        <Image
          src="/images/fenetres.jpg"
          alt="Hero background"
          fill
          priority
          className="absolute z-0 object-cover"
        />
        <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-2xl relative z-10">
          <h1 className="text-4xl font-bold">Rénovation des huisseries</h1>
          <p className="mt-2 text-lg">Améliorez l’isolation et la sécurité de votre habitat</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-blue-600">Pourquoi changer vos huisseries ?</h2>
        <p className="mt-6 text-lg leading-relaxed text-center">
          Le remplacement des portes et volets joue un rôle essentiel dans l’amélioration de l’isolation thermique et acoustique 
          de votre logement. Modernisez vos huisseries pour plus de confort, de sécurité et d’économies d’énergie.
        </p>
      </section>

      {/* Types of Huisseries */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24">
          {/* Porte d'entrée */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/porte.jpg"
              alt="Porte d'entrée"
              width={384}
              height={320}
              className="w-full h-auto md:h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">Porte d'Entrée</h3>
            <p className="mt-4 text-gray-700">
              Sécurisez votre habitat tout en améliorant son isolation thermique et phonique avec une porte d’entrée moderne et performante.
            </p>
          </div>
          {/* Volets bois */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/volet_bois.jpg"
              alt="Volets en bois"
              width={384}
              height={320}
              className="w-full h-auto md:h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">Volets en Bois</h3>
            <p className="mt-4 text-gray-700">
              Offrant un charme authentique et une isolation efficace, les volets en bois constituent un excellent choix pour les maisons traditionnelles.
            </p>
          </div>
          {/* Volets roulants électriques */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/volet_elect.jpg"
              alt="Volets roulants électriques"
              width={384}
              height={320}
              className="w-full h-auto md:h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">Volets Roulants Électriques</h3>
            <p className="mt-4 text-gray-700">
              Optez pour un confort optimal grâce aux volets roulants motorisés. Faciles à utiliser, ils améliorent l’isolation et la sécurité de votre logement.
            </p>
          </div>
          {/* Volets roulants solaires */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/volet_solaire.webp" 
              alt="Volets roulants solaires"
              width={384}
              height={320}
              className="w-full h-auto md:h-80 md:min-h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">Volets Roulants Solaires</h3>
            <p className="mt-4 text-gray-700">
              Une solution écologique et autonome, fonctionnant à l’énergie solaire. Facile à installer, sans raccordement électrique.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-600">Les avantages des huisseries performantes</h2>
        <ul className="mt-6 space-y-4 text-lg">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Amélioration de l’isolation thermique et acoustique.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Sécurité renforcée avec des huisseries modernes et résistantes.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Valorisation de votre bien immobilier.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Confort d’utilisation avec des systèmes motorisés et connectés.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Huisseries;
