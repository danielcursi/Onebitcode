let name, sobrenome, campoDeEstudo;
let date = new Date()
let ano = date.getFullYear()
console.log(ano)

name = window.prompt("Informe seu nome: ")
sobrenome = window.prompt("Informe seu sobrenome: ")
campoDeEstudo = window.prompt("Informe sua area de estudos: ")

let nascimento = parseInt(window.prompt("Informe seu ano de nascimento: "))
let idade = ano - nascimento

console.log(typeof(nascimento))

window.alert("Nome completo: " + name + " " + sobrenome + "\nEstudos: " + campoDeEstudo + "\nIdade: " + idade)



