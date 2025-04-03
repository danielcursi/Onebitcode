import fs from 'node:fs'

function showFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('./arquivo.txt', 'utf-8', (error, data) => {
            if (error) {
                reject('Arquivo não encontrado, ', error.message)
                return
            }
            console.log(data)
            resolve()
        })
    })

}

export default showFile