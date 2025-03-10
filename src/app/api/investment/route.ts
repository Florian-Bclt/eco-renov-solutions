import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Assurez-vous que Prisma est bien importé

export async function GET() {
  try {
    const investment = await prisma.investment.findFirst(); // On récupère l'investissement
    if (!investment) {
      return NextResponse.json({ amount: 0 }); // Si pas d'entrée, on retourne 0
    }
    return NextResponse.json({ amount: investment.amount });
  } catch (error) {
    console.error("Erreur API GET investment:", error);
    return NextResponse.json({ error: "Erreur lors de la récupération." }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const { amount } = await req.json();

    if (typeof amount !== "number" || amount < 0) {
      return NextResponse.json({ error: "Montant invalide." }, { status: 400 });
    }

    // Mise à jour ou création du montant
    const updatedInvestment = await prisma.investment.upsert({
      where: { id: 1 }, // Assurez-vous que l'ID existe ou utilisez findFirst
      update: { amount },
      create: { amount },
    });

    return NextResponse.json({ amount: updatedInvestment.amount });
  } catch (error) {
    console.error("Erreur API PATCH investment:", error);
    return NextResponse.json({ error: "Erreur lors de la mise à jour." }, { status: 500 });
  }
}
