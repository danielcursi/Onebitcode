let opcao = ""
let vagas = []

function novaVaga(){
    const novaVagas = {}
    novaVagas.nome = prompt("Informe o nome da vaga")
    novaVagas.descricao = prompt("Descrição da vaga")
    novaVagas.data = prompt("Data limite para se candidatar")
    novaVagas.inscricoes = 0
    novaVagas.candidatos = []
    novaVagas.vagaCriada = true

    const confirmar = confirm("Salvar informações?\n\nNome: " + novaVagas.nome + "\nDescrição: " + novaVagas.descricao + "\nData limite: " + novaVagas.data)

    if(confirmar){
        vagas.push(novaVagas)
        alert("Informações salvas!!")
    }else {
        alert("Cadastro cancelado!")
    }
}

function listarVagas(){
    vagas.forEach(function(elemento, indice){
        const Elemento = {elemento}
        const Indice = {indice}
        alert(`Indice da vaga: ${Indice.indice}\nnome: ${Elemento.elemento.nome}\nTotal de candidatos: ${Elemento.elemento.inscricoes}`)
    })
}

function exibirMenu(){
    let opcao = prompt("1. Listar vagas disponiveis\n2. Criar uma nova vaga\n3. Visualizar uma vaga\n4. Inscrever um candidato em uma vaga\n5. Excluir vaga\n6. Sair")
    return opcao
}

function visualizarVagas(){
    let indice = parseInt(prompt("Informe o indice da vaga"))
    let existe = false
    for(let i = 0; i < vagas.length; i++){
        if(indice == i){
            existe = true
            let nomes = vagas[i].candidatos.join(",")
            alert(`Indice: ${indice}\nNome: ${vagas[i].nome}\nDescrição: ${vagas[i].descricao}\nData Limite: ${vagas[i].data}\nQuantidade de candidatos: ${vagas[i].inscricoes}\nCandidatos: ${nomes}`)
        }
    }
    if(existe == false){
        alert("Vaga não encontrada")
    }
}

function inscreverCandidato(){
    let nomeCandidatos = prompt("Nome do candidato")
    let indice = parseInt(prompt("Informe o indice da vaga"))
    let existe = false
    while(nomeCandidatos == ""){
        nomeCandidatos = prompt("Nome do candidato")
    }
    for(let i = 0; i < vagas.length; i++){
        if(indice == i){
            existe = true
            const confirmacao = confirm("Salvar informações?\nVaga: " + vagas[i].nome + "\nDescrição: " + vagas[i].descricao + "\nNome candidato: " + nomeCandidatos)

            if(confirmacao){
                vagas[i].candidatos.push(nomeCandidatos)
                vagas[i].inscricoes += 1
                alert("Informação salva!")
            }else {
                alert("Cancelado!")
            }
        }
    }
    if(existe == false){
        alert("Vaga não encontrada!")
    }
}

function removerVaga(){
    let indice = prompt("Informe o indice da vaga")
    let confirmacao = confirm("Excluir vaga?\n\nNome: " + vagas[indice].nome + "\nDescrição: " + vagas[indice].descricao + "\nQuantidade de candidatos: " + vagas[indice].inscricoes)

    if(confirmacao){
        vagas.splice(indice, 1)
        alert("Vaga excluida!")
    }else{
        alert("Operação cancelada!")
    }
}

while(opcao !== "6"){
    opcao = exibirMenu()
    switch(opcao){
        case "1":
            listarVagas()
            break
        case "2":
            novaVaga()
            break
        case "3":
            visualizarVagas()
            break
        case "4":
            inscreverCandidato()
            break
        case "5":
            removerVaga()
            break
    }
}