const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/components/index.js",
  },
  output: {
    filename: "js/[name]-[contentHash:6].js",
    path: path.resolve(__dirname, "../", "build"),
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],

            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    open: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contentHash:6].css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/templates/index.html",
    }),
  ],
};
