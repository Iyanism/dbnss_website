import { Metadata } from "next";
import AdmissionHero from "@/components/admissions/AdmissionHero";
import AdmissionDetails from "@/components/admissions/AdmissionDetails";

export const metadata: Metadata = {
    title: "Admissions | Dr. Bhabendra Nath Saikia Senior Secondary School",
    description: "Find information about admission eligibility, required documentation, and fee structure for Arts and Science streams at Dr. Bhabendra Nath Saikia School.",
};

export default function AdmissionsPage() {
    return (
        <main className="min-h-screen bg-white">
            <AdmissionHero />
            <AdmissionDetails />
        </main>
    );
}
