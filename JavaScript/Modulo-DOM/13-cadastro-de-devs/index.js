function register(ev){
    const sectionElement = ev.currentTarget.parentNode
    const name = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password == passwordConfirmation && password != ""){
        alert("Seja bem vindo! " + name)
    }else{
        alert("Usuario ou senha invalidos!")
    }
}

function removeEvent(){
    button.removeEventListener('click', register)
    alert("Evento removido!")
}


const button = document.getElementById("register-button")

button.addEventListener('click', register)