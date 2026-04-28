// ============================================================
// DROP THESE metadata exports into the TOP of each page file
// (above the "use client" directive is not allowed — put them
//  in a separate metadata file or use generateMetadata)
//
// For "use client" pages, create a companion layout.js or
// use the pattern below: split into a server wrapper + client component.
//
// RECOMMENDED PATTERN for each product page:
// ============================================================

// FILE: src/app/products/rc210/page.jsx  — add at top before "use client":
//
// This won't work directly because "use client" blocks server exports.
// SOLUTION: Create a metadata.js next to each page.jsx
//
// src/app/products/rc210/opengraph-image.js  (optional og image)
// src/app/products/rc210/layout.js           <-- put metadata here

// ============================================================
// src/app/products/rc210/layout.js
// ============================================================
// export const metadata = {
//   title: "RC210 Akıllı POE Kart Okuyucu",
//   description: "Ekransız, kompakt POE kart okuyucu. 262.144 kart kapasitesi, Anti-Passback, IEEE 802.3af. Kurumsal geçiş kontrol çözümü.",
// };
// export default function Layout({ children }) { return children; }

// ============================================================
// All per-route layout.js metadata files are listed below
// Create each file at the path shown
// ============================================================

const PAGE_METADATA = {
  "src/app/products/rc210/layout.js": {
    title: "RC210 Akıllı POE Kart Okuyucu",
    description:
      "Ekransız, kompakt POE kart okuyucu. 262.144 kart kapasitesi, Anti-Passback, IEEE 802.3af. Kurumsal geçiş kontrol çözümü.",
    image: "/images/ekransiz-poe-kart-okuyucu.png",
  },
  "src/app/products/rc264/layout.js": {
    title: "RC264 Akıllı POE Kart Okuyucu",
    description:
      "OLED ekranlı, 16 tuşlu, çift RS232 portlu POE kart okuyucu. 262.144 kart kapasitesi, Anti-Passback. Puantaj ve geçiş kontrol çözümü.",
    image: "/images/ekranli-poe-kart-okuyucu.png",
  },
  "src/app/products/rcp8/layout.js": {
    title: "RCP8 Geçiş Kontrol Paneli",
    description:
      "8 okuyucu destekli merkezi kontrol paneli. 10 dijital giriş, 10 röle çıkışı, Anti-Passback ve Ethernet bağlantısı.",
    image: "/images/kart-kotrol-paneli.png",
  },
  "src/app/products/rc1/layout.js": {
    title: "RC1 Panel Tipi Kart Okuyucu",
    description:
      "RCP8 kontrol paneli ile çalışan RS485 bağlantılı okuyucu. IP67 korumalı, Anti-Passback destekli.",
    image: "/images/panel-tipi-kart-okuyucu.png",
  },
  "src/app/products/rc1s/layout.js": {
    title: "RC1s Standalone Kart Okuyucu",
    description:
      "Yazılım gerektirmeyen, IP67 korumalı, 5.840 kart kapasiteli bağımsız kart okuyucu.",
    image: "/images/panel-tipi-kart-okuyucu.png",
  },
  "src/app/products/rc206/layout.js": {
    title: "RC206 USB Kart Okuyucu",
    description:
      "OLED ekranlı, USB 2.0 bağlantılı offline kart okuyucu. Oyun makineleri, müşteri sadakat ve kredi sistemleri için.",
    image: "/images/usb-kart-okuyucu_.png",
  },
  "src/app/products/android/layout.js": {
    title: "Android El Terminali",
    description:
      "NFC özellikli Android platformu üzerinde geçiş kontrol ve harcama yazılımları. RC sistemi entegrasyonu.",
    image: "/images/android-kart-okuyucu_.png",
  },
  "src/app/products/c4128/layout.js": {
    title: "C4128 Bekçi Tur Kontrol Sistemi",
    description:
      "Li-Ion pilli, IP67 korumalı, 8.190 kayıt kapasiteli Proximity bekçi tur kontrol cihazı.",
    image: "/images/bekci-tur-okuyucu.png",
  },
  "src/app/about/layout.js": {
    title: "Hakkımızda",
    description:
      "1996'dan beri yerli mühendislik, yerli üretim. RFID teknolojisi alanında Türkiye'nin öncü üreticisi. 2500+ referans, 30 yıllık tecrübe.",
    image: "/images/aves-logo-square.jpg",
  },
  "src/app/contact/layout.js": {
    title: "İletişim",
    description:
      "AVES Elektronik ile iletişime geçin. Teknik destek, teklif ve genel sorularınız için +90 212 261 76 52 veya info@aveselektronik.com",
    image: "/images/aves-logo-square.jpg",
  },
  "src/app/references/layout.js": {
    title: "Referanslar",
    description:
      "2500'den fazla başarılı kurulum. BTK, Milli Saraylar, Darphane ve 20'den fazla üniversite dahil referanslarımız.",
    image: "/images/aves-logo-square.jpg",
  },
  "src/app/software/layout.js": {
    title: "Yazılım Hizmetleri",
    description:
      "Web uygulamaları, mobil uygulamalar, masaüstü yazılımlar, REST API ve SDK geliştirme. Donanımla entegre veya bağımsız kurumsal yazılım projeleri.",
    image: "/images/aves-logo-square.jpg",
  },
  "src/app/download/layout.js": {
    title: "Download",
    description:
      "RC serisi yazılımları, datasheetler ve teknik dökümanlar. RC210, RC264, RCP8, C4128 için yazılım ve PDF indirme.",
    image: "/images/aves-logo-square.jpg",
  },
  "src/app/products/layout.js": {
    title: "Ürünler",
    description:
      "POE kart okuyucular, kontrol panelleri, standalone okuyucular, Android terminaller ve bekçi tur kontrol sistemleri. Yerli üretim donanım kataloğu.",
    image: "/images/aves-logo-square.jpg",
  },
};

export default PAGE_METADATA;
