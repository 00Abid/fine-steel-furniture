import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileCheck, Scale, AlertCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export const metadata = {
    title: "Terms & Conditions | Fine Steel Furniture",
    description: "Commercial terms and service agreements for Fine Steel Furniture manufacturing and supply.",
};

export default function TermsPage() {
    const lastUpdated = new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

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
                        <span className="text-white">Terms</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Service <br />
                        <span className="text-slate-500 italic font-serif text-3xl md:text-5xl">Agreement</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl font-medium">
                        Standard operating procedures and commercial terms for all fabrication projects at our Vasai manufacturing unit.
                    </p>
                </div>
            </section>

            {/* --- TERMS CONTENT --- */}
            <div className="max-w-4xl mx-auto px-6 py-20">

                {/* Quick Summary Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <FileCheck className="text-blue-600 mb-4" size={24} />
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Warranty</p>
                        <p className="text-sm font-bold text-slate-900">2-Year Structural</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <Scale className="text-blue-600 mb-4" size={24} />
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Jurisdiction</p>
                        <p className="text-sm font-bold text-slate-900">Vasai Courts</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <AlertCircle className="text-blue-600 mb-4" size={24} />
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Last Updated</p>
                        <p className="text-sm font-bold text-slate-900">{lastUpdated}</p>
                    </div>
                </div>

                <div className="text-black">

                    <h2>1. Acceptance of Service</h2>
                    <p>
                        By engaging Fine Steel Furniture for manufacturing or procurement, you agree to these commercial terms. These terms govern all transactions initiated via our website or Bilalpada workshop.
                    </p>

                    <h2>2. Production & Specifications</h2>
                    <p>
                        Our steel cupboards and SS 304 cabinets are engineered to industrial tolerances.
                    </p>
                    <ul>
                        <li>Dimensions are based on approved blueprints; minor variations up to 2mm are industry standard.</li>
                        <li>Custom color requests use the RAL color matching system.</li>
                        <li>Lead times begin only after initial 50% deposit verification.</li>
                    </ul>

                    <h2>3. Commercial Payment Terms</h2>
                    <p>To maintain our production pipeline in Vasai, we follow a strict payment milestone structure:</p>
                    <ul>
                        <li><strong>50% Advance:</strong> Required to initiate raw material (Tata Steel/Jindal) procurement.</li>
                        <li><strong>50% Balance:</strong> Due upon completion of fabrication and prior to dispatch.</li>
                    </ul>

                    <h2>4. Delivery & Installation</h2>
                    <p>
                        We manage our own logistics fleet for deliveries across Maharashtra.
                    </p>
                    <ul>
                        <li>Ground floor delivery is standard; additional labor charges apply for upper floors without industrial lifts.</li>
                        <li>Site readiness for installation is the responsibility of the client.</li>
                    </ul>

                    <h2>5. 2-Year Limited Warranty</h2>
                    <p>
                        Fine Steel Furniture provides a <strong>24-month structural warranty</strong>. This covers welding integrity, locking mechanisms, and powder-coating adhesion. It does not cover accidental impact, chemical spills, or overloading beyond specified weight capacities.
                    </p>

                    <div className="mt-20 p-12 bg-[#0F172A] rounded-[3rem] text-white relative overflow-hidden">
                        <h2 className="text-white mt-0 text-3xl">Legal Inquiries</h2>
                        <p className="text-slate-400 mb-8">For formal documentation or corporate vendor registration, please contact our administrative head.</p>

                        <div className="space-y-4 not-prose">
                            <p className="text-lg font-bold">Email: {siteConfig.email}</p>
                            <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">
                                Workshop: {siteConfig.address.street}, {siteConfig.address.locality}
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="mt-10 inline-block bg-blue-600 text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all"
                        >
                            Contact Administration
                        </Link>
                    </div>

                    <h2 className="mt-20">10. Governing Law</h2>
                    <p>
                        All commercial agreements with Fine Steel Furniture are governed by the laws of India. Any legal disputes are strictly subject to the jurisdiction of the courts in <strong>Vasai, Maharashtra</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
}