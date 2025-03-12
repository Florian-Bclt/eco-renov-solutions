"use client";

import { ChangeEvent, useState } from "react";

type Step1Props = {
  formData: { logement: string; surface: string; codePostal: string; ville: string };
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  nextStep: () => void;
};

export default function Step1({ formData, handleChange, nextStep }: Step1Props) {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateAndProceed = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.logement) newErrors.logement = "Veuillez sélectionner un type de logement.";
    if (!formData.surface) newErrors.surface = "Veuillez indiquer la surface habitable.";
    if (!formData.codePostal) newErrors.codePostal = "Veuillez renseigner le code postal.";
    if (!formData.ville) newErrors.ville = "Veuillez renseigner la ville.";

    if(Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return
    }

    setErrors({});
    nextStep();
  }

  return (
    <div>
      <h2 className="text-xl font-semibold">Étape 1 : Informations logement</h2>

      <label className="block mt-4">Type de logement <span className="text-red-800">*</span></label>
      <select 
        name="logement" 
        value={formData.logement} 
        onChange={handleChange} 
        className={`w-full p-2 border rounded ${errors.logement ? "border-red-500" : ""}`}
        required
      >
        <option value="">Sélectionner</option>
        <option value="maison">Maison</option>
        <option value="appartement">Appartement</option>
      </select>
      {errors.logement && <p className="text-red-500 text-sm">{errors.logement}</p>}

      <label className="block mt-4">Surface habitable (m²) <span className="text-red-800">*</span></label>
      <input 
        type="number" 
        name="surface" 
        value={formData.surface} 
        onChange={handleChange} 
        className={`w-full p-2 border rounded ${errors.surface ? "border-red-500" : ""}`}
        required 
      />
      {errors.surface && <p className="text-red-500 text-sm">{errors.surface}</p>}

      <label className="block mt-4">Code postal <span className="text-red-800">*</span></label>
      <input 
        type="text" 
        name="codePostal" 
        value={formData.codePostal} 
        onChange={handleChange} 
        className={`w-full p-2 border rounded ${errors.surface ? "border-red-500" : ""}`}
        required 
      />
      {errors.codePostal && <p className="text-red-500 text-sm">{errors.codePostal}</p>}

      <label className="block mt-4">Ville <span className="text-red-800">*</span></label>
      <input 
        type="text" 
        name="ville" 
        value={formData.ville} 
        onChange={handleChange} 
        className={`w-full p-2 border rounded ${errors.ville ? "border-red-500" : ""}`}
        required
      />
      {errors.ville && <p className="text-red-500 text-sm">{errors.ville}</p>}
      
      <button onClick={validateAndProceed} className="mt-4 bg-blue-600 text-white p-2 rounded">Suivant</button>
    </div>
  );
}
