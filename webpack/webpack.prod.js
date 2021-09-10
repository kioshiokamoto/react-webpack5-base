const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Okamoto'),
    }),
    new MiniCssExtractPlugin({
      // Name output by extract
      filename: 'style.css',
    }),
    // new BundleAnalyzerPlugin(),
  ],
}
