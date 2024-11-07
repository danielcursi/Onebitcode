class Product {
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(qtd){
        this.inStock += qtd
    }

    calculateDiscount(percent){
        this.price = this.price - (this.price * (percent/100))
    }
}

const Todinho = new Product()
Todinho.name = "Todinho"
Todinho.description = "Bebida láctea"
Todinho.price = 2.00
Todinho.addToStock(100)

console.log(Todinho)
Todinho.calculateDiscount(10)
console.log(Todinho)