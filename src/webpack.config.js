const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    test: "./test",
    app: {
      dependOn: "test",
      // runtime and dependOn is not used in same time
      filename: "app",
      import: "./app",
    },
  },
  output: {
    filename: "lw.bundle.js",
  },
};
