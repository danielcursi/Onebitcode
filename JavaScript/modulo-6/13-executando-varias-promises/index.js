function asyncSum(a, b){
    return new Promise((result, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number'){
            reject('arguments must be of type number')
        }else{
            result(a + b)
        }
    })
}

function asyncSubtract(a, b){
    return new Promise((result, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number'){
            reject('arguments must be of type number')
        }else{
            result(a - b)
        }
    })
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, '10')

Promise.all([sumResult, subtractResult]).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})

const numbers = [4, 9, 5, 13, 77]

function asyncSquare(x){
    return new Promise((result, reject) => {
        result(x * x)
    })
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
})