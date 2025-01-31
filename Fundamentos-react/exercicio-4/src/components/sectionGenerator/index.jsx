import Button from "../button"
import styles from "./styles.module.css"
import Title from "../Title"
import { useState } from "react"
import getPassword from "../geradorSenhas.js"

export default function sectionGenerator() {
    const [textCopied, setTextCopied] = useState('Copiar!')
    function copied() {
        setTextCopied('Copiado!')
    }

    const [password, setPassword] = useState('')
    function handGeneratePassword(){
        setPassword(getPassword())
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