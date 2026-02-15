"use client";
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { titleFont } from '@/config/fonts';

interface Props {
    clasName?: string;
}


export const TextWhattsap = ({clasName}:Props) => {

    const WhattsapNumber ="+573108006524";

    const HandleClick = () => {
        const message = encodeURIComponent("Hola, ¿como estas? /n estoy interesado en tener mi propia pagina web ")
        window.open(`https://wa.me/${WhattsapNumber}?text= ${message}`, "_blank")
    }
  return (
    <div onClick={HandleClick}
    className={clasName}>
      <h1 className={`${titleFont.className} text-2xl font-bold text-center`}>¿Te gustaría tener una plataforma como esta para tu negocio?</h1>
      <h2 className={`${titleFont.className} mt-5 text-center`}>Creamos tu tienda online personalizada para que recibas pedidos organizados y vendas sin límites.</h2>

      <div 
      className='
        m-5
    bg-gray-500
        text-white
        rounded-full
        shadow-lg
        content-center
        cursor-pointer
        text-2xl
        '>
        <button 
        className='text-center cursor-pointer'
        type='submit'>
            <FaWhatsapp />
        </button>
      </div>
    </div>
  )
}
