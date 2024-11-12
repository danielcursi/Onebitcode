const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    // Configurando o dev-server
    devServer: {
        static: {
            // config do caminho
            directory: path.resolve(__dirname, 'dist')
        }
    },
    // Comprimindo o arquivo
    compress: true,
    entry: {
        // confirando ponto de entrada.
        index: './src/index.js'
    },
    // definindo o modulo de desenvolvimento (development) ou produção (production)
    mode: 'production',
    // Indicando para usar os modulos de css
    // modulo
    module: {
        // regras
        rules: [{
            // pesquisando por arquivos que terminem com .css
            test: /\.css$/,
            // Indicando as loaders a serem usadas
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}