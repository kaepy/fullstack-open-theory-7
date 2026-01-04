const path = require("path"); // import path module

const config = () => {
  return {
    entry: "./src/index.js", // relative path is okay
    output: {
      path: path.resolve(__dirname, "build"), // absolute path is required
      filename: "main.js", // output file name
    },
  };
};

module.exports = config;
