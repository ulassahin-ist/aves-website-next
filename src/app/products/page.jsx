"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "@/css/products.css";
const CATEGORIES = [
  {
    id: "poe",
    label: "POE Kart Okuyucular",
    desc: "Ethernet üzerinden güç ve veri. Kurumsal ölçek.",
    products: [
      {
        to: "/products/rc210",
        name: "RC210",
        label: "Akıllı POE Kart Okuyucu",
        desc: "Ekransız, kompakt. Tek kablo ile güç ve veri, 262K kart kapasitesi.",
        specs: ["Anti-Passback", "2 Röle", "IEEE 802.3af", "262K kart"],
        img: "/images/ekransiz-poe-kart-okuyucu.png",
        badge: "En Çok Tercih",
        modifier: "product-card--indigo",
      },
      {
        to: "/products/rc264",
        name: "RC264",
        label: "Akıllı POE Kart Okuyucu",
        desc: "OLED ekranlı, 2× RS232, 16 tuş klavye. Tam operatör kontrolü.",
        specs: ["OLED + Keypad", "2× RS232", "IEEE 802.3af", "262K kart"],
        img: "/images/ekranli-poe-kart-okuyucu.png",
        badge: null,
        modifier: "product-card--amber",
      },
    ],
  },
  {
    id: "panel",
    label: "Panelli Geçiş Kontrol",
    desc: "Merkezi panel ile çok kapılı yönetim.",
    products: [
      {
        to: "/products/rcp8",
        name: "RCP8",
        label: "Geçiş Kontrol Paneli",
        desc: "8 okuyucu destekli. 10 giriş, 10 röle, Ethernet bağlantısı.",
        specs: ["8 okuyucu", "10+10 I/O", "RS485", "Ethernet"],
        img: "/images/kart-kotrol-paneli.png",
        badge: null,
        modifier: "product-card--green",
      },
      {
        to: "/products/rcp8",
        name: "RC1",
        label: "Panel Tipi Kart Okuyucu",
        desc: "RCP8 ile kullanılan IP67 korumalı RS485 panel okuyucusu.",
        specs: ["IP67", "Anti-Passback", "2 giriş + 1 röle", "RS485"],
        img: "/images/panel-tipi-kart-okuyucu.png",
        badge: null,
        modifier: "product-card--sky",
      },
    ],
  },
  {
    id: "standalone",
    label: "Standalone & USB",
    desc: "Yazılım gerektirmeyen bağımsız çözümler.",
    products: [
      {
        to: "/products/rc1s",
        name: "RC1s",
        label: "Standalone Kart Okuyucu",
        desc: "5.840 kart kapasiteli, IP67 korumalı bağımsız okuyucu. Yazılım gerekmez.",
        specs: ["5.840 kart", "IP67", "Offline", "Anti-Passback"],
        img: "/images/panel-tipi-kart-okuyucu.png",
        badge: null,
        modifier: "product-card--rose",
      },
      {
        to: "/products/rc206",
        name: "RC206",
        label: "USB Kart Okuyucu",
        desc: "OLED ekranlı, plug-and-play USB 2.0 kart okuyucu. Sürücü gerektirmez.",
        specs: ["128×64 OLED", "USB 2.0", "1 Röle", "Offline"],
        img: "/images/usb-kart-okuyucu_.png",
        badge: null,
        modifier: "product-card--violet",
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobil & Diğer",
    desc: "Android terminaller ve saha cihazları.",
    products: [
      {
        to: "/products/android",
        name: "Android",
        label: "Android El Terminalleri",
        desc: "NFC destekli Android cihazlar. Geçiş kontrol ve mobil POS yazılımı.",
        specs: ["NFC", "Mobil POS", "RC Uyumlu", "Android"],
        img: "/images/android-kart-okuyucu_.png",
        badge: null,
        modifier: "product-card--cyan",
      },
      {
        to: "/products/c4128",
        name: "C4128",
        label: "Bekçi Tur Kontrol",
        desc: "Li-Ion pilli, IP67 korumalı, 8.190 kayıt kapasiteli tur kontrol cihazı.",
        specs: ["8.190 kayıt", "IP67", "Li-Ion 45 gün", "USB 2.0"],
        img: "/images/bekci-tur-okuyucu.png",
        badge: null,
        modifier: "product-card--orange",
      },
    ],
  },
];

export default function Products() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    document.body.classList.add("products-page");
    return () => document.body.classList.remove("products-page");
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("pr-in"),
        ),
      { threshold: 0.07 },
    );
    document.querySelectorAll(".pr-anim").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activeCategory]);

  const visibleCats =
    activeCategory === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <>
      {/* ── HERO ── */}
      <section className="pr-hero">
        <div className="pr-hero-inner">
          <div>
            <div className="pr-eyebrow">
              <span className="pr-eyebrow-dot" />
              Donanım Kataloğu
            </div>
            <h1>
              Tüm <span>ürünler</span>
            </h1>
            <p className="pr-hero-desc">
              POE kart okuyuculardan panel sistemlerine, USB okuyucudan bekçi
              tur kontrolüne — yerli mühendislik ile tasarlanan çözümler.
            </p>
          </div>
          <div className="pr-hero-stats">
            {[
              { num: "30", label: "Yıllık deneyim" },
              { num: "9", label: "Ürün modeli" },
              { num: "2.500+", label: "Referans" },
            ].map((s) => (
              <div className="pr-hero-stat" key={s.label}>
                <div className="pr-hero-stat-num">{s.num}</div>
                <div className="pr-hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="pr-hero-rule" />

      {/* ── FILTER BAR ── */}
      <div className="pr-filter-bar">
        <div className="pr-filter-inner">
          <button
            className={`pr-filter-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            Tümü
            <span className="pr-filter-count">
              {CATEGORIES.reduce((n, c) => n + c.products.length, 0)}
            </span>
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`pr-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
              <span className="pr-filter-count">{cat.products.length}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="pr-body">
        <div className="pr-body-inner">
          {visibleCats.map((cat, ci) => (
            <div className="pr-category" key={cat.id}>
              <div className={`pr-cat-header pr-anim pr-d${ci + 1}`}>
                <div className="pr-cat-title">{cat.label}</div>
                <div className="pr-cat-desc">{cat.desc}</div>
                <div className="pr-cat-count">{cat.products.length} ürün</div>
              </div>
              <div className="pr-grid">
                {cat.products.map((p, pi) => (
                  <div
                    key={p.name}
                    className={`product-card ${p.modifier} pr-anim pr-d${pi + 1}`}
                    onClick={() => router.push(p.to)}
                    style={{ animationDelay: `${pi * 0.06}s` }}
                  >
                    {p.badge && (
                      <span className="product-card-badge">{p.badge}</span>
                    )}
                    <div className="product-card-img-wrap">
                      <img src={p.img} alt={p.label} />
                    </div>
                    <div className="product-card-body">
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
                        Detayları İncele
                        <svg
                          width="13"
                          height="13"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
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
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="pr-cta">
        <div className="pr-cta-inner">
          <div>
            <h2>
              Hangi ürün <em>size uygun?</em>
            </h2>
            <p>
              Projeniz için en uygun sistemi birlikte belirleyelim. Teknik
              destek ve teklif için ekibimize ulaşın.
            </p>
          </div>
          <div className="pr-cta-actions">
            <button
              className="pr-btn-primary"
              onClick={() => router.push("/contact")}
            >
              Teklif Alın
            </button>
            <button
              className="pr-btn-ghost"
              onClick={() => router.push("/download")}
            >
              Datasheetler →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
