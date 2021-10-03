const path = require('path');
module.exports = {
    "mode": "none",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname + '/dist',
        "filename": "bundle.js"
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              {
                loader: "sass-loader",
                options: {
                  // Prefer `dart-sass`
                  implementation: require.resolve("sass"),
                },
              },
            ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                ]
              }
            }
          },
        ]
      }
}