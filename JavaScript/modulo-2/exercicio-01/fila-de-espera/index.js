let fila = []
let opcao = ""

while(opcao != "3"){
    let pacientes = ""
    for(let i = 0; i < fila.length; i++){
        pacientes += (i + 1) + "°- " + fila[i] + " | "
    }
    opcao = prompt(pacientes + "\n1. Novo paciente\n2. Consultar paciente\n3. Sair")
    switch(opcao){
        case "1":
            let paciente = prompt("Informe o nome do paciente")
            fila.push(paciente)
            break
        case "2":
            
            if(fila.length <= 0){
                alert("Nenhum paciente a ser atendido!")
            }else{
                let consulta = fila.shift()
                alert("Paciente atendido: " + consulta)
            }
            break
        case "3":
            alert("Encerrando!")
            break
        default:
            alert("Opção invalida!")
    }
}