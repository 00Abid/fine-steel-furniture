import Link from "next/link";
import Image from "next/image";
import {
    ShieldCheck,
    Settings2,
    Truck,
    Factory,
    ArrowUpRight,
    ArrowRight,
    ChevronRight,
    MessageSquare,
    Star
} from "lucide-react";
import { siteConfig, products, blogPosts, testimonials, faqs } from "@/lib/data";

export default function HomePage() {
    const featuredProducts = products.filter((p) => p.featured);
    const featuredTestimonials = testimonials.slice(0, 3);
    const latestBlogs = blogPosts.slice(0, 3);

    // SEO: Unified JSON-LD for Local Business & FAQ
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": siteConfig.name,
            "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2",
            "telephone": siteConfig.phone,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": siteConfig.address.street,
                "addressLocality": siteConfig.address.locality,
                "addressRegion": siteConfig.address.region,
                "postalCode": siteConfig.address.postalCode,
                "addressCountry": siteConfig.address.country
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.4124",
                "longitude": "72.8397"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "09:00",
                    "closes": "13:00"
                }
            ],
            "priceRange": "₹₹",
            "review": featuredTestimonials.map(t => ({
                "@type": "Review",
                "author": { "@type": "Person", "name": t.name },
                "datePublished": t.date,
                "reviewBody": t.content,
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": t.rating,
                    "bestRating": "5"
                }
            })),
            "url": "https://finesteelfurniture.vercel.app"
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        }
    ];

    return (
        <div className="flex flex-col bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* --- HERO: ARCHITECTURAL PRECISION --- */}
            <section className="relative min-h-[90vh] flex items-center bg-[#0F172A] pt-20 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.1]" style={{
                    backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center w-full">
                    <div className="lg:col-span-7 z-10">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.25em] mb-8">
                            <Factory size={14} /> Bilalpada's Leading Manufacturer
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter">
                            Steel <br />
                            <span className="text-slate-500 italic font-serif">Perfected.</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
                            Heavy-duty MS and SS 304 storage units engineered for industrial longevity. Serving Vasai-Virar with 1.2mm gauge precision.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <Link
                                href="/products"
                                className="bg-white text-slate-950 px-10 py-5 rounded-full text-lg font-black flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-2xl"
                            >
                                View Range <ArrowUpRight size={20} />
                            </Link>
                            <a
                                href={siteConfig.whatsappLink}
                                className="border border-slate-700 text-white px-10 py-5 rounded-full text-lg font-bold flex items-center gap-2 hover:bg-slate-800 transition-all"
                            >
                                <MessageSquare size={20} /> WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-4 relative mb-20">
                        <div className="relative z-20 rounded-4xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80"
                                alt="High-Quality Industrial Steel Cupboard"
                                width={800}
                                height={1000}
                                className="object-cover rounded-4xl shadow-2xl"
                                priority
                            />
                        </div>
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/10 blur-[120px]" />
                    </div>
                </div>
            </section>

            {/* --- FEATURES: BENTO GRID STYLE --- */}
            <section className="py-32 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { title: "Durability", desc: "MS & SS 304 construction for harsh industrial use." },
                            { title: "Corrosion Proof", desc: "7-tank powder coating process for zero rust." },
                            { title: "Custom Sizing", desc: "Bespoke blueprints for your specific floor plan." },
                            { title: "Vasai Local", desc: "Fast logistics across Palghar & Maharashtra." }
                        ].map((f, i) => (
                            <div key={i} className="p-10 bg-white rounded-4xl border border-slate-100 hover:border-blue-500/30 hover:shadow-xl transition-all duration-500 group">
                                <p className="text-blue-600 font-black mb-4">0{i + 1}</p>
                                <h3 className="text-xl font-black text-slate-900 mb-3">{f.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FEATURED INVENTORY --- */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <header className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-6">Built for the <br />Heavyweights.</h2>
                            <p className="text-slate-500 font-medium leading-relaxed text-lg">Our core collection features reinforced hinges and high-security locking systems.</p>
                        </div>
                        <Link href="/products" className="group font-black text-sm uppercase tracking-widest flex items-center gap-2 pb-2 border-b-2 border-slate-900">
                            Full Inventory <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </header>

                    <div className="grid md:grid-cols-3 gap-10">
                        {featuredProducts.map((p) => (
                            <div key={p.id} className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-blue-500/20 transition-all duration-500">
                                <div className="aspect-4/5 relative overflow-hidden">
                                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{p.material}</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">{p.name}</h3>
                                    <Link
                                        href={`/contact`}
                                        className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
                                    >
                                        Get a Quote <ChevronRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIALS: INDUSTRIAL TRUST --- */}
            <section className="py-32 bg-[#0F172A] rounded-[4rem] mx-4 overflow-hidden relative border border-slate-800">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl font-black text-white text-center mb-20 tracking-tighter">Voice of Value.</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredTestimonials.map((t) => (
                            <div key={t.id} className="p-10 bg-slate-900/50 backdrop-blur border border-slate-800 rounded-[2.5rem]">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#3b82f6" className="text-blue-500" />)}
                                </div>
                                <p className="text-slate-300 italic mb-8 leading-relaxed font-medium">"{t.content}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold">{t.name[0]}</div>
                                    <div>
                                        <p className="text-white font-black text-sm">{t.name}</p>
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FAQ: EXPERT ANSWERS --- */}
            <section className="py-32 px-6 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">Knowledge Base</span>
                        <h2 className="text-4xl font-black text-slate-900 mb-6">Common Questions</h2>
                    </div>
                    <div className="grid gap-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-500/30 transition-all">
                                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                                    <span className="text-blue-500 mt-1">Q.</span> {faq.question}
                                </h3>
                                <p className="text-slate-600 leading-relaxed pl-8 border-l-2 border-slate-100 ml-1.5">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA: THE BLUEPRINT --- */}
            <section className="py-40 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter">Ready for <br />Iron-Clad Storage?</h2>
                    <Link
                        href="/contact"
                        className="inline-block bg-blue-600 text-white px-16 py-7 rounded-full text-2xl font-black hover:bg-[#0F172A] transition-all shadow-2xl shadow-blue-500/20"
                    >
                        Request Custom Quote
                    </Link>
                    <p className="mt-8 text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">2-Hour Response Time • Vasai Unit</p>
                </div>
            </section>

        </div>
    );
}