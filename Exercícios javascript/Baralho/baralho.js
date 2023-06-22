let baralho = []
let opcao = ""

do{
    opcao = prompt("Baralho:\n " + baralho.length +
    "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair")

    switch(opcao){
        case "1":
            const novaCarta = prompt("Qual a carta à ser adcionada?")
            baralho.unshift(novaCarta)
            break
        case "2":
            const retirarCarta = baralho.shift()
            if(!retirarCarta){
                alert('Não há nenhuma carta no baralho!')
            } else {
                alert(retirarCarta + " foi retirado")
            }
            
            break
        case "3":
            alert('Saindo....')
            break
    }
} while(opcao !== "3")