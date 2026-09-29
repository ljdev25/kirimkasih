-- Table for "Mohon Jadi Penjual" applications submitted from the landing page.
create table if not exists public.seller_applications (
  id uuid primary key default gen_random_uuid(),
  nama text not null,
  no_telefon text not null,
  email text not null,
  perniagaan text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

alter table public.seller_applications enable row level security;

-- Public (anon) can submit an application, but only ever as 'pending' —
-- they cannot read, update, or delete rows, and cannot set any other status.
create policy "Public can submit seller applications"
  on public.seller_applications
  for insert
  to anon
  with check (status = 'pending');
