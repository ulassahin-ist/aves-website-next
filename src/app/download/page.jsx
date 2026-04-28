"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../css/download.css";

const DOWNLOAD_GROUPS = [
  {
    id: "all",
    label: "Tümü",
    color: "#64748b",
    colorBg: "rgba(100,116,139,0.1)",
    colorBorder: "rgba(100,116,139,0.25)",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          d="M4 6h16M4 12h16M4 18h16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      {
        href: "/d_files/_RC2XX_.zip",
        label: "RC Geçiş Kontrol Sistemi",
        sub: "Windows · Kurulum paketi",
        ext: "ZIP",
        target: "_self",
      },
      {
        href: "/d_files/C4128.zip",
        label: "C4128 Bekçi Tur Kontrol",
        sub: "Windows · Kurulum paketi",
        ext: "ZIP",
        target: "_self",
      },
      {
        href: "/d_files/USBdriver.zip",
        label: "C4128 USB Sürücü",
        sub: "32bit · 64bit — 01.01.2016 öncesi cihazlar için",
        ext: "ZIP",
        target: "_self",
      },
      {
        href: "/d_files/RC264.pdf",
        label: "RC264 Datasheet",
        sub: "POE · OLED · 2× RS232",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/RC210.pdf",
        label: "RC210 Datasheet",
        sub: "POE · Kompakt",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/RCpanel.pdf",
        label: "RC1 & RCP8 Datasheet",
        sub: "Panel · RS485 · 8 Okuyucu",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/RC1s.pdf",
        label: "RC1s Datasheet",
        sub: "Standalone · IP67 · 5.840 kart",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/RC206.pdf",
        label: "RC206 Datasheet",
        sub: "USB 2.0 · OLED · 1 Röle",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/RC295.pdf",
        label: "RC295 Datasheet",
        sub: "Teknik özellikler",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/C4128.pdf",
        label: "C4128 Datasheet",
        sub: "IP67 · Li-Ion · Proximity",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/ConnSchema.pdf",
        label: "Bağlantı Şeması",
        sub: "Kartlı geçiş sistemi — tüm modeller",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/images/CE.png",
        label: "CE Belgesi",
        sub: "Uygunluk belgesi",
        ext: "PNG",
        target: "_blank",
      },
    ],
  },
  {
    id: "software",
    label: "Yazılım",
    color: "#6366f1",
    colorBg: "rgba(99,102,241,0.1)",
    colorBorder: "rgba(99,102,241,0.25)",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8 21h8M12 17v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      {
        href: "/d_files/_RC2XX_.zip",
        label: "RC Geçiş Kontrol Sistemi",
        sub: "Windows · Kurulum paketi",
        ext: "ZIP",
        target: "_self",
      },
      {
        href: "/d_files/C4128.zip",
        label: "C4128 Bekçi Tur Kontrol",
        sub: "Windows · Kurulum paketi",
        ext: "ZIP",
        target: "_self",
      },
    ],
  },
  {
    id: "datasheets",
    label: "Datasheet",
    color: "#22d3ee",
    colorBg: "rgba(34,211,238,0.1)",
    colorBorder: "rgba(34,211,238,0.25)",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <polyline
          points="14 2 14 8 20 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line
          x1="8"
          y1="13"
          x2="16"
          y2="13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="17"
          x2="16"
          y2="17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      {
        href: "/d_files/RC264.pdf",
        label: "RC264 Datasheet",
        sub: "POE · OLED · 2× RS232",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/RC210.pdf",
        label: "RC210 Datasheet",
        sub: "POE · Kompakt",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/RCpanel.pdf",
        label: "RC1 & RCP8 Datasheet",
        sub: "Panel · RS485 · 8 Okuyucu",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/RC1s.pdf",
        label: "RC1s Datasheet",
        sub: "Standalone · IP67 · 5.840 kart",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/RC206.pdf",
        label: "RC206 Datasheet",
        sub: "USB 2.0 · OLED · 1 Röle",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/RC295.pdf",
        label: "RC295 Datasheet",
        sub: "Teknik özellikler",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/d_files/C4128.pdf",
        label: "C4128 Datasheet",
        sub: "IP67 · Li-Ion · Proximity",
        ext: "PDF",
        target: "_blank",
      },
    ],
  },
  {
    id: "docs",
    label: "Döküman",
    color: "#f59e0b",
    colorBg: "rgba(245,158,11,0.1)",
    colorBorder: "rgba(245,158,11,0.25)",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    items: [
      {
        href: "/d_files/ConnSchema.pdf",
        label: "Bağlantı Şeması",
        sub: "Kartlı geçiş sistemi — tüm modeller",
        ext: "PDF",
        target: "_blank",
      },
      {
        href: "/images/CE.png",
        label: "CE Belgesi",
        sub: "Uygunluk belgesi",
        ext: "PNG",
        target: "_blank",
      },
    ],
  },
  {
    id: "drivers",
    label: "Sürücü",
    color: "#10b981",
    colorBg: "rgba(16,185,129,0.1)",
    colorBorder: "rgba(16,185,129,0.25)",
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
        <path
          d="M4 15v4a2 2 0 002 2h12a2 2 0 002-2v-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7 10l5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15V3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    items: [
      {
        href: "/d_files/USBdriver.zip",
        label: "C4128 USB Sürücü",
        sub: "32bit · 64bit — 01.01.2016 öncesi cihazlar için",
        ext: "ZIP",
        target: "_self",
      },
    ],
  },
];

