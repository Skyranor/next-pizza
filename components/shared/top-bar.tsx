import { cn } from "@/lib/utils";
import { Container } from "./container";
import { SortPopup } from "./sort-popup";
import { Category } from "@prisma/client";
import { Categories } from "./categories";

export const TopBar = ({
  className,
  categories,
}: {
  className?: string;
  categories: Category[];
}) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-50 bg-white py-5 shadow-lg shadow-black/5",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories categories={categories} />
        <SortPopup />
      </Container>
    </div>
  );
};
