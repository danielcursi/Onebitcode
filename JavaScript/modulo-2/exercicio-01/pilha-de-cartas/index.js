let cartas = []
let opcao = ""

while(opcao != "3"){
    opcao = prompt("Cartas: " + cartas.length + "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair")
    switch (opcao){
        case "1":
            let nome = prompt("Informe o nome da carta: ")
            cartas.push(nome)
            alert("Carta adicionada!")
            break
        case "2":
            if(cartas.length <= 0){
                alert("Baralho sem cartas no momento!")
            }else{
                let remover = cartas.pop()
            alert("Carta: " + remover + " removido(a)")
            }
            break
        case "3":
            alert("Encerrando!")
            break
        default:
            alert("Opção não encontrada!")
    }
}