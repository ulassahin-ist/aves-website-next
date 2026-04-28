"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "../css/index.css";

/* ─── animation hook ─────────────────────────────────────────────────────── */
function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ha-visible");
          }
        });
      },
      { threshold: 0.12 },
    );
    const els = document.querySelectorAll(".ha, .ha-delay");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── data ───────────────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    to: "/products/rc210",
    modifier: "product-card--indigo",
    eyebrow: "POE",
    name: "RC210",
    label: "Akıllı POE Kart Okuyucu",
    desc: "Tek kablo ile güç ve veri, Online/Offline Çalışma, AntiPassback, 2 giriş kontağı, 2 çıkış rölesi.",
    specs: ["Anti-Passback", "2 Röle Çıkışı", "IEEE 802.3af POE"],
    img: "/images/ekransiz-poe-kart-okuyucu.png",
    tag: "En Çok Tercih Edilen",
  },
  {
    to: "/products/rc264",
    modifier: "product-card--amber",
    eyebrow: "POE",
    name: "RC264",
    label: "Akıllı POE Kart Okuyucu",
    desc: "Tek kablo ile güç ve veri, Online/Offline Çalışma, AntiPassback, 2 RS232 Bağlantısı, 2 giriş kontağı, 2 çıkış rölesi.",
    specs: [
      "Anti-Passback",
      "2 RS232 Bağlantısı",
      "2 Röle Çıkışı",
      "IEEE 802.3af POE",
      "OLED Ekran + Keypad",
    ],
    img: "/images/ekranli-poe-kart-okuyucu.png",
    tag: "",
  },
  {
    to: "/products/rcp8",
    modifier: "product-card--green",
    eyebrow: "Panel · RS485",
    name: "RCP8",
    label: "Geçiş Kontrol Paneli",
    desc: "8 okuyucu destekli, Online/Offline Çalışma, AntiPassback, dahili 10 giriş kontaklı 10 çıkış röleli, merkezi kontrol paneli.",
    specs: [
      "8 okuyucu",
      "Anti-Passback",
      "RS485",
      "10 giriş kontağı",
      "10 çıkış rölesi",
    ],
    img: "/images/kart-kotrol-paneli.png",
    tag: null,
  },
  {
    to: "/products/rcp8",
    modifier: "product-card--sky",
    eyebrow: "Panel · RS485",
    name: "RC1",
    label: "RS485 Panel Okuyucu",
    desc: "AntiPassback, IP67 korumalı, dahili 2 giriş kontaklı 1 çıkış röleli, merkezi kontrol panel okuyucusu.",
    specs: [
      "Anti-Passback",
      "2 giriş kontağı",
      "1 çıkış rölesi",
      "IP67 koruma",
    ],
    img: "/images/panel-tipi-kart-okuyucu.png",
    tag: null,
  },
  {
    to: "/products/rc1s",
    modifier: "product-card--rose",
    eyebrow: "Standalone · IP67",
    name: "RC1s",
    label: "Standalone Kart Okuyucu",
    desc: "Yazılım gerektirmeyen, IP67 korumalı, 5840 kart kapasiteli dahili 2 giriş kontaklı 1 çıkış röleli, bağımsız okuyucu.",
    specs: [
      "5,840 kart",
      "Anti-Passback",
      "2 giriş kontağı",
      "1 çıkış rölesi",
      "IP67 koruma",
    ],
    img: "/images/panel-tipi-kart-okuyucu.png",
    tag: null,
  },
  {
    to: "/products/rc206",
    modifier: "product-card--violet",
    eyebrow: "USB 2.0",
    name: "RC206",
    label: "USB Kart Okuyucu",
    desc: "OLED ekranlı, Offline Çalışma, 1 röle çıkışı, USB kart okuyucu.",
    specs: ["128×64 OLED ekran", "USB 2.0", "1 röle çıkışı"],
    img: "/images/usb-kart-okuyucu_.png",
    tag: null,
  },
  {
    to: "/products/android",
    modifier: "product-card--cyan",
    eyebrow: "NFC · Android",
    name: "Android",
    label: "Android El Terminali",
    desc: "Kredi tahsilatları için NFC destekli Android tabanlı el terminali.",
    specs: ["NFC desteği", "Mobil POS", "El terminali"],
    img: "/images/android-kart-okuyucu_.png",
    tag: null,
  },
  {
    to: "/products/c4128",
    modifier: "product-card--orange",
    eyebrow: "IP67 · USB 2.0",
    name: "C4128",
    label: "Bekçi Tur Kontrol",
    desc: "Li-Ion pilli, IP67 korumalı, 8190 kayıt kapasiteli, Proximity bekçi tur kontrol cihazı.",
    specs: ["8,190 kayıt", "IP67 koruma", "Li-Ion pil", "Proximity"],
    img: "/images/bekci-tur-okuyucu.png",
    tag: null,
  },
  {
    to: "/products",
    modifier: "product-card--lime",
    eyebrow: "AVES",
    name: "BP",
    label: "Yeni Ürün Pek Yakında",
    desc: "Yeni cihazımızı incelemek için takipte kalın.",
    specs: ["Yakında"],
    img: "/images/aves-logo-square.jpg",
    tag: null,
  },
];

