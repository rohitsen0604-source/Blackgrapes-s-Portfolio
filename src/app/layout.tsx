import type { Metadata } from "next";
import { Manrope, Inter, Playfair_Display, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: "italic",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blackgrapessoftech.com"),
  title: {
    default: "Black Grapes Softech — Modern Editorial Technology Studio",
    template: "%s | Black Grapes Softech",
  },
  description:
    "Black Grapes Softech is an enterprise software development and digital transformation studio in Indore, India. Building digital experiences that move business forward.",
  keywords: [
    "Black Grapes Softech",
    "Software Development Indore",
    "Modern Editorial Software Studio",
    "Mobile App Development Indore",
    "Custom Software Engineering",
    "Website Designing and Development",
    "CRM MLM Software Indore",
  ],
  authors: [{ name: "Black Grapes Softech" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blackgrapessoftech.com",
    title: "Black Grapes Softech — Modern Editorial Technology Studio",
    description: "Building digital experiences that move business forward. Custom enterprise software, web applications and mobile engineering.",
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
    title: "Black Grapes Softech — Modern Editorial Technology Studio",
    description: "Building digital experiences that move business forward.",
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
      className={`${manrope.variable} ${inter.variable} ${playfair.variable} ${dmMono.variable}`}
    >
      <head>
        <link rel="icon" href="/assets/bgst-logo.png" />
      </head>
      <body className="bg-offwhite text-navy antialiased min-h-screen flex flex-col font-sans selection:bg-coral selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
