// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  reactStrictMode: false,
  optimizeFonts: true,
  experimental: {
    adjustFontFallbacks: true,
  },
  images: {
    domains: ['mitg-mangas.s3.sa-east-1.amazonaws.com'],
  },
  compiler: {
    styledComponents: {
      displayName: true,
      namespace: 'mitg',
    },
  },
}

module.exports = nextConfig
