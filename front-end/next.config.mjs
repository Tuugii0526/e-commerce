/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'static.zara.net',
        search:'**',
        pathname: '/assets/public/**'
      },
    ],
  }
};
export default nextConfig;
