import createFile from "./createFile.js";
import showFile from "./showFile.js";
import updateFile from "./updateFile.js";
import deleteFile from "./deleteFile.js";

async function start() {
    await createFile("Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js.");
    await showFile();
    await updateFile("Conteúdo modificado!");
    await showFile();
    await deleteFile();
}



start()