/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  productionBrowserSourceMaps: true,
  async redirects() {
    return [
      {
        source: '/services/ai-agent-development',
        destination: '/services/ai-agents',
        permanent: true,
      },
      {
        source: '/services/cloud-engineering',
        destination: '/services/cloud-development',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
