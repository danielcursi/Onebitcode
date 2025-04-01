let num = 94571
const digitos = Array.from(num.toString())

let inteiros = ''
digitos.forEach(x => {
    inteiros += Math.pow(x, 2)
})

console.log(Number(inteiros))