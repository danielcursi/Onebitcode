let num = parseFloat(prompt("Informe um número para calcular a tabuada: "))
let res = "";
for(let i = 0; i <= 20; i++){
    res += (num + " x " + i + " = " + num * i + "\n")
    if(i == 20){
        console.log(res)
    }
}