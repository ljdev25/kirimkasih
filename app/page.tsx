"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const stepsWrapRef = useRef<HTMLDivElement>(null);
  const stepProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Nav scroll state
    const nav = navRef.current;
    function onScrollNav() {
      if (!nav) return;
      if (window.scrollY > 12) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    }
    window.addEventListener("scroll", onScrollNav, { passive: true });
    onScrollNav();

    // Route canvas responsive scaling for offset-path
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const REF_W = 800;
    function scaleRoute() {
      if (!stage || !canvas) return;
      const scale = stage.clientWidth / REF_W;
      canvas.style.transform = `scale(${scale})`;
    }
    window.addEventListener("resize", scaleRoute, { passive: true });
    scaleRoute();

    // Hero mousemove parallax (desktop, fine pointer only)
    const illustration = illustrationRef.current;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;
    const heroEl = document.querySelector<HTMLElement>(".hero");

    function handleMouseMove(e: MouseEvent) {
      if (!heroEl) return;
      const rect = heroEl.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = relX * 16;
      targetY = relY * 12;
    }

    const parallaxEnabled = Boolean(illustration && canHover && !reduceMotion);
    if (parallaxEnabled) {
      heroEl?.addEventListener("mousemove", handleMouseMove);
    }

    // Scroll reveal (IntersectionObserver)
    const revealEls = document.querySelectorAll(".reveal, .reveal-scale, .step");
    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const delay =
                el.classList.contains("step") && el.parentElement
                  ? Array.prototype.indexOf.call(el.parentElement.children, el) * 120
                  : 0;
              setTimeout(() => el.classList.add("in-view"), delay);
              io?.unobserve(el);
            }
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
      );
      revealEls.forEach((el) => io?.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("in-view"));
    }

    // Scroll-linked progress line for "How it works"
    const stepsWrap = stepsWrapRef.current;
    const stepProgress = stepProgressRef.current;
    function updateStepProgress() {
      if (!stepsWrap || !stepProgress) return;
      const rect = stepsWrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.25;
      const progressRange = start - end;
      const traveled = start - rect.top;
      let pct = traveled / progressRange;
      pct = Math.max(0, Math.min(1, pct));
      stepProgress.style.width = `${pct * 66.8}%`;
    }

    // Single continuous frame loop drives both the parallax lerp and the
    // scroll progress bar off the actual frame clock instead of scroll
    // events, which avoids the stutter that comes from bursty/inertial
    // scroll dispatch (especially on trackpads).
    let rafId = 0;
    function frameLoop() {
      if (parallaxEnabled && illustration) {
        curX += (targetX - curX) * 0.08;
        curY += (targetY - curY) * 0.08;
        illustration.style.transform = `translate3d(${curX.toFixed(2)}px, ${curY.toFixed(2)}px, 0)`;
      }
      updateStepProgress();
      rafId = requestAnimationFrame(frameLoop);
    }
    rafId = requestAnimationFrame(frameLoop);

    return () => {
      window.removeEventListener("scroll", onScrollNav);
      window.removeEventListener("resize", scaleRoute);
      heroEl?.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      io?.disconnect();
    };
  }, []);

  return (
    <>
      <nav className="nav" id="siteNav" ref={navRef}>
        <a href="#top" className="logo">
          <span>Kasih</span> <span className="heart" aria-hidden="true">♥</span> <span>Kirim</span>
        </a>
        <div className="nav-links">
          <a href="#how">Cara Guna</a>
          <a href="#market">Untuk Sesiapa</a>
          <a href="#bawa">Bawa &amp; Jual</a>
          <a href="#why">Kenapa Kami</a>
        </div>
        <div className="nav-cta">
          <a href="#cta" className="btn btn-primary btn-sm">Mula Guna</a>
        </div>
      </nav>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="blob blob-a" aria-hidden="true"></div>
          <div className="blob blob-b" aria-hidden="true"></div>

          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Penghantaran kampung ke bandar</p>
              <h1>Kirim dengan <em>kasih</em>, dari kampung ke bandar.</h1>
              <p className="hero-sub">Kasih Kirim sambungkan kampung dengan bandar — guna orang yang memang dah nak jalan route tu. Selamat, mesra, dan lebih dekat di hati.</p>
              <div className="hero-ctas">
                <a href="#cta" className="btn btn-primary">Hantar Barang Sekarang</a>
                <a href="#market" className="btn btn-outline">Jadi Kurier</a>
              </div>
              <p className="trust-line"><span className="dot" aria-hidden="true"></span> Dipercayai lebih 12,000 keluarga kampung di Sabah &amp; Sarawak</p>
            </div>

            <div className="hero-illustration" ref={illustrationRef}>
              <div className="route-stage" ref={stageRef}>
                <div className="route-canvas" ref={canvasRef}>
                  <svg className="route-svg" viewBox="0 0 800 320" role="img" aria-label="Ilustrasi laluan penghantaran dari kampung Beluran ke bandar Kota Kinabalu">
                    <path className="route-line draw" d="M60,230 C180,110 260,270 400,180 C520,110 600,230 740,140" />
                  </svg>
                  <div className="parcel" aria-hidden="true">📦</div>
                </div>
                <div className="place-icon place-village" aria-hidden="true">
                  <div className="glyph">🏡</div>
                  Beluran
                </div>
                <div className="place-icon place-city" aria-hidden="true">
                  <div className="glyph">🏙️</div>
                  Kota Kinabalu
                </div>
              </div>
              <div className="float-tag tag-1">🚐 Beluran → KK · esok pagi</div>
              <div className="float-tag tag-2">✅ Kurier disahkan IC &amp; selfie</div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how" id="how">
          <div className="how-head reveal">
            <p className="eyebrow on-dark">Cara guna</p>
            <h2>Senang macam WhatsApp member.</h2>
            <p>Tiga langkah je dari barang di rumah sampai ke tangan orang yang kita sayang.</p>
          </div>
          <div className="steps" ref={stepsWrapRef}>
            <div className="step-progress" ref={stepProgressRef}></div>
            <div className="step">
              <div className="step-num">01</div>
              <h3>Hantar permintaan</h3>
              <p>Letak butiran barang &amp; destinasi korang dalam app, dalam masa seminit.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>Padan dengan kurier</h3>
              <p>Kami padankan dengan orang yang memang dah nak ke sana — bukan orang asing random.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>Terima dengan senyuman</h3>
              <p>Barang sampai selamat, kurier dapat bayaran &amp; rating dari komuniti.</p>
            </div>
          </div>
        </section>

        {/* TWO-SIDED MARKETPLACE */}
        <section className="market" id="market">
          <div className="section-head reveal">
            <p className="eyebrow">Untuk semua orang</p>
            <h2>Sama ada nak hantar, atau nak sampingan.</h2>
            <p>Kasih Kirim kerja untuk kedua-dua belah pihak — penghantar dan kurier.</p>
          </div>
          <div className="market-grid">
            <div className="side-card senders reveal-scale">
              <span className="tag-label">Untuk Penghantar</span>
              <h3>Hantar barang dengan hati tenang</h3>
              <ul>
                <li>Hantar barang secara selamat guna orang tempatan yang dipercayai komuniti.</li>
                <li>Harga jauh lebih murah berbanding kurier biasa.</li>
                <li>Track &amp; chat terus dengan kurier sepanjang perjalanan.</li>
              </ul>
              <a href="#cta" className="btn btn-dark btn-sm">Hantar Barang</a>
            </div>
            <div className="side-card couriers reveal-scale">
              <span className="tag-label">Untuk Kurier</span>
              <h3>Jadikan perjalanan korang berbaloi</h3>
              <ul>
                <li>Dapat duit tambahan dari perjalanan yang memang nak dibuat.</li>
                <li>Pilih barang ikut jenis kenderaan &amp; masa lapang korang.</li>
                <li>Bina reputasi &amp; rating yang dihormati dalam komuniti.</li>
              </ul>
              <a href="#cta" className="btn btn-dark btn-sm">Jadi Kurier</a>
            </div>
          </div>
        </section>

        {/* BAWA & JUAL */}
        <section className="bawa" id="bawa">
          <div className="bawa-inner">
            <div className="bawa-copy">
              <div className="section-head reveal">
                <p className="eyebrow">Ciri istimewa</p>
                <h2>Bawa &amp; Jual</h2>
                <p>Balik kampung? Bawa hasil kampung untuk dijual di bandar — orang bandar boleh pre-order sebelum korang sampai lagi!</p>
              </div>
              <ul className="bawa-points reveal">
                <li>Pre-sell hasil kampung terus dari sumber, tanpa orang tengah.</li>
                <li>Pembeli bandar dapat barang segar, penghantar dapat untung lumayan.</li>
                <li>Senarai produk &amp; harga terus dalam app, siap dengan tag asal kampung.</li>
              </ul>
              <a href="#cta" className="btn btn-primary">Mula Jual Hasil Kampung</a>
            </div>

            <div className="product-card reveal-scale">
              <div className="product-card-head">
                <h4>Bawaan dari Sabah minggu ni</h4>
                <span>LIVE</span>
              </div>
              <div className="product-list">
                <div className="product-item">
                  <div className="product-main">
                    <span className="product-emoji">🦐</span>
                    <div>
                      <div className="product-name">Udang Galah Segar</div>
                      <div className="product-origin">Asal: Beluran</div>
                    </div>
                  </div>
                  <div className="product-price">RM28/kg</div>
                </div>
                <div className="product-item">
                  <div className="product-main">
                    <span className="product-emoji">🌾</span>
                    <div>
                      <div className="product-name">Beras Kampung</div>
                      <div className="product-origin">Asal: Tambunan</div>
                    </div>
                  </div>
                  <div className="product-price">RM8/kg</div>
                </div>
                <div className="product-item">
                  <div className="product-main">
                    <span className="product-emoji">🍈</span>
                    <div>
                      <div className="product-name">Buah Salak Segar</div>
                      <div className="product-origin">Asal: Sandakan</div>
                    </div>
                  </div>
                  <div className="product-price">RM10/kg</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="why" id="why">
          <div className="section-head reveal">
            <p className="eyebrow">Kenapa kami</p>
            <h2>Bukan sekadar app, tapi komuniti.</h2>
          </div>
          <div className="why-grid">
            <div className="why-card reveal-scale">
              <div className="glyph">🤝</div>
              <h3>Amanah Komuniti</h3>
              <p>Setiap kurier disahkan melalui rangkaian komuniti kampung sendiri.</p>
            </div>
            <div className="why-card reveal-scale">
              <div className="glyph">🌱</div>
              <h3>Segar Sampai</h3>
              <p>Barang basah &amp; segar terus dari kampung, tanpa lambat di gudang.</p>
            </div>
            <div className="why-card reveal-scale">
              <div className="glyph">💰</div>
              <h3>Pendapatan Tambahan</h3>
              <p>Setiap perjalanan yang memang nak dibuat jadi peluang rezeki tambahan.</p>
            </div>
            <div className="why-card reveal-scale">
              <div className="glyph">📱</div>
              <h3>Senang Guna</h3>
              <p>Tempah dalam beberapa saat, ikut je arahan dalam app.</p>
            </div>
          </div>
        </section>

        {/* QUOTE */}
        <section className="quote-band">
          <blockquote className="reveal">
            &quot;Kasih Kirim bukan sekadar hantar barang — ia hantar rasa rindu, rasa sayang, dari kampung ke mana-mana anak kampung berada.&quot;
            <cite>— Falsafah Kasih Kirim</cite>
          </blockquote>
        </section>

        {/* CTA BAND */}
        <section className="cta-band" id="cta">
          <div className="blob blob-a" aria-hidden="true"></div>
          <div className="blob blob-b" aria-hidden="true"></div>
          <div className="cta-band-inner reveal-scale">
            <p className="eyebrow on-gold">Sedia nak mula?</p>
            <h2>Muat turun Kasih Kirim hari ini.</h2>
            <p>Dari kampung ke bandar, dari hati ke hati. Percuma untuk didaftar.</p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-dark">🍎 App Store</a>
              <a href="#" className="btn btn-dark">▶ Google Play</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <span>Kasih</span> <span className="heart" style={{ color: "var(--chili)" }} aria-hidden="true">♥</span> <span>Kirim</span>
            </a>
            <p>Kirim dengan kasih, dari kampung ke bandar. Platform penghantaran &amp; jual-beli hasil kampung yang disokong komuniti.</p>
          </div>
          <div>
            <h4>Pautan</h4>
            <div className="footer-links">
              <a href="#how">Cara Guna</a>
              <a href="#market">Untuk Sesiapa</a>
              <a href="#bawa">Bawa &amp; Jual</a>
              <a href="#why">Kenapa Kami</a>
            </div>
          </div>
          <div>
            <h4>Hubungi Kami</h4>
            <div className="footer-links">
              <a href="https://kasihkirim.com">kasihkirim.com</a>
              <a href="mailto:hello@kasihkirim.com">hello@kasihkirim.com</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Kasih Kirim. Hak cipta terpelihara.</span>
          <span>Dibuat dengan ♥ dari kampung ke bandar.</span>
        </div>
      </footer>
    </>
  );
}
