import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from "lucide-react"
import Cart from "./Cart"

const CartDrower = () => {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Your Order
          </SheetTitle>
        </SheetHeader>
        <Cart />
      </SheetContent>
    </Sheet>

  )
}

export default CartDrower