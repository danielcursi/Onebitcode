function sum(...numbers){
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(2, 2, 2))
console.log(sum(4, 2, 6, 1))