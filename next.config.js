const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: false,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === 'development',
  // disable: false,
  workboxOptions: {
    disableDevLogs: true,
    // exclude custom routes from caching
    exclude: ['/chat', '/chat/[id]'],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/chat-tldr\.onrender\.com\/chat/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'chat',
          networkTimeoutSeconds: 1,
        },
      },
    ],
  },
});
const nextConfig = {
  i18n,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
};

module.exports = withPWA(nextConfig);
