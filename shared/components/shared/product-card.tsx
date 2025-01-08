import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { Ingredient } from "@prisma/client";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}) => {
  return (
    <Link
      href={`/product/${id}`}
      className={cn(
        "flex flex-col justify-between bg-white rounded-lg hover:shadow-lg shadow-md p-4",
        className
      )}
    >
      <div>
        <div className="flex justify-center p-6 bg-secondary rounded-lg">
          <Image width={215} height={215} src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        {ingredients.length > 0 && (
          <p className="text-sm text-gray-400">
            {ingredients.map((ingredient) => ingredient.name).join(", ")}
          </p>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="text-[20px]">
          от <b>{price} ₽</b>
        </span>

        <Button variant="secondary" className="text-base font-bold">
          <Plus size={20} className="mr-1" />
          Добавить
        </Button>
      </div>
    </Link>
  );
};
