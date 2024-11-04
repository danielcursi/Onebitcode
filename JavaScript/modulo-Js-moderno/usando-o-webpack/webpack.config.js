// pegando o caminho absoluto da maquina
const path = require('path')

module.exports = {
    entry: {
        // confirando ponto de entrada.
        main: './src/index.js',
        hello: './src/hello.js'
    },
    // definindo o modulo de desenvolvimento (development) ou produção (production)
    mode: 'development',
    // configurando a saida
    output: {
        // mudando o nome da pasta de saida
        path: path.resolve(__dirname, 'public'), //home/daniel/usando-o-webpack/public
        // mudando o nome do arquivo
        filename: '[name].bundle.min.js'
    }
}