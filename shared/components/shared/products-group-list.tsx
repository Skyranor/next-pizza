"use client";
import React, { RefObject, useEffect, useRef } from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/shared/store/category";
import { cn } from "@/shared/lib/utils";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
  title: string;
  items: ProductWithRelations[];
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
      threshold: 0.8,
    }
  );

  const setActiveId = useCategoryStore((state) => state.setActiveId);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveId]);
  return (
    <div className={cn(className, "mb-12")} ref={intersectionRef} id={title}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0]?.price}
            ingredients={item.ingredients}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
