"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "../css/information.css";
import "../css/about.css";
const MILESTONES = [
  {
    year: "1996",
    title: "Kuruluş",
    desc: "AVES Elektronik, mühendislik amaçlı kuruldu. Henüz ülkemizde yaygın olmayan RFID teknolojisini ana çalışma konusu olarak belirledi.",
  },
  {
    year: "2000",
    title: "İlk Ürün",
    desc: "Yoğun AR-GE çalışmalarının meyvesi olarak C4128 Bekçi Tur Kontrol Sistemi hayata geçirildi ve üretime alındı.",
  },
  {
    year: "2005",
    title: "Geçiş Kontrol",
    desc: "Kartlı geçiş kontrol sistemlerine yoğunlaşıldı. Mifare tabanlı, şifreli ve güvenli kart altyapısı geliştirildi.",
  },
  {
    year: "2010",
    title: "POE Teknolojisi",
    desc: "Tek kablo üzerinden hem güç hem veri ileten POE kart okuyucu serisi geliştirildi. RC210 ve RC264 pazara sunuldu.",
  },
  {
    year: "2015",
    title: "Yazılım Hizmetleri",
    desc: "Donanım altyapısının yanına yazılım geliştirme hizmetleri eklendi. Web, mobil ve masaüstü çözümler sunulmaya başlandı.",
  },
  {
    year: "2024",
    title: "Bugün",
    desc: "2500'den fazla referans, 6 ürün kategorisi ve tam entegre yazılım-donanım ekosistemiyle sektörün öncü yerli üreticisiyiz.",
  },
];

const VALUES = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
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
    title: "Yerli Üretim",
    desc: "Tüm donanım ve yazılım çözümlerimiz yerli mühendisler tarafından, Türkiye'de tasarlanıp üretilmektedir.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Güvenlik Odaklı",
    desc: "Şifreli Mifare kartlar, Anti-Passback ve kurumsal güvenlik protokolleri — her üründe güvenlik önceliğimizdir.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "AR-GE Önceliği",
    desc: "Kuruluşumuzdan bu yana sürdürülen AR-GE faaliyetleri, ürünlerimizin teknolojik üstünlüğünün temelini oluşturur.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Kurumsal Deneyim",
    desc: "BTK, Milli Saraylar, Darphane ve 20'den fazla üniversite dahil 2500+ referansla kanıtlanmış kurumsal güven.",
  },
];

const STATS = [
  { num: "30", unit: "Yıl", label: "Sektör Tecrübesi" },
  { num: "2500", unit: "+", label: "Referans Kurulum" },
  { num: "6", unit: "", label: "Ürün Kategorisi" },
  { num: "100", unit: "%", label: "Yerli Üretim" },
];

export default function About() {
  const router = useRouter();
  const timelineRef = useRef(null);

  useEffect(() => {
    document.title = "Hakkımızda | AVES Elektronik";
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    const items = document.querySelectorAll(".about-anim");
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-left">
            <span className="about-eyebrow">Firma</span>
            <h1>
              30 yıllık
              <br />
              <span>sektörde uzmanlık</span>
            </h1>
            <p className="about-hero-desc">
              1996'dan beri yerli mühendislik, yerli üretim. Geçiş kontrolden
              yazılım geliştirmeye, donanımdan SDK'ya — tek çatı altında.
            </p>
          </div>
          <div className="about-hero-right">
            <div className="about-hero-cards">
              {[
                { label: "Kuruluş", val: "1996 — İstanbul" },
                { label: "Uzmanlık", val: "RFID Donanım & Yazılım" },
                { label: "Yetkinlik", val: "Yerli Üretici · Tam AR-GE" },
                { label: "Altyapı", val: "Tam Entegre Ekosistem" },
              ].map((c) => (
                <div className="about-hero-card" key={c.label}>
                  <div className="about-hero-card-dot" />
                  <div className="about-hero-card-text">
                    <strong>{c.label}</strong>&nbsp;&nbsp;{c.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="about-stats-strip">
        <div className="about-stats-inner">
          {STATS.map((s) => (
            <div className="about-stat" key={s.label}>
              <div className="about-stat-num">
                {s.num}
                <span className="about-stat-unit">{s.unit}</span>
              </div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* STORY / TIMELINE */}
      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-label about-anim">
            <span className="about-section-eyebrow">Tarihçemiz</span>
            <h2>
              Türkiye'de RFID'nin <em>öncüsü</em>
            </h2>
            <p>
              Sektörde henüz RFID bilinmiyorken başladık. Her adımda yeni bir
              ürün, her yılda yeni bir mühendislik çözümü. İşte hikayemiz.
            </p>
          </div>
          <div className="about-timeline" ref={timelineRef}>
            {MILESTONES.map((m, i) => (
              <div className="timeline-item about-anim" key={m.year}>
                <div className="timeline-dot" />
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-title">{m.title}</div>
                <div className="timeline-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-values-inner">
          <div className="about-values-header about-anim">
            <span className="about-section-eyebrow">Değerlerimiz</span>
            <h2>Neden AVES?</h2>
            <p>
              Teknolojiyi üretmek kadar, doğru teknolojiyi doğru şekilde üretmek
              de önemlidir.
            </p>
          </div>
          <div className="about-values-grid">
            {VALUES.map((v, i) => (
              <div
                className="about-value-card about-anim"
                key={v.title}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="about-value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <div className="about-anim">
            <h2>
              Projeniz için <em>doğru ortak</em>
            </h2>
            <p>
              İhtiyacınıza özel çözümler için ekibimizle iletişime geçin. Geçiş
              kontrolden yazılım geliştirmeye, her alanda yanınızdayız.
            </p>
            <div className="about-cta-btns">
              <button
                className="about-btn-primary"
                onClick={() => router.push("/contact")}
              >
                Bizimle İletişime Geçin
              </button>
              <button
                className="about-btn-ghost"
                onClick={() => router.push("/references")}
              >
                Referanslarımızı İnceleyin →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
