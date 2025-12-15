import { create } from "zustand";

export const useCartStore = create<CartState>((set) => ({
  items: [],
  open: false,
  setOpen: (open) => set({ open }),

  addToCart: (item) =>
    set((state) => {
      const exists = state.items.find((i) => i._id === item._id);

      if (exists) {
        return {
          items: state.items.map((i) =>
            i._id === item._id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1 }],
      };
    }),

  increaseQty: (_id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i._id === _id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    })),

  decreaseQty: (_id) =>
    set((state) => ({
      items: state.items
        .map((i) =>
          i._id === _id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0),
    })),

  removeItem: (_id) =>
    set((state) => ({
      items: state.items.filter((i) => i._id !== _id),
    })),

  clearCart: () => set({ items: [] }),
}));