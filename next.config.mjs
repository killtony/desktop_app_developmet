/** @type {import('next').NextConfig} */
const { BASIC_URL } = process.env;
const nextConfig = {
    reactStrictMode: true, 
    images : { 
      domains : [BASIC_URL] 
    } 
};

export default nextConfig;
