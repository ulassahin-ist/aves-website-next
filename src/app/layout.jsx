"use client";
import "../css/global.css";
import "../css/information.css";
import "../css/contact.css";
import "../css/index.css";
import "../css/software.css";
import "../css/font-awesome.css";
import Layout from "../components/Layout";

export const metadata = {
  title: "AVES Elektronik | Geçiş ve Kredi Kontrol Üreticisi",
  description: "1996'dan beri yerli geçiş ve kredi sistemi çözümleri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/images/aves-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://static.elfsight.com/platform/platform.js" async />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
