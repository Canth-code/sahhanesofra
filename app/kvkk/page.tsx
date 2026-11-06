export const metadata = {
    title: "KVKK Aydınlatma Metni | Şahhane Sofra",
    description: "Şahhane Sofra kişisel verilerinizin korunması hakkındaki politikaları.",
};

export default function KVKKPage() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                KVKK <span className="text-brand-600">Aydınlatma Metni</span>
            </h1>
            <p className="mt-4 text-stone-600">
                <strong>Son güncelleme:</strong> 27 Ekim 2026
            </p>

            <section className="mt-8 space-y-4 text-stone-700">
                <h2 className="text-xl font-bold">1. Veri Sorumlusu</h2>
                <p>
                    Şahhane Sofra (bundan böyle "Biz" olarak anılacaktır), Üçtutlar, Dr. İlhan Gürel Cd. 12/c, Çorum Merkez adresinde faaliyet gösteren işletmemiz olarak, kişisel veri işleme faaliyetlerimizde veri sorumlusudur.
                </p>

                <h2 className="text-xl font-bold">2. Hangi Verileri İşliyoruz?</h2>
                <p>Rezervasyon formumuz üzerinden yalnızca aşağıdaki verileri topluyoruz:</p>
                <ul className="list-inside list-disc space-y-1 pl-4">
                    <li>Ad Soyad</li>
                    <li>Telefon Numarası</li>
                    <li>Rezervasyon tarihi, saati ve kişi sayısı</li>
                    <li>Özel talepler (isteğe bağlı)</li>
                </ul>

                <h2 className="text-xl font-bold">3. Amaç</h2>
                <p>
                    Bu veriler, yalnızca rezervasyon talebinizi yanıtlamak, size dönüş yapmak ve masa yerinizi ayırtmak amacıyla işlenmektedir.
                </p>

                <h2 className="text-xl font-bold">4. Veri Paylaşımı</h2>
                <p>
                    Kişisel verileriniz hiçbir şekilde üçüncü kişilerle paylaşılmaz, satılmaz veya reklam amaçlı kullanılmaz.
                </p>

                <h2 className="text-xl font-bold">5. Haklarınız</h2>
                <p>
                    6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, düzeltilmesini isteme veya silinmesini talep etme haklarına sahipsiniz.
                </p>
                <p className="font-medium">
                    İletişim: 0 (533) 630 46 19 veya [e-posta adresi]
                </p>

                <h2 className="text-xl font-bold">6. Değişiklik Hakkında</h2>
                <p>
                    Bu metin zaman içinde güncellenebilir. En son versiyon sitemizde yayınlanacaktır.
                </p>
            </section>
        </div>
    );
}