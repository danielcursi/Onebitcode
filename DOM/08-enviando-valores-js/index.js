function register(element){
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if(password !== passwordConfirmation){
        alert('As senhas não coincidem')
    } else{
        alert('Usuario ' + username + ' foi criado')
    }
    console.log({username, password, passwordConfirmation})
}