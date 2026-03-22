import { LitElement, html, unsafeCSS, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './styles-desktop.css?raw';

@customElement('page-desktop')
export class PageDesktop extends LitElement {
  @property()
  name?: string = 'page-desktop';

  render(): TemplateResult {
    return html`
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <div class="body">

        <!-- ── TOP NAV BAR ── -->
        <header class="top-nav">

          <!-- Row 1: Brand -->
          <div class="top-nav__brand-row">
            <h1 class="top-nav__brand">VENTO</h1>
          </div>

          <!-- Row 2: Links + Search + Utilities -->
          <div class="top-nav__controls-row">
            <nav>
              <ul class="top-nav__links">
                <li><a class="top-nav__link" href="#">Handbags</a></li>
                <li><a class="top-nav__link" href="#">Travel</a></li>
                <li><a class="top-nav__link" href="#">Accessories</a></li>
              </ul>
            </nav>

            <div class="top-nav__search">
              <div class="top-nav__search-inner">
                <span class="material-symbols-outlined top-nav__search-icon">search</span>
                <input class="top-nav__search-input" type="text" placeholder="Explore the collection..." />
              </div>
            </div>

            <div class="top-nav__utilities">
              <a class="top-nav__login" href="#">INICIAR SESIÓN</a>
              <div class="top-nav__icons">
                <span class="material-symbols-outlined top-nav__icon">person</span>
                <span class="material-symbols-outlined top-nav__icon">shopping_bag</span>
              </div>
            </div>
          </div>

        </header>

        <!-- ── PAGE LAYOUT ── -->
        <div class="page-layout">

          <!-- ── SIDEBAR ── -->
          <aside class="sidebar">

            <!-- Filter -->
            <div>
              <h3 class="sidebar__filter-title">Filter by</h3>
              <span class="sidebar__filter-subtitle">Refine your selection</span>
              <ul class="sidebar__nav">
                <li class="sidebar__nav-item sidebar__nav-item--active">
                  <span class="material-symbols-outlined sidebar__nav-icon">grid_view</span>
                  <span class="sidebar__nav-label">All Collections</span>
                </li>
                <li class="sidebar__nav-item sidebar__nav-item--inactive">
                  <span class="material-symbols-outlined sidebar__nav-icon">auto_awesome</span>
                  <span class="sidebar__nav-label">New Arrivals</span>
                </li>
                <li class="sidebar__nav-item sidebar__nav-item--inactive">
                  <span class="material-symbols-outlined sidebar__nav-icon">layers</span>
                  <span class="sidebar__nav-label">Signature Leather</span>
                </li>
                <li class="sidebar__nav-item sidebar__nav-item--inactive">
                  <span class="material-symbols-outlined sidebar__nav-icon">texture</span>
                  <span class="sidebar__nav-label">Exotic Skins</span>
                </li>
                <li class="sidebar__nav-item sidebar__nav-item--inactive">
                  <span class="material-symbols-outlined sidebar__nav-icon">auto_fix_high</span>
                  <span class="sidebar__nav-label">Care &amp; Repair</span>
                </li>
              </ul>
            </div>

            <!-- Categories -->
            <div class="sidebar__categories">
              <h3 class="sidebar__categories-title">Categories</h3>
              <ul class="sidebar__categories-list">
                <li class="sidebar__category-item">Totes</li>
                <li class="sidebar__category-item">Handbags</li>
                <li class="sidebar__category-item">Accessories</li>
                <li class="sidebar__category-item">Collections</li>
              </ul>
            </div>

          </aside>

          <!-- ── MAIN CONTENT ── -->
          <main class="main-content">

            <!-- Hero Banner -->
            <section class="hero">
              <img class="hero__img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9b-8lBfwKtsNZTeafkRgOTY9lQqngosUCocFkLK0eEt5lByfuZuzkYg7oZFv4Xc1KkfrSoVGWh0L5Qa83pRg5AFrFG6_8ZrazhumCy4qzAPwuhzzIXY3JgK7SFHzSbehppIMemqyz6S4uJXCjB09AZb5AUzootCNsadCo_1IMlFjPg_Ff4f4v21f1EGNT9Cmu_JhY5xU_-bB6f_4P5R8XV6uZPpvjHTJBBEupkwQd-4zVg34yCwFitNmkOWoKznEIu6Jr-MOY8qw"
                alt="Luxury minimalist handbag in an editorial studio setting" />
              <div class="hero__overlay"></div>
              <div class="hero__content">
                <h2 class="hero__title">La Colección Atemporal</h2>
                <p class="hero__subtitle">Crafted for the enduring spirit</p>
                <button class="hero__cta">Explore Heritage</button>
              </div>
            </section>

            <!-- Product Grid -->
            <section class="product-section">
              <div class="product-grid">

                <!-- Product 1 -->
                <article class="product-card">
                  <div class="product-card__image-wrap">
                    <img class="product-card__img"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Wcr-JdwPn1TSJNjeW9gVRyqkxZW9PnheYzzJXFon6_dvREwJWLwnkdnG4Bqd62BFfRF97eugcfxUnerL2y_Q1k6ogC-TJnDERSMXsKYre1cLkMplmrBdPK9MlZ2hb054MW7d8JKq9KoZQwy5fgMv4ryUByrZUcpknAlbLFC77KVX2-zF75tidpOaqcUsti40ekYCsgIJlZ6YI492bl1AOSGiJkGreLs4hBOmM-gbRC-TniYAwasWCrrwbKbOBQybQew2UyBqEWM"
                      alt="Deep brown artisan leather tote bag" />
                  </div>
                  <h4 class="product-card__name">Artisan Tote</h4>
                  <p class="product-card__material">Cognac Grain Leather</p>
                  <p class="product-card__price">$1,250</p>
                </article>

                <!-- Product 2 (offset-md) -->
                <article class="product-card product-card--offset-md">
                  <div class="product-card__image-wrap">
                    <img class="product-card__img"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdKt96hYU08xT2esRrla0hfxe0gius-BfTX4IOFUazF54r7VriluWeNvAqWruL6J4i9HqznZeThuSX7zTOtojDSNjPI2-_qsRcZ3ynHRd2DpL3tj3B0ig9x5_7JioNs4QFRZBQt8IuhEmjKtAETWuy8J4A157s9BfwBqASiOp-oxtR_-A1RUZkA-HkM70rK1pNE-UjzkwdSnmKLHE6bOR-2-T5B4zVxbBZegQFpusQxofQIIwfmD3ofkqWV7Fvm1y5eiZx5VuQRZ0"
                      alt="Small structured leather handbag in cream" />
                  </div>
                  <h4 class="product-card__name">Leather Mini</h4>
                  <p class="product-card__material">Ivory Smooth Calf</p>
                  <p class="product-card__price">$890</p>
                </article>

                <!-- Product 3 -->
                <article class="product-card">
                  <div class="product-card__image-wrap">
                    <img class="product-card__img"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmnXwH2ZeOOAN-y3akc2Jj5N0AQgUVj72oSQf-nQT7Lch8JL0x5ge0p7UYIIT_KadqnJ0nFkzLOxB7kg-v9doADVTQlZFsFqm5dpjFiB7mP5ST-ClxLPuTUOh8Tpgk2YJNqAbwrN_Ew6Pu_GKqk6oLltNXP9WmHia6a4uBP6tt31klBgRui40DBBswb3Vh4oLgLCCfaUw1G99La6pHQ764-nPY0U8biXudNVTb6_ElXBh5sgqG1i9--wmg2xNiBHx6nJl5u2TdUKk"
                      alt="Sleek black evening clutch with gold hardware" />
                  </div>
                  <h4 class="product-card__name">Midnight Clasp</h4>
                  <p class="product-card__material">Obsidian Saffiano</p>
                  <p class="product-card__price">$1,100</p>
                </article>

                <!-- Product 4 (offset-lg) -->
                <article class="product-card product-card--offset-lg">
                  <div class="product-card__image-wrap">
                    <img class="product-card__img"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcaLnrToXAfAdYSF4cuKMq6859jLyAUQY2-R1WChZoTFh2C1aAGJzCExxpceu7SfZQObwxnF49HOBE2NeD49fcXT8oqWTVU6_liHZ6KhXH7L_Jssc6Dsj9quLeJA0k9ENT3PEJFF_MQWor6_RzNYyKXBAWEpuck-oI3A9yu8aQBqP3JI546z_ZasrlFBgTYSh_WLaBu_upuFMEnaratz-rgK87CaYlloIpKseF7lY4hIgGrVjJwGtMVtnuhMv8FuUsm_6KA8F1oAo"
                      alt="Professional leather briefcase for documents" />
                  </div>
                  <h4 class="product-card__name">Document Case</h4>
                  <p class="product-card__material">Tuscan Tan</p>
                  <p class="product-card__price">$750</p>
                </article>

              </div>
            </section>

            <!-- Lifestyle Interleaf 1 -->
            <section class="lifestyle-editorial">
              <div class="lifestyle-editorial__image-wrap">
                <img class="lifestyle-editorial__img"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwKvmct--GKMNcFm-lhaz2itJ4rAsqDZ-l6jwzGWb9dAQ60mBYgpQ9EQ1BogwJGqE0Fz1oDvwvB0tWSRp5tNYqJNlzMylMgPdRC8PpB1ucmhXF8xm8Zd_3oXJASMVquFUOBRjaGelyTl6uHpg4BYYo6o9Kivy39I2VAbdD9htfo1uoGOJgSGN322-pyr4SCxOhSdPMpabKwCMDIzQIGs0P7lhi1qEvtAwy3ktTZQDobSTH95r0JT_C1AJZRmDp1gvXdJqNu5FvYog"
                  alt="Sophisticated woman walking through a classic city street" />
              </div>
              <div class="lifestyle-editorial__content">
                <span class="lifestyle-editorial__eyebrow">Lifestyle Editorial</span>
                <h3 class="lifestyle-editorial__title">Esenciales de Día</h3>
                <p class="lifestyle-editorial__body">Our daily essentials are designed to accompany the modern professional from the first meeting to the evening gala. Functional elegance meets artisanal soul.</p>
                <a class="lifestyle-editorial__link" href="#">View the Lookbook</a>
              </div>
            </section>

            <!-- Lifestyle Interleaf 2 — Gifts -->
            <section class="gift-section">
              <div class="gift-section__inner">
                <h3 class="gift-section__title">Regalos Exclusivos</h3>
                <p class="gift-section__body">Descubra una curaduría de piezas excepcionales diseñadas para perdurar. El arte de regalar, perfeccionado por Vento Atelier.</p>
                <div class="gift-grid">
                  <div class="gift-item">
                    <img class="gift-item__img"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxPMJOMR2xCOFCg5DIzDA6kQ3Wm3kh4rMIixm_VjbpA-ZNlu9Cqje4GRLUu85y8ktUIHRqFbAD3-UOnMOFDlvkZwRxPxej6cU_Ee0MAdWoVT2Snfk1UVTAWNOBZJliNk520D98hIIUq2NrbgD9ySwenvBmACK9815mtFcHc0yEkShY4ypwiBM7OA4gVMfQ5zer3VPhbYedPoJ24MY-uSx-6PqWGHHr_gPdSb-MFdEV72PKYuViMFHNLFQX3j_dO0OL320Z_EMSGdw"
                      alt="Small leather cardholder gift" />
                  </div>
                  <div class="gift-item gift-item--offset">
                    <img class="gift-item__img"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4_29UlezVAl2b_yxbHWf1augueNlxeA0-MgGlxW5OAfC2z2gABPNdLi8B1yyZErRLUALPGqjphyBDonWXeIDncE1YslWe433uSQ4tDmreurKrBLpo8CLE_OLkxeVGytvPwx260yN3ZnALsVZfYJ5K3ss20j17_ekWnPANNtmhsNqZSTLP-b5rvlFpmquujXHWTtOA9KP_E_wsLhFpncAXH4VL7Dqhz3cLuugMvVZfzz_Bqbx1PwBVkxQ_PYRiBY5zIY-MgfG7aNQ"
                      alt="Leather travel tag and accessories" />
                  </div>
                  <div class="gift-item">
                    <img class="gift-item__img"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr2prZwgRa5VIbQMXu3zghc_1ruW_EYe5IgqUt5paTgz_12B-2Q2bdhsxXkXbVpj-M9z3aoUCl5DVa8IKIc8wmJtqLjPTXGnozljKmPST1EP1ZIpHMYmr7_rWNUqeE-voiHzjDHT_hwtxkKrYb6zjZ5bpJn9FaZ48VHSJdqhzovE3tub1oVL-pAYE7bllkXK-aeHx07ggyy1g0ymSqkeQ0SVe2qCriyJuuUuo9XfTd-E4ZjEfUVeZUi_cv5E9mesQv8BFm60ozUas"
                      alt="Luxury wallet on display" />
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>

        <!-- ── FOOTER ── -->
        <footer class="footer">
          <div class="footer__grid">

            <!-- Brand -->
            <div class="footer__col">
              <h4 class="footer__brand-name">VENTO ATELIER</h4>
              <p class="footer__brand-desc">Defining the pinnacle of leather craftsmanship since 1984. Every stitch tells a story of heritage.</p>
            </div>

            <!-- Assistance -->
            <div class="footer__col">
              <h5 class="footer__col-title">Assistance</h5>
              <ul class="footer__nav">
                <li><a class="footer__nav-link" href="#">Contact Us</a></li>
                <li><a class="footer__nav-link" href="#">Shipping &amp; Returns</a></li>
                <li><a class="footer__nav-link" href="#">Care Instructions</a></li>
              </ul>
            </div>

            <!-- Company -->
            <div class="footer__col">
              <h5 class="footer__col-title">Company</h5>
              <ul class="footer__nav">
                <li><a class="footer__nav-link" href="#">Heritage</a></li>
                <li><a class="footer__nav-link" href="#">Ateliers</a></li>
                <li><a class="footer__nav-link" href="#">Sustainability</a></li>
              </ul>
            </div>

            <!-- Newsletter -->
            <div class="footer__col">
              <h5 class="footer__col-title">Newsletter</h5>
              <div class="footer__newsletter">
                <input class="footer__newsletter-input" type="email" placeholder="YOUR EMAIL" />
                <button class="footer__newsletter-btn">Join</button>
              </div>
            </div>

          </div>

          <div class="footer__bottom">
            <ul class="footer__legal-links">
              <li><a class="footer__legal-link" href="#">Privacy Policy</a></li>
              <li><a class="footer__legal-link" href="#">Terms of Service</a></li>
            </ul>
            <p class="footer__copyright">© 2024 VENTO ATELIER. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>

      </div>
    `;
  }

  static styles = unsafeCSS(styles);
}

declare global {
  interface HTMLElementTagNameMap {
    'page-desktop': PageDesktop;
  }
}