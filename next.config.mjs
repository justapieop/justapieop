/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3.justapie.net",
                port: "",
                pathname: "/*"
            }
        ]
    },
    output: "standalone"
};

export default nextConfig;
