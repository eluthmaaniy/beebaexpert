/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dnvwfo2g1/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
