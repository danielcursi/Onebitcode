let imoveis = []
let opcao = ""

do{
    opcao = prompt("Imoveis: " + imoveis.length + "\n" + "1. Cadastrar imovel\n 2. Imoveis Cadastrados\n 3. Sair")

    switch (opcao){
        case "1":
            const imovel = {}
            imovel.proprietario = prompt("Nome do proprietario")
            imovel.quartos = prompt("Possui quantos quartos?")
            imovel.banheiros = prompt("Total de banheiros")
            imovel.garagem = prompt("Possui garagem? sim/nao")

            const confirmacao = confirm(
                "Salvar este imóvel?\n" +
                "\nProprietario: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nPossui Garagem: " + imovel.garagem
            )
            if(confirmacao){
                imoveis.push(imovel)
                alert("Imovel salvo com sucesso!")
            }
            break
        case "2":
            for(let i = 0; i < imoveis.length ; i++){
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietario: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem: " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando...")
    }
} while(opcao !== "3")