import { Accordion, type AccordionItem, Container, SectionHeading } from "@/components/ui";

const faqs: AccordionItem[] = [
  {
    question: "Saya tidak dapat log masuk, apa patut saya buat?",
    answer:
      "Pastikan nombor telefon atau e-mel yang didaftarkan adalah betul dan sambungan internet anda stabil. Jika masalah berterusan, guna pautan \"Lupa Kata Laluan\" pada skrin log masuk atau hubungi sokongan pelanggan kami untuk bantuan lanjut.",
  },
  {
    question: "Kenapa saya hanya boleh bayar secara COD semasa membeli-belah?",
    answer:
      "Buat masa ini, KasihKirim hanya menyokong Bayar Semasa Terima (COD) untuk memastikan proses pembayaran mudah dan selamat bagi semua pengguna. Kaedah pembayaran dalam talian sedang dibangunkan dan akan diperkenalkan tidak lama lagi.",
  },
  {
    question: "Bagaimana saya melaporkan isu dengan penghantaran atau pesanan?",
    answer:
      "Pergi ke halaman \"Pesanan Saya\", pilih pesanan berkenaan, dan ketik \"Laporkan Isu\". Terangkan masalah anda dan pasukan sokongan kami akan menghubungi anda dalam masa 24 jam.",
  },
  {
    question: "Bagaimana saya boleh jadi Pemandu atau Penjual?",
    answer:
      "Pergi ke profil anda dan pilih \"Mohon Jadi Pemandu\" atau \"Mohon Jadi Penjual\". Isikan maklumat yang diperlukan, dan permohonan anda akan disemak oleh pentadbir. Setiap akaun bermula sebagai Pelanggan — tiada keperluan daftar akaun baharu.",
  },
  {
    question: "Berapa lama proses permintaan pengeluaran wang pemandu/penjual?",
    answer:
      "Permintaan pengeluaran wang biasanya diproses dalam masa 3-5 hari bekerja, bergantung pada bank penerima. Anda boleh menyemak status permintaan pada bila-bila masa melalui halaman \"Pendapatan Saya\".",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-28 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Soalan Lazim"
          description="Tak jumpa jawapan yang anda cari? Hubungi pasukan sokongan kami bila-bila masa."
        />

        <div className="mx-auto mt-12 max-w-2xl">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
