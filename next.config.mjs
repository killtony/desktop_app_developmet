/** @type {import('next').NextConfig} */
const { BASIC_URL } = process.env;
const nextConfig = {
    reactStrictMode: true, 
    output: "export",
    images : { 
      domains : [BASIC_URL],
      unoptimized: true 
    }
};

export default nextConfig;
