import ProductPagePremium from "../../components/ProductPagePremium";

const CHIPS = [
  { num: "262K", label: "Kart kapasitesi" },
  { num: "IEEE 802.3af", label: "POE standardı" },
  { num: "1.2 W", label: "Güç tüketimi" },
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
    desc: "IEEE 802.3af standardıyla aynı ağ kablosundan hem güç hem veri iletimi.",
  },
  {
    icon: iconPath("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"),
    badge: "GÜVENLİK",
    title: "Anti-Passback",
    desc: "4 farklı bölgede çift yönlü geçiş kontrolü. Güvenli Mifare şifreli kart altyapısı.",
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
    desc: "18-bit kart kapasitesi. Büyük ölçekli kurumsal tesisler için tasarlandı.",
  },
  {
    icon: iconPath("M16 18L22 12 16 6M8 6L2 12 8 18"),
    badge: "YAZILIM",
    title: "SDK & API",
    desc: "DLL ve REST API desteğiyle her türlü kurumsal yazılıma entegre olur.",
  },
  {
    icon: iconPath(
      "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    ),
    badge: "KOMPAKT",
    title: "Küçük Form Faktör",
    desc: "56 × 95 × 24 mm boyutu ile dar alanlara uygun kurulum. Sadece 70 gr.",
  },
  {
    icon: iconPath("M22 12h-4l-3 9L9 3l-3 9H2"),
    badge: "PROGRAM",
    title: "Esnek Programlanabilme",
    desc: "İşletmelere özel senaryolarda programlanabilme özelliği.",
  },
];

const SPECS = [
  ["Gövde Malzemesi", "ABS"],
  ["Cihaz Ebatları", "56 / 95 / 24 mm"],
  ["Cihaz Ağırlığı", "70 ± 5 gr"],
  ["Çalışma Sıcaklığı", "-20 ~ +70 °C"],
  ["Çalışma Voltajı", "9 - 57V DC"],
  ["Harcanan Güç", "1.2 W Max"],
  ["RFID Tipi", "Mifare Classic"],
  ["RFID Frekansı", "13.56 MHz 14443A"],
  ["RFID Data Alanı", "1024 Byte"],
  ["Çalışma Modu", "Kart Tabanlı / Sunucu Tabanlı"],
  ["Çalışma Hızı", "64 MHz"],
  ["Okuma Onayı", "Işıklı, sesli"],
  ["Okuma Mesafesi", "< 50 mm"],
  ["Yazma Mesafesi", "< 45 mm"],
  ["Kayıt (Log) Kapasitesi", "65.536"],
  ["Ethernet", "100 MBit"],
  ["POE Standardı", "IEEE 802.3af"],
  ["Kart Kapasitesi", "262.144 (18 bit)"],
  ["Zaman Dilimleri", "6 farklı aralık"],
  ["Yaz Saati", "Otomatik"],
  ["Giriş", "2 adet dijital"],
  ["Çıkış", "2 adet 2A Röle (COM/NO/NC)"],
  ["Anti-Passback", "4 farklı bölgede"],
  ["Röle Programı Sayısı", "64 adet"],
];

const USE_CASES = [
  { title: "Geçiş Kontrol", desc: "Ofis, fabrika ve kampüs bina girişleri." },
  {
    title: "Puantaj Sistemi",
    desc: "Personel giriş-çıkış takibi ve mesai hesaplama.",
  },
  {
    title: "Yemekhane",
    desc: "Kart bazlı kredi sistemi ve kasa entegrasyonu.",
  },
  {
    title: "Ziyaretçi Yönetimi",
    desc: "Geçici kart tanımlama, ziyaretçi takibi ve giriş-çıkış kayıtlarının raporlanması.",
  },
];

export default function RC210() {
  return (
    <ProductPagePremium
      model="RC210"
      eyebrow="POE · Mifare"
      title="Akıllı POE Kart Okuyucu"
      desc="Ekransız, kompakt tasarım. Tek network kablosundan güç ve veri. 262.144 kart kapasitesiyle her ölçekte kurumsal geçiş kontrol çözümü."
      image="/images/ekransiz-poe-kart-okuyucu.png"
      imageAlt="RC210 POE Kart Okuyucu"
      pdfHref="/d_files/RC210.pdf"
      chips={CHIPS}
      stats={STATS}
      features={FEATURES}
      specs={SPECS}
      useCases={USE_CASES}
      docTitle="RC210 POE Kart Okuyucu | AVES Elektronik"
    />
  );
}
