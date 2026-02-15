export const revalidate = 60;
import { getPaginateProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Mainswiper } from "@/components/ui/main-Swiper/Mainswiper";
import { TextWhattsap } from "@/components/ui/TextWhattsap/TextWhattsap";
import { redirect } from "next/navigation";
import { Suspense } from "react";

interface Props {
  searchParams: {
    page: string;
    images: string[

    ];
  };
}

const slidePromo = [
  'Slide-Paisita.webp',
  'promo1.webp',
  'promo2.webp',
]

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;

  const page = params.page ? parseInt(params.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginateProductsWithImages({ page });

  return (
    <>
    <Mainswiper  images= {slidePromo} />

      <TextWhattsap clasName="mt-10" />

      <Title  subtitle="Todos los productos"  />
      {/*  Comente la linea SIZE en interface/productinterface */}
      <ProductGrid products={products} />
      <Suspense fallback={<div>Cargando....</div>}>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </>
  );
}
