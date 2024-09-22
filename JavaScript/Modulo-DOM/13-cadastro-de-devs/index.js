function createLabel(text, htmlFor){
    const newLabel = document.createElement('label')
    newLabel.innerText = text
    newLabel.htmlFor = htmlFor
    return newLabel
}

function createInput(id, value, name, type = 'text'){
    const newInput = document.createElement('input')
    newInput.id = id
    newInput.value = value
    newInput.name = name
    newInput.type = type
    return newInput
}

const buttonBtn = document.getElementById('buttonBtn')
const form = document.getElementById('form')
const developers = []

let incrementID = 0

buttonBtn.addEventListener('click', function(){
    // Pegando tag Ul do html
    let ul = document.getElementById('ul')
    // Variavel de incremento para o id
    incrementID++
    // Criando tag li para adicionar os elementos criados e depois colocar no ul
    let li = document.createElement('li')
    // Colocando um id na li ex: id='inputRow-1' 
    li.id = 'inputRow-' + incrementID
    // Colocando classe no li
    li.className = 'inputRow'

    // Criando label Tecnologia com for='Technolog-1' e incrementando assim que o button clicado novamente
    let stackLabel = createLabel('Tecnologia: ', 'Technolog-' + incrementID)
    // Criando input id='Technolog-1' do type='text' name='Technolog-1' e value nulo
    let stackInput = createInput('Technolog-' + incrementID, null, 'Technolog', 'text')

    // Criando label para o tempo de experiencia
    const exLabel = createLabel('Experiência: ')

    // Criando id para cada campo do type radio
    const id1 = 'expRadio-' + incrementID + '.1'
    // Criando o campo de input passando o id criado campo type='radio', name='techExp-1', value='0-2 anos'
    const exRadio1 = createInput(id1, '0-2 anos', 'techExp-' + incrementID, 'radio')
    // Criando label seguida do campo radio
    const expLabel1 = createLabel('0-2 anos', id1)

    // Mesma parte da de cima
    const id2 = 'expRadio-' + incrementID + '.2'
    const exRadio2 = createInput(id2, '3-4 anos', 'techExp-' + incrementID, 'radio')
    const expLabel2 = createLabel('3-4 anos', id2)

    // Mesma parte da de cima
    const id3 = 'expRadio-' + incrementID + '.3'
    const exRadio3 = createInput(id3, '5+ anos', 'techExp-' + incrementID, 'radio')
    const expLabel3 = createLabel('5+ anos', id3)

    // Criando butão de remover para cada li
    const removeBtn = document.createElement('button')
    // Passando o tipo
    removeBtn.type = 'button'
    // passando o nome
    removeBtn.innerText = 'Remover'
    // Criando o evento de clique
    removeBtn.addEventListener('click', function(){
        // Informando para o ul remover o li
        ul.removeChild(li)
    })

    li.append(stackLabel, stackInput, removeBtn,exLabel, exRadio1, expLabel1, exRadio2, expLabel2, exRadio3, expLabel3)
    ul.appendChild(li)
})

form.addEventListener('submit', function(ev){
    // Função previne o carregamento da pagina
    ev.preventDefault()

    // pegando o campo de nome completo
    const fullname = document.getElementById('fullname').value
    // pegando cada li da pagina que tenha classe='inputRow'
    const inputRows = document.querySelectorAll('.inputRow')
    // Criando array com nome de technologies
    let Technologies = []
    // Percorrendo com o metodo forEach cada li da pagina com um paramentro na função com nome de item
    inputRows.forEach(function(item){
        // Criando variavel para receber o que está escrito no input
        // sendo pego o valor de cada li que tenha um id e uma classe='Technolog'
        const techName = document.querySelector('#' + item.id + ' input[name="Technolog"]').value
        // Mesma logica para os campos de input radio só que esta sendo pego o valor dos que estão checados
        const techExp = document.querySelector('#' + item.id + ' input[type="radio"]:checked').value
        Technologies.push({name: techName, exp: techExp})
    })

    // Criando objeto para armazenar o nome completo e o array das technologias
    const newDev = { fullname: fullname, technologies: Technologies}
    // Adicionando a variavel no array de devs
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')

    // Limpando campo de nome completo
    document.getElementById('fullname').value = ''
    // Removendo todos os campos de li criados
    inputRows.forEach(function(item){
        item.remove()
    })

    console.log(developers)
})