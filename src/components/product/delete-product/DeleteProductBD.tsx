"use client";
import { DeleteProductBD } from "@/actions/product/delete-productDB";
import { IoTrash } from 'react-icons/io5';


interface Props {
    productId: string,
}

export const DeleteProductsBD =({productId}:Props) => {

    const onDelete = async () => {
        await DeleteProductBD(productId)

    };
  return (
    <button 
    onClick={onDelete} className="text-xl cursor-pointer">
        <IoTrash />
    </button>
  );
}