export const metadata = {
  title: "RC206 USB Kart Okuyucu",
  description:
    "OLED ekranlı, USB 2.0 bağlantılı offline kart okuyucu. Oyun makineleri, müşteri sadakat ve kredi sistemleri için SDK desteği.",
  openGraph: {
    title: "RC206 USB Kart Okuyucu | AVES Elektronik",
    description:
      "OLED ekranlı, USB 2.0 bağlantılı offline kart okuyucu. Oyun makineleri, müşteri sadakat ve kredi sistemleri için SDK desteği.",
    images: [
      { url: "/images/usb-kart-okuyucu_.png", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RC206 USB Kart Okuyucu | AVES Elektronik",
    description:
      "OLED ekranlı, USB 2.0 bağlantılı offline kart okuyucu. Oyun makineleri, müşteri sadakat ve kredi sistemleri için SDK desteği.",
    images: ["/images/usb-kart-okuyucu_.png"],
  },
  alternates: {
    canonical: "https://www.aveselektronik.com/products/rc206",
  },
};

export default function Layout({ children }) {
  return children;
}
