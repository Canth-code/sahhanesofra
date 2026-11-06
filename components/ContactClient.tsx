"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, CheckCircle2, Send } from "lucide-react";

export default function ContactClient() {
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        note: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Rezervasyon WhatsApp numarası: 0533 630 46 19
        const restaurantPhone = "905336304619";

        // Mesajı düz metin olarak oluştur (\n = satır atla)
        const message =
            `🍽️ *Rezervasyon Talebi*\n\n` +
            `👤 Ad Soyad: ${form.name}\n` +
            `📞 Telefon: ${form.phone}\n` +
            `📅 Tarih: ${form.date}\n` +
            `⏰ Saat: ${form.time}\n` +
            `👥 Kişi Sayısı: ${form.guests}\n` +
            `📝 Not: ${form.note || "-"}`;

        // encodeURIComponent: Türkçe karakter + emoji + boşlukları güvenli şekilde kodlar
        const whatsappUrl = `https://wa.me/${restaurantPhone}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");

        setSent(true);
    };

    return (
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_280px]">
            {/* Form */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-100 sm:p-8">
                <AnimatePresence mode="wait">
                    {sent ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center py-12 text-center"
                        >
                            <CheckCircle2 size={56} className="text-green-500" />
                            <h2 className="mt-4 text-xl font-bold">Talebiniz alındı!</h2>
                            <p className="mt-2 max-w-sm text-stone-500">
                                Teşekkürler {form.name}. Rezervasyonunuzu telefonla onaylayacağız —
                                en geç 1 saat içinde sizi arayacağız.
                            </p>
                            <button
                                onClick={() => {
                                    setSent(false);
                                    setForm({ name: "", phone: "", date: "", time: "", guests: "2", note: "" });
                                }}
                                className="button-press mt-6 rounded-full bg-orange-600 px-6 py-2.5 font-semibold text-white shadow-lg shadow-orange-600/25"
                            >
                                Yeni rezervasyon
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-stone-700">
                                        Ad Soyad *
                                    </label>
                                    <input
                                        required
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Adınız Soyadınız"
                                        className="w-full rounded-xl border-stone-200 bg-stone-50 px-4 py-2.5 ring-1 outline-none transition focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-stone-700">
                                        Telefon *
                                    </label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="05XXXXXXXXX"
                                        className="w-full rounded-xl border-stone-200 bg-stone-50 px-4 py-2.5 ring-1 outline-none transition focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-stone-700">
                                        Tarih *
                                    </label>
                                    <input
                                        required
                                        type="date"
                                        name="date"
                                        value={form.date}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border-stone-200 bg-stone-50 px-4 py-2.5 ring-1 outline-none transition focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-stone-700">
                                        Saat *
                                    </label>
                                    <input
                                        required
                                        type="time"
                                        name="time"
                                        value={form.time}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border-stone-200 bg-stone-50 px-4 py-2.5 ring-1 outline-none transition focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1 block text-sm font-medium text-stone-700">
                                        Kişi *
                                    </label>
                                    <select
                                        name="guests"
                                        value={form.guests}
                                        onChange={handleChange}
                                        className="w-full rounded-xl border-stone-200 bg-stone-50 px-4 py-2.5 ring-1 outline-none transition focus:ring-2 focus:ring-orange-500"
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                                            <option key={n} value={n}>
                                                {n} kişi
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-stone-700">
                                    Not (isteğe bağlı)
                                </label>
                                <textarea
                                    name="note"
                                    value={form.note}
                                    onChange={handleChange}
                                    rows={3}
                                    placeholder="Örn: Doğum günü kutlaması, pencere kenarı istiyoruz..."
                                    className="w-full rounded-xl border-stone-200 bg-stone-50 px-4 py-2.5 ring-1 outline-none transition focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="button-press inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-600 py-3 font-semibold text-white shadow-lg shadow-orange-600/25 hover:bg-orange-700"
                            >
                                <Send size={18} /> Rezervasyon Talebi Gönder
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>

            {/* Yan bilgi kartı */}
            <div className="h-fit space-y-4">
                <div className="rounded-2xl bg-white p-6 ring-1 ring-stone-100">
                    <h3 className="font-bold">Direkt Ulaşın</h3>
                    <div className="mt-3 space-y-3 text-sm text-stone-600">
                        <p className="flex items-center gap-2">
                            <Phone size={16} className="text-orange-500" /> 0 (533) 630 46 19
                        </p>
                        <p className="flex items-center gap-2">
                            <MapPin size={16} className="text-orange-500" /> Üçtutlar, Dr. İlhan Gürel Cd. 12/c, Çorum Merkez
                        </p>
                    </div>
                </div>
                <div className="rounded-2xl bg-orange-600 p-6 text-white">
                    <h3 className="font-bold">Çalışma Saatleri</h3>
                    <div className="mt-3 space-y-1.5 text-sm text-orange-100">
                        <p className="flex justify-between">
                            <span>Hafta içi</span> <span>08:00 - 01:00</span>
                        </p>
                        <p className="flex justify-between">
                            <span>Hafta sonu</span> <span>09:00 - 01:00</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}