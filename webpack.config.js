const path = require('path');

module.exports = {
  entry: './src/index.js', // Головний файл
  output: {
    path: path.resolve(__dirname, 'dist'), // Куди зберігати зібраний код
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Всі файли .js
        exclude: /node_modules/, // Ігноруємо бібліотеки
        use: {
          loader: 'babel-loader', // Використовуємо Babel
        },
      },
    ],
  },
  mode: 'development', // Режим розробки
};