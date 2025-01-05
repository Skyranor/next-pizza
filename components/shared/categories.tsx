"use client";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  categories: Category[];
}

export const Categories: React.FC<Props> = ({ className, categories }) => {
  const activeId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {categories.map(({ id, name }) => (
        <Link
          key={id}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeId === id && "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
