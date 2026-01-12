
export default function manifest() {
    return {
        name: 'Fine Steel Furniture',
        short_name: 'Fine Steel',
        description: 'Premier manufacturer of MS & SS 304 steel cupboards in Bilalpada, Vasai.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#3b82f6',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
