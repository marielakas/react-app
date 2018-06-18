const NODE_ENV = process.env.NODE_ENV || "development";
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const express = require("express");
const webpack = require("webpack");
const webpackConfig = require(`./webpack/webpack.${NODE_ENV}.config.js`);
const compiler = webpack(webpackConfig);

const app = express();
const port = 4300;

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler, {}));

app.listen(port, () => console.log(`Server listening on port ${port}`));
