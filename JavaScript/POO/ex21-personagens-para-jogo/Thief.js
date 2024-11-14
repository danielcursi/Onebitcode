import { Character } from "./Character.js";

export class Thief extends Character{
    constructor(nome, pontosDeVida, ataque, defesa){
        super(nome, pontosDeVida, ataque, defesa)
    }

    atacar(personagem){
        personagem.pontosDeVida -= (this.ataque - personagem.defesa) * 2
    }
}