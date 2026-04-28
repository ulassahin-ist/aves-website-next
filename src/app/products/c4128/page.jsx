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
  { num: "8.190", label: "Kayıt kapasitesi" },
  { num: "IP67", label: "Koruma sınıfı" },
  { num: "45 Gün", label: "Kullanım süresi" },
];

const STATS = [
  { num: "8.190", label: "Kayıt kapasitesi" },
  { num: "IP67", label: "Koruma sınıfı" },
  { num: "45 Gün", label: "Kullanım süresi" },
  { num: "USB 2.0", label: "Bağlantı" },
];

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 7v5l3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    badge: "KAPASİTE",
    title: "8.190 Kayıt",
    desc: "Büyük hafıza kapasitesiyle uzun süreli tur kayıtları saklanır, raporlanır.",
  },
  {
    icon: iconPath("M3 7h18M3 12h18M3 17h18"),
    badge: "KORUMA",
    title: "IP67 Koruma",
    desc: "Toz ve suya karşı tam koruma. Her hava koşulunda saha kullanımına uygundur.",
  },
  {
    icon: iconPath("M13 2L3 14h9l-1 8 10-12h-9l1-8z"),
    badge: "PİL",
    title: "Li-Ion Pil",
    desc: "900 mAh Li-Ion pil ile 45 günlük kullanım, 90 günlük bekleme süresi.",
  },
  {
    icon: iconPath(
      "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    ),
    badge: "BAĞLANTI",
    title: "USB 2.0",
    desc: "Sürücüsüz USB bağlantısı. 2016 sonrası üretimler için sürücü gerekmez.",
  },
  {
    icon: iconPath("M22 12h-4l-3 9L9 3l-3 9H2"),
    badge: "ALARM",
    title: "24 Alarm",
    desc: "Sesli ve ışıklı alarm sistemi: pil durumu, hafıza doluluk ve arıza bildirimleri.",
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
    badge: "RFID",
    title: "Proximity TAG",
    desc: "D=25mm, 125 KHz Proximity TAG'lar ile kontrol noktası takibi.",
  },
];

const SPECS = [
  ["Gövde malzemesi", "Nylon 6"],
  ["Cihaz Ebatları", "D=40, h=104 mm"],
  ["Cihaz Ağırlığı", "115 ± 5 gr"],
  ["Çalışma Sıcaklığı", "-20 ~ +70 °C"],
  ["Harcanan Güç", "1.1 mW Max"],
  ["Bekleme Süresi", "< 90 gün"],
  ["Kullanım Süresi", "< 45 gün"],
  ["RFID Tipi", "Proximity"],
  ["RFID Frekansı", "125 KHz"],
  ["Okuma Mesafesi", "< 20 mm"],
  ["Yazma Mesafesi", "< 15 mm"],
  ["Çalışma Hızı", "48 MHz"],
  ["Kullanılan Pil", "Li-Ion 900 mAh"],
  ["Şarj Süresi", "< 2 saat"],
  ["Kayıt Kapasitesi", "8.190"],
  ["Bağlantı Tipi", "USB 2.0"],
  ["Koruma Sınıfı", "IP67"],
  ["Alarm", "24 adet"],
];

const USE_CASES = [
  {
    title: "Güvenlik Turu",
    desc: "Bekçi personelinin belirlenen kontrol noktalarını dolaşımının takibi.",
  },
  {
    title: "Saha Denetimi",
    desc: "Fabrika, depo ve açık alan kontrol noktası denetimi.",
  },
  {
    title: "Rapor & Analiz",
    desc: "8.190 kayıt kapasitesiyle uzun dönem tur raporlaması.",
  },
  {
    title: "Sert Ortamlar",
    desc: "IP67 ve Li-Ion pil ile zorlu saha koşullarında kesintisiz kullanım.",
  },
];

export default function C4128() {
  return (
    <ProductPagePremium
      model="C4128"
      eyebrow="IP67 · USB 2.0 · Proximity"
      title="Bekçi Tur Kontrol Sistemi"
      desc="Li-Ion pilli, IP67 korumalı, 8.190 kayıt kapasiteli Proximity bekçi tur kontrol cihazı. Saha güvenliği için güvenilir çözüm."
      image="/images/bekci-tur-okuyucu.png"
      imageAlt="C4128 Bekçi Tur Kontrol"
      pdfHref="/d_files/c4128.pdf"
      chips={CHIPS}
      stats={STATS}
      features={FEATURES}
      specs={SPECS}
      useCases={USE_CASES}
      docTitle="C4128 Bekçi Tur Kontrol | AVES Elektronik"
    />
  );
}
