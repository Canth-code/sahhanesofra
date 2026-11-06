"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Flame, X, Leaf, ZoomIn } from "lucide-react";
import { dishes, type Dish } from "@/lib/data";
import FoodCard from "@/components/FoodCard";
import { usePlate } from "@/lib/store";
import { PlusCircle } from "lucide-react";


const categories = ["Tümü", "Çorba", "Ana Yemek", "Özel", "Tepsi", "Pide", "Salata", "Tatlı", "İçecek"] as const;

export default function MenuClient() {
    const addToPlate = usePlate((state) => state.add);
    const [category, setCategory] = useState<string>("Tümü");
    const [selected, setSelected] = useState<Dish | null>(null);
    const [zoom, setZoom] = useState(false);
    const filtered =
        category === "Tümü" ? dishes : dishes.filter((d) => d.category === category);

// ---- Modal / Zoom geçmiş yönetimi ----
    useEffect(() => {
        const onPopState = () => {
            if (zoom) setZoom(false);
            else if (selected) setSelected(null);
        };
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, [zoom, selected]);

    const openDetail = (dish: Dish) => {
        setSelected(dish);
        window.history.pushState({ layer: "detail" }, "");
    };

    const closeDetail = () => {
        if (window.history.state?.layer === "detail") {
            window.history.back();
        } else {
            setSelected(null);
        }
    };

    const openZoom = () => {
        setZoom(true);
        window.history.pushState({ layer: "zoom" }, "");
    };

    const closeZoom = () => {
        if (window.history.state?.layer === "zoom") {
            window.history.back();
        } else {
            setZoom(false);
        }
    };

    return (
        <div className="mt-8">
            {/* Kategori filtreleri — mobilde kaydırılabilir */}
            <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`button-press whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                            category === cat
                                ? "bg-brand-600 text-white shadow-md shadow-brand-600/25"
                                : "bg-white text-stone-600 ring-1 ring-stone-200 hover:bg-brand-50"
                        }}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Kartlar — yatay slider */}
            <div className="slider-container mt-6">
                {filtered.map((dish) => (
                    <motion.div
                        key={dish.id}
                        onClick={() => openDetail(dish)}
                        className="slider-card"
                        whileTap={{ scale: 0.98 }}
                    >
                        <FoodCard dish={dish} flippable={false} />
                    </motion.div>
                ))}
            </div>

            {/* Detay Modal'ı */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm sm:items-center sm:p-4"
                        onClick={closeDetail}
                    >
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl"
                        >
                            {/* Tam ekran fotoğraf görüntüleyici */}
                            <AnimatePresence>
                                {zoom && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95"
                                        onClick={closeZoom}
                                    >
                                        <motion.div
                                            initial={{ scale: 0.9 }}
                                            animate={{ scale: 1 }}
                                            className="relative h-[90vh] w-full max-w-3xl"
                                        >
                                            <Image
                                                src={selected.image}
                                                alt={selected.name}
                                                fill
                                                className="object-contain"
                                                priority
                                            />
                                        </motion.div>
                                        <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-white/70">
                                            Kapatmak için ekrana dokunun
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Kapat butonu */}
                            <button
                                onClick={closeDetail}
                                className="button-press absolute right-4 top-4 z-10 rounded-full bg-stone-100 p-2 text-stone-500 hover:bg-stone-200"
                                aria-label="Kapat"
                            >
                                <X size={18} />
                            </button>

                            {/* Yemek fotoğrafı + Tam Boy butonu */}
                            <div className="relative mb-4 h-56 w-full overflow-hidden rounded-2xl">
                                <Image
                                    src={selected.image}
                                    alt={selected.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 512px"
                                />
                                <button
                                    onClick={openZoom}
                                    className="button-press absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-stone-700 shadow-md backdrop-blur"
                                >
                                    <ZoomIn size={14} /> Tam Boy
                                </button>
                            </div>

                            <h2 className="pr-10 text-2xl font-bold">{selected.name}</h2>
                            <p className="mt-1 text-sm text-stone-500">{selected.description}</p>

                            {/* Kalori barı */}
                            <div className="mt-5">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="flex items-center gap-1.5 font-semibold text-brand-600">
                                        <Flame size={16} /> {selected.calories} kcal
                                    </span>
                                    <span className="text-stone-400">
                                        Günlük ihtiyacın %{Math.round((selected.calories / 2000) * 100)}&apos;i
                                    </span>
                                </div>
                                <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-stone-100">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{
                                            width: `${Math.min((selected.calories / 2000) * 100, 100)}%`,
                                        }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-600"
                                    />
                                </div>
                            </div>
                            {/* Besin değerleri */}
                            <div className="mt-4 grid grid-cols-3 divide-x divide-stone-100 rounded-2xl bg-stone-50 py-3 text-center ring-1 ring-stone-100">
                                <div>
                                    <p className="text-xs text-stone-400">Protein</p>
                                    <p className="font-bold text-stone-800">{selected.protein} g</p>
                                </div>
                                <div>
                                    <p className="text-xs text-stone-400">Karb.</p>
                                    <p className="font-bold text-stone-800">{selected.carbs} g</p>
                                </div>
                                <div>
                                    <p className="text-xs text-stone-400">Yağ</p>
                                    <p className="font-bold text-stone-800">{selected.fat} g</p>
                                </div>
                            </div>

                            {/* Malzemeler */}
                            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-stone-400">
                                İçindekiler
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {selected.ingredients.map((ing, i) => (
                                    <motion.span
                                        key={ing}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                        className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-sm text-brand-800 ring-1 ring-brand-100"
                                    >
                                        <Leaf size={13} /> {ing}
                                    </motion.span>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center justify-between rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-100">
                                <span className="text-2xl font-extrabold text-brand-700">{selected.price}₺</span>
                                <button
                                    onClick={() => {
                                        addToPlate(selected);
                                        closeDetail();
                                    }}
                                    className="button-press inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 font-semibold text-black shadow-lg shadow-brand-600/25 hover:bg-brand-500"
                                >
                                    <PlusCircle size={18} /> Tabağıma Ekle
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}