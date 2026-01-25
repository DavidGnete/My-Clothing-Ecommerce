"use client";
import { QuantitySelector, SizeSelector } from '@/components'
import { Product, Size  } from '@/interfaces';
import React, { useState } from 'react'

interface Props {
    product: Product;
}

export const AddToCart = ({product}: Props) => {

    const [size, setside] =useState<Size | undefined>();
    const [quantity, setquantity] =useState<number>(1);
    const [posted, setposted]= useState(false);




    const addToCart = () =>{
        setposted(true);
        console.log(size, quantity)
    }
  return (
    <>
    {
        posted && !size && (
         <span className='mg-2 text-red-300'>
        Debe de seleccionar una Talla 
    </span>
        )
    }
    {/*  selector de tallas */}
       <SizeSelector 
        selectedSize={size}
       availableSize={product.Size }
       onSizeChanged={setside}
       
       />


      {/*  selector de cantidad */}
      <QuantitySelector  
      quantity={quantity}
      onQuantityChange={setquantity}/>


      {/* button */}
      <button 
      onClick={addToCart}
      className="btn-primary my-5">
        Agregar al carrito
      </button>
    
    </>
  )
}
