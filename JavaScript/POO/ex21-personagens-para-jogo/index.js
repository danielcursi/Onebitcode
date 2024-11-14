import { Character } from "./Character.js";
import { Mage } from "./Mage.js";
import { Thief } from "./Thief.js";
import { Warrior } from "./Warrior.js";

const daniel = new Character("Daniel", 100, 100, 75)
const victoria = new Thief("Victoria", 100, 75, 75)
const mago = new Mage(50, "dumbledore", 200, 150, 150)
const paladino = new Warrior(50, "defesa", "Paladino", 100, 160, 80)

console.log(daniel)
console.log(victoria)

victoria.atacar(daniel)

console.log(daniel)
console.log(victoria)

// mago.AumentarVida(daniel)
// mago.atacar(victoria)

console.log(daniel)
console.log(victoria)

console.log(mago)
console.log(paladino)

paladino.atacar(mago)
paladino.mudarPosicao()
console.log(paladino)

console.log(mago)