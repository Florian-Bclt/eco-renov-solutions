"use client"

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Image from 'next/image';

const Photovoltaique = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "La prime à l'autoconsommation",
      content: (
        <>
          <p>
            Une aide financière pour les installations en autoconsommation avec vente du surplus. Le montant de cette prime dépend de la puissance de votre installation et est réparti sur cinq ans.
          </p>
          <p>Pour les demandes de raccordement effectuées entre le 1er novembre 2024 et le 31 janvier 2025, les montants sont :</p>
          <ul className="ml-4 list-none">
            <li>≤ 3 kWc : <strong>220 €/kWc</strong></li>
            <li>≤ 9 kWc : <strong>160 €/kWc</strong></li>
            <li>≤ 36 kWc : <strong>190 €/kWc</strong></li>
            <li>≤ 100 kWc : <strong>100 €/kWc</strong></li>
          </ul>
          <p className="mt-2">
            Exemple : Une installation de 3 kWc bénéficiera d’une prime totale de <strong>660 €</strong> (220 x 3).
          </p>
          <p className="mt-2">
            Ces montants sont susceptibles d’évoluer chaque trimestre en fonction des décisions de la Commission de Régulation de l'Énergie (CRE).
          </p>
        </>
      ),
    },
    {
      title: "Le tarif de rachat de l'électricité",
      content: (
        <>
          <p>
            Lorsque vous produisez plus d'électricité que vous n'en consommez, le surplus est injecté sur le réseau public et racheté par EDF à un tarif fixé et arrêté.
          </p>
          <p>Pour la période du 1er novembre 2024 au 31 janvier 2025, les tarifs de rachat sont :</p>
          <ul className="ml-4 list-none">
            <li><strong>✔ Vente au surplus :</strong> ≤ 3 kWc : <strong>0,10 €/kWh</strong> | ≤ 36 kWc : <strong>0,06 €/kWh</strong></li>
            <li><strong>✔ Vente Totale :</strong> ≤ 9 kWc : <strong>0,18 €/kWh</strong> | ≤ 36 kWc : <strong>0,15 €/kWh</strong></li>
          </ul>
          <p className="mt-2">
            Ces tarifs sont révisés trimestriellement par la CRE.
          </p>
        </>
      ),
    },
  ];

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
          <h1 className="text-4xl font-bold">Panneaux Photovoltaïques</h1>
          <p className="mt-2 text-lg">Produisez Votre Propre Énergie Verte</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <p className="mt-6 text-xl md:text-2xl leading-relaxed text-center md:w-1/2 flex justify-center m-auto">
          Chez Eco Renov Solutions, nous vous aidons à devenir acteur de votre consommation énergétique en installant des panneaux photovoltaïques adaptés à vos besoins.
        </p>
      </section>

      {/* Autoconsommation */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600">Qu'est-ce que l'autoconsommation ?</h2>
        <p className="mt-6 text-lg leading-relaxed text-center">
          L'autoconsommation consiste à produire votre propre électricité grâce à des panneaux solaires installés sur votre toit ou votre terrain, et à utiliser cette énergie pour vos besoins quotidiens.
          Cette approche vous permet de réduire significativement votre facture d'électricité et de diminuer votre empreinte carbone.
        </p>
      </section>

      {/* Solutions pour particuliers */}
      <section className="py-12 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600">Nos offres pour les particuliers</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24 mt-6">
          {["panneau1.jpg", "panneau2.jpg", "panneau3.jpg"].map((image, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={`/images/${image}`}
                alt={`Panneaux photovoltaïques particuliers ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-60 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 text-lg text-gray-700 text-center">
          <p>Nous proposons des kits photovoltaïques adaptés aux différentes tailles de foyers :</p>
          <ul className="text-lg text-gray-700 text-left max-w-xl mx-auto mt-4 ml-4">
            <li>✔ 3 kWc : Idéal pour les petites habitations.</li>
            <li>✔ 6 kWc : Convient aux maisons de taille moyenne.</li>
            <li>✔ 9 kWc : Parfait pour les grandes maisons avec une consommation énergétique élevée.</li>
            <li>✔ 12 kWc : Pour les très grandes habitations ou les petites copropriétés.</li>
            <li>✔ 24 kWc : Adapté aux très grandes propriétés ou aux besoins spécifiques.</li>
          </ul>
        </div>
      </section>

      {/* Solutions pour professionnels */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600">Nos solutions pour les professionnels et les grandes puissances</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 lg:px-24 mt-6">
          {["panneau4.jpg", "panneau5.jpg", "panneau6.jpg"].map((image, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image
                src={`/images/${image}`}
                alt={`Panneaux photovoltaïques professionnels ${index + 1}`}
                width={400}
                height={300}
                className="w-full h-60 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="mt-6 text-lg text-gray-700 text-center">
          <p>Notre équipe spécialisée accompagne les entreprises et les structures nécessitant des installations de grande envergure :</p>
          <ul className="text-lg text-gray-700 text-left max-w-xl mx-auto mt-4">
            <li>✔ 36 kWc : Idéal pour les PME et les petits commerces.</li>
            <li>✔ 100 kWc : Convient aux bâtiments industriels et aux grandes surfaces commerciales.</li>
            <li>✔ 250 kWc : Parfait pour les centres logistiques et les usines.</li>
            <li>✔ 500 kWc et plus : Pour les très grandes installations, telles que les parcs solaires.</li>
          </ul>
        </div>
      </section>

      {/* Avantages financiers */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-600">Les avantages financiers de l'autoconsommation</h2>
        <p className="text-lg text-center mt-4">
          En plus des économies réalisées sur votre facture d'électricité, l'État encourage l'installation de panneaux photovoltaïques avec :
        </p>
        
        <div className="mt-6 max-w-2xl mx-auto">
          {sections.map((section, index) => (
            <div key={index} className="mb-4 bg-white p-4 rounded-lg shadow-md">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full text-lg font-semibold text-blue-600"
              >
                {section.title}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && <div className="mt-2 text-gray-700">{section.content}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-blue-600">Pourquoi choisir Eco Renov Solutions ?</h2>
        <ul className="mt-6 space-y-4 text-lg max-w-2xl mx-auto">
          <li>✔ <strong>Expertise :</strong> Une équipe de professionnels qualifiés pour vous conseiller et installer vos panneaux photovoltaïques.</li>
          <li>✔ <strong>Accompagnement personnalisé :</strong> De l'étude de votre projet à la mise en service.</li>
          <li>✔ <strong>Solutions sur mesure :</strong> Des kits adaptés à vos besoins énergétiques et à votre budget.</li>
        </ul>
      </section>
    </main>
  );
};

export default Photovoltaique;
