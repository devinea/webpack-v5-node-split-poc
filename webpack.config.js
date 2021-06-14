const webpack = require("webpack");

/**
 * @type {webpack.Configuration}
 */
const cfg = {
  // mode: "production",
  mode: "development",
  target: "node",
  output: {
    libraryTarget: "commonjs2",
  },
  entry: "./src/entry.js",
  optimization: {
    runtimeChunk: "single",
    // splitChunks: {
    //   cacheGroups: {
    //     other: {
    //       name: "source-mapped",
    //       enforce: true,
    //       chunks: "all",
    //       // test: /source-mapped\.js/,
    //     },
    //   },
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        // defaultVendors: {
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: -10,
        //   reuseExistingChunk: true,
        // },
        // default: {
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true,
        // },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          
        },
      },
    
    },
  },
};

module.exports = cfg;
