import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Santos Plumbing | Fast, Professional Plumbing Solutions for Inland Empire",
  description:
    "Santos Plumbing provides fast, professional plumbing solutions for Inland Empire homeowners. From emergency pipe repairs to water heater installations, we get it flowing right the first time. Call (909) 256-9224.",
  keywords: [
    "Santos Plumbing",
    "Inland Empire plumber",
    "emergency plumbing",
    "water heater installation",
    "pipe repair",
    "leak detection",
    "Ontario plumber",
    "Rancho Cucamonga plumber",
    "Fontana plumber",
    "San Bernardino plumber",
  ],
  authors: [{ name: "Santos Plumbing" }],
  icons: {
    icon: "/santos-logo.png",
  },
  openGraph: {
    title: "Santos Plumbing | If You Got A Leak, We'll Take A Peek!",
    description:
      "Fast, professional plumbing solutions for Inland Empire homeowners. Licensed & Insured. 24/7 Emergency Response.",
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
