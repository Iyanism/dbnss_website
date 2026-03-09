import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Dr. Bhabendra Nath Saikia Senior Secondary School | Best School in Khetri, Assam",
  description: "Dr. Bhabendra Nath Saikia Senior Secondary School offers excellence in education from LKG to Class 12 with Arts and Science streams. Located in Khetri, Kamrup (M), Assam, we provide modern infrastructure and holistic development for students.",
  keywords: ["best school in Khetri", "senior secondary school Assam", "LKG to 12th school Khetri", "Arts and Science streams Khetri", "Dr. Bhabendra Nath Saikia School"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Analytics />
        <SpeedInsights />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
