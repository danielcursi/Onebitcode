async function asyncSum(a, b){
    if( typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('arguments must be of type number')
    }else{
        return a + b
    }
}

async function asyncSubtract(a, b){
    if( typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('arguments for subtract must be of type number')
    }else{
        return a - b
    }
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, '20')

Promise.all([sumResult, subtractResult]).then(result => {
    console.log(result)
}).catch(err => {
    console.log(err)
})