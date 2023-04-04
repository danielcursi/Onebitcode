let nome = window.prompt('Digite seu nome')
let sobrenome = window.prompt('Digite seu sobrenome') 
let campEst = window.prompt('Digite seu campo de estudos')
let nasc = window.prompt('Digite seu ano de nascimento')
let agora = new Date()
let ano = agora.getFullYear()

let idade = ano - Number(nasc)

window.confirm(`Olá ${nome} ${sobrenome} que faz ${campEst} de idade ${idade} anos`)

