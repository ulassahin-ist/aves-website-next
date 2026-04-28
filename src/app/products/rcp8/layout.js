export const metadata = {
  title: "RCP8 Geçiş Kontrol Paneli",
  description: "8 okuyucu destekli merkezi kontrol paneli. 10 dijital giriş, 10 röle çıkışı, Anti-Passback ve Ethernet bağlantısı.",
  openGraph: {
    title: "RCP8 Geçiş Kontrol Paneli | AVES Elektronik",
    description: "8 okuyucu destekli merkezi kontrol paneli. 10 dijital giriş, 10 röle çıkışı, Anti-Passback ve Ethernet bağlantısı.",
    images: [{ url: "/images/kart-kotrol-paneli.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RCP8 Geçiş Kontrol Paneli | AVES Elektronik",
    description: "8 okuyucu destekli merkezi kontrol paneli. 10 dijital giriş, 10 röle çıkışı, Anti-Passback ve Ethernet bağlantısı.",
    images: ["/images/kart-kotrol-paneli.png"],
  },
  alternates: {
    canonical: "https://www.aveselektronik.com/products/rcp8",
  },
};

export default function Layout({ children }) {
  return children;
}
