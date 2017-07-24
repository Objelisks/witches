const {CommonsChunkPlugin} = require("webpack").optimize;

module.exports = {
  entry: {
    index: './code/main.js',
    libs: [
      './code/lib/three/three.js',
      './code/lib/cannon/cannon.js',
    ]
  },
  output: {
    path: __dirname + "/result",
    filename: "[name].js",
  },
  module: {
    rules: [
      { test: /\.(frag|vert)$/, use: 'raw-loader' },
    ],
  },
  watch: true,
  devtool: "cheap-eval-source-map",
  plugins: [
    new CommonsChunkPlugin({
      names: ['index', 'libs'],
      minChunks: 2,
    })
  ]
}
