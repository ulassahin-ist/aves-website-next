"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductPagePremium({
  model = "",
  eyebrow = "",
  title = "",
  desc = "",
  image = "",
  imageAlt = "",
  pdfHref = null,
  chips = [],
  stats = [],
  features = [],
  specs = [],
  useCases = [],
}) {
  const router = useRouter();
  const heroRef = useRef(null);
  const [barVisible, setBarVisible] = useState(false);

  // Scroll-reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("pp-in"),
        ),
      { threshold: 0.07 },
    );
    document.querySelectorAll(".pp").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Sticky bar — appears when hero h1 leaves viewport
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setBarVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ── STICKY BAR ──
          Lives at the top of the render tree so it's a sibling of the page,
          not inside any positioned container. Uses position:sticky on its
          own wrapper so it never fights the global header. */}
      <div className={`pp-bar${barVisible ? " pp-bar--on" : ""}`}>
        <div className="pp-bar-inner">
          <img className="pp-bar-img" src={image} alt={model} />
          <span className="pp-bar-model">{model}</span>
          <div className="pp-bar-sep" />
          <span className="pp-bar-title">{title}</span>
          <div className="pp-bar-actions">
            <button
              className="pp-bar-ghost"
              onClick={() => router.push("/contact")}
            >
              Teklif Al →
            </button>
            {pdfHref && (
              <a
                className="pp-bar-primary"
                href={pdfHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Datasheet
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="pp-hero">
        <div className="pp-hero-inner">
          <div className="pp-hero-left">
            <button className="pp-back" onClick={() => window.history.back()}>
              ← Geri
            </button>
            <div className="pp-eyebrow">
              <span className="pp-eyebrow-dot" />
              {eyebrow}
            </div>
            {/* ref sentinel — bar shows when this scrolls out */}
            <h1 ref={heroRef}>{model}</h1>
            <p className="pp-hero-sub">{title}</p>
            <p className="pp-hero-desc">{desc}</p>
            <div className="pp-hero-actions">
              {pdfHref && (
                <a
                  className="pp-btn-primary"
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
                className="pp-btn-ghost"
                onClick={() => router.push("/contact")}
              >
                Teklif Al →
              </button>
            </div>
          </div>

          <div className="pp-hero-right">
            <div className="pp-img-wrap">
              <div className="pp-img-ring pp-ring-1" />
              <div className="pp-img-ring pp-ring-2" />
              <img src={image} alt={imageAlt || model} />
            </div>
          </div>
        </div>
        <div className="pp-hero-rule" />
      </section>

      {/* ── STATS BAR ── */}
      {stats.length > 0 && (
        <div className="pp-stats">
          <div className="pp-stats-inner">
            {stats.map((s, i) => (
              <div className={`pp-stat pp pp-d${i + 1}`} key={s.label}>
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
            <div className="pp-section-head pp pp-l">
              <span className="pp-eyebrow-text">Özellikler</span>
              <h2>Neden {model}?</h2>
              <p>
                Kurumsal uygulamaların her ihtiyacına yanıt veren, parametrik
                yapısıyla esnek kullanım sunan akıllı cihaz.
              </p>
            </div>
            <div className="pp-features-grid">
              {features.map((f, i) => (
                <div
                  className={`pp-feature pp pp-s pp-d${(i % 3) + 1}`}
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
              <span className="pp-eyebrow-text">Teknik Özellikler</span>
              <h2>Tam Spesifikasyon</h2>
              <p>
                Uygulama tipine göre ayarlanabilen parametrik yapı. Her ortamda
                güvenilir çalışma için tasarlandı.
              </p>
              {pdfHref && (
                <a
                  className="pp-btn-primary pp-specs-pdf"
                  href={pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PDF Datasheet
                </a>
              )}
            </div>
            <div className="pp-specs-grid pp pp-d2">
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

      {/* ── CTA + USE CASES ── */}
      <section className="pp-cta">
        <div className="pp-cta-inner">
          <div className="pp-cta-left pp pp-l">
            <h2>
              Projenize <em>başlayalım</em>
            </h2>
            <p>
              {model}'ü kurumunuza entegre etmek için ekibimizle iletişime
              geçin. Teknik destek ve kurulum desteği sağlıyoruz.
            </p>
            <div className="pp-cta-actions">
              {pdfHref && (
                <a
                  className="pp-cta-btn-primary"
                  href={pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Datasheet İndir
                </a>
              )}
              <button
                className="pp-cta-btn-ghost"
                onClick={() => router.push("/contact")}
              >
                İletişime Geç →
              </button>
            </div>
          </div>

          {useCases.length > 0 && (
            <div className="pp-cta-right pp pp-r pp-d2">
              <span className="pp-cta-right-label">Kullanım Alanları</span>
              {useCases.map((u) => (
                <div className="pp-usecase" key={u.title}>
                  <div className="pp-usecase-dot" />
                  <div>
                    <div className="pp-usecase-title">{u.title}</div>
                    <div className="pp-usecase-desc">{u.desc}</div>
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
