/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['tsx', 'ts'],
    sassOptions: {
        prependData: `@import '@/styles/index';`,
    },
};

export default nextConfig;