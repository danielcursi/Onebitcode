function register(element){
    const UserName = element.children.username.value
    const Password = element.children.password.value
    const PassWordConfirmation = element.children.passwordConfirmation.value

    if(Password == PassWordConfirmation){
        alert("Seja Bem-vindo! " + UserName)
    }else{
        alert("As senhas não coincidem")
    }
}