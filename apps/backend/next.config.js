//@ts-check
const { composePlugins, withNx } = require('@nx/next');
const {
  SECURITY_HEADERS,
  CORS_METHODS,
  CORS_ALLOWED_HEADERS,
} = require('../../config/security-headers.config.js');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},

  async headers() {
    const corsHeaders = process.env.ALLOWED_ORIGIN
      ? [
          {
            key: 'Access-Control-Allow-Origin',
            value: process.env.ALLOWED_ORIGIN,
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: CORS_METHODS,
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: CORS_ALLOWED_HEADERS,
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
        ]
      : [];

    const securityHeaders = Object.entries(SECURITY_HEADERS).map(
      ([key, value]) => ({
        key,
        value,
      })
    );

    return [
      {
        source: '/:path*',
        headers: [...corsHeaders, ...securityHeaders],
      },
    ];
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
