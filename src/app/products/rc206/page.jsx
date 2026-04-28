"use client";
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
/* ================================================================
   Rc206.jsx
   ================================================================ */
export default function Rc206() {
  const SPECS_206 = [
    ["Cihaz Ebatları", "51 / 74 / 14 mm"],
    ["Cihaz Ağırlığı", "30 ± 4 gr"],
    ["Çalışma Sıcaklığı", "-20 ~ +70 °C"],
    ["Çalışma Voltajı", "5V DC"],
    ["Harcanan Güç", "0.60 W Max"],
    ["RFID Tipi", "Mifare Classic"],
    ["RFID Frekansı", "13.56 MHz 14443A"],
    ["Grafik Ekran", "128×64 OLED"],
    ["Çalışma Modu", "OFFLINE"],
    ["Çalışma Hızı", "48 MHz"],
    ["Bağlantı Tipi", "USB 2.0"],
    ["Bağlantı Hızı", "12 Mbps"],
    ["Okuma Onayı", "Işıklı, sesli, grafik mesajlı"],
    ["Okuma Mesafesi", "< 50 mm"],
    ["Yazma Mesafesi", "< 45 mm"],
    ["Çıkış", "1 adet 2A Röle (COM/NO/NC)"],
  ];

  const FEATURES_206 = [
    {
      icon: iconPath("M2 3h20v14H2zM8 21h8M12 17v4"),
      title: "128×64 OLED Ekran",
      desc: "Grafik mesajlı okuma onayı. Kullanıcıya anında görsel geri bildirim.",
    },
    {
      icon: iconPath("M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18"),
      title: "USB 2.0",
      desc: "Sürücü gerektirmeyen plug-and-play USB bağlantısı. Her Windows sistemle uyumlu.",
    },
    {
      icon: iconPath("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"),
      title: "SDK Desteği",
      desc: "Kendi yazılımınıza kolayca entegre edin. Karta veri yazma ve okuma desteği.",
    },
    {
      icon: iconPath("M16 18L22 12 16 6M8 6L2 12 8 18"),
      title: "1 Röle Çıkışı",
      desc: "2A röle çıkışı ile kapı kilidi veya diğer donanımlarla entegrasyon.",
    },
    {
      icon: (
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Müşteri Sadakati",
      desc: "Puan biriktirme, sadakat kartı ve mağaza uygulamaları için uygundur.",
    },
    {
      icon: iconPath(
        "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
      ),
      title: "Oyun Makineleri",
      desc: "Kart bazlı kredi sistemi ile oyun makinesi entegrasyonu.",
    },
  ];

  const videoExtra = (
    <video
      style={{
        width: "90%",
        maxWidth: 280,
        borderRadius: 14,
        display: "block",
        margin: "0 auto",
      }}
      muted
      autoPlay
      loop
      controls
    >
      <source src="/images/rc206.mp4" type="video/mp4" />
    </video>
  );

  return (
    <ProductPageStandard
      model="RC206"
      eyebrow="USB 2.0 · OLED"
      title="USB Kart Okuyucu"
      desc="OLED ekranlı, USB 2.0 bağlantılı, offline çalışan kart okuyucu. Oyun makineleri, müşteri sadakat ve kredi sistemleri için."
      image="/images/usb-kart-okuyucu_.png"
      imageAlt="RC206 USB Kart Okuyucu"
      pdfHref="/d_files/RC206.pdf"
      tags={["USB 2.0", "OLED Ekran", "Offline", "SDK Desteği"]}
      stats={[
        { num: "128×64", label: "OLED ekran" },
        { num: "5V", label: "USB güç" },
        { num: "1 Röle", label: "Çıkış" },
      ]}
      features={FEATURES_206}
      specs={SPECS_206}
      extraContent={videoExtra}
      docTitle="RC206 USB Kart Okuyucu | AVES Elektronik"
    />
  );
}
