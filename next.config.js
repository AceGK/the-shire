/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/app/styles'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false, // Optional: Adjust SVGO options if needed
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
