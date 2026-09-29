# KasihKirim — Landing Page

Landing page marketing untuk KasihKirim — app peer-to-peer delivery & beli-belah tempatan khusus
Sabah. Repo ini adalah website promosi sahaja (bukan aplikasi mobile itu sendiri).

Dibina dengan Next.js 16 (App Router), TypeScript, Tailwind CSS v4, dan Supabase (borang
permohonan Pemandu/Penjual). Lihat [`DESIGN.md`](./DESIGN.md) untuk design system (warna, font,
komponen `components/ui/`).

## Run local

```bash
npm install
cp .env.local.example .env.local   # isikan value sebenar — lihat "Env vars" di bawah
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Skrip lain yang berguna:

```bash
npm run build         # production build
npm run start          # jalankan production build tempatan
npm run lint            # ESLint
npm run format         # Prettier — tulis semula fail
npm run format:check   # Prettier — semak sahaja
```

## Env vars

Semua env vars ada dalam [`.env.local.example`](./.env.local.example):

| Var | Kegunaan | Wajib? |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL project Supabase | Ya — borang Pemandu/Penjual guna ini untuk insert |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon/public key Supabase (bukan `service_role`) | Ya |
| `NEXT_PUBLIC_SITE_URL` | URL penuh site production (contoh `https://kasihkirim.com`) | Tidak wajib tempatan — default `http://localhost:3000`; wajib diisi di production untuk Open Graph/SEO betul |

## Pangkalan data (Supabase)

Migration SQL ada dalam [`supabase/migrations/`](./supabase/migrations):

- `driver_applications` — borang "Mohon Jadi Pemandu"
- `seller_applications` — borang "Mohon Jadi Penjual"

Kedua-dua table ada Row Level Security enabled dengan satu policy sahaja: `anon` boleh **insert**
sahaja (dengan `status` dipaksa `'pending'`), tiada akses select/update/delete langsung dari
client. Jalankan migration ini di project Supabase anda (Supabase Dashboard → SQL Editor, paste
kandungan fail, run — atau guna Supabase CLI: `supabase db push` jika project sudah link).

Borang dihantar melalui Next.js **Server Actions** (`app/actions/apply-driver.ts`,
`app/actions/apply-seller.ts`) yang guna anon key sahaja di server — `service_role` key tidak
pernah digunakan atau didedahkan kat client.

## Deploy ke Vercel

1. Push repo ni ke GitHub/GitLab/Bitbucket.
2. Di [vercel.com/new](https://vercel.com/new), import repo — Vercel auto-detect Next.js, tak
   perlu ubah build command (`next build`) atau output directory.
3. Dalam **Project Settings → Environment Variables**, tambah ketiga-tiga env vars di atas
   (`NEXT_PUBLIC_SITE_URL` diisi dengan domain Vercel/custom domain sebenar).
4. Deploy. Pastikan `npm run build` berjaya tempatan dahulu sebelum push (lihat di bawah).

## Sebelum deploy — checklist

- [ ] `npm run build` berjaya tanpa error
- [ ] `npm run lint` bersih
- [ ] Migration SQL sudah dijalankan di project Supabase production
- [ ] Env vars sudah diisi di Vercel (termasuk `NEXT_PUBLIC_SITE_URL` dengan domain sebenar)
- [ ] Test hantar borang Pemandu & Penjual di production, sahkan row masuk dalam Supabase
