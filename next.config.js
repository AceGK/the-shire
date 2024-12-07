/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./app/styles'], // Adjust based on your directory structure
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
