const nodeExternals = require("webpack-node-externals");
const paths = require("./paths");

module.exports = {
  target: "node",
  name: "server",
  node: false,
  entry: paths.appServerJs,
  output: {
    filename: "server.js",
    chunkFilename: "static/js/[name].[chunkhash:8].chunk.js",
    path: paths.appSSRBuild,
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  externals: [nodeExternals()],
};