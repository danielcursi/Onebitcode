import fs from 'node:fs'

function updateFile(content) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./arquivo.txt', content, 'utf-8', (error) => {
            if (error) {
                reject('Arquivo não encontrado, ', error.message)
                return
            }
            console.log('Arquivo modificado com sucesso!')
            resolve()
        })
    })

}

export default updateFile