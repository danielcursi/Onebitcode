const register = (ev) => {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passworConfirmation = sectionElement.children.passwordConfirmation.value

    if(password == passworConfirmation){
        alert("Bem vindo! " + username)
    }else{
        alert("Senhas não conferem")
    }
}

const removeEvent = () => {
    button.removeEventListener("click", register)
}

const button = document.getElementById("register-button")

button.addEventListener('click', register)

button.addEventListener("mouseover", (ev) => console.log(ev))