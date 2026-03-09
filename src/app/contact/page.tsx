import { Metadata } from "next";
import ContactMainBanner from "@/components/contact/MainBanner";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import MapSection from "@/components/contact/MapSection";

export const metadata: Metadata = {
    title: "Contact Us | Dr. Bhabendra Nath Saikia Senior Secondary School",
    description: "Connect with Dr. Bhabendra Nath Saikia Senior Secondary School. Reach out for admissions, general inquiries, or visit our campus in Khetri, Kamrup (M), Assam.",
    keywords: ["Contact Dr. Bhabendra Nath Saikia School", "School Admissions Khetri", "School Location Kamrup Metropolitan", "School Email Phone Assam", "Visit Dr. Bhabendra Nath Saikia School"]
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactMainBanner />
            <ContactDetails />
            <ContactForm />
            <MapSection />
        </main>
    );
}
