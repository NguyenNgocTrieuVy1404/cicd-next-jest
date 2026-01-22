/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for static export with dynamic routes that have generateStaticParams()
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
