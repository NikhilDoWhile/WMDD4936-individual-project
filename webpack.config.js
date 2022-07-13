//webpack can actually be used without a configuration file.  But it has like a very basic setup that is often not really enough for what we're trying to do.  So I've given you a configuration file that you can probably use for everything that you do in this course.  Although if you need to add additional configurations to this, you can always check the webpack documentation online.  

const path = require('path');
module.exports = {
devtool:"source-map",//creating bundle.map
mode:"development",//we are not compressing, minifying
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
        {
          test:/\.css$/,
          use:['style-loader', 'css-loader'] //two modules we had to install to get this work
        },
        { test: /\.m?js$/,
          use: {
            loader: 'babel-loader',//babel is a transpiler module that take our es6 code (arrow function, const, let) and convert them to JS code with old syntax
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react' ]//take our react code and compile them into regular JS
            }
          }
      }
    ]
}
};

//our source code is not stored in a publicly accessible folder. only file the user can see is the files that are stored in the public folder.

//src, public -> frontend
//app.js -> running in the server

// npm install webpack webpack-cli style-loader css-loader babel-loader @babel/core @babel/preset-env @babel/preset-react

// add "watch": "webpack --watch" to package.json