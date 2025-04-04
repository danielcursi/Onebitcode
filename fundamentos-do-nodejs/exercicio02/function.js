import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import os from "node:os"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let count = 0
let dadosSystem = ''

export function infoSystem(){
    const id = setInterval(() => {
        count++
        console.log("executando")

        const fullpath = path.join(__dirname, "log", "log.txt")

        dadosSystem += `Sistema: ${os.platform()}\n\nArquitetura: ${os.arch()}\n\nProcessador: ${os.cpus()[0].model}\n\nTempo-de-atividade: ${os.cpus()[0].times.user}milessegundos\n\nUso-da-memoria: ${(os.freemem() / 1024 / 1024 / 1024 ).toFixed(2)}GB\n\n`

        fs.writeFile(fullpath, dadosSystem, "utf-8", (error) => {
            if(error){
                console.log("Error ao encontrar o arquivo ", error.message)
                return
            }
        } )

        if(count === 5){
            clearInterval(id)
        }
    }, 1000)
}