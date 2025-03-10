"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiEdit, FiLogOut, FiTrash } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";

type Submission = {
  id: number;
  email?: string;
  phone?: string;
  codePostal: string;
  ville: string;
  logement: string;
  surface: number;
  niveaux: number;
  besoinsTravaux: string;
  anneeConstruction: string;
  energieChauffage: string;
  typeChauffage: string;
  personnesFoyer: number;
  revenuFiscal: string;
  travauxRealises?: string;
  createdAt: string;
};

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Gestion des états pour l'investissement
  const [investment, setInvestment] = useState<number | null>(null);
  const [newInvestment, setNewInvestment] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Pagination du tableau
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [totalSubmissions, setTotalSubmisssions] = useState(0); // Pour la pagination
  const [totalSubmissionsCount, setTotalSubmisssionsCount] = useState(0); // Pour la carte
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // Redirection si l'utilisateur n'est pas connecté
    }

    async function fetchInvestment() {
      try {
        const res = await fetch("/api/investment");
        if (!res.ok) throw new Error("Erreur lors de la récupération des données.");
        const data = await res.json();
        setInvestment(data.amount);
        setNewInvestment(data.amount.toString()); // Synchroniser l'input avec la valeur actuelle
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchSubmissions() {
      try {
        const res = await fetch(`/api/submission?page=${page}`);
        if (!res.ok) throw new Error("Erreur de lors de la récupération des soumissions");
        
        const data = await res.json();
        setSubmissions(data.submissions);
        setTotalSubmisssions(data.totalPages * pageSize);
        setTotalSubmisssionsCount(data.totalSubmissions);
      } catch (error) {
        console.error(error);
      }
    }
    fetchInvestment();
    fetchSubmissions();
  }, [status, router, page]);

  // Mise à jour du montant d'investissement
  async function updateInvestment() {
    const amount = parseInt(newInvestment, 10);
    if (isNaN(amount) || amount < 0) return;

    try {
      const res = await fetch("/api/investment", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      if (!res.ok) throw new Error("Erreur lors de la mise à jour.");

      const data = await res.json();
      setInvestment(data.amount);
      setIsEditing(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
    }
  }

  // Gestion des états
  if (status === "loading") return <p>Chargement...</p>;
  if (!session?.user) return null; // Evite l'affichage du contenu avant la redirection

  // Suppression d'une submission
  const handleDelete = async (id: number) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer cette soumission ?")) return;

    try {
      const res = await fetch(`/api/submission/${id}`, {
        method: "DELETE",
      })

      if (!res.ok) throw new Error("Erreur lors de la suppression");

      // Mettre à jour l'état pour refléter les changements
      setSubmissions((prev) => prev.filter((submission) => submission.id !== id));
      setTotalSubmisssions((prev) => prev -1)
    } catch (error) {
      console.error('Erreur:', error);
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold text-gray-800">👋 Bienvenue, {session.user.name}</h1>
        <button
          className="flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          <FiLogOut className="mr-2" /> Déconnexion
        </button>
      </div>

      {/* Cartes d'Infos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Carte du montant d’investissement */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-800">Montant débloqué</h2>
              <p className="text-3xl font-semibold text-blue-600 mt-2">
                {investment !== null ? `${investment.toLocaleString()} €` : "Chargement..."}
              </p>
            </div>
            <button
              className="text-blue-500 hover:text-blue-700 text-xl"
              onClick={() => setIsEditing(true)}
            >
              <FiEdit />
            </button>
          </div>

          {/* Champ de modification */}
          {isEditing && (
            <div className="mt-4 flex items-center">
              <input
                type="number"
                value={newInvestment}
                onChange={(e) => setNewInvestment(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg w-full mr-2 text-blue-900 font-semibold"
              />
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                onClick={updateInvestment}
              >
                Valider
              </button>
            </div>
          )}
        </div>

        {/* Carte du nombre de soumissions */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-800">Total des demandes</h2>
              <p className="text-3xl font-semibold text-blue-600 mt-2">
                {totalSubmissionsCount}
              </p>
            </div>
            <FaUsers className="text-4xl text-blue-500" />
          </div>
        </div>
      </div>

        {/* Tableau des utilisateurs */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <BsFillBarChartFill className="mr-2 text-blue-600" /> Suivi des demandes
          </h2>
          <div className="overflow-x-auto max-w-full">
            <table className="table-auto min-w-max w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-blue-100 text-gray-700">
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Email</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Téléphone</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Code Postal</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Ville</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Logement</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Surface (m²)</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Etage</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Besoins</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Année construction</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Energie</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Type</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Nombre d'habitant</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Revenu Fiscal</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Travaux réalisés</th>
                <th className="py-3 px-4 border-b text-left whitespace-nowrap">Date demande</th>
                <th></th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission, index) => (
                  <tr key={submission.id} className={`border-b text-gray-700 ${index % 2 === 0 ? "bg-gray-50" : ""}`}>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.email || "Non fourni"}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.phone || "Non fourni"}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.codePostal}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.ville}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.logement}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.surface}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.niveaux}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.besoinsTravaux ? JSON.parse(submission.besoinsTravaux).join(", ") : "Non spécifié"}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.anneeConstruction}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.energieChauffage}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.typeChauffage}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.personnesFoyer}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.revenuFiscal}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{submission.travauxRealises ? JSON.parse(submission.travauxRealises).join(", ") : "Non spécifié"}</td>
                    <td className="py-3 px-4 whitespace-nowrap">{new Date(submission.createdAt).toLocaleDateString()}</td>
                    <td className="py-3 px-4">
                      <button 
                        onClick={() => handleDelete(submission.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FiTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button 
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`px-4 py-2 rounded-lg ${page === 1 ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-700"}`}
            >
              Précédent
            </button>
            <span className="text-gray-400">Page {page} / {Math.ceil(totalSubmissions / pageSize)}</span>
            <button 
              onClick={() => setPage((prev) => prev + 1)}
              disabled={page * pageSize >= totalSubmissions}
              className={`px-4 py-2 rounded-lg ${page * pageSize >= totalSubmissions ? "bg-gray-300" : "bg-blue-500 text-white hover:bg-blue-700"}`}
            >
              Suivant
            </button>
          </div>
        </div>
    </div>
  );
}
