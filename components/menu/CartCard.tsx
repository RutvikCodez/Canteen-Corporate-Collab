"use client";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useCartStore } from "@/store/cart.store";

const CartCard = ({
  _id,
  description,
  image,
  name,
  price,
  quantity,
  ...props
}: itemCardProps) => {
  const { decreaseQty, increaseQty, removeItem } = useCartStore();
  return (
    <Card className="overflow-hidden" {...props}>
      <CardContent>
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-16 bg-muted rounded-lg shrink-0 bg-cover bg-center">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium truncate">{name}</h4>
            <p className="text-sm text-muted-foreground">${price}</p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                decreaseQty(_id);
              }}
            >
              <Minus />
            </Button>

            <Badge variant="secondary" className="min-w-8 justify-center">
              {quantity}
            </Badge>

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                increaseQty(_id);
              }}
            >
              <Plus />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeItem(_id)}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartCard;
