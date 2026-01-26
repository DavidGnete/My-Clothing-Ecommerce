import type { CartProduct } from "@/interfaces";
import { create} from "zustand";
import { persist } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';

interface State {

    cart: CartProduct[];

    getTotalItems: () => number;
    
    getSummaryInformation: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
};
   /*  getSummaryInformation: () => void; */


    addProductTocart: (product: CartProduct) => void
    updateProductQuantity: (product: CartProduct, quantity: number) => void
    RemoveProduct: (product: CartProduct) => void


    // AddProductToCart
    //UpdateProductQuantity
    //ReoverProduct
}


export const useCartStore = create<State>()(
    persist(
        
    (set,get) => ({
    cart: [],

    //Methodos
    getTotalItems: () => {
        const {cart} = get();
        return cart.reduce((total,item) =>total + item.quantity, 0 );
    },

    getSummaryInformation: () => {
    const {cart} = get();
const subTotal = cart.reduce(
  (sum, product) => sum + product.quantity * product.price,
  0
);
    const tax = subTotal * 0.15;
    const total = subTotal + tax;
    const itemsInCart = cart.reduce((total,item) =>total + item.quantity, 0 );

    return {
        subTotal, tax, total, itemsInCart
    }

    },

    addProductTocart:(product: CartProduct) => {
        const {cart} =get();

        //1.revisar si el prodcuto existe en el carrito con la talla seleccionada
        const productIncart = cart.some(
            (item) =>(item.id === product.id && item.size === product.size)
        );

        if ( !productIncart) {
            set({cart: [...cart, product]} );
            return;
        }

        //2. Se que el pofcuto existe por talla.. tengo ahora que incrementar
        const updateCartProducts = cart.map( (item) => {
            if ( item.id === product.id && item.size === product.size) {
                return { ...item, quantity: item.quantity + product.quantity}
            }
            return item;

        });

        set({ cart: updateCartProducts});

    },

        updateProductQuantity: (product: CartProduct, quantity: number) => {

            const {cart} = get();

            const updateCartProducts = cart.map( item => {
                if (item.id === product.id && item.size === product.size){
                    return {...item, quantity: quantity};
                }
                return item;
            });
            set({ cart: updateCartProducts});
        },
        RemoveProduct: (product: CartProduct) => {

            const {cart} = get();

            const updateRemove = cart.filter( (item )=> item.id !== product.id || item.size !== product.size
        );
        set({cart:updateRemove });
        }
}),

        {
            name: "shooping-cart",
        }
    )
)
