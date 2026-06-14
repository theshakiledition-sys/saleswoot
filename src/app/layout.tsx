import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geist_mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SalesWoot - Leads-as-a-Service Platform",
  description: "SalesWoot is a Leads-as-a-Service platform and service provider. Using our unique data-driven technology we generate lead databases with 99% accuracy. Get verified, decision-ready prospects delivered through cold email and LinkedIn outreach.",
  keywords: "lead generation, cold email, LinkedIn outreach, sales leads, B2B leads, omnichannel outreach",
  openGraph: {
    title: "SalesWoot - Generate High-Quality Sales Leads",
    description: "Transform your sales pipeline with verified, decision-ready leads. 99% accuracy guarantee.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geist_mono.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
