"use client"
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { useState } from "react";

const CartCard = () => {
    const [quantity, setQuantity] = useState<number>(1);
  return (
    <Card className="overflow-hidden">
      <CardContent>
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-16 bg-muted rounded-lg shrink-0 bg-cover bg-center">
            <Image
              src={
                "https://images.unsplash.com/photo-1628840042765-356cda07504e"
              }
              alt={"Pizza Pizza Pizza"}
              fill
              className="object-cover rounded-md"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-medium truncate">pizz</h4>
            <p className="text-sm text-muted-foreground">$12.99</p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {setQuantity(q => Math.max(1, q - 1))}}
            >
              <Minus />
            </Button>

            <Badge variant="secondary" className="min-w-8 justify-center">
              {quantity}
            </Badge>

            <Button
              variant="outline"
              size="sm"
              onClick={() => {setQuantity(quantity + 1)}}
            >
              <Plus />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              //   onClick={() => removeItem(item.id)}
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
