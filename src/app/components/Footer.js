import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/data";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/products" },
    { name: "Industry Blog", href: "/blog" },
    { name: "Customer Reviews", href: "/testimonials" },
    { name: "Contact Support", href: "/contact" },
];

const legalLinks = [
    { name: "Site-Index", href: "/sitemap" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
    return (
        <footer className="bg-[#0F172A] text-white border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Identity Section */}
                    <div className="space-y-6">
                        <Link href="/" className="relative h-28 w-44 block transition-transform hover:scale-105">
                            <Image
                                src="/fsf-logo.webp"
                                alt="Fine Steel Furniture - Industrial Storage Vasai"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Premier industrial steel cupboard manufacturer in **Bilalpada, Vasai**.
                            Specializing in high-gauge MS and SS 304 storage solutions for over a decade.
                        </p>
                        <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] uppercase tracking-widest bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-500/20">
                            <ShieldCheck size={12} /> ISO Certified Quality
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 mb-8">Navigation</h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 text-sm hover:text-blue-400 hover:translate-x-1 transition-all inline-block font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details - SEO Geo-Tagging */}
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 mb-8">Contact Unit</h3>
                        <ul className="space-y-5">
                            <li>
                                <a href={`tel:${siteConfig.phone}`} className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                                    <Phone size={16} className="text-blue-500" />
                                    <span className="text-sm font-bold tracking-tight">{siteConfig.phone}</span>
                                </a>
                            </li>
                            <li>
                                <a href={siteConfig.whatsappLink} className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                                    <MessageCircle size={16} className="text-blue-500" />
                                    <span className="text-sm font-bold tracking-tight">Direct WhatsApp</span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-500 mt-1 shrink-0" />
                                <span className="text-sm text-slate-400 leading-relaxed font-medium">
                                    {siteConfig.address.street},<br />
                                    {siteConfig.address.locality}, {siteConfig.address.region} <br />
                                    PIN: {siteConfig.address.postalCode}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Logistics & Timing Section */}
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-500 mb-8">Factory Hours</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <Clock size={16} className="text-blue-500" />
                                <span className="text-sm font-bold uppercase tracking-tight">{siteConfig.hours.weekdays}</span>
                            </div>
                            <p className="text-slate-500 text-xs ml-7 italic font-medium">Delivery available across Maharashtra.</p>

                        </div>
                    </div>
                </div>
            </div>

            {/* Legal Strip */}
            <div className="border-t border-slate-900 bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                        © {new Date().getFullYear()} Fine Steel Furniture. Bilalpada's Trusted Manufacturer.
                    </p>
                    <div className="flex gap-8">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-blue-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}