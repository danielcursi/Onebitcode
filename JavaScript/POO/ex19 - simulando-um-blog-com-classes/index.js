const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Titulo do post", "Aprendendo POO")

post.addComment("Daniel Cursi", "Show")
post.addComment("Victoria", "Bem legal")

console.log(john)
console.log(post)