/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const million = require('million/compiler');
const { withContentlayer } = require('next-contentlayer');

const appHeaders = require('./config/next/headers');
// const redirects = require('./config/next/redirects');

/**
 * @type {import('next').NextConfig}
 */
const defaultNextConfig = {
  output: 'export',
  swcMinify: true,
  reactStrictMode: true,
  compress: true,
  crossOrigin: 'anonymous',
  images: {
    unoptimized: true, // 🔸 برای export
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'i.scdn.co' },
      { hostname: 'spotify.com' },
      { hostname: 'hamedakbri.ir' },
      { hostname: 'unavatar.io' },
      { hostname: 'source.boringavatars.com' },
      { hostname: 'lh3.googleusercontent.com' },
      { hostname: 'cdn.discordapp.com' },
      { hostname: 'raw.githubusercontent.com' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: '**.cdninstagram.com' },
      { hostname: '**.pixpa.com' },
      { hostname: '**.fbcdn.net' },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    newNextLinkBehavior: true,
    legacyBrowsers: false,
    typedRoutes: true,
    serverActions: true,
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  async headers() {
    return appHeaders;
  },
  // async redirects() {
  //   return redirects;
  // },
};

const millionConfig = {
  auto: { rsc: true },
};

module.exports = million.next(
  withContentlayer(defaultNextConfig),
  millionConfig,
);
