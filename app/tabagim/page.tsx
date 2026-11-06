import PlateClient from "@/components/PlateClient";

export default function TabagimPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Tabağım<span className="text-brand-700">.</span>
            </h1>
            <p className="mt-2 text-stone-500">Seçtiklerinizi biriktirin, günlük kalori ihtiyacınızı görün.</p>
            <PlateClient />
        </div>
    );
}