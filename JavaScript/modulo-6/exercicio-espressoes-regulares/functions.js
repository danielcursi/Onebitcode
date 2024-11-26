export function avalueteEmail(email, password){
    let increment = 0;
    let pass = 0;
    try{
        increment++
        const avaluateAtSignEmail = email.match(/\@/g)[0]
        increment++
        const avaluateBeforeAtSignEmail = email.match(/([a-zA-Z]+\d+)(?=\@)/g)[0]
        increment++
        const avaluateAfterAtSignEmail = email.match(/(?<=\@).{2}/g)[0]
        increment++
        const point = email.match(/(?<=\@)[^.]*\.[a-zA-Z]{2,}/g)[0]
        increment++

        //password

        pass++
        const avaluateLowerCasePass = password.match(/[a-z]{1,}/g)[0]
        pass++
        const avaluateUpperCasePass = password.match(/[A-Z]{1,}/g)[0]
        pass++
        const avaluateNumberPass = password.match(/\d{1,}/g)[0]
        pass++
        const avaluateCharacterSPPass = password.match(/[^\da-zA-Z]{1,}/g)[0]
        pass++
        const avaluateCharacterMinPass = password.match(/.{8,}/g)[0]
        pass++
        console.log(increment)

    } catch(error){
        if(increment == 1){
            alert('Caractere @ esperado!')
        }else if(increment == 2){
            alert('Texto antes do @ com pelo menos 2 caracteres, letras e números')
        }else if(increment == 3){
            alert('Texto após o @ com pelo menos 2 caracteres')
        }else if(increment == 4){
            alert('Texto após o @ e ponto com pelo menos 2 caracteres')
        }
        if(pass == 1){
            alert('Pelo menos uma letra minúscula!')
        }else if(pass == 2){
            alert('Pelo menos uma letra maiúscula!')
        } else if(pass == 3){
            alert('Pelo menos um número!')
        } else if(pass == 4){
            alert('Pelo menos um caractere especial!')
        }else if(pass == 5){
            alert('Pelo menos 8 caracteres!')
        }
    }
    
       
    
    
}