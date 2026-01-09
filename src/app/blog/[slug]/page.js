import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronLeft, Calendar, Clock, MessageSquare, ChevronRight } from "lucide-react";
import { blogPosts } from "@/lib/data";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

// Make the component async to handle params correctly
export default async function BlogPostPage({ params }) {
    // In Next.js 15+, you must await params
    const { slug } = await params;

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white pb-20">
            <section className="bg-[#0F172A] py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(#94a3b8 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6">
                        <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <ChevronRight size={12} />
                        <Link href="/" className="hover:text-blue-400 transition-colors">Blog</Link>

                        <ChevronRight size={12} />
                        <span className="text-white">{post.title}</span>
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 mt-8">
                        <div className="flex items-center gap-2 text-blue-500 text-[10px] font-black uppercase tracking-widest bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                            <Calendar size={14} /> {post.publishedAt}
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                            <Clock size={14} /> {post.readTime}
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 -mt-16">
                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
                    <Image src={post.image} alt={post.title} fill className="object-cover" priority />
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 mt-16">
                <div className="prose prose-slate lg:prose-xl">
                    <p className="text-xl text-slate-900 font-medium leading-relaxed mb-10 border-l-4 border-blue-600 pl-6">
                        {post.excerpt}
                    </p>
                    <div className="text-slate-600 leading-7 space-y-6">
                        <p>As a leading manufacturer in Bilalpada, Vasai, we ensure all our steel furniture meets industrial standards...</p>
                        <h2 className="text-2xl font-black text-slate-900 mt-10">Technical Specifications</h2>
                        <p>Our 1.2mm gauge MS sheets provide the structural integrity required for heavy-duty office use.</p>
                    </div>
                </div>

                <div className="mt-20 p-10 bg-[#0F172A] rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-black mb-2">Order This Solution</h3>
                        <p className="text-slate-400 text-sm">Direct factory pricing for bulk orders.</p>
                    </div>
                    <Link href="/contact" className="bg-blue-600 px-8 py-4 rounded-xl font-black uppercase text-xs flex items-center gap-2 mt-6 md:mt-0">
                        WhatsApp Inquiry <MessageSquare size={16} />
                    </Link>
                </div>
            </div>
        </article>
    );
}