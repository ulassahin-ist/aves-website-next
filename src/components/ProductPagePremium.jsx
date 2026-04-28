"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ProductStickyBar from "./ProductStickyBar";
import "../css/productPages.css";
/**
 * ProductPagePremium
 * RC264-style full hero layout for flagship products (RC210, RC264, RCP8)
 *
 * Props:
 *   model        string   e.g. "RC264"
 *   eyebrow      string   e.g. "POE · Mifare"
 *   title        string   e.g. "Akıllı POE Kart Okuyucu"
 *   desc         string   hero paragraph
 *   image        string   image src
 *   imageAlt     string
 *   pdfHref      string   datasheet PDF path
 *   accentColor  string   CSS color for pill/badge accent  (default #6366f1)
 *   chips        Array<{ num, label }>   up to 3 floating stat chips
 *   stats        Array<{ num, label }>   stats bar (4 items ideal)
 *   features     Array<{ icon: JSX, badge, title, desc }>
 *   specs        Array<[key, value]>
 *   useCases     Array<{ title, desc }>
 *   docTitle     string   browser tab title
 */
function useScrollAnim() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("pp-in"),
        ),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".pp").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function ProductPagePremium({
  model = "RC264",
  eyebrow = "POE · Mifare",
  title = "Akıllı POE Kart Okuyucu",
  desc = "",
  image = "",
  imageAlt = "",
  pdfHref = "#",
  accentColor = "#6366f1",
  chips = [],
  stats = [],
  features = [],
  specs = [],
  useCases = [],
  docTitle = "",
}) {
  const router = useRouter();
  useScrollAnim();

  const heroRef = useRef(null);

  useEffect(() => {
    if (docTitle) document.title = docTitle;
  }, [docTitle]);

  return (
    <>
      {/* ── HERO ── */}
      <ProductStickyBar
        model={model}
        title={title}
        image={image}
        pdfHref={pdfHref}
        heroRef={heroRef}
      />
      <section className="pp-hero">
        <div className="pp-hero-left">
          <button className="pp-back-btn" onClick={() => router.push(-1)}>
            ← Geri
          </button>

          <div className="pp-badge">
            <div className="pp-badge-dot" />
            {eyebrow}
          </div>

          <h1 style={{ animation: "ppFadeUp .6s ease both" }} ref={heroRef}>
            {model}
          </h1>
          <div
            className="pp-hero-sub"
            style={{ animation: "ppFadeUp .6s .12s ease both" }}
          >
            {title}
          </div>
          <p
            className="pp-hero-desc"
            style={{ animation: "ppFadeUp .6s .24s ease both" }}
          >
            {desc}
          </p>
          <div
            className="pp-hero-actions"
            style={{ animation: "ppFadeUp .6s .38s ease both" }}
          >
            <a
              className="pp-btn-primary"
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path
                  d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Datasheet İndir
            </a>
            <button
              className="pp-btn-ghost"
              onClick={() => router.push("/contact")}
            >
              Teklif Al →
            </button>
          </div>
        </div>

        <div
          className="pp-hero-right"
          style={{ animation: "ppFadeUp .7s .1s ease both" }}
        >
          <div className="pp-img-frame">
            <div className="pp-img-ring pp-img-ring-1" />
            <div className="pp-img-ring pp-img-ring-2" />
            <img src={image} alt={imageAlt || model} />
            {/* {chips[0] && (
              <div className="pp-stat-chip pp-chip-1">
                <div className="pp-chip-num">{chips[0].num}</div>
                <div className="pp-chip-label">{chips[0].label}</div>
              </div>
            )}
            {chips[1] && (
              <div className="pp-stat-chip pp-chip-2">
                <div className="pp-chip-num">{chips[1].num}</div>
                <div className="pp-chip-label">{chips[1].label}</div>
              </div>
            )}
            {chips[2] && (
              <div className="pp-stat-chip pp-chip-3">
                <div className="pp-chip-num">{chips[2].num}</div>
                <div className="pp-chip-label">{chips[2].label}</div>
              </div>
            )} */}
          </div>
        </div>
        <div className="ps-hero-rule" />
      </section>

      {/* ── STATS BAR ── */}
      {stats.length > 0 && (
        <div className="pp-stats-bar">
          <div className="pp-stats-bar-inner">
            {stats.map((s, i) => (
              <div className={`pp-stat-item pp pp ppd${i + 1}`} key={s.label}>
                <div className="pp-stat-num">{s.num}</div>
                <div className="pp-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── FEATURES ── */}
      {features.length > 0 && (
        <section className="pp-features">
          <div className="pp-features-inner">
            <div className="pp-features-header">
              <div className="pp pp-l">
                <span className="pp-section-eyebrow">Özellikler</span>
                <h2>Neden {model}?</h2>
              </div>
              <p className="pp pp-r ppd2">
                Kurumsal uygulamaların her ihtiyacına yanıt veren, parametrik
                yapısıyla esnek kullanım sunan akıllı cihaz.
              </p>
            </div>
            <div className="pp-features-grid">
              {features.map((f, i) => (
                <div
                  className={`pp-feature-card pp pp-s ppd${(i % 3) + 1}`}
                  key={f.badge || i}
                >
                  <div className="pp-feature-icon">{f.icon}</div>
                  {f.badge && (
                    <span className="pp-feature-badge">{f.badge}</span>
                  )}
                  <div className="pp-feature-title">{f.title}</div>
                  <div className="pp-feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SPECS ── */}
      {specs.length > 0 && (
        <section className="pp-specs">
          <div className="pp-specs-inner">
            <div className="pp-specs-left pp pp-l">
              <span className="pp-section-eyebrow">Teknik Özellikler</span>
              <h2>Tam Spesifikasyon</h2>
              <p>
                Uygulama tipine göre ayarlanabilen parametrik yapı. Her ortamda
                güvenilir çalışma için tasarlandı.
              </p>
              <a
                className="pp-btn-primary"
                href={pdfHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF Datasheet
              </a>
            </div>
            <div className="pp-specs-dl pp ppd2">
              {specs.map(([k, v]) => (
                <div className="pp-spec-row" key={k}>
                  <span className="pp-spec-key">{k}</span>
                  <span className="pp-spec-val">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="pp-cta">
        <div className="pp-cta-inner">
          <div className="pp pp-l">
            <h2>
              Projenize <em>başlayalım</em>
            </h2>
            <p>
              {model}'ü kurumunuza entegre etmek için ekibimizle iletişime
              geçin. Teknik destek ve kurulum desteği sağlıyoruz.
            </p>
            <div className="pp-cta-actions">
              <a
                className="pp-cta-btn-dl"
                href={pdfHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Datasheet İndir
              </a>
              <button
                className="pp-cta-btn-contact"
                onClick={() => router.push("/contact")}
              >
                İletişime Geç →
              </button>
            </div>
          </div>

          {useCases.length > 0 && (
            <div className="pp-cta-right pp pp-r ppd2">
              <span className="pp-cta-right-label">Kullanım Alanları</span>
              {useCases.map((u) => (
                <div className="pp-use-case" key={u.title}>
                  <div className="pp-use-dot" />
                  <div>
                    <div className="pp-use-title">{u.title}</div>
                    <div className="pp-use-desc">{u.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
