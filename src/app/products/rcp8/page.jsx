"use client";
import ProductPagePremium from "../../components/ProductPagePremium";

const CHIPS = [
  { num: "8", label: "Okuyucu desteği" },
  { num: "262K", label: "Kart / okuyucu" },
  { num: "RS485", label: "Bağlantı" },
];

const STATS = [
  { num: "8", label: "Bağlantı okuyucu" },
  { num: "262.144", label: "Kart / okuyucu" },
  { num: "10 + 10", label: "Giriş · Röle" },
  { num: "4 Bölge", label: "Anti-Passback" },
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
    icon: iconPath(
      "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    ),
    badge: "MERKEZİ",
    title: "8 Okuyucu Desteği",
    desc: "Tek panelden 8 adete kadar RC1 okuyucu yönetimi. RS485 üzerinden güvenilir veri iletimi.",
  },
  {
    icon: iconPath("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"),
    badge: "GÜVENLİK",
    title: "Anti-Passback",
    desc: "4 farklı bölgede çift yönlü geçiş kontrolü. Kart üzerinde işlem — sunucu gerektirmez.",
  },
  {
    icon: iconPath("M22 12h-4l-3 9L9 3l-3 9H2"),
    badge: "I/O",
    title: "10 Giriş · 10 Röle",
    desc: "Dahili 10 dijital giriş kontağı ve 10 çıkış rölesiyle tam otomasyon entegrasyonu.",
  },
  {
    icon: iconPath("M13 2L3 14h9l-1 8 10-12h-9l1-8z"),
    badge: "AĞ",
    title: "Ethernet & Sanal Panel",
    desc: "100 Mbit Ethernet üzerinden ağ bağlantısı. Bilgisayar üzerinde Sanal Panel ile çalışabilir.",
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
    desc: "Her okuyucu için 262.144 yetkili kart kapasitesi. 102.400 kart logu ve 57.344 olay logu.",
  },
  {
    icon: iconPath("M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"),
    badge: "MODÜLER",
    title: "RC1 Okuyucu",
    desc: "IP67 korumalı RC1 okuyucular: 2 giriş + 1 röle. Mifare şifreli, Anti-Passback destekli.",
  },
];

const SPECS = [
  ["Cihaz Ebatları", "170 / 100 / 30 mm"],
  ["Cihaz Ağırlığı", "220 ± 5 gr"],
  ["Çalışma Sıcaklığı", "-20 ~ +70 °C"],
  ["Çalışma Voltajı", "12 - 24V DC"],
  ["Harcanan Güç", "8 W Max"],
  ["Çalışma Hızı", "64 MHz"],
  ["Okuyucu Sayısı", "8"],
  ["Okuyucu Bağlantısı", "RS485"],
  ["Ethernet", "100 MBit"],
  ["Kart (Log) Kapasitesi", "102.400"],
  ["Olay (Log) Kapasitesi", "57.344"],
  ["Kart Kapasitesi", "262.144 (18 bit) / Okuyucu"],
  ["Yaz Saati", "Otomatik"],
  ["Giriş", "10 adet dijital"],
  ["Çıkış", "10 adet 2A Röle (COM/NO/NC)"],
  ["Anti-Passback", "4 farklı bölgede"],
];

const USE_CASES = [
  {
    title: "Çok Kapılı Tesisler",
    desc: "8 kapıya kadar tek panel yönetimi — fabrika, kampüs, rezidans.",
  },
  {
    title: "Turnike & Bariyer",
    desc: "Röle çıkışlarıyla turnike ve araç bariyer doğrudan entegrasyonu.",
  },
  {
    title: "Güvenlik Alarmı",
    desc: "10 dijital giriş ile alarm sistemleri ve sensör entegrasyonu.",
  },
  {
    title: "Sanal Panel",
    desc: "Fiziksel panel yerine PC yazılımıyla esnek yönetim.",
  },
];

export default function Rcp8() {
  return (
    <ProductPagePremium
      model="RCP8"
      eyebrow="Panel · RS485 · Ethernet"
      title="Geçiş Kontrol Paneli"
      desc="8 okuyucu destekli merkezi kontrol paneli. 10 dijital giriş, 10 röle çıkışı, Anti-Passback ve Ethernet bağlantısı ile kurumsal ölçekli geçiş kontrol çözümü."
      image="/images/kart-kotrol-paneli.png"
      imageAlt="RCP8 Kart Kontrol Paneli"
      pdfHref="/d_files/RCpanel.pdf"
      chips={CHIPS}
      stats={STATS}
      features={FEATURES}
      specs={SPECS}
      useCases={USE_CASES}
      docTitle="RCP8 Panelli Geçiş Kontrol | AVES Elektronik"
    />
  );
}
