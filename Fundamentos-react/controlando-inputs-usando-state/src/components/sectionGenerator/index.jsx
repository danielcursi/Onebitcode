import Button from "../button"
import styles from "./styles.module.css"
import Title from "../Title"
import { useState } from "react"
import Input from "../Input/Input.jsx"


export default function sectionGenerator() {
    const [textCopied, setTextCopied] = useState('Copiar!')
    const [passwordSize, setPasswordSize] = useState(12)
    const [showInput, setShowInput] = useState(false)

    const passwordSizeAut = showInput ? passwordSize : 8

    function getPassword() {
        const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$";
        let password = "";
    
        for (let i = 0; i < passwordSizeAut; i++) {
          let position = Math.floor(Math.random() * chars.length);
          password += chars[position];
        }
        return password
      }

    
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
                <div>
                    <label htmlFor="">Customizar tamanho:</label>
                    <input type="checkbox"
                    id="showInput"
                    value={showInput}
                    onChange={() => setShowInput(show => !show)}
                    />
                </div>
                {showInput ? (
                    <div>
                        <label>Tamanho:</label>
                        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
                    </div>
                ) : null}
                
                <Button onClick={handGeneratePassword}>Gerar senha de {showInput ? passwordSize : 8} caracteres</Button>
                <Button onClick={copied}>{textCopied}</Button>

            </div>
            <div className={styles.password}>{password}</div>
        </div>
    )
}