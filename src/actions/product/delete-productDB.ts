"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const DeleteProductBD = async (productId: string) => {
    try {

        await prisma.$transaction(async(tx) => {
            await tx.productImage.deleteMany({
                where: {
                    productId
                },
            }),

            await tx.product.deleteMany({
                where:{
                    id: productId,
                },
            });
        
        });

        revalidatePath('/admin/products');
        return {ok: true}


        
    } catch (error) {
        console.error(error)
        return {
            ok: false,
            message:'No se pudo eliminar el producto'

        }

        
    }
}