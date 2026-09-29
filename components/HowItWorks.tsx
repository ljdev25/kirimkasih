import { Car, Info, Package, Store, type LucideIcon } from "lucide-react";
import { Card, Container, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

type Tint = "primary" | "secondary" | "accent";

interface Role {
  icon: LucideIcon;
  title: string;
  description: string;
  tint: Tint;
}

const roles: Role[] = [
  {
    icon: Package,
    title: "Pelanggan",
    description:
      "Hantar bungkusan (Kirim) atau beli-belah terus daripada peniaga tempatan (Jualan) — semua dalam satu aplikasi.",
    tint: "primary",
  },
  {
    icon: Car,
    title: "Pemandu (Carrier)",
    description:
      "Bawa bungkusan pelanggan mengikut laluan perjalanan sendiri dan peroleh pendapatan tambahan setiap kali menghantar.",
    tint: "secondary",
  },
  {
    icon: Store,
    title: "Penjual (Seller)",
    description:
      "Jual produk terus melalui aplikasi dan uruskan pesanan pelanggan dengan mudah, dari mana-mana sahaja.",
    tint: "accent",
  },
];

const tintStyles: Record<Tint, string> = {
  primary: "bg-primary-100 text-primary-600",
  secondary: "bg-secondary-100 text-secondary-600",
  accent: "bg-accent-100 text-accent-700",
};

export function HowItWorks() {
  return (
    <section id="ciri-ciri" className="scroll-mt-28 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Cara guna"
          title="Macam Mana Ia Berfungsi"
          description="Satu akaun, tiga cara untuk digunakan — sebagai Pelanggan, Pemandu, atau Penjual."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <Card
              key={role.title}
              className="flex flex-col items-start gap-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <span
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-2xl",
                  tintStyles[role.tint]
                )}
              >
                <role.icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="font-heading text-lg font-bold text-neutral-900">
                {role.title}
              </h3>
              <p className="text-sm text-neutral-600">{role.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-accent-200 bg-accent-50 p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent-700" />
          <p className="text-sm text-neutral-800 sm:text-base">
            <strong className="font-semibold">Nota:</strong> Setiap akaun
            bermula sebagai Pelanggan. Anda boleh memohon menjadi Pemandu atau
            Penjual pada bila-bila masa, tanpa perlu daftar akaun baharu.
          </p>
        </div>
      </Container>
    </section>
  );
}
