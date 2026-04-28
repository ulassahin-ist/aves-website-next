export const metadata = {
  title: "Android El Terminali",
  description: "NFC özellikli Android platformu üzerinde geçiş kontrol ve harcama yazılımları. RC sistemi ile tam entegrasyon.",
  openGraph: {
    title: "Android El Terminali | AVES Elektronik",
    description: "NFC özellikli Android platformu üzerinde geçiş kontrol ve harcama yazılımları. RC sistemi ile tam entegrasyon.",
    images: [{ url: "/images/android-kart-okuyucu_.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Android El Terminali | AVES Elektronik",
    description: "NFC özellikli Android platformu üzerinde geçiş kontrol ve harcama yazılımları. RC sistemi ile tam entegrasyon.",
    images: ["/images/android-kart-okuyucu_.png"],
  },
  alternates: {
    canonical: "https://www.aveselektronik.com/products/android",
  },
};

export default function Layout({ children }) {
  return children;
}
