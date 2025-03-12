import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function DELETE(req: Request, context: any ) {
  try {
    // Vérifie si l'utilisateur est authentifié et est admin
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: "Accès non autorisé" }, { status: 403 });
    }

    // Vérifie que l'ID est valide
    const submissionId = parseInt(context.params.id, 10);
    if (isNaN(submissionId)) {
      return NextResponse.json({ error: 'ID invalide' }, { status: 400});
    }

    // Suppression de la soumission
    await prisma.submission.delete({
      where: { id: submissionId }
    })

    return NextResponse.json({ message: "Soumission supprimée avec succès" }, { status: 200})
  } catch (error) {
    console.error('Erreur lors de la suppression:', error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500})
  }
}