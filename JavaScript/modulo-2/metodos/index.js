let pessoa = {
    nome: "Daniel",
    idade: 25,
    dizerOla(){
        console.log("Olá, mundo!" + " Meu nome é " + this.nome)
    }
}

console.log(pessoa)
typeof(console)
pessoa.dizerOla()