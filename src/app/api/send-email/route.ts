import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { 
      email, 
      phone, 
      personnesFoyer, 
      revenuFiscal, 
      besoinsTravaux, 
      logement, 
      surface, 
      niveaux, 
      codePostal, 
      ville, 
      anneeConstruction,
      energieChauffage,
      typeChauffage,
      travauxRealises
    } = await req.json();

    const message = `
      <h1>Nouvelle soumission de formulaire</h1>
      <h2>Informations client :</h2>
      <p><strong>Email:</strong> ${email || "Non fourni"}</p>
      <p><strong>Téléphone:</strong> ${phone || "Non fourni"}</p>
      <p><strong>Nombre de personnes dans le foyer:</strong> ${personnesFoyer}</p>
      <p><strong>Revenu fiscal de référence:</strong> ${revenuFiscal}</p>

      <h2>Informations logement :</h2>

      <p><strong>Logement:</strong> ${logement} de ${surface} m² avec ${niveaux} niveaux.</p>
      <p><strong>Située à:</strong> ${ville}, ${codePostal}</p>
      <p><strong>Construit en:</strong> ${anneeConstruction}</p>
      <p><strong>Energie de chauffage:</strong> ${energieChauffage}, ${typeChauffage}</p>

      <p><strong>Travaux réalisés:</strong> ${travauxRealises ? travauxRealises.join(", ") : "Non spécifié"}</p>
      <p><strong>Besoins travaux:</strong> ${besoinsTravaux ? besoinsTravaux.join(", ") : "Non spécifié"}</p>
    `;

    const data = await resend.emails.send({
      from: "Formulaire de contact <onboarding@resend.dev>", // Email validé sur resend noreply@tondomaine.com
      // to: "bouclet.florian@gmail.com",
      to: "contact@eco-renov-solutions.fr",
      subject: "Nouvelle soumission de formulaire",
      html: message,
    });

    return NextResponse.json({ success: true, message: "Email envoyé avec succès", data });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
  }
}
