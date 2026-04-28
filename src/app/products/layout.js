export const metadata = {
  title: "Ürünler",
  description:
    "POE kart okuyucular, kontrol panelleri, standalone okuyucular, Android terminaller ve bekçi tur kontrol sistemleri. Yerli üretim donanım kataloğu.",
  openGraph: {
    title: "Ürünler | AVES Elektronik",
    description:
      "POE kart okuyucular, kontrol panelleri, standalone okuyucular, Android terminaller ve bekçi tur kontrol sistemleri. Yerli üretim donanım kataloğu.",
    images: [{ url: "/images/aves-logo-square.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ürünler | AVES Elektronik",
    description:
      "POE kart okuyucular, kontrol panelleri, standalone okuyucular, Android terminaller ve bekçi tur kontrol sistemleri. Yerli üretim donanım kataloğu.",
    images: ["/images/aves-logo-square.jpg"],
  },
  alternates: {
    canonical: "https://www.aveselektronik.com/products",
  },
};

export default function Layout({ children }) {
  return children;
}
