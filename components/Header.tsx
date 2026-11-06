"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { usePlate } from "@/lib/store";

const links = [
    { href: "/", label: "Anasayfa" },
    { href: "/menu", label: "Menü" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const plateCount = usePlate((state) => state.items.length);

    useEffect(() => setMounted(true), []);

    return (
        <header className="sticky top-0 z-50 border-b border-brand-600/30 bg-black/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-brand-500/60 sm:h-12 sm:w-12">
                        <Image
                            src="/logo.png"
                            alt="Şahhane Sofra Restoran"
                            width={96}
                            height={96}
                            className="h-full w-full object-cover"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop menü */}
                <nav className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-stone-300 transition-colors hover:text-brand-400"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Tabağım ikonu */}
                <Link
                    href="/tabagim"
                    className="button-press relative rounded-full bg-brand-600/15 p-2.5 text-brand-400 ring-1 ring-brand-600/40 hover:bg-brand-600/25"
                    aria-label="Tabağım"
                >
                    <UtensilsCrossed size={20} />
                    <AnimatePresence>
                        {mounted && plateCount > 0 && (
                            <motion.span
                                key={plateCount}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-500 px-1 text-xs font-bold text-black"
                            >
                                {plateCount}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </Link>

                {/* Mobil hamburger */}
                <button
                    onClick={() => setOpen(!open)}
                    className="button-press rounded-lg p-2 text-stone-300 hover:text-white md:hidden"
                    aria-label="Menüyü aç/kapat"
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobil açılır menü */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden border-t border-brand-600/30 bg-black md:hidden"
                    >
                        <div className="flex flex-col gap-1 px-4 py-3">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="rounded-lg px-3 py-2.5 text-base font-medium text-stone-300 hover:bg-brand-600/15 hover:text-brand-400"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}