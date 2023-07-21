const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.production ? "production" : "development",
    entry: {
      bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: env.production ? "[name].[contenthash].js" : "[name].js",
    },
    module: {
      rules: [
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        { test: /\.scss$/, use: ["sass-loader", "style-loader", "css-loader"] },
      ],
    },
    plugins: [
      // this plugin helps to use process.env inside the project
      new Dotenv({
        path: path.resolve(
          __dirname,
          `.env.${env.production ? "prod" : "dev"}`
        ),
      }),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: path.resolve(__dirname, "public/index.html"),
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "build"),
      },
      compress: true,
      port: 3000,
    },
  };
};
