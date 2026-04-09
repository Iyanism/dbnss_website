import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Bhabendra Nath Saikia Senior Secondary School | Best School in Khetri, Assam",
    template: "%s | Dr. Bhabendra Nath Saikia School",
  },
  description: "Dr. Bhabendra Nath Saikia Senior Secondary School (Est. 2016) offers premier education from Junior School (LKG) to Senior Secondary (Class 12). Specialized in Arts and Science streams with modern infrastructure in Khetri, Assam.",
  keywords: [
    "best school in Khetri",
    "senior secondary school Assam",
    "junior school Khetri",
    "LKG to 12th school Khetri",
    "Arts and Science streams Khetri",
    "Dr. Bhabendra Nath Saikia School",
    "Board Exam Excellence",
    "Holistic Education Khetri"
  ],
  openGraph: {
    title: "Dr. Bhabendra Nath Saikia Senior Secondary School",
    description: "Nurturing future leaders in Khetri, Assam. Excellence in Arts and Science streams from LKG to Class 12.",
    url: "https://dbnss-school.edu.in", // Placeholder URL
    siteName: "DBNSS School",
    images: [
      {
        url: "/school-about.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Bhabendra Nath Saikia Senior Secondary School Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Bhabendra Nath Saikia Senior Secondary School",
    description: "Premier Senior Secondary School in Khetri, Assam.",
    images: ["/school-about.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Analytics />
        <SpeedInsights />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
