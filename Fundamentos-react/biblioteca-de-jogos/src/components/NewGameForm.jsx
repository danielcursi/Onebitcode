import { useState } from "react"
import PropTypes from "prop-types"
import Textinput from "./TextInput"

NewGameForm.PropTypes = {
    addGame: PropTypes.func
}

export default function NewGameForm({ addGame }){
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')

      // Previnindo o carregamento da pagina e chamando a função de adicionar o jogo no array
    const handleSubmit = ((event) => {
        event.preventDefault()
        addGame({ title, cover })
        // limpando campos de titulo e link
        setTitle('')
        setCover('')
  })

    return(
        <form onSubmit={handleSubmit}>
        < Textinput label="Titulo:" value={title} setValue={setTitle} />
        < Textinput label="Capa:" value={cover} setValue={setCover} />
        <button type="submit">Adicionar</button>
      </form>
    )
}
