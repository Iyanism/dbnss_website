import AboutSection from "@/components/home/AboutSection";
import AdmissionBanner from "@/components/home/AdmissionBanner";
import CampusLifeSection from "@/components/home/CampusLifeSection";
import FAQSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import NewsEventsSection from "@/components/home/NewsEventSection";
import PrincipalSection from "@/components/home/PrincipalSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <PrincipalSection />
      <CampusLifeSection />
      <NewsEventsSection />
      <AdmissionBanner />
      <FAQSection />
    </div>
  );
}
