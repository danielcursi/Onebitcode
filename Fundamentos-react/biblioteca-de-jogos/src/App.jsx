import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"

export default function App() {
  const {games, addGame, removeGamer} = useGameCollection()
  return (
    <div className="app">
      <h1>Biblioteca de jogos</h1>
      < NewGameForm addGame={addGame} />
      <div className="games">
        {games.map((game) => (
          <Game key={game.id} title={game.title} cover={game.cover} onRemove={() => removeGamer(game.id)}/>
          ))}
      </div>
    </div>
  )
}