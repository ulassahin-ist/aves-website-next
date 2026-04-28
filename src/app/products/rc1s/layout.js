export const metadata = {
  title: "RC1s Standalone Kart Okuyucu",
  description: "Yazılım gerektirmeyen, IP67 korumalı, 5.840 kart kapasiteli bağımsız kart okuyucu. Anti-Passback destekli.",
  openGraph: {
    title: "RC1s Standalone Kart Okuyucu | AVES Elektronik",
    description: "Yazılım gerektirmeyen, IP67 korumalı, 5.840 kart kapasiteli bağımsız kart okuyucu. Anti-Passback destekli.",
    images: [{ url: "/images/panel-tipi-kart-okuyucu.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RC1s Standalone Kart Okuyucu | AVES Elektronik",
    description: "Yazılım gerektirmeyen, IP67 korumalı, 5.840 kart kapasiteli bağımsız kart okuyucu. Anti-Passback destekli.",
    images: ["/images/panel-tipi-kart-okuyucu.png"],
  },
  alternates: {
    canonical: "https://www.aveselektronik.com/products/rc1s",
  },
};

export default function Layout({ children }) {
  return children;
}
