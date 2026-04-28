export const metadata = {
  title: "Referanslar",
  description: "2500den fazla başarılı kurulum. BTK, Milli Saraylar, Darphane ve 20den fazla üniversite dahil referanslarımız.",
  openGraph: {
    title: "Referanslar | AVES Elektronik",
    description: "2500den fazla başarılı kurulum. BTK, Milli Saraylar, Darphane ve 20den fazla üniversite dahil referanslarımız.",
    images: [{ url: "/images/aves-logo-square.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Referanslar | AVES Elektronik",
    description: "2500den fazla başarılı kurulum. BTK, Milli Saraylar, Darphane ve 20den fazla üniversite dahil referanslarımız.",
    images: ["/images/aves-logo-square.jpg"],
  },
  alternates: {
    canonical: "https://www.aveselektronik.com/references",
  },
};

export default function Layout({ children }) {
  return children;
}
