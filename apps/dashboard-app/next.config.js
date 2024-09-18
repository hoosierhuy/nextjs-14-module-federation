//@ts-check
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  basePath: '/dashboard',
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        remoteType: 'module',
        name: 'dashboard-app',
        filename: 'remoteEntry.js',
        remotes: {
          'shared-app': `promise import("http://localhost:4300/assets/remoteEntry.js")`,
        },
        extraOptions: {},
        shared: {},
      })
    );

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
