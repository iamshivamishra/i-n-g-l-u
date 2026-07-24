/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Logo/brand assets are pulled from many third-party domains (CDNs, gstatic,
    // licdn, pinimg, etc). Rather than allow-listing each one, images are
    // rendered with a plain <img> tag in components that use external URLs.
    unoptimized: true,
  },
}

export default nextConfig
