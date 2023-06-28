const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: { main: './index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    assetModuleFilename: 'assets/[name][ext]',
   /* assetModuleFilename: path.join('/images', '[name].[ext]'),*/
    publicPath: ''
  },
  module: {
    rules: [
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        // при обработке этих файлов нужно использовать babel-loader
        use: 'babel-loader',
        // исключает папку node_modules, файлы в ней обрабатывать не нужно
        exclude: '/node_modules/'
      },
      {
        test: /\.(html)$/,
        use: ['html-loader']
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader',
          'postcss-loader',],
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader',
          'postcss-loader', 'sass-loader'],
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
       /* generator: {
          filename:  '[name][hash][ext]',
          /!*outputPath: 'images/',*!/
        }*/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      /*filename: '[name].html',*/
    }),
    new MiniCssExtractPlugin({
         filename: '[name][hash].css',
    }),
    new CleanWebpackPlugin(),
    /*new FaviconsWebpackPlugin('/path/to/logo.png'),*/ //TODO
  ],
  devServer: {
    /*static: './', // путь, куда "смотрит" режим разработчика*/
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080,
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
    },
  }
}
