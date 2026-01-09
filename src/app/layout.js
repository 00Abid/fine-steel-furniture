import "./globals.css";
import { Header } from "./components/Header"; // Verified path
import { Footer } from "./components/Footer"; // Verified path


// SEO MASTER-STROKE: Global Metadata for Fine Steel Furniture
export const metadata = {
  title: {
    default: "Fine Steel Furniture | Industrial Cupboards & Storage Vasai",
    template: "%s | Fine Steel Furniture"
  },
  description: "Premier manufacturer of MS & SS 304 steel cupboards in Bilalpada, Vasai. High-gauge industrial storage solutions engineered for durability.",
  keywords: ["Steel Cupboard Vasai", "Industrial Storage Maharashtra", "SS 304 Cabinets Bilalpada", "Office Almirah Manufacturer"],
  metadataBase: new URL('https://finesteelfurniture.vercel.app'), // Replace with actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://finesteelfurniture.vercel.app',
    siteName: 'Fine Steel Furniture',
    images: [
      {
        url: '/og.webp', // Place a high-quality industrial photo in public folder
        width: 1200,
        height: 630,
        alt: 'Fine Steel Furniture Manufacturing Unit',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
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