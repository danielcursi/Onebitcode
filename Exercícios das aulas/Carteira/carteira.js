let saldo = Number(window.prompt('Quanto de dinheiro tem disponivel?'))
let carteira = window.prompt(`Saldo disponivel: R$${saldo}\n 1.Adicionar mais dinheiro\n 2.Remover\n 3.Sair`)
let valor = 0
while (carteira != '3'){
    switch (carteira){
        case '1':
            valor = Number(window.prompt('Qual o valor a ser adicionado?'))
            saldo += valor
            break
        case '2':
            valor = Number(window.prompt('Qual o valor a ser tirado?'))
            
            if(saldo < valor){
                alert('Saldo indisponivel')
            } else{
            saldo -= valor
            }
            break
        default:
            alert('opção indisponivel')
            break
    }
    carteira = window.prompt(`Saldo disponivel: R$${saldo}\n 1.Adicionar mais dinheiro\n 2.Remover\n 3.Sair`)
} if (carteira = "3"){
    alert('Encerrando sistema...')
}
