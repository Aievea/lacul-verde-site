import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laculverde.com"),
  title: "Lacul Verde Sâncraiu de Mureș | Pescuit Sportiv",
  description: "Se adresează exclusiv pescarilor pasionați și cu bun simț!",
  openGraph: {
    siteName: "Lacul Verde Sâncraiu de Mureș",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "rZxHMPDfmhcE7HX4_-AXHeSjgPgbr2chf3CMFtRhedo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lacul Verde Sâncraiu de Mureș",
  description: "Lac de pescuit sportiv în Sâncraiu de Mureș la 3 km de Târgu Mureș",
  url: "https://www.laculverde.com",
  telephone: "+40744523284",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Principala 199 B",
    addressLocality: "Sâncraiu de Mureș",
    addressRegion: "Mureș",
    addressCountry: "RO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.544015,
    longitude: 24.517271,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${manrope.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
