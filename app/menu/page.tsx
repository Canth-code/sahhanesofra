import MenuClient from "@/components/MenuClient";

export default function MenuPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Menümüz<span className="text-orange-600">.</span>
                </h1>
                <p className="mt-3 text-stone-500">
                    Kategoriye göre filtreleyin, karta dokunun ve yemeğin hikayesini görün
                </p>
            </div>
            <MenuClient />
        </div>
    );
}