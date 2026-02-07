"use client";

import Link from "next/link";
import clsx from "clsx";
import { useUIStore } from "@/store";
import { IoCloseOutline } from "react-icons/io5";
import { titleFont } from '../../../config/fonts';

export const MovilMenu = () => {
  const isMobileMenuOpen = useUIStore((state) => state.isMobileMenuOpen);
  const closeMobileMenu = useUIStore((state) => state.closeMobileMenu);

  return (
    <div className="sm:hidden">

      {/* background */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-black opacity-30 sm:hidden" />
      )}

      {/* blur + click cerrar */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fade-in fixed inset-0 z-10 backdrop-filter backdrop-blur-sm sm:hidden"
        />
      )}

      {/* SideMenu */}
      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-72 h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 sm:hidden",
          {
            "translate-x-full": !isMobileMenuOpen,
          }
        )}
      >
        {/* cerrar */}
        <IoCloseOutline
          size={40}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={closeMobileMenu}
        />

        {/* CATEGORÍAS */}
        <div className="mt-14 flex flex-col gap-2 sm:hidden">
            
            <span className={`${titleFont.className} antialiased font-bold`}>
                Categorias
            </span>
            
          <Link
            href="/gender/men"
            onClick={closeMobileMenu}
            className="flex items-center p-2 hover:bg-gray-300 rounded transition-all"
          >
            <span className="ml-3 text-xl">Hombres</span>
          </Link>

          <Link
            href="/gender/women"
            onClick={closeMobileMenu}
            className="flex items-center p-2 hover:bg-gray-300 rounded transition-all"
          >
            <span className="ml-3 text-xl">Mujeres</span>
          </Link>

          <Link
            href="/gender/kid"
            onClick={closeMobileMenu}
            className="flex items-center p-2 hover:bg-gray-300 rounded transition-all"
          >
            <span className="ml-3 text-xl">Niños</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};