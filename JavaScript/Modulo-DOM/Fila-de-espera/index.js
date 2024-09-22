function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.innerText = text
    label.htmlFor = htmlFor
    return label
}

function cresteInput(id, name, value, type = 'text'){
    const input = document.createElement('input')
    input.id = id
    input.name = name
    input.value = value
    input.type = type
    return input
}

const form = document.getElementById('form')
const fila = []
let incrementId = 0

document.getElementById('newPacient').addEventListener('click', function(){
    incrementId++

    const ul = document.getElementById('ul')
    const li = document.createElement('li')
    li.id = 'pct-' + incrementId
    li.className = 'stackRols'

    const newLabel = createLabel('Nome: ', 'paciente-' + incrementId)
    const newInput = cresteInput('paciente-' + incrementId, 'fila-espera', null)

    const removeLi = document.createElement('button')
    removeLi.innerText = 'Remover'
    removeLi.addEventListener('click', function(){
        ul.removeChild(li)
    })

    li.append(newLabel, newInput, removeLi)
    ul.appendChild(li)


})

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    let t = false
    const inputRows = document.querySelectorAll('li')
    inputRows.forEach(function(item){
        const name = document.querySelector('#' + item.id + ' input[name="fila-espera"]').value
        if(name == ''){
            alert('Por favor adicionar um nome valido!')
        }else{
            fila.push(name)
            t = true
        }
    })

    if(t){
        alert('Paciente(s) adicionado na fila!')
    }

    inputRows.forEach((item) => {
        item.remove()
    })
    document.getElementById("totalPacientes").value = fila.length
    console.log(fila)
})

document.getElementById('atenderPaciente').addEventListener('click', function(){
    if(fila.length <= 0){
        alert('Nenhum paciente na fila')
    }else{
        const pacienteAtendido = fila.shift()
        alert('Paciente ' + pacienteAtendido + ' Atendido!')
        document.getElementById("totalPacientes").value = fila.length
    }
    
})

document.getElementById("filaDePacientes").addEventListener('click', function(){
    let pacientes = ''
    let i = 0
    if(fila.length <= 0){
        alert('Nenhum paciente na fila!')
    }else{
        fila.forEach(function(item){
            if(i == 0){
                pacientes += item
                i++
            }else{
                pacientes += ' - ' + item
            }
        })
        alert('Pacientes: ' + pacientes)
    }
})
