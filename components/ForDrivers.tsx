"use client";

import { useState } from "react";
import { Car, Clock, Rocket, UserPlus, type LucideIcon } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { ApplicationModal } from "@/components/ApplicationModal";
import { applyDriverAction } from "@/app/actions/apply-driver";

interface Step {
  icon: LucideIcon;
  title: string;
}

const steps: Step[] = [
  { icon: UserPlus, title: "Mohon jadi Pemandu melalui profil" },
  { icon: Clock, title: "Tunggu kelulusan pentadbir" },
  { icon: Car, title: "Daftar & sahkan kenderaan" },
  { icon: Rocket, title: "Mula trip & terima permintaan Kirim di Papan Pemandu" },
];

export function ForDrivers() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="untuk-pemandu"
      className="scroll-mt-28 bg-secondary-900 py-20 text-white md:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">
            Untuk Pemandu
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
            Jana pendapatan tambahan guna laluan perjalanan anda sendiri
          </h2>
          <p className="mt-4 text-base text-secondary-100">
            Sudah dalam perjalanan ke bandar atau balik kampung? Bawa
            bungkusan pelanggan sepanjang laluan yang sama dan dapatkan
            pendapatan tambahan setiap trip.
          </p>
          <Button
            variant="primary"
            className="mt-8"
            onClick={() => setModalOpen(true)}
          >
            Mohon Jadi Pemandu
          </Button>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-white/15 lg:block" />
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-secondary-900">
                <step.icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="mt-2 text-xs font-semibold text-accent-400">
                Langkah {i + 1}
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {modalOpen ? (
        <ApplicationModal
          title="Mohon Jadi Pemandu"
          description="Isikan maklumat di bawah dan pasukan kami akan menghubungi anda."
          fields={[
            { name: "nama", label: "Nama Penuh" },
            { name: "noTelefon", label: "No. Telefon", type: "tel" },
            { name: "email", label: "E-mel", type: "email" },
            { name: "kawasan", label: "Kawasan / Laluan Biasa" },
          ]}
          action={applyDriverAction}
          onClose={() => setModalOpen(false)}
        />
      ) : null}
    </section>
  );
}
