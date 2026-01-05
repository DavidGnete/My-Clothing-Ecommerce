import { notFound } from "next/navigation";
import { initialData } from "@/seed/seed";
import { ProductGrid, Title } from "@/components";
import { ValidCategorie } from "@/interfaces";

const seedproducts = initialData.products;


interface Props {
  params: {
    id: ValidCategorie;
  }
}
export default async function ({params}: Props) {


  const {id} =await params;
  const products = seedproducts.filter( product => product.gender === id);

  const  labels: Record<ValidCategorie, string> = {
    'men': 'De Hombres',
    'women': 'De Mujeres',
    'kid': 'De Niños',
    'unisex': 'Para Todos'
  }

 /*  if ( id === 'kids'){
    notFound();
  } */


  return (
    <>
    <Title
          title={`Articulos ${ (labels)[id] }`}
          subtitle={`Productos para ${(labels)[id] }`}
          className="mb-2"
          />
      
    <ProductGrid 
            products={products}
            />
    </>
  );
}