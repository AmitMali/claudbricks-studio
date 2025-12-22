import type { Metadata, Viewport } from "next";
import { Inter_Tight, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// Font for Headlines: Bold & Professional
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["600", "700", "800"],
});

// Font for UI/Body: Technical & Clean
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const viewport: Viewport = {
  themeColor: "#09090B",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Claudbricks | SEO-Driven Next.js Development Studio",
  description:
    "High-performance web architecture for international small businesses. We build 'Speed as a Signal' using Next.js 16.",
  metadataBase: new URL("https://claudbricks.com"), // Change this to your domain later
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://claudbricks.com",
    title: "Claudbricks | Speed-First SEO Studio",
    description: "Engineering search-dominant websites for the modern web.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${interTight.variable} ${geistSans.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning // <--- Add this here too
      >
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>

        {/* JSON-LD for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Claudbricks",
              image: "https://claudbricks.com/logo.png",
              description: "Boutique SEO and Next.js development studio.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
