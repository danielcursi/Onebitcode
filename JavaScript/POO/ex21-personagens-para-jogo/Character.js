
export class Character{
    constructor(nome, pontosDeVida, ataque, defesa){
        this.nome = nome
        this.pontosDeVida = pontosDeVida
        this.ataque = ataque
        this.defesa = defesa
    }

    atacar(personagem){
        personagem.pontosDeVida -= this.ataque - personagem.defesa
    }
}
