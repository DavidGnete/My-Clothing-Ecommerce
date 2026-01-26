import {Title } from "@/components";
import Link from "next/link";
import { ProductsInCart } from "./ui/productsInCart";
import { OrderSumari} from './ui/orderSumari';


export default function CartPage() {

/*   redirect('/empty')
 */

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[100px">

        <Title 
        title="Carrito"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas Items</span>
            <Link href="/" className="underline mb-5">
            Continua Comprando
            </Link>
          


         {/*  Items  */}
        
        <ProductsInCart />
         </div>

          {/* checkout compra- resumen */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de compra</h2>

          <OrderSumari/>

            <div className="mt-5 mb-2 w-full ">

              <Link href="/checkout/address"
              className="flex btn-primary justify-center"
              >
              Checkout
              </Link>
            </div>

          </div>



        </div>


      </div>


    </div>
  );
}