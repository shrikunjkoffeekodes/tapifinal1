// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         $: "jquery",
//         jQuery: "jquery",
//         "window.jQuery": "jquery",
//       })
//     );
//     return config;
//   },
// };

// export default nextConfig;

// next.config.js

const webpack = require("webpack");

module.exports = {
  webpack: (config, { isServer }) => {
    // Add webpack ProvidePlugin only on the client-side bundle
    if (!isServer) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
        })
      );
    }

    return config;
  },

  
};

