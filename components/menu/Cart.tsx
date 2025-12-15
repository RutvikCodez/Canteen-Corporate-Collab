"use client";
import CartCard from "./CartCard";
import { Button } from "../ui/button";
import { useCartStore } from "@/store/cart.store";
import { ShoppingCart } from "lucide-react";
import api from "@/lib/axios";
import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

const Cart = ({ tableId }: { tableId: string }) => {
  const { items, clearCart } = useCartStore();
  const [open, setOpen] = useState<boolean>(false);

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
  const handlePlaceorder = async () => {
    const { data } = await api.post("/confirmOrder", {
      orderId: crypto.randomUUID().slice(0, 8),
      tableId,
      items,
      totalAmount,
      estimatedTime: 20,
    });
    setOpen(true);
    console.log("Order placed:", data);
  };
  return (
    <aside className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-4 p-4">
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

        <Button className="w-full" size="lg" onClick={handlePlaceorder}>
          Place Order
        </Button>
        <ConfirmationModal
          items={items}
          open={open}
          setOpen={(value: boolean) => {
            setOpen(value);
            if (!value) clearCart(); 
          }}
          orderTotal={totalAmount}
          tableId={tableId}
        />
      </div>
    </aside>
  );
};

export default Cart;
