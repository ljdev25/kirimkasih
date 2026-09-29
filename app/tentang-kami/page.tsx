import type { Metadata } from "next";
import { StaticPage } from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Ketahui lebih lanjut tentang misi KasihKirim menghubungkan kampung dan bandar di seluruh Sabah.",
};

export default function TentangKamiPage() {
  return (
    <StaticPage title="Tentang Kami">
      <p>
        KasihKirim dibina untuk menghubungkan penghantar, pemandu dan peniaga
        tempatan di seluruh Sabah — membolehkan sesiapa sahaja yang sedang
        dalam perjalanan menghantar bungkusan, dan sesiapa sahaja yang
        berniaga menjual hasil tempatan mereka kepada lebih ramai pelanggan.
      </p>
      <p>
        Kandungan penuh halaman ini sedang dalam penyediaan. Untuk sebarang
        pertanyaan mengenai syarikat kami, sila hubungi pasukan sokongan
        KasihKirim.
      </p>
    </StaticPage>
  );
}
