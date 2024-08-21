let nome = "prop"
console.log(nome)

// {} cria starta uma variavel como objeto
let objeto = {}
console.log(objeto)

objeto.prop = "Olá, mundo!"
console.log(objeto.prop)

// [] referencia a chave do objeto
console.log(objeto[nome])

// Todas opções verdadeiras
console.log(objeto.prop === objeto["prop"])
console.log(objeto.prop === objeto[nome])
console.log(objeto.prop === objeto["pro" + "p"])

const funcao = "log"
console[funcao]("Olá, mundo!")

const pessoa = {}
pessoa.nome = "Daniel"
pessoa.idade = 25

console.log(pessoa)

pessoa.colegas = ["Lucas", "Paulo", "Joao"]
console.log(pessoa.colegas)

pessoa.endereco = {
    rua: "Aqui perto",
    numero: 38,
    bairro: "Centro"
}

console.log(pessoa)
console.log(pessoa.endereco)
console.log(pessoa.endereco.numero)