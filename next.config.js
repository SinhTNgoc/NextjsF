module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  
  //   return config
  // },
};
