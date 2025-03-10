import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-12 px-12">
      <h2 className="text-2xl md:text-3xl font-bold">Prêt à commencer ?</h2>
      <p className="mt-4 text-xl">
        Contactez-nous dès maintenant pour un diagnostic gratuit et une solution clé en main !
      </p>
      <Link
        href="/formulaire"
        className="mt-6 inline-block bg-white text-blue-800 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition"
      >
        Demandez un devis gratuit
      </Link>
    </section>
  );
}
