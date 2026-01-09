import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Filter, Check, ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

export const metadata = {
    title: "Industrial Steel Cupboards Catalog | Fine Steel Furniture",
    description: "Browse our heavy-duty MS and SS 304 storage solutions. 1.2mm gauge steel cupboards fabricated in Bilalpada, Vasai.",
};

// Next.js 15+ requires params and searchParams to be awaited
export default async function ProductsPage({ searchParams }) {
    // 1. Await the searchParams Promise
    const resolvedSearchParams = await searchParams;
    const category = resolvedSearchParams?.category || "all";

    const filteredProducts = products.filter((p) =>
        category === "all" || p.category === category
    );

    return (
        <div className="min-h-screen bg-white">
            {/* --- PAGE HEADER --- */}
            <section className="bg-[#0F172A] py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
                        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-white">Products</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Industrial Storage <br />
                        <span className="text-slate-500 italic font-serif text-3xl md:text-5xl">Inventory Catalog</span>
                    </h1>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* --- SIDEBAR FILTERS --- */}
                    <aside className="lg:w-64 shrink-0">
                        <div className="sticky top-32">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-6 flex items-center gap-2">
                                <Filter size={14} /> Filter by Sector
                            </h3>
                            <div className="flex flex-wrap lg:flex-col gap-2">
                                {["all", "office", "industrial", "stainless", "home"].map((cat) => (
                                    <Link
                                        key={cat}
                                        href={`/products?category=${cat}`}
                                        className={`px-5 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all border ${category === cat
                                            ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                                            : "bg-white text-slate-500 border-slate-100 hover:border-blue-500"
                                            }`}
                                    >
                                        {cat}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* --- PRODUCT GRID --- */}
                    <div className="flex-1">
                        <div className="grid md:grid-cols-2 gap-8">
                            {filteredProducts.map((p) => (
                                <div key={p.id} className="group border border-slate-100 rounded-[2.5rem] overflow-hidden bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500">
                                    <div className="aspect-16/10 relative overflow-hidden bg-slate-50">
                                        <Image
                                            src={p.image}
                                            alt={p.name}
                                            fill
                                            // 2. Added 'sizes' to fix the console warnings
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-6 right-6">
                                            <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm border border-slate-100">
                                                {p.material}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors font-sans">
                                            {p.name}
                                        </h3>
                                        <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                            <Link
                                                href={`/contact?product=${p.slug}`}
                                                className="bg-[#0F172A] text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10 flex items-center gap-2"
                                            >
                                                Inquire <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}