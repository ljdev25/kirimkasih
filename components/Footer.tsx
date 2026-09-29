import { Container } from "@/components/ui";

const quickLinks = [
  { label: "Ciri-ciri", href: "#ciri-ciri" },
  { label: "Untuk Pemandu", href: "#untuk-pemandu" },
  { label: "Untuk Penjual", href: "#penjual" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Privasi", href: "/privasi" },
  { label: "Terma Perkhidmatan", href: "/terma" },
];

// Placeholder glyphs — lucide-react has no brand/social icons, and these are
// stand-ins for real profile links, not literal brand logos.
function FacebookGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M13.5 9h-1a1 1 0 0 0-1 1v1.5H10v2h1.5V17h2v-4.5H15l.3-2h-1.8V10a.5.5 0 0 1 .5-.5h1.2V9Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.6" cy="7.4" r="1" fill="currentColor" />
    </svg>
  );
}

function TiktokGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4.5 w-4.5">
      <path
        d="M13 3v10.8a2.7 2.7 0 1 1-2-2.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13 3c.3 2 1.9 3.6 4 3.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", icon: FacebookGlyph },
  { label: "Instagram", icon: InstagramGlyph },
  { label: "TikTok", icon: TiktokGlyph },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 py-16 text-neutral-300">
      <Container>
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path
                    d="M12 19.5s-7.5-4.35-7.5-9.75A4.25 4.25 0 0 1 12 7.1a4.25 4.25 0 0 1 7.5 2.65c0 5.4-7.5 9.75-7.5 9.75Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="font-heading text-lg font-bold text-white">
                KasihKirim
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-neutral-400">
              Menghubungkan penghantar, pemandu dan peniaga tempatan di
              seluruh Sabah — dari hati ke hati.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-neutral-300 transition-colors hover:border-primary-400 hover:text-primary-400"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Pautan Pantas
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
              Syarikat
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500">
          © {year} KasihKirim. Hak cipta terpelihara.
        </p>
      </Container>
    </footer>
  );
}
