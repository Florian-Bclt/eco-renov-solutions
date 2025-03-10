import { MdEmail, MdPhoneIphone } from "react-icons/md";

export default function Contact() {
  return (
    <main className="text-gray-800 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-900">Contactez-nous</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <p className="text-lg text-center mb-6">
          Vous avez des questions ? Besoin d'un devis ? Contactez-nous par téléphone ou par email !
        </p>

        {/* Lien Téléphone */}
        <a 
          href="tel:+33123456789" 
          className="flex items-center text-xl text-blue-800 hover:bg-blue-50 transition p-4 rounded-lg w-full"
        >
          <MdPhoneIphone className="text-4xl mr-4" />
          <span className="font-semibold">+33 1 23 45 67 89</span>
        </a>

        {/* Lien Email */}
        <a 
          href="mailto:contact@eco-renov-solutions.fr" 
          className="flex items-center text-xl text-blue-800 hover:bg-blue-50 transition p-4 rounded-lg w-full mt-4"
        >
          <MdEmail className="text-4xl mr-4" />
          <span className="font-semibold">contact@eco-renov-solutions.fr</span>
        </a>
      </div>
    </main>
  );
}
