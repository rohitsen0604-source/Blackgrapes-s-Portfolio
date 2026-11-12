import { Hero } from "@/components/home/Hero";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { TechStackSection } from "@/components/home/TechStackSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FoundersSection } from "@/components/home/FoundersSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ContactInquiry } from "@/components/home/ContactInquiry";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServicesShowcase />
      <TechStackSection />
      <FeaturedProjects />
      <IndustriesSection />
      <WhyChooseUs />
      <FoundersSection />
      <TestimonialsSection />
      <ContactInquiry />
    </>
  );
}
