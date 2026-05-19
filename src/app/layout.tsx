import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SiteHeader from "@/components/site-header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Santos Plumbing | Fast, Professional Plumbing for Inland Empire & Foothill Communities",
  description:
    "Santos Plumbing provides fast, professional plumbing solutions for Inland Empire and Foothill homeowners. Serving a 15-mile radius from Upland, CA across San Bernardino, Riverside, and East Los Angeles Counties. 24/7 emergency pipe repairs, water heater installations, and leak detection. Call (909) 256-2244.",
  keywords: [
    "Santos Plumbing",
    "Inland Empire plumber",
    "Foothill plumber",
    "Upland plumber",
    "emergency plumbing",
    "water heater installation",
    "pipe repair",
    "leak detection",
    "Ontario plumber",
    "Rancho Cucamonga plumber",
    "Fontana plumber",
    "San Bernardino plumber",
    "Claremont plumber",
    "Glendora plumber",
    "Chino Hills plumber",
    "Eastvale plumber",
    "Diamond Bar plumber",
    "Victorville plumber",
    "slab leak detection",
    "tankless water heater",
    "re-piping",
    "drain cleaning",
  ],
  authors: [{ name: "Santos Plumbing" }],
  icons: {
    icon: "/santos-logo-v2.png",
  },
  openGraph: {
    title: "Santos Plumbing | If You Got A Leak, We'll Take A Peek!",
    description:
      "Fast, professional plumbing solutions for Inland Empire and Foothill homeowners. Serving a 15-mile radius from Upland, CA. 1,000+ Neighbors Served. 24/7 Emergency Response.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-white text-gray-900 font-sans`}>
        <SiteHeader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
