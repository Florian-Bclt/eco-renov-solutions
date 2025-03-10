"use client";

import { ChangeEvent, useState } from "react";

type Step2Props = {
  formData: { anneeConstruction: string; niveaux: string; travauxRealises: string[] };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleMultiSelect: (e: ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
  prevStep: () => void;
};

export default function Step2({ formData, handleChange, handleMultiSelect, nextStep, prevStep }: Step2Props) {
  const [error, setError] = useState("");

  const validateAndProceed = () => {
    let newError = "";

    if (!formData.anneeConstruction || formData.anneeConstruction.length !== 4) {
      newError = "Veuillez entrer une année de construction valide (4 chiffres).";
    } else if (!formData.niveaux || parseInt(formData.niveaux, 10) <= 0) {
      newError = "Le nombre de niveaux doit être strictement supérieur à 0.";
    }

    if (newError) {
      setError(newError);
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Étape 2 : Informations complémentaires</h2>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <label className="block mt-4">Année de construction <span className="text-red-800">*</span></label>
      <input
        type="text"
        name="anneeConstruction"
        value={formData.anneeConstruction}
        onChange={handleChange}
        className={`w-full p-2 border rounded ${error && !formData.anneeConstruction ? 'border-red-500' : ''}`}
        required
      />
      <label className="block mt-4">Nombre de niveaux à chauffer <span className="text-red-800">*</span></label>
      <input
        type="number"
        name="niveaux"
        value={formData.niveaux}
        onChange={handleChange}
        className={`w-full p-2 border rounded ${error && !formData.niveaux ? 'border-red-500' : ''}`}
        required
      />
      <label className="block mt-4">Quels travaux ont été réalisés depuis 2001 ?</label>
      {[
        "Isolation des murs",
        "Isolation du plancher",
        "Isolation des combles",
        "Ventilation",
        "Huisseries",
        "Chauffage",
      ].map((travaux) => (
        <div key={travaux}>
          <input
            type="checkbox"
            name="travauxRealises"
            value={travaux}
            checked={formData.travauxRealises.includes(travaux)}
            onChange={handleMultiSelect}
            className="mr-2"
          />
          {travaux}
        </div>
      ))}
      <button onClick={prevStep} className="mt-4 bg-gray-400 text-white p-2 rounded mr-2">Retour</button>
      <button onClick={validateAndProceed} className="mt-4 bg-blue-600 text-white p-2 rounded">Suivant</button>
    </div>
  );
}
