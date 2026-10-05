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
      "Area N | Viviendas eficientes e inteligentes | Arquitectura y Domótica",
    template: "%s | Area N",
  },
  description:
    "Área N diseña, automatiza, reforma y moderniza viviendas para que gastes menos energía, no sufras el clima y vivas con el confort que te merecés.",
  keywords: seoKeywords,
  applicationName: "Area N",
  authors: [{ name: "Area N" }],
  creator: "Area N",
  publisher: "Area N",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Area N | Viviendas eficientes e inteligentes",
    description:
      "Diseño, automatización, retrofit y modernización de viviendas con criterio eléctrico y arquitectónico profesional.",
    url: siteConfig.url,
    siteName: "Area N",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/smart-home-living-room.png",
        width: 1792,
        height: 1024,
        alt: "Living moderno con iluminación inteligente y control domótico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Area N | Viviendas eficientes e inteligentes",
    description:
      "Diseño, automatización, retrofit y modernización de viviendas con criterio eléctrico profesional.",
    images: ["/images/smart-home-living-room.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "kHafzmOPiBZ_gjLmXDcmGFqmrK-s0oeS3h8",
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
