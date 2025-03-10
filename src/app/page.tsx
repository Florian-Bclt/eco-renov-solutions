"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [investment, setInvestment] = useState<number | null>(null);

  // Logique pour récupérer les données du compteur d'investissement
  useEffect(() => {
    const getInvestment = async () => {
      const res = await fetch("/api/investment");
      const data = await res.json();
      setInvestment(data.amount);
    }
    getInvestment();
  }, []);

  return (
    <main className="bg-gray-50 text-gray-800 relative">

    {/* Hero Section */}
    <header className="relative bg-cover bg-center h-screen flex items-center justify-center text-white text-center">
      <Image
          src="/images/fenetres.jpg"
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
      <div className="bg-black bg-opacity-50 p-6 rounded-xl max-w-2xl relative z-10">
        <h1 className="text-5xl font-bold mb-4">Transformez Votre Habitat</h1>
        <p className="text-lg mb-6">
          Isolation, rénovation, chauffage : des solutions adaptées à vos besoins pour un confort optimal.
        </p>
        <Link href="/formulaire" className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition">
          Demandez un devis gratuit
        </Link>
      </div>
      
      {/* ✅ Bannière flottante pour le montant d’investissement */}
      {investment !== null && (
        <div className="absolute bottom-16 text-blue-700 md:text-2xl font-bold px-6 py-4 rounded-xl shadow-xl border-2 bg-white p-4 flex items-center space-x-3 border-blue-500 bounce-twice">
          <span className="text-3xl">💰</span>
          <span className="tracking-wider">
            Déjà {investment.toLocaleString()} € investis dans vos projets !
          </span>
        </div>
      )}
    </header>


    {/* Timeline Section */}
    <section className="py-12 px-6 md:px-12 lg:px-24 bg-gray-200 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-600">Votre parcours avec nous</h2>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="text-center max-w-lg">
          <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mx-auto">1</div>
          <h3 className="text-xl font-bold text-blue-600 mt-4">Diagnostic précis et sur-mesure</h3>
          <p className="text-gray-700 mt-4">Nous réalisons un <b>diagnostic énergétique complet</b> incluant une analyse thermique approfondie, des recommandations personnalisées et une estimation détaillée des <b>économies d'énergies</b>que vous pourriez réaliser. Grâce à notre expertise, nous identifions également les <b>aides financières</b> auxquelles vous êtes éligibles, vous garantissant un projet optimisé et rentable.</p>
        </div>
        <div className="text-center max-w-lg">
          <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mx-auto">2</div>
          <h3 className="text-xl font-bold text-blue-600 mt-4">Travaux & suivi rigoureux</h3>
          <p className="text-gray-700 mt-4">Notre équipe de <b>professionnels certifiés</b>s'engage à fournir une installation <b>haut de gamme</b>, en respectant les normes les plus strictes du secteur. Nous sélectionnons des <b>matériaux de grandes marques</b> pour assurer une <b>performance durable</b>. Chaque chantier est supervisé par un <b>Reponsable travaux</b> qui veille à la <b>qualité d'exécution</b> et coordonne nos installateurs partenaires, pour un suivi transparent et une satisfaction optimale.</p>
        </div>
        <div className="text-center max-w-lg">
          <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mx-auto">3</div>
          <h3 className="text-xl font-bold text-blue-600 mt-4">Qualité & aides financières garanties</h3>
          <p className="text-gray-700 mt-4">Avec <b>Eco Renov Solutions</b>, votre tranquillité et assurée : nous garantissons la conformité et la qualité de chaque installation. Selon votre projet et votre situation, vous pouvez bénéficier d'<b>aides financières pouvant aller jusqu'à 63 000€</b> pour une rénovation d'ampleur<span className="text-blue-800">*</span>. Nous vous accompagnons dans chaque étape pour maximiser votre investissement et valoriser votre patrimoine.</p>
        </div>
      </div>
        <p className="mt-8 italic text-blue-800 px-1">*Dans le cadre d'une rénovation d'ampleur, pour un ménage aux revenus très modestes, réalisant un devis HT d'au moins 70 000€ pour ses travaux comprenant obligatoirement 2 gestes d'isolation, avec 4 sauts de classe et une sortie de passoire énergétique, tarifs au 1er janvier 2024.</p>
    </section>

    {/* Services Section */}
    <section className="py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-blue-600">Nos Services</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href='/travaux/renovation'>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/plans.jpg" 
              alt="Rénovation" 
              width={400}
              height={300}
              className="rounded-lg shadow-lg mb-4" />
            <h3 className="text-xl font-bold text-blue-600">Rénovation d'ampleur</h3>
            <p className="mt-2 text-gray-700 px-20">
              Redonnez une seconde vie à votre habitat avec nos services de rénovation professionnelle.
            </p>
            <p className="mt-4 text-blue-600 font-bold hover:underline">
              En savoir plus →
            </p>
          </div>
        </Link>
      <Link href="/travaux/isolation">
        <div className="flex flex-col items-center text-center">
          <Image 
            src="/images/isolation.jpg" 
            alt="Isolation" 
            width={400}
            height={300}
            className="rounded-lg shadow-lg mb-4" />
          <h3 className="text-xl font-bold text-blue-600">Isolation</h3>
          <p className="mt-2 text-gray-700 px-20">
            Améliorez l'efficacité énergétique de votre maison avec nos solutions d'isolation sur mesure.
          </p>
          <p className="mt-4 text-blue-600 font-bold hover:underline">
            En savoir plus →
          </p>
        </div>
        </Link>
        <Link href="/travaux/chauffage">
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/images/pompe_a_chaleur.jpg" 
              alt="pompe à chaleur" 
              width={400}
              height={300}
              className="rounded-lg shadow-lg mb-4" />
            <h3 className="text-xl font-bold text-blue-600">Chauffage</h3>
            <p className="mt-2 text-gray-700 px-20">
              Améliorez l'efficacité énergétique de votre maison avec nos solutions d'isolation sur mesure.
            </p>
            <p className="mt-4 text-blue-600 font-bold hover:underline">
              En savoir plus →
            </p>
          </div>
        </Link>
        <Link href="/travaux/toiture">
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/images/panneau.jpg" 
              alt="panneaux photovoltaïque" 
              width={400}
              height={300}
              className="rounded-lg shadow-lg mb-4" />
            <h3 className="text-xl font-bold text-blue-600">Panneaux photovoltaïque</h3>
            <p className="mt-2 text-gray-700 px-20">
              Apportez couleur et style à votre maison avec nos prestations de toiture haut de gamme.
            </p>
            <p className="mt-4 text-blue-600 font-bold hover:underline">
              En savoir plus →
            </p>
          </div>
        </Link>
        <Link href="/travaux/toiture">
          <div className="flex flex-col items-center text-center">
            <Image 
              src="/images/fenetre.jpg" 
              alt="huisseries" 
              width={400}
              height={300}
              className="rounded-lg shadow-lg mb-4" />
            <h3 className="text-xl font-bold text-blue-600">Huisseries</h3>
            <p className="mt-2 text-gray-700 px-20">
              Apportez couleur et style à votre maison avec nos prestations de toiture haut de gamme.
            </p>
            <p  className="mt-4 text-blue-600 font-bold hover:underline">
              En savoir plus →
            </p>
          </div>
        </Link>
        <div className="flex flex-col items-center text-center text-white px-6">
          <div className="bg-blue-500 rounded-lg shadow-lg hover:bg-blue-800 transition cursor-pointer py-20">            
            <h3 className="text-2xl font-bold">Besoin d’un accompagnement personnalisé ?</h3>
            <p className="mt-4 mb-8 px-6">Contactez-nous pour obtenir un diagnostic et des conseils adaptés à vos projets.</p>
            <Link href="/contact" className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}
