'use server';
import prisma from '@/lib/prisma';
import { Gender, Size, Product } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import {z} from 'zod';
import { v2 as cloudinary} from 'cloudinary';
cloudinary.config(process.env.CLOUDINARY_URL ?? '');

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

    try{
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

    // proceso de guardado de imagenes
    // Reocorrer imagenes y guardarlas 
    if (formData.getAll('images')) {

        const images = await UploadImages(formData.getAll('images') as File[]);
        console.log(images)
    }

        return{
            product

        }
    });

    // Todo: RevalidarPaths
    revalidatePath('/admin/products');
    revalidatePath(`/admin/product/${product.slug}`);
    revalidatePath(`/products/${product.slug}`);
    

    return {
        ok: true,
        product: prismaTx.product,
    }
        
    }catch(error) {

        return {
            ok: false,
            message: 'Revisar los logs, no se puede actualizar/crear'
        }
        
    }
}

const UploadImages = async( images: File[]) => {

try {
        const uploadPromises =images.map( async (image) => {

    try {
      const buffer = await image.arrayBuffer();
            const base64Image = Buffer.from(buffer).toString('base64');

            return cloudinary.uploader.upload(`data:image/png;base64,${base64Image}`)
                .then( r => r.secure_url);
        

} catch (error) {
    console.log(error)
    return null;
    

}
})

    const uploadImages = await Promise.all( uploadPromises);
    return uploadImages;

    }catch (error){
        console.log(error);
        return null;

    }
}