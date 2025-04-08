const fs = require("node:fs")

// Lendo o arquivo.txt com stream
const streamLeitura = fs.createReadStream("arquivo.txt")
const streamLeituraImg = fs.createReadStream("[wallpaper-obc]-elite-2048x1152-v1.0.png")

// Simulando um buffer com o array
const buffer = []

streamLeituraImg.on("data", (chunk) => {
    // Quebrando a string e bits e adionando ao buffer
    buffer.push(chunk)
    console.log("Um chunk foi processado.")
})

streamLeituraImg.on("end", () => {
    // mostrando dados do array
    console.log("Buffer:\n", buffer)
    // Juntando todos os buffers denovo e transformando em string
    //const dadosCompletos = Buffer.concat(buffer).toString()
    //console.log("Dados lidos:\n", dadosCompletos)
})