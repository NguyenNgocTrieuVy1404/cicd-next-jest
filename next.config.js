/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' to allow dynamic routes
  // If you need static export, ensure all dynamic routes have generateStaticParams()
  // output: 'export', // Commented out to allow dynamic routes
};

module.exports = nextConfig;
