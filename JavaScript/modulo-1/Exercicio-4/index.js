let name = prompt("Informe seu nome!")
let opcao = prompt("Olá " + name + ", Você já visitou alguma cidade? Sim/Nao")
let cidade = ""
let i = 0

while(opcao == "Sim" || opcao == "sim"){
    if(i != 0){
        cidade += " - "
    }
    cidade += prompt("Qual nome da cidade?")
    opcao = prompt("Visitou alguma outra cidade? Sim/Nao")
    i++
}

if(i == 0){
    alert(name + ", Você visitou " + i + " Cidades")
} else{
    alert(name + ", Você visitou " + i + " Cidades, elas são: \n" + cidade)
}
