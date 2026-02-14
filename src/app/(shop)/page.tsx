export const revalidate = 60;
import { getPaginateProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Mainswiper } from "@/components/ui/main-Swiper/Mainswiper";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;

  const page = params.page ? parseInt(params.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginateProductsWithImages({ page });

  return (
    <>
    <Mainswiper />
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />

      {/*  Comente la linea SIZE en interface/productinterface */}
      <ProductGrid products={products} />
      <Suspense fallback={<div>Cargando....</div>}>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </>
  );
}
