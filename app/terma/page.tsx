import type { Metadata } from "next";
import { StaticPage } from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Terma Perkhidmatan",
  description: "Terma perkhidmatan penggunaan aplikasi dan perkhidmatan KasihKirim.",
};

export default function TermaPage() {
  return (
    <StaticPage title="Terma Perkhidmatan">
      <p>
        Terma perkhidmatan penuh KasihKirim sedang dalam penyediaan dan akan
        dikemaskini di halaman ini tidak lama lagi.
      </p>
      <p>
        Untuk sebarang pertanyaan berkaitan terma penggunaan sementara
        menunggu, sila hubungi pasukan sokongan KasihKirim.
      </p>
    </StaticPage>
  );
}
