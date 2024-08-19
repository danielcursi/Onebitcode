let arr = ["Harry", "Ronny", "Hermione", "Hegrid", "Dumbledor", "Sirius", "Lupin"]
console.log(arr)

// Adicionar ao array
// push -> inclui no final
let tamanho = arr.push("Snape")
console.log(arr)
console.log(tamanho)

// unshift -> inclui no começo
tamanho = arr.unshift("Draco")
console.log(arr)
console.log(tamanho)

// Remover do array
// pop -> remove do final
let item = arr.pop()
console.log(arr)
console.log(item)

// shift -> remove do começo
item = arr.shift()
console.log(arr)
console.log(item)

// Pesquisar item no array
// includes -> retorna true ou false
let possui = arr.includes("Dumbledor")
console.log(possui)

// indexof -> retorna o indice
let indice = arr.indexOf("Dumbledor")
console.log(indice)

// Cortando e concatenando
// slice
let arr2 = arr.slice(0, 4)
console.log(arr2)
// Começando por numeros negativos do final
let arr3 = arr.slice(-3)
console.log(arr3)

// concat
const bruxos = arr2.concat(arr3, "Valdemort")
console.log(arr)
console.log(arr2)
console.log(bruxos)

// Substituindo elemento
// splice
let elementosRemovidos = arr.splice(indice, 1, "Alvaro")
console.log(elementosRemovidos)
console.log(arr)


