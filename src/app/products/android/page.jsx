"use client";
import ProductPagePremium from "../../components/ProductPagePremium";

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
  { num: "NFC", label: "RFID teknolojisi" },
  { num: "Android", label: "Platform" },
  { num: "SDK", label: "Geliştirici desteği" },
];

const STATS = [
  { num: "NFC", label: "RFID teknolojisi" },
  { num: "Android", label: "Platform" },
  { num: "RC Uyumlu", label: "Sistem entegrasyonu" },
  { num: "SDK", label: "Geliştirici desteği" },
];

const FEATURES = [
  {
    icon: iconPath("M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"),
    badge: "NFC",
    title: "NFC Desteği",
    desc: "NFC özellikli Android cihazlar üzerinde RC sistemle tam uyumlu okuma.",
  },
  {
    icon: iconPath(
      "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18",
    ),
    badge: "ÖDEME",
    title: "Mobil POS",
    desc: "Android cep telefonu üzerinden kredi tahsilatı ve ödeme işlemleri.",
  },
  {
    icon: iconPath("M16 18L22 12 16 6M8 6L2 12 8 18"),
    badge: "SAHA",
    title: "El Terminali",
    desc: "Endüstriyel Android el terminali üzerinden giriş/çıkış kontrol yazılımı.",
  },
  {
    icon: iconPath("M13 2L3 14h9l-1 8 10-12h-9l1-8z"),
    badge: "ERİŞİM",
    title: "Geçiş Kontrol",
    desc: "RC sistemiyle uyumlu mobil geçiş kontrol ve yetkilendirme uygulaması.",
  },
  {
    icon: iconPath("M22 12h-4l-3 9L9 3l-3 9H2"),
    badge: "TAKİP",
    title: "Harcama Yazılımı",
    desc: "Kart bazlı harcama takibi ve bakiye yönetimi için mobil çözüm.",
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
    badge: "PLATFORM",
    title: "Yaygın Platform",
    desc: "Android'in geniş cihaz ekosistemine uyum. Yaygın ve erişilebilir donanım.",
  },
];

const USE_CASES = [
  {
    title: "Mobil POS",
    desc: "Saha personeli için Android cihaz üzerinden ödeme ve tahsilat.",
  },
  {
    title: "Geçiş Kontrol",
    desc: "NFC ile temassız mobil kart okuma ve yetkilendirme.",
  },
  {
    title: "Harcama Takibi",
    desc: "Kart bazlı yemekhane, kafeterya ve mağaza harcama yönetimi.",
  },
  {
    title: "Saha Operasyonları",
    desc: "Endüstriyel el terminali ile envanter ve personel takibi.",
  },
];

const videoExtra = (
  <div style={{ textAlign: "center" }}>
    <p
      style={{
        color: "rgba(255,255,255,0.5)",
        fontSize: "1.45rem",
        marginBottom: "2.4rem",
        lineHeight: 1.7,
      }}
    >
      Android cep telefonları için geliştirdiğimiz mobil POS yazılımı.
    </p>
    <video
      style={{
        width: "90%",
        maxWidth: 260,
        borderRadius: 12,
        display: "block",
        margin: "0 auto",
      }}
      muted
      autoPlay
      loop
      controls
    >
      <source src="/images/mobil-pos.mp4" type="video/mp4" />
    </video>
  </div>
);

export default function AndroidPage() {
  return (
    <ProductPagePremium
      model="Android"
      eyebrow="NFC · Android · Mobil"
      title="Android Mobil Cihazlar"
      desc="NFC özellikli Android platformu üzerinde geçiş kontrol ve harcama yazılımları. Cep telefonu veya endüstriyel el terminali ile RC sistemi entegrasyonu."
      image="/images/android-kart-okuyucu_.png"
      imageAlt="Android El Terminali"
      pdfHref={null}
      chips={CHIPS}
      stats={STATS}
      features={FEATURES}
      specs={[]}
      useCases={USE_CASES}
      docTitle="Android Mobil Cihazlar | AVES Elektronik"
    />
  );
}
