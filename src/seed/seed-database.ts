
import { initialData } from '../seed/seed.js';
import prisma from '../lib/prisma.js'
declare var process: any;

async function main () {

 /*    await Promise.all([ */
    await prisma.user.deleteMany();

    await prisma.productImage.deleteMany();
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
 /*    ]); */

    const {categories, products, users} = initialData;

    await prisma.user.createMany({
        data: users
    });

/* {
    name: 'Shirt'
} */

    const CategoriesData = categories.map( (name) => ({name}));

    await prisma.category.createMany({
        data: CategoriesData
    });

    const categoryDB = await prisma.category.findMany();

    const categoriesMap = categoryDB.reduce((map, category) => {
    
    map[ category.name.toLowerCase()] = category.id;
    return map;
    }, {} as Record<string, string> );


    //productos

    for (const product of products) {
    const { type, images, sizes, ...rest } = product;

    // Creamos el producto
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        // Si tu schema dice 'sizes' con minúscula, cámbialo aquí
        Size: sizes ,
        categoryId: categoriesMap[type.toLowerCase()]!
      }
    });

    //Images
    const ImagesData = images.map( image => ({
        url: image,
        productId: dbProduct.id
    }))

    await prisma.productImage.createMany({
        data: ImagesData
    });
}
console.log("seed ejecutado correctamente")
}

(async () => {
    if (process.env.NODE_ENV === 'production') return;
    try {
        await main();
    } catch (e) {
        console.error(e);
    } finally {
        await prisma.$disconnect();
    }
})();