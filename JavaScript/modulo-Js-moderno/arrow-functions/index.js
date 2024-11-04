const arrowSum = n => `O dobro de ${n} é: ${n*2}`
const number = 21
console.log(arrowSum(number))

const tows = ["Central City", "Calvin City", "El Paso", "Gotham City", "Metropolis", "Star City", "Smallville"]

const towswithC = tows.filter(function(tow){
    return tow[0] === 'C'
})

console.log(towswithC)

const arrowtowswithC = tows.filter(tow => tow[0] === 'G')
console.log(arrowtowswithC)