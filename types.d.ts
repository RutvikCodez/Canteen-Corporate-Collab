type menuHeaderProps = {
  tableNumber: string;
};

type itemCardProps = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

type foodCategoryType = {
  category: string;
  items: itemCardProps[];
};

type CartState = {
  items: itemCardProps[];
  addToCart: (item: itemCardProps) => void;
  increaseQty: (_id: string) => void;
  decreaseQty: (_id: string) => void;
  removeItem: (_id: string) => void;
  clearCart: () => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

type confirmationModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  orderTotal: number;
  items: itemCardProps[];
  tableId: string | number;
};

type statCardProps = {
  title: string;
  value: string | number;
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  desc: string;
};

type topItemsProps = {
  name: string;
  orders: number;
  revenue: number;
  number: number;
};