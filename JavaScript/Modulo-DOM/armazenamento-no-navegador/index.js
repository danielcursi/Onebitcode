document.getElementById('SessionBtn').addEventListener('click', function(){
    const inputSession = document.getElementById('inputSession')
    sessionStorage.setItem('info', inputSession.value)
    inputSession.value = ''
})

document.getElementById('readSession').addEventListener('click', function(){
    const readSession = sessionStorage.getItem('info')
    alert('A informação salva foi: ' + readSession)
})

document.getElementById('LocalBtn').addEventListener('click', function(){
    const inputLocal = document.getElementById('inputLocal')
    localStorage.setItem('texto', inputLocal.value)
    inputLocal.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    const readLocal = localStorage.getItem('texto')
    alert('A informação salva foi: ' + readLocal)
})

document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('inputCookie')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024,9, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})