const SW_TEASER_CARDS = [
  {
    num: "01",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <path
          d="M8 21h8M12 17v4"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Web Uygulamaları",
    desc: "Admin paneller, kurumsal portallar, SaaS ve e-ticaret platformları.",
    tags: ["React", "Node.js", "Vue"],
  },
  {
    num: "02",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <rect
          x="5"
          y="2"
          width="14"
          height="20"
          rx="2"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <path
          d="M12 18h.01"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Mobil Uygulamalar",
    desc: "iOS, Android, NFC destekli cihazlar, el terminali ve kiosk yazılımları.",
    tags: ["iOS", "Android", "NFC", "Kiosk"],
  },
  {
    num: "03",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M4 4h16v12H4zM9 20h6M12 16v4"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Masaüstü & DLL",
    desc: "Windows uygulamaları, SDK/DLL geliştirme ve donanım entegrasyonu.",
    tags: ["Windows", "DLL", "SDK"],
  },
  {
    num: "04",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="3"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        <path
          d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Web Servisleri & API",
    desc: "REST API, WebSocket, sistem entegrasyonu ve veritabanı tasarımı.",
    tags: ["REST", "WebSocket", "SQL"],
  },
  {
    num: "05",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 2L2 7l10 5 10-5-10-5z"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "AVES Ekosistemi ile Entegrasyon",
    desc: "Geçiş kontrol, puantaj, yemekhane ve ziyaretçi yazılım paketleri.",
    tags: ["AVES SDK", "Mifare", "Entegrasyon"],
  },
  {
    num: "06",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Özel Çözümler",
    desc: "Sektörden bağımsız kurumsal yazılım projeleri ve danışmanlık.",
    tags: ["Kurumsal", "Danışmanlık", "Özel"],
  },
];
// const websites = [
//   "https://gsu.edu.tr/tr",
//   "https://boun.edu.tr",
//   "https://www.mu.edu.tr",
//   "https://www.btk.gov.tr",
//   "https://www.darphane.gov.tr",
//   "https://www.millisaraylar.gov.tr",
//   "https://www.bolgiysan.com.tr",
//   "https://www.boycelik.com.tr",
//   "https://www.botas.gov.tr",
//   "https://www.ics.com.tr",
//   "https://www.istikbal.com.tr",
//   "https://www.izu.edu.tr",
//   "https://www.kimtas.com.tr",
//   "https://www.kosbas.com.tr",
//   "https://www.makasan.com.tr",
//   "https://www.mondihome.com.tr",
//   "https://www.ordu.edu.tr",
//   "https://www.uskudar.bel.tr",
//   "https://www.tusas.com",
//   "https://www.roketsan.com.tr",
//   "https://www.aselsan.com.tr",
//   "https://www.pasabahce.com",
// ];
const LOGOS = Array.from({ length: 22 }, (_, i) => {
  const index = String(i + 1).padStart(2, "0");

  return {
    base: `/images/ref_${index}.png`,
    color: `/images/ref_c${index}.png`,
    alt: `Referans Firma ${i + 1}`,
  };
});
const doubledLogos = [...LOGOS, ...LOGOS];

