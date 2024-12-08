import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";

export const TopBar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-50 bg-white py-5 shadow-lg shadow-black/5",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};