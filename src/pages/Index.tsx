
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";
import B2BSolutions from "@/components/B2BSolutions";
import ResourcesSection from "@/components/ResourcesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StorySection from "@/components/StorySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import SEOHelmet from "@/components/SEOHelmet";
import { LanguageProvider } from "@/lib/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <SEOHelmet />
      <StructuredData />
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <ProcessSection />
        <StorySection />
        <B2BSolutions />
        <ResourcesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default Index;
