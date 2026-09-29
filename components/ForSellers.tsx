"use client";

import { useState } from "react";
import { ClipboardList, Clock, Store, UserPlus, type LucideIcon } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { ApplicationModal } from "@/components/ApplicationModal";
import { applySellerAction } from "@/app/actions/apply-seller";

interface Step {
  icon: LucideIcon;
  title: string;
}

const steps: Step[] = [
  { icon: UserPlus, title: "Mohon jadi Penjual melalui profil" },
  { icon: Clock, title: "Tunggu kelulusan pentadbir" },
  { icon: Store, title: "Sediakan profil kedai & senarai produk" },
  { icon: ClipboardList, title: "Mula terima & urus pesanan" },
];

export function ForSellers() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="penjual" className="scroll-mt-28 bg-primary-50 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-secondary-600">
            Untuk Penjual
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Jual hasil tempatan anda kepada seluruh Sabah
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            Sudah ada produk tempatan untuk dijual? Buka kedai anda di
            KasihKirim dan biar pemandu kami hantar terus kepada pelanggan di
            seluruh Sabah.
          </p>
          <Button
            variant="primary"
            className="mt-8"
            onClick={() => setModalOpen(true)}
          >
            Mohon Jadi Penjual
          </Button>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-neutral-300 lg:block" />
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-600 shadow-soft">
                <step.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="mt-2 text-xs font-semibold text-secondary-600">
                Langkah {i + 1}
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-900">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {modalOpen ? (
        <ApplicationModal
          title="Mohon Jadi Penjual"
          description="Isikan maklumat di bawah dan pasukan kami akan menghubungi anda."
          fields={[
            { name: "nama", label: "Nama Penuh" },
            { name: "noTelefon", label: "No. Telefon", type: "tel" },
            { name: "email", label: "E-mel", type: "email" },
            { name: "perniagaan", label: "Nama Perniagaan / Produk" },
          ]}
          action={applySellerAction}
          onClose={() => setModalOpen(false)}
        />
      ) : null}
    </section>
  );
}
