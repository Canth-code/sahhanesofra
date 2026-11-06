import { MapPin, Phone, Share2, Star, UtensilsCrossed } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-brand-600/30 bg-black text-stone-300">
            <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 md:grid-cols-4">
                {/* Marka */}
                <div>
                    <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-black">
                            <UtensilsCrossed size={18} />
                        </span>
                        <span className="text-lg font-bold text-white">Şahhane Sofra</span>
                    </div>
                    <p className="mt-3 text-sm text-stone-400">
                        Geleneksel lezzetler, modern sunum.
                    </p>
                </div>

                {/* İletişim */}
                <div className="space-y-2 text-sm">
                    <p className="font-semibold text-white">İletişim</p>
                    <a
                        href="tel:+903642250551"
                        className="flex items-center gap-2 hover:text-brand-400"
                    >
                        <Phone size={16} /> 0 (364) 225 05 51
                    </a>
                    <p className="text-stone-400">Her gün 08:00 - 01:00</p>
                </div>

                {/* Konum */}
                <div className="space-y-2 text-sm">
                    <p className="font-semibold text-white">Konum</p>
                    <a
                        href="https://maps.app.goo.gl/U5iC3hSCVGTPM1gG9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-fit items-center gap-2 hover:text-brand-400"
                    >
                        <MapPin size={16} /> Haritada Göster
                    </a>
                    <p className="text-stone-400">
                        Üçtutlar, Dr. İlhan Gürel Cd. 12/c, Çorum Merkez
                    </p>
                </div>

                {/* Sosyal + Değerlendirme */}
                <div className="space-y-2 text-sm">
                    <p className="font-semibold text-white">Bizi Takip Edin</p>
                    <a
                        href="https://instagram.com/sahhanesofra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-fit items-center gap-2 hover:text-brand-400"
                    >
                        <Share2 size={16} /> @sahhanesofra
                    </a>
                    <a
                        href="https://search.google.com/local/writereview?placeid=ChIJgUW3sHQrh0ARriN2GEdvjBY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-fit items-center gap-2 hover:text-brand-400"
                    >
                        <Star size={16} /> Google'da Değerlendir
                    </a>
                </div>
            </div>

            <div className="border-t border-brand-600/20 py-4 text-center text-xs text-stone-500">
                © 2026 Şahhane Sofra. Tüm hakları saklıdır. •{" "}
                <a
                    href="/kvkk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-400"
                >
                    KVKK Aydınlatma Metni
                </a>
            </div>
        </footer>
    );
}