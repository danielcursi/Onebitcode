class Property{
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquareMeter(){
        return this.price / this.area
    }
}
// Extends: palavra reservada para uma classe herdar propriedades de outra
class House extends Property { }

const land = new Property(200, 50000)
const someHouse = new House(120, 200000)

console.log(land)
console.log(someHouse)
// instanceof: analisar se faz parte ou não de uma instancia
console.log(someHouse instanceof Property)

class Apartment extends Property{
    constructor(number, area, price){
        super(area, price)
        this.number = number
    }

    getFloor(){
        return this.number.slice(0, -2)
    }
}

const apt = new Apartment("201", 1000, 50000)
console.log(apt)
console.log(apt.getFloor())