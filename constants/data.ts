import {
  MenuIcon,
  ShoppingBag,
  Package,
  CreditCard,
  QrCode,
  Settings,
  Home,
  DollarSign, Users, TrendingUp
} from "lucide-react";

export const foodCategories = [
  {
    category: "Pizza",
    items: [
      {
        id: 1,
        name: "Margherita Pizza",
        price: 249,
        quantity: 1,
        description:
          "Classic pizza with fresh tomatoes, mozzarella, and basil.",
        image: "https://images.unsplash.com/photo-1601924582975-7aa7f9cfa1d9",
      },
      {
        id: 2,
        name: "Pepperoni Pizza",
        price: 299,
        quantity: 1,
        description: "Loaded with pepperoni and cheese on a crispy crust.",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
      },
      {
        id: 3,
        name: "Veggie Pizza",
        price: 279,
        quantity: 1,
        description: "Topped with bell peppers, olives, onions, and corn.",
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e",
      },
    ],
  },
  {
    category: "Burgers",
    items: [
      {
        id: 4,
        name: "Classic Veg Burger",
        price: 149,
        quantity: 1,
        description: "Crispy veg patty with lettuce and special sauce.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      },
      {
        id: 5,
        name: "Cheese Burger",
        price: 179,
        quantity: 1,
        description: "Juicy burger with melted cheese and fresh veggies.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      },
      {
        id: 6,
        name: "Paneer Burger",
        price: 199,
        quantity: 1,
        description: "Grilled paneer patty with Indian spices.",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
      },
    ],
  },
  {
    category: "Pasta",
    items: [
      {
        id: 7,
        name: "White Sauce Pasta",
        price: 219,
        quantity: 1,
        description: "Creamy white sauce pasta with herbs.",
        image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c",
      },
      {
        id: 8,
        name: "Red Sauce Pasta",
        price: 209,
        quantity: 1,
        description: "Tangy tomato-based pasta with veggies.",
        image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f",
      },
      {
        id: 9,
        name: "Pesto Pasta",
        price: 239,
        quantity: 1,
        description: "Fresh basil pesto tossed with pasta.",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
      },
    ],
  },
  {
    category: "South Indian",
    items: [
      {
        id: 10,
        name: "Masala Dosa",
        price: 129,
        quantity: 1,
        description: "Crispy dosa stuffed with spicy potato filling.",
        image: "https://images.unsplash.com/photo-1668236534990-6f8a1d6a2c7d",
      },
      {
        id: 11,
        name: "Idli Sambhar",
        price: 99,
        quantity: 1,
        description: "Soft idlis served with sambhar and chutney.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
      },
      {
        id: 12,
        name: "Uttapam",
        price: 139,
        quantity: 1,
        description: "Thick dosa topped with vegetables.",
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        id: 13,
        name: "Chocolate Cake",
        price: 159,
        quantity: 1,
        description: "Rich and moist chocolate cake.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      },
      {
        id: 14,
        name: "Ice Cream",
        price: 99,
        quantity: 1,
        description: "Creamy vanilla ice cream scoop.",
        image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
      },
      {
        id: 15,
        name: "Brownie",
        price: 129,
        quantity: 1,
        description: "Chocolate brownie with a soft center.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
      },
    ],
  },
];

export const navigation = [
  { name: "Dashboard", href: "/admin", icon: Home },
  { name: "Menu", href: "/admin/menu", icon: MenuIcon },
  { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Inventory", href: "/admin/inventory", icon: Package },
  { name: "Payments", href: "/admin/payments", icon: CreditCard },
  { name: "Tables & QR", href: "/admin/tables", icon: QrCode },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];



export const statCardData: statCardProps[] = [
  {
    title: "Today's Revenue",
    value: "₹2,847.50",
    Icon: DollarSign,
    desc: "+12.5% from yesterday",
  },
  {
    title: "Orders Today",
    value: 127,
    Icon: ShoppingBag,
    desc: "+8.2% from yesterday",
  },
  {
    title: "Active Tables",
    value: "8/12",
    Icon: Users,
    desc: "67% occupancy rate",
  },
  {
    title: "Avg Order Value",
    value: "₹22.42",
    Icon: TrendingUp,
    desc: "+3.1% from last week",
  },
];

export const salesData = [
  { name: "Mon", sales: 1200 },
  { name: "Tue", sales: 1900 },
  { name: "Wed", sales: 1600 },
  { name: "Thu", sales: 2100 },
  { name: "Fri", sales: 2800 },
  { name: "Sat", sales: 3200 },
  { name: "Sun", sales: 2400 },
]