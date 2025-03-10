import React from 'react';
import Image from 'next/image';

const Isolation = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center">
        <Image
            src="/images/isolation_combles.jpg"
            alt="Hero background"
            fill
            priority
            className="absolute z-0 object-cover"
        />
        <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-2xl relative z-10">
          <h1 className="text-4xl font-bold">Isolation de Votre Habitat</h1>
          <p className="mt-2 text-lg">Améliorez votre confort et réalisez des économies d'énergie</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-blue-600">Pourquoi l'isolation est essentielle ?</h2>
        <p className="mt-6 text-lg leading-relaxed text-center">
          Une bonne isolation thermique est la clé pour réduire vos factures d'énergie, améliorer votre confort intérieur et contribuer à la protection de l'environnement. Découvrez comment nos solutions d'isolation peuvent transformer votre habitat.
        </p>
      </section>

      {/* Types of Insulation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/isolation_combles.jpg"
              alt="Isolation des combles"
              width={384}
              height={320}
              className="w-full h-auto md:h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">Isolation des Combles</h3>
            <p className="mt-4 text-gray-700">
              Réduisez les pertes thermiques en isolant vos combles. Une solution idéale pour diminuer vos dépenses énergétiques tout en augmentant la valeur de votre bien immobilier.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/isolation.jpg"
              alt="Isolation des murs"
              width={384}
              height={320}
              className="w-full h-auto md:h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">Isolation thermique intérieure</h3>
            <p className="mt-4 text-gray-700">
              Protégez votre maison contre les variations de température avec une isolation performante de vos murs, adaptée à tous les types de construction.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/parquet.jpg" 
              alt="Isolation des planchers" 
              width={384}
              height={320}
              className="w-full h-auto md:h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">Isolation des Planchers bas</h3>
            <p className="mt-4 text-gray-700">
              Améliorez le confort thermique de vos sols grâce à des solutions d'isolation adaptées à vos besoins, que ce soit pour des planchers bas ou intermédiaires.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/images/isolation_facade.jpg"
              alt="Isolation de la toiture"
              width={384}
              height={320}
              className="w-full h-auto md:h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">Isolation thermique extérieure</h3>
            <p className="mt-4 text-gray-700">
              Protégez votre maison des intempéries et conservez la chaleur en isolant efficacement votre toiture.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-600">Les avantages d'une bonne isolation</h2>
        <ul className="mt-6 space-y-4 text-lg">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Réduction significative des factures énergétiques.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Amélioration du confort thermique en été comme en hiver.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Valorisation de votre bien immobilier.
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Réduction de l'empreinte carbone.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Isolation;

