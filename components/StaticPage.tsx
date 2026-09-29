import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Container } from "@/components/ui";

interface StaticPageProps {
  title: string;
  children: ReactNode;
}

export function StaticPage({ title, children }: StaticPageProps) {
  return (
    <>
      <Navbar />
      <main>
        <Container className="py-20 md:py-28">
          <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            {title}
          </h1>
          <div className="mt-6 flex max-w-2xl flex-col gap-4 text-neutral-600">
            {children}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
