/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "files.cinerama.uz",
                port: "",
                pathname: "/images/**",
            },
        ],
    },
};

module.exports = nextConfig;
