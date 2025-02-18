import { useRef } from "react"

export default function RefExample(){
    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "#f64348"
    }
    return (
        <div>
            {/* Associando o inputRef ao input criado abaixo */}
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focar</button>
        </div>
    )
}