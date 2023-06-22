let nome1 = window.prompt('Digite o nome do seu primeiro personagem')
let podAtq = Number(window.prompt('Digite o poder de ataque dele'))
let nome2 = window.prompt('Digite o nome do seu segundo personagem')
let pontVid = Number(window.prompt('Digite os pontos de vida do seu personagem'))
let defesa = Number(window.prompt('Sua defesa'))
let escudo = Number(window.prompt('Deseja adcionar um escudo?'))
let dano = Number(0)
if (podAtq > defesa && escudo == ''){
    dano = podAtq - defesa
} else if (podAtq > defesa && escudo > 0){
    dano = (podAtq - defesa) / 2
} else if (podAtq <= defesa){
    dano = 0
}
    let vida = pontVid - dano
window.alert(
    `Personagem 1: \n
    nome: ${nome1} \n
    Pontos de ataque: ${podAtq} \n
    Personagem 2: \n
    nome : ${nome2} \n
    defesa: ${defesa}
    dano recebido: ${dano} \n
    pontos de vida atual: ${vida} \n
    escudo: ${escudo} \n`
)
