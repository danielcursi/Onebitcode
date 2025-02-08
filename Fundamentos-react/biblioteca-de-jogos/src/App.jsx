import { useState } from "react"

export default function App() {
  const [games, setGames] = useState([])
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = { id, title, cover }
    setGames(state => [...state, game])
  }

  const removeGamer = (id) => {
    // pegando o estado(valores) atual de games e filtrando quem seja com id diferente do passado.
    setGames(state => state.filter(game => game.id !== id))
  }

  // Previnindo o carregamento da pagina e chamando a função de adicionar o jogo no array
  const handleSubmit = ((event) => {
    event.preventDefault()
    addGame({ title, cover })
    // limpando campos de titulo e link
    setTitle('')
    setCover('')
  })

  return (
    <div className="app">
      <h1>Biblioteca de jogos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titulo:</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input
            type="text"
            name="cover"
            id="cover"
            value={cover}
            onChange={(ev) => setCover(ev.target.value)}
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="" />
            <div>
              <h2>{game.title}</h2>
              {/* Chamando funcao de remover item e passando o id pra ela */}
              <button onClick={() => removeGamer(game.id)}>
                Remover
              </button>
            </div>
          </div>))}
      </div>
    </div>
  )
}