# KasihKirim — Design System

Ringkasan design tokens & komponen asas untuk landing page KasihKirim.

## Tailwind v4 — nota penting

Projek ini guna **Tailwind CSS v4** (`@tailwindcss/postcss`). v4 guna config **CSS-first**
(`@theme` block dalam `app/globals.css`) — bukan `tailwind.config.ts` seperti v3. Semua token
warna, font, radius, dan shadow di bawah didefinisikan terus dalam `app/globals.css`, dan
Tailwind auto-generate utility classes daripadanya (contoh: `--color-primary-500` →
`bg-primary-500`, `text-primary-500`, `border-primary-500`, dsb).

## Warna

| Token | Base | Kegunaan |
|---|---|---|
| `primary` | `#FF7A30` (500) | Warna utama — CTA, brand |
| `secondary` | `#167A63` (500) | Warna sekunder — teal/forest green |
| `accent` | `#FFC94A` (500) | Highlight, badge, tag |
| `neutral` | `#FFFBF7` (50) | Background off-white & teks |

Setiap warna ada shade `50`–`900` (lihat `app/globals.css`). Shade dijana secara konsisten
dari base hex yang diberi — boleh haluskan lagi dengan tool macam [uicolors.app](https://uicolors.app)
jika designer nak kawal setiap step dengan lebih tepat.

Contoh guna:

```tsx
<div className="bg-primary-500 text-white" />
<div className="bg-neutral-50 text-neutral-900" />
<span className="bg-accent-100 text-accent-800 rounded-full px-3 py-1" />
```

## Font

- **Heading**: Plus Jakarta Sans (`font-heading`) — sans-serif bold moden
- **Body**: Inter (`font-sans`, default)

Dimuatkan melalui `next/font/google` dalam `app/layout.tsx`, didedahkan sebagai CSS variable
(`--font-jakarta`, `--font-inter`) dan dipetakan ke `--font-heading` / `--font-sans` dalam
`@theme`.

## Border radius & shadow

- Card guna `rounded-2xl` (dinaikkan ke `1.25rem` dalam `@theme` supaya lebih rounded).
- Button guna `rounded-full`.
- Shadow lembut guna utility custom `shadow-soft` / `shadow-soft-lg` (bukan `shadow-lg` default
  Tailwind yang lebih hard/tegas).

## Komponen asas (`components/ui/`)

| Komponen | Prop utama |
|---|---|
| `Button` | `variant`: `primary` \| `secondary` \| `outline`; `href` renders it as an `<a>` |
| `Card` | standard `div` props, styling rounded + shadow-soft |
| `Container` | max-width wrapper standard (`max-w-6xl`) |
| `SectionHeading` | `eyebrow`, `title`, `description`, `align` |
| `Accordion` | `items: { question, answer }[]`, single-open, animated height |

> **Nota kontras:** `Button` variant `primary` guna teks `text-neutral-900` (bukan putih) di atas
> `bg-primary-500`. Putih di atas oren `#FF7A30` hanya ~2.6:1 (gagal WCAG AA); hitam/neutral-900
> di atas warna sama ~6:1 (lulus AA). `secondary` (teal) kekal teks putih sebab kontrasnya cukup
> (~5.25:1).

Import terus dari barrel file:

```tsx
import { Button, Card, Container, SectionHeading } from "@/components/ui";
```

## Supabase

Client Supabase disediakan di `lib/supabase.ts`, guna env vars:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Copy `.env.local.example` → `.env.local` dan isikan value sebenar sebelum guna.
