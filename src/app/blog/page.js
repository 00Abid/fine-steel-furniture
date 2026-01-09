import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

// SEO Metadata for Google Dominance
export const metadata = {
    title: "Steel Storage Insights - Fine Steel Furniture Blog",
    description: "Expert guides on MS vs SS 304, industrial storage maintenance, and factory furniture trends in Vasai-Virar.",
};

export default function BlogPage() {
    const categories = [...new Set(blogPosts.map((post) => post.category))];
    const recentPosts = blogPosts.slice(0, 5);

    return (
        <div className="min-h-screen bg-white">

            {/* --- INDUSTRIAL HERO HEADER (MODERN SLATE) --- */}
            <section className="bg-[#0F172A] py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
                        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <span className="text-white">Blog</span>
                    </nav>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        Steel Storage <br />
                        <span className="text-slate-500 italic font-serif text-3xl md:text-5xl">Industry Insights</span>
                    </h1>
                    <p className="text-lg text-slate-400 max-w-2xl font-medium">
                        Expert maintenance tips, design trends, and technical guides for heavy-duty storage fabricated in Bilalpada, Vasai.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* --- MAIN BLOG FEED (SSR) --- */}
                    <div className="flex-1">
                        <div className="grid md:grid-cols-2 gap-10">
                            {blogPosts.map((post) => (
                                <article key={post.id} className="group flex flex-col h-full border border-slate-100 rounded-[2.5rem] overflow-hidden bg-white hover:shadow-2xl transition-all duration-500">
                                    <div className="relative h-56 overflow-hidden bg-slate-50">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-[#0F172A] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                                            <span className="flex items-center gap-1.5 text-blue-600">
                                                <Calendar size={14} /> {post.publishedAt}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={14} /> {post.readTime}
                                            </span>
                                        </div>

                                        <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h2>

                                        <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium flex-1">
                                            {post.excerpt}
                                        </p>

                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 border-b-2 border-blue-600 w-fit pb-1 hover:text-blue-600 transition-colors"
                                        >
                                            Read Full Article <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* --- INDUSTRIAL SIDEBAR (SSR) --- */}
                    <aside className="lg:w-80 shrink-0">
                        <div className="sticky top-32 space-y-12">

                            {/* Search Bar - Pure Styling */}
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Search Library</h3>
                                <div className="relative">
                                    <input
                                        placeholder="Search technical specs..."
                                        className="w-full bg-white border border-slate-200 py-4 pl-12 pr-6 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 font-medium text-sm"
                                    />
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                </div>
                            </div>

                            {/* Navigation Categories */}
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Subject Matter</h3>
                                <div className="flex flex-col gap-2">
                                    {categories.map((category) => (
                                        <button
                                            key={category}
                                            className="text-left px-5 py-3 rounded-xl text-sm font-bold text-slate-500 hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all"
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Recent Briefings */}
                            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Latest Briefings</h3>
                                <div className="space-y-6">
                                    {recentPosts.map((post) => (
                                        <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                                            <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                                                {post.title}
                                            </h4>
                                            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{post.readTime}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Expert Consultation CTA */}
                            <div className="bg-[#0F172A] rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-black mb-4 tracking-tighter">Need Technical <br />Data?</h3>
                                    <p className="text-slate-400 text-xs font-bold leading-relaxed mb-8">
                                        Our Bilalpada engineers can provide specific MS/SS 304 test reports for your industrial audit.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="bg-blue-600 text-white block text-center py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-950/50"
                                    >
                                        Contact Engineer
                                    </Link>
                                </div>
                                <Factory className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5" />
                            </div>

                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

// Reusable Icon
function Factory({ className, size = 24 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M2 20V9l4 2 4-2 4 2 8-4v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z" />
            <path d="M17 18h1" />
            <path d="M12 18h1" />
            <path d="M7 18h1" />
        </svg>
    )
}