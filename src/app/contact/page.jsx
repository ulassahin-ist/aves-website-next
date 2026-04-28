"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    document.body.classList.add("contact-page");
    return () => document.body.classList.remove("contact-page");
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("ct-in"),
        ),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".ct").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const copy = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="ct-hero">
        <div className="ct-hero-inner">
          <span className="ct-hero-label">İletişim</span>
          <h1>Bize ulaşın</h1>
          <p className="ct-hero-desc">
            Teknik destek, teklif veya genel sorularınız için 1996'dan beri aynı
            adresdeyiz.
          </p>
        </div>
      </section>
      <div className="ct-rule" />

      {/* ── MAIN ── */}
      <section className="ct-main">
        <div className="ct-main-inner">
          {/* Left: contact channels */}
          <div className="ct-channels ct ct-d1">
            <div className="ct-channel">
              <span className="ct-channel-label">Telefon</span>
              <a className="ct-channel-value" href="tel:+902122617652">
                +90 212 261 76 52
              </a>
              <span className="ct-channel-sub">Pzt–Cum, 09:00–18:00</span>
              <button
                className="ct-copy-btn"
                onClick={() => copy("+902122617652", "phone")}
              >
                {copied === "phone" ? (
                  <>
                    <svg
                      className="ct-copied"
                      width="13"
                      height="13"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="#4ade80"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Kopyalandı
                  </>
                ) : (
                  <>
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Kopyala
                  </>
                )}
              </button>
            </div>

            <div className="ct-channel">
              <span className="ct-channel-label">E-Posta</span>
              <a
                className="ct-channel-value"
                href="mailto:info@aveselektronik.com"
              >
                info@aveselektronik.com
              </a>
              <span className="ct-channel-sub">Genellikle aynı gün yanıt</span>
              <button
                className="ct-copy-btn"
                onClick={() => copy("info@aveselektronik.com", "email")}
              >
                {copied === "email" ? (
                  <>
                    <svg
                      className="ct-copied"
                      width="13"
                      height="13"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M20 6L9 17l-5-5"
                        stroke="#4ade80"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Kopyalandı
                  </>
                ) : (
                  <>
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Kopyala
                  </>
                )}
              </button>
            </div>

            <div className="ct-channel">
              <span className="ct-channel-label">Adres</span>
              <span className="ct-channel-value" style={{ cursor: "default" }}>
                Maslak 1453 Sitesi
                <br />
                T4A Blok No:236
              </span>
              <span className="ct-channel-sub">Sarıyer / İstanbul</span>
              <a
                className="ct-copy-btn"
                href="https://maps.google.com/?q=Maslak+1453+Sitesi+T4A+Blok+No:236+Sarıyer+İstanbul"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Haritada Aç
              </a>
            </div>
          </div>

          {/* Right: firm info + map */}
          <div className="ct-info-col ct ct-d2">
            <div className="ct-info-block">
              <span className="ct-info-block-label">Firma Bilgileri</span>
              <div className="ct-info-rows">
                {[
                  { k: "Ünvan", v: "AVES Elektronik San. ve Tic. Ltd. Şti." },
                  { k: "Ticaret Sicil", v: "341651" },
                  { k: "Mersis No", v: "0770006446400019" },
                  { k: "Kuruluş", v: "1996" },
                  { k: "Çalışma Saatleri", v: "Pzt–Cum 09:00–18:00" },
                ].map((row) => (
                  <div className="ct-info-row" key={row.k}>
                    <span className="ct-info-key">{row.k}</span>
                    <span className="ct-info-val">{row.v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="ct-map-thumb">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.7415957294493!2d29.006328876491196!3d41.11833421264019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5b853cf53eb%3A0xc0aaaaec3b0e6733!2sMaslak%2C%20Maslak%201453%20Cd%2C%2034485%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1673290579512!5m2!1sen!2str"
                title="AVES Elektronik Konum"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="ct-map-link">
                <a
                  href="https://maps.google.com/?q=Maslak+1453+Sitesi+T4A+Blok+No:236+Sarıyer+İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps'te aç →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM STRIP ── */}
      <div className="ct-bottom">
        <div className="ct-bottom-inner">
          <p className="ct-bottom-text">
            <strong>Teklif veya teknik destek mi arıyorsunuz?</strong>
            <br />
            Ekibimiz iş günlerinde kısa sürede dönüş yapar.
          </p>
          <div className="ct-bottom-actions">
            <a className="ct-btn-primary" href="mailto:info@aveselektronik.com">
              Mail Gönderin
            </a>
            <a className="ct-btn-ghost" href="tel:+902122617652">
              Hemen Arayın
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
