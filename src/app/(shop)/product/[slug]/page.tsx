export const revalidate = 604800; //7 dias 

import { notFound } from "next/navigation";

import { titleFont } from "@/config/fonts";
import { ProductMovileSlideShop, ProductSlideShow, QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { getProductBySlug } from "@/actions";
import { Metadata, ResolvingMetadata } from "next";


interface Props {
  params: {
    slug: string;
  }
}


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata 
): Promise<Metadata> {

  const slug = params.slug;
 
  // fetch post information
  const product = await getProductBySlug(slug);

 
  return {
    title: product?.title,
    description: product?.description ?? "",
    openGraph: {
    title: product?.title,
    description: product?.description ?? "",
      images: [`/products/${product?.images[1]}`],
    }
  }
}



export default async function ProductBySlugPager ({params}: Props ) {

  const {slug} = await params;

  const product = await getProductBySlug(slug);
  if (!product){
    notFound();
  }

  return (
    <div className="mt-5 mb-30 grid grid-cols-1 md:grid-cols-3 gap-3 ">

      {/* slidesshow */}
      <div className="col-span-1 md:col-span-2">


      {/*  Mobile SlideShop */}
      <ProductMovileSlideShop 
      title={product.title}
      images={product.images}
      clasName="block md:hidden"
      />
      

        {/* Deskop SlidesHop */}
        <ProductSlideShow 
        title={product.title}
        images={product.images}
        clasName="hidden md:block"
        />
      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5 ">

       <StockLabel slug={product.slug} />

        <h1 className={`${titleFont.className} antialiased font-bold text-xl `} >
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price} </p>


       {/*  selector de tallas */}
       <SizeSelector
       selectedSize={ product.Size[1]}
       availableSize={product.Size }
       
       />


      {/*  selector de cantidad */}
      <QuantitySelector 
      quantity={5}/>


      {/* button */}
      <button className="btn-primary my-5">
        Agregar al carrito
      </button>

      {/* Descripcion */}
      <h3 className="font-bold text-sm"> Descripcion</h3>
      <p className="font-light">
        {product.description}
      </p>

      </div>
    </div>
  );
}