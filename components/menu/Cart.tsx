import React from "react";
import CartCard from "./CartCard";
import { Button } from "../ui/button";

const Cart = () => {
  return (
    <aside className="border-l  h-[calc(100vh-4rem)] fixed right-0 bg-card">
      <div className="h-full p-4">
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-4 p-4">
              <CartCard />
            </div>
          </div>
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total 3 items</span>
              <span>$12.99</span>
            </div>

            <Button className="w-full" size="lg">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Cart;