/* ─── component ──────────────────────────────────────────────────────────── */
export default function Home() {
  const router = useRouter();
  const sliderRef = useRef(null);

  useScrollAnimations();

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    let requestRef;
    let offset = 0;
    const step = () => {
      offset -= 1;
      if (Math.abs(offset) >= el.scrollWidth / 2) offset = 0;
      el.style.transform = `translate3d(${offset}px, 0, 0)`;
      requestRef = requestAnimationFrame(step);
    };
    requestRef = requestAnimationFrame(step);
    return () => cancelAnimationFrame(requestRef);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero-content">
          <span className="hero-eyebrow hero-anim hero-anim-d1">
            Yerli Donanım · Yerli Yazılım
          </span>
          <h1 className="hero-anim hero-anim-d2">
            Geçiş ve Kredi Kontrol{" "}
            <span className="gradient-text">Çözümleri</span>
          </h1>
          <p className="hero-anim hero-anim-d3">
            1996'dan beri donanım ve yazılım geliştiren yerli mühendislik
            firması. Geçiş/Kredi kontrol sistemlerinden kurumsal yazılım
            projelerine kadar tek çatı altında.
          </p>
          <div className="hero-btn-container hero-anim hero-anim-d4">
            <a className="hero-btn" onClick={() => router.push("/contact")}>
              İletişime Geçin
            </a>
            <a className="hero-btn" onClick={() => router.push("/contact")}>
              Bayiimiz Olmak İster Misiniz?
            </a>
          </div>
          <div className="slider-container hero-anim hero-anim-d5">
            <div className="slider" ref={sliderRef}>
              {doubledLogos.map((l, i) => (
                <div
                  key={i}
                  // onClick={() => window.open(l.website, "_blank")}
                  className="slider-logo"
                >
                  <img className="logo-base" src={l.base} alt={l.alt} />
                  <img className="logo-color" src={l.color} alt={l.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INFO SECTION ── */}
      <section className="info-section">
        <div className="info-section-wrapper">
          {/* Left */}
          <div>
            <h2 className="ha ha-left">
              AVES'te sizin güvenliğiniz <br />
              <span className="gradient-text">kurumsal önceliğimiz</span>
            </h2>
            {[
              {
                title: "Kartlı Geçiş Kontrol",
                desc: "RCP8 panel ve RC1 okuyucularla 8 kapıya kadar Anti-Passback destekli, kart tabanlı erişim kontrolü.",
                to: "/products/rcp8",
              },
              {
                title: "POE Kart Okuyucular",
                desc: "RC264 ve RC210 ile tek kablo üzerinden güç ve veri. 262.144 kart kapasitesi, 6 zaman aralığı.",
                to: "/products",
              },
              {
                title: "Android Mobil Entegrasyon",
                desc: "NFC destekli Android cihazlar için geçiş kontrol ve harcama yazılımları.",
                to: "/products/android",
              },
              {
                title: "Yazılım Geliştirme",
                desc: "Web uygulamaları, admin paneller, mobil uygulamalar, DLL/SDK ve web servisleri — ürünlerimizle bağlantılı veya tamamen bağımsız her türlü projede.",
                to: "/software",
              },
            ].map((item, i) => (
              <div key={i} className={`ha ha-d${i + 1}`}>
                <div className="title">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle
                      cx="11"
                      cy="11"
                      r="10"
                      stroke="var(--accent2)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7 11l3 3 5-5"
                      stroke="var(--accent2)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
                <a onClick={() => router.push(item.to)}>Daha fazla →</a>
                <hr />
              </div>
            ))}
          </div>

          {/* Right image collage */}
          <div
            className="ha ha-right"
            style={{ position: "relative", height: 560 }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "62%",
                height: "48%",
                backgroundImage:
                  "linear-gradient(240deg, var(--purple), #bfbdff1f)",
                borderRadius: 16,
              }}
            />
            <img
              src="/images/ekranli-poe-kart-okuyucu.png"
              alt="POE Okuyucu"
              style={{
                position: "absolute",
                top: 20,
                left: 0,
                width: "52%",
                height: "auto",
                borderRadius: 12,
                border: "1px solid var(--border-light)",
                background: "var(--navy)",
                padding: 16,
                zIndex: 2,
              }}
            />
            <img
              src="/images/kart-kotrol-paneli.png"
              alt="Kontrol Paneli"
              style={{
                position: "absolute",
                bottom: 20,
                right: 0,
                width: "65%",
                height: "auto",
                borderRadius: 12,
                backgroundImage:
                  "linear-gradient(240deg, var(--white), #ffffff0d)",
                padding: 16,
                zIndex: 2,
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "10%",
                width: "45%",
                height: "40%",
                background: "rgba(34,211,238,0.08)",
                borderRadius: 16,
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </section>

      {/* ── CALL US ── */}
      <section className="call-us">
        <div className="call-us-wrapper">
          <div className="call-us-content ha ha-left">
            <h2>Daha Fazla Bilgi İçin Bizimle İletişime Geçin</h2>
            <p>
              Ürünlerimiz ve çözümlerimiz hakkında daha detaylı bilgi almak için
              bizimle iletişime geçmekten çekinmeyin. İhtiyacınıza en uygun
              sistemi birlikte belirleyelim ve size özel çözümler sunalım.
            </p>
          </div>
          <div className="ha ha-right ha-d2">
            <div
              onClick={() => router.push("/contact")}
              className="call-us-btn"
            >
              Hemen Arayın
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="cap-section">
        <div className="cap-inner">
          <div className="cap-header ha">
            <h2>
              <em>Tasarım, üretim, yazılım —</em> her adım burada
            </h2>
            <p>
              1996'dan beri ekosistemimizin donanımını tasarlıyor, üretiyor ve
              yazılımını yazıyoruz. Fikir aşamasından kuruluma kadar her süreç
              kendi bünyemizde.
            </p>
          </div>

          <div className="cap-cols">
            {[
              {
                icon: (
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                eyebrow: "Donanım Ar-Ge",
                title: "Elektronik tasarım",
                desc: "PCB tasarımından prototipe, okuyuculardan kontrol paneline — her devre yerli mühendislerle geliştirilir. 30 yıllık birikim tek adreste.",
                link: "Ürünleri incele →",
                to: "/products",
              },
              {
                icon: (
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                    <polyline
                      points="16 18 22 12 16 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="8 6 2 12 8 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                eyebrow: "Yazılım Geliştirme",
                title: "Her platformda yazılım",
                desc: "Web uygulamaları, Android, Windows, DLL/SDK ve REST API — AVES sistemlerimizle entegre ya da tamamen bağımsız kurumsal projeler.",
                link: "Yazılım hizmetleri →",
                to: "/software",
              },
              {
                icon: (
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                eyebrow: "Üretim Yetkinliği",
                title: "Uçtan uca üretim",
                desc: "Tasarımdan son ürüne kadar tüm üretim süreci kendi tesislerimizde yönetilir. Kalite, hız ve kontrol maksimum seviyede tutulur.",
                link: "Biz Kimiz →",
                to: "/about",
              },
              {
                icon: (
                  <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                eyebrow: "Güvenlik & Entegrasyon",
                title: "Güvenli ve entegre",
                desc: "Şifreli Mifare kartlar, Anti-Passback, ERP/HR entegrasyonu ve kurumsal güvenlik protokolleri — sisteminizin geri kalanıyla konuşur.",
                link: "Teklif alın →",
                to: "/contact",
              },
            ].map((col, i) => (
              <div key={i} className={`cap-col ha ha-scale ha-d${i + 1}`}>
                <div className="cap-col-icon">{col.icon}</div>
                <span className="cap-col-eyebrow">{col.eyebrow}</span>
                <h3>{col.title}</h3>
                <p>{col.desc}</p>
                <a className="cap-col-link" onClick={() => router.push(col.to)}>
                  {col.link}
                </a>
              </div>
            ))}
          </div>

          {/* bottom card */}
          <div className="cap-card-wrapper ha ha-d2">
            <div className="cap-card">
              <div className="cap-card-header">
                <h2>
                  <em>AVES platformunu</em> keşfedin
                </h2>
                <p>
                  Donanım ve yazılım aynı çatı altında. İhtiyacınız hangisi
                  olursa olsun — ya da ikisi birden — doğru yerdesiniz.
                </p>
              </div>
              <div className="cap-sub-cards">
                <div
                  className="cap-sub-card ha ha-d1"
                  onClick={() => router.push("/products")}
                >
                  <h4>Donanım ürünleri</h4>
                  <p>
                    POE kart okuyucular, kontrol panelleri, standalone ve USB
                    okuyucular, bekçi tur kontrol sistemi ve daha fazlası.
                  </p>
                  <span className="cap-sub-card-link">Ürünleri gör →</span>
                </div>
                <div
                  className="cap-sub-card ha ha-d2"
                  onClick={() => router.push("/software")}
                >
                  <h4>Yazılım geliştirme hizmetleri</h4>
                  <p>
                    Web, mobil, masaüstü, API ve SDK — AVES ekosisteminize
                    entegre veya tamamen özel kurumsal yazılım projeleri.
                  </p>
                  <span className="cap-sub-card-link">
                    Yazılım hizmetleri →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOFTWARE TEASER ── */}
      <section className="sw-teaser">
        <div className="sw-teaser-inner">
          <span className="sw-label ha">Yazılım Hizmetlerimiz</span>
          <h2 className="ha ha-d1">
            İhtiyacınıza göre <em>yazılım çözümleri</em>
          </h2>
          <p className="sw-teaser-sub ha ha-d2">
            Web uygulamaları, mobil uygulamalar, masaüstü yazılımlar ve API'lar
            — ürünlerimizle ilgili veya tamamen bağımsız her türlü projede
            yanınızdayız.
          </p>
          <div className="sw-cards">
            {SW_TEASER_CARDS.map((card, i) => (
              <div
                className={`sw-card ha ha-scale ha-d${(i % 3) + 1}`}
                key={card.num}
                onClick={() => router.push("/software")}
              >
                <span className="sw-card-num">{card.num}</span>
                <div className="sw-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="sw-card-tags">
                  {card.tags.map((t) => (
                    <span className="sw-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="sw-teaser-cta ha ha-d2">
            <a className="sw-btn-ghost" onClick={() => router.push("/contact")}>
              Proje teklifi alın
            </a>
            <a
              className="sw-btn-primary"
              onClick={() => router.push("/software")}
            >
              Tüm yazılım hizmetleri →
            </a>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="products-section">
        <div className="products-header ha">
          <h2>
            Donanım <em>ürünlerimiz</em>
          </h2>
          <p>
            Geçiş kontrolden bekçi takibine, USB okuyucudan POE paneline — her
            ihtiyaca yerli çözüm.
          </p>
        </div>
        <div className="products-wrapper">
          <div className="products-grid">
            {PRODUCTS.map((p, i) => (
              <div
                key={`${p.to}-${p.name}`}
                className={`product-card ${p.modifier} ha ha-scale ha-d${(i % 3) + 1}`}
                onClick={() => router.push(p.to)}
              >
                {p.tag && <span className="product-card-badge">{p.tag}</span>}
                <div className="product-card-img-wrap">
                  <img src={p.img} alt={p.label} />
                </div>
                <div className="product-card-body">
                  <span className="product-card-eyebrow">{p.eyebrow}</span>
                  <span className="product-card-model">{p.name}</span>
                  <h3 className="product-card-title">{p.label}</h3>
                  <p className="product-card-desc">{p.desc}</p>
                  <div className="product-card-specs">
                    {p.specs.map((s) => (
                      <span key={s} className="product-spec-pill">
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="product-card-cta">
                    İncele
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING HERO ── */}
      <section className="closing-hero">
        <div className="closing-hero-bg" />
        <div className="closing-hero-overlay" />
        <div className="closing-hero-content ha">
          <h1>Projenizi birlikte planlayalım</h1>
          <p>
            İhtiyacınıza en uygun çözümü belirlemek için uzman ekibimizle hemen
            iletişime geçin.
          </p>
          <div className="closing-hero-buttons">
            <button onClick={() => router.push("/contact")}>Teklif Alın</button>
          </div>
        </div>
      </section>
    </>
  );
}
