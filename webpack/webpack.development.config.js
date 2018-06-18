const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = {
  mode: "development",
  context: paths.srcPath,
  entry: {
    app: [paths.entryPath, "webpack-hot-middleware/client"],
    vendor: ["react"]
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React App Template",
      filename: "index.html",
      template: paths.templatePath,
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
