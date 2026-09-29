import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { ForDrivers } from "@/components/ForDrivers";
import { ForSellers } from "@/components/ForSellers";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { ServiceArea } from "@/components/ServiceArea";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <ForDrivers />
        <ForSellers />
        <ServiceArea />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
