"use server";
import prisma from '@/lib/prisma';
export const getStockBySlug = async (slug: string)  => {

    try {


    const Stock = await prisma.product.findFirst({
        where: {slug},
        select: {inStock: true}
    })

    return Stock?.inStock ?? 0;

    }catch (error){
        return 0;
    }
}