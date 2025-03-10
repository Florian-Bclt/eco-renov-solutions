"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">
            <Image 
              src='/images/logo.png'
              alt='Logo eco-renov-solutions'
              width={200}
              height={100}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className=" hidden lg:flex space-x-6">
          <li>
            <Link href="/travaux/renovation" className="text-gray-700 hover:text-blue-600 transition">
              Rénovation d'ampleur
            </Link>
          </li>
          <li>
            <Link href="/travaux/isolation" className="text-gray-700 hover:text-blue-600 transition">
              Isolation
            </Link>
          </li>
          <li>
            <Link href="/travaux/chauffage" className="text-gray-700 hover:text-blue-600 transition">
              Chauffage
            </Link>
          </li>
          <li>
            <Link href="/travaux/photovoltaique" className="text-gray-700 hover:text-blue-600 transition">
              Photovoltaïque
            </Link>
          </li>
          <li>
            <Link href="/travaux/huisseries" className="text-gray-700 hover:text-blue-600 transition">
              Huisseries
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl text-gray-700" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`fixed inset-0 bg-blue-100 flex flex-col items-center justify-center z-50 transition-all duration-600 ease-in transform ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
          <button className="absolute top-6 right-6 text-4xl text-gray-800" onClick={toggleMenu}>
            <FiX />
          </button>
          <ul className="space-y-6 text-center text-2xl">
            <li>
              <Link href="/travaux/renovation" className="block text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>
                Rénovation d'ampleur
              </Link>
            </li>
            <li>
              <Link href="/travaux/isolation" className="block text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>
                Isolation
              </Link>
            </li>
            <li>
              <Link href="/travaux/chauffage" className="block text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>
                Chauffage
              </Link>
            </li>
            <li>
              <Link href="/travaux/photovoltaique" className="block text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>
                Photovoltaïque
              </Link>
            </li>
            <li>
              <Link href="/travaux/huisseries" className="block text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>
                Huisseries
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
