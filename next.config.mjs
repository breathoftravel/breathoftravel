/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'breathoftravels.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.breathoftravels.com',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
