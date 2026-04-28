"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import "../css/information.css";
import "../css/references.css";
const SLIDES = [
  "/images/r_btk.jpg",
  "/images/r_bogazici.jpg",
  "/images/r_darphane.jpg",
  "/images/r_dolmabahce.jpg",
  "/images/r_galatasaray.jpg",
  "/images/r_mugla.jpg",
];

const FEATURED_REFS = [
  {
    name: "BTK Bilgi Teknolojileri ve İletişim Kurumu",
    location: "Ankara — Merkez ve Şubeler",
    count: "2.000+ Cihaz",
    modules: [
      "Geçiş Kontrol",
      "Puantaj",
      "Yemekhane",
      "Kafeterya",
      "Ziyaretçi",
      "Kütüphane",
      "Asansör",
    ],
    img: "/images/r_btk.jpg",
    color: "#6366f1",
    highlight: "Türkiye'nin en büyük Kartlı geçiş sistemi",
  },
  {
    name: "Milli Saraylar",
    location: "İstanbul — 17 Milli Saray",
    count: "200 Cihaz",
    modules: ["Geçiş Kontrol", "Puantaj", "Yemekhane", "Ziyaretçi"],
    img: "/images/r_dolmabahce.jpg",
    color: "#f59e0b",
  },
  {
    name: "Darphane",
    location: "İstanbul — Beşiktaş & Kartal",
    count: "350 Cihaz",
    modules: ["Geçiş Kontrol", "Puantaj", "Yemekhane", "Ziyaretçi"],
    img: "/images/r_darphane.jpg",
    color: "#22d3ee",
  },
];

const ALL_REFS = [
  {
    name: "Muğla Üniversitesi",
    location: "Muğla — Merkez ve Fakülteler",
    count: "360 Cihaz",
    modules: ["Geçiş Kontrol", "Yoklama", "Ziyaretçi"],
    sector: "Üniversite",
  },
  {
    name: "Galatasaray Üniversitesi",
    location: "İstanbul — Merkez & Lise",
    count: "70 Cihaz",
    modules: ["Geçiş Kontrol", "Yemekhane", "Ziyaretçi"],
    sector: "Üniversite",
  },
  {
    name: "Mimar Sinan Üniversitesi",
    location: "İstanbul — Merkez & Fakülteler",
    count: "20 Cihaz",
    modules: ["Puantaj", "Yemekhane", "Ziyaretçi"],
    sector: "Üniversite",
  },
  {
    name: "Boğaziçi Üniversitesi",
    location: "İstanbul",
    count: "150 Cihaz",
    modules: ["Geçiş Kontrol"],
    sector: "Üniversite",
  },
  {
    name: "Ordu Üniversitesi",
    location: "Ordu",
    count: "25 Cihaz",
    modules: ["Geçiş Kontrol", "Yemekhane"],
    sector: "Üniversite",
  },
  {
    name: "Konya Karatay Üniversitesi",
    location: "Konya",
    count: "25 Cihaz",
    modules: ["Yemekhane"],
    sector: "Üniversite",
  },
  {
    name: "KOSBAŞ Kocaeli Serbest Bölgesi",
    location: "Kocaeli",
    count: "90 Cihaz",
    modules: ["Geçiş Kontrol"],
    sector: "Sanayi",
  },
  {
    name: "Furtuni ve İsak Pinhas İlköğretim Okulu",
    location: "Çorlu",
    count: "25 Cihaz",
    modules: ["Yemekhane", "Kafeterya", "Kütüphane"],
    sector: "Eğitim",
  },
  {
    name: "Nesibe Aydın Okulları",
    location: "Ankara",
    count: "60 Cihaz",
    modules: ["Geçiş Kontrol", "Puantaj"],
    sector: "Eğitim",
  },
];

const SECTOR_COLORS = {
  Üniversite: {
    bg: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.25)",
    text: "#6366f1",
  },
  Sanayi: {
    bg: "rgba(34,211,238,0.1)",
    border: "rgba(34,211,238,0.25)",
    text: "#22d3ee",
  },
  Eğitim: {
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
    text: "#f59e0b",
  },
  Kamu: {
    bg: "rgba(74,222,128,0.1)",
    border: "rgba(74,222,128,0.25)",
    text: "#4ade80",
  },
};
const InfinityIcon = (
  <svg width="60" height="60" viewBox="-4 -4 72 40" fill="none">
    <path
      d="M16 16C16 10.477 20.477 6 26 6C31.523 6 36 10.477 40 16C44 21.523 48.477 26 54 26C59.523 26 64 21.523 64 16C64 10.477 59.523 6 54 6C48.477 6 44 10.477 40 16C36 21.523 31.523 26 26 26C20.477 26 16 21.523 16 16Z"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);
