const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); //to access built-in plugins
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  // it could have multiple entry point like this
  //   entry: {
  //     main: './path/to/my/entry/file.js',            => Syntax   Usage: entry: { <entryChunkName> string | [string] } | {}
  //   },
  //   or pass an array of entry poit like this  known as a "multi-main entry"
  //   entry: ['./src/file_1.js', './src/file_2.js'],

  //   Multi-Page Application
  //   entry: {
  //     pageOne: './src/pageOne/index.js',
  //     pageTwo: './src/pageTwo/index.js',
  //     pageThree: './src/pageThree/index.js',
  //   },
  //   The object syntax is more verbose

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },

  module: {
    // rules: [{ test: /\.txt$/, use: "raw-loader" }],

    // use loaders to tell webpack to load a CSS file or to convert TypeScript to JavaScript
    // npm install --save-dev css-loader ts-loader

    rules: [
      { test: /\.css$/, use: "css-loader" },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },

  //   A webpack plugin is a JavaScript object that has an apply method. This apply method is called by the webpack compiler, giving access to the entire compilation lifecycle.
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    // The ProgressPlugin is used to customize how progress should be reported during compilation,
    // and HtmlWebpackPlugin will generate a HTML file including the my-first-webpack.bundle.js file using a script tag.
  ],
};
