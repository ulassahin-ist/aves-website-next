"use client";
import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MessageCircle, ChevronDown } from "lucide-react";

export default function Layout({ children }) {
  const router = useRouter();
  const pathname = usePathname(); // this is just a string, e.g. "/products/rc210"

  const toggleRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Toggle + scroll handler — runs once on mount
  useEffect(() => {
    const toggle = toggleRef.current;
    const menu = mobileMenuRef.current;
    if (!toggle || !menu) return;

    const handleToggle = () => {
      const isOpen = toggle.classList.toggle("open");
      menu.classList.toggle("slideIn");
      document.body.classList.toggle("no-scroll", isOpen);
    };
    toggle.addEventListener("click", handleToggle);

    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) header.classList.toggle("scrolled", window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      toggle.removeEventListener("click", handleToggle);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Reset menu + scroll to top on every route change
  // FIX: was [location.pathname] — location is a string in Next.js, not an object
  useEffect(() => {
    toggleRef.current?.classList.remove("open");
    mobileMenuRef.current?.classList.remove("slideIn");
    document.body.classList.remove("no-scroll");
    window.scrollTo(0, 0);
  }, [pathname]); // <-- just `pathname`, not `pathname.pathname`

  const go = (path) => router.push(path);

  return (
    <>
      <div className="topbar">
        <span className="topbar_text">
          Yerli donanım, yerli yazılım — Tüm cihazlar için SDK desteği
        </span>
        <a className="topbar_cta" onClick={() => go("/download")}>
          İNDİRME SAYFASI
        </a>
      </div>

      <header id="header">
        <div className="c_header">
          <div className="logo">
            <img
              onClick={() => go("/")}
              src="/images/aves-logo.png"
              alt="AVES Elektronik"
            />
            <div className="companyName">
              <MessageCircle size={18} color="#fffbc894" />
              &nbsp; Bize Yazın
            </div>
          </div>

          <nav className="desktop_menu">
            <ul>
              <li className="has_submenu">
                <a onClick={() => go("/")}>
                  Anasayfa{" "}
                  <ChevronDown className="arr" size={16} strokeWidth={3} />
                </a>
                <ul>
                  <li>
                    <a onClick={() => go("/about")}>Hakkımızda</a>
                  </li>
                  <li>
                    <a onClick={() => go("/references")}>Referanslar</a>
                  </li>
                </ul>
              </li>
              <li className="has_submenu">
                <a onClick={() => go("/products")}>
                  Ürünler{" "}
                  <ChevronDown className="arr" size={16} strokeWidth={3} />
                </a>
                <ul>
                  <li>
                    <a onClick={() => go("/products/rc210")}>
                      RC210 Akıllı POE Okuyucu
                    </a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/rc264")}>
                      RC264 Akıllı POE Okuyucu
                    </a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/rc1s")}>
                      RC1s Standalone Kart Okuyucu
                    </a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/rcp8")}>
                      RCP8 Geçiş Kontrol Paneli
                    </a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/rc1")}>RC1 Panel Okuyucu</a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/rc206")}>
                      RC206 USB Okuyucu
                    </a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/android")}>
                      Android El Terminali
                    </a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/c4128")}>
                      Bekçi Tur Kontrol Sistemi
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a onClick={() => go("/software")}>Yazılım</a>
              </li>
              <li>
                <a onClick={() => go("/download")}>Download</a>
              </li>
              <li className="nav_cta">
                <a onClick={() => go("/contact")}>İletişim</a>
              </li>
            </ul>
          </nav>

          <nav className="mobile_menu" ref={mobileMenuRef}>
            <ul>
              <li className="has_mobile_submenu mobile_item">
                <a>Anasayfa</a>
                <ul>
                  <li>
                    <a onClick={() => go("/about")}>Hakkımızda</a>
                  </li>
                  <li>
                    <a onClick={() => go("/references")}>Referanslar</a>
                  </li>
                </ul>
              </li>
              <li className="has_mobile_submenu mobile_item">
                <a>Ürünler</a>
                <ul>
                  <li>
                    <a onClick={() => go("/products/rc210")}>
                      RC210 Akıllı POE Okuyucu
                    </a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/rc264")}>
                      RC264 Akıllı POE Okuyucu
                    </a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/rc1s")}>
                      RC1s Standalone Kart Okuyucu
                    </a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/rcp8")}>
                      RCP8 Geçiş Kontrol Paneli
                    </a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/rc1")}>RC1 Panel Okuyucu</a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/rc206")}>
                      RC206 USB Okuyucu
                    </a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/android")}>
                      Android El Terminali
                    </a>
                  </li>
                  <li>
                    <a onClick={() => go("/products/c4128")}>
                      Bekçi Tur Kontrol Sistemi
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mobile_item">
                <a onClick={() => go("/download")}>Download</a>
              </li>
              <li className="mobile_item">
                <a onClick={() => go("/contact")}>İletişim</a>
              </li>
            </ul>
          </nav>

          <div className="toggle_menu" ref={toggleRef}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <main className="main">{children}</main>

      <footer>
        <div className="footer_menu">
          <div className="menu_column">
            <div className="logo" onClick={() => go("/")}>
              <img src="/images/aves-logo.png" alt="AVES Elektronik" />
            </div>
            <p>1996'dan beri yerli geçiş ve kredi sistemi çözümleri.</p>
          </div>
          <div className="menu_column">
            <span className="footer_col_heading">Hızlı Erişim</span>
            <a onClick={() => go("/")}>Ana Sayfa</a>
            <a onClick={() => go("/about")}>Hakkımızda</a>
            <a onClick={() => go("/references")}>Referanslar</a>
            <a onClick={() => go("/software")}>Yazılım Hizmetleri</a>
            <a onClick={() => go("/download")}>Download</a>
            <a onClick={() => go("/contact")}>İletişim</a>
          </div>
          <div className="menu_column">
            <span className="footer_col_heading">Ürünler</span>
            <a onClick={() => go("/products/rc210")}>
              Akıllı POE Kart Okuyucular
            </a>
            <a onClick={() => go("/products/rcp8")}>Panelli Geçiş Kontrol</a>
            <a onClick={() => go("/products/rc1s")}>Standalone Kart Okuyucu</a>
            <a onClick={() => go("/products/rc206")}>USB Kart Okuyucu</a>
            <a onClick={() => go("/products/android")}>
              Android Mobil Cihazlar
            </a>
            <a onClick={() => go("/products/c4128")}>Bekçi Tur Kontrol</a>
          </div>
          <div className="menu_column">
            <span className="footer_col_heading">İletişim</span>
            <a href="tel:+902122617652">+90 212 261 76 52</a>
            <a href="mailto:info@aveselektronik.com">info@aveselektronik.com</a>
            <p>
              Maslak 1453 Sitesi T4A Blok No:236
              <br />
              Sarıyer / İSTANBUL
            </p>
          </div>
        </div>
        <div className="footer_bottom">
          <span className="footer_copyright">
            © {new Date().getFullYear()} AVES Elektronik Sanayi ve Ticaret Ltd.
            Şti.
          </span>
        </div>
      </footer>

      <div
        className="elfsight-app-a8bc2437-4c16-4fd2-ba95-511efd32dc6a"
        data-elfsight-app-lazy
      ></div>
    </>
  );
}
