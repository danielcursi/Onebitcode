import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleTyping, handleclearButton } from "./keyHandles.js"
import themeSwitcher from "./themeSwitcher.js"


// Habilitando os botoes
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', handleButtonPress)
})


// Limpando valores
document.getElementById('clear').addEventListener('click', handleclearButton)

// Pegando valores pelos botoes do teclado
document.getElementById('input').addEventListener('keydown', handleTyping)

// chamando funcao calcular com click
document.getElementById('equal').addEventListener('click', calculate)

// Copiar resultado
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)

// Alterando tema para claro/escuro
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)