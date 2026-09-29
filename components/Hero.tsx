import { Button, Container } from "@/components/ui";

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] rounded-[2.75rem] bg-neutral-900 p-3 shadow-soft-lg sm:w-[280px]">
      <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-neutral-800" />
      <div className="relative aspect-[9/19] overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-secondary-50 to-neutral-50">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-6 text-[10px] font-semibold text-neutral-700">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-700" />
          </div>
        </div>

        {/* App header */}
        <div className="mt-4 flex items-center justify-between px-5">
          <span className="font-heading text-sm font-bold text-neutral-900">
            KasihKirim
          </span>
          <span className="h-6 w-6 rounded-full bg-primary-200" />
        </div>

        {/* "Map" illustration block */}
        <div className="relative mx-4 mt-4 h-32 overflow-hidden rounded-2xl bg-gradient-to-br from-secondary-400 to-secondary-600">
          <svg
            viewBox="0 0 200 120"
            className="absolute inset-0 h-full w-full opacity-70"
            fill="none"
          >
            <path
              d="M10 100 C 60 40, 120 100, 190 30"
              stroke="white"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute left-3 bottom-3 h-3 w-3 rounded-full border-2 border-white bg-secondary-700" />
          <span className="absolute right-4 top-4 h-3 w-3 rounded-full bg-accent-400" />
        </div>

        {/* Floating status card */}
        <div className="mx-4 -mt-6 rounded-2xl bg-white p-3 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
            Sedang dihantar
          </p>
          <p className="mt-1 text-xs font-semibold text-neutral-900">
            Kg. Tamparuli → Kota Kinabalu
          </p>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
            <div className="h-full w-2/3 rounded-full bg-primary-500" />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 px-4">
          <div className="h-10 rounded-xl bg-white/70" />
          <div className="h-10 rounded-xl bg-white/50" />
        </div>
      </div>
    </div>
  );
}

function StoreBadge({ label, sub }: { label: string; sub: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5 rounded-xl bg-neutral-900 px-4 py-2.5 text-white transition-colors hover:bg-neutral-800"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 3a1 1 0 0 1 1 1v9.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1Z" />
        <path d="M5 15a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1Z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] text-neutral-300">{sub}</span>
        <span className="block text-sm font-semibold">{label}</span>
      </span>
    </a>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle background gradient + dot pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,var(--color-neutral-300)_1px,transparent_0)] bg-[size:28px_28px] opacity-50"
      />
      <div
        aria-hidden
        className="absolute -left-32 -top-32 -z-10 h-80 w-80 rounded-full bg-primary-200 opacity-50 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-secondary-200 opacity-50 blur-3xl"
      />

      <Container className="grid items-center gap-14 py-20 md:grid-cols-2 md:py-28">
        <div className="text-center md:text-left">
          <p className="inline-block rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold text-accent-800">
            Untuk seluruh Sabah
          </p>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl">
            Hantar, bawa & beli-belah{" "}
            <span className="text-primary-600">sesama Sabahan</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base text-neutral-600 md:mx-0">
            KasihKirim menghubungkan penghantar, pemandu dan peniaga di
            seluruh Sabah — hantar bungkusan dari kampung ke bandar, beli-belah
            hasil tempatan, dan jejak setiap penghantaran secara langsung.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <Button href="#muat-turun" variant="primary">
              Muat Turun App
            </Button>
            <Button href="#untuk-pemandu" variant="outline">
              Jadi Pemandu
            </Button>
          </div>

          <div id="muat-turun" className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {/* TODO: ganti placeholder ini dengan badge rasmi Apple App Store & Google Play */}
            <StoreBadge sub="Muat turun di" label="App Store" />
            <StoreBadge sub="Dapatkan di" label="Google Play" />
          </div>
        </div>

        <PhoneMockup />
      </Container>
    </section>
  );
}
