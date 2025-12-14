"use client";
import CartCard from "./CartCard";
import { Button } from "../ui/button";
import { useCartStore } from "@/store/cart.store";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const { items } = useCartStore();

  if (items.length === 0) {
    return (
      <aside className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col items-center justify-center h-full text-center p-8 gap-4">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Your cart is empty</h3>
              <p className="text-muted-foreground">
                Add some delicious items to get started!
              </p>
            </div>
          </div>
        </div>
      </aside>
    );
  }
  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <aside className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1 p-4">
          {items.map((item) => (
            <CartCard key={item._id} {...item} />
          ))}
        </div>
      </div>
      <div className="border-t p-4 space-y-4">
        <div className="flex justify-between items-center text-lg font-semibold">
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>

        <Button className="w-full" size="lg">
          Place Order
        </Button>
      </div>
    </aside>
  );
};

export default Cart;
