function mediana(values){
    const sum = values.reduce((accum, num) => accum + num, 0)
    return (sum / values.length).toFixed(2)
    //console.log(`Média: ${(sum / values.length).toFixed(2)}`)
}

let arrayTreated = []

function stringHandling(str){
    const arrayNumbers = str.split(',')
    arrayNumbers.forEach((itens) => {
        arrayTreated.push(Number(itens.trim()))
    })
}

function toString(str){
    let convertString = ''
    str.forEach((items, i) => {
        if(i != 0){
            convertString += ' - '
        }
        convertString += items
    })
    return convertString
}

document.getElementById('btn-calculate').addEventListener('click', () => {
    
    
    const numbers = document.getElementById('numbers').value

    stringHandling(numbers)

    const ul = document.getElementById('averaga-stacks')
    const li = document.createElement('li')

    const span = document.createElement('span')
    span.innerText = `${toString(arrayTreated)}, média: ${mediana(arrayTreated)}`

    const btn = document.createElement('button')
    btn.id = 'btn-remove'
    btn.innerText = 'remover'
    btn.type = 'button'

    btn.addEventListener('click', () => {
        ul.removeChild(li)
    })

    li.append(span, btn)
    ul.appendChild(li)

    document.getElementById('numbers').value = ''

    arrayTreated = []
    console.log(arrayTreated)
})

