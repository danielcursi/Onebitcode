// const Book = {
//     title: "Eragon",
//     pages: 468,
//     published: true,
//     inStock: 20,
//     tags: ["fantasy", "adventure", "medieval"],
//     author: {
//         name: "Christopher Paolini"
//     },
//     // Metodo
//     addOnStock(quantity){
//         this.inStock += quantity
//     }
// }

// console.log(Book)

// Book.addOnStock(50)

// console.log(Book)

// Book.save = function(){
//     console.log("Dados salvos no banco")
// }

// Book.save()

// console.log(Book)

// Função construtora
function Book(title, pages, tags, author){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    // Criando metodo
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    }
    this.save = function(){
        console.log("Dados salvos no banco")
    }
}

const author = {name: "Christopher Paolini"}
const tags = ["fantasy", "adventure", "medieval"]

// Para usar a função construtora deve se usar o new
const eragon = new Book("Eragon", 468, tags, author)

console.log(eragon)

eragon.addOnStock(20)

console.log(eragon)