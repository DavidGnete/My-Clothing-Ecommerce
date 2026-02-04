"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/store";
import { ImageProducts, QuantitySelector } from "@/components";
import Link from "next/link";

export const ProductsInCart = () => {
  const updateProductQuantity = useCartStore((state) => state.updateProductQuantity);
  const RemoveProduct = useCartStore((state) => state.RemoveProduct);
  const [loaded, setloaded] = useState(false);
  const ProductInCart = useCartStore((state) => state.cart);

  useEffect(() => {
    setloaded(true);
  });

  if (!loaded) {
    return <p>loading...</p>;
  }

  return (
    <>
      {ProductInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-10">
          <ImageProducts
            src={product.image}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "100px",
            }}
            alt={product.title}
            className="mr-5 rounded"
          />

          <div>
            <Link
              href={`/product/${product.slug}`}
              className="hover:underline cursor-pointer"
            >
              <p>{product.title} </p>
            </Link>
            <p>{product.price} </p>
            
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChange={value => updateProductQuantity(product, value)}
            />

            <button 
            onClick={() => RemoveProduct(product)}
            className="underline mt-3 cursor-pointer">Remover</button>
          </div>
        </div>
      ))}
    </>
  );
};
