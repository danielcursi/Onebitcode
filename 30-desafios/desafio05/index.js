const alfabeto = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

function Decifrador(palavra) {
    const arrayLetras = palavra.toLowerCase().replace(/\s+/g, '').split('')
    let maiorNumero = 0

    arrayLetras.forEach(item => {
        alfabeto.forEach((i, index) => {
            if (i == item) {
                if (index > maiorNumero) {
                    maiorNumero = index
                }
            }
        })
    })

    const maiorLetra = alfabeto[maiorNumero]
    console.log(maiorLetra)
}

Decifrador("Lorem ipsum dolores avanti")
Decifrador("Hello")
Decifrador("May the force be with you")
Decifrador("Its over nine thousand")

