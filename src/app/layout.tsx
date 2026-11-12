import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL("https://blackgrapessoftech.com"),
  title: {
    default: "Black Grapes Softech | Innovate. Integrate. Elevate.",
    template: "%s | Black Grapes Softech",
  },
  description:
    "Black Grapes Softech is an enterprise software development company in Indore, India. We specialize in custom software, mobile app development (iOS & Android), web development, CRM & MLM software, and government tender services.",
  keywords: [
    "Black Grapes Softech",
    "Software Development Company in Indore",
    "Best Mobile App Development Company",
    "Website Development Indore",
    "Custom CRM Development",
    "MLM Software Development",
    "Government Tender Services",
    "IT Staffing India",
    "Enterprise Software Solutions",
  ],
  authors: [{ name: "Black Grapes Softech" }],
  creator: "Black Grapes Softech",
  publisher: "Black Grapes Softech",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blackgrapessoftech.com",
    title: "Black Grapes Softech | Premium Enterprise Software Development",
    description:
      "Transforming Ideas Into Powerful Digital Experiences. Custom software, mobile apps, CRM, MLM, and cloud platforms.",
    siteName: "Black Grapes Softech",
    images: [
      {
        url: "/assets/bgst-logo.png",
        width: 1200,
        height: 630,
        alt: "Black Grapes Softech Corporate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Grapes Softech | Enterprise Software & Technology",
    description: "Innovate. Integrate. Elevate. Transforming ideas into digital success.",
    images: ["/assets/bgst-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-obsidian text-soft-white antialiased min-h-screen flex flex-col selection:bg-purple-rich selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}

