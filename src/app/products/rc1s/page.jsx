"use client";
import ProductPagePremium from "../../components/ProductPagePremium";

export const metadata = {
  title: "RC1s Standalone Kart Okuyucu",
  description:
    "Yazılım gerektirmeyen, IP67 korumalı, 5.840 kart kapasiteli bağımsız kart okuyucu. Anti-Passback, Mifare Classic 13.56 MHz.",
  openGraph: {
    title: "RC1s Standalone Kart Okuyucu | AVES Elektronik",
    description:
      "Yazılım gerektirmeyen, IP67 korumalı, 5.840 kart kapasiteli bağımsız kart okuyucu.",
    images: ["/images/panel-tipi-kart-okuyucu.png"],
  },
};

const iconPath = (d) => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
    <path
      d={d}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CHIPS = [
  { num: "5.840", label: "Kart kapasitesi" },
  { num: "IP67", label: "Koruma sınıfı" },
  { num: "12V DC", label: "Çalışma voltajı" },
];

const STATS = [
  { num: "5.840", label: "Kart kapasitesi" },
  { num: "IP67", label: "Koruma sınıfı" },
  { num: "4 Bölge", label: "Anti-Passback" },
  { num: "12V", label: "Çalışma voltajı" },
];

const FEATURES = [
  {
    icon: iconPath("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"),
    badge: "GÜVENLİK",
    title: "Anti-Passback",
    desc: "Kart tabanlı çift yönlü geçiş kontrolü. 4 bölge desteği — sunucu gerektirmez.",
  },
  {
    icon: iconPath(
      "M12 8v4l3 3M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z",
    ),
    badge: "OFFLINE",
    title: "Offline Çalışma",
    desc: "Yazılım gerektirmeden bağımsız çalışır. Bina girişleri için ideal.",
  },
  {
    icon: iconPath(
      "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    ),
    badge: "I/O",
    title: "2 Giriş · 1 Röle",
    desc: "2 dijital giriş kontağı ve 1 adet 2A röle çıkışı. Harici buton bağlantısı destekli.",
  },
  {
    icon: iconPath("M3 7h18M3 12h18M3 17h18"),
    badge: "KORUMA",
    title: "IP67 Koruma",
    desc: "Toz ve suya karşı IP67 sertifikalı gövde. Her hava koşulunda güvenilir çalışma.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    badge: "KAPASİTE",
    title: "5.840 Kart",
    desc: "Geniş kart kapasitesiyle orta ölçekli tesisler için uygundur.",
  },
  {
    icon: iconPath("M13 2L3 14h9l-1 8 10-12h-9l1-8z"),
    badge: "RFID",
    title: "Mifare Şifreli",
    desc: "13.56 MHz Mifare Classic kartlar — şifreli ve güvenli veri alanı.",
  },
];

const SPECS = [
  ["Gövde Malzemesi", "ABS"],
  ["Cihaz Ebatları", "46 / 86 / 16 mm"],
  ["Cihaz Ağırlığı", "45 ± 5 gr"],
  ["Çalışma Sıcaklığı", "-20 ~ +70 °C"],
  ["Çalışma Voltajı", "12V DC"],
  ["Harcanan Güç", "0.75 W Max"],
  ["RFID Tipi", "Mifare Classic"],
  ["RFID Frekansı", "13.56 MHz 14443A"],
  ["Çalışma Modu", "OFFLINE (Kart ID)"],
  ["Kart Kapasitesi", "5.840 kart"],
  ["Çalışma Hızı", "64 MHz"],
  ["Okuma Onayı", "Işıklı, sesli"],
  ["Okuma Mesafesi", "< 50 mm"],
  ["Yazma Mesafesi", "< 45 mm"],
  ["Bağlantı Tipi", "RS485"],
  ["Giriş", "2 adet dijital"],
  ["Çıkış", "1 adet 2A Röle (COM/NO/NC)"],
  ["Ekstra", "Harici button bağlanabilir"],
  ["Koruma", "IP67"],
];

const USE_CASES = [
  { title: "Bina Girişleri", desc: "Ofis, rezidans ve fabrika kapı kontrolü." },
  {
    title: "Kampüs Güvenliği",
    desc: "Üniversite, okul ve kampüs erişim yönetimi.",
  },
  {
    title: "Endüstriyel Tesisler",
    desc: "Üretim sahası ve depo giriş takibi.",
  },
  {
    title: "Yazılımsız Kurulum",
    desc: "Sunucu veya yazılım gerektirmeden bağımsız çalışma.",
  },
];

export default function Rc1s() {
  return (
    <ProductPagePremium
      model="RC1s"
      eyebrow="Standalone · IP67"
      title="Standalone Kart Okuyucu"
      desc="Yazılım gerektirmeyen, IP67 korumalı, 5.840 kart kapasiteli bağımsız okuyucu. Bina giriş kapıları için ideal çözüm."
      image="/images/panel-tipi-kart-okuyucu.png"
      imageAlt="RC1s Standalone Kart Okuyucu"
      pdfHref="/d_files/RC1s.pdf"
      chips={CHIPS}
      stats={STATS}
      features={FEATURES}
      specs={SPECS}
      useCases={USE_CASES}
      docTitle="RC1s Standalone Kart Okuyucu | AVES Elektronik"
    />
  );
}
