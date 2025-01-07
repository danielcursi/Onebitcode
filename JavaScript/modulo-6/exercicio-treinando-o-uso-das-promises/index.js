const imc = (weigth, height) => {
    return new Promise((resolve, reject) => {
        console.log('Iniciando...')
        if(typeof weigth === "number" && typeof height === "number"){
            const res = (weigth / (height * height))
            resolve(res)
        }else{
            reject('Parêmatros incorretos!')
        }
    })
}

 function calculateImc(weigth, height){
     imc(weigth, height).then((res) => {
        if(res < 18.5){
            console.log(`Abaixo de 18.5: magreza`)
        }else if(res >= 18.5 && res <= 24.9){
            console.log(`Entre 18.5 e 24.9: normal`)
        }else if(res >= 25 && res <= 29.9){
            console.log(`Entre 25 e 29.9: sobrepeso`)
        }else if(res >= 30 && res <= 29.9){
            console.log(`Entre 30 e 29.9: obesidade`)
        }else{
            console.log(`Acima de 40: obesidade grave`)
        }
     }).catch((err) => {
        console.log(`Erro: ${err}`)
     }).finally(() => {
        console.log('Finalizando...')
     })
}

calculateImc(120, 'ss')
console.log('teste')