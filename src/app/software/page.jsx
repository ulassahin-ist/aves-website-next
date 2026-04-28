"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PageHero from "../components/PageHero";
import "../css/information.css";
import "../css/software.css";

const SERVICES = [
  {
    num: "01",
    title: "Web Uygulamaları",
    desc: "Kurumsal ihtiyaçlara özel, modern ve ölçeklenebilir web uygulamaları.",
    items: [
      {
        title: "Yönetim Panelleri",
        desc: "Veri görselleştirme, raporlama ve yönetim için tam özellikli admin panelleri.",
      },
      {
        title: "Kurumsal Portallar",
        desc: "İntranet, çalışan portalı, müşteri portalı gibi kurum içi web platformları.",
      },
      {
        title: "E-Ticaret & Katalog",
        desc: "Ürün kataloğu, sipariş yönetimi ve müşteri self-servis platformları.",
      },
      {
        title: "SaaS Platformlar",
        desc: "Abonelik bazlı, çok kiracılı yazılım hizmetleri ve bulut uygulamaları.",
      },
    ],
  },
  {
    num: "02",
    title: "Mobil Uygulamalar",
    desc: "iOS ve Android platformları için native ve cross-platform mobil çözümler.",
    items: [
      {
        title: "iOS & Android Uygulamaları",
        desc: "NFC, barkod, kamera gibi donanım özelliklerini kullanan, iOS ve Android platformlarında çalışan özelleştirilmiş mobil uygulamalar.",
      },
      {
        title: "El Terminali Yazılımları",
        desc: "Endüstriyel mobil terminaller için saha operasyon ve envanter yazılımları.",
      },
      {
        title: "Mobil Raporlama",
        desc: "Gerçek zamanlı veri takibi, bildirim ve raporlama uygulamaları.",
      },
      {
        title: "Kiosk Yazılımları",
        desc: "Dokunmatik ekran kiosk sistemleri için özelleştirilmiş arayüz ve uygulama yazılımı.",
      },
    ],
  },
  {
    num: "03",
    title: "Masaüstü & DLL",
    desc: "Windows platformu için güçlü masaüstü yazılımları ve entegre kütüphaneler.",
    items: [
      {
        title: "Windows Uygulamaları",
        desc: "Kurumsal iş süreçleri için Windows masaüstü ve WPF uygulamaları.",
      },
      {
        title: "SDK & DLL Geliştirme",
        desc: "Donanım entegrasyonu, protokol implementasyonu ve üçüncü taraf entegrasyon kütüphaneleri.",
      },
      {
        title: "Servis & Daemon",
        desc: "Arka planda çalışan Windows servisleri, zamanlayıcılar ve izleme araçları.",
      },
      {
        title: "Donanım Yazılımı",
        desc: "Cihaz sürücüleri, firmware arayüzleri ve donanım iletişim katmanları.",
      },
    ],
  },
  {
    num: "04",
    title: "Web Servisleri & API",
    desc: "Sistemler arası entegrasyon için güçlü ve güvenli API altyapıları.",
    items: [
      {
        title: "REST API Geliştirme",
        desc: "Belgelenmiş, versiyonlanmış ve güvenli REST API servisleri.",
      },
      {
        title: "Gerçek Zamanlı Sistemler",
        desc: "WebSocket tabanlı anlık bildirim, takip ve veri akışı servisleri.",
      },
      {
        title: "Sistem Entegrasyonu",
        desc: "ERP, CRM veya mevcut yazılım altyapılarıyla entegrasyon bağlantıları.",
      },
      {
        title: "Veritabanı Tasarımı",
        desc: "Kurumsal ölçekte ilişkisel ve NoSQL veritabanı modelleme ve yönetimi.",
      },
    ],
  },
];

