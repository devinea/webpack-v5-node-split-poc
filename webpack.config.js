const webpack = require("webpack");

/**
 * @type {webpack.Configuration}
 */
const cfg = {
  mode: "production",
  target: "node",
  output: {
    libraryTarget: "commonjs2",
  },
  entry: "./src/entry.js",
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        other: {
          name: "source-mapped",
          enforce: true,
          chunks: "initial",
          test: /source-mapped\.js/,
        },
      },
    },
  },
};

module.exports = cfg;
