"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowRight, Factory } from "lucide-react";
import { siteConfig } from "@/lib/data";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Inventory", href: "/products" },
    { name: "Insights", href: "/blog" },
    { name: "Reviews", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${scrolled ? "py-3" : "py-6"
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className={`relative flex items-center justify-between  transition-all duration-500 rounded-4xl border border-white/10 px-6 py-3 ${scrolled ? "bg-slate-900/80 backdrop-blur-xl shadow-2xl border-slate-800" : "bg-transparent"
                    }`}>

                    {/* LOGO AREA */}
                    <Link href="/" className="relative z-10 flex gap-3 group">
                        <div className="relative h-12 w-24 md:w-44 md:mx-5 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/fsf-logo.webp"
                                alt="Fine Steel Furniture Manufacturing Vasai"
                                fill
                                className="object-contain brightness-0 invert" // Keeping it white/silver for the dark hero
                                priority
                            />
                        </div>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <nav className="hidden lg:flex items-center gap-1 border-x border-white/10 px-8 mx-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-5 py-2 text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 hover:text-white transition-all hover:bg-white/5 rounded-full"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* ACTION BUTTONS */}
                    <div className="hidden md:flex items-center gap-6">
                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                            <Phone size={16} strokeWidth={3} />
                            <span className="text-[11px] font-black uppercase tracking-widest">{siteConfig.phone}</span>
                        </a>

                    
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="lg:hidden p-2 text-white bg-white/10 rounded-xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE NAV OVERLAY */}
            <div className={`fixed inset-0 bg-slate-950 z-90 transition-all duration-500 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}>
                <div className="flex flex-col h-full justify-center items-center gap-8 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Navigation</p>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl md:text-6xl font-black text-white tracking-tighter hover:text-blue-500 transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="mt-12 flex flex-col items-center gap-4">
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest">
                            Start Inquiry
                        </Link>
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Bilalpada, Vasai East Unit</p>
                    </div>
                </div>
            </div>
        </header>
    );
}