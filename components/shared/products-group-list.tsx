"use client";
import React, { RefObject, useEffect, useRef } from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  items: { id: number }[];
  className?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  categoryId,
}) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(
    intersectionRef as unknown as RefObject<HTMLElement>,
    {
      threshold: 0.4,
      rootMargin: "100px",
      root: null,
    }
  );

  const setActiveId = useCategoryStore((state) => state.setActiveId);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveId]);
  return (
    <div className={className} ref={intersectionRef} id={title}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item, i) => (
          <ProductCard
            key={item.id}
            name="Маргарита"
            imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp"
            price={390}
            count={i % 2}
          />
        ))}
      </div>
    </div>
  );
};
