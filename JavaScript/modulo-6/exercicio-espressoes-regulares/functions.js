export function avalueteEmail(email){
    let increment = 0;
    try{
        increment++
        const avaluateAtSignEmail = email.match(/\@/g)[0]
        increment++
        const avaluateBeforeAtSignEmail = email.match(/([a-zA-Z]+\d+)(?=\@)/g)[0]
        increment++
        const avaluateAfterAtSignEmail = email.match(/(?<=\@).{2}/g)[0]
        increment++
        const point = email.match(/(?<=\.).{2}/g)     
    } catch(error){
        if(increment == 1){
            alert('Caractere @ esperado!')
        }else if(increment == 2){
            alert('Texto antes do @ com pelo menos 2 caracteres, letras e números')
        }else if(increment == 3){
            alert('Texto após o @ com pelo menos 2 caracteres')
        }
    }
}