import fs from 'node:fs'

function createFile(content) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./arquivo.txt', content, 'utf-8', (error) => {
            if (error) {
                reject('Arquivo não encontrado, ', error.message)
                return
            }
            console.log('Arquivo criado com sucesso!')
            resolve()
        })
    })

}

export default createFile
