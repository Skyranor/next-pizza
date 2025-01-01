import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="grid grid-cols-4 gap-10">
          <Filters />
          <div className="col-span-3 ml-10">
            <ProductsGroupList
              categoryId={1}
              title="Пиццы"
              items={[
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
              ]}
            />
            <ProductsGroupList
              categoryId={2}
              title="Комбо"
              items={[
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
              ]}
            />
            <ProductsGroupList
              categoryId={3}
              title="Закуски"
              items={[
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
              ]}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
