import { Input, RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { FilterCheckbox } from "./filter-checkbox";
import { Title } from "./title";

export const Filters = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Title text="Фильтры" size="sm" className="mb-5 font-extrabold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="text-sm text-neutral-500 mb-2 font-black">
          Цена от и до:
        </p>
        <div className="mt-2 flex items-center mb-4">
          <Input
            type="number"
            placeholder="от"
            className="w-1/2 mr-2"
            step={100}
          />
          <Input type="number" placeholder="до" className="w-1/2" step={100} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        className="mt-5"
        title="Формат"
        limit={6}
        defaultItems={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Солённые огурчики",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "3",
          },
          {
            text: "Солённые огурчики",
            value: "4",
          },
          {
            text: "Красный лук",
            value: "5",
          },
          {
            text: "Томаты",
            value: "6",
          },
          {
            text: "Сырный соус",
            value: "7",
          },
          {
            text: "Моццарелла",
            value: "8",
          },
          {
            text: "Чеснок",
            value: "9",
          },
        ]}
      />
    </div>
  );
};