export default function References() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("Tümü");
  const timerRef = useRef(null);

  useEffect(() => {
    document.title = "Referanslar | AVES Elektronik";
    document.body.classList.add("references-page");
    return () => document.body.classList.remove("references-page");
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveSlide((i) => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".ref-anim")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sectors = [
    "Tümü",
    ...Array.from(new Set(ALL_REFS.map((r) => r.sector))),
  ];
  const filtered =
    activeFilter === "Tümü"
      ? ALL_REFS
      : ALL_REFS.filter((r) => r.sector === activeFilter);

  return (
    <>
      {/* HERO */}
      <section className="ref-hero">
        <div className="ref-hero-inner">
          <div>
            <span className="ref-eyebrow">Güven</span>
            <h1>
              2.500'den fazla
              <br />
              <span>başarılı kurulum</span>
            </h1>
            <p className="ref-hero-desc">
              Kamu kurumlarından üniversitelere, sanayi tesislerinden özel
              okullara — 2000 yılından bu yana binlerce noktada çözümlerimiz
              kullanılıyor.
            </p>
            <div className="ref-hero-pills">
              {["Devlet Kurumları", "Üniversiteler", "Eğitim", "Sanayi"].map(
                (p) => (
                  <span className="ref-hero-pill" key={p}>
                    {p}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Slideshow */}
          <div className="ref-slideshow">
            {SLIDES.map((src, i) => (
              <div
                key={src}
                className={`ref-slide ${i === activeSlide ? "active" : ""}`}
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
            <div className="ref-slide-dots">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`ref-slide-dot ${i === activeSlide ? "active" : ""}`}
                  onClick={() => setActiveSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="ref-stats">
        <div className="ref-stats-inner">
          {[
            { num: "2.500+", text: "Toplam Kurum" },
            { num: "30 Yıl", text: "Referans Geçmişi" },
            { num: "10.000+", text: "Cihaz" },
            { num: InfinityIcon, text: "Memnun Müşteri" },
          ].map((s, i) => (
            <>
              <div className="ref-stat-item" key={s.num}>
                <div className="ref-stat-num">{s.num}</div>
                <div className="ref-stat-text">{s.text}</div>
              </div>
              {i < 3 && <div className="ref-stat-divider" key={`d${i}`} />}
            </>
          ))}
        </div>
      </div>

      {/* FEATURED */}
      <section className="ref-featured">
        <div className="ref-featured-inner">
          <div className="ref-section-header ref-anim">
            <span className="ref-section-eyebrow">Öne Çıkan Projeler</span>
            <h2>
              Büyük ölçekli <em>referanslarımız</em>
            </h2>
          </div>
          <div className="ref-featured-grid">
            {FEATURED_REFS.map((r, i) => (
              <div
                className="ref-featured-card ref-anim"
                key={r.name}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="highlight">{r.highlight}</div>
                <div
                  className="ref-featured-img"
                  style={{ backgroundImage: `url(${r.img})` }}
                >
                  <div className="ref-featured-img-overlay" />
                  <div className="ref-featured-count">{r.count}</div>
                </div>
                <div className="ref-featured-body">
                  <div className="ref-featured-name">{r.name}</div>
                  <div className="ref-featured-location">📍 {r.location}</div>
                  <div className="ref-featured-modules">
                    {r.modules.map((m) => (
                      <span className="ref-module-pill" key={m}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL REFS */}
      <section className="ref-all">
        <div className="ref-all-inner">
          <div className="ref-all-header">
            <div className="ref-anim">
              <span className="ref-section-eyebrow">Referans</span>
              <h2>Projelerimizden Bazıları</h2>
            </div>
          </div>
          <div className="ref-all-grid">
            {filtered.map((r, i) => {
              const sc = SECTOR_COLORS[r.sector] || SECTOR_COLORS["Kamu"];
              return (
                <div
                  key={r.name}
                  className="ref-all-card ref-anim"
                  style={{ transitionDelay: `${(i % 3) * 0.07}s` }}
                >
                  <div className="ref-all-card-top">
                    <div className="ref-all-name">{r.name}</div>
                    <span
                      className="ref-all-sector"
                      style={{
                        background: sc.bg,
                        border: `1px solid ${sc.border}`,
                        color: sc.text,
                      }}
                    >
                      {r.sector}
                    </span>
                  </div>
                  <div className="ref-all-location">📍 {r.location}</div>
                  <div className="ref-all-count">{r.count}</div>
                  <div className="ref-all-modules">
                    {r.modules.map((m) => (
                      <span className="ref-all-module" key={m}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ref-cta">
        <div className="ref-cta-inner">
          <div className="ref-anim">
            <h2>
              Siz de <em>referanslarımız</em>
              <br />
              arasına katılın
            </h2>
            <p>
              İhtiyacınıza özel donanım ve yazılım çözümleri için ekibimizle
              iletişime geçin. Kurulumdan devreye almaya kadar yanınızdayız.
            </p>
            <div className="ref-cta-btns">
              <button
                className="ref-btn-primary"
                onClick={() => router.push("/contact")}
              >
                Teklif Alın
              </button>
              <button
                className="ref-btn-ghost"
                onClick={() => router.push("/products/rc210")}
              >
                Ürünleri İnceleyin →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
