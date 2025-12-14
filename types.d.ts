type menuHeaderProps = {
    tableNumber: string;
}

type itemCardProps = {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

type foodCategoryType = {
    category: string;
    items: itemCardProps[];
}

type CartState = {
  items: itemCardProps[];
  addToCart: (item: itemCardProps) => void;
  increaseQty: (_id: string) => void;
  decreaseQty: (_id: string) => void;
  removeItem: (_id: string) => void;
  clearCart: () => void;
};