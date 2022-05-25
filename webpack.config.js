const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")


module.exports = {
    target: 'node',
  entry: './src/index.js',
  plugins: [
    new NodePolyfillPlugin()
],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};