import Link from "next/link";
import { Home, Search, ArrowRight, Box, MessageSquare } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 bg-white">
            <div className="text-center max-w-2xl">

                {/* --- INDUSTRIAL ERROR GRAPHIC --- */}
                <div className="relative mb-12">
                    <h1 className="text-[120px] md:text-[200px] font-black text-black leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-blue-50 rounded-4xl flex items-center justify-center rotate-12 border border-blue-100 shadow-xl shadow-blue-900/5">
                            <Search className="h-10 w-10 text-blue-600 -rotate-12" />
                        </div>
                    </div>
                </div>

                {/* --- CONTENT --- */}
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">
                    Blueprint Not Found
                </h2>

                <p className="text-lg text-slate-500 mb-12 font-medium leading-relaxed">
                    The storage solution or page you&apos;re looking for has been moved or de-indexed.
                    Let&apos;s get your project back on schedule.
                </p>

                {/* --- PRIMARY ACTIONS --- */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="w-full sm:w-auto bg-[#0F172A] text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-xl"
                    >
                        <Home size={16} /> Return to Factory Home
                    </Link>

                    <Link
                        href="/products"
                        className="w-full sm:w-auto border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
                    >
                        <Box size={16} /> Browse Inventory
                    </Link>
                </div>

                {/* --- SEO LINK CLOUD (Internal Link Recovery) --- */}
                <div className="mt-20 py-10 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
                        Technical Support Links
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: "SS 304 Catalog", href: "/products?category=stainless" },
                            { name: "Office Units", href: "/products?category=office" },
                            { name: "Maintenance Blog", href: "/blog" },
                            { name: "Direct WhatsApp", href: "/contact" }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-blue-200 transition-all"
                            >
                                <span className="text-[11px] font-bold text-slate-600 group-hover:text-blue-600 block">
                                    {link.name}
                                </span>
                                <ArrowRight size={12} className="text-slate-300 mt-2 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}