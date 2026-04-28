"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ProductStickyBar from "./ProductStickyBar";
import "../css/productPages.css";
/**
 * ProductPageStandard
 * Compact layout for simpler products (RC1s, RC206, RC1, C4128, Android)
 *
 * Props:
 *   model        string   e.g. "RC1s"
 *   eyebrow      string   e.g. "Standalone · IP67"
 *   title        string   e.g. "Standalone Kart Okuyucu"
 *   desc         string   hero paragraph
 *   image        string   image src
 *   imageAlt     string
 *   pdfHref      string   datasheet PDF path (optional — omit to hide button)
 *   accentColor  string   CSS color  (default #6366f1)
 *   tags         string[] spec pills in hero e.g. ["IP67", "5,840 kart"]
 *   stats        Array<{ num, label }>  4-column stats bar under hero
 *   features     Array<{ icon: JSX, title, desc }>  3-column cards
 *   specs        Array<[key, value]>  shown as a compact grid
 *   extraContent JSX      optional slot rendered after specs (video, image, notes)
 *   docTitle     string   browser tab title
 */
function useScrollAnim() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("ps-in"),
        ),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".ps").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function ProductPageStandard({
  model = "RC1s",
  eyebrow = "Standalone · IP67",
  title = "Standalone Kart Okuyucu",
  desc = "",
  image = "",
  imageAlt = "",
  pdfHref = null,
  accentColor = "#6366f1",
  tags = [],
  stats = [],
  features = [],
  specs = [],
  extraContent = null,
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
      <section className="ps-hero">
        <div className="ps-hero-inner">
          <div className="ps-hero-left">
            <button
              className="ps-back-btn"
              onClick={() => window.history.back()}
            >
              ← Geri
            </button>
            <span
              className="ps-eyebrow"
              style={{ animation: "psFadeUp .5s ease both" }}
            >
              {eyebrow}
            </span>
            <div
              className="ps-hero-model"
              style={{ animation: "psFadeUp .55s .08s ease both" }}
              ref={heroRef}
            >
              {model}
            </div>
            <div
              className="ps-hero-title"
              style={{ animation: "psFadeUp .55s .16s ease both" }}
            >
              {title}
            </div>
            {desc && (
              <p
                className="ps-hero-desc"
                style={{ animation: "psFadeUp .55s .24s ease both" }}
              >
                {desc}
              </p>
            )}
            {tags.length > 0 && (
              <div
                className="ps-tags"
                style={{ animation: "psFadeUp .55s .3s ease both" }}
              >
                {tags.map((t) => (
                  <span className="ps-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div
              className="ps-hero-actions"
              style={{ animation: "psFadeUp .55s .38s ease both" }}
            >
              {pdfHref && (
                <a
                  className="ps-btn-primary"
                  href={pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
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
              )}
              <button
                className="ps-btn-ghost"
                onClick={() => router.push("/contact")}
              >
                Teklif Al →
              </button>
            </div>
          </div>

          {image && (
            <div
              className="ps-hero-right"
              style={{ animation: "psFadeUp .65s .1s ease both" }}
            >
              <div className="ps-product-frame">
                <img src={image} alt={imageAlt || model} />
                <div className="ps-product-frame-label">{model}</div>
              </div>
            </div>
          )}
        </div>

        <div className="ps-hero-rule" />
      </section>

      {/* ── STATS BAR ── */}
      {stats.length > 0 && (
        <div className="ps-stats-bar">
          <div className="ps-stats-bar-inner">
            {stats.map((s, i) => (
              <div className={`ps-stat-item ps psd${i + 1}`} key={s.label}>
                <div className="ps-stat-num">{s.num}</div>
                <div className="ps-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── FEATURES ── */}
      {features.length > 0 && (
        <section className="ps-features">
          <div className="ps-features-inner">
            <span className="ps-section-label ps">Özellikler</span>
            <div className="ps-features-grid">
              {features.map((f, i) => (
                <div
                  className={`ps-feature-card ps psd${(i % 3) + 1}`}
                  key={f.title}
                >
                  {f.icon && <div className="ps-feature-icon">{f.icon}</div>}
                  <div className="ps-feature-title">{f.title}</div>
                  <div className="ps-feature-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SPECS ── */}
      {specs.length > 0 && (
        <section className="ps-specs">
          <div className="ps-specs-inner">
            <div className="ps-specs-header ps">
              <h2>Teknik Özellikler</h2>
              {pdfHref && (
                <a
                  className="ps-btn-primary"
                  href={pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PDF Datasheet
                </a>
              )}
            </div>
            <div className="ps-specs-dl ps psd2">
              {specs.map(([k, v]) => (
                <div className="ps-spec-row" key={k}>
                  <div className="ps-spec-key">{k}</div>
                  <div className="ps-spec-val">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── EXTRA CONTENT SLOT ── */}
      {extraContent && (
        <div className="ps-extra">
          <div className="ps-extra-inner ps">{extraContent}</div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="ps-cta">
        <div className="ps-cta-inner">
          <div className="ps ps-l">
            <h2>
              Projeye <em>hazır mısınız?</em>
            </h2>
            <p>
              {model} hakkında teknik destek veya teklif almak için ekibimizle
              iletişime geçin.
            </p>
            <div className="ps-cta-actions">
              <button
                className="ps-cta-btn-primary"
                onClick={() => router.push("/contact")}
              >
                İletişime Geçin
              </button>
              <button
                className="ps-cta-btn-ghost"
                onClick={() => router.push("/download")}
              >
                Download →
              </button>
            </div>
          </div>

          <div className="ps-cta-card ps ps-r psd2">
            <span className="ps-cta-card-label">Tipik Kullanım Alanları</span>
            {[
              {
                title: "Bina Girişleri",
                desc: "Ofis, rezidans ve fabrika kapı kontrolü.",
              },
              {
                title: "Kampüs Güvenliği",
                desc: "Üniversite, okul ve kampüs erişim yönetimi.",
              },
              {
                title: "Endüstriyel Tesisler",
                desc: "Üretim sahası ve depo giriş takibi.",
              },
            ].map((u) => (
              <div className="ps-cta-card-row" key={u.title}>
                <div className="ps-cta-card-dot" />
                <div>
                  <div className="ps-cta-card-title">{u.title}</div>
                  <div className="ps-cta-card-desc">{u.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
