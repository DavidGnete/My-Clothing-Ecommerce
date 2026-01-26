"use client";
import React, { useState } from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
    quantity: number;
    onQuantityChange: (value: number) => void
}
export const QuantitySelector = ({onQuantityChange, quantity}:Props ) => {
  /*   const [count, setcount] = useState(quantity); */

    const onValueChanged = (value: number) => {
        if (quantity + value < 1) return;

        onQuantityChange( quantity + value);
    }
  return (
    <div className='flex '>
        <button className='cursor-pointer'
        onClick={() => onValueChanged(-1)}>
            <IoRemoveCircleOutline size={30} />
        </button>
        <span className='w-20 mx-3 px-5 bg-gray-200 text-center rounded '>
            {quantity}
        </span>
        <button className='cursor-pointer' 
        onClick={() => onValueChanged(+1)}>
            <IoAddCircleOutline size={30} />
        </button>

    </div>

)
}
