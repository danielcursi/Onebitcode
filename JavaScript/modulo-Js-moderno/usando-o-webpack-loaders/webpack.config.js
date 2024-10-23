module.exports = {
    entry: {
        // confirando ponto de entrada.
        index: './src/index.js'
    },
    // definindo o modulo de desenvolvimento (development) ou produção (production)
    mode: 'development',
    // Indicando para usar os modulos de css
    module: {
        rules: [{
            // pesquisando por arquivos que terminem com .css
            test: /\.css$/,
            // Indicando as loaders a serem usadas
            use: ['style-loader', 'css-loader']
        }]
    }
}