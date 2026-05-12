import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seoKeywords, siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Area N | Domotica residencial, iluminacion inteligente y seguridad en CABA y GBA",
    template: "%s | Area N",
  },
  description:
    "Area N disena e instala domotica para hogares en CABA y GBA: iluminacion inteligente, seguridad, climatizacion, escenas, sensores y automatizacion electrica profesional.",
  keywords: seoKeywords,
  applicationName: "Area N",
  authors: [{ name: "Area N" }],
  creator: "Area N",
  publisher: "Area N",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Area N | Domotica para hogares en CABA y GBA",
    description:
      "Automatizacion del hogar con criterio electrico profesional. Luces, seguridad, climatizacion, escenas y control desde el celular.",
    url: siteConfig.url,
    siteName: "Area N",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/smart-home-living-room.png",
        width: 1792,
        height: 1024,
        alt: "Living moderno con iluminacion inteligente y control domotico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Area N | Domotica para hogares en CABA y GBA",
    description:
      "Automatizacion del hogar, iluminacion inteligente y seguridad residencial.",
    images: ["/images/smart-home-living-room.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
