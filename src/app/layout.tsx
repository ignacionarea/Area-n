import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
    google: "kHafzmOPiBZ_gjLmXDcmGFqmrK-s0oeS3h8eYKtDK6o",
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
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NFB35TK8');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NFB35TK8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
