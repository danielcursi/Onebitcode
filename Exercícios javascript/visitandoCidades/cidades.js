let nome = window.prompt('Olá, qual o seu nome?')
let resposta = window.prompt('Você ja visitou alguma cidade? (sim/nao)')
let contagem = 0
let cidades = ""

while (resposta === 'sim'){
    let cidade = window.prompt('Qual o nome da cidade que você visitou?')
    cidades += " - " + cidade + "\n"
    contagem++
    resposta = window.prompt('Você visitou alguma outra cidade?')
    
}
alert(nome + ' visitou ' + contagem + " cidades" + cidades)