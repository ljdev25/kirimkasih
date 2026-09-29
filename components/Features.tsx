import {
  Banknote,
  Check,
  Leaf,
  Navigation,
  ShieldCheck,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { Card, Container, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const normalFeatures: Feature[] = [
  {
    icon: ShoppingBag,
    title: "Kirim: BELI & JUALAN",
    description:
      "Dua jenis permintaan penghantaran — BELI (pemandu beli barang bagi pihak anda ikut had bajet) atau JUALAN (barang sedia, pemandu hanya hantar).",
  },
  {
    icon: Leaf,
    title: "Beli-Belah Hasil Tempatan",
    description:
      "Semak imbas dan beli produk terus daripada peniaga berdaftar di seluruh Sabah.",
  },
  {
    icon: ShieldCheck,
    title: "Penilaian Jujur (Double-Blind)",
    description:
      "Penilaian pelanggan dan pemandu hanya dipaparkan selepas kedua-dua pihak selesai menilai — memastikan penilaian jujur.",
  },
  {
    icon: Banknote,
    title: "Bayar Semasa Terima (COD)",
    description:
      "Kaedah pembayaran mudah dan selamat. Pembayaran dalam talian akan datang tidak lama lagi.",
  },
];

const trackerSteps = ["Pesanan Diterima", "Dalam Perjalanan", "Sampai"];
const activeStep = 1;

function TrackerMock() {
  return (
    <div className="rounded-2xl bg-white/70 p-5 shadow-soft">
      <div className="relative flex items-start justify-between px-2">
        <div className="absolute left-6 right-6 top-4 h-0.5 bg-neutral-200" />
        <div
          className="absolute left-6 top-4 h-0.5 bg-primary-500 transition-all"
          style={{
            width: `calc((100% - 3rem) * ${activeStep / (trackerSteps.length - 1)})`,
          }}
        />
        {trackerSteps.map((step, i) => (
          <div
            key={step}
            className="relative z-10 flex flex-1 flex-col items-center text-center"
          >
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold",
                i < activeStep
                  ? "bg-primary-500 text-white"
                  : i === activeStep
                    ? "bg-primary-500 text-white ring-4 ring-primary-200"
                    : "bg-neutral-200 text-neutral-500"
              )}
            >
              {i < activeStep ? <Check className="h-4 w-4" /> : i + 1}
            </span>
            <span className="mt-2 max-w-[70px] text-[11px] font-medium text-neutral-600">
              {step}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between rounded-xl bg-white p-3 shadow-soft">
        <div>
          <p className="text-xs font-semibold text-neutral-900">
            Kg. Tamparuli → Kota Kinabalu
          </p>
          <p className="text-[11px] text-neutral-500">Anggaran tiba: 25 min</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-secondary-50 px-2.5 py-1 text-[10px] font-bold text-secondary-700">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary-500" />
          LIVE
        </span>
      </div>
    </div>
  );
}

function FeaturedCard() {
  return (
    <Card className="sm:col-span-2 lg:col-span-2">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="flex-1">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
            <Navigation className="h-6 w-6" strokeWidth={2} />
          </span>
          <h3 className="mt-4 font-heading text-xl font-bold text-neutral-900">
            Jejak Secara Langsung
          </h3>
          <p className="mt-2 text-sm text-neutral-600">
            Lokasi pemandu dipaparkan secara real-time sehingga bungkusan
            sampai ke destinasi — tiada lagi teka-teka bila barang akan tiba.
          </p>
        </div>
        <div className="flex-1">
          <TrackerMock />
        </div>
      </div>
    </Card>
  );
}

export function Features() {
  return (
    <section id="fungsi" className="scroll-mt-28 bg-neutral-100/60 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ciri-ciri"
          title="Ciri-ciri Utama"
          description="Semua yang anda perlukan untuk hantar, beli-belah, dan pantau penghantaran — dalam satu aplikasi."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeaturedCard />

          {normalFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col items-start gap-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-600">
                <feature.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="font-heading text-lg font-bold text-neutral-900">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
