"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Cart from "./Cart";
import { useCartStore } from "@/store/cart.store";

const CartDrower = ({ tableId }: { tableId: string }) => {
  const { open, setOpen } = useCartStore();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent side="right" className="max-md:w-full">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Your Order
          </SheetTitle>
        </SheetHeader>
        <Cart tableId={tableId} />
      </SheetContent>
    </Sheet>        
  );
};

export default CartDrower;
