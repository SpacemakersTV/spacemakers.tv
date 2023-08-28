/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        loader: "akamai",
        path: "/public", 
    },
}
module.exports = nextConfig
