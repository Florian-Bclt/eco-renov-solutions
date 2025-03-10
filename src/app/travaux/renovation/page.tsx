"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SlEnergy } from "react-icons/sl";
import { TbTemperatureSun } from "react-icons/tb";
import { FaPiggyBank } from "react-icons/fa6";
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

const Renovation = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  }

  const cards = [
    {
      icon: <SlEnergy className='text-4xl text-blue-600'/>,
      title: "Optimisez votre consommation énergétique et réalisez des économies durables",
      content: "Une rénovation globale, bien pensée, transforme votre logement en une habitation plus économe et performante. Grâce à un audit énergétique approfondi, les travaux ciblent efficacement les failles de votre habitat, garantissant ainsi des résultats optimaux.\n\nPlutôt que d’effectuer des améliorations au coup par coup, une rénovation complète vous permet d’agir sur tous les points faibles en une seule fois. Résultat ? Une performance énergétique accrue, des économies d’énergie significatives et des factures allégées hiver comme été."
    },
    {
      icon: <TbTemperatureSun className='text-4xl text-blue-600'/>,
      title: "Un confort amélioré au quotidien",
      content: "Au-delà des économies d’énergie, une rénovation globale vous apporte un bien-être incomparable tout au long de l’année :",
      list: [
        "\n\n✅ Température idéale en toute saison : une meilleure isolation réduit les écarts de température, pour une sensation de confort optimal en hiver comme en été.",
        "\n✅ Moins de nuisances sonores : les matériaux utilisés limitent la pénétration des bruits extérieurs, pour un intérieur plus paisible.",
        "\n✅ Un air plus sain : une ventilation optimisée améliore la qualité de l’air intérieur, réduisant l’humidité et les polluants domestiques."
      ]
    },
    {
      icon : <FaPiggyBank className='text-4xl text-blue-600'/>,
      title: "Valorisez votre bien et anticipez les évolutions du marché immobilier",
      content: "En améliorant la classe énergétique de votre logement sur le DPE (Diagnostic de Performance Énergétique), vous le rendez plus attractif et compétitif sur le marché immobilier.",
      list: [
        "\n\n✅ Un atout majeur pour la vente ou la location : un logement mieux classé se vend plus rapidement et à un meilleur prix.",
        "\n✅ Conformité aux réglementations : la loi Climat et Résilience restreint progressivement la location des passoires thermiques (logements classés F ou G). En anticipant ces exigences, vous sécurisez votre investissement et évitez d’éventuelles interdictions de mise en location.",
        "\n✅ Un nouveau souffle pour votre habitat : au-delà des performances énergétiques, une rénovation peut être l’occasion d’améliorer l’esthétique de votre maison avec un ravalement de façade, une modernisation des pièces intérieures ou encore une mise aux normes des installations électriques."
      ]
    }
  ]
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="relative bg-cover bg-center h-96 flex items-center justify-center text-white text-center">
        <Image
            src="/images/plans.jpg"
            alt="Hero background"
            fill
            priority
            className="absolute z-0 object-cover"
        />
        <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-2xl relative z-10">
          <h1 className="text-4xl font-bold">Rénovation d'ampleur</h1>
          <p className="mt-2 text-lg">Améliorez votre confort et réalisez des économies d'énergie</p>
        </div>
      </header>

      {/* Card Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-blue-100 text-center">
        <h2 className="text-3xl font-bold text-blue-600">Pourquoi opter pour une rénovation d'ampleur ?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer relative flex flex-col"
              onClick={() => toggleCard(index)}
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 flex items-center justify-center bg-blue-200 rounded-full">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 flex justify-center items-center">
                {card.title}
              </h3>
              <span className="text-blue-600 text-2xl flex justify-center items-center mt-2">{openIndex === index ? <IoMdRemove /> : <IoMdAdd />}</span>
              {openIndex === index && (
                <div className="text-gray-700 mt-4 transition-opacity duration-300 opacity-100 text-left">
                  <p>{card.content}</p>
                  {card.list && (
                    <ul className="mt-2 list-none">
                      {card.list.map((item, i) => (
                        <li key={i} className='pb-2'>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-600">Par où commencer ?</h2>
        <p className="text-xl text-blue-900 mt-6 text-center max-w-3xl mx-auto">
          Pour garantir une rénovation énergétique efficace et maximiser vos économies, il est essentiel de respecter une démarche cohérente. Voici les principales étapes à suivre :
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card: Isolation thermique */}
          <Link href="/travaux/isolation" className="group block bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 cursor-pointer text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
              <span className="text-3xl text-blue-600">🏠</span>
            </div>
            <h3 className="text-lg font-bold text-blue-900 mt-4">Isolation thermique</h3>
            <p className="text-gray-700 mt-2 text-sm">
              Réduisez les pertes énergétiques et améliorez le confort thermique de votre logement.
            </p>
          </Link>

          {/* Card: Remplacement du système de chauffage */}
          <Link href="/travaux/chauffage" className="group block bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 cursor-pointer text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
              <span className="text-3xl text-blue-600">🔥</span>
            </div>
            <h3 className="text-lg font-bold text-blue-900 mt-4">Système de chauffage</h3>
            <p className="text-gray-700 mt-2 text-sm">
              Optez pour un équipement plus performant et économique adapté à vos besoins.
            </p>
          </Link>

          {/* Card: Ventilation optimisée */}
          <Link href="/travaux/ventilation" className="group block bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 cursor-pointer text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
              <span className="text-3xl text-blue-600">💨</span>
            </div>
            <h3 className="text-lg font-bold text-blue-900 mt-4">Ventilation optimisée</h3>
            <p className="text-gray-700 mt-2 text-sm">
              Améliorez la qualité de l’air intérieur et prévenez les problèmes d’humidité.
            </p>
          </Link>

          {/* Card: Fenêtres et portes renforcées */}
          <Link href="/travaux/huisseries" className="group block bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 cursor-pointer text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
              <span className="text-3xl text-blue-600">🚪</span>
            </div>
            <h3 className="text-lg font-bold text-blue-900 mt-4">Fenêtres & Portes</h3>
            <p className="text-gray-700 mt-2 text-sm">
              Améliorez l’isolation et renforcez la sécurité de votre habitat.
            </p>
          </Link>
        </div>

        <p className="text-xl text-blue-900 mt-10 text-center max-w-3xl mx-auto">
          En suivant ces étapes, vous assurez une rénovation efficace et durable, tout en valorisant votre bien immobilier.
        </p>
      </section>
    </main>
  );
};

export default Renovation;

