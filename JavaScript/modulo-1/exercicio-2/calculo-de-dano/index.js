let personagem1 = prompt("Insira o nome do primeiro personagem")
let poderDeAtaque = parseFloat(prompt("Poder de ataque de " + personagem1))

let personagem2 = prompt("Insira o nome do segundo personagem")
let pontosDeVida = parseFloat(prompt("Pontos de vida de " + personagem2))
let poderDeDefesa = parseFloat(prompt("Poder de defesa " + personagem2))
let escudo = confirm("Incluir escudo?\n Sim: ok\n Não: cancelar")

alert("Nome: " + personagem1 + "\nPoder de ataque: " + poderDeAtaque)
alert("Nome: " + personagem2 + "\nPonto de vida: " + pontosDeVida + "\nPoder de defesa: " + poderDeDefesa + "\nPossuí escudo: " + escudo)

let dano;

if(poderDeAtaque > poderDeDefesa && !escudo){
    dano = poderDeAtaque - poderDeDefesa;
} else if(poderDeAtaque > poderDeDefesa && escudo){
    dano = (poderDeAtaque - poderDeDefesa) / 2;
} else if(poderDeAtaque <= poderDeDefesa){
    dano = 0;
}

pontosDeVida -= dano;

alert(personagem1 + " X " + personagem2)
alert("Total de dano causado: " + dano + " em " + personagem2 + "\nPontos de vida diminuiram pra " + pontosDeVida)