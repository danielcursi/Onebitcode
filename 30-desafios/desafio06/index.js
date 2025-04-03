
function inverteString(string) {
    let newString = ''
    const arrayStrings = string.toLowerCase().split(' ')
    arrayStrings.forEach((item) => {
        for (let i = item.length - 1; i >= 0; i--) {
            newString += item[i]
            if (i == 0) {
                newString += ' '
            }
        }
    })
    console.log(newString)
}

inverteString("Lorem ipsum dolore sec avanti")
inverteString("This is an apple")
inverteString("Hello")

