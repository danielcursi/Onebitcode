import fs from 'node:fs'

function deleteFile() {
    return new Promise((resolve, reject) => {
        fs.unlink('./arquivo.txt', (error) => {
            if (error) {
                reject('Arquivo não encontrado, ', error.message)
                return
            }
            console.log('Arquivo deletado!')
            resolve()
        })
    })

}

export default deleteFile