function mediana(...values){
    const sum = values.reduce((accum, num) => accum + num, 0)
    console.log(`Média: ${sum / values.length}`)
}

mediana(10, 9, 6, 8, 9, 1, 5, 7)
mediana(2, 5, 7, 1, -2)
mediana(10, 10, 10, 10, 9)
mediana(25, 75)