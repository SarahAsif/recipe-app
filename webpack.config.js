const webpack = require("webpack");

module.exports = {
  module: {
    rules: [
      //...
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  //...
};
