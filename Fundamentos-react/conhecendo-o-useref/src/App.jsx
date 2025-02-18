import { useRef } from "react"
import { useState } from "react"
import RefExample from "./RefExample"

export default function App(){
  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValues = () => {
    alert(`
      Variabel: ${variable}
      State: ${state}
      Ref: ${ref.current}`)
  }
  return (
    <div id="app">
      <h2>Examplo de Ref com o DOM</h2>
      <RefExample />
      <hr />
      <h2>Conhecendo o useRef</h2>
      <p>Variavel: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button onClick={() => variable++}>Aumentar Variavel</button>
      <button onClick={() => ref.current++}>Aumentar Ref</button>
      <button onClick={() => setState(state => state + 1)}>Aumentar State</button>
      <hr />
      <button onClick={showValues}>Exibir valores</button>
    </div>
  )
}