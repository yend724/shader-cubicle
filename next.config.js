/** @type {import('next').NextConfig} */

const withExportImages = require('next-export-optimize-images');
const rehypePrism = require('@mapbox/rehype-prism');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[require('remark-prism')]],
    rehypePlugins: [rehypePrism],
  },
});

const nextConfig = withMDX({
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'page.mdx'],
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|frag|vert)$/,
      use: [
        options.defaultLoaders.babel,
        { loader: 'raw-loader' },
        { loader: 'glslify-loader' },
      ],
      exclude: /node_modules/,
    });
    return config;
  },
});

module.exports = withExportImages(nextConfig);
