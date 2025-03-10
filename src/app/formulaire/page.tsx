"use client";

import { useState, ChangeEvent } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

export default function Formulaire() {
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    logement: "",
    surface: "",
    codePostal: "",
    ville: "",
    anneeConstruction: "",
    niveaux: "",
    travauxRealises: [] as string[],
    energieChauffage: "",
    typeChauffage: "",
    eauChaude: "",
    personnesFoyer: "",
    revenuFiscal: "",
    besoinsTravaux: [] as string[],
    email: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => {
      if (!["travauxRealises", "besoinsTravaux"].includes(name)) return prev; // Vérification du champ

      const updatedList = checked
        ? [...(prev[name as keyof typeof prev] as string[]), value] // Ajouter l'élément sélectionné
        : (prev[name as keyof typeof prev] as string[]).filter((item) => item !== value); // Supprimer l'élément décoché
  
      return { ...prev, [name]: updatedList };
    });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="relative p-10 min-h-screen flex flex-col items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/formulaire-bg.jpg')" }}>
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Demandez votre devis</h1>
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl border border-gray-200">
        {step === 1 && <Step1 formData={formData} handleChange={handleChange} nextStep={nextStep} />}
        {step === 2 && <Step2 formData={formData} handleChange={handleChange} handleMultiSelect={handleMultiSelect} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <Step5 formData={formData} setFormData={setFormData} handleChange={handleChange} handleMultiSelect={handleMultiSelect} prevStep={prevStep} />}
      </div>
    </div>
  );
}
