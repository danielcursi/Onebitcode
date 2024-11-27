import { avalueteEmail } from "./functions.js"

document.getElementById('form').addEventListener('submit', (ev) => {
    ev.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    avalueteEmail(email, password)
    
})