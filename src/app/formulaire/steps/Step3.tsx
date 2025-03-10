"use client";

import { ChangeEvent, useState } from "react";

type Step3Props = {
  formData: { energieChauffage: string; typeChauffage: string };
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  nextStep: () => void;
  prevStep: () => void;
};

  const chauffageOptions: { [key: string]: string[] } = {
    bois: [
      "Poêle à bois ancien ou cheminée",
      "Poêle à bois / granulés récent ou insert",
      "Chaudière à bois classe inconnue",
      "Chaudière à bois installée avant 2005",
      "Chaudière à bois installée à partir de 2005",
    ],
    renouvelable: [
      "Pompe à chaleur air-air",
      "Pompe à chaleur air-eau",
      "Pompe à chaleur eau-eau",
    ],
    electrique: [
      "Convecteur installé avant 2000",
      "Convecteur installé à partir de 2001",
      "Panneau rayonnant",
      "Radiateur à inertie",
    ],
    gazNaturel: [
      "Chaudière installée avant 1989",
      "Chaudière installée avant 1989 avec brûleur changé",
      "Chaudière installée entre 1989 et 2000",
      "Chaudière installée à partir de 2001",
      "Chaudière basse température",
      "Chaudière à condensation",
    ],
    gazPropane: [
      "Chaudière installée avant 1989",
      "Chaudière installée avant 1989 avec brûleur changé",
      "Chaudière installée entre 1989 et 2000",
      "Chaudière installée à partir de 2001",
      "Chaudière basse température",
      "Chaudière à condensation",
    ],
    fioul: [
      "Chaudière installée avant 1989",
      "Chaudière installée avant 1989 avec brûleur changé",
      "Chaudière installée entre 1989 et 2000",
      "Chaudière installée à partir de 2001",
      "Chaudière basse température",
      "Chaudière à condensation",
    ],
  };

export default function Step3({ formData, handleChange, nextStep, prevStep }: Step3Props) {
  const [error, setError] = useState('');

  const validateAndProceed = () => {
    if (!formData.energieChauffage || !formData.typeChauffage) {
      setError("Veuillez sélectionner une énergie de chauffage et un type de chauffage.");
      return;
    }
    setError("");
    nextStep();
  };
  return (
    <div>
      <h2 className="text-xl font-semibold">Étape 3 : Votre chauffage</h2>
      <label className="block mt-4">Quelle est l’énergie de votre système de chauffage principal ? <span className="text-red-800">*</span></label>
      <select 
        name="energieChauffage" 
        value={formData.energieChauffage} 
        onChange={handleChange} 
        className={`w-full p-2 border rounded ${error ? 'border-red-500' : ''}`} 
        required
      >
        <option value="">Sélectionner</option>
        <option value="bois">Bois</option>
        <option value="renouvelable">Pompe à chaleur</option>
        <option value="electrique">Électrique</option>
        <option value="gazNaturel">Gaz naturel</option>
        <option value="gazPropane">Gaz propane</option>
        <option value="fioul">Fioul</option>
      </select>
      {formData.energieChauffage && chauffageOptions[formData.energieChauffage] && (
        <>
          <label className="block mt-4">Type de chauffage <span className="text-red-800">*</span></label>
          <select 
            name="typeChauffage" 
            value={formData.typeChauffage} 
            onChange={handleChange} 
            className={`w-full p-2 border rounded ${error ? 'border-red-500' : ''}`} 
            required
          >
            <option value="">Sélectionner</option>
            {chauffageOptions[formData.energieChauffage].map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <button onClick={prevStep} className="mt-4 bg-gray-400 text-white p-2 rounded mr-2">Retour</button>
      <button onClick={validateAndProceed} className="mt-4 bg-blue-600 text-white p-2 rounded">Suivant</button>
    </div>
  );
}
