"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Leaf } from "lucide-react";
import type { Dish } from "@/lib/data";

interface FoodCardProps {
    dish: Dish;
    /** true → dokununca kart çevrilir (anasayfa vitrini)
     *  false → sadece ön yüz; tıklama üst bileşene bırakılır (menü sayfası) */
    flippable?: boolean;
}

export default function FoodCard({ dish, flippable = true }: FoodCardProps) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="h-96 [perspective:1200px]">
            <motion.div
                onClick={() => {
                    if (!flippable) return; // menüde çevirmeyi devre dışı bırak
                    setFlipped((prev) => !prev);
                }}
                animate={{ rotateY: flippable && flipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative h-full w-full cursor-pointer [transform-style:preserve-3d]"
            >
                {/* ÖN YÜZ - Fotoğraf */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl bg-white shadow-lg [backface-visibility:hidden]">
                    <div className="relative h-56 w-full bg-gradient-to-br from-brand-100 to-brand-300">
                        <Image
                            src={dish.image}
                            alt={dish.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>
                    <div className="flex flex-col p-4">
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="text-lg font-bold">{dish.name}</h3>
                            <span className="whitespace-nowrap font-bold text-brand-700">
                                {dish.price}₺
                            </span>
                        </div>
                        <p className="mt-1 line-clamp-2 text-sm text-stone-500">
                            {dish.description}
                        </p>
                        <div className="mt-3 flex items-center gap-3 text-xs text-stone-400">
                            <span className="inline-flex items-center gap-1">
                                <Flame size={14} className="text-brand-600" /> {dish.calories} kcal
                            </span>
                            <span className="ml-auto font-medium text-brand-700">
                                {flippable ? "Detay için çevir →" : "Detay için dokun →"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* ARKA YÜZ - Kalori + Malzemeler */}
                <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 p-5 text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div>
                        <h3 className="text-lg font-bold">{dish.name}</h3>
                        <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2">
                            <Flame size={18} />
                            <span className="font-semibold">{dish.calories} kcal</span>
                            <p className="mt-1 text-xs text-brand-100">
                                P: {dish.protein}g • K: {dish.carbs}g • Y: {dish.fat}g
                            </p>
                        </div>
                        <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-brand-100">
                            Malzemeler
                        </p>
                        <ul className="mt-2 space-y-1.5">
                            {dish.ingredients.map((ing) => (
                                <li key={ing} className="flex items-center gap-2 text-sm">
                                    <Leaf size={14} className="text-brand-200" /> {ing}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-center text-xs text-brand-200">
                        Geri dönmek için tekrar dokun
                    </p>
                </div>
            </motion.div>
        </div>
    );
}