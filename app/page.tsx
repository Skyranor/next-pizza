import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

  console.log("categories", categories);
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categories} />
      <Container className="mt-10 pb-14">
        <div className="grid grid-cols-4 gap-10">
          <Filters />
          <div className="col-span-3 ml-10">
            {categories.map(
              (category) =>
                category.products.length > 0 && (
                  <ProductsGroupList
                    categoryId={category.id}
                    title={category.name}
                    items={category.products}
                    key={category.id}
                  />
                )
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
