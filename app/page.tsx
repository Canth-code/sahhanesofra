import Hero from "@/components/Hero";
import FoodCard from "@/components/FoodCard";
import { dishes } from "@/lib/data";
import { Sparkles } from "lucide-react";

export default function Home() {
    return (
        <>
            <Hero />

            {/* Öne çıkan yemekler */}
            <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Öne Çıkan <span className="text-brand-600">Lezzetler</span>
                    </h2>
                    <p className="mt-2 flex items-center justify-center gap-1.5 text-stone-500">
                        <Sparkles size={16} className="text-brand-500" />
                        Karta dokunun, kalori ve malzemeleri görün
                    </p>
                </div>

                {/* Grid: mobil 1 kolon, tablet 2, laptop 3-4 */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {dishes
                        .filter((d) => d.featured)
                        .map((dish) => (
                            <FoodCard key={dish.id} dish={dish} />
                        ))}
                </div>
                <div className="mt-10 text-center">
                    <a
                        href="/menu"
                        className="button-press inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700"
                    >
                        Tüm Menüyü Gör →
                    </a>
                </div>
            </section>
        </>
    );
}