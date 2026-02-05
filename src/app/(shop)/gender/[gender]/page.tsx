export const revalidate = 60;

import {  redirect } from "next/navigation";
import { Pagination, ProductGrid, Title } from "@/components";
import { getPaginateProductsWithImages } from "@/actions";
/* import { Gender } from '../../../../generated/prisma/enums'; */
import { Gender } from '@prisma/client';


interface Props {
  params: {
    gender: string;
  },
  searchParams: {
    page?: string;

  }
}
export default async function ({params, searchParams}: Props) {

  const {gender} = await params;

  const {page: pageParams} = await searchParams;
  
    const page =  pageParams ? parseInt(pageParams) : 1;
  
    const {products, currentPage, totalPages} = await getPaginateProductsWithImages({ page, gender: gender as Gender});
  
    if (products.length === 0) {
      redirect(`/gender/${gender}`);
    }
  




  const  labels: Record<string, string> = {
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
          title={`Articulos ${ (labels)[gender] }`}
          subtitle={`Productos para ${(labels)[gender] }`}
          className="mb-2"
          />
      
    <ProductGrid 
            products={products}
            />
    <Pagination totalPages={totalPages} />
    </>
  );
}