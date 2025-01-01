import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import Image from "next/image";

interface Props {
  name: string;
  price: number;
  count?: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
        <Image width={215} height={215} src={imageUrl} alt="Logo" />
      </div>
      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
      <p className="text-sm text-gray-400">
        Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
        альфредо, чеснок
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          от <b>{price} ₽</b>
        </span>
      </div>
    </div>
  );
};
