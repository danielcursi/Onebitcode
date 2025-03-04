// const mediaAritmeticaSimples = (...numbers) => {
//     let sum = 0;
//     let i = 0;
//     numbers.forEach((item) =>{
//         sum += item
//         i++
//     })
//     alert(`Media aritmetica: ${(sum/i).toFixed(1)}`)
// }

// mediaAritmeticaSimples(2, 6, 3, 7, 4)

const averege = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`Media Simples: ${averege(7, 5, 10, 9)}`)

const weightedAverege = (...entries) => {
    const sum = entries.reduce((accum, {number, weight}) => accum + (number * (weight ?? 1)),0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1),0)
    return sum / weightSum
}

console.log(`Media Ponderada: ${weightedAverege(
    {number: 9, weight: 3},
    {number: 7, weight: 6},
    {number: 10, weight: 8}
)}`)

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a,b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if(orderedNumbers.length % 2 !== 0){
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondMedian = orderedNumbers[middle]
    return averege(firstMedian, secondMedian)
}

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)


const mode = (...numbers) => {
    // [ [n, qtd], [n, qtd], [n, qtd] ]
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)