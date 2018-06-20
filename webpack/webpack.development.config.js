const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const paths = require("./paths");
const vendors = require("./vendors");

module.exports = {
  mode: "development",
  context: paths.srcPath,
  entry: {
    app: [paths.entryPath, "webpack-hot-middleware/client"],
    vendor: vendors
  },
  output: {
    filename: "[name].bundle.js",
    path: paths.outputPath,
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(paths.distPath),
    new HtmlWebpackPlugin({
      title: "React App Template",
      filename: "index.html",
      template: paths.templatePath,
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
