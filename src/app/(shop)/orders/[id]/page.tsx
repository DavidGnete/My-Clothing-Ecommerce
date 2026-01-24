import {  Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

const ProductInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default async function ({ params }: Props) {
  const { id } = await params;

  //Verificador
  //Redirect

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounder-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                },
              )}
            >
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pendiente</span> */}
              <span className="mx-2">Orden Pagada</span>
            </div>

            {/*  Items del Carrito */}
            {ProductInCart.map((product) => (
              <div key={product.slug} className="flex mb-10">
                <Image
                  src={`/products/${product.images[0]}`}
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
                  <p>{product.title} </p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3} </p>
                </div>
              </div>
            ))}
          </div>

          {/* checkout compra- resumen */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2 font-bold">Dirrecion Entrega</h2>
            <div className="mb-10 ">
              <p className="text-xl">David Agudelo</p>
              <p>San Javier 20 julio</p>
              <p>Crrara 112 #34-DD - 148</p>
              <p>Medellin</p>
              <p>123456789</p>
            </div>
            {/* divider */}
            <div className="w-full h-0.5 rounder bg-gray-200 mb-10"></div>

            <h2 className="text-2xl mb-2">Resumen de compra</h2>

            <div className="grid grid-cols-2 gap-x-20">
              <span>numero de productos</span>
              <span className="text-rigth">3 productos</span>

              <span>Subtotal</span>
              <span className="text-rigth">100</span>

              <span>Impuestos (15%) </span>
              <span className="text-rigth">$ 100</span>

              <span className="mt-5 text-2xl">Total: </span>
              <span className="mt-5 text-2xl text-rigth">$ 100</span>
            </div>

            <div className="mt-5 mb-2 w-full ">
              <div
                className={clsx(
                  "flex items-center rounder-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-700": true,
                  },
                )}
              >
                <IoCardOutline size={30} />
                {/* <span className="mx-2">Pendiente</span> */}
                <span className="mx-2">Pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
