export const metadata = {
  title: "Yazılım Hizmetleri",
  description:
    "Web uygulamaları, mobil uygulamalar, masaüstü yazılımlar, REST API ve SDK geliştirme. Donanımla entegre veya bağımsız kurumsal yazılım projeleri.",
  openGraph: {
    title: "Yazılım Hizmetleri | AVES Elektronik",
    description:
      "Web uygulamaları, mobil uygulamalar, masaüstü yazılımlar, REST API ve SDK geliştirme. Donanımla entegre veya bağımsız kurumsal yazılım projeleri.",
    images: [{ url: "/images/aves-logo-square.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yazılım Hizmetleri | AVES Elektronik",
    description:
      "Web uygulamaları, mobil uygulamalar, masaüstü yazılımlar, REST API ve SDK geliştirme. Donanımla entegre veya bağımsız kurumsal yazılım projeleri.",
    images: ["/images/aves-logo-square.jpg"],
  },
  alternates: {
    canonical: "https://www.aveselektronik.com/software",
  },
};

export default function Layout({ children }) {
  return children;
}
