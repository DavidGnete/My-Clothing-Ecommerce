"use client";
import { Product } from '@/interfaces'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    product : Product;
}

export const ProductGridItem = ({ product}: Props ) => {
    const [displayImages, setdisplayImages] = useState(product.images[0] );


  return (
    <div className='rounder-md overflow-hidden fade-in'>
        <Link  href={`/product/${product.slug}`}>    
        <Image
        src={`/products/${displayImages}` }
        alt= {product.title}
        className="w-full object-cover rounded"
        width={500}
        height={500}
        onMouseEnter={ () => setdisplayImages(product.images[1] )}
        onMouseLeave={ () => setdisplayImages(product.images[0] )}
        ></Image>
        </Link>
        

        <div className='p-4 flex flex-col '>
            <Link
            className='hover:text-blue-700'
            href={`/product/${product.slug}`}>
            {product.title}
            </Link>
            <span className='font-bold'>${product.price} </span>

        </div>
    </div>
  )
}
