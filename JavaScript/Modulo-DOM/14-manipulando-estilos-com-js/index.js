function ThemeLight(){
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function ThemeDark(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

function switchTheme(){
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('is-light').addEventListener('click', ThemeLight)
document.getElementById('is-dark').addEventListener('click', ThemeDark)
document.getElementById('switchBtn').addEventListener('click', switchTheme)