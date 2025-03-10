"use client";

import { ChangeEvent, useState } from "react";

type Step4Props = {
  formData: { personnesFoyer: string; revenuFiscal: string };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  nextStep: () => void;
  prevStep: () => void;
};

const revenuFiscalOptions: Record<string, string[]> = {
  "1": [
    "Inférieur à 17 174€",
    "Entre 17 174€ et 22 015€",
    "Entre 22 016€ et 30 844€",
    "Supérieur à 30 844€",
  ],
  "2": [
    "Inférieur à 25 116€",
    "Entre 25 116€ et 32 197€",
    "Entre 32 198€ et 45 340€",
    "Supérieur à 45 340€",
  ],
  "3": [
    "Inférieur à 30 207€",
    "Entre 30 207€ et 38 719€",
    "Entre 38 720€ et 54 592€",
    "Supérieur à 54 592€",
  ],
  "4": [
    "Inférieur à 35 286€",
    "Entre 35 286€ et 45 234€",
    "Entre 45 235€ et 63 844€",
    "Supérieur à 63 844€",
  ],
  "5": [
    "Inférieur à 40 389€",
    "Entre 40 389€ et 51 775€",
    "Entre 51 776€ et 73 098€",
    "Supérieur à 73 098€",
  ],
  "6": [
    "Inférieur à 45 483€",
    "Entre 45 483€ et 58 300€",
    "Entre 58 301€ et 82 352€",
    "Supérieur à 82 352€",
  ],
  "7": [
    "Inférieur à 50 577€",
    "Entre 50 577€ et 64 825€",
    "Entre 64 826€ et 91 606€",
    "Supérieur à 91 606€",
  ],
  "8": [
    "Inférieur à 55 671€",
    "Entre 55 671€ et 71 350€",
    "Entre 71 351€ et 100 860€",
    "Supérieur à 100 860€",
  ],
  "9": [
    "Inférieur à 60 764€",
    "Entre 60 765€ et 77 875€",
    "Entre 77 876€ et 110 114€",
    "Supérieur à 110 114€",
  ],
  "10": [
    "Inférieur à 65 859€",
    "Entre 65 859€ et 84 400€",
    "Entre 84 401€ et 119 368€",
    "Supérieur à 119 368€",
  ],
};

export default function Step4({ formData, handleChange, nextStep, prevStep }: Step4Props) {
  const [error, setError] = useState('');

  const validateAndProceed = () => {
    if (!formData.personnesFoyer || !formData.revenuFiscal) {
      setError("Veuillez définir le nombre de personnes et votre revenu fiscal.");
      return;
    }
    setError("");
    nextStep();
  };
  return (
    <div>
      <h2 className="text-xl font-semibold">Étape 4 : Aides et subventions</h2>
      <label className="block mt-4">Nombre de personnes dans le foyer <span className="text-red-800">*</span></label>
      <input
        type="number"
        name="personnesFoyer"
        value={formData.personnesFoyer}
        onChange={handleChange}
        className={`w-full p-2 border rounded ${error ? 'border-red-500' : ''}`} 
        required
      />

      {formData.personnesFoyer && revenuFiscalOptions[formData.personnesFoyer] && (
        <>
          <label className="block mt-4">Revenu fiscal de référence <span className="text-red-800">*</span></label>
          <select
            name="revenuFiscal"
            value={formData.revenuFiscal}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${error ? 'border-red-500' : ''}`} 
            required
          >
            <option>Sélectionner</option>
            {revenuFiscalOptions[formData.personnesFoyer]?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <button onClick={prevStep} className="mt-4 bg-gray-400 text-white p-2 rounded mr-2">
        Retour
      </button>
      <button onClick={validateAndProceed} className="mt-4 bg-blue-600 text-white p-2 rounded">
        Suivant
      </button>
    </div>
  );
}
