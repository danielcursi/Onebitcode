import Button from "../button"
import styles from "./styles.module.css"
import Title from "../Title"
import { useState } from "react"
import getPassword from "../geradorSenhas.js"

export default function sectionGenerator() {
    const [textCopied, setTextCopied] = useState('Copiar!')
    function copied() {
        if(!password)
            return alert("Nada a ser copiado!")
        
        navigator.clipboard.writeText(password).then(() => {
            setTextCopied('Copiado!')
        })
    }

    const [password, setPassword] = useState('')
    function handGeneratePassword(){
        setPassword(getPassword())
        setTextCopied('Copiar')
    }
    return (
        <div className={styles.section}>
            <Title>Gerador de senhas</Title>
            <div>
                <Button onClick={handGeneratePassword}>Gerar!</Button>
                <Button onClick={copied}>{textCopied}</Button>

            </div>
            <div className={styles.password}>{password}</div>
        </div>
    )
}