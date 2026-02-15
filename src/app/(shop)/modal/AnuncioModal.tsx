"use client";
import { useState, useEffect} from 'react';
import Image from 'next/image';
import React from 'react'



export const AnuncioModal = () => {
    const [siModal, setsiModal] = useState (false)


    useEffect(() => {
        const upModal = sessionStorage.getItem('anuncio_visto')
        if (!upModal){
            setsiModal(true)
        }
    },[])

    const closeModal = () => {
        setsiModal(false)
        sessionStorage.setItem('anuncio_visto', 'true')

    }

    if (!siModal) return null;

  return (
    <div className="fixed  inset-0 bg-black/90 flex justify-center items-center z-50" onClick={closeModal}>
        <div className='relative w-[90%] max-w-xs 
                md:max-w-xs
                lg:max-w-xs
                xl:max-w-lg'>
      <Image
      src='/promotion/modalWork.webp'
      alt='anuncio pagina web'
      width={1200}
      height={1600}
      className="w-full h-auto rounded-xl"
      />
    
    <button 
    type= 'button'
    onClick={closeModal}
    className='absolute top-1 right-3 bg-black/70 text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer text-xl'>
    x
        </button>

        </div>
    </div>
    
  )

}
