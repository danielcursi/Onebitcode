// Criando classe Book
class Book {
    // construtor
    constructor(title){
        this.title = title
        this.published = false
    }
    // Metodo
    publish(){
        this.published = true
    }
}

// eragon == instacia   Book == classe
const eragon = new Book("Eragon")
const eldest = new Book("Eldest")

eragon.publish()

console.log(eragon)
console.log(eldest)

// Conferindo se eragon é instancia de Book
console.log(eragon instanceof Book)
