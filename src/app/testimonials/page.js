import Link from "next/link";
import { ChevronRight, Star, Quote, ArrowRight, CheckCircle2, Users, Award } from "lucide-react";
import { testimonials } from "@/lib/data";

export const metadata = {
    title: "Client Testimonials | Fine Steel Furniture Vasai",
    description: "Read verified reviews from industrial factory owners and office managers who trust our high-gauge steel cupboards.",
};

export default function TestimonialsPage() {
    const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

    return (
        <div className="min-h-screen bg-white">
            {/* --- INDUSTRIAL HERO HEADER --- */}
            <section className="bg-[#0F172A] py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
                        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-white">Testimonials</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Voice of <br />
                        <span className="text-slate-500 italic font-serif text-3xl md:text-5xl">Our Clients</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl font-medium">
                        Real-world feedback from manufacturing units, corporate offices, and institutions across Maharashtra who rely on our steel storage engineering.
                    </p>
                </div>
            </section>

            {/* --- TRUST METRICS BAR --- */}
            <section className="py-12 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                <Star size={32} fill="currentColor" />
                            </div>
                            <div>
                                <p className="text-3xl font-black text-slate-900 leading-none">{averageRating.toFixed(1)}/5.0</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Verified Avg Rating</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                <Users size={32} />
                            </div>
                            <div>
                                <p className="text-3xl font-black text-slate-900 leading-none">{testimonials.length}+</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Industrial Partners</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                                <Award size={32} />
                            </div>
                            <div>
                                <p className="text-3xl font-black text-slate-900 leading-none">100%</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-2">Quality Guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TESTIMONIAL FEED --- */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t) => (
                            <div key={t.id} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-500 group relative">
                                <Quote className="absolute top-8 right-8 text-slate-100 group-hover:text-blue-50" size={60} />

                                <div className="relative z-10">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} size={14} className="fill-blue-600 text-blue-600" />
                                        ))}
                                    </div>

                                    <p className="text-slate-600 font-medium leading-relaxed mb-8 italic">
                                        &ldquo;{t.content}&rdquo;
                                    </p>

                                    <div className="pt-6 border-t border-slate-50">
                                        <p className="font-black text-slate-900 tracking-tight">{t.name}</p>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mt-1">
                                            {t.role} {t.company && `• ${t.company}`}
                                        </p>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-[9px] font-bold bg-slate-50 text-slate-400 px-3 py-1 rounded-full uppercase tracking-tighter border border-slate-100">
                                                {t.product}
                                            </span>
                                            <p className="text-[10px] font-bold text-slate-300">
                                                {new Date(t.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA: CONVERT TRUST INTO LEADS --- */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto bg-[#0F172A] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                            Ready for a <br />Better Storage Experience?
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto font-medium">
                            Join 500+ satisfied businesses in Vasai-Virar who upgraded to Fine Steel quality.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/products"
                                className="bg-white text-slate-900 px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl"
                            >
                                Explore Inventory
                            </Link>
                            <Link
                                href="/contact"
                                className="border border-slate-700 text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-slate-800 transition-all"
                            >
                                Request Custom Quote
                            </Link>
                        </div>
                    </div>
                    {/* Decorative Icon */}
                    <CheckCircle2 className="absolute -bottom-10 -right-10 w-80 h-80 text-white/5 -rotate-12" />
                </div>
            </section>
        </div>
    );
}