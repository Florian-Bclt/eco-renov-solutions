
import React from 'react';
import Image from 'next/image';

const Chauffage = () => {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center">
        <Image
            src="/images/pompe_a_chaleur.jpg"
            alt="Hero background"
            fill
            className="absolute z-0 object-cover"
            priority
        />
        <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-2xl relative z-10">
          <h1 className="text-4xl font-bold">Pompe à Chaleur</h1>
          <p className="mt-2 text-lg">Une solution écologique et économique.</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <p className="mt-6 text-xl md:text-2xl leading-relaxed text-center md:w-1/2 flex justify-center m-auto">Chez Eco Renov Solutions,nous vous accompagnons dans la transition énergétique grâce à l'installation de pompes à chaleur performantes et adaptées à vos besoins.</p>
        <h2 className="text-2xl md:text-3xl font-bold mt-6 text-center text-blue-600">Qu'est-ce qu'une pompe à chaleur (PAC) ?</h2>
        <p className="mt-6 text-lg leading-relaxed text-center">
          La pompe à chaleur est un système qui capte les calories présentes dans l'air extérieur pour chauffer votre intérieur ou votre eau sanitaire.<br />
          C'est une solution économique, écologique et confortable, idéale pour réduire votre consommation d'énergie.
        </p>
      </section>

      {/* Types of Heating Solutions */}
      <h2 className="text-2xl md:text-3xl font-bold mt-6 text-center text-blue-600">Nos solutions de pompe à chaleur</h2>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/pompe_air_air.jpg" 
              alt="Pompe à chaleur air/eau" 
              width={384}
              height={320}
              className="w-full h-auto md:h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">PAC Air/Eau</h3>
            <p className="mt-4 text-gray-700">
              Ce système utilise l'air extérieur pour chauffer l'eau de votre réseau de chauffage (radiateurs, plancher chauffant, ballon d'eau chaude). Il est parfaitement adapté aux maisons individuelles et aux grandes surfaces.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/ventilation.jpg" 
              alt="Pompe à chaleur air/air" 
              width={384}
              height={320}
              className="w-full h-auto md:h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">PAC Air/Air avec Climatisation</h3>
            <p className="mt-4 text-gray-700">
              Idéale pour chauffer et rafraîchir votre habitation, cette solution fonctionne comme une climatisation réversible. Elle permet de maintenir une température agréable toute l'année.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/parquet.jpg" 
              alt="Pompe à chaleur eau/eau" 
              width={384}
              height={320}
              className="w-full h-auto md:h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">Plancher Chauffant</h3>
            <p className="mt-4 text-gray-700">
              Pour un confort optimal, nous proposons l'installation de pompes à chaleurs reliées à un plancher chauffant basse température, qui diffuse une chaleur douce et homogène.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/pompe_eau_eau.jpg" 
              alt="Ballon thermodynamique" 
              width={384}
              height={320}
              className="w-full h-auto md:h-80 max-h-80 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">Ballon d'Eau Chaude Thermodynamique</h3>
            <p className="mt-4 text-gray-700">
              Solution écologique et économique qui chauffe l’eau grâce aux calories présentes dans l’air ambiant, réduisant ainsi votre consommation d’énergie.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-600">Des solutions adaptées aux grandes surfaces</h2>
        <p className='mt-4 text-lg'>Notre expertise ne se limite pas aux habitations individuelles ! Nous avons une structure dédiées aux grandes puissances pour équiper efficacement :</p>
        <ul className="mt-6 space-y-4 text-lg">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Châteaux et manoirs
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Bâtiments tertiaires (bureaux, commerces, industries)
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">✔</span>
            Hôtellerie et grands établissements
          </li>
          <p className='mt-4 text-lg'>Nous vous accompagnons de l'étude de votre projet à l'installation complète, en vous proposant des solutions sur mesure adaptées à vos besoins et à votre budget.</p>
          
        </ul>
      </section>
    </main>
  );
};

export default Chauffage;
