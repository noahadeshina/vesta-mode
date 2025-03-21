import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
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
    title: {
        default: "Vésta Mode",
        template: "%s - Vésta Mode",
    },

    description: "Africa's Number One Clothing Brand.",
};

export default function StoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`bg-[#fff] pt-5 text-sm md:text-base lg:text-base ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Header />
                <main className="py-14">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
