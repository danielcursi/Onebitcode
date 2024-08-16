let words = prompt("Informe a palavra a ser comparada: ")
var palavra = "";
let size = 0;

for(let i = words.length - 1 ; i >= 0; i--){
    palavra += words[i]
}

if(words == palavra){
    alert("A palavra é um: palíndromo: " + words + " = " + palavra)
}else{
    alert("A palavra não é um: palíndromo: " + words + " != " + palavra)
}