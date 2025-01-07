async function imc(weigth, height) {
    if(typeof weigth === "number" && typeof height === "number"){
        return (weigth / (height * height))
    }else{
        return Promise.reject('Arguments must be of type number')
    }  
}

 async function calculateImc(weigth, height){
    try {
        const res = await imc(weigth, height)
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
    } catch (error) {
        console.log(error)
    }
}


calculateImc(70, 'dsd')


console.log('teste')