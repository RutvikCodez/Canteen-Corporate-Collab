import { foodCategories } from "@/constants/data";
import ItemCard from "./ItemCard";

const Items = () => {
  return (
    <div className="flex flex-col gap-4 py-4">
      {foodCategories.map(({ category, items }, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <h2 className="text-2xl font-serif font-semibold text-foreground">
            {category}
          </h2>
          <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-4">
            {items.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
