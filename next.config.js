/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        loader: "akamai",
        path: "/", 
    },
}
module.exports = nextConfig
