"use client";

import { ChangeEvent, useState } from "react";

type Step5Props = {
  formData: { besoinsTravaux: string[]; email: string; phone: string };
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMultiSelect: (e: ChangeEvent<HTMLInputElement>) => void;
  prevStep: () => void;
};

export default function Step5({ formData, setFormData, handleChange, handleMultiSelect, prevStep }: Step5Props) {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const validateAndSubmit = async () => {
    if (formData.besoinsTravaux.length === 0) {
      setError("Veuillez sélectionner au moins un besoin.");
      return;
    }
    if (!formData.email && !formData.phone) {
      setError("Veuillez renseigner votre adresse e-mail ou votre numéro de téléphone.");
      return;
    }
    setError(""); // Réinitialise les erreurs
    setLoading(true);
    setSuccessMessage("");

    try {
      const response = await fetch("/api/submission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire.");
      }
      
      setSuccessMessage("Votre demande a bien été envoyée !");
      
      // Réinitialise le formulaire après envoi
      setFormData({
        logement: "",
        surface: "",
        codePostal: "",
        ville: "",
        anneeConstruction: "",
        niveaux: "",
        travauxRealises: [],
        energieChauffage: "",
        typeChauffage: "",
        eauChaude: "",
        personnesFoyer: "",
        revenuFiscal: "",
        besoinsTravaux: [],
        email: "",
        phone: "",
      });
    } catch (error) {
      setError("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Étape 5 : Vos besoins</h2>

      <p className="text-gray-600 mb-2">Sélectionnez au moins un besoin : <span className="text-red-800">*</span></p>
      {["Isolation thermique", "Huisseries", "Chauffage / climatisation", "Ventilation"].map((besoin) => (
        <div key={besoin} className="mb-2 flex items-center">
          <input
            type="checkbox"
            name="besoinsTravaux"
            value={besoin}
            checked={formData.besoinsTravaux.includes(besoin)}
            onChange={handleMultiSelect}
            className="mr-2 w-5 h-5"
          />
          <label>{besoin}</label>
        </div>
      ))}

      {error && formData.besoinsTravaux.length === 0 && <p className="text-red-500">Vous devez sélectionner au moins un besoin.</p>}

      <label className="block mt-4">Adresse e-mail <span className="text-red-800">*</span></label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={`w-full p-2 border rounded ${error && !formData.email && !formData.phone ? "border-red-500" : ""}`}
      />

      <label className="block mt-4">Numéro de téléphone</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className={`w-full p-2 border rounded ${error && !formData.email && !formData.phone ? "border-red-500" : ""}`}
      />

      {error && !formData.email && !formData.phone && <p className="text-red-500">Veuillez entrer au moins un moyen de contact.</p>}

      <button onClick={prevStep} className="mt-4 bg-gray-400 text-white p-2 rounded mr-2">
        Retour
      </button>
      <button
        onClick={validateAndSubmit}
        disabled={loading || formData.besoinsTravaux.length === 0 || (!formData.email && !formData.phone)}
        className={`mt-4 p-2 rounded ${loading ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "bg-green-600 text-white"}`}
      >
        {loading ? "Envoi en cours..." : "Envoyer"}
      </button>
    
      {successMessage && (
        <p className="mt-4 text-green-600 font-semibold">{successMessage}</p>
      )}
    </div>
  );
}
