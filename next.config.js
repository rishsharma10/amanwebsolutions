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
      {
        source: '/web-development-company-chandigarh',
        destination: '/locations/chandigarh',
        permanent: true,
      },
      {
        source: '/web-designing-company-chandigarh',
        destination: '/locations/chandigarh',
        permanent: true,
      },
      {
        source: '/website-development-company-in-chandigarh',
        destination: '/locations/chandigarh',
        permanent: true,
      },
      {
        source: '/web-development-company-mohali',
        destination: '/locations/mohali',
        permanent: true,
      },
      {
        source: '/website-designing-company-mohali',
        destination: '/locations/mohali',
        permanent: true,
      },
      {
        source: '/web-development-company-panchkula',
        destination: '/locations/panchkula',
        permanent: true,
      },
      {
        source: '/web-development-company-tricity',
        destination: '/locations/tricity',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
