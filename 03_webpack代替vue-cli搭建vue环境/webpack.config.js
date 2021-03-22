// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.js',
    output: {
        // 入口
        filename: 'bundle.js',
        // 出口
        publicPath: 'xuni'
    },
    devServer: {
        // 根目录
        contentBase: './public',
        // 端口号
        port: 8080
    },
    // 写loader的地方，让webpack能够识别更多类型文件
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
      // 请确保引入这个插件！
      new VueLoaderPlugin()
    ]
};