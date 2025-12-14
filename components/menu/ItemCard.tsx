"use client";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useCartStore } from "@/store/cart.store";

const ItemCard = ({
  name,
  description,
  price,
  image,
  _id,
  quantity,
  ...props
}: itemCardProps) => {
  const { addToCart } = useCartStore();
  return (
    <Card
      className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-0"
      {...props}
    >
      <div className="relative aspect-4/3">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg leading-tight">{name}</h3>
            <span className="text-lg font-bold text-primary">₹{price}</span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>

          <Button
            className="w-full mt-3 relative overflow-hidden"
            size="lg"
            onClick={() =>
              addToCart({ _id, name, price, image, quantity, description })
            }
          >
            <Plus />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
