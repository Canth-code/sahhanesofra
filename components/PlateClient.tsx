"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Trash2, Flame, UtensilsCrossed, ArrowRight } from "lucide-react";
import { usePlate } from "@/lib/store";

const DAILY_KCAL = 2000;

export default function PlateClient() {
    const [mounted, setMounted] = useState(false);
    const { items, add, decrease, remove, clear, totalCalories, totalCount } = usePlate();
    const count = totalCount();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="mt-12 h-64 animate-pulse rounded-3xl bg-stone-100" />;
    }

    if (items.length === 0) {
        return (
            <div className="mt-12 flex flex-col items-center justify-center rounded-3xl bg-white py-20 text-center ring-1 ring-stone-100">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <UtensilsCrossed size={30} />
                </span>
                <h2 className="mt-4 text-xl font-bold">Tabağınız boş</h2>
                <p className="mt-1 text-stone-500">
                    Menüden seçtiklerinizi ekleyin, toplam kaloriyi görün.
                </p>
                <Link
                    href="/menu"
                    className="button-press mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-black shadow-lg shadow-brand-600/25 hover:bg-brand-500"
                >
                    Menüye Git <ArrowRight size={18} />
                </Link>
            </div>
        );
    }

    const total = totalCalories();
    const percent = Math.min(Math.round((total / DAILY_KCAL) * 100), 100);

    return (
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_320px]">
            {/* Liste */}
            <div className="space-y-3">
                <AnimatePresence>
                    {items.map(({ dish, quantity }) => (
                        <motion.div
                            key={dish.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            className="flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-stone-100"
                        >
                            <div className="min-w-0 flex-1">
                                <h3 className="truncate font-bold">{dish.name}</h3>
                                <p className="text-sm text-stone-500">
                                    {dish.calories} kcal / porsiyon
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => decrease(dish.id)}
                                    className="button-press rounded-full bg-stone-100 p-1.5 text-stone-600 hover:bg-stone-200"
                                    aria-label="Azalt"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="w-6 text-center font-bold">{quantity}</span>
                                <button
                                    onClick={() => add(dish)}
                                    className="button-press rounded-full bg-brand-100 p-1.5 text-brand-800 hover:bg-brand-200"
                                    aria-label="Artır"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                            <button
                                onClick={() => remove(dish.id)}
                                className="button-press rounded-full p-2 text-stone-400 hover:bg-red-50 hover:text-red-500"
                                aria-label="Ürünü kaldır"
                            >
                                <Trash2 size={18} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>

                <button
                    onClick={clear}
                    className="button-press text-sm text-stone-400 underline hover:text-red-500"
                >
                    Tabağı boşalt
                </button>
            </div>

            {/* Toplam kalori kartı — özelliğin kalbi */}
            <div className="h-fit rounded-2xl bg-white p-6 ring-1 ring-stone-100">
                <h2 className="font-bold">Günlük Özet</h2>
                <div className="mt-4 text-center">
                    <span className="flex items-center justify-center gap-2 text-4xl font-extrabold text-brand-700">
                        <Flame size={30} className="text-brand-600" />
                        {total}
                    </span>
                    <p className="text-sm text-stone-400">toplam kcal ({count} porsiyon)</p>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between text-xs text-stone-400">
                        <span>Günlük ihtiyaç ({DAILY_KCAL} kcal)</span>
                        <span className="font-bold text-brand-700">%{percent}</span>
                    </div>
                    <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-stone-100">
                        <motion.div
                            animate={{ width: `${percent}%` }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                        />
                    </div>
                </div>
                <p className="mt-4 text-center text-xs text-stone-400">
                    Seçtikleriniz cihazınızda saklanır, hiçbir yere gönderilmez.
                </p>
            </div>
        </div>
    );
}