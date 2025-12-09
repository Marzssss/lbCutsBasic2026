import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LB Cuts | Premium Barbering in Fishtown",
    template: "%s | LB Cuts",
  },
  description: "Experience premium grooming at LB Cuts. Precision fades, classic cuts, hot towel shaves. Located in Fishtown, Philadelphia.",
  keywords: ["barbershop", "Philadelphia", "luxury grooming", "men's style", "tailored hair", "Fishtown barber"],
  openGraph: {
    title: `${siteConfig.businessName} - Luxury Grooming`,
    description: "Experience the art of precision grooming at LB Cuts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${playfair.variable}`}>
      <body className="bg-[var(--bg-0)] text-white antialiased selection:bg-white/20 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
