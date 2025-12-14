import ItemCard from "./ItemCard";
import SearchFood from "./Search";

const Items = async() => {
    const categories = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllFooods`, {cache: 'no-store'});
    const foodCategories: foodCategoryType[] = await categories.json();
    console.log(foodCategories);
    
  return (
    <section className="flex flex-col gap-4 p-4 max-w-7xl mx-auto w-full">
      <SearchFood />
      {foodCategories.map(({ category, items }, index) => (
        <div className="flex flex-col gap-4" key={index}>
          <h2 className="text-2xl font-serif font-semibold text-foreground">
            {category}
          </h2>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4">
            {items.map((item) => (
              <ItemCard key={item._id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Items;
