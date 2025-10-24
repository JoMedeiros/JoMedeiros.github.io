/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: [
      'github.com',
    ],
    loader: 'akamai',
    path: '',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
