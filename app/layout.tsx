import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import JsonLd from "./components/JsonLd";
import StickyWhatsApp from "./components/StickyWhatsApp";
import { coverImageUrl, profileImageUrl } from "./lib/data";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beebaexpert.com"),
  title: {
    default: "Beeba Expert — Shopify Expert & Ecommerce Store Builder",
    template: "%s | Beeba Expert",
  },
  description:
    "Beeba Expert is a Shopify specialist helping store owners design, build, and optimize ecommerce stores that convert. 450+ projects completed, 5.0 client rating.",
  keywords: [
    "Shopify expert",
    "Shopify developer",
    "Shopify store design",
    "ecommerce expert",
    "Shopify dropshipping expert",
    "Facebook ads expert",
    "Shopify store optimization",
    "Beeba Expert",
  ],
  authors: [{ name: "Beeba Expert" }],
  openGraph: {
    title: "Beeba Expert — Shopify Expert & Ecommerce Store Builder",
    description:
      "Shopify specialist helping store owners build stores that convert. 450+ projects completed, 5.0 client rating.",
    url: "https://beebaexpert.com",
    siteName: "Beeba Expert",
    images: [
      {
        url: coverImageUrl,
        width: 1200,
        height: 630,
        alt: "Beeba Expert - Shopify Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beeba Expert — Shopify Expert & Ecommerce Store Builder",
    description:
      "Shopify specialist helping store owners build stores that convert.",
    images: [coverImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: profileImageUrl,
    apple: profileImageUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
