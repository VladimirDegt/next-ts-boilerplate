/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    pageExtensions: ['tsx', 'ts'],
    sassOptions: {
        prependData: `@import '@/styles/index';`,
    },
};

export default nextConfig;