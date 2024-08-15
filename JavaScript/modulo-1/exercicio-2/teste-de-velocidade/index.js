let velocidade1 = parseInt(prompt("Informe a 1º velocidade"))
let velocidade2 = parseInt(prompt("Informe a 2º velocidade"))

if(velocidade1 > velocidade2){
    alert("A maior velocidade é a 1º velocidade: " + velocidade1 + "km")
} else if(velocidade2 > velocidade1){
    alert("A maior velocidade é a 2º velocidade: " + velocidade2 + "km")
} else{
    alert("As velocidade são iguais!")
}