// src/app/layout.jsx
import "@/css/global.css";
import "@/css/information.css";
import "@/css/contact.css";
import "@/css/index.css";
import "@/css/software.css";
import "@/css/about.css";
import "@/css/references.css";
import "@/css/products.css";
import "@/css/productPages.css";
import "@/css/download.css";
import "@fontsource/inter";
import Layout from "@/components/Layout";
import "@fontsource/inter";
export const metadata = {
  metadataBase: new URL("https://www.aveselektronik.com"),
  title: {
    default: "AVES Elektronik | Geçiş ve Kredi Kontrol Üreticisi",
    template: "%s | AVES Elektronik",
  },
  description:
    "1996'dan beri yerli geçiş kontrol, kredi kontrol ve yazılım geliştirme çözümleri. POE kart okuyucular, kontrol panelleri, Android terminaller ve SDK desteği.",
  keywords: [
    "geçiş kontrol",
    "kart okuyucu",
    "RFID",
    "mifare",
    "POE kart okuyucu",
    "RC210",
    "RC264",
    "RCP8",
    "bekçi tur kontrol",
    "kartlı geçiş sistemi",
    "yerli üretim",
    "AVES Elektronik",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  authors: [{ name: "AVES Elektronik" }],
  creator: "AVES Elektronik",
  publisher: "AVES Elektronik",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.aveselektronik.com",
    siteName: "AVES Elektronik",
    title: "AVES Elektronik | Geçiş ve Kredi Kontrol Üreticisi",
    description:
      "1996'dan beri yerli geçiş kontrol, kredi kontrol ve yazılım geliştirme çözümleri.",
    images: [
      {
        url: "/images/aves-logo-square.jpg",
        width: 1200,
        height: 630,
        alt: "AVES Elektronik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVES Elektronik | Geçiş ve Kredi Kontrol Üreticisi",
    description:
      "1996'dan beri yerli geçiş kontrol, kredi kontrol ve yazılım geliştirme çözümleri.",
    images: ["/images/aves-logo-square.jpg"],
  },
  alternates: {
    canonical: "https://www.aveselektronik.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e1e37",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://static.elfsight.com/platform/platform.js" async />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
