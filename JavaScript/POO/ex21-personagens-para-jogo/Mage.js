import { Character } from "./Character.js";

export class Mage extends Character{
    constructor(pontosDeMagia, nome, pontosDeVida, ataque, defesa){
        super(nome, pontosDeVida, ataque, defesa)
        this.pontosDeMagia = pontosDeMagia
    }

    atacar(personagem){
        personagem.pontosDeVida -= (this.ataque + this.pontosDeMagia) - personagem.defesa
    }

    AumentarVida(personagem){
        personagem.pontosDeVida += 2 * this.pontosDeMagia
    }
}