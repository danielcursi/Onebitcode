import Button from "../button"
import styles from "./styles.module.css"
import Title from "../Title"
import { useState } from "react"

export default function sectionGenerator() {
    const [textCopied, setTextCopied] = useState('Copiar!')
    function copied() {
        setTextCopied('Copiado!')
    }
    return (
        <div className={styles.section}>
            <Title>Gerador de senhas</Title>
            <div>
                <Button>Gerar!</Button>
                <Button onClick={copied}>{textCopied}</Button>

            </div>
            <div className={styles.password}>rer4545re54r5e</div>
        </div>
    )
}