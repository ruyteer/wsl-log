import { SeedsBanner } from "@/components/pages/home/SeedsBanner";
import { Clients } from "@/components/pages/home/clients";
import { ContactForm } from "@/components/pages/home/contact";
import { Hero } from "@/components/pages/home/hero";
import { Trucks } from "@/components/pages/home/trucks";
import { WhyChoose } from "@/components/pages/home/why-choose";

export default function Home() {
  return (
    <>
      <Hero />

      <WhyChoose />

      <SeedsBanner />

      <Clients />

      <Trucks />

      <ContactForm />
    </>
  );
}
