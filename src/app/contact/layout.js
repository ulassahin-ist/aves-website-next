export const metadata = {
  title: "İletişim",
  description: "AVES Elektronik ile iletişime geçin. Teknik destek, teklif ve genel sorularınız için +90 212 261 76 52 veya info@aveselektronik.com",
  openGraph: {
    title: "İletişim | AVES Elektronik",
    description: "AVES Elektronik ile iletişime geçin. Teknik destek, teklif ve genel sorularınız için +90 212 261 76 52 veya info@aveselektronik.com",
    images: [{ url: "/images/aves-logo-square.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | AVES Elektronik",
    description: "AVES Elektronik ile iletişime geçin. Teknik destek, teklif ve genel sorularınız için +90 212 261 76 52 veya info@aveselektronik.com",
    images: ["/images/aves-logo-square.jpg"],
  },
  alternates: {
    canonical: "https://www.aveselektronik.com/contact",
  },
};

export default function Layout({ children }) {
  return children;
}
