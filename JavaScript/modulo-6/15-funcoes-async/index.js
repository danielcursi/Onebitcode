 async function asyncSum(a, b){
    return a + b
}

async function asyncSubtract(a, b){
    return a - b
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 20)

Promise.all([sumResult, subtractResult]).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

const numbers = [4, 9, 5, 13, 77]

function asyncSquare(x){
    return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
})