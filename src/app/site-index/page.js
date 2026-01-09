import Link from "next/link";
import { ChevronRight, LayoutGrid, Box, FileText, Info } from "lucide-react";

export const metadata = {
    title: "Site Index | Fine Steel Furniture Vasai",
    description: "Complete architectural index of Fine Steel Furniture. Navigate through industrial cupboards, technical blogs, and contact portals.",
};

const siteStructure = [
    {
        section: "Core Navigation",
        icon: LayoutGrid,
        links: [
            { name: "Home", href: "/", description: "Engineering & Strength Overview" },
            { name: "Products", href: "/products", description: "Full Industrial Inventory" },
            { name: "Industry Blog", href: "/blog", description: "Technical Guides & Insights" },
            { name: "Contact", href: "/contact", description: "Factory Quote Portal" },
            { name: "Testimonials", href: "/testimonials", description: "Client Success Stories" },
        ],
    },
    {
        section: "Product Sectors",
        icon: Box,
        links: [
            { name: "Office Storage", href: "/products?category=office", description: "Premium MS Cupboards" },
            { name: "Industrial Units", href: "/products?category=industrial", description: "Heavy-Gauge Warehouse Solutions" },
            { name: "Pharma Grade (SS 304)", href: "/products?category=stainless", description: "Sterile Stainless Steel" },
            { name: "Home Furniture", href: "/products?category=home", description: "Modern Steel Wardrobes" },
            { name: "Custom Fabrication", href: "/products?category=custom", description: "Bespoke Engineering" },
        ],
    },
    {
        section: "Knowledge Base",
        icon: FileText,
        links: [
            { name: "Buyer's Guide", href: "/blog", description: "Choosing the Right Steel Gauge" },
            { name: "Factory Maintenance", href: "/blog", description: "7-Tank Process Explained" },
            { name: "Industry Applications", href: "/blog", description: "Storage for Modern Facilities" },
        ],
    },
    {
        section: "Legal & Compliance",
        icon: Info,
        links: [
            { name: "Privacy Policy", href: "/privacy", description: "Data Protection Protocols" },
            { name: "Terms of Service", href: "/terms", description: "Commercial Agreement" },
        ],
    },
];

export default function SitemapPage() {
    const lastUpdated = new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="min-h-screen bg-white">
            {/* --- INDUSTRIAL HERO --- */}
            <section className="bg-[#0F172A] py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
                        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-white">SiteIndex</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Digital <br />
                        <span className="text-slate-500 italic font-serif text-3xl md:text-5xl">Infrastructure</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl font-medium">
                        A complete directory of our digital manufacturing presence. Quickly find technical specs, products, and support.
                    </p>
                </div>
            </section>

            {/* --- INDEX GRID --- */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
                    {siteStructure.map((section) => (
                        <div key={section.section}>
                            <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-4">
                                <section.icon className="text-blue-600" size={24} />
                                <h2 className="text-xl font-black text-[#0F172A] uppercase tracking-tighter">
                                    {section.section}
                                </h2>
                            </div>
                            <ul className="grid gap-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="group flex items-center justify-between p-5 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors" />
                                                <div>
                                                    <span className="block font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                        {link.name}
                                                    </span>
                                                    <p className="text-xs font-medium text-slate-400 mt-0.5">{link.description}</p>
                                                </div>
                                            </div>
                                            <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* --- STATUS BAR --- */}
                <div className="mt-24 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        Index Integrity: <span className="text-blue-600">Verified</span>
                    </p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        Last Crawl Sync: <span className="text-slate-900">{lastUpdated}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}