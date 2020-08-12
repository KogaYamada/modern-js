// node.js上でファイルパスを操作できるモジュール
const path = require('path');

// html-webpack-pluginモジュール
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
});

module.exports = {
  // ビルド時の出力ファイルを圧縮するかしないかの設定。今回はdevelopment。
  mode: 'development',

  // ビルド時に起点となるJSファイルを指定。
  entry: './src/index.js',

  output: {
    // ビルド時に出力されるファイル名を設定。
    filename: 'bandle.js',
    // 出力先のパスを指定（ここで絶対パスを指定するためにpathモジュールを使用）
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    // ローカルサーバーのポート番号を指定
    port: 8000,
    // webpack-dev-server起動時に自動でブラウザを開く設定
    open: true,
  },

  // ここに各種ローダーを追加する
  loader: {
    rules: [
      {
        test: /\.js$/,
        // コンパイル対象からnode_modulesを除外
        exclude: /node_modules/,
        // ローダーの設定
        loader: 'babel-loader',
        // ローダーの指定
        query: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },

  plugins: [
    //html-webpack-pluginをwebpackに追加
    htmlWebpackPlugin,
  ],
};
