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
            test: /(main\.scss)$/,
            use: [
               "style-loader",
               "css-loader",
               //  "resolve-url-loader",
               "sass-loader",
            ],
         },
         //  {
         //     test: /\.(png|jpg|svg)$/i,
         //     use: [
         //        {
         //           loader: "url-loader",
         //           options: {
         //              limit: 9192,
         //              outputPath: "images",
         //              name: "[name].[ext]",
         //           },
         //        },
         //     ],
         //  },
         //  {
         //     test: /\.(woff|ttf)$/,
         //     use: [
         //        {
         //           loader: "url-loader",
         //           options: {
         //              limit: 9192,
         //              outputPath: "fonts",
         //              name: "[name].[ext]",
         //           },
         //        },
         //     ],
         //  },
         //  {
         //     test: /\.gif$/,
         //     loader: "file-loader",
         //     options: {
         //        outputPath: "images",
         //        name: "[name].[ext]",
         //     },
         //  },
      ],
   },
   plugins: [new LiveReloadPlugin()],
};
