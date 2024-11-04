const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
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