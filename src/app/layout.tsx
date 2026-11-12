import type { Metadata } from "next";
import { Space_Grotesk, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blackgrapessoftech.com"),
  title: "Black Grapes Softech | Digital Solutions & Software Development",
  description:
    "Black Grapes Softech delivers software development, website design, mobile applications and digital solutions from Indore, India.",
  keywords: [
    "Black Grapes Softech",
    "Software Development Indore",
    "Modern Brutalist Software Agency",
    "Mobile App Development Indore",
    "Custom Software Engineering",
    "Website Designing and Development",
    "CRM MLM Software Indore",
  ],
  icons: {
    icon: "/assets/bgst-logo.png",
    shortcut: "/assets/bgst-logo.png",
    apple: "/assets/bgst-logo.png",
  },
  authors: [{ name: "Black Grapes Softech" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blackgrapessoftech.com",
    title: "Black Grapes Softech | Digital Solutions & Software Development",
    description:
      "Black Grapes Softech delivers software development, website design, mobile applications and digital solutions from Indore, India.",
    siteName: "Black Grapes Softech",
    images: [
      {
        url: "/assets/bgst-logo.png",
        width: 1200,
        height: 630,
        alt: "Black Grapes Softech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Grapes Softech | Digital Solutions & Software Development",
    description:
      "Black Grapes Softech delivers software development, website design, mobile applications and digital solutions from Indore, India.",
    images: ["/assets/bgst-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${dmMono.variable}`}
    >
      <body className="bg-warmGrey text-jet antialiased min-h-screen flex flex-col font-sans selection:bg-tangerine selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
