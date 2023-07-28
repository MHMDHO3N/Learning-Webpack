module.exports = {
  mode: "development",
  entry: {
    test: "./src/test",
    app: {
      dependOn: "test",
      // runtime and dependOn is not used in same time
      filename: "app",
      import: "./src/app",
    },
  },
  output: {
    filename: "[name].lw.js",
    path: __dirname + "/dist", // what is __dirname?
    // publicPath: 'https://cdn.example.com/assets/[fullhash]/' => how we can connect webpack to our specify cdn?
  },
  // output => writes test.lw.js and app.lw.js in dist folder
};
