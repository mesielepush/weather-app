const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [

      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, { loader: 'css-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.png/,
        use: 'file-loader?name=[name].[ext]&outputPath=./images/',
        exclude: /node_modules/,
      },
      {
        test: /\.jpg/,
        use: 'file-loader?name=[name].[ext]&outputPath=./images/',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader?name=[name].[ext]&outputPath=./images/',
        exclude: /node_modules/,
      },
    ],
  },
};