let imoveis = []
let opcao = ""

while( opcao !== "3"){
    opcao = prompt("Imoveis: " + imoveis.length + "\n1. Salvar um novo imovel\n2. Imoveis cadastrados\n3. Sair")
    switch(opcao){
        case "1":
            let imovel = {}
            imovel.nome = prompt("Informe o nome do proprietario: ")
            imovel.quartos = parseInt(prompt("Informe a quantidade de quartos: "))
            imovel.banheiros = parseInt(prompt("Informe a quantidade de banheiros: "))
            imovel.garagem = prompt("Possui garamgem? sim/nao")

            let confirmacao = confirm("Deseja confirmar o cadastro? \nNome: " + imovel.nome + "\nQuartos: " + imovel.quartos + "\nBanheiros: " + imovel.banheiros + "\nGaramgem: " + imovel.garagem)

            if(confirmacao){
                imoveis.push(imovel)
                alert("Cadastro realizado com sucesso!")
            }else{
                alert("Cadastro cancelado!")
            }
            break
        case "2":
            for(let i = 0; i < imoveis.length; i++){
                alert("Nome: " + imoveis[i].nome + "\nQuartos: " + imoveis[i].quartos + "\nBanheiros: " + imoveis[i].banheiros + "\nGaramem: " + imoveis[i].garagem)
            }
            break
        case "3":
            alert("Encerrando!")
            break
        default:
            alert("Opção não encontrada!")
    }
}
