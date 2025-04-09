// const args = process.argv.slice()
// console.log(args)

// const args = process.argv.slice(2)
// console.log('Argumentos informador: ', args)

const args = process.argv

const namedArguments = {}

process.argv.slice(2).forEach((arg, index, array) => {
    if(arg.startsWith("--")){
        const argName = arg.slice(2)
        const argValue = array[index + 1]
        namedArguments[argName] = argValue
    }
});

console.log("Argumentos informados: ")
console.log(namedArguments)