import { Character } from "./Character.js";

export class Warrior extends Character{
    constructor(pontosDeEscudo, posicao, nome, pontosDeVida, ataque, defesa){
        super(nome, pontosDeVida, ataque, defesa)
        this.pontosDeEscudo = pontosDeEscudo
        this.posicao = posicao
    }

    
    atacar(personagem){
        if(this.posicao == "ataque"){
            personagem.pontosDeVida -= this.ataque - personagem.defesa
        } else{
            console.log(`${this.nome} em posição de defesa!`)
        }
    }

    mudarPosicao(){
        if(this.posicao == "ataque"){
            this.posicao = "defesa"
            this.pontosDeEscudo += this.defesa
        }else{
            this.posicao = "ataque"
            this.pontosDeEscudo -= this.defesa
        }
    }


}