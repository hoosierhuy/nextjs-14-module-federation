//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  async rewrites() {
    return [
      {
        source: '/dashboard/:slug*',
        destination: 'http://localhost:3031/dashboard/:slug*',
      },
      {
        source: '/@fs/:slug*',
        destination: 'http://localhost:3031/dashboard/@fs/:slug*',
      },
      {
        source: '/messages/:slug*',
        destination: 'http://localhost:3032/messages/:slug*',
      },
      {
        source: '/settings/:slug*',
        destination: 'http://localhost:3033/settings/:slug*',
      },
    ];
  },
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'home-app',
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
