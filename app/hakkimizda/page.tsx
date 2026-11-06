import Image from "next/image";
import { ChefHat, Heart, Clock, MapPin } from "lucide-react";

export const metadata = {
    title: "Hakkımızda | Şahhane Sofra",
    description: "Şahhane Sofra'nın hikayesi ve değerleri.",
};

const values = [
    {
        icon: ChefHat,
        title: "El Yapımı Lezzetler",
        text: "Tüm yemeklerimiz günlük taze malzemelerle, ustalarımızın elinde hazırlanır.",
    },
    {
        icon: Heart,
        title: "Misafirperverlik",
        text: "Bizim için sofraya oturan herkes misafirimiz, değil müşterimiz.",
    },
    {
        icon: Clock,
        title: "Hızlı Servis",
        text: "Siparişiniz ortalama 15 dakika içinde sıcacık elinize ulaşır.",
    },
];

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Soframızın <span className="text-orange-600">Hikayesi</span>
                    </h1>
                    <p className="mt-4 leading-relaxed text-stone-600">
                        Şahhane Sofra, anneannelerimizin mutfağından gelen tarifleri modern
                        bir anlayışla sofranıza taşıyor. Amacımız basit: her lokmada
                        evinizde hissetmeniz. Bu yüzden malzemelerimizi yerel üreticilerden
                        seçiyor, hiçbir yemeğimizde katkı maddesi kullanmıyoruz.
                    </p>
                    <p className="mt-3 leading-relaxed text-stone-600">
                        Menümüzde her yemeğin kalorisini ve içindeki her malzemeyi şeffafça
                        paylaşıyoruz — çünkü ne yediğinizi bilme hakkınız olduğuna
                        inanıyoruz.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-6 text-sm text-stone-500">
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-orange-500" /> Her gün 08:00 - 01:00
            </span>
                        <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-orange-500" /> Üçtutlar, Dr. İlhan Gürel Cd. 12/c, Çorum Merkez
            </span>
                    </div>
                </div>

                <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                        src="/images/elibogrunde.jpg"
                        alt="Şahhane Sofra mutfağı"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 448px"
                        priority
                    />
                </div>
            </div>

            {/* Değerler */}
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
                {values.map((v) => (
                    <div
                        key={v.title}
                        className="rounded-2xl bg-white p-6 ring-1 ring-stone-100"
                    >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <v.icon size={24} />
            </span>
                        <h3 className="mt-4 font-bold">{v.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-stone-500">{v.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}