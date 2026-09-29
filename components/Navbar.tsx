"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Ciri-ciri", href: "#ciri-ciri" },
  { label: "Untuk Pemandu", href: "#untuk-pemandu" },
  { label: "Untuk Penjual", href: "#penjual" },
  { label: "FAQ", href: "#faq" },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M12 19.5s-7.5-4.35-7.5-9.75A4.25 4.25 0 0 1 12 7.1a4.25 4.25 0 0 1 7.5 2.65c0 5.4-7.5 9.75-7.5 9.75Z"
        fill="white"
      />
      <circle cx="3.4" cy="9.2" r="1" fill="white" opacity="0.55" />
      <circle cx="1.6" cy="11.4" r="0.7" fill="white" opacity="0.35" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-neutral-200 bg-neutral-50/80 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 shadow-soft">
            <LogoMark />
          </span>
          <span className="font-heading text-lg font-bold text-neutral-900">
            KasihKirim
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-primary-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#muat-turun" variant="primary" className="px-5 py-2.5 text-sm">
            Muat Turun App
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-900 md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 border-t border-neutral-200 bg-neutral-50 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-primary-600"
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#muat-turun"
            variant="primary"
            className="mt-2 w-full"
            onClick={() => setMenuOpen(false)}
          >
            Muat Turun App
          </Button>
        </nav>
      </div>
    </header>
  );
}
