var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            
            {
                test: /\.(png|jpg|jpeg)$/,
                use:['file-loader']
            }, 
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        

            { test: /\.ts$/, use: 'ts-loader' },

            
            {
                test: /\.less$/i,
                loader: [
                  // compiles Less to CSS
                  "style-loader",
                 
                  "less-loader",
                  "sass-loader",
                ],
              }
        ],
        
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    ],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}