import { blogPosts } from '@/lib/data';

export default function sitemap() {
    const baseUrl = 'https://finesteelfurniture.vercel.app';

    // 1. Static Routes
    const routes = [
        '',
        '/products',
        '/blog',
        '/contact',
        '/site-index',
        // Add other static pages like terms/privacy if they exist
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Dynamic Blog Posts
    const posts = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt || post.publishedAt),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...routes, ...posts];
}
