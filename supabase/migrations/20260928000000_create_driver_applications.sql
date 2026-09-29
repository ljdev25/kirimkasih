-- Table for "Mohon Jadi Pemandu" applications submitted from the landing page.
create table if not exists public.driver_applications (
  id uuid primary key default gen_random_uuid(),
  nama text not null,
  no_telefon text not null,
  email text not null,
  kawasan text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

alter table public.driver_applications enable row level security;

-- Public (anon) can submit an application, but only ever as 'pending' —
-- they cannot read, update, or delete rows, and cannot set any other status.
create policy "Public can submit driver applications"
  on public.driver_applications
  for insert
  to anon
  with check (status = 'pending');
