/* ================================================================
   RC1s.jsx
   ================================================================ */
import ProductPageStandard from "../../components/ProductPageStandard";

const iconPath = (d) => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
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
    icon: iconPath("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"),
    title: "Anti-Passback",
    desc: "Kart tabanlı çift yönlü geçiş kontrolü. 4 bölge desteği — sunucu gerektirmez.",
  },
  {
    icon: iconPath(
      "M12 8v4l3 3M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z",
    ),
    title: "Offline Çalışma",
    desc: "Yazılım gerektirmeden bağımsız çalışır. Bina girişleri için ideal.",
  },
  {
    icon: iconPath(
      "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    ),
    title: "2 Giriş · 1 Röle",
    desc: "2 dijital giriş kontağı ve 1 adet 2A röle çıkışı. Harici buton bağlantısı destekli.",
  },
  {
    icon: iconPath("M3 7h18M3 12h18M3 17h18"),
    title: "IP67 Koruma",
    desc: "Toz ve suya karşı IP67 sertifikalı gövde. Her hava koşulunda güvenilir çalışma.",
  },
  {
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
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
    title: "5.840 Kart",
    desc: "Geniş kart kapasitesiyle orta ölçekli tesisler için uygundur.",
  },
  {
    icon: iconPath("M13 2L3 14h9l-1 8 10-12h-9l1-8z"),
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

export default function RC1S() {
  return (
    <ProductPageStandard
      model="RC1s"
      eyebrow="Standalone · IP67"
      title="Standalone Kart Okuyucu"
      desc="Yazılım gerektirmeyen, IP67 korumalı, 5.840 kart kapasiteli bağımsız okuyucu. Bina giriş kapıları için ideal çözüm."
      image="/images/panel-tipi-kart-okuyucu.png"
      imageAlt="RC1s Standalone Kart Okuyucu"
      pdfHref="/d_files/RC1s.pdf"
      tags={["IP67", "5.840 kart", "Anti-Passback", "13.56 MHz", "Offline"]}
      stats={[
        { num: "5.840", label: "Kart kapasitesi" },
        { num: "IP67", label: "Koruma sınıfı" },
        { num: "12V", label: "Çalışma voltajı" },
        { num: "RS485", label: "Bağlantı" },
      ]}
      features={FEATURES}
      specs={SPECS}
      docTitle="RC1s Standalone Kart Okuyucu | AVES Elektronik"
    />
  );
}
