export const revalidate = 60;
import { getPaginateProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";
import { Suspense } from "react";


interface Props {
  searchParams :{
    page?: string;
  };
}


export default async function Home({searchParams}: Props ) {

  const ParseSearchParams = searchParams;

  const page = ParseSearchParams.page ? parseInt( ParseSearchParams.page) : 1;


  const {products, currentPage, totalPages} = await getPaginateProductsWithImages({ page});

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <>
    <Title
    title="Tienda"
    subtitle="Todos los productos"
    className="mb-2"
    />

   {/*  Comente la linea SIZE en interface/productinterface */}
    <ProductGrid 
    products={products}
    />
    <Suspense fallback ={<div>Cargando....</div>} >
    <Pagination totalPages={totalPages}/>
    </Suspense>

    </>
  );
}
