"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Arka plan gradyanı — altın-bej tonları */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-stone-50 to-brand-100/60" />

            <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
                {/* Sol taraf - Metin */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">
                            <Flame size={14} /> Günlük Taze Menü
                        </span>
                        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                            Lezzetin
                            <span className="text-brand-700"> Sahnesi</span>,
                            <br />
                            <span className="text-brand-700">Şahhane</span> Sofra
                        </h1>
                        <p className="mt-4 max-w-md text-base text-stone-600 sm:text-lg">
                            Geleneksel tarifler, taze malzemeler ve şeffaf kalori bilgileriyle.
                            Yemeklerimize dokun, içeriğini gör!
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                            <Link
                                href="/menu"
                                className="button-press inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-black shadow-lg shadow-brand-600/25 hover:bg-brand-500"
                            >
                                Menüyü Keşfet <ArrowRight size={18} />
                            </Link>
                            <span className="inline-flex items-center gap-1.5 text-sm text-stone-500">
                                <Clock size={16} /> Her gün 08:00 - 01:00 açık
                            </span>
                        </div>
                    </motion.div>
                </div>

                {/* Sağ taraf - Fotoğraf */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-2xl"
                >
                    {/* Fotoğraf + yüklenmeden önceki yumuşak zemin */}
                    <div className="relative h-full w-full bg-gradient-to-br from-brand-200 to-brand-400">
                        <Image
                            src="/images/elibogrunde.png"
                            alt="Şahhane Sofra özel yemeği"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Küçük yüzen kalori kartı */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-2 shadow-lg backdrop-blur"
                    >
                        <p className="text-xs text-stone-500">Şahhane Special</p>
                        <p className="text-sm font-bold text-brand-700">480 kcal</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}