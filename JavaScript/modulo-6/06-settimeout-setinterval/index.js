console.log('Iniciando programa!')

// const timeoutId = setTimeout(() => {
//     console.log('Se passaram 3 segundos desde que o programa iniciou.')
// }, 1000 * 3)

// clearTimeout(timeoutId)

let seconds = 0
const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos`)
    if(seconds > 10){
        clearInterval(intervalId)
        console.log('Tempo esgotado! Encerrando...')
    }
}, 1000 * 3)

console.log('tests')