import type { Metadata } from "next";
import { StaticPage } from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Dasar Privasi",
  description: "Dasar privasi KasihKirim mengenai pengumpulan dan penggunaan data pengguna.",
};

export default function PrivasiPage() {
  return (
    <StaticPage title="Dasar Privasi">
      <p>
        Dasar privasi penuh KasihKirim sedang dalam penyediaan dan akan
        dikemaskini di halaman ini tidak lama lagi.
      </p>
      <p>
        Untuk sebarang pertanyaan berkaitan privasi data anda sementara
        menunggu, sila hubungi pasukan sokongan KasihKirim.
      </p>
    </StaticPage>
  );
}
