"use client";
import ProductPagePremium from "@/components/ProductPagePremium";

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
  { num: "RS485", label: "Bağlantı" },
  { num: "IP67", label: "Koruma" },
  { num: "12V DC", label: "Voltaj" },
];

const STATS = [
  { num: "RS485", label: "Bağlantı tipi" },
  { num: "IP67", label: "Koruma sınıfı" },
  { num: "4 Bölge", label: "Anti-Passback" },
  { num: "12V", label: "Çalışma voltajı" },
];

const FEATURES = [
  {
    icon: iconPath("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"),
    badge: "GÜVENLİK",
    title: "Anti-Passback",
    desc: "Kart üzerinde Anti-Passback işlemi — 4 bölge desteği, sunucu bağımsız.",
  },
  {
    icon: iconPath(
      "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    ),
    badge: "PANEL",
    title: "Panel Tabanlı",
    desc: "RCP8 kontrol paneline RS485 üzerinden bağlanır. 8 adete kadar okuyucu.",
  },
  {
    icon: iconPath("M3 7h18M3 12h18M3 17h18"),
    badge: "KORUMA",
    title: "IP67 Koruma",
    desc: "Toz ve suya karşı tam koruma. Dış mekan uygulamaları için uygundur.",
  },
  {
    icon: iconPath("M13 2L3 14h9l-1 8 10-12h-9l1-8z"),
    badge: "RFID",
    title: "Mifare Şifreli",
    desc: "Kart seri numarasıyla değil, formatlanmış güvenli kartlarla çalışır.",
  },
  {
    icon: iconPath("M22 12h-4l-3 9L9 3l-3 9H2"),
    badge: "I/O",
    title: "2 Giriş · 1 Röle",
    desc: "Her okuyucuda 2 dijital giriş ve 1 adet 2A röle çıkışı.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    badge: "GÜVENLİ KART",
    title: "Kopyalanamaz",
    desc: "Formatlanmış, şifreli Mifare kartlar — kopyalanamaz, klonlanamaz.",
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
  ["RFID Data Alanı", "1024 Byte"],
  ["Çalışma Modu", "Panel Tabanlı (ONLINE)"],
  ["Çalışma Hızı", "64 MHz"],
  ["Okuma Onayı", "Işıklı, sesli"],
  ["Okuma Mesafesi", "< 50 mm"],
  ["Yazma Mesafesi", "< 45 mm"],
  ["Bağlantı Tipi", "RS485"],
  ["Giriş", "2 adet dijital"],
  ["Çıkış", "1 adet 2A Röle (COM/NO/NC)"],
  ["Anti-Passback", "4 farklı bölgede"],
  ["Koruma", "IP67"],
];

const USE_CASES = [
  {
    title: "Çok Kapılı Sistemler",
    desc: "RCP8 panele bağlı 8 kapıya kadar yönetim.",
  },
  {
    title: "Dış Mekan Kullanımı",
    desc: "IP67 koruma ile her hava koşulunda güvenilir çalışma.",
  },
  {
    title: "Fabrika & Kampüs",
    desc: "Endüstriyel tesisler ve üniversite kampüsleri için.",
  },
  {
    title: "Güvenli Erişim",
    desc: "Şifreli Mifare kartlar ile klonlanamaz erişim kontrolü.",
  },
];

export default function Rc1() {
  return (
    <ProductPagePremium
      model="RC1"
      eyebrow="Panel · RS485 · IP67"
      title="Panel Tipi Kart Okuyucu"
      desc="RCP8 kontrol paneli ile çalışan RS485 bağlantılı okuyucu. IP67 korumalı, Anti-Passback destekli, Mifare şifreli kart altyapısı."
      image="/images/panel-tipi-kart-okuyucu.png"
      imageAlt="RC1 Panel Tipi Kart Okuyucu"
      pdfHref="/d_files/RCpanel.pdf"
      chips={CHIPS}
      stats={STATS}
      features={FEATURES}
      specs={SPECS}
      useCases={USE_CASES}
      docTitle="RC1 Panel Tipi Kart Okuyucu | AVES Elektronik"
    />
  );
}
