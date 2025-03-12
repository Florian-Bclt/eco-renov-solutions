import { useEffect, useState } from "react";
import CallToAction from "./CallToAction";
import CookieBanner from "./CookieBanner";
import Footer from "./Footer";
import GoogleTagManager from "./GoogleTagManager";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showGTM, setShowGTM] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("cookieConsent") === "true") {
      setShowGTM(true);
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CookieBanner />
      {showGTM && <GoogleTagManager />}
      <main className="bg-gray-50 text-gray-800 flex-grow">{children}</main>
      <CallToAction />
      <Footer/>
    </div>
  );
}
