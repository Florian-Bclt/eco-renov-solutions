import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

// ✅ POST - Enregistrer une soumission
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Vérifier les champs requis
    const requiredFields = [
      "logement", "surface", "codePostal", "ville", "anneeConstruction",
      "niveaux", "energieChauffage", "typeChauffage", "personnesFoyer",
      "revenuFiscal", "besoinsTravaux"
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ error: `Le champ ${field} est requis` }, { status: 400 });
      }
    }

    // Convertir les champs numériques en nombres
    const parsedSurface = parseInt(body.surface, 10);
    const parsedNiveaux = parseInt(body.niveaux, 10);
    const parsedPersonnesFoyer = parseInt(body.personnesFoyer, 10);

    if (isNaN(parsedSurface) || isNaN(parsedNiveaux) || isNaN(parsedPersonnesFoyer)) {
      return NextResponse.json({ error: "Les champs numériques doivent contenir des nombres valides." }, { status: 400 })
    }

    // Création de la soumission en base de données
    const submission = await prisma.submission.create({
      data: {
        logement: body.logement,
        surface: parsedSurface,
        codePostal: body.codePostal,
        ville: body.ville,
        anneeConstruction: body.anneeConstruction,
        niveaux: parsedNiveaux,
        energieChauffage: body.energieChauffage,
        typeChauffage: body.typeChauffage,
        personnesFoyer: parsedPersonnesFoyer,
        revenuFiscal: body.revenuFiscal,
        besoinsTravaux: JSON.stringify(body.besoinsTravaux), // Conversion en string pour stocker un tableau
        travauxRealises: body.travauxRealises ? JSON.stringify(body.travauxRealises) : null,
        email: body.email || null,
        phone: body.phone || null,
      }
    })

    // Envoi un email à l'administrateur
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: body.email || "Non fourni",
          phone: body.phone || "Non fourni",
          logement: body.logement,
          surface: body.surface,
          codePostal: body.codePostal,
          ville: body.ville,
          anneeConstruction: body.anneeConstruction,
          niveaux: parsedNiveaux,
          energieChauffage: body.energieChauffage,
          typeChauffage: body.typeChauffage,
          personnesFoyer: parsedPersonnesFoyer,
          revenuFiscal: body.revenuFiscal,
          besoinsTravaux: body.besoinsTravaux,
          travauxRealises: body.travauxRealises || "Non fourni"
        })
      })
    } catch (emailError) {
      console.log("Erreur lors de l'envoi de l'email:", emailError)
    }

    return NextResponse.json({ message: "Soumission enregistrée avec succès", submission }, { status: 201 })

  } catch (error) {
    console.error("Erreur API submission: ", error);
    return NextResponse.json({ error: "Erreur servuer, veuillez réessayer." }, { status: 500 })
  }
}

// ✅ GET - Récupérer toutes les soumissions
export async function GET(req: NextRequest) {
  try {
    // Vérifie si l'utilisateur est authentifié
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ error: "Accès non autorisé" }, { status: 403 });
    }

    // Récupération de la pagination
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = 10;
    const skip = (page - 1) * pageSize;

    // Récupérer les soumissions depuis la base de données
    const submissions = await prisma.submission.findMany({
      orderBy: { createdAt: "desc" },
      take: pageSize,
      skip: skip,
    });

    // Nombre total d'enregistrements
    const totalSubmissions = await prisma.submission.count();

    return NextResponse.json({
      submissions,
      totalPages: Math.ceil(totalSubmissions / pageSize),
      totalSubmissions
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des soumissions:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}