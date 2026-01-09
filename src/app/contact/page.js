import { Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import { siteConfig, faqs } from "@/lib/data";

export default function ContactPage({ searchParams }) {
    const product = searchParams?.product || "";

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
                        <span className="text-white">Contact</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Get a Quote <br />
                        <span className="text-slate-500 italic font-serif text-3xl md:text-5xl">Get Response in under 120 mins</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl font-medium">
                        Direct WhatsApp line to our factory unit in Bilalpada, Vasai.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">
                {/* Contact Sidebar */}
                <aside className="lg:col-span-4 space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-blue-600">Quick Contact</h3>
                        <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-500 transition-all group">
                            <Phone className="text-blue-600" />
                            <span className="font-black text-slate-900">{siteConfig.phone}</span>
                        </a>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-blue-600">Factory Location</h3>
                        <div className="flex gap-4">
                            <MapPin className="text-slate-400 shrink-0" />
                            <p className="text-sm font-bold text-slate-500 leading-relaxed uppercase">
                                {siteConfig.address.street},<br />
                                {siteConfig.address.locality}, {siteConfig.address.region}
                            </p>
                        </div>
                    </div>
                </aside>

                {/* Lead Engine */}
                <div className="lg:col-span-8">
                    <ContactForm initialProduct={product} />
                </div>
            </div>

            {/* Manual FAQ Section - Best for SEO indexing */}
            <section className="max-w-4xl mx-auto px-6 py-32 border-t border-slate-100">
                <h2 className="text-4xl font-black text-slate-900 mb-16 text-center tracking-tighter">Common Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-slate-50 rounded-4xl overflow-hidden border border-transparent open:border-slate-200 transition-all">
                            <summary className="flex justify-between items-center p-8 cursor-pointer font-black text-slate-900 list-none">
                                {faq.question}
                                <ChevronDown className="group-open:rotate-180 transition-transform text-blue-600" />
                            </summary>
                            <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </section>
        </div>
    );
}