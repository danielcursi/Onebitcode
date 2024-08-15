let num1, num2, result;

num1 = parseFloat(prompt("Informe o 1° número: "))
num2 = parseFloat(prompt("Informe o 2° número: "))


function sum(){
    result = num1 + num2
    return result
}

function sub(){
    result = num1 - num2
    return result
}

function mult(){
    result = num1 * num2
    return result
}

function div(){
    result = num1 / num2
    return result
}

alert("Soma: " + sum() + "\nSubtração: " + sub() + "\nMultiplicação: " + mult() + "\nDivisão: " + div())