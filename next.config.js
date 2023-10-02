/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    // output: 'export',
    // reactStrictMode: true,
    images: {
        domains: ["drive.google.com"],
    },

    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'https',
    //         hostname: 'drive.google.com',
    //         port: '',
    //         pathname: '/',
    //       },
    //     ],
    //   },
};
module.exports = nextConfig
