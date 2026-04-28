import { useEffect } from "react";
import ProductPagePremium from "../../components/ProductPagePremium";

const CHIPS = [
  { num: "262K", label: "Kart kapasitesi" },
  { num: "IEEE 802.3af", label: "POE standardı" },
  { num: "64 MHz", label: "İşlemci hızı" },
];

const STATS = [
  { num: "262.144", label: "Kart kapasitesi" },
  { num: "65.536", label: "Kayıt logu" },
  { num: "4 Bölge", label: "Anti-Passback" },
  { num: "64", label: "Program Senaryosu" },
];

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

const FEATURES = [
  {
    icon: iconPath("M13 2L3 14h9l-1 8 10-12h-9l1-8z"),
    badge: "POE",
    title: "Tek Kablo",
    desc: "IEEE 802.3af standardıyla hem güç hem veri — aynı network kablosundan.",
  },
  {
    icon: iconPath("M2 3h20v14H2zM8 21h8M12 17v4"),
    badge: "OLED",
    title: "128×64 Ekran",
    desc: "Grafik mesajlı okuma onayı ve 16 tuşlu klavye ile tam operatör kontrolü.",
  },
  {
    icon: iconPath("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"),
    badge: "GÜVENLİK",
    title: "Anti-Passback",
    desc: "4 farklı bölgede çift yönlü geçiş kontrolü. Kart kopyalanamaz, sistem atlatılamaz.",
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
    title: "262.144 Kart",
    desc: "18-bit kart kapasitesi ve 65.536 kayıt logu. Büyük ölçekli kurumlar için tasarlandı.",
  },
  {
    icon: iconPath("M16 18L22 12 16 6M8 6L2 12 8 18"),
    badge: "YAZILIM",
    title: "SDK & API",
    desc: "DLL ve REST API desteğiyle her türlü kurumsal yazılıma entegre olur.",
  },
  {
    icon: iconPath("M22 12h-4l-3 9L9 3l-3 9H2"),
    badge: "ESNEKLIK",
    title: "2× RS232",
    desc: "İki adet RS232 portu ile bariyer, turnike veya yazıcı entegrasyonu mümkün.",
  },
];

const SPECS = [
  ["Gövde", "ABS Plastik"],
  ["Ebatlar", "79 × 128 × 32 mm"],
  ["Ağırlık", "155 ± 5 gr"],
  ["Çalışma Sıcaklığı", "-20 ~ +70 °C"],
  ["Voltaj", "12–57V DC · 1A"],
  ["Güç Tüketimi", "2 W"],
  ["RFID", "Mifare Classic 13.56 MHz"],
  ["Veri Alanı", "1024 Byte / kart"],
  ["Çalışma Modu", "Kart Tabanlı / Sunucu Tabanlı"],
  ["İşlemci Hızı", "64 MHz"],
  ["Kayıt Kapasitesi", "65.536 log"],
  ["RS232", "2 adet · 9600–230400 bps"],
  ["Ethernet", "100 Mbit"],
  ["POE Standardı", "IEEE 802.3af"],
  ["Kart Kapasitesi", "262.144 (18 bit)"],
  ["Zaman Dilimleri", "6 farklı aralık"],
  ["Yaz Saati", "Otomatik"],
  ["Ekran", "128×64 OLED"],
  ["Klavye", "16 Tuş"],
  ["Giriş", "2× dijital"],
  ["Çıkış", "2× 2A Röle (COM/NO/NC)"],
  ["Anti-Passback", "4 bölge"],
  ["Röle Programı", "64 adet"],
  ["Yazıcı Desteği", "Var"],
];

const USE_CASES = [
  {
    title: "Geçiş Kontrol",
    desc: "Ofis, fabrika, kampüs bina girişleri — IP kamera ve turnike entegrasyonu.",
  },
  {
    title: "Puantaj Sistemi",
    desc: "Personel giriş-çıkış takibi, otomatik mesai hesaplama, ERP entegrasyonu.",
  },
  {
    title: "Yemekhane & Kafeterya",
    desc: "Kart bazlı kredi sistemi, yazdırma ve kasa entegrasyonu.",
  },
  {
    title: "Ziyaretçi Yönetimi",
    desc: "Geçici kart tanımlama, ziyaretçi logu ve raporlama.",
  },
];

export default function RC264() {
  return (
    <ProductPagePremium
      model="RC264"
      eyebrow="POE · Mifare"
      title="Akıllı POE Kart Okuyucu"
      desc="OLED ekranlı, 16 tuşlu, çift RS232 portlu. Tek network kablosundan güç ve veri. 262.144 kart kapasitesiyle kurumsal ölçekte geçiş kontrol ve puantaj çözümü."
      image="/images/ekranli-poe-kart-okuyucu.png"
      imageAlt="RC264 POE Kart Okuyucu"
      pdfHref="/d_files/RC264.pdf"
      chips={CHIPS}
      stats={STATS}
      features={FEATURES}
      specs={SPECS}
      useCases={USE_CASES}
      docTitle="RC264 POE Kart Okuyucu | AVES Elektronik"
    />
  );
}
