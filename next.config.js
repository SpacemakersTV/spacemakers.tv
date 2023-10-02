/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	// output: 'export',
	reactStrictMode: true,
	images: {
		domains: ["drive.google.com"],
	}
};

module.exports = nextConfig
