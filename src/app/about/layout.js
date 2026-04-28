export const metadata = {
  title: "Hakkımızda",
  description: "1996dan beri yerli mühendislik, yerli üretim. RFID teknolojisi alanında Türkiyenin öncü üreticisi. 2500+ referans, 30 yıllık tecrübe.",
  openGraph: {
    title: "Hakkımızda | AVES Elektronik",
    description: "1996dan beri yerli mühendislik, yerli üretim. RFID teknolojisi alanında Türkiyenin öncü üreticisi. 2500+ referans, 30 yıllık tecrübe.",
    images: [{ url: "/images/aves-logo-square.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hakkımızda | AVES Elektronik",
    description: "1996dan beri yerli mühendislik, yerli üretim. RFID teknolojisi alanında Türkiyenin öncü üreticisi. 2500+ referans, 30 yıllık tecrübe.",
    images: ["/images/aves-logo-square.jpg"],
  },
  alternates: {
    canonical: "https://www.aveselektronik.com/about",
  },
};

export default function Layout({ children }) {
  return children;
}
