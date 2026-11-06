import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Şahhane Sofra | Geleneksel Lezzetler",
    description: "Şahhane Sofra - El yapımı geleneksel Türk mutfağı, kalori bilgileri ve günlük menüler.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="tr">
        <body className={`${geistSans.variable} ${geistMono.variable} bg-stone-50 text-stone-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}