let menu = window.prompt('Escolha um prato:\nFrango \nPeixe \nBoi \nPato \nEncerrar')
while (menu != 'Encerrar'){
    switch (menu){
        case 'Frango':
            alert('Você escolheu frango')
            break
        case 'Peixe':
            alert('Você escolheu peixe')
            break
        case 'Boi':
            alert('Você escolheu boi')
            break
        case 'Pato':
            alert('Você escolheu pato')
            break
        default:
            alert('Prato indisponivel')
            break
    }
    menu = window.prompt('Escolha outro prato:\nFrango \nPeixe \nBoi \nPato \nEncerrar')
} if (menu = "Encerrar"){
    alert('Encerrando sistema...')
}
