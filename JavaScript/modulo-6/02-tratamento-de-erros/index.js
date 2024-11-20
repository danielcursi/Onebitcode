function sum(a, b){
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if(isNaN(firstNumber) || isNaN(secondNumber)){
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

try{ // try == tentar, tente rodar esse codigo
    console.log(sum(2, 9))
    console.log(sum(true, 14)) // true == 1, false == 0
    console.log(sum(undefined, 22))
    console.log(sum(18, "0"))
    console.log(sum(39, null)) // null == 0
    console.log(sum(13, "zero"))    
} catch(error) {  // catch == pegar, caso tenha um erro em try, o codigo entra em catch
    console.log('An error ocurred')
    console.log(error.message)
} finally{ // finally == finalmente, bloco sempre sera executado!
    console.log('Calculations finished')
}

