'use server';
import prisma from '@/lib/prisma';
import { Gender, Size, Product } from '@prisma/client';
import {z} from 'zod';


const productSchema = z.object({
    id: z.uuid().optional().nullable(),
    title: z.string().min(3).max(255),
    slug: z.string().min(3).max(255),
    description: z.string(),
    price: z.coerce
    .number()
    .min(0)
    .transform( val => Number(val.toFixed(2)) ),
    inStock: z.coerce
    .number()
    .min(0)
    .transform( val => Number(val.toFixed(0)) ),
    categoryId: z.uuid(),
    sizes: z.coerce.string().transform( val => val.split(',')),
    tags: z.string(),
    gender:z.enum(Gender),
});

export const CreateUpdateProduct = async ( formData:FormData) => {

    const data = Object.fromEntries( formData);
    const productParsed = productSchema.safeParse(data);

    if (!productParsed.success){
        console.log( productParsed.error)
        return {ok: false}
    }
    const product = productParsed.data;
    product.slug = product.slug.toLocaleLowerCase().replace(/ /g, '-').trim();

    const  {id, ...rest} = product;

    const prismaTx = await prisma.$transaction( async (tx)=> {

    let product: Product;

    const tagsArray = rest.tags.split(',').map( tag => tag.trim().toLowerCase());

    const {
    categoryId,
    sizes,
    tags,
    ...scalarData
} = rest;

    if (id) {
        //Actualizar
        product = await prisma.product.update({
            where: { id },
            data: {
                ...scalarData,
                category: {
        connect: { id: categoryId },
        },

        // ✅ enum array
        Size: {
        set: sizes as Size[],
        },

        // ✅ string[]
        tags: {
        set: tagsArray,
        },
            }

        });

    }else {
        product = await prisma.product.create({
            data: {
                ...scalarData,
                category: {
        connect: { id: categoryId },
        },
                Size: {
                    set: sizes as Size[],
                },
                tags: {
                    set: tagsArray
                }
            }
        })
    }

    console.log({ product });

        return{
            product

        }
    });

    // todo: revlidatePaths


    return {
        ok: true,
    }
}