import { SeedsBanner } from "@/components/pages/home/SeedsBanner";
import { Clients } from "@/components/pages/home/clients";
import { Hero } from "@/components/pages/home/hero";
import { WhyChoose } from "@/components/pages/home/why-choose";

export default function Home() {
  return (
    <>
      <Hero />

      <WhyChoose />

      <SeedsBanner />

      <Clients />
    </>
  );
}
