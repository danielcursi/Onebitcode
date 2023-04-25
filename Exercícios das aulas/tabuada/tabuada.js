let n = Number(window.prompt('Você quer a tabuada de qual número?'))
let res = ""
for(let t = 1 ; t <= 20 ; t++){
    res += " -> " + n + " * " + t + " = " + (n * t) + "\n"
    }
alert('Resultado da tabuada de ' + n + ":\n\n" + res)
