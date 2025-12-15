"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Check, Clock } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { useCartStore } from "@/store/cart.store";

const ConfirmationModal = ({
  open,
  items,
  orderTotal,
  setOpen,
  tableId,
  ...props
}: confirmationModalProps) => {
  const { clearCart } = useCartStore();
  return (
    <Dialog open={open} onOpenChange={setOpen} {...props}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Order Confirmed!</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-6 py-4">
          <div className="flex justify-center">
            <div className="bg-green-100 rounded-full flex items-center justify-center animate-fade-in">
              <Check className="text-green-600" />
            </div>
          </div>
          <Card>
            <CardContent className="p-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Amount</span>
                <span className="font-semibold text-lg">
                  ${orderTotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-medium flex items-center gap-2">
                  <Clock />
                  Estimated Time
                </span>
                <span className="font-semibold text-primary">20 minutes</span>
              </div>
            </CardContent>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <p>Payment successful! Your order has been sent to the kitchen.</p>
            <p>We&apos;ll prepare it fresh for you!</p>
          </div>

          <Button
            onClick={() => {
              setOpen(false);
              clearCart();
            }}
            className="w-full"
            size="lg"
          >
            Continue Browsing
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
