import { useState } from "react"

export default function useGameCollection() {
    const [games, setGames] = useState(() => {
        // pegando valores do localStorage
        const storedGames = localStorage.getItem('obc-game-lib')
        // Caso localStorage for nulo, retorna um array vazio
        if (!storedGames) return []
        // Senao pego os valores do local storage e retorno para o meu games
        const gameArray = JSON.parse(storedGames)
        return gameArray
    })


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

    return {games, addGame, removeGamer}
}