const EXT_COLORS = {
  ZIP: {
    bg: "rgba(99,102,241,0.08)",
    text: "#818cf8",
    border: "rgba(99,102,241,0.18)",
  },
  PDF: {
    bg: "rgba(239,68,68,0.07)",
    text: "#f87171",
    border: "rgba(239,68,68,0.16)",
  },
  PNG: {
    bg: "rgba(34,211,238,0.07)",
    text: "#22d3ee",
    border: "rgba(34,211,238,0.16)",
  },
};

export default function Download() {
  const router = useRouter();
  const [activeGroup, setActiveGroup] = useState("software");

  useEffect(() => {
    document.body.classList.add("download-page");
    return () => document.body.classList.remove("download-page");
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("dl-in"),
        ),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".dl-anim").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const currentGroup = DOWNLOAD_GROUPS.find((g) => g.id === activeGroup);

  return (
    <>
      {/* HERO */}
      <section className="dl-hero">
        <div className="dl-hero-inner">
          <div className="dl-eyebrow">
            <span className="dl-eyebrow-dot" />
            Kaynaklar
          </div>
          <h1>
            Yazılım & <span>Dökümanlar</span>
          </h1>
          <p className="dl-hero-desc">
            RC serisi yazılımları, datasheetler ve teknik dökümanlar — tek
            sayfada.
          </p>
        </div>
      </section>
      <div className="dl-hero-rule" />

      {/* BODY */}
      <div className="dl-body">
        <div className="dl-body-inner">
          {/* Sidebar */}
          <div className="dl-sidebar dl-anim">
            <span className="dl-sidebar-label">Kategoriler</span>
            <div className="dl-nav">
              {DOWNLOAD_GROUPS.map((g) => (
                <button
                  key={g.id}
                  className={`dl-nav-btn ${activeGroup === g.id ? "active" : ""}`}
                  onClick={() => setActiveGroup(g.id)}
                >
                  <div
                    className="dl-nav-icon"
                    style={{
                      background:
                        activeGroup === g.id ? g.colorBg : "rgba(0,0,0,0.04)",
                      border: `1px solid ${activeGroup === g.id ? g.colorBorder : "transparent"}`,
                      color: activeGroup === g.id ? g.color : "var(--muted)",
                    }}
                  >
                    {g.icon}
                  </div>
                  <span className="dl-nav-label">{g.label}</span>
                  <span className="dl-nav-count">{g.items.length}</span>
                </button>
              ))}
            </div>
          </div>

          {/* key={activeGroup} forces full remount → animations replay on every tab switch */}
          <div key={activeGroup}>
            <div className="dl-panel-header">
              <div
                className="dl-panel-icon"
                style={{
                  background: currentGroup.colorBg,
                  border: `1px solid ${currentGroup.colorBorder}`,
                  color: currentGroup.color,
                }}
              >
                {currentGroup.icon}
              </div>
              <div>
                <div className="dl-panel-title">{currentGroup.label}</div>
                <div className="dl-panel-sub">
                  {currentGroup.items.length} dosya
                </div>
              </div>
            </div>

            <div className="dl-list">
              {currentGroup.items.map((item, i) => {
                const ext = EXT_COLORS[item.ext] || EXT_COLORS.PDF;
                return (
                  <a
                    key={item.href}
                    className="dl-card"
                    href={item.href}
                    target={item.target}
                    rel={
                      item.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    style={{
                      "--card-color": currentGroup.color,
                      "--card-border": currentGroup.colorBorder,
                      animationDelay: `${i * 0.04}s`,
                    }}
                  >
                    <div
                      className="dl-card-icon"
                      style={{
                        background: currentGroup.colorBg,
                        border: `1px solid ${currentGroup.colorBorder}`,
                        color: currentGroup.color,
                      }}
                    >
                      {currentGroup.icon}
                    </div>
                    <div className="dl-card-body">
                      <div className="dl-card-label">{item.label}</div>
                      <div className="dl-card-sub">{item.sub}</div>
                    </div>
                    <div className="dl-card-right">
                      <span
                        className="dl-ext-badge"
                        style={{
                          background: ext.bg,
                          color: ext.text,
                          border: `1px solid ${ext.border}`,
                        }}
                      >
                        {item.ext}
                      </span>
                      <div className="dl-arrow">
                        <svg
                          width="13"
                          height="13"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="dl-cta">
        <div className="dl-cta-inner">
          <div>
            <h2>
              SDK ve <em>entegrasyon</em> desteği
            </h2>
            <p>
              Tüm cihazlarımız için DLL ve REST API desteği mevcuttur.
              Sisteminize entegrasyon için ekibimizle iletişime geçin.
            </p>
          </div>
          <div className="dl-cta-actions">
            <button
              className="dl-btn-primary"
              onClick={() => router.push("/contact")}
            >
              İletişime Geçin
            </button>
            <button
              className="dl-btn-ghost"
              onClick={() => router.push("/software")}
            >
              Yazılım Hizmetleri →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
