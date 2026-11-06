import ContactClient from "@/components/ContactClient";

export const metadata = {
    title: "İletişim & Rezervasyon | Şahhane Sofra",
    description: "Rezervasyon yapın veya bizimle iletişime geçin.",
};

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                    Masa Ayırtın<span className="text-orange-600">.</span>
                </h1>
                <p className="mt-3 text-stone-500">
                    Formu doldurun, en kısa sürede dönüş yapalım
                </p>
            </div>
            <ContactClient />
        </div>
    );
}


<iframe
    src="https://www.google.com/maps/embed?pb=..."  // ← Google Maps'ten "Embed" al
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
/>