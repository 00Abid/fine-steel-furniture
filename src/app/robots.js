
export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'],
        },
        sitemap: 'https://finesteelfurniture.vercel.app/sitemap.xml',
    }
}
