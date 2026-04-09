import { Metadata } from "next";
import AboutSection from "@/components/home/AboutSection";
import AdmissionBanner from "@/components/home/AdmissionBanner";
import CampusLifeSection from "@/components/home/CampusLifeSection";
import FAQSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import NewsEventsSection from "@/components/home/NewsEventSection";
import PrincipalSection from "@/components/home/PrincipalSection";

export const metadata: Metadata = {
  title: "Home | Dr. Bhabendra Nath Saikia Senior Secondary School Khetri",
  description: "Welcome to Dr. Bhabendra Nath Saikia Senior Secondary School, Khetri. Leading the way in academic excellence from LKG to Class 12 with specialized Arts and Science streams since 2016.",
};

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
