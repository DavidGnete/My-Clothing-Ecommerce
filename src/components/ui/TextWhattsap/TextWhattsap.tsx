"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { titleFont } from "@/config/fonts";

export const TextWhattsap = () => {
  const WhattsapNumber = "+573108006524";

  const HandleClick = () => {
    const message = encodeURIComponent(
      "Hola, ¿como estas? /n estoy interesado en tener mi propia pagina web ",
    );
    window.open(`https://wa.me/${WhattsapNumber}?text= ${message}`, "_blank");
  };
  return (
    <div
      className={` px-4 py-6
    md:px-8 md:py-8
    lg:px-12 lg:py-10 lg:max-w-4xl lg:mx-auto
    xl:max-w-5xl xl:px-16 xl:py-12`}
    >
      <h1
        suppressHydrationWarning
        className={`${titleFont.className} text-2xl font-bold text-center 
      md:text-3xl
      lg:text-4xl
      xl:text-5xl`}
      >
        ¿Te gustaría tener una plataforma como esta para tu negocio?
      </h1>
      <h2
        suppressHydrationWarning
        className={`${titleFont.className} mt-5 text-center text-base
      md:text-lg md:mt-6
      lg:text-xl lg:mt-8
      xl:text-2xl xl:mt-10`}
      >
        Creamos tu tienda online personalizada para que recibas tus pedidos
        organizados y ventas sin límites.
      </h2>

      <button
        className="
        m-5 mx-auto
        bg-gray-500
        text-white
        rounded-full
        shadow-lg
        flex
        justify-center
        items-center
        cursor-pointer
        transition-all
        duration-300
        w-50 h-14
        md:w-50 md:h-16
        lg:w-50 lg:h-20
        xl:w-50 xl:h-24 xl:text-lg
        font-bold
        "
        onClick={HandleClick}
        type="button"
      >
        <FaWhatsapp
          className="m-2 text-2xl
                        md:text-3xl
                        lg:text-4xl
                        xl:text-5xl"
        />
        Contactanos
        
      </button>
    </div>
  );
};
