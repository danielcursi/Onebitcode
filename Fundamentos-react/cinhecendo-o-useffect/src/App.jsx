import { useEffect } from "react"
import { useState } from "react"

function Counter(){
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("O efeito colateral foi ativado!")

    return () => {
      console.log("Fazendo a limpeza...")
      console.log("Componente desmontado")
    }
  }, [])

  return (
    // Fica esperando um state montar a pagina, no caso o counter mudar seu valor
    <button onClick={() => setCounter(state => state + 1)}>contador: {counter}</button>
  )
}

export default function App(){
  
  const [counter2, setCounter2] = useState(0)

  const [show, setShow] = useState(false)

  return(
    <>
    <h1>Conhecendo o useEffect</h1>
    <div>
      <input type="checkbox" value={show} id="show" onChange={() => setShow(state => !state)} />
      <label htmlFor="show">Exibir</label>
    </div>
    {/* useEffect apenas fica esperando mudanças no primeiro counter */}
    {show ? <Counter /> : null}
    
    <hr />
    <button onClick={() => setCounter2(state => state + 1)}>contador: {counter2}</button>
    </>
  )
}