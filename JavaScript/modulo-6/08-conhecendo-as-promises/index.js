// pendente - pending
// resolvida - resolved
// rejeitada - rejected

// const p = new Promise((resolved, rejected) => {
//     console.log('A promise está sendo executada!')
//     setTimeout(() => {
//         if(true){
//             rejected(false)
//         }
//         console.log('Resolvendo a promise...')
//         resolved(true)
//     }, 1000 * 2)
    
// })

// console.log(p)

// setTimeout(() => {
//     console.log(p)
// }, 1000 * 3)

// Forma normalmente mais utilizada

function execute(){
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada...')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve('Resultado')
        })
    })
}

const p = execute()

setTimeout(() => {
    console.log(p)
}, 2000);