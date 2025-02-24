import { useContext } from "react"
import UseContext from "../Context/useContext"

const Header = () => {
    const user = useContext(UseContext)
    return (
        <header>
            <h2>Bem vindo, {user.name}</h2>
        </header>
    )
}

export default Header