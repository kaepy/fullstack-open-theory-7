const path = require("path"); // import path module

const config = () => {
  return {
    entry: "./src/index.js", // relative path is okay
    output: {
      path: path.resolve(__dirname, "build"), // absolute path is required
      filename: "main.js", // output file name
    },
    module: {
      rules: [
        {
          // Apply this rule to files ending in .js
          test: /\.js$/,
          loader: "babel-loader", // use babel-loader to transpile JavaScript files. babel-loader is a bridge between Babel (a JavaScript compiler) and Webpack (a module bundler).
          options: {
            presets: [
              [
                "@babel/preset-react", // to transpile JSX syntax
                {
                  runtime: "automatic", // use the new JSX runtime that tells Babel to import the necessary functions from the React library automatically when JSX is used. With this you don't need to manually import React in every file that uses JSX.
                },
              ],
              "@babel/preset-env", // to transpile modern JavaScript (ES6+) to be compatible with older browsers (ES5)
            ],
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"], // to handle CSS files. Alternative solution is mini-css-extract-plugin.
        },
      ],
    },
  };
};

module.exports = config;
