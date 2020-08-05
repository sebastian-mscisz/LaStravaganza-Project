const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/scripts/index.js",
  },
  output: {
    filename: "[name]-[contentHash:6].js",
    path: path.resolve(__dirname, "../", "public"),
  },
  module: {},
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/templates/index.html",
    }),
  ],
};
