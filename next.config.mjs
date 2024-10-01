/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'img.daisyui.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'breathoftravel.vercel.app',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
