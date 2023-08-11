import calculate from "./calculate.js"

const input = document.getElementById('input')

export function handleButtonPress(ev){
    const value = ev.currentTarget.dataset.value
    input.value += value
}

export function handleclearButton(){
    input.value = ''
    //resultInput.value = ''
    input.focus()
}

export function handleTyping(ev){
    ev.preventDefault()
    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }


    // Habilitando backspace
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }

    
    // chamando funcao calcular com enter
    if(ev.key === 'Enter'){
        calculate()
    }
 }