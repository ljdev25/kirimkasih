import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const title = "KasihKirim — Penghantaran & Beli-Belah Tempatan Sabah";
const description =
  "KasihKirim ialah platform penghantaran Sabah yang menghubungkan penghantar, pemandu dan peniaga tempatan. Hantar bungkusan dari kampung ke bandar, beli-belah tempatan, dan jejak penghantaran secara langsung.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — KasihKirim",
  },
  description,
  keywords: [
    "KasihKirim",
    "penghantaran Sabah",
    "beli-belah tempatan",
    "kurier Sabah",
    "hantar barang Sabah",
    "peniaga tempatan Sabah",
  ],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "KasihKirim",
    locale: "ms_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ms"
      className={`scroll-smooth ${inter.variable} ${plusJakartaSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
