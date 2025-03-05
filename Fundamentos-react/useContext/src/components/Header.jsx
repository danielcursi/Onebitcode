import { useContext } from "react"
<<<<<<< HEAD
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
=======
import UsandoContexto from "../Contexts/UserContext"

export default function Header(){
    const user = useContext(UsandoContexto)
    return (
        <header>
            <h3>Bem vindo, {user.name}.</h3>
        </header>
    )
}
>>>>>>> d30f828325db4e3b0ee9940f73792277b6f200fa
