function execute(){
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            if(true){
                reject('Error!')
            }else{
                resolve('Tudo certo!')
            }
            
        }, 1000 * 3)
    })
}

const p = execute().then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada. O valor desolvido foi: ${err}`)
}).finally(() => {
    console.log(`Finalizando a promise...`)
})