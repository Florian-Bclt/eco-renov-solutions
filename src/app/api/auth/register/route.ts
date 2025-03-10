import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, password, name, role } = await req.json();

    // Vérification si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Cet email n'est pas disponible."}, { status: 400 });
    }

    // Hash du mot de passe
    const hashedPassword = await hash(password, 10);

    // Création de l'utilisateur
    const user = await prisma.user.create({
      data: {
        email, 
        password: hashedPassword,
        name, 
        role: role || 'user',
      }
    })

    return NextResponse.json({ message: "Utilisateur créé avec succès", user });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur"}, { status: 500 });
  }
}