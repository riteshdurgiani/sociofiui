/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'static.thenounproject.com',
      'encrypted-tbn0.gstatic.com',
      'avatars.dicebear.com',
      'png.pngtree.com',
      'api.dicebear.com/5.x',
      'api.dicebear.com',
      'imgur.com'
    ], 
  },
}

module.exports = nextConfig
