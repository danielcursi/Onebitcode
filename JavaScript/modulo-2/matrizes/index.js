const arr = [
    "1° Nível",
    ["2° Nível", 42, true],
    [["3° Nível, 1° item", "Olá, mundo!"], ["3° Nível, 2° item", "Oi, mundo!"]],
    []
]

console.log(arr)
console.log(arr[0])
console.log(arr[1][1])
console.log(arr[2][1])
console.log(arr[2][1][1])

const matriz = [
    ["l0, c0", "l0, c1", "l0, c2", "l0, c3"],
    ["l1, c0", "l1, c1", "l1, c2", "l1, c3"],
    ["l2, c0", "l2, c1", "l2, c2", "l2, c3"]
]

console.table(matriz)
// matriz.push("Daniel")
// matriz[0].push("Victoria")
// console.log(matriz)
// console.table(matriz)

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        let elemento = matriz[i][j]
        console.log("item na posição: (" + i + ", " + j + "), corresponde a: " + elemento)
    }
}