const SW_CARDS = [
  {
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
    num: "01",
    title: "Web Uygulamaları",
    desc: "Admin paneller, kurumsal portallar, SaaS platformlar.",
    tags: ["React", "Vue", "Node.js"],
  },
  {
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
    num: "02",
    title: "Mobil Uygulamalar",
    desc: "iOS, Android, el terminali ve kiosk sistemleri için mobil uygulamalar.",
    tags: ["iOS", "Android", "NFC"],
  },
  {
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
    num: "03",
    title: "Masaüstü & DLL",
    desc: "Windows uygulamaları, SDK geliştirme ve donanım entegrasyonu.",
    tags: ["Windows", "DLL", "SDK"],
  },
  {
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
    num: "04",
    title: "Web Servisleri & API",
    desc: "REST API, WebSocket, sistem entegrasyonu ve veritabanı tasarımı.",
    tags: ["REST", "WebSocket", "SQL"],
  },
  {
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
    num: "05",
    title: "RFID Entegrasyon",
    desc: "Geçiş kontrol, puantaj, yemekhane ve ziyaretçi yazılım paketleri.",
    tags: ["RFID", "AVES SDK", "Mifare"],
  },
  {
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
    num: "06",
    title: "Özel Çözümler",
    desc: "Sektörden bağımsız kurumsal yazılım projeleri ve danışmanlık.",
    tags: ["Kurumsal", "Danışmanlık", "Özel"],
  },
];

export default function Software() {
  const router = useRouter();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("sw-in"),
        ),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".sw-anim").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <PageHero
        eyebrow="Yazılım Geliştirme"
        title="Donanımın ötesinde"
        description="Web uygulamaları, mobil uygulamalar, masaüstü yazılımlar, API'lar ve SDK'lar — ürünlerimizle ilgili veya tamamen bağımsız her türlü yazılım projesinde yanınızdayız."
        em="yazılım"
      />

      {/* Intro strip */}
      <div className="sw-intro">
        <div className="sw-intro-inner">
          <div className="sw-anim sw-anim-l">
            <span>Neden AVES Yazılım?</span>
            <p>
              1996'dan beri donanım geliştiren bir mühendislik firması olarak,
              yazılımı da aynı titizlikle üretiyoruz. Sistemlerimiz için
              geliştirdiğimiz yazılım altyapısını artık kurumsal müşterilere
              açık hizmet olarak sunuyoruz.
            </p>
          </div>
          <div className="sw-intro-right sw-anim sw-anim-r sw-d1">
            {[
              { num: "30", label: "Yıllık mühendislik deneyimi" },
              { num: "2500+", label: "Referans kurumda çalışan yazılım" },
              { num: "6", label: "Farklı yazılım hizmet kategorisi" },
              { num: "TR", label: "Yerli üretim, tam kaynak kodu sahipliği" },
            ].map((s) => (
              <div className="sw-stat" key={s.label}>
                <div className="sw-stat-num">{s.num}</div>
                <div className="sw-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service cards overview */}
      <section className="sw-categories">
        <div className="sw-categories-inner">
          <div className="sw-categories-header sw-anim">
            <span>Hizmet Kategorileri</span>
            <h2>Ne geliştiriyoruz?</h2>
            <p>
              Ürünlerimizle bağlantılı veya tamamen bağımsız — her türlü yazılım
              projesinde ekibinizin yanındayız.
            </p>
          </div>
          <div className="sw-categories-grid">
            {SW_CARDS.map((card, i) => (
              <div
                className={`sw-detail-card sw-anim sw-d${(i % 3) + 1}`}
                key={card.num}
              >
                <div>{card.icon}</div>
                <span className="sw-card-num">{card.num}</span>
                <h4>{card.title}</h4>
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
        </div>
      </section>

      {/* Detailed service rows */}
      <div className="sw-services">
        <div className="sw-services-header">
          <h2>Hizmet detayları</h2>
          <p>
            Her kategoride neler yapabileceğimizi ve nasıl çalıştığımızı
            inceleyin.
          </p>
        </div>

        {SERVICES.map((svc, i) => (
          <div
            className={`sw-service-row sw-anim sw-d${(i % 2) + 1}`}
            key={svc.num}
          >
            <div className="sw-service-label">
              <div className="sw-service-label-num">{svc.num}</div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
            <div className="sw-service-detail-cards">
              {svc.items.map((item) => (
                <div className="sw-detail-card" key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA band */}
      <div className="sw-cta-band">
        <div className="sw-cta-band-inner sw-anim">
          <h2>
            Projenizi birlikte <em>hayata geçirelim</em>
          </h2>
          <p>
            Fikrinizi veya ihtiyacınızı anlatın — size en uygun çözümü
            tasarlayalım.
          </p>
          <div className="sw-cta-buttons">
            <a
              className="sw-btn-primary"
              onClick={() => router.push("/contact")}
            >
              İletişime Geçin
            </a>
            <a
              className="sw-btn-ghost"
              onClick={() => router.push("/download")}
            >
              SDK & Dokümanlar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
