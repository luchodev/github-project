const path = require("path");
const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
   entry: ["babel-polyfill", "./client/index.js"],
   output: {
      path: path.resolve(__dirname, "public"),
      filename: "bundle.js",
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
            },
         },
         {
            test: /(main\.scss|.css)$/,
            use: [
               "style-loader",
               "css-loader",
               "resolve-url-loader",
               "sass-loader",
            ],
         },
         {
            test: /\.png$/,
            use: [
               {
                  loader: "url-loader",
                  options: {
                     limit: 9192,
                     outputPath: "images",
                     name: "[name].[ext]",
                  },
               },
            ],
         },
      ],
   },
   plugins: [new LiveReloadPlugin()],
};
