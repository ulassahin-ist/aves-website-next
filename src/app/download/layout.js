export const metadata = {
  title: "Download",
  description: "RC serisi yazılımları, datasheetler ve teknik dökümanlar. RC210, RC264, RCP8, C4128 için yazılım ve PDF indirme.",
  openGraph: {
    title: "Download | AVES Elektronik",
    description: "RC serisi yazılımları, datasheetler ve teknik dökümanlar. RC210, RC264, RCP8, C4128 için yazılım ve PDF indirme.",
    images: [{ url: "/images/aves-logo-square.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download | AVES Elektronik",
    description: "RC serisi yazılımları, datasheetler ve teknik dökümanlar. RC210, RC264, RCP8, C4128 için yazılım ve PDF indirme.",
    images: ["/images/aves-logo-square.jpg"],
  },
  alternates: {
    canonical: "https://www.aveselektronik.com/download",
  },
};

export default function Layout({ children }) {
  return children;
}
