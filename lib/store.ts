import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Dish } from "@/lib/data";

interface PlateItem {
    dish: Dish;
    quantity: number;
}

interface PlateState {
    items: PlateItem[];
    add: (dish: Dish) => void;
    decrease: (id: number) => void;
    remove: (id: number) => void;
    clear: () => void;
    totalCalories: () => number;
    totalCount: () => number;
}

export const usePlate = create<PlateState>()(
    persist(
        (set, get) => ({
            items: [],
            add: (dish) =>
                set((state) => {
                    const existing = state.items.find((i) => i.dish.id === dish.id);
                    if (existing) {
                        return {
                            items: state.items.map((i) =>
                                i.dish.id === dish.id ? { ...i, quantity: i.quantity + 1 } : i
                            ),
                        };
                    }
                    return { items: [...state.items, { dish, quantity: 1 }] };
                }),
            decrease: (id) =>
                set((state) => ({
                    items: state.items
                        .map((i) => (i.dish.id === id ? { ...i, quantity: i.quantity - 1 } : i))
                        .filter((i) => i.quantity > 0),
                })),
            remove: (id) =>
                set((state) => ({ items: state.items.filter((i) => i.dish.id !== id) })),
            clear: () => set({ items: [] }),
            totalCalories: () =>
                get().items.reduce((sum, i) => sum + i.dish.calories * i.quantity, 0),
            totalCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
        }),
        { name: "sahhane-tabagim" } // localStorage anahtarı — sepetten farklı
    )
);