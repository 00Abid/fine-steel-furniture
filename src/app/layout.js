import "./globals.css";
import { Header } from "./components/Header"; // Verified path
import { Footer } from "./components/Footer"; // Verified path


import { siteConfig } from "@/lib/data";

// SEO MASTER-STROKE: Global Metadata for Fine Steel Furniture
// Supported languages and regions
const languages = [
  { code: 'en', region: 'IN', name: 'English (India)' },
  { code: 'mr', region: 'IN', name: 'मराठी (भारत)' },
  { code: 'hi', region: 'IN', name: 'हिंदी (भारत)' },
];

export const metadata = {
  metadataBase: new URL('https://finesteelfurniture.vercel.app'),
  title: {
    default: "Fine Steel Furniture | Industrial Cupboards & Storage Vasai",
    template: "%s | Fine Steel Furniture"
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      'mr-IN': '/mr',
      'hi-IN': '/hi',
    },
  },
  description: "Premier manufacturer of MS & SS 304 steel cupboards in Bilalpada, Vasai. High-gauge industrial storage solutions engineered for durability.",
  keywords: ["Steel Cupboard Vasai", "Industrial Storage Maharashtra", "SS 304 Cabinets Bilalpada", "Office Almirah Manufacturer", "Heavy Duty Steel Cupboards", "Custom Metal Storage"],
  authors: [{ name: "Fine Steel Furniture Team" }],
  creator: "Fine Steel Furniture",
  publisher: "Fine Steel Furniture",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Fine Steel Furniture | Industrial Cupboards & Storage",
    description: "Heavy-duty MS and SS 304 storage units engineered for industrial longevity. Serving Vasai-Virar.",
    type: 'website',
    locale: 'en_IN',
    url: 'https://finesteelfurniture.vercel.app',
    siteName: 'Fine Steel Furniture',
    images: [
      {
        url: '/og.webp',
        width: 1200,
        height: 630,
        alt: 'Fine Steel Furniture Manufacturing Unit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fine Steel Furniture | Industrial Storage",
    description: "Premier manufacturer of MS & SS 304 steel cupboards in Vasai.",
    images: ['/og.webp'],
  },
};

export default function RootLayout({ children }) {
  // Global Schema: Establishing Brand Identity
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": "https://finesteelfurniture.vercel.app",
    "logo": "https://finesteelfurniture.vercel.app/logo.webp", // Ensure this exists or use a valid path
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone,
      "contactType": "sales",
      "areaServed": "IN"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": siteConfig.address.locality,
      "addressRegion": siteConfig.address.region,
      "postalCode": siteConfig.address.postalCode,
      "addressCountry": siteConfig.address.country
    },
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin
    ]
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={` antialiased bg-white selection:bg-blue-100 selection:text-blue-900`}
      >
        <Header />
        {/* Main Content Area */}
        <main className="min-h-screen flex flex-col">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}