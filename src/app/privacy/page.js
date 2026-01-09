import Link from "next/link";
import { ChevronRight, ShieldCheck, Lock, Eye } from "lucide-react";
import { siteConfig } from "@/lib/data";

export const metadata = {
    title: "Privacy Policy | Fine Steel Furniture Vasai",
    description: "Our commitment to protecting your data. Learn how Fine Steel Furniture handles your inquiry and order information.",
};

export default function PrivacyPage() {
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
                        <span className="text-white">Privacy</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Data & Privacy <br />
                        <span className="text-slate-500 italic font-serif text-3xl md:text-5xl">Our Commitment</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl font-medium">
                        Fine Steel Furniture prioritizes your security. This policy outlines how we manage your information across our Vasai manufacturing unit and digital platforms.
                    </p>
                </div>
            </section>

            {/* --- POLICY CONTENT --- */}
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="mb-12 flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <ShieldCheck className="text-blue-600 shrink-0" size={32} />
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Policy Status</p>
                        <p className="text-sm font-bold text-slate-900 uppercase">Active & Updated: {lastUpdated}</p>
                    </div>
                </div>

                <div className="text-black">

                    <h2>1. Overview</h2>
                    <p>
                        Fine Steel Furniture (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the manufacturing unit in Bilalpada, Vasai. We are committed to safeguarding the privacy of our clients and website visitors. This policy applies where we are acting as a data controller with respect to your personal data.
                    </p>

                    <h2>2. Data We Collect</h2>
                    <h3>Inquiry Information</h3>
                    <p>When you contact us via our quote form or WhatsApp, we collect:</p>
                    <ul>
                        <li>Full Name and Professional Title</li>
                        <li>Contact details (Phone, Email)</li>
                        <li>Company / Organization affiliation</li>
                        <li>Project blueprints or storage requirements</li>
                    </ul>

                    <h3>Technical Logs</h3>
                    <p>To optimize our local SEO and site performance, we may collect:</p>
                    <ul>
                        <li>IP address and approximate geographic location (Vasai-Virar region)</li>
                        <li>Browser type and version</li>
                        <li>Referral source and navigation paths</li>
                    </ul>

                    <h2>3. How We Use Your Data</h2>
                    <p>Information collected at our Bilalpada office is used to:</p>
                    <ul>
                        <li>Generate accurate technical quotes for steel cupboards</li>
                        <li>Coordinate logistics and delivery within Maharashtra</li>
                        <li>Ensure compliance with industrial safety and tax regulations</li>
                        <li>Analyze website traffic to improve user experience</li>
                    </ul>

                    <h2>4. Data Retention & Security</h2>
                    <p>
                        We implement high-grade encryption and physical security measures at our workshop to protect your data.
                        Industrial order records are retained for <strong>7 years</strong> to comply with Indian accounting and commercial laws.
                    </p>

                    <h2>5. Your Rights</h2>
                    <p>Under Indian data protection guidelines, you have the right to:</p>
                    <ul>
                        <li>Request a copy of the personal data we hold about your business</li>
                        <li>Request corrections to any inaccurate technical or contact information</li>
                        <li>Request deletion of data (provided it does not conflict with legal audit requirements)</li>
                    </ul>

                    <div className="mt-16 p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem]">
                        <h2 className="mt-0 text-2xl">Contact Privacy Officer</h2>
                        <p className="text-sm mb-6">For any data-related concerns or to request data removal, please contact our administrative team:</p>

                        <div className="space-y-4 not-prose">
                            <div className="flex items-center gap-3 text-slate-900 font-bold text-sm">
                                <Lock className="text-blue-600" size={18} />
                                <span>Email: {siteConfig.email}</span>
                            </div>
                            <div className="flex items-start gap-3 text-slate-600 text-sm">
                                <Eye className="text-blue-600 mt-1" size={18} />
                                <span>
                                    Office: {siteConfig.address.street},<br />
                                    {siteConfig.address.locality}, {siteConfig.address.region} - {siteConfig.address.postalCode}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}