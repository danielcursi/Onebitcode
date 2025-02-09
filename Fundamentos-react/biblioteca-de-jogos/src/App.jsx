import { useState } from "react"

export default function App() {
  const [games, setGames] = useState(() => {
    // pegando valores do localStorage
    const storedGames = localStorage.getItem('obc-game-lib')
    // Caso localStorage for nulo, retorna um array vazio
    if (!storedGames) return []
    // Senao pego os valores do local storage e retorno para o meu games
    const gameArray = JSON.parse(storedGames)
    return gameArray
  })
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = { id, title, cover }
    setGames(state => {
      const newState = [...state, game]
      // passando o valor para o localStorage
      localStorage.setItem('obc-game-lib', JSON.stringify(newState))
      return newState
    })
  }

  const removeGamer = (id) => {
    // pegando o estado(valores) atual de games e filtrando quem seja com id diferente do passado.
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem('obc-game-lib', JSON.stringify(newState))
      return newState
    